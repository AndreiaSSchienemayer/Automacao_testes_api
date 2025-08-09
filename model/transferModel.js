const { transfers } = require('./database');

function addTransfer(transfer) {
  transfers.push(transfer);
}

function getAllTransfers() {
  return transfers;
}

module.exports = {
  addTransfer,
  getAllTransfers
};
