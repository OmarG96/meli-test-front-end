export function formatMoney(amount = 0) {
  return "$ " + Number(amount).toLocaleString("eu-EU").replace(",00", "");
}
