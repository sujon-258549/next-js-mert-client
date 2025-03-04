export const currencyFormat = (value: number) => {
  return new Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "BDT",
  }).format(value);
};
