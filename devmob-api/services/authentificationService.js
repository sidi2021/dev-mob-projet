const db = require('./db');


async function inscrire(data) {
  const utilisateurs = await db.execute(`SELECT * FROM utilisateur WHERE telephone=${data.telephone}`);
  if (utilisateurs.length === 0){
    db.execute(`INSERT INTO utilisateur VALUES(
      '${data.telephone}',
      '${data.pseudo}',
      '${data.motdepasse}',
      '${data.photo}',
      '${1}'
    )`);
    return {utilisateur: data, raison: ''};
  }
  return {utilisateur: {}, raison: "L'utilisateur existe déjà"};
}

async function connecter(data) {
  const utilisateurs1 = await db.execute(`SELECT * FROM utilisateur WHERE telephone=${data.telephone}`);
  const utilisateurs2 = await db.execute(`SELECT * FROM utilisateur WHERE motdepasse=${data.motdepasse}`);
  
  if (utilisateurs1.length !== 0 ) {
      if(utilisateurs2.some(utilisateur => utilisateur.telephone === utilisateurs1[0].telephone)) {
        return {utilisateur: utilisateurs1[0], raison: ''}
      } else {
        return {utilisateur: {}, raison: "Mot de passe incorrect"}
      }
  }
  return {utilisateur: {}, raison: "L'utilisateur n'existe pas"};
}

async function deconnecter(telephone) {
  db.execute(`UPDATE utilisateur SET isOnLine= 0 WHERE telephone=${telephone}`);
}

module.exports = {
    inscrire,
    connecter,
    deconnecter

}

