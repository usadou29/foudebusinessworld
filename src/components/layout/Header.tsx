import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import LanguageSwitcher from '../LanguageSwitcher';
import { useAuth } from '../../context/AuthContext';

export default function Header() {
    const { t, i18n } = useTranslation('common');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user } = useAuth();

    // Helper to close menu on navigation
    const closeMenu = () => setIsMenuOpen(false);

    const navItems = [
        { label: t('menu.home').toUpperCase(), href: '' },
        { label: t('menu.why_us').toUpperCase(), href: 'why-us' },
        { label: t('menu.countries').toUpperCase(), href: 'countries' },
        { label: t('menu.services').toUpperCase(), href: 'services' },
        { label: t('menu.programs').toUpperCase(), href: 'programs' },
        { label: t('menu.resources').toUpperCase(), href: 'resources' },
        { label: t('menu.about').toUpperCase(), href: 'about' },
        { label: t('menu.contact').toUpperCase(), href: 'contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/5">
            <Container className="flex items-center justify-between h-20">
                {/* Logo */}
                <Link to="." className="flex items-center gap-2" onClick={closeMenu}>
                    <span className="text-sm font-bold text-white tracking-[0.2em] uppercase">
                        FouDeBusiness<span className="text-brand-gold">World</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden xl:flex items-center gap-6">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.href}
                            to={item.href}
                            end={item.href === ''}
                            className={({ isActive }) => `
                text-[10px] font-bold tracking-[0.15em] transition-all duration-300 uppercase
                ${isActive ? 'text-brand-gold' : 'text-gray-400 hover:text-white'}
              `}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden xl:flex items-center gap-4">
                    <LanguageSwitcher />
                    {user ? (
                        <Button variant="outline" size="sm" href={`/${i18n.language || 'fr'}/dashboard`} className="!text-[10px]">
                            {(t('menu.dashboard') || 'DASHBOARD').toUpperCase()}
                        </Button>
                    ) : (
                        <Button variant="outline" size="sm" href={`/${i18n.language || 'fr'}/login`} className="!text-[10px]">
                            {t('menu.login').toUpperCase()}
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
                        {navItems.map((item) => (
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
