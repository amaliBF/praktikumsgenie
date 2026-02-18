import {
  Monitor,
  Wrench,
  Heart,
  BarChart3,
  Palette,
  UtensilsCrossed,
  ShoppingCart,
  Microscope,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Wrench,
  Heart,
  BarChart3,
  Palette,
  UtensilsCrossed,
  ShoppingCart,
  Microscope,
};

export function BrancheIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name];
  return Icon ? <Icon className={className} /> : null;
}
