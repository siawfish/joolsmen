import { BookingStatuses, StatusColors } from '@/types';
import { formatRelative } from 'date-fns'

export const timeToString = (time: number) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
}

export const formatRelativeDate = (date: string) => {
  return formatRelative(new Date(date), new Date())?.split(' at')[0];
}

export function getStatusColors(status: BookingStatuses): StatusColors {
  const statusColors: Record<BookingStatuses, StatusColors> = {
    PENDING: {
      color: "#FFA500", // Orange
      backgroundColor: "#FFF5E1" // Light orange
    },
    ACCEPTED: {
      color: "#008000", // Green
      backgroundColor: "#E6F4EA" // Light green
    },
    DECLINED: {
      color: "#FF0000", // Red
      backgroundColor: "#FCE4E4" // Light red
    },
    CANCELLED: {
      color: "#FF8C00", // Dark orange
      backgroundColor: "#FFEFD5" // Papaya whip
    },
    COMPLETED: {
      color: "#0000FF", // Blue
      backgroundColor: "#E0F7FA" // Light cyan
    },
    PAUSED: {
      color: "#FFD700", // Gold
      backgroundColor: "#FFF9E3" // Light yellow
    }
  };

  return statusColors[status] || { color: "#000000", backgroundColor: "#FFFFFF" }; // Default to black text on white background
}