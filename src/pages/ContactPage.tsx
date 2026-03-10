import React from 'react';
import { motion } from 'motion/react';
import { Mail, Send, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const ContactPage = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError("EmailJS n'est pas configuré. Veuillez ajouter les variables d'environnement.");
      setLoading(false);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'contact@economia.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      console.error('EmailJS Error:', err);
      setError("Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#050505]">
      <main className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold serif italic mb-8 tracking-tighter">
              Parlons <br />
              <span className="text-[#F27D26]">Économie.</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-12 max-w-lg">
              Vous avez une question, une proposition de partenariat ou vous souhaitez contribuer ? 
              Notre équipe est à votre écoute.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#F27D26]" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-white/40">contact@economia.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#F27D26]" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Bureaux</h4>
                  <p className="text-white/40">12 Rue de la Bourse, 75002 Paris</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#F27D26]" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Téléphone</h4>
                  <p className="text-white/40">+33 (0)1 23 45 67 89</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-12"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-[#F27D26]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Send className="w-10 h-10 text-[#F27D26]" />
                </div>
                <h2 className="text-3xl font-bold serif mb-4">Message envoyé !</h2>
                <p className="text-white/40 mb-8">Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-[#F27D26] font-bold hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Nom complet</label>
                    <input 
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-sm focus:outline-none focus:border-[#F27D26] transition-colors"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Email</label>
                    <input 
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-sm focus:outline-none focus:border-[#F27D26] transition-colors"
                      placeholder="jean@exemple.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Sujet</label>
                  <input 
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-sm focus:outline-none focus:border-[#F27D26] transition-colors"
                    placeholder="Proposition d'article, Question..."
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Message</label>
                  <textarea 
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-sm focus:outline-none focus:border-[#F27D26] transition-colors resize-none"
                    placeholder="Comment pouvons-nous vous aider ?"
                  />
                </div>

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs font-medium">
                    {error}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-white text-black font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#F27D26] hover:text-white transition-all disabled:opacity-50"
                >
                  {loading ? 'Envoi en cours...' : 'Envoyer le message'}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
};
