export function formatMoney(amount = 0) {
  if (Number.isNaN(amount) || !Number.isFinite(amount)) {
    return null;
  }
  const isNegative = Math.sign(amount) === -1;
  const absValue = Math.abs(amount);

  return `${isNegative ? "-" : ""}$ ${absValue
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&.")
    .replace(/\.(?=(\d{2})+$)/, ",")}`;
}
