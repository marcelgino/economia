/*import React from 'react';
import { motion } from 'motion/react';
import { Article } from '../types';
import { ArticleCard } from '../components/ArticleCard';
import { supabase } from '../lib/supabase';

const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: "L'impact de l'intelligence artificielle sur le marché de l'emploi européen",
    summary: "Une analyse approfondie des mutations structurelles induites par l'automatisation intelligente dans les secteurs tertiaires.",
    content: "Content here...",
    author_id: 'u1',
    author_name: 'Jean Dupont',
    category: 'Macroéconomie',
    created_at: new Date().toISOString(),
    image_url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '2',
    title: "Inflation et politiques monétaires : Le dilemme de la BCE",
    summary: "Comment la Banque Centrale Européenne navigue entre stabilité des prix et soutien à la croissance dans un contexte géopolitique instable.",
    content: "Content here...",
    author_id: 'u2',
    author_name: 'Marie Curie',
    category: 'Finance',
    created_at: new Date().toISOString(),
    image_url: 'https://images.unsplash.com/photo-1611974717483-5828d0001ad3?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '3',
    title: "Économie circulaire : Vers un nouveau paradigme industriel",
    summary: "Étude des modèles économiques durables et de leur viabilité à long terme face aux défis climatiques mondiaux.",
    content: "Content here...",
    author_id: 'u3',
    author_name: 'Paul Valéry',
    category: 'Développement Durable',
    created_at: new Date().toISOString(),
    image_url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '4',
    title: "La Blockchain au service de la transparence financière",
    summary: "Comment les technologies de registre distribué révolutionnent l'audit et la conformité dans le secteur bancaire.",
    content: "Content here...",
    author_id: 'u4',
    author_name: 'Alan Turing',
    category: 'Technologie',
    created_at: new Date().toISOString(),
    image_url: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000'
  }
];

export const HomePage = () => {
  const [articles, setArticles] = React.useState<Article[]>(MOCK_ARTICLES);
  const [filter, setFilter] = React.useState('Tout');
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data, error } = await supabase
          .from('articles')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        
        // Combine mock and real data for demo purposes, or just use real data
        // If there's real data, we use it. If not, we keep mock.
        if (data && data.length > 0) {
          setArticles([...data, ...MOCK_ARTICLES]);
        } else {
          setArticles(MOCK_ARTICLES);
        }
      } catch (err) {
        console.error('Error fetching articles:', err);
        setArticles(MOCK_ARTICLES);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles = articles.filter(article => {
    if (filter === 'Tout') return true;
    if (filter === 'Macro') return article.category.includes('Macro');
    if (filter === 'Finance') return article.category === 'Finance';
    if (filter === 'Tech') return article.category === 'Technologie';
    return true;
  });

  return (
    <div className="min-h-screen pt-24 pb-20">
      <main className="max-w-7xl mx-auto px-6">
        <header className="py-20 border-b border-white/5 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold serif italic mb-8 tracking-tighter">
              Perspectives <br />
              <span className="text-[#F27D26]">Économiques.</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
              Le journal de référence pour les analyses économiques rigoureuses, 
              les décryptages financiers et les prospectives de marché.
            </p>
          </motion.div>
        </header>

        <section>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <h2 className="text-2xl font-bold serif">Dernières publications</h2>
            <div className="flex flex-wrap gap-2">
              {['Tout', 'Macro', 'Finance', 'Tech'].map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all ${
                    filter === cat 
                      ? 'bg-white text-black border-white' 
                      : 'border-white/10 text-white/40 hover:border-white/40 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="text-center py-20 text-white/20 font-mono text-sm uppercase tracking-widest">
              Chargement des analyses...
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          )}
          
          {!loading && filteredArticles.length === 0 && (
            <div className="text-center py-20 text-white/20 font-mono text-sm uppercase tracking-widest border border-dashed border-white/5 rounded-3xl">
              Aucun article trouvé dans cette catégorie.
            </div>
          )}
        </section>
      </main>
    </div>
  );
};*/
import React from 'react';
import { motion } from 'motion/react';
import { Article } from '../types';
import { ArticleCard } from '../components/ArticleCard';
import { supabase } from '../lib/supabase';

const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: "L'impact de l'intelligence artificielle sur le marché de l'emploi européen",
    summary: "Une analyse approfondie des mutations structurelles induites par l'automatisation intelligente dans les secteurs tertiaires.",
    content: "Content here...",
    author_id: 'u1',
    author_name: 'Jean Dupont',
    category: 'Macroéconomie',
    created_at: new Date().toISOString(),
    image_url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '2',
    title: "Inflation et politiques monétaires : Le dilemme de la BCE",
    summary: "Comment la Banque Centrale Européenne navigue entre stabilité des prix et soutien à la croissance dans un contexte géopolitique instable.",
    content: "Content here...",
    author_id: 'u2',
    author_name: 'Marie Curie',
    category: 'Finance',
    created_at: new Date().toISOString(),
    image_url: 'https://images.unsplash.com/photo-1611974717483-5828d0001ad3?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '3',
    title: "Économie circulaire : Vers un nouveau paradigme industriel",
    summary: "Étude des modèles économiques durables et de leur viabilité à long terme face aux défis climatiques mondiaux.",
    content: "Content here...",
    author_id: 'u3',
    author_name: 'Paul Valéry',
    category: 'Développement Durable',
    created_at: new Date().toISOString(),
    image_url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '4',
    title: "La Blockchain au service de la transparence financière",
    summary: "Comment les technologies de registre distribué révolutionnent l'audit et la conformité dans le secteur bancaire.",
    content: "Content here...",
    author_id: 'u4',
    author_name: 'Alan Turing',
    category: 'Technologie',
    created_at: new Date().toISOString(),
    image_url: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000'
  }
];

export const HomePage = () => {
  const [articles, setArticles] = React.useState<Article[]>(MOCK_ARTICLES);
  const [filter, setFilter] = React.useState('Tout');
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data, error } = await supabase
          .from('articles')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        
        // Combine mock and real data for demo purposes, or just use real data
        // If there's real data, we use it. If not, we keep mock.
        if (data && data.length > 0) {
          setArticles([...data, ...MOCK_ARTICLES]);
        } else {
          setArticles(MOCK_ARTICLES);
        }
      } catch (err) {
        console.error('Error fetching articles:', err);
        setArticles(MOCK_ARTICLES);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles = articles.filter(article => {
    if (filter === 'Tout') return true;
    if (filter === 'Macro') return article.category.includes('Macro');
    if (filter === 'Finance') return article.category === 'Finance';
    if (filter === 'Tech') return article.category === 'Technologie';
    return true;
  });

  return (
    <div className="min-h-screen pt-24 pb-20">
      <main className="max-w-7xl mx-auto px-6">
        <header className="py-20 border-b border-white/5 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold serif italic mb-8 tracking-tighter">
              Perspectives <br />
              <span className="text-[#F27D26]">Économiques.</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-12">
              Le journal de référence pour les analyses économiques rigoureuses, 
              les décryptages financiers et les prospectives de marché.
            </p>
            <div className="border-l-2 border-[#F27D26] pl-6 py-2 italic text-white/40 max-w-xl">
              "L'économie est une science de la pensée, pas une science de la nature."
              <span className="block text-xs font-bold uppercase tracking-widest mt-2 not-italic">— John Maynard Keynes</span>
            </div>
          </motion.div>
        </header>

        <section>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <h2 className="text-2xl font-bold serif">Dernières publications</h2>
            <div className="flex flex-wrap gap-2">
              {['Tout', 'Macro', 'Finance', 'Tech'].map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all ${
                    filter === cat 
                      ? 'bg-white text-black border-white' 
                      : 'border-white/10 text-white/40 hover:border-white/40 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="text-center py-20 text-white/20 font-mono text-sm uppercase tracking-widest">
              Chargement des analyses...
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          )}
          
          {!loading && filteredArticles.length === 0 && (
            <div className="text-center py-20 text-white/20 font-mono text-sm uppercase tracking-widest border border-dashed border-white/5 rounded-3xl">
              Aucun article trouvé dans cette catégorie.
            </div>
          )}
        </section>
      </main>
    </div>
  );
};


