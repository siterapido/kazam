
import { motion } from 'motion/react';
import { Bus, Plane, Car, MapPin, Users, Calendar, Star, CheckCircle } from 'lucide-react';

interface ServiceIconProps {
  type: 'bus' | 'plane' | 'car' | 'map' | 'users' | 'calendar' | 'star' | 'check';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animated?: boolean;
}

const iconMap = {
  bus: Bus,
  plane: Plane,
  car: Car,
  map: MapPin,
  users: Users,
  calendar: Calendar,
  star: Star,
  check: CheckCircle,
};

const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-10 h-10',
};

export function ServiceIcon({ 
  type, 
  size = 'md', 
  className = '',
  animated = true 
}: ServiceIconProps) {
  const IconComponent = iconMap[type];
  const sizeClass = sizeMap[size];

  if (animated) {
    return (
      <motion.div
        className={`${sizeClass} ${className}`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.2 }}
      >
        <IconComponent className="w-full h-full" />
      </motion.div>
    );
  }

  return <IconComponent className={`${sizeClass} ${className}`} />;
} 