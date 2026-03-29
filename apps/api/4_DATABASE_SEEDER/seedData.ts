import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User } from '../src/models/User';
import { Product } from '../src/models/Product';
import { Doctor } from '../src/models/Doctor';

dotenv.config({ path: '../../../.env.local' });

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://admin:admin123@localhost:27017/animal-park?authSource=admin');
    console.log('✓ Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Product.deleteMany({});
    await Doctor.deleteMany({});
    console.log('✓ Cleared existing data');

    // Seed Users
    const users = await User.insertMany([
      {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
        role: 'customer',
        isVerified: true,
      },
      {
        name: 'Dr. Sarah Smith',
        email: 'sarah@example.com',
        password: 'password123',
        role: 'doctor',
        isVerified: true,
      },
      {
        name: 'Admin User',
        email: 'admin@example.com',
        password: 'password123',
        role: 'admin',
        isVerified: true,
      },
    ]);
    console.log(`✓ Created ${users.length} users`);

    // Seed Products
    const products = await Product.insertMany([
      {
        name: 'Premium Dog Food',
        description: 'High-quality nutritious dog food',
        category: 'dog',
        subcategory: 'food',
        price: 599,
        stock: 50,
        images: ['https://via.placeholder.com/400?text=Dog+Food'],
        brand: 'PetPro',
        rating: 4.5,
        reviewCount: 120,
        sku: 'DF-001',
      },
      {
        name: 'Dog Collar & Leash',
        description: 'Durable leather dog collar with leash',
        category: 'dog',
        subcategory: 'accessories',
        price: 299,
        stock: 30,
        images: ['https://via.placeholder.com/400?text=Dog+Collar'],
        brand: 'PetPro',
        rating: 4.2,
        reviewCount: 85,
        sku: 'DC-001',
      },
      {
        name: 'Cat Premium Food',
        description: 'Balanced nutrition for cats',
        category: 'cat',
        subcategory: 'food',
        price: 449,
        stock: 40,
        images: ['https://via.placeholder.com/400?text=Cat+Food'],
        brand: 'FelinePro',
        rating: 4.6,
        reviewCount: 95,
        sku: 'CF-001',
      },
      {
        name: 'Cat Litter Box',
        description: 'Self-cleaning cat litter box',
        category: 'cat',
        subcategory: 'accessories',
        price: 2499,
        stock: 15,
        images: ['https://via.placeholder.com/400?text=Litter+Box'],
        brand: 'FelinePro',
        rating: 4.3,
        reviewCount: 60,
        sku: 'CL-001',
      },
      {
        name: 'Bird Cage',
        description: 'Spacious stainless steel bird cage',
        category: 'bird',
        subcategory: 'housing',
        price: 3999,
        stock: 10,
        images: ['https://via.placeholder.com/400?text=Bird+Cage'],
        brand: 'BirdHome',
        rating: 4.4,
        reviewCount: 45,
        sku: 'BC-001',
      },
      {
        name: 'Bird Food Mix',
        description: 'Nutritious bird food mix',
        category: 'bird',
        subcategory: 'food',
        price: 349,
        stock: 50,
        images: ['https://via.placeholder.com/400?text=Bird+Food'],
        brand: 'BirdHome',
        rating: 4.1,
        reviewCount: 30,
        sku: 'BF-001',
      },
      {
        name: 'Fish Tank Filter',
        description: 'Advanced aquarium filter system',
        category: 'fish',
        subcategory: 'equipment',
        price: 1999,
        stock: 20,
        images: ['https://via.placeholder.com/400?text=Fish+Filter'],
        brand: 'AquaPro',
        rating: 4.5,
        reviewCount: 70,
        sku: 'FF-001',
      },
      {
        name: 'Fish Food Pellets',
        description: 'Premium fish food pellets',
        category: 'fish',
        subcategory: 'food',
        price: 199,
        stock: 100,
        images: ['https://via.placeholder.com/400?text=Fish+Food'],
        brand: 'AquaPro',
        rating: 4.2,
        reviewCount: 50,
        sku: 'FP-001',
      },
    ]);
    console.log(`✓ Created ${products.length} products`);

    // Seed Doctors
    const doctors = await Doctor.insertMany([
      {
        userId: users[1]._id,
        specialization: 'general_veterinary',
        experience: 8,
        bio: 'Experienced veterinary doctor with 8 years of practice',
        basePrice: 500,
        city: 'Mumbai',
        rating: 4.8,
        reviewCount: 150,
        isApproved: true,
        availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      },
      {
        userId: users[2]._id,
        specialization: 'surgery',
        experience: 12,
        bio: 'Specialized in pet surgery and orthopedics',
        basePrice: 1000,
        city: 'Delhi',
        rating: 4.9,
        reviewCount: 200,
        isApproved: true,
        availability: ['Monday', 'Wednesday', 'Friday'],
      },
    ]);
    console.log(`✓ Created ${doctors.length} doctors`);

    console.log('\n✅ Database seeded successfully!\n');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
};

seedDatabase();
