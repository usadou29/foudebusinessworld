import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    fullWidth = false,
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed tracking-wide uppercase text-xs";

    const variants = {
        primary: "bg-brand-gold text-brand-dark hover:bg-brand-gold-light hover:scale-105 active:scale-95 shadow-lg shadow-brand-gold/20",
        secondary: "bg-white text-brand-dark hover:bg-gray-100 hover:scale-105 active:scale-95",
        outline: "border border-brand-gold/50 text-brand-gold hover:bg-brand-gold hover:text-brand-dark hover:scale-105 active:scale-95",
        ghost: "text-gray-300 hover:text-white hover:bg-white/5",
    };

    const sizes = {
        sm: "px-4 py-2",
        md: "px-8 py-3",
        lg: "px-10 py-4 text-sm",
    };

    const classes = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

    if (href) {
        if (href.startsWith('http')) {
            return (
                <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            );
        }
        return (
            <Link to={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;
