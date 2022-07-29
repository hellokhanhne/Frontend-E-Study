export const toVnTime = (date: string) => {
  return `${new Date(date).toLocaleTimeString('vi-VI')} - ${new Date(date).toLocaleDateString(
    'vi-VI',
  )}`;
};
