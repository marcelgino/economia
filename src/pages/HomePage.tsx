import { motion } from "framer-motion";
import { Article } from '../types';
import { ArticleCard } from '../components/ArticleCard';

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
  }
];

export const HomePage = () => {
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
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-bold serif">Dernières publications</h2>
            <div className="flex gap-2">
              {['Tout', 'Macro', 'Finance', 'Tech'].map((cat) => (
                <button 
                  key={cat}
                  className="px-4 py-1.5 rounded-full border border-white/10 text-xs font-medium hover:bg-white hover:text-black transition-all"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_ARTICLES.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
