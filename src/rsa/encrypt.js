const fs = require('fs')
const crypto = require('crypto')


fs.stat('../data/data_to_encrypt.txt', (err, stats) => {
	 const num=Math.floor(stats.size/80);
    if (err) {
        console.log(`File doesn't exist.`);
    } else {
        console.log('***Encrypting your ' + num + ' files***');
        
    }
    

for(let i=0;i<=num;i++)
{
var dataToEncrypt = fs.readFileSync('../data/splits/data-'+i+'.txt', { encoding: 'utf-8' })

var publicKey = Buffer.from(fs.readFileSync('../keys/public.pem', { encoding: 'utf-8' }))

var encryptedData = crypto.publicEncrypt(
  {
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: 'sha256',
  },
  // We convert the data string to a buffer using `Buffer.from`
  Buffer.from(dataToEncrypt)
)

fs.writeFileSync('../data/encrypted_splits/edata-'+i+'.txt', encryptedData.toString('base64'), { encoding: 'utf-8' })
}
});
