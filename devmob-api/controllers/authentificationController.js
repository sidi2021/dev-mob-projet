const authentificationService = require('../services/authentificationService');


async function inscrire(req, res) {
  const response = await authentificationService.inscrire(req.body);
  return  res.json(response);
}

async function connecter(req, res) {
    const response = await authentificationService.connecter(req.body);
    return  res.json(response);
}

async function deconnecter(req, res) {
    authentificationService.deconnecter(req.params.telephone);
    return res.json({});
}

module.exports = {
    inscrire,
    connecter,
    deconnecter

}


