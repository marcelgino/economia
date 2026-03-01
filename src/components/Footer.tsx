import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Twitter, Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-lg group-hover:bg-[#F27D26] transition-colors">
                <TrendingUp className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold tracking-tight serif italic">Économia</span>
            </Link>
            <p className="text-white/40 max-w-sm leading-relaxed mb-8">
              Le journal de référence pour les analyses économiques rigoureuses, 
              les décryptages financiers et les prospectives de marché mondiaux.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Plateforme</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><Link to="/" className="hover:text-white transition-colors">Articles</Link></li>
              <li><Link to="/analysis" className="hover:text-white transition-colors">Analyses</Link></li>
              <li><Link to="/reports" className="hover:text-white transition-colors">Rapports</Link></li>
              <li><Link to="/publish" className="hover:text-white transition-colors">Publier</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@economia.com</span>
              </li>
              <li>Port-Au-Prince, Haïti</li>
              <li>Genève, Suisse</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} Économia. Tous droits réservés.
          </p>
          <div className="flex gap-8 text-xs text-white/20">
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
