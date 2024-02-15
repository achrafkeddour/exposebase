const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const formHTML = fs.readFileSync('form1.html', 'utf8'); //UTF-8 prend en charge diverses langues.
const expectedPassword = 'dhcp';

app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send(formHTML);
});
app.post('/', (req, res) => {
  const submittedPassword = req.body.password; 
  if (submittedPassword === expectedPassword) {
    let fullname, datenais, moys1, gender, prepa, fb ;
    const formData = req.body;
  
    switch (formData.name.toLowerCase()) {
          case 'keddour':fullname = 'Keddour Achraf'; datenais = '13/08/2003'; moys1 = 13.16;gender = 'Male'; prepa = 'ENPO'; fb = 'Achraf Keddour'; break;
          case 'bensefia': fullname = 'bensefia Farouk Fahd Ayoub'; datenais = '20/01/2003'; moys1 = 13.95; gender = 'Male'; prepa = 'ENPO';fb = 'Faruk Ben'; break;
          case 'benhamdi': fullname = 'Benhamdi Mohamed Reda'; datenais = '03/09/2003'; moys1 = 12.94; gender = 'Male'; prepa = 'ENPO';fb = 'Redha Benh';break;
          case 'mazari abdessameud': fullname = 'Mazari Abdessameud Aissa Arsselene'; datenais = '22/02/2004'; moys1 = 11.58; gender = 'Male';prepa = 'ENPO';fb = 'Aissa Mazari'; break;
          case 'affif hassani': fullname = 'Affif Hassani Belkacem Abdeldjalil'; datenais = '19/10/2003'; moys1 = 11.70; gender = 'Male';prepa = 'ENPO';fb = 'Kac Imo'; break;
          case 'belhachemi': fullname = 'Belhachemi Youcef';datenais = '11/10/2004';moys1 = 10.44; gender = 'Male'; prepa = 'ENPO'; fb = 'Youcef Blh';break;
          case 'belkaid': fullname = 'Belkaid Zahia';datenais = '29/10/2002';moys1 = 11.87; gender = 'Female'; prepa = 'ENPO'; fb = 'Za Hia';break;
          case 'benchibout': fullname = 'Benchibout Amina Alaa';datenais = '08/03/2004';moys1 = 12.47; gender = 'Female'; prepa = 'ESGEE'; fb = 'Amina Bnch';break;
          case 'benlahbib': fullname = 'Benlahbib yousra-hibat-allah afaf';datenais = '05/12/2003';moys1 = 12.35; gender = 'Female'; prepa = 'ENPO'; fb = 'Hiba Ysr';break;
          case 'benmansour': fullname = 'Benmansour Fatima Zahra';datenais = '27/12/2002';moys1 = 12.53; gender = 'Female'; prepa = 'ENPO'; fb = 'فاطمة زهرة بن منصور';break;
          case 'bouhadjela': fullname = 'Bouhadjela fatima zahra';datenais = '08/05/2004';moys1 = 11.73; gender = 'Female'; prepa = 'ENPO'; fb = 'Ti Mou';break;
          case 'draou': fullname = 'Draou Maissa Kaouter';datenais = '23/04/2003';moys1 = 11.79; gender = 'Female'; prepa = 'ENPO'; fb = 'Maissa Draou';break;
          case 'ghoumal': fullname = 'Ghoumal Ikram';datenais = '12/11/2002';moys1 = 12.57; gender = 'Female'; prepa = 'ENPO'; fb = 'Ikram Ghoumal';break;
          case 'kaddour': fullname = 'Kaddour Brahim Meroua';datenais = '09/11/2003';moys1 = 13.32; gender = 'Female'; prepa = 'ESGEE'; fb = 'Marwa Kaddour';break;
          case 'mahdjoub':fullname = 'Mahdjoub Alaa';datenais = '20/12/2003';moys1 = 12.79; gender = 'Female'; prepa = 'ESSAT'; fb = 'Alaa Mb';break;
          case 'miliani':fullname = 'Miliani Aya';datenais = '01/12/2003';moys1 = 12.69; gender = 'Female'; prepa = 'ENPO'; fb = 'Aya Mln';break;
          case 'sayah':fullname = 'Sayah chaimaa';datenais = '06/07/2003';moys1 = 12.89; gender = 'Female'; prepa = 'ENPO'; fb = 'Chaima Sayah';break;
          case 'slimani':fullname = 'Slimani Mohammed Walid';datenais = '07/07/2003';moys1 = 14.25; gender = 'Male'; prepa = 'ESSAT'; fb = 'Walid Walid';break;
          case 'zar':fullname = 'Zar Khadidja';datenais = '08/11/2003';moys1 = 12.41; gender = 'Female'; prepa = 'ENPO'; fb = 'Khadidja Zar';break;
          default:fullname = null;datenais = null;moys1 = null;gender = null;prepa = null;fb = null;break;
    }
    
    let additionalDataHTML = ''; // Initialisation de la variable pour les données supplémentaires HTML
        if (fullname !== null) {
          additionalDataHTML += `<p>Nom complet: ${fullname}</p>`; additionalDataHTML += `<p>Date de naissance: ${datenais}</p>`;
          additionalDataHTML += `<p>Moyenne 1 : ${moys1}</p>`; additionalDataHTML += `<p>Genre: ${gender}</p>`;
          additionalDataHTML += `<p>Prepa: ${prepa}</p>`; additionalDataHTML += `<p>Facebook: ${fb}</p>`;
        }

    const responseHTML = `
      ${formHTML.replace('</div>', `
        <p>Votre Nom de famille est : ${formData.name}</p>
        <p>Votre Spécialité est : ${formData.speciality}</p>
        ${additionalDataHTML}</div>`)}
    `;

    res.send(responseHTML);
  } else {
    const errorHTML = `
      ${formHTML.replace('</div>', `
        <p style="color: red;">Mot de passe incorrect</p>
      </div>`)}
    `;
    res.send(errorHTML);
  }
});

const port = 10000; // Utilisation du port 10000
app.listen(port, '0.0.0.0', () => { //"Attachement à 0.0.0.0" , le serveur est attaché à toutes les interfaces disponibles sur la machine.
console.log(`Server running at http://0.0.0.0:${port}/`);
});

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is listening at http://localhost:${port}`);
// });
