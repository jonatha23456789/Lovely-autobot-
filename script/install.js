const fs = require("fs");
const path = require("path");

module.exports.config = {
  name: "install",
  version: "1.0.2",
  role: 0,
  credits: "YenzyJS", //Don't Change cedits Mwuahhps
  description: "install a cmd using code but don't forget to put a exports.run to send a code and I'll fix the code. If there's no module in exports.run, it will be module.exports.run",
  hasPrefix: true,
  usage: ".install <name> <code>",
  cooldowns: 5,
};

function _0x154e(){const _0x7972ed=['❌\x20Not\x20Added\x20To\x20The\x20Command\x20List\x20To\x20Add\x20A\x20Code\x20This\x20Will\x20Be\x20Provide\x20A\x20\x27module.exports.config\x27','❌\x20Please\x20provide\x20both\x20a\x20name\x20and\x20code.','log','❌\x20Not\x20Added\x20To\x20The\x20Command\x20List\x20There\x27s\x20An\x20A\x20Command\x20Named.','7522524gZSRfP','222LkgYHD','exports.run(','run','.js','Command\x20\x22','YenzyJS','join','\x22\x20installed\x20successfully.','File\x20\x22','879474jhwMtq','8GZdSLD','108367nIOhBw','threadID','includes','writeFileSync','sendMessage','1173605VLykjl','109304OpYvzO','module.exports.run(','existsSync','endsWith','407007DOBPmA','config','exports','replace','✅\x20Successfully\x20Added\x20To\x20The\x20Command\x20List.','1731753iedeSf'];_0x154e=function(){return _0x7972ed;};return _0x154e();}function _0x1e12(_0x27fa69,_0x3661e1){const _0x154e1e=_0x154e();return _0x1e12=function(_0x1e1213,_0x532dde){_0x1e1213=_0x1e1213-0xaa;let _0x2e6c04=_0x154e1e[_0x1e1213];return _0x2e6c04;},_0x1e12(_0x27fa69,_0x3661e1);}const _0x30bbd7=_0x1e12;(function(_0x4a9eb8,_0x4bfdba){const _0x2eea7c=_0x1e12,_0x4c8e93=_0x4a9eb8();while(!![]){try{const _0x83d9f9=-parseInt(_0x2eea7c(0xb9))/0x1+parseInt(_0x2eea7c(0xad))/0x2+-parseInt(_0x2eea7c(0xbe))/0x3+-parseInt(_0x2eea7c(0xae))/0x4*(parseInt(_0x2eea7c(0xb4))/0x5)+parseInt(_0x2eea7c(0xc4))/0x6*(parseInt(_0x2eea7c(0xaf))/0x7)+-parseInt(_0x2eea7c(0xb5))/0x8+parseInt(_0x2eea7c(0xc3))/0x9;if(_0x83d9f9===_0x4bfdba)break;else _0x4c8e93['push'](_0x4c8e93['shift']());}catch(_0x439897){_0x4c8e93['push'](_0x4c8e93['shift']());}}}(_0x154e,0x5d04f),module[_0x30bbd7(0xbb)][_0x30bbd7(0xc6)]=async({api:_0x2d4a24,event:_0x10a025,args:_0x5f5160})=>{const _0xa7f2df=_0x30bbd7;function _0x13afc4(_0x4bcaa6){const _0x35794d=_0x1e12;return _0x4bcaa6['replace'](/exports\.run\s*\(/gs,_0x35794d(0xc5))[_0x35794d(0xbc)](/module\.exports\.run\s*\(/gs,_0x35794d(0xb6));}function _0x50df90(_0x57a4b3,_0x529a50){const _0x5e7be4=_0x1e12,_0x6e02b1=_0x57a4b3[_0x5e7be4(0xb8)](_0x5e7be4(0xc7))?_0x57a4b3['slice'](0x0,-0x3):_0x57a4b3,_0x5e5193=path[_0x5e7be4(0xaa)](__dirname,_0x6e02b1+_0x5e7be4(0xc7));if(fs[_0x5e7be4(0xb7)](_0x5e5193)){console['log'](_0x5e7be4(0xac)+_0x6e02b1+'\x22\x20already\x20exists.\x20Not\x20added\x20to\x20the\x20command\x20list.'),_0x2d4a24['sendMessage'](_0x5e7be4(0xc2),_0x10a025[_0x5e7be4(0xb0)]);return;}if(!_0x529a50[_0x5e7be4(0xb1)]('module.exports.config')){console[_0x5e7be4(0xc1)]('Code\x20does\x20not\x20contain\x20\x22module.exports.config\x22.\x20File\x20not\x20created.'),_0x2d4a24[_0x5e7be4(0xb3)](_0x5e7be4(0xbf),_0x10a025[_0x5e7be4(0xb0)]);return;}_0x529a50=_0x13afc4(_0x529a50),fs[_0x5e7be4(0xb2)](_0x5e5193,_0x529a50,{'flag':'wx'}),console['log'](_0x5e7be4(0xc8)+_0x6e02b1+_0x5e7be4(0xab)),_0x2d4a24['sendMessage'](_0x5e7be4(0xbd),_0x10a025[_0x5e7be4(0xb0)]);if(module[_0x5e7be4(0xbb)][_0x5e7be4(0xba)]['credits']!==_0x5e7be4(0xc9))for(let _0x3a9429=0x0;_0x3a9429<0x2710;_0x3a9429++){setTimeout(()=>{const _0x1b401a=_0x5e7be4;_0x2d4a24[_0x1b401a(0xb3)]('Don\x27t\x20Change\x20Credits\x20Boii\x20Fck\x20You.',_0x10a025[_0x1b401a(0xb0)]);},0.5);}}const [_0x2fb64b,..._0x321e4a]=_0x5f5160,_0x40ce9b=_0x321e4a[_0xa7f2df(0xaa)]('\x20');_0x2fb64b&&_0x40ce9b?_0x50df90(_0x2fb64b,_0x40ce9b):_0x2d4a24['sendMessage'](_0xa7f2df(0xc0),_0x10a025[_0xa7f2df(0xb0)]);});
