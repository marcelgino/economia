import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, User } from 'lucide-react';
import { motion } from 'motion/react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  index: number;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-[#111111] border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500"
    >
      <Link to={`/article/${article.id}`} className="block">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={article.image_url || `https://picsum.photos/seed/${article.id}/800/450`}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#F27D26] px-2 py-1 bg-[#F27D26]/10 rounded">
              {article.category}
            </span>
            <div className="flex items-center gap-1 text-[10px] text-white/40 uppercase tracking-widest font-mono">
              <Clock className="w-3 h-3" />
              {format(new Date(article.created_at), 'dd MMM yyyy', { locale: fr })}
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 serif leading-tight group-hover:text-[#F27D26] transition-colors">
            {article.title}
          </h3>
          
          <p className="text-white/60 text-sm line-clamp-2 mb-6 leading-relaxed">
            {article.summary}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <User className="w-3 h-3 text-white/60" />
              </div>
              <span className="text-xs text-white/60 font-medium">{article.author_name}</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
