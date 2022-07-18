require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strong response museum collect gesture ghost army gentle'; 
let testAccounts = [
"0x2227d8a83db0390738c47910f9eacca70819772b2407e7d5f3edd14e11091fc9",
"0x465a49c0953acba57005a008753bbc9cbd7a6921d4871f95c9df3ef9fc46c29e",
"0x6ab8557545fdcd7180066195522ff5a012240d9429ddb859de2b02bf3dcd267c",
"0xd12d3bc0e4a2cf781d757f26e7fb450f6aa709b321022098c89a565c072682d5",
"0xf1fadc78e45570428baa1669432cfb2a2d249127e7db570b8c1f221ac0202777",
"0x4e05c7e6f063cdfaa98fa593eb904f93f8747f5328d6c8ca0065b362ff060a11",
"0x91d78b6a4640f3789592ae774cd6238d694265b11a65998fe48180d6d4ae24b4",
"0x7846abaa7d5940e739b2d658e955921df84dc407e58d1862785d139b4d4b6740",
"0x9ad398b1c9e3d01c0f139c2cbba0f467fbf5c59cd2ea017bbe28f557e01580b1",
"0xe8bacb6bd35286d3cbb05d25d3e9c4fe523e210c70f747bbc5c23ef6ca04a4ad"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

