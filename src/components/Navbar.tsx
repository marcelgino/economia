/*import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TrendingUp, PenTool, User, LogOut, Search } from 'lucide-react';
import { supabase } from '../lib/supabase';

export const Navbar = () => {
  const [user, setUser] = React.useState<any>(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-white flex items-center justify-center rounded-lg group-hover:bg-[#F27D26] transition-colors">
            <TrendingUp className="w-5 h-5 text-black" />
          </div>
          <span className="text-xl font-bold tracking-tight serif italic">Économia</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <Link to="/" className="hover:text-white transition-colors">Articles</Link>
          <Link to="/analysis" className="hover:text-white transition-colors">Analyses</Link>
          <Link to="/reports" className="hover:text-white transition-colors">Rapports</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <Search className="w-5 h-5 text-white/60" />
          </button>
          
          {user ? (
            <div className="flex items-center gap-4">
              <Link 
                to="/publish" 
                className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#F27D26] hover:text-white transition-all"
              >
                <PenTool className="w-4 h-4" />
                Publier
              </Link>
              <button 
                onClick={handleLogout}
                className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/60 hover:text-white"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <Link 
              to="/auth" 
              className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#F27D26] hover:text-white transition-all"
            >
              Connexion
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};*/
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TrendingUp, PenTool, User, LogOut, Search } from 'lucide-react';
import { supabase } from '../lib/supabase';

export const Navbar = () => {
  const [user, setUser] = React.useState<any>(null);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const navigate = useNavigate();

  React.useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real app, we would navigate to a search results page
      // For now, we'll just alert or filter if on homepage (but simpler to just show it works)
      console.log('Searching for:', searchQuery);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-8 h-8 bg-white flex items-center justify-center rounded-lg group-hover:bg-[#F27D26] transition-colors">
            <TrendingUp className="w-5 h-5 text-black" />
          </div>
          <span className="text-xl font-bold tracking-tight serif italic">Économia</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60 mx-8">
          <Link to="/" className="hover:text-white transition-colors">Articles</Link>
          <Link to="/analysis" className="hover:text-white transition-colors">Analyses</Link>
          <Link to="/reports" className="hover:text-white transition-colors">Rapports</Link>
        </div>

        <div className="flex items-center gap-4 flex-1 justify-end">
          <div className={`relative flex items-center transition-all duration-300 ${isSearchOpen ? 'w-full max-w-xs' : 'w-10'}`}>
            {isSearchOpen ? (
              <form onSubmit={handleSearch} className="w-full">
                <input 
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onBlur={() => !searchQuery && setIsSearchOpen(false)}
                  placeholder="Rechercher un article..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-[#F27D26] transition-all"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              </form>
            ) : (
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <Search className="w-5 h-5 text-white/60" />
              </button>
            )}
          </div>
          
          {user ? (
            <div className="flex items-center gap-4">
              <Link 
                to="/publish" 
                className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#F27D26] hover:text-white transition-all"
              >
                <PenTool className="w-4 h-4" />
                Publier
              </Link>
              <button 
                onClick={handleLogout}
                className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/60 hover:text-white"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <Link 
              to="/auth" 
              className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#F27D26] hover:text-white transition-all"
            >
              Connexion
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

