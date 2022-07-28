const fs = require('fs')
const crypto = require('crypto')
let j=0;
fs.stat('../data/data_to_encrypt.txt', (err, stats) => {
	 const num=Math.floor(stats.size/80);
    if (err) {
        console.log(`File doesn't exist.`);
    } else {
        console.log('***Decrypting your ' + num + ' files***');
        
    }
    
for(let i=0;i<=num;i++){

const encryptedData = fs.readFileSync('../data/encrypted_splits/edata-'+i+'.txt', { encoding: 'utf-8' })
const privateKey = fs.readFileSync('../keys/private.pem', { encoding: 'utf-8' })

const decryptedData = crypto.privateDecrypt(
  {
    key: privateKey,
    // In order to decrypt the data, we need to specify the
    // same hashing function and padding scheme that we used to
    // encrypt the data in the previous step
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: 'sha256',
  },
  Buffer.from(encryptedData, 'base64'),
)
for(j;j<=0;j++)
{
  let st="";
  fs.writeFileSync('../data/decrypted_data/data.txt', st.toString('utf-8'), { encoding: 'utf-8' })
}
fs.appendFileSync('../data/decrypted_data/data.txt', decryptedData.toString('utf-8'), { encoding: 'utf-8' })

}

});
