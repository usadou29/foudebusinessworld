import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';


// Assets
const HERO_BG = "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop";


export default function Home() {
    const { t } = useTranslation('common');


    return (
        <div className="bg-brand-dark min-h-screen text-white">
            <SEOHead titleKey="welcome" descriptionKey="tagline" />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-start overflow-hidden pt-20">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={HERO_BG}
                        alt="City skyline at night"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/60 to-transparent"></div>
                    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-brand-dark to-transparent"></div>
                </div>

                <Container className="relative z-10 px-6 lg:px-20">
                    <div className="max-w-4xl space-y-8 animate-slide-up">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] font-medium">
                            {t('home.hero.title_prefix')}<br />
                            {t('home.hero.title_highlight')} - <span className="premium-text-gradient font-bold">{t('home.hero.title_suffix')}</span>
                        </h1>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-brand-gold tracking-[0.2em] font-bold text-sm uppercase">
                            <span>{t('home.pillars.dubai.title')}</span>
                            <span className="h-1 w-1 bg-brand-gold rounded-full opacity-50"></span>
                            <span>{t('home.pillars.china.title')}</span>
                            <span className="h-1 w-1 bg-brand-gold rounded-full opacity-50"></span>
                            <span>{t('home.pillars.georgia.title')}</span>
                            <span className="ml-2 text-white/40 font-normal lowercase tracking-normal">{t('home.hero.subtitle').toLowerCase()}</span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 pt-4">
                            <Button variant="primary" size="lg" href="programs">
                                {t('home.hero.cta_start')}
                            </Button>
                            <Button variant="outline" size="lg" href="contact" className="!bg-black/20 backdrop-blur-sm">
                                {t('home.hero.cta_call')}
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Expands Business Section */}
            <Section className="py-24 bg-brand-dark">
                <Container className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif premium-text-gradient mb-6">
                        {t('countries_page.subtitle')}
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto uppercase tracking-[0.1em] text-xs">
                        {t('home.pillars.dubai.desc')}...
                    </p>
                </Container>

                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Dubai Card */}
                        <div className="group relative aspect-[3/4] overflow-hidden glass hover:border-brand-gold/30 transition-all duration-500">
                            <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" alt="Dubai" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 p-8 space-y-4 w-full">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">🇦🇪</span>
                                    <h3 className="text-2xl font-bold tracking-wider uppercase">{t('home.pillars.dubai.title')}</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">{t('home.pillars.dubai.desc')}</p>
                                <Button variant="primary" size="sm" className="w-fit" href="programs?country=dubai">{t('home.pillars.dubai.cta').toUpperCase()}</Button>
                            </div>
                        </div>

                        {/* China Card */}
                        <div className="group relative aspect-[3/4] overflow-hidden glass hover:border-brand-gold/30 transition-all duration-500">
                            <img src="https://images.unsplash.com/photo-1547434316-24874b32187d?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" alt="China" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 p-8 space-y-4 w-full">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">🇨🇳</span>
                                    <h3 className="text-2xl font-bold tracking-wider uppercase">{t('home.pillars.china.title')}</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">{t('home.pillars.china.desc')}</p>
                                <Button variant="primary" size="sm" className="w-fit" href="programs?country=china">{t('home.pillars.china.cta').toUpperCase()}</Button>
                            </div>
                        </div>

                        {/* Georgia Card */}
                        <div className="group relative aspect-[3/4] overflow-hidden glass hover:border-brand-gold/30 transition-all duration-500">
                            <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2066&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" alt="Georgia" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 p-8 space-y-4 w-full">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">🇬🇪</span>
                                    <h3 className="text-2xl font-bold tracking-wider uppercase">{t('home.pillars.georgia.title')}</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">{t('home.pillars.georgia.desc')}</p>
                                <Button variant="primary" size="sm" className="w-fit" href="programs?country=georgia">{t('home.pillars.georgia.cta').toUpperCase()}</Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Why FouDeBusinessWorld Section */}
            <Section className="py-24 bg-brand-dark border-t border-white/5">
                <Container className="text-center mb-16">
                    <h2 className="text-4xl font-serif premium-text-gradient">{t('home.why.title')}</h2>
                </Container>

                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div className="glass p-8 text-center space-y-4 hover:bg-white/5 transition-colors">
                            <div className="premium-text-gradient text-4xl mx-auto flex justify-center">🌍</div>
                            <h4 className="text-lg font-bold tracking-widest uppercase">{t('home.why.expertise.title')}</h4>
                            <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-tighter">{t('home.why.expertise.desc')}</p>
                        </div>
                        <div className="glass p-8 text-center space-y-4 hover:bg-white/5 transition-colors">
                            <div className="premium-text-gradient text-4xl mx-auto flex justify-center">🤝</div>
                            <h4 className="text-lg font-bold tracking-widest uppercase">{t('home.why.results.title')}</h4>
                            <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-tighter">{t('home.why.results.desc')}</p>
                        </div>
                        <div className="glass p-8 text-center space-y-4 hover:bg-white/5 transition-colors">
                            <div className="premium-text-gradient text-4xl mx-auto flex justify-center">🛡️</div>
                            <h4 className="text-lg font-bold tracking-widest uppercase">{t('home.why.legal.title')}</h4>
                            <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-tighter">{t('home.why.legal.desc')}</p>
                        </div>
                        <div className="glass p-8 text-center space-y-4 hover:bg-white/5 transition-colors">
                            <div className="premium-text-gradient text-4xl mx-auto flex justify-center">👥</div>
                            <h4 className="text-lg font-bold tracking-widest uppercase">{t('home.why.community.title')}</h4>
                            <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-tighter">{t('home.why.community.desc')}</p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Lower Hero Section */}
            <section className="relative h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover" alt="Businessman looking at city" />
                    <div className="absolute inset-0 bg-brand-dark/60"></div>
                </div>
                <Container className="relative z-10 px-6 lg:px-20">
                    <div className="max-w-2xl space-y-6">
                        <h2 className="text-3xl md:text-5xl font-serif">
                            {t('home.hero.title_prefix')} {t('home.hero.title_highlight').toLowerCase()} {t('home.hero.title_suffix').toLowerCase()}<br />
                            <span className="premium-text-gradient font-bold">{t('home.hero.subtitle')}</span>
                        </h2>
                        <div className="flex gap-4 pt-4">
                            <Button variant="primary" size="md">{t('home.hero.cta_start')}</Button>
                            <Button variant="outline" size="md" className="!bg-black/40 backdrop-blur-md">{t('home.hero.cta_call')}</Button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
