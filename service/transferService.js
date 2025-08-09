const { users } = require('../model/database');
const transferModel = require('../model/transferModel');

function transferValue({ from, to, amount }) {
  const sender = users.find(u => u.username === from);
  const recipient = users.find(u => u.username === to);
  if (!sender || !recipient) return { error: 'Usuário não encontrado.' };
  if (sender.balance < amount) return { error: 'Saldo insuficiente.' };
  if (!recipient.favored && amount >= 5000) {
    return { error: 'Transferências acima de R$ 5.000,00 só podem ser feitas para favorecidos.' };
  }
  sender.balance -= amount;
  recipient.balance += amount;
  const transfer = { from, to, amount, date: new Date() };
  transferModel.addTransfer(transfer);
  return { success: true, transfer };
}

module.exports = {
  transferValue
};
