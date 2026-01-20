import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';
import SEOHead from '../components/SEOHead';

export default function Home() {
    const { t } = useTranslation('common');

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-brand-dark text-white">
            <SEOHead titleKey="welcome" descriptionKey="tagline" />

            <header className="absolute top-0 right-0 p-4">
                <LanguageSwitcher />
            </header>

            <main className="text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-brand-gold">
                    {t('welcome')}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-300">
                    {t('tagline')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-3 bg-brand-gold text-black font-bold rounded hover:bg-yellow-500 transition shadow-lg shadow-yellow-900/20">
                        {t('cta.start')}
                    </button>

                    <Link to="about" className="px-8 py-3 border border-white rounded hover:bg-white hover:text-black transition">
                        {t('menu.about')}
                    </Link>
                </div>
            </main>

            <footer className="absolute bottom-4 text-gray-500 text-sm">
                {t('footer.rights')}
            </footer>
        </div>
    );
}
