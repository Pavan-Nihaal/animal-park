import mongoose from 'mongoose';

const seedUsers = async () => {
  console.log('🌱 Seeding users...');
  const users = [
    {
      name: 'Test Customer',
      email: 'test@example.com',
      phone: '+919876543210',
      role: 'customer',
      isVerified: true,
    },
    {
      name: 'Test Doctor',
      email: 'doctor@example.com',
      phone: '+919876543211',
      role: 'doctor',
      isVerified: true,
    },
    {
      name: 'Test Groomer',
      email: 'groomer@example.com',
      phone: '+919876543212',
      role: 'groomer',
      isVerified: true,
    },
    {
      name: 'Admin User',
      email: 'admin@example.com',
      phone: '+919876543213',
      role: 'admin',
      isVerified: true,
    },
  ];
  console.log(`✅ Created ${users.length} users`);
  return users;
};

const seedProducts = async () => {
  console.log('🌱 Seeding products...');
  const categories = ['dog', 'cat'];
  const subcategories = ['food', 'toys', 'accessories', 'grooming', 'health'];
  
  const products = [];
  for (let i = 0; i < 200; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const subcategory = subcategories[Math.floor(Math.random() * subcategories.length)];
    const price = Math.floor(Math.random() * 5000) + 100;

    products.push({
      name: `${category.toUpperCase()} Product ${i + 1}`,
      description: `High quality ${subcategory} for ${category}s`,
      category,
      subcategory,
      price,
      discountedPrice: Math.floor(price * 0.85),
      stock: Math.floor(Math.random() * 100) + 10,
      images: ['https://via.placeholder.com/400'],
      brand: 'Animal Park',
      rating: Math.random() * 2 + 3.5,
      reviewCount: Math.floor(Math.random() * 200),
    });
  }
  console.log(`✅ Created ${products.length} products`);
  return products;
};

const seedDoctors = async () => {
  console.log('🌱 Seeding doctors...');
  const specializations = ['general_veterinary', 'surgery', 'dentistry', 'dermatology'];
  
  const doctors = [];
  for (let i = 0; i < 20; i++) {
    doctors.push({
      name: `Dr. Vet ${i + 1}`,
      specialization: specializations[Math.floor(Math.random() * specializations.length)],
      experience: Math.floor(Math.random() * 20) + 2,
      bio: `Experienced veterinarian`,
      basePrice: Math.floor(Math.random() * 2000) + 500,
      city: 'Delhi',
      rating: Math.random() * 2 + 3.5,
      reviewCount: Math.floor(Math.random() * 100),
      isApproved: true,
    });
  }
  console.log(`✅ Created ${doctors.length} doctors`);
  return doctors;
};

export const seed = async () => {
  try {
    console.log('🌱 Starting database seed...\n');
    await seedUsers();
    await seedProducts();
    await seedDoctors();
    console.log('\n✅ Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
};

seed();
