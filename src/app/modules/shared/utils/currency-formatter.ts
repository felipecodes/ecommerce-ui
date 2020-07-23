const defaultOptions = { minimumFractionDigits: 2, maximumSignificantDigits: 2 };

const currencyFormatter = (amount: number, options = defaultOptions): string =>
  Intl.NumberFormat('pt-BR', options).format(amount)

export default currencyFormatter;
