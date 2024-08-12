import { formatRelative } from 'date-fns'

export const timeToString = (time: number) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
}

export const formatRelativeDate = (date: string) => {
  return formatRelative(new Date(date), new Date())?.split(' at')[0];
}
