import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import { Globe, Mail, Phone } from 'lucide-react';

export default function Footer() {
    const { t } = useTranslation('common');
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-white/10 py-12 text-sm text-gray-400">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="." className="flex items-center gap-2 mb-4 text-white">
                            <Globe className="h-5 w-5 text-brand-gold" />
                            <span className="font-serif font-bold">FouDeBusinessWorld</span>
                        </Link>
                        <p className="mb-4">{t('tagline')}</p>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">{t('footer.columns.countries')}</h4>
                        <ul className="space-y-2">
                            <li><Link to="programs?country=dubai" className="hover:text-brand-gold">{t('home.pillars.dubai.title')}</Link></li>
                            <li><Link to="programs?country=china" className="hover:text-brand-gold">{t('home.pillars.china.title')}</Link></li>
                            <li><Link to="programs?country=georgia" className="hover:text-brand-gold">{t('home.pillars.georgia.title')}</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">{t('footer.columns.company')}</h4>
                        <ul className="space-y-2">
                            <li><Link to="about" className="hover:text-brand-gold">{t('menu.about')}</Link></li>
                            <li><Link to="contact" className="hover:text-brand-gold">{t('menu.contact')}</Link></li>
                            <li><Link to="privacy" className="hover:text-brand-gold">{t('footer.links.privacy')}</Link></li>
                            <li><Link to="terms" className="hover:text-brand-gold">{t('footer.links.terms')}</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">{t('footer.columns.contact')}</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="text-brand-gold" />
                                <a href="mailto:contact@foudebusinessworld.com" className="hover:text-white">contact@foudebusiness.com</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={16} className="text-brand-gold" />
                                <span>+971 50 123 4567</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center bg-black">
                    <p>&copy; {currentYear} FouDeBusinessWorld. {t('footer.rights')}</p>
                    <p className="mt-2 md:mt-0 opacity-50 text-xs">
                        {t('footer.disclaimer')}
                    </p>
                </div>
            </Container>
        </footer>
    );
}
