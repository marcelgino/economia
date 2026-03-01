import React from 'react';
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
};
