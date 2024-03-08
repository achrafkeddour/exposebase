const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

const formHTML = fs.readFileSync('form1.html', 'utf8'); //UTF-8 prend en charge diverses langues.
const expectedPassword = 'enpogs';

app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send(formHTML);
});

app.post('/', (req, res) => {
  const submittedPassword = req.body.password; 
  if (submittedPassword === expectedPassword) {
    let fullname, datenais, moys1, gender, prepa, fb ,lives;
    const formData = req.body;

    switch (formData.name.toLowerCase()) {
          case 'keddour':fullname = 'Keddour Achraf'; datenais = '13/08/2003'; moys1 = 13.16;gender = 'Male'; prepa = 'ENPO'; fb = 'Achraf Keddour'; lives ='Jijel' ;break;
          case 'bensefia': fullname = 'bensefia Farouk Fahd Ayoub'; datenais = '20/01/2003'; moys1 = 13.95; gender = 'Male'; prepa = 'ENPO';fb = 'Faruk Ben'; lives ='Ain Temouchent';break;
          case 'benhamdi': fullname = 'Benhamdi Mohamed Reda'; datenais = '03/09/2003'; moys1 = 12.94; gender = 'Male'; prepa = 'ENPO';fb = 'Redha Benh'; lives ='Mostaganem';break;
          case 'mazari abdessameud': fullname = 'Mazari Abdessameud Aissa Arsselene'; datenais = '22/02/2004'; moys1 = 11.58; gender = 'Male';prepa = 'ENPO';fb = 'Aissa Mazari'; lives ='Media'; break;
          case 'affif hassani': fullname = 'Affif Hassani Belkacem Abdeldjalil'; datenais = '19/10/2003'; moys1 = 11.70; gender = 'Male';prepa = 'ENPO';fb = 'Kac Imo';lives ='Port-Aux-Poules Oran'; break;
          case 'belhachemi': fullname = 'Belhachemi Youcef';datenais = '11/10/2004';moys1 = 10.44; gender = 'Male'; prepa = 'ENPO'; fb = 'Youcef Blh'; lives ='Sidi Maarouf Oran';break;
          case 'belkaid': fullname = 'Belkaid Zahia';datenais = '29/10/2002';moys1 = 11.87; gender = 'Female'; prepa = 'ENPO'; fb = 'Za Hia';lives ='Relizane';break;
          case 'benchibout': fullname = 'Benchibout Amina Alaa';datenais = '08/03/2004';moys1 = 12.47; gender = 'Female'; prepa = 'ESGEE'; fb = 'Amina Bnch';lives ='Oran';break;
          case 'benlahbib': fullname = 'Benlahbib yousra-hibat-allah afaf';datenais = '05/12/2003';moys1 = 12.35; gender = 'Female'; prepa = 'ENPO'; fb = 'Hiba Ysr';lives ='Oran';break;
          case 'benmansour': fullname = 'Benmansour Fatima Zahra';datenais = '27/12/2002';moys1 = 12.53; gender = 'Female'; prepa = 'ENPO'; fb = 'فاطمة زهرة بن منصور';lives ='Tlemcen';break;
          case 'bouhadjela': fullname = 'Bouhadjela fatima zahra';datenais = '08/05/2004';moys1 = 11.73; gender = 'Female'; prepa = 'ENPO'; fb = 'Ti Mou';lives ='Ain Temouchent';break;
          case 'draou': fullname = 'Draou Maissa Kaouter';datenais = '23/04/2003';moys1 = 11.79; gender = 'Female'; prepa = 'ENPO'; fb = 'Maissa Draou';lives ='Oran';break;
          case 'ghoumal': fullname = 'Ghoumal Ikram';datenais = '12/11/2002';moys1 = 12.57; gender = 'Female'; prepa = 'ENPO'; fb = 'Ikram Ghoumal'; lives ='Naama';break;
          case 'kaddour': fullname = 'Kaddour Brahim Meroua';datenais = '09/11/2003';moys1 = 13.32; gender = 'Female'; prepa = 'ESGEE'; fb = 'Marwa Kaddour'; lives ='Oran';break;
          case 'mahdjoub':fullname = 'Mahdjoub Alaa';datenais = '20/12/2003';moys1 = 12.79; gender = 'Female'; prepa = 'ESSAT'; fb = 'Alaa Mb'; lives ='Oran';break;
          case 'miliani':fullname = 'Miliani Aya';datenais = '01/12/2003';moys1 = 12.69; gender = 'Female'; prepa = 'ENPO'; fb = 'Aya Mln'; lives ='Oran';break;
          case 'sayah':fullname = 'Sayah chaimaa';datenais = '06/07/2003';moys1 = 12.89; gender = 'Female'; prepa = 'ENPO'; fb = 'Chaima Sayah';lives ='Oran';break;
          case 'slimani':fullname = 'Slimani Mohammed Walid';datenais = '07/07/2003';moys1 = 14.25; gender = 'Male'; prepa = 'ESSAT'; fb = 'Walid Walid'; lives ='Oran';break;
          case 'zar':fullname = 'Zar Khadidja';datenais = '08/11/2003';moys1 = 12.41; gender = 'Female'; prepa = 'ENPO'; fb = 'Khadidja Zar';lives ='Oran';break;
          
          case 'assou':fullname = 'Assou Sarah'; datenais = '29/09/2003'; moys1 = 14.28;gender = 'Female'; prepa = 'ENPO'; fb = 'Sarah Assou';lives ='Oran'; break;
          case 'belameiri': fullname = 'Belameiri Fatima Zohra'; datenais = '19/08/2003'; moys1 = 13.07; gender = 'Female'; prepa = 'ENPO';fb = 'Fatima Bl';lives ='Oran'; break;
          case 'belarbi': fullname = 'belarbi mohammed salah eddine'; datenais = '11/07/2004'; moys1 = 12.74; gender = 'Male'; prepa = 'ENPO';fb = 'محمد صلاح الدين بلعربي'; lives ='Oran';break;
          case 'benaidja': fullname = 'Benaidja Abdessamed'; datenais = '20/11/2004'; moys1 = 14.76; gender = 'Male';prepa = 'ESGEE';fb = 'Abd Essamed'; lives ='Oran';break;
          case 'bouali': fullname = 'Bouali Asmaa'; datenais = '30/09/2003'; moys1 = 12.13; gender = 'Female';prepa = 'ENPO';fb = 'Asmaa BA'; lives ='Oran';break;
          case 'boudani': fullname = 'Boudani Cheimaa Ilhem';datenais = '1/11/2003';moys1 = 14.75; gender = 'Female'; prepa = 'ENPO'; fb = 'Cheimaa Ilhem';lives ='Sidi Bel Abbes';break;
          case 'bouziane': fullname = 'Bouziane Faiz';datenais = '18/12/2003';moys1 = 10.46; gender = 'Male'; prepa = 'ENSTP'; fb = 'Faiz BouZiane';lives ='Chlef ';break;
          case 'charen': fullname = 'Charen Baha-eddine Hemmem';datenais = '19/01/2004';moys1 = 14.46; gender = 'Male'; prepa = 'ENPO'; fb = 'Bahaeddine Charen';lives ='Chebli Blida';break;
          case 'habchi': fullname = 'Habchi Abdennour Hillel';datenais = '31/10/2003';moys1 = 14.10; gender = 'Male'; prepa = 'ENPO'; fb = 'Abdennour Habchi';lives ='Ain El Turk Oran';break;
          case 'halima-filali': fullname = 'Halima-filali Manal';datenais = '09/10/2003';moys1 = 12.26; gender = 'Female'; prepa = 'ENPO'; fb = 'Manęl Hą Fĩ';lives ='Chlef';break;
          case 'kellouche': fullname = 'Kellouche Lydia';datenais = '05/03/2004';moys1 = 13.09; gender = 'Female'; prepa = 'ENPO'; fb = 'Lydia';lives ='Tizi ouzou';break;
          case 'senina': fullname = 'Senina Abdelmeumin';datenais = '25/01/2003';moys1 = 12.24; gender = 'Male'; prepa = 'ENPO'; fb = 'Moumen senina';lives ='Berhoum Msila';break;
          case 'tahraoui': fullname = 'Tahraoui Khalil Abdelkarim';datenais = '19/11/2003';moys1 = 14.54; gender = 'Male'; prepa = 'ENPO'; fb = 'Khalil Th';lives ='Mahdia Tiaret';break;
          case 'tamzought': fullname = 'Tamzought Rania';datenais = '21/05/2003';moys1 = 13.25; gender = 'Female'; prepa = 'ENPO'; fb = 'Đüã Łipã';lives ='Ath yaala Bouira';break;
          case 'zeggai':fullname = 'Zeggai Hanene';datenais = '19/07/2003';moys1 = 14.79; gender = 'Female'; prepa = 'ENPO'; fb = 'Hanene Zeggai';lives ='Oran';break;
          case 'zemalach megueni':fullname = 'Zemalach Megueni Mohamed Faycal';datenais = '14/04/2003';moys1 = 14.07; gender = 'Male'; prepa = 'ENPO'; fb = 'Mohamed Zm';lives ='Mascara';break;
          case 'zinai':fullname = 'Zinai Manel';datenais = '12/04/2003';moys1 = 12.92; gender = 'Female'; prepa = 'ENPO'; fb = 'Manel Z-i';lives ='Oran';break;

          default:fullname = null;datenais = null;moys1 = null;gender = null;prepa = null;fb = null;lives =null;break;
    }

    let additionalDataHTML = ''; // Initialisation de la variable pour les données supplémentaires HTML
        if (fullname !== null) {
          additionalDataHTML += `<p>Nom complet: ${fullname}</p>`;
          additionalDataHTML += `<p>Date de naissance: ${datenais}</p>`;
          additionalDataHTML += `<p>Moyenne 1 : ${moys1}</p>`; additionalDataHTML += `<p>Genre: ${gender}</p>`;
          additionalDataHTML += `<p>Prepa: ${prepa}</p>`; additionalDataHTML += `<p>Facebook: ${fb}</p>`;
          additionalDataHTML += `<p>Habite: ${lives}</p>`;
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
