import React from 'react';

/**
 * Footer - 4 Columns
 * 
 * Column 1: Brand info
 * Column 2: Services
 * Column 3: Contact
 * Column 4: Legal
 * 
 * Design: Dark background with clean typography
 */
export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
            <h3 className="font-antonio text-2xl font-bold uppercase mb-4">
              AUTOMAITONS
            </h3>
            <p className="font-archivo text-gray-400 text-sm leading-relaxed">
              Automatización con IA para negocios locales.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-antonio text-lg font-bold uppercase mb-4">
              Servicios
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="font-archivo text-gray-400 hover:text-blue-600 transition-colors duration-300"
                >
                  Sistemas de citas con IA
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-archivo text-gray-400 hover:text-blue-600 transition-colors duration-300"
                >
                  Automatización de WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-archivo text-gray-400 hover:text-blue-600 transition-colors duration-300"
                >
                  Cualificación de leads
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-antonio text-lg font-bold uppercase mb-4">
              Contacto
            </h4>
            <a
              href="mailto:automaitons@gmail.com"
              className="font-archivo text-gray-400 hover:text-blue-600 transition-colors duration-300"
            >
              automaitons@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="font-archivo text-gray-500 text-sm text-center">
            © 2026 AUTOMAITONS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
