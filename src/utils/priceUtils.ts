export const getCurrentPrice = (price: number, sale_percent: number) => {
  return price - (price * sale_percent) / 100;
};
