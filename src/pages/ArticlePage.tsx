import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { ArrowLeft, Clock, User, Share2, Bookmark } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Article } from '../types';

export const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = React.useState<Article | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchArticle = async () => {
      // In a real app, we'd fetch from Supabase
      // For now, we'll use mock data or try to fetch
      try {
        const { data, error } = await supabase
          .from('articles')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setArticle(data);
      } catch (err) {
        // Fallback to mock if not found in DB
        console.log('Article not found in DB, using mock');
        const mockArticles = [
          {
            id: '1',
            title: "L'impact de l'intelligence artificielle sur le marché de l'emploi européen",
            summary: "Une analyse approfondie des mutations structurelles induites par l'automatisation intelligente dans les secteurs tertiaires.",
            content: `
## Introduction
L'intelligence artificielle (IA) n'est plus une simple promesse technologique ; elle est devenue un moteur de transformation économique majeur au sein de l'Union Européenne. 

## Les Secteurs en Mutation
Le secteur tertiaire, autrefois considéré comme le bastion de l'emploi qualifié, est aujourd'hui en première ligne. Les algorithmes de traitement du langage naturel et les systèmes d'aide à la décision redéfinissent les rôles dans la finance, le droit et le conseil.

### Automatisation vs Augmentation
Il est crucial de distinguer l'automatisation de tâches de l'automatisation de métiers complets. La plupart des études suggèrent que l'IA agira davantage comme un multiplicateur de compétences que comme un substitut pur.

## Conclusion
L'Europe doit investir massivement dans la formation continue pour accompagner cette transition et garantir que les gains de productivité profitent à l'ensemble de la société.
            `,
            author_id: 'u1',
            author_name: 'Jean Dupont',
            category: 'Macroéconomie',
            created_at: new Date().toISOString(),
            image_url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000'
          }
        ];
        const found = mockArticles.find(a => a.id === id);
        if (found) setArticle(found as Article);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) return <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white/40">Chargement...</div>;
  if (!article) return <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white/40">Article non trouvé</div>;

  return (
    <div className="min-h-screen bg-[#050505] pb-20">
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img 
          src={article.image_url} 
          className="w-full h-full object-cover opacity-40"
          alt={article.title}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-6 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors text-sm font-medium">
              <ArrowLeft className="w-4 h-4" /> Retour aux articles
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F27D26] px-3 py-1 bg-[#F27D26]/10 rounded-full">
                {article.category}
              </span>
              <div className="flex items-center gap-2 text-xs text-white/40 uppercase tracking-widest font-mono">
                <Clock className="w-4 h-4" />
                {format(new Date(article.created_at), 'dd MMMM yyyy', { locale: fr })}
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold serif leading-tight mb-8">
              {article.title}
            </h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <User className="w-6 h-6 text-white/60" />
                </div>
                <div>
                  <p className="text-sm font-bold">{article.author_name}</p>
                  <p className="text-xs text-white/40">Analyste Économique</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                  <Share2 className="w-5 h-5 text-white/60" />
                </button>
                <button className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                  <Bookmark className="w-5 h-5 text-white/60" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 pt-12">
        <div className="article-content markdown-body">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
      </main>
    </div>
  );
};
