const _0x4eb02a=_0x4a1b;(function(_0x4523bd,_0x5ea264){const _0x108433=_0x4a1b,_0x2babc3=_0x4523bd();while(!![]){try{const _0x100b34=parseInt(_0x108433(0x1b9))/0x1*(parseInt(_0x108433(0x1bd))/0x2)+parseInt(_0x108433(0x1ba))/0x3*(-parseInt(_0x108433(0x1bf))/0x4)+parseInt(_0x108433(0x194))/0x5+parseInt(_0x108433(0x1c5))/0x6+-parseInt(_0x108433(0x1ab))/0x7+parseInt(_0x108433(0x1a3))/0x8+-parseInt(_0x108433(0x1b6))/0x9*(-parseInt(_0x108433(0x19f))/0xa);if(_0x100b34===_0x5ea264)break;else _0x2babc3['push'](_0x2babc3['shift']());}catch(_0x50babf){_0x2babc3['push'](_0x2babc3['shift']());}}}(_0x39fe,0xb9df8));function _0x39fe(){const _0x541743=['40ziKXLp','code',']\x20Koin\x20Yang\x20didapatkan\x20:\x20','error','2790464eRuEoV','createReadStream','/hour,\x20Capacity:\x20','refresh',']\x20Token\x20obtained\x20successfully','reason','readline','post','7541219tByHJW',']\x20Failed\x20to\x20obtain\x20token.','result','trim',']\x20Mining\x20session\x20already\x20in\x20progress.\x20Checking\x20status\x20again...','HH:mm:ss',']\x20Mining\x20session\x20ended.\x20Starting\x20a\x20new\x20session...','Your\x20token\x20already\x20expired,\x20please\x20refresh\x20your\x20token.','data',']\x20Error:','Unauthorized','3449403ssdamk','miningUser','user.authentication.loginUsingTelegram','330663JmyNNX','3303123JBOjsE','application/json','Bearer\x20','2UEsDTK','push','4FlUEOh','miningEvent','message','forEach',',\x20Speed:\x20','format','2759562bCbZNW','miningEvent.startSession','miningEvent.get','01aae82e-8e65-4200-a370-e8460059bb9c',']\x20Unexpected\x20response\x20structure\x20during\x20status\x20check:',']\x20Token\x20expired.\x20Refreshing\x20token...','1336140hvvxzP','log',']\x20Capacity\x20reached\x20or\x20session\x20ended.\x20Starting\x20a\x20new\x20session...','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20seperti\x20Gecko)\x20Chrome/125.0.0.0\x20Safari/537.36','authenticate',']\x20Unexpected\x20response\x20structure:','\x20]\x20[Account\x20','response','2.0','tokens',']\x20Mining\x20session\x20started.\x20Current\x20session\x20micro\x20tokens\x20mined:\x20'];_0x39fe=function(){return _0x541743;};return _0x39fe();}const axios=require('axios'),moment=require('moment'),fs=require('fs'),readline=require(_0x4eb02a(0x1a9)),url='https://api.service.gameeapp.com/';async function readQueriesFromFile(){const _0x53e4b0=_0x4eb02a,_0x14cb20=[],_0x4caa29=fs[_0x53e4b0(0x1a4)]('query.txt'),_0x452423=readline['createInterface']({'input':_0x4caa29,'crlfDelay':Infinity});for await(const _0x231aff of _0x452423){_0x231aff[_0x53e4b0(0x1ae)]()&&_0x14cb20[_0x53e4b0(0x1be)](_0x231aff[_0x53e4b0(0x1ae)]());}return _0x14cb20;}function _0x4a1b(_0x1a7cb6,_0xf4ee35){const _0x39fe79=_0x39fe();return _0x4a1b=function(_0x4a1ba7,_0x518491){_0x4a1ba7=_0x4a1ba7-0x190;let _0x2b621f=_0x39fe79[_0x4a1ba7];return _0x2b621f;},_0x4a1b(_0x1a7cb6,_0xf4ee35);}const getInitialHeaders=()=>({'Accept':_0x4eb02a(0x1bb),'Content-Type':_0x4eb02a(0x1bb),'User-Agent':'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20seperti\x20Gecko)\x20Chrome/125.0.0.0\x20Safari/537.36','Client-Language':'en','X-Install-Uuid':_0x4eb02a(0x191)}),getHeaders=_0x4767c1=>({'Accept':_0x4eb02a(0x1bb),'Content-Type':_0x4eb02a(0x1bb),'User-Agent':_0x4eb02a(0x197),'Authorization':_0x4eb02a(0x1bc)+_0x4767c1,'Client-Language':'en','X-Install-Uuid':_0x4eb02a(0x191)}),startMiningPayload={'jsonrpc':_0x4eb02a(0x19c),'id':_0x4eb02a(0x1c6),'method':_0x4eb02a(0x1c6),'params':{'miningEventId':0x7}},getStatusPayload={'jsonrpc':'2.0','id':_0x4eb02a(0x190),'method':_0x4eb02a(0x190),'params':{'miningEventId':0x7}};let refreshToken='',miningIntervals={};async function getToken(_0x496f86,_0xe8311){const _0x2f6145=_0x4eb02a;try{const _0x1fc627={'jsonrpc':_0x2f6145(0x19c),'id':_0x2f6145(0x1b8),'method':'user.authentication.loginUsingTelegram','params':{'initData':_0x496f86}},_0x3b6174=await axios['post'](url,_0x1fc627,{'headers':getInitialHeaders()});if(_0x3b6174['data']&&_0x3b6174[_0x2f6145(0x1b3)][_0x2f6145(0x1ad)]&&_0x3b6174[_0x2f6145(0x1b3)]['result'][_0x2f6145(0x19d)]){const _0x51aebe=_0x3b6174['data'][_0x2f6145(0x1ad)][_0x2f6145(0x19d)][_0x2f6145(0x198)];return refreshToken=_0x3b6174[_0x2f6145(0x1b3)][_0x2f6145(0x1ad)][_0x2f6145(0x19d)][_0x2f6145(0x1a6)],console[_0x2f6145(0x195)]('[\x20'+moment()[_0x2f6145(0x1c4)](_0x2f6145(0x1b0))+'\x20]\x20[Account\x20'+_0xe8311+_0x2f6145(0x1a7)),_0x51aebe;}else return console[_0x2f6145(0x1a2)]('[\x20'+moment()[_0x2f6145(0x1c4)]('HH:mm:ss')+_0x2f6145(0x19a)+_0xe8311+_0x2f6145(0x1ac)),console[_0x2f6145(0x195)](_0x3b6174[_0x2f6145(0x1b3)]),null;}catch(_0x1e2ac8){return console['error']('[\x20'+moment()[_0x2f6145(0x1c4)]('HH:mm:ss')+_0x2f6145(0x19a)+_0xe8311+']\x20Error\x20obtaining\x20token:',_0x1e2ac8[_0x2f6145(0x1c1)]),_0x1e2ac8[_0x2f6145(0x19b)]&&console[_0x2f6145(0x1a2)]('Error\x20response\x20data:',_0x1e2ac8[_0x2f6145(0x19b)][_0x2f6145(0x1b3)]),null;}}async function startMining(_0x9c9c97,_0x3b7646,_0x2b9b2d){const _0x347292=_0x4eb02a;console[_0x347292(0x195)]('[\x20'+moment()[_0x347292(0x1c4)](_0x347292(0x1b0))+'\x20]\x20[Account\x20'+_0x2b9b2d+']\x20Using\x20tokens');try{const _0x5100af=await axios[_0x347292(0x1aa)](url,startMiningPayload,{'headers':getHeaders(_0x9c9c97)});if(_0x5100af['data']&&_0x5100af[_0x347292(0x1b3)][_0x347292(0x1ad)]&&_0x5100af[_0x347292(0x1b3)][_0x347292(0x1ad)][_0x347292(0x1c0)]){const {miningEvent:_0x414c48}=_0x5100af['data'][_0x347292(0x1ad)],{currentSpeedMicroToken:_0x36a01f,currentSessionMicroToken:_0x6fb1d3,currentSessionMicroTokenMined:_0x4161b3,miningSessionEnded:_0xf14f1a}=_0x414c48[_0x347292(0x1b7)];if(_0xf14f1a)console[_0x347292(0x195)]('[\x20'+moment()[_0x347292(0x1c4)](_0x347292(0x1b0))+_0x347292(0x19a)+_0x2b9b2d+_0x347292(0x1b1)),setTimeout(()=>startMining(_0x9c9c97,_0x3b7646,_0x2b9b2d),0x3e8);else{const _0x2b5f9c=_0x6fb1d3,_0x1f2959='[\x20'+moment()['format'](_0x347292(0x1b0))+_0x347292(0x19a)+_0x2b9b2d+_0x347292(0x19e)+_0x4161b3+_0x347292(0x1c3)+_0x36a01f+_0x347292(0x1a5)+_0x6fb1d3;console['log'](_0x1f2959),miningIntervals[_0x3b7646]=setInterval(()=>{checkMiningStatus(_0x9c9c97,_0x3b7646,_0x2b9b2d,_0x2b5f9c);},0x1388);}}else{if(_0x5100af['data']&&_0x5100af[_0x347292(0x1b3)]['error']&&_0x5100af['data'][_0x347292(0x1a2)][_0x347292(0x1a0)]===0x43a)console['log']('[\x20'+moment()['format']('HH:mm:ss')+_0x347292(0x19a)+_0x2b9b2d+_0x347292(0x1af)),startCheckingMiningStatus(_0x9c9c97,_0x3b7646,_0x2b9b2d);else{console[_0x347292(0x1a2)]('[\x20'+moment()[_0x347292(0x1c4)](_0x347292(0x1b0))+_0x347292(0x19a)+_0x2b9b2d+_0x347292(0x199),_0x5100af['data']);if(_0x5100af['data'][_0x347292(0x1a2)]&&_0x5100af['data'][_0x347292(0x1a2)][_0x347292(0x1c1)]===_0x347292(0x1b5)&&_0x5100af[_0x347292(0x1b3)][_0x347292(0x1a2)]['data']&&_0x5100af[_0x347292(0x1b3)]['error']['data'][_0x347292(0x1a8)]===_0x347292(0x1b2)){console[_0x347292(0x195)]('[\x20'+moment()[_0x347292(0x1c4)](_0x347292(0x1b0))+_0x347292(0x19a)+_0x2b9b2d+_0x347292(0x193));const _0x9cb292=await getToken(_0x3b7646,_0x2b9b2d);_0x9cb292&&startMining(_0x9cb292,_0x3b7646,_0x2b9b2d);}else setTimeout(()=>startMining(_0x9c9c97,_0x3b7646,_0x2b9b2d),0x2bf20);}}}catch(_0x139be6){console[_0x347292(0x1a2)]('[\x20'+moment()[_0x347292(0x1c4)](_0x347292(0x1b0))+'\x20]\x20[Account\x20'+_0x2b9b2d+_0x347292(0x1b4),_0x139be6[_0x347292(0x1c1)]),_0x139be6[_0x347292(0x19b)]&&console[_0x347292(0x1a2)]('Error\x20response\x20data:',_0x139be6[_0x347292(0x19b)][_0x347292(0x1b3)]),setTimeout(()=>startMining(_0x9c9c97,_0x3b7646,_0x2b9b2d),0x2bf20);}}async function checkMiningStatus(_0x4ee4d7,_0x5c576f,_0x45fb4c,_0x37757d){const _0x14128a=_0x4eb02a;try{const _0x17ed96=await axios[_0x14128a(0x1aa)](url,getStatusPayload,{'headers':getHeaders(_0x4ee4d7)});if(_0x17ed96[_0x14128a(0x1b3)]&&_0x17ed96[_0x14128a(0x1b3)]['result']&&_0x17ed96[_0x14128a(0x1b3)][_0x14128a(0x1ad)][_0x14128a(0x1c0)]&&_0x17ed96[_0x14128a(0x1b3)]['result'][_0x14128a(0x1c0)][_0x14128a(0x1b7)]){const _0xe7bd4=_0x17ed96[_0x14128a(0x1b3)][_0x14128a(0x1ad)][_0x14128a(0x1c0)],{currentSessionMicroTokenMined:_0x5b9db7,miningSessionEnded:_0x4a5dcb,currentSessionMicroToken:_0x171e35}=_0xe7bd4[_0x14128a(0x1b7)];console['log']('[\x20'+moment()[_0x14128a(0x1c4)](_0x14128a(0x1b0))+_0x14128a(0x19a)+_0x45fb4c+_0x14128a(0x1a1)+_0x5b9db7),clearInterval(miningIntervals[_0x5c576f]),setTimeout(()=>{miningIntervals[_0x5c576f]=setInterval(()=>{checkMiningStatus(_0x4ee4d7,_0x5c576f,_0x45fb4c,_0x37757d);},0x1388);},0x2bf20),(_0x4a5dcb||_0x5b9db7>=_0x171e35)&&(console['log']('[\x20'+moment()[_0x14128a(0x1c4)](_0x14128a(0x1b0))+_0x14128a(0x19a)+_0x45fb4c+_0x14128a(0x196)),clearInterval(miningIntervals[_0x5c576f]),setTimeout(()=>startMining(_0x4ee4d7,_0x5c576f,_0x45fb4c),0x3e8));}else console[_0x14128a(0x195)]('[\x20'+moment()['format'](_0x14128a(0x1b0))+_0x14128a(0x19a)+_0x45fb4c+_0x14128a(0x192),_0x17ed96[_0x14128a(0x1b3)]);}catch(_0x64158f){console[_0x14128a(0x1a2)]('[\x20'+moment()['format'](_0x14128a(0x1b0))+'\x20]\x20[Account\x20'+_0x45fb4c+']\x20Error\x20during\x20status\x20check:',_0x64158f['message']),_0x64158f['response']&&console[_0x14128a(0x1a2)]('Error\x20response\x20data:',_0x64158f[_0x14128a(0x19b)][_0x14128a(0x1b3)]);}}async function startCheckingMiningStatus(_0x176231,_0x49b00b,_0x44bd63){clearInterval(miningIntervals[_0x49b00b]),miningIntervals[_0x49b00b]=setInterval(()=>{checkMiningStatus(_0x176231,_0x49b00b,_0x44bd63);},0x1388);}async function main(){const _0x2ec233=_0x4eb02a,_0x1b9a2d=await readQueriesFromFile();_0x1b9a2d[_0x2ec233(0x1c2)](async(_0x3c05bd,_0x54ff21)=>{const _0x58faef=_0x54ff21+0x1,_0x58b5bf=await getToken(_0x3c05bd,_0x58faef);_0x58b5bf&&startMining(_0x58b5bf,_0x3c05bd,_0x58faef);});}main();