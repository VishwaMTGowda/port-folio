import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10" id="Contact">
      <div className="bg-black p-10 md:p-20 rounded-lg shadow-lg w-full max-w-3xl">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">Get In Touch</h1>
          <p className="text-gray-400 text-sm md:text-base">You can contact me via email</p>
        </div>

        <div className="space-y-6">
          {[ 
            { icon: Mail, title: 'Email', value: 'vishwamtgowda@gmail.com' },
            { icon: Phone, title: 'Phone', value: '+91 8088448697' },
            { icon: MapPin, title: 'Location', value: 'Mangaluru, India' }
          ].map(({ icon: Icon, title, value }, index) => (
            <div key={index} className="bg-[#1E1E1E] rounded-lg p-4 md:p-6 flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-medium text-sm md:text-base">{title}</h3>
                <p className="text-gray-400 text-xs md:text-sm">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center space-x-4 md:space-x-6">
          {[ 
            { href: 'https://www.linkedin.com/in/vishwa-m-t-a49b2b288/', icon: Linkedin },
            { href: 'https://github.com/VishwaMTGowda', icon: Github },
            { href: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSPGFmTrtKjvRvZNwLRmVdHnrsTTbXdqfFBKCnJJcFqcllKPfvKrRhRNTkmSnQrRhcxntHZB', icon: Mail },
            { href: 'https://www.instagram.com/m.r__vishu__/', icon: Instagram }
          ].map(({ href, icon: Icon }, index) => (
            <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="bg-[#1E1E1E] p-3 rounded-full hover:bg-gray-700 transition-colors">
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <footer className="text-center mt-12 text-xs md:text-sm text-gray-500">
          {/* © 2025 DevOps Portfolio. All rights reserved. */}
        </footer>
      </div>
    </div>
  );
}