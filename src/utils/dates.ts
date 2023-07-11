export const formatDate = (dateString: string): string => {
    const now = new Date();
    const date = new Date(dateString);
  
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
  
    if (seconds < 60) {
      return "agora";
    } else if (minutes < 60) {
      return `${minutes} min`;
    } else if (hours < 24) {
      return `${hours} h`;
    } else if (days < 7) {
      return `${days} ${days === 1 ? "dia" : "dias"}`;
    } else if (weeks < 4) {
      return `${weeks} sem`;
    } else if (months < 12) {
      return `${months} ${months === 1 ? "mês" : "meses"}`;
    } else {
      return `${years} ${years === 1 ? "ano" : "anos"}`;
    }
};
  
  
  
  
  
  