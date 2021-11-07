require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remain upgrade grid prison sun gather'; 
let testAccounts = [
"0x349af35f32b76407e4a2135aa57ef8cc54760d0f4d80732556322f92c24628bd",
"0x6dd380acb85500ac2954b526ff005507f3eb8c0db8b3d2ae40b8d1588f8356d8",
"0xe20324cc3782e1ce1d6f00b159fddceabfa61ae50164b1557ade5bcadb6af0c3",
"0x35d1e543bbb434303487c66d4c1b78d6cde11aeff43937526f0dd3a6e460d3e4",
"0xeef8d41a1b1512faee1ed929c57a491568e02f62324acb953d21916b9b272706",
"0xc2b77913946a116b6aeccbe42547c1aee316ba0c9464e612036ec44ae5ce6d9b",
"0x67724c07a3da9f5fe3766376869af9cabbdfcf25b6210d45b48a9a145dd82996",
"0x08d14e36e1ce9ad34830079ad61bc1471325f09a4866683d971af7389de6cee2",
"0x10f2d0976e4c8049434fb7d038afad54455227afbaba7e44595945e65956d3f2",
"0x37c85f372a74d799ab13e03c81b2a78387b12e1abaae76aadec9f21ffbb0f7fe"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

