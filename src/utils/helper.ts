const CURRENCRY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
});

export const formatCurrencry = (number: number) => {
  return CURRENCRY_FORMATTER.format(number);
};

export const getDate = (date: Date) => {
  return new Date(date).toLocaleDateString('en');
};

export const baseUrl =
  import.meta.env.VITE_MODE === 'development'
    ? 'https://type-shop.herokuapp.com'
    : 'http://localhost:5000';