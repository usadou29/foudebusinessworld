import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

// Temporary assets placeholders (to be replaced by real imports or URLs)
const HERO_BG = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";

export default function Home() {
    const { t } = useTranslation('common');

    return (
        <>
            <SEOHead titleKey="welcome" descriptionKey="tagline" />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={HERO_BG}
                        alt="Business Skyline"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark"></div>
                </div>

                <Container className="relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white animate-slide-up">
                        {t('home.hero.title_prefix')} <span className="text-brand-gold">{t('home.hero.title_highlight')}</span> <br />
                        {t('home.hero.title_suffix')}
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto animate-fade-in delay-200">
                        {t('home.hero.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
                        <Button variant="primary" size="lg" href="programs">
                            {t('home.hero.cta_start')}
                        </Button>
                        <Button variant="outline" size="lg" href="contact">
                            {t('home.hero.cta_call')}
                        </Button>
                    </div>
                </Container>
            </section>

            {/* Pillars Preview */}
            <Section className="relative z-20 -mt-20 pt-0 bg-transparent">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="p-8 text-center" hoverEffect>
                            <div className="text-4xl mb-4">🇦🇪</div>
                            <h3 className="text-2xl font-serif font-bold text-brand-gold mb-3">{t('home.pillars.dubai.title')}</h3>
                            <p className="text-gray-400 mb-6">{t('home.pillars.dubai.desc')}</p>
                            <Button variant="outline" size="sm" fullWidth href="programs?country=dubai">
                                {t('home.pillars.dubai.cta')}
                            </Button>
                        </Card>
                        <Card className="p-8 text-center" hoverEffect>
                            <div className="text-4xl mb-4">🇨🇳</div>
                            <h3 className="text-2xl font-serif font-bold text-brand-gold mb-3">{t('home.pillars.china.title')}</h3>
                            <p className="text-gray-400 mb-6">{t('home.pillars.china.desc')}</p>
                            <Button variant="outline" size="sm" fullWidth href="programs?country=china">
                                {t('home.pillars.china.cta')}
                            </Button>
                        </Card>
                        <Card className="p-8 text-center" hoverEffect>
                            <div className="text-4xl mb-4">🇬🇪</div>
                            <h3 className="text-2xl font-serif font-bold text-brand-gold mb-3">{t('home.pillars.georgia.title')}</h3>
                            <p className="text-gray-400 mb-6">{t('home.pillars.georgia.desc')}</p>
                            <Button variant="outline" size="sm" fullWidth href="programs?country=georgia">
                                {t('home.pillars.georgia.cta')}
                            </Button>
                        </Card>
                    </div>
                </Container>
            </Section>

            {/* Why Us Section */}
            <Section darker>
                <Container className="text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-gold mb-12">
                        {t('home.why.title')}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-4">
                            <div className="text-brand-gold text-4xl mb-4">🌍</div>
                            <h4 className="text-xl font-bold text-white mb-2">{t('home.why.expertise.title')}</h4>
                            <p className="text-gray-400 text-sm">{t('home.why.expertise.desc')}</p>
                        </div>
                        <div className="p-4">
                            <div className="text-brand-gold text-4xl mb-4">⚖️</div>
                            <h4 className="text-xl font-bold text-white mb-2">{t('home.why.legal.title')}</h4>
                            <p className="text-gray-400 text-sm">{t('home.why.legal.desc')}</p>
                        </div>
                        <div className="p-4">
                            <div className="text-brand-gold text-4xl mb-4">🤝</div>
                            <h4 className="text-xl font-bold text-white mb-2">{t('home.why.results.title')}</h4>
                            <p className="text-gray-400 text-sm">{t('home.why.results.desc')}</p>
                        </div>
                        <div className="p-4">
                            <div className="text-brand-gold text-4xl mb-4">💎</div>
                            <h4 className="text-xl font-bold text-white mb-2">{t('home.why.community.title')}</h4>
                            <p className="text-gray-400 text-sm">{t('home.why.community.desc')}</p>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
