import React from 'react';
import Image from 'next/image';

import Cimg from './cimg';

/**
 * CardProps interface defines the expected props for the Card component.
 * - title: The title text displayed on the card.
 * - description: A short description text displayed on the card.
 * - imageUrl: URL for the image to be displayed at the top of the card.
 * - buttonLabel: A label for the button (used for accessibility).
 * - buttonText: The text displayed inside the button.
 * - buttonLink: The URL the button should link to when clicked.
 */
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonLabel: string;
  buttonText: string;
  buttonLink: string;
}

/**
 * Card component displays a card with an image, title, description, and a button.
 * The component is designed to be responsive and adaptable to different screen sizes.
 *
 * @param {string} title - The title displayed on the card.
 * @param {string} description - A short text describing the content of the card.
 * @param {string} imageUrl - The URL of the image to display on top of the card.
 * @param {string} buttonLabel - An accessibility label for the button.
 * @param {string} buttonText - The text inside the button.
 * @param {string} buttonLink - The URL the button will link to.
 */
const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  buttonLabel,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="border border-neutral-400 dark:border-neutral-800 rounded-lg shadow-lg overflow-hidden max-w-xs w-full">
      <Cimg id={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="font-semibold text-xl text-white mb-3">{title}</div>
        <p className="text-neutral-400 text-base mb-5">{description}</p>
      </div>
    </div>
  );
};

export default Card;
