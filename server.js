// Ce programme est écrit en JavaScript
// en utilisant Node.js pour créer un
// serveur HTTP et gérer les requêtes
// GET et POST.

// Importation des modules requis
const http = require('http');
const fs = require('fs');

// Lecture du fichier HTML du formulaire
const formHTML = fs.readFileSync('form1.html', 'utf8');
const expectedPassword = 'dhcp';
// Création du serveur HTTP
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    // Servir le formulaire en cas de requête GET
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(formHTML);
  } else if (req.method === 'POST') {
    // Gérer les données du formulaire en cas de requête POST
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      // Analyser les données du formulaire
      const formData = parseFormData(body);
      
      // Récupérer le mot de passe soumis
      const submittedPassword = formData.password;

      // Vérifier si le mot de passe soumis est correct
      if (submittedPassword === expectedPassword) {
        // Si le mot de passe est correct, afficher les données
        let specialMessage = null; // Define a variable for special message and initialize it as null
        let fullname, datenais, moys1, gender, prepa, fb ; // Define variables for additional data
        
        // Utiliser un switch pour déterminer les informations supplémentaires en fonction du nom
        switch (formData.name.toLowerCase()) {
          case 'keddour':
            fullname = 'Keddour Achraf'; datenais = '13/08/2003'; moys1 = 13.16;
            gender = 'Male'; prepa = 'ENPO'; fb = 'Achraf Keddour'; break;

          case 'bensefia':
            fullname = 'bensefia Farouk Fahd Ayoub'; datenais = '20/01/2003'; moys1 = 13.95; gender = 'Male'; prepa = 'ENPO';
            fb = 'Faruk Ben'; break;
          case 'benhamdi':
            fullname = 'Benhamdi Mohamed Reda'; datenais = '03/09/2003'; moys1 = 12.94; gender = 'Male'; prepa = 'ENPO';fb = 'Redha Benh';
            break;
          case 'mazari abdessameud':
            fullname = 'Mazari Abdessameud Aissa Arsselene'; datenais = '22/02/2004'; moys1 = 11.58; gender = 'Male';prepa = 'ENPO'
            fb = 'Aissa Mazari'; break;
          case 'affif hassani':
            fullname = 'Affif Hassani Belkacem Abdeldjalil'; datenais = '19/10/2003'; moys1 = 11.70; gender = 'Male';prepa = 'ENPO'
            fb = 'Kac Imo'; break;
          case 'belhachemi':
              fullname = 'Belhachemi Youcef';datenais = '11/10/2004';moys1 = 10.44; gender = 'Male'; prepa = 'ENPO'; fb = 'Youcef Blh';
              break;
          case 'belkaid':
                fullname = 'Belkaid Zahia';datenais = '29/10/2002';moys1 = 11.87; gender = 'Female'; prepa = 'ENPO'; fb = 'Za Hia';
                break;
          case 'benchibout':
                fullname = 'Benchibout Amina Alaa';datenais = '08/03/2004';moys1 = 12.47; gender = 'Female'; prepa = 'ESGEE'; fb = 'Amina Bnch';
                break;
          case 'benlahbib':
                fullname = 'Benlahbib yousra-hibat-allah afaf';datenais = '05/12/2003';moys1 = 12.35; gender = 'Female'; prepa = 'ENPO'; fb = 'Hiba Ysr';
                break;
          case 'benmansour':
                fullname = 'Benmansour Fatima Zahra';datenais = '27/12/2002';moys1 = 12.53; gender = 'Female'; prepa = 'ENPO'; fb = 'فاطمة زهرة بن منصور';
                break;
          case 'bouhadjela':
                fullname = 'Bouhadjela fatima zahra';datenais = '08/05/2004';moys1 = 11.73; gender = 'Female'; prepa = 'ENPO'; fb = 'Ti Mou';
                break;
          case 'draou':
                fullname = 'Draou Maissa Kaouter';datenais = '23/04/2003';moys1 = 11.79; gender = 'Female'; prepa = 'ENPO'; fb = 'Maissa Draou';
                break;
          case 'ghoumal':
                fullname = 'Ghoumal Ikram';datenais = '12/11/2002';moys1 = 12.57; gender = 'Female'; prepa = 'ENPO'; fb = 'Ikram Ghoumal';
                break;
          case 'kaddour':
                fullname = 'Kaddour Brahim Meroua';datenais = '09/11/2003';moys1 = 13.32; gender = 'Female'; prepa = 'ESGEE'; fb = 'Marwa Kaddour';
                break;
          case 'mahdjoub':
                fullname = 'Mahdjoub Alaa';datenais = '20/12/2003';moys1 = 12.79; gender = 'Female'; prepa = 'ESSAT'; fb = 'Marwa Kaddour';
                break;
          case 'miliani':
                fullname = 'Miliani Aya';datenais = '01/12/2003';moys1 = 12.69; gender = 'Female'; prepa = 'ENPO'; fb = 'Aya Mln';
                break;
          case 'sayah':
                fullname = 'Sayah chaimaa';datenais = '06/07/2003';moys1 = 12.89; gender = 'Female'; prepa = 'ENPO'; fb = 'Chaima Sayah';
                break;
          case 'slimani':
                fullname = 'Slimani Mohammed Walid';datenais = '07/07/2003';moys1 = 14.25; gender = 'Male'; prepa = 'ESSAT'; fb = 'Walid Walid';
                break;
          case 'zar':
                fullname = 'Zar Khadidja';datenais = '08/11/2003';moys1 = 12.41; gender = 'Female'; prepa = 'ENPO'; fb = 'Khadidja Zar';
                break;


          default:
            fullname = null;
            datenais = null;
            moys1 = null;
            gender = null;
            prepa = null;
            fb = null;
        }
        
        // Construction de la réponse en utilisant les nouvelles données
        let additionalDataHTML = ''; // Initialisation de la variable pour les données supplémentaires HTML
        if (fullname !== null) {
          additionalDataHTML += `<p>Nom complet: ${fullname}</p>`;
          additionalDataHTML += `<p>Date de naissance: ${datenais}</p>`;
          additionalDataHTML += `<p>Moyenne 1 : ${moys1}</p>`;
          additionalDataHTML += `<p>Genre: ${gender}</p>`;
          additionalDataHTML += `<p>Prepa: ${prepa}</p>`;
          additionalDataHTML += `<p>Facebook: ${fb}</p>`;
        }
    
        // Construction de la réponse complète en utilisant le formulaire HTML et les données supplémentaires HTML
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
          ${formHTML.replace('</div>', `
            <p>Votre Nom de famille est : ${formData.name}</p>
            <p>Votre Spécialité est : ${formData.speciality}</p>
            ${additionalDataHTML}</div>`)}
        `);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
          ${formHTML.replace('</div>', `
            <p style="color: red;">Mot de passe incorrect</p>
          </div>`)}
        `);
      }
    });
  }
});

// Fonction pour analyser les données du formulaire
function parseFormData(formData) {
  const parsedData = {};
  formData.split('&').forEach((pair) => {
    const [key, value] = pair.split('=');
    parsedData[decodeURIComponent(key)] = decodeURIComponent(value.replace(/\+/g, ' '));
  });
  return parsedData;
}

// Port sur lequel le serveur écoutera
const port = 10000; // Utilisation du port 10000
server.listen(port, '0.0.0.0', () => { // Binding to 0.0.0.0
  console.log(`Server running at http://0.0.0.0:${port}/`);
});

// Port sur lequel le serveur écoutera (localhost)
// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });
