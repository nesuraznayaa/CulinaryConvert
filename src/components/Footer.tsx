import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 text-white font-bold text-lg mb-2">
            <span className="text-xl">🥄</span> CulinaryConvert
          </div>
          <p className="text-sm leading-relaxed">
            Precise culinary measurements for home bakers and professional chefs. Convert
            volumes to weight and scale recipes to any pan size — instantly.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-1.5 text-sm">
            <li><Link to="/" className="hover:text-amber-400 transition-colors">Cups to Grams Converter</Link></li>
            <li><Link to="/" className="hover:text-amber-400 transition-colors">Pan Size Calculator</Link></li>
            <li><Link to="/tips" className="hover:text-amber-400 transition-colors">Baking Tips & Guides</Link></li>
            <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-3">Legal</h3>
          <ul className="space-y-1.5 text-sm">
            <li><Link to="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact Us</Link></li>
            <li>
              <span className="text-xs">
                Measurement data sourced from USDA FoodData Central and standard culinary references.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-xs">
        © {new Date().getFullYear()} CulinaryConvert. All rights reserved.
      </div>
    </footer>
  );
}
