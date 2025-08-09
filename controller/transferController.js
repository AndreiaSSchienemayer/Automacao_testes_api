const transferService = require('../service/transferService');

exports.transfer = (req, res) => {
  try {
    const { from, to, amount } = req.body;
    if (!from || !to || typeof amount !== 'number') {
      return res.status(400).json({ error: 'Campos obrigatórios: from, to, amount.' });
    }
    const result = transferService.transferValue({ from, to, amount });
    if (result.error) {
      return res.status(400).json({ error: result.error });
    }
    res.json({ message: 'Transferência realizada com sucesso.', transfer: result.transfer });
  } catch (err) {
    res.status(500).json({ error: 'Erro interno ao processar transferência.' });
  }
};
