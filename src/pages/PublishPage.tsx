import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Send, Image as ImageIcon, Type, FileText } from 'lucide-react';
import { supabase } from '../lib/supabase';

export const PublishPage = () => {
  const [title, setTitle] = React.useState('');
  const [summary, setSummary] = React.useState('');
  const [content, setContent] = React.useState('');
  const [category, setCategory] = React.useState('Macroéconomie');
  const [imageUrl, setImageUrl] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Vous devez être connecté pour publier.');

      const { error } = await supabase.from('articles').insert([
        {
          title,
          summary,
          content,
          category,
          image_url: imageUrl,
          author_id: user.id,
          author_name: user.user_metadata.full_name || user.email?.split('@')[0]
        }
      ]);

      if (error) throw error;
      navigate('/');
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] pt-24 pb-20">
      <main className="max-w-4xl mx-auto px-6">
        <header className="mb-12">
          <h1 className="text-4xl font-bold serif italic mb-4">Nouvelle Publication</h1>
          <p className="text-white/40">Partagez vos analyses avec la communauté Économia.</p>
        </header>

        <form onSubmit={handlePublish} className="space-y-8">
          <div className="space-y-6 bg-[#111111] border border-white/5 rounded-3xl p-8">
            <div>
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 mb-3">
                <Type className="w-3 h-3" /> Titre de l'article
              </label>
              <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-transparent text-3xl font-bold serif focus:outline-none placeholder:text-white/10"
                placeholder="Ex: L'avenir de la monnaie numérique..."
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 mb-3">
                  Catégorie
                </label>
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-[#F27D26]"
                >
                  <option value="Macroéconomie">Macroéconomie</option>
                  <option value="Finance">Finance</option>
                  <option value="Microéconomie">Microéconomie</option>
                  <option value="Développement Durable">Développement Durable</option>
                  <option value="Technologie">Technologie</option>
                </select>
              </div>
              <div>
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 mb-3">
                  <ImageIcon className="w-3 h-3" /> Image URL (Optionnel)
                </label>
                <input 
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-[#F27D26]"
                  placeholder="https://images.unsplash.com/..."
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 mb-3">
                <FileText className="w-3 h-3" /> Résumé court
              </label>
              <textarea 
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-[#F27D26] min-h-[100px]"
                placeholder="Un bref aperçu de votre analyse..."
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 mb-3">
                Contenu (Markdown supporté)
              </label>
              <textarea 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-base focus:outline-none focus:border-[#F27D26] min-h-[400px] font-sans leading-relaxed"
                placeholder="Développez votre argumentation ici..."
                required
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button 
              type="submit"
              disabled={loading}
              className="bg-white text-black font-bold px-10 py-4 rounded-2xl flex items-center gap-2 hover:bg-[#F27D26] hover:text-white transition-all disabled:opacity-50 shadow-xl"
            >
              {loading ? 'Publication...' : 'Publier l\'article'}
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};
