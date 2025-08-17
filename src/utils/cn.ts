import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names and merges Tailwind classes efficiently
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Gets the correct color class based on the color name
 */
export function getColorClass(color: string, type: 'text' | 'bg' | 'border' = 'text') {
  const colorMap: Record<string, string> = {
    'ignition-orange': `${type}-ignition-orange`,
    'ember-red': `${type}-ember-red`,
    'spark-yellow': `${type}-spark-yellow`, 
    'deep-charcoal': `${type}-deep-charcoal`,
    'cool-gray': `${type}-cool-gray`,
  };

  return colorMap[color] || '';
}
