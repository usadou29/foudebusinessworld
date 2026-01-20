import { useAuth } from '../../context/AuthContext';
import { PlayCircle, Clock } from 'lucide-react';

export default function DashboardHome() {
    const { user } = useAuth();

    return (
        <div>
            <h1 className="text-3xl font-serif text-white mb-2">Bonjour,</h1>
            <p className="text-gray-400 mb-8">Heureux de vous revoir. Voici un aperçu de votre activité.</p>

            {/* Stats / Overview */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-brand-surface border border-white/10 p-6 rounded-xl">
                    <h3 className="text-gray-400 text-sm uppercase font-bold mb-2">Formations Actives</h3>
                    <p className="text-3xl text-white font-bold">0</p>
                </div>
                <div className="bg-brand-surface border border-white/10 p-6 rounded-xl">
                    <h3 className="text-gray-400 text-sm uppercase font-bold mb-2">Progression Globale</h3>
                    <p className="text-3xl text-brand-gold font-bold">0%</p>
                </div>
                <div className="bg-brand-surface border border-white/10 p-6 rounded-xl">
                    <h3 className="text-gray-400 text-sm uppercase font-bold mb-2">Certificats</h3>
                    <p className="text-3xl text-white font-bold">0</p>
                </div>
            </div>

            {/* Recent Activity / Empty State */}
            <div className="bg-brand-surface border border-white/10 rounded-xl p-8 text-center py-16">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                    <PlayCircle className="text-gray-500" size={32} />
                </div>
                <h2 className="text-xl text-white font-bold mb-2">Aucune formation en cours</h2>
                <p className="text-gray-400 mb-6 max-w-sm mx-auto">
                    Vous n'avez pas encore commencé de formation. Explorez le catalogue pour démarrer votre apprentissage.
                </p>
                <a href="/programs" className="inline-flex h-10 items-center justify-center rounded-md bg-brand-gold px-8 text-sm font-medium text-black transition-colors hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-slate-900 duration-300 uppercase tracking-wide">
                    Voir le catalogue
                </a>
            </div>
        </div>
    );
}
