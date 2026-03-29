export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <p className="text-gray-400">🐾 Complete pet care platform for all your needs.</p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Products</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Dog Products</a></li>
              <li><a href="#" className="hover:text-white">Cat Products</a></li>
              <li><a href="#" className="hover:text-white">Bird Products</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Book Doctor</a></li>
              <li><a href="#" className="hover:text-white">Grooming</a></li>
              <li><a href="#" className="hover:text-white">Training</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-gray-400">Email: info@animalpark.com</p>
            <p className="text-gray-400">Phone: +91 98765 43210</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Animal Park. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
