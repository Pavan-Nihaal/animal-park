import { Request, Response } from 'express';
import { Doctor } from '../models/Doctor';

export const getDoctors = async (req: Request, res: Response) => {
  try {
    const { specialization, city, page = 1, limit = 20 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const query: any = { isApproved: true };
    if (specialization) query.specialization = specialization;
    if (city) query.city = city;

    const doctors = await Doctor.find(query).skip(skip).limit(Number(limit)).populate('userId');
    const total = await Doctor.countDocuments(query);

    res.json({
      success: true,
      data: doctors,
      pagination: { total, page: Number(page), limit: Number(limit) },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch doctors', error });
  }
};

export const getDoctorById = async (req: Request, res: Response) => {
  try {
    const doctor = await Doctor.findById(req.params.id).populate('userId');
    if (!doctor) {
      return res.status(404).json({ success: false, message: 'Doctor not found' });
    }
    res.json({ success: true, data: doctor });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch doctor', error });
  }
};

export const createDoctor = async (req: Request, res: Response) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json({ success: true, data: doctor, message: 'Doctor profile created' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create doctor profile', error });
  }
};
