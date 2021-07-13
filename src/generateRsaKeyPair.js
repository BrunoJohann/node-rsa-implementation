const NodeRSA = require('node-rsa');
const fs = require('fs');
const path = require('path');

const generateRsaKeyPair = async () => {
    const key = new NodeRSA().generateKeyPair(2048);
    const pathFilePublicKey = path.resolve(__dirname, 'keys', 'public.pem');
    const pathFilePrivateKey = path.resolve(__dirname, 'keys', 'private.pem');
    fs.writeFileSync(pathFilePublicKey, key.exportKey('public'));
    fs.writeFileSync(pathFilePrivateKey, key.exportKey('private'));
}

generateRsaKeyPair().then(() => console.log('Done!'));