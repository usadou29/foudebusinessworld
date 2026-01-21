
import SEOHead from '../components/SEOHead';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';


// Assets
const HERO_BG = "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop";


export default function Home() {


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
                            Build Your International<br />
                            Business - <span className="premium-text-gradient font-bold">Legally &<br />Strategically</span>
                        </h1>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-brand-gold tracking-[0.2em] font-bold text-sm uppercase">
                            <span>Dubai</span>
                            <span className="h-1 w-1 bg-brand-gold rounded-full opacity-50"></span>
                            <span>China</span>
                            <span className="h-1 w-1 bg-brand-gold rounded-full opacity-50"></span>
                            <span>Georgia</span>
                            <span className="ml-2 text-white/40 font-normal lowercase tracking-normal">join the elite francophone network for</span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 pt-4">
                            <Button variant="primary" size="lg" href="programs">
                                Start Your Training
                            </Button>
                            <Button variant="outline" size="lg" href="contact" className="!bg-black/20 backdrop-blur-sm">
                                Book a Call
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Expands Business Section */}
            <Section className="py-24 bg-brand-dark">
                <Container className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif premium-text-gradient mb-6">
                        Expand Businesss in Dubai, China, or Georgia?
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto uppercase tracking-[0.1em] text-xs">
                        Learn how to create and grow your business internationally with our tailored guidance...
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
                                    <h3 className="text-2xl font-bold tracking-wider uppercase">Dubai</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">Online training tailored by country and topic</p>
                                <Button variant="primary" size="sm" className="w-fit" href="programs?country=dubai">EXPLORE</Button>
                            </div>
                        </div>

                        {/* China Card */}
                        <div className="group relative aspect-[3/4] overflow-hidden glass hover:border-brand-gold/30 transition-all duration-500">
                            <img src="https://images.unsplash.com/photo-1547434316-24874b32187d?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" alt="China" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 p-8 space-y-4 w-full">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">🇨🇳</span>
                                    <h3 className="text-2xl font-bold tracking-wider uppercase">China</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">Personalized coaching for setup, import-export, and holding</p>
                                <Button variant="primary" size="sm" className="w-fit" href="programs?country=china">GET STARTED</Button>
                            </div>
                        </div>

                        {/* Georgia Card */}
                        <div className="group relative aspect-[3/4] overflow-hidden glass hover:border-brand-gold/30 transition-all duration-500">
                            <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2066&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" alt="Georgia" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 p-8 space-y-4 w-full">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">🇬🇪</span>
                                    <h3 className="text-2xl font-bold tracking-wider uppercase">Georgia</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">Premium on-ground support in Dubai, China, and Georgia</p>
                                <Button variant="primary" size="sm" className="w-fit" href="programs?country=georgia">LEARN MORE</Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Why FouDeBusinessWorld Section */}
            <Section className="py-24 bg-brand-dark border-t border-white/5">
                <Container className="text-center mb-16">
                    <h2 className="text-4xl font-serif premium-text-gradient">Why FouDeBusinessWorld?</h2>
                </Container>

                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div className="glass p-8 text-center space-y-4 hover:bg-white/5 transition-colors">
                            <div className="premium-text-gradient text-4xl mx-auto flex justify-center">🌍</div>
                            <h4 className="text-lg font-bold tracking-widest uppercase">Global Expertise</h4>
                            <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-tighter">Gedisga if ici sirate taitone senporty and Real business sectors expat.</p>
                        </div>
                        <div className="glass p-8 text-center space-y-4 hover:bg-white/5 transition-colors">
                            <div className="premium-text-gradient text-4xl mx-auto flex justify-center">🤝</div>
                            <h4 className="text-lg font-bold tracking-widest uppercase">Real Results</h4>
                            <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-tighter">Gedisga if ici sirate taitone senporty and Real business sectors expat.</p>
                        </div>
                        <div className="glass p-8 text-center space-y-4 hover:bg-white/5 transition-colors">
                            <div className="premium-text-gradient text-4xl mx-auto flex justify-center">🛡️</div>
                            <h4 className="text-lg font-bold tracking-widest uppercase">Secure & Legal</h4>
                            <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-tighter">Gedisga if ici sirate taitone senporty and Real business sectors expat.</p>
                        </div>
                        <div className="glass p-8 text-center space-y-4 hover:bg-white/5 transition-colors">
                            <div className="premium-text-gradient text-4xl mx-auto flex justify-center">👥</div>
                            <h4 className="text-lg font-bold tracking-widest uppercase">Premium Community</h4>
                            <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-tighter">Gedisga if ici sirate taitone senporty and Real business sectors expat.</p>
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
                            The proven path to creating and growing your international business<br />
                            <span className="premium-text-gradient font-bold">in Dubai, China & Georgia</span>
                        </h2>
                        <div className="flex gap-4 pt-4">
                            <Button variant="primary" size="md">Start Your Training</Button>
                            <Button variant="outline" size="md" className="!bg-black/40 backdrop-blur-md">Book a Call</Button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
