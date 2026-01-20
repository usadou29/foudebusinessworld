import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, User } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import LanguageSwitcher from '../LanguageSwitcher';
import { useAuth } from '../../context/AuthContext';

export default function Header() {
    const { t, i18n } = useTranslation('common');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user } = useAuth();
    const location = useLocation();

    // Helper to close menu on navigation
    const closeMenu = () => setIsMenuOpen(false);

    const menuItems = [
        { label: t('menu.home'), href: '' },
        { label: t('menu.why_us'), href: 'why-us' },
        { label: t('menu.countries'), href: 'countries' },
        { label: t('menu.services'), href: 'services' },
        { label: t('menu.programs'), href: 'programs' },
        { label: t('menu.resources'), href: 'resources' },
        { label: t('menu.about'), href: 'about' },
        { label: t('menu.contact'), href: 'contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-white/10">
            <Container className="flex items-center justify-between h-20">
                {/* Logo */}
                <Link to="." className="flex items-center gap-2" onClick={closeMenu}>
                    <div className="h-8 w-8 bg-brand-gold rounded-full flex items-center justify-center">
                        <Globe className="h-5 w-5 text-brand-dark" />
                    </div>
                    <span className="text-xl font-serif font-bold text-white tracking-wide">
                        FouDeBusiness<span className="text-brand-gold">World</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.href}
                            to={item.href}
                            end={item.href === ''}
                            className={({ isActive }) => `
                text-sm font-medium transition-colors duration-200
                ${isActive ? 'text-brand-gold' : 'text-gray-300 hover:text-white'}
              `}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <LanguageSwitcher />
                    {user ? (
                        <Button variant="primary" size="sm" href={`/${i18n.language || 'fr'}/dashboard`} className="flex items-center gap-2">
                            <User size={16} />
                            Mon Espace
                        </Button>
                    ) : (
                        <Button variant="primary" size="sm" href={`/${i18n.language || 'fr'}/login`}>
                            {t('menu.login')}
                        </Button>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <LanguageSwitcher />
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white p-2 hover:bg-white/10 rounded-md transition"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </Container>

            {/* Mobile Drawer */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 right-0 bg-brand-surface border-b border-white/10 animate-fade-in">
                    <nav className="flex flex-col p-4 gap-2">
                        {menuItems.map((item) => (
                            <NavLink
                                key={item.href}
                                to={item.href}
                                end={item.href === ''}
                                onClick={closeMenu}
                                className={({ isActive }) => `
                  px-4 py-3 rounded-md text-base font-medium transition-colors
                  ${isActive ? 'bg-brand-gold/10 text-brand-gold' : 'text-gray-300 hover:bg-white/5'}
                `}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                        <div className="mt-4 pt-4 border-t border-white/10">
                            <Button href={`/${i18n.language || 'fr'}/login`} fullWidth>
                                {t('menu.login')}
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
