import React from 'react';
import { ReactNode } from 'react';

/**
 * Enum representing the available variants for the Badge component.
 * The variants control the badge's appearance and color.
 */
export enum BadgeVariant {
    default = "default",
    error = "error",
    success = "success",
    warning = "warning",
    reference = "reference",
}

/**
 * Props interface for the Badge component.
 * Defines the expected properties that can be passed into the component.
 */
interface BadgeProps {

    /** 
     * The content to be displayed inside the badge. 
     * It can be text, icons, or other React components.
     */
    children: ReactNode;

    /** 
     * Defines the style variant for the badge. 
     * Controls the background and text color (default: 'default').
     */
    variant?: BadgeVariant;

    /** 
     * Custom background color for the badge. 
     * Can be a Tailwind CSS color class or custom class.
     */
    background?: string;

    /** 
     * Custom text color for the badge. 
     * Can be a Tailwind CSS color class or custom class.
     */
    textColor?: string;

    /** 
     * Additional custom CSS classes to apply to the badge element.
     * This is useful for applying further customization beyond the predefined styles.
     */
    className?: string;
}

/**
 * Badge component that renders a styled badge with text or other content.
 * The badge's appearance is controlled via variants, background, and text color.
 * 
 * @param {BadgeProps} props - The props for the Badge component.
 * @returns {JSX.Element} The rendered Badge component.
 */
const Badge: React.FC<BadgeProps> = ({
    children,
    variant = BadgeVariant.default,
    background = 'bg-gray-200',
    textColor = 'text-gray-800',
    className = '',
}) => {

    /**
     * A mapping of badge variants to their corresponding background and text color styles.
     * This is used to determine the appearance of the badge based on the `variant` prop.
     */
    const variantStyles: Record<
        BadgeVariant,
        { background: string; textColor: string }
    > = {
        [BadgeVariant.default]: { background: 'bg-shark-800', textColor: 'text-shark-400' },
        [BadgeVariant.error]: { background: 'bg-tamarind-800', textColor: 'text-tamarind-400' },
        [BadgeVariant.success]: { background: 'bg-bush-800', textColor: 'text-bush-400' },
        [BadgeVariant.warning]: { background: 'bg-clinker-800', textColor: 'text-clinker-400' },
        [BadgeVariant.reference]: { background: 'bg-deep-teal-800', textColor: 'text-deep-teal-400' },
    };

    /**
     * Determine the resolved background color for the badge.
     * If a custom background is provided, it overrides the default variant background.
     */
    const resolvedBackground = background !== 'bg-gray-200' ? background : variantStyles[variant].background;

    /**
     * Determine the resolved text color for the badge.
     * If a custom text color is provided, it overrides the default variant text color.
     */
    const resolvedTextColor = textColor !== 'text-gray-800' ? textColor : variantStyles[variant].textColor;

    /**
     * Renders the badge as a span element with dynamic classes for styling.
     * The classes include padding, rounded corners, font size, and the background and text colors determined above.
     */
    return(
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${resolvedBackground} ${resolvedTextColor} ${className}`}>
            {children}
        </span>
    );
};

export { Badge };