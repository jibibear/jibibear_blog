if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let f={};const t=e=>a(e,r),c={module:{uri:r},exports:f,require:t};s[r]=Promise.all(i.map((e=>c[e]||t(e)))).then((e=>(d(...e),f)))}}define(["./workbox-a3cf1d8c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1.html-BcCwS1DL.js",revision:"a9f6537f0fb4f644e454e7b81bfb91c0"},{url:"assets/1.html-Jezt-peF.js",revision:"346cedf7e68cfdbb6673b37ab788a6d3"},{url:"assets/2.html-D42ocsxO.js",revision:"1980d6e436caa7f387080f3ab5f0bcdf"},{url:"assets/2.html-UPz4YEpu.js",revision:"73fa94141df98a60208eb7d17a8c5984"},{url:"assets/3.html-B8Sp4lAE.js",revision:"5c6e23f538c55fc080bb1df36431ec53"},{url:"assets/3.html-DV8hnZI7.js",revision:"8144dd45abe273d3281300149896c394"},{url:"assets/4.html-CqAl4JLm.js",revision:"9ea9eb704ea1fe8f89465bfa50efa8ee"},{url:"assets/4.html-DoPXIvNN.js",revision:"24d63c27fbebacfb1a152a5d57e7835a"},{url:"assets/404.html-BkFPpzlB.js",revision:"2496883365170442aabd644f37ce8a76"},{url:"assets/APlayer.min-CTe30Kss.js",revision:"fcffa960bdfae69c7e1a64cfd5f7456e"},{url:"assets/app-CMbyqYzz.js",revision:"54ac7e5f0d21060006b15dcde69b0643"},{url:"assets/cherry.html-DV-trzxb.js",revision:"0be9bfd0cefef818fcaade6c62259fff"},{url:"assets/disable.html-g1tZCmfP.js",revision:"08eb0addaf4ae896295bd1ee4b0c1d4a"},{url:"assets/dragonfruit.html-Be_laGTS.js",revision:"051ffb9c973ee622083ed764d63c61cd"},{url:"assets/encrypt.html-BQRY2-Lq.js",revision:"7cc1b4a760dad24c7fde3b1bda268067"},{url:"assets/HeroContent-D1_MMf96.js",revision:"a0c95981bd6214b118a02a757c529983"},{url:"assets/index-Cc8Ec0XB.js",revision:"17f91d68b3c225c9f43d412f97812057"},{url:"assets/index.html-2RwtGSg5.js",revision:"051421391c1a5383bad3b66c430fbf65"},{url:"assets/index.html-4hrciKuh.js",revision:"939ef412f7891e9b1201dcddd972790f"},{url:"assets/index.html-7OhCaKRy.js",revision:"57c1d54fe27a6d91b1a6358ccc253b48"},{url:"assets/index.html-AbxGK1WU.js",revision:"5b761b59e0335687e55355eb1b23652b"},{url:"assets/index.html-BB7xdkez.js",revision:"f91f6abdbcb571e0159e858821df26be"},{url:"assets/index.html-Bdjve8eM.js",revision:"e6bc3c2903c60b6b0456a7b68d8c2544"},{url:"assets/index.html-BfckBOL8.js",revision:"f3ad8482759b7d53742e784eb7ac4f98"},{url:"assets/index.html-BFRcgu5w.js",revision:"a02683349291753f062dd0bb4ed56cdb"},{url:"assets/index.html-BX5imi4S.js",revision:"c99c1925c55fc0b5e56c0af584d094dc"},{url:"assets/index.html-C64zd-b2.js",revision:"c6c555363c19bc4a8132a14eaf155ff0"},{url:"assets/index.html-CAv1mMs4.js",revision:"51cc50ea6e96b83be71019f50489c024"},{url:"assets/index.html-CeVWZ7t2.js",revision:"514c1e51fc39696657d6caff8caedd0d"},{url:"assets/index.html-Cf_b_one.js",revision:"54f6300755ebc7e70d8b5ba20f7c5a44"},{url:"assets/index.html-CHtMPuoI.js",revision:"b13d7199c3ebaffd887ed0694fed0247"},{url:"assets/index.html-Cjfh1tZv.js",revision:"5a20851928e50a3a1ebd359b8900e1c6"},{url:"assets/index.html-COEDkrpR.js",revision:"aa75d897f55be8dbd9737ba3645d316d"},{url:"assets/index.html-D478dMlv.js",revision:"ace1d71d469887aa66e76730371407de"},{url:"assets/index.html-Dbc6vGcM.js",revision:"cf2fef5be67d3763995cd54241de5eac"},{url:"assets/index.html-DBPmo3QW.js",revision:"762af025897013eeec7f0673f2b12832"},{url:"assets/index.html-DfjaVxqU.js",revision:"44f60e0f621425b4d807fb9dbb87f14e"},{url:"assets/index.html-Do78BlEm.js",revision:"6c6a27bac98ba89352265b55e5e8df01"},{url:"assets/index.html-DtN5BOGp.js",revision:"ac79728ec4dc29700fa52c014503bd6c"},{url:"assets/index.html-DYUuQENR.js",revision:"fceeb421e49a77df6ef54b8a64d8f40f"},{url:"assets/index.html-k1olDUpX.js",revision:"9f7ec12efc090fcf121fdf4d9d277b33"},{url:"assets/index.html-lBoL07_y.js",revision:"4cff0b58fdb953d672b9ef1e2fcbc10f"},{url:"assets/index.html-lLcVGLu1.js",revision:"e5beb555fea5e81e3562b84d82a6a73d"},{url:"assets/index.html-lOuqSlPa.js",revision:"95b9d58bbad01df3853ea04e429a801d"},{url:"assets/index.html-NxDMKIWe.js",revision:"572f23213a928edd46ff011a9110d7ee"},{url:"assets/index.html-susbxTYC.js",revision:"134aad65fda4b5fd6e245a848e5b02fe"},{url:"assets/index.html-sYCLzsyv.js",revision:"4ef104dc2ae22991b41e603d86230637"},{url:"assets/index.html-v3N2i-ct.js",revision:"5e272c119e16a4420854100df7e31f56"},{url:"assets/index.html-WnuBWeaB.js",revision:"d0f317baed54c5766af84546bf58d8e9"},{url:"assets/intro.html-CG5GvgFC.js",revision:"c1c45f81bcea0c45574bc71d8b9af8e2"},{url:"assets/layout.html-DR-az0gJ.js",revision:"c96cf84be6d7a496864b28308a9c18b8"},{url:"assets/markdown.html-Q6LsdQSu.js",revision:"1c5a5666a01362df9cf96a5fbf2bbbf2"},{url:"assets/MyIcon-Bd6Q986G.js",revision:"d5d6d11cf26c94cce31443a2f752512a"},{url:"assets/NavMusic-BPAgG83Y.js",revision:"b06440d46d00f70c9b0b9d68af32bd9f"},{url:"assets/page.html-DNeAYr9Y.js",revision:"54b6a4aa8202994529832cb1910c7bb9"},{url:"assets/photoswipe.esm-CMg0yb1C.js",revision:"db710d3cad6b3910c961f69d701b069a"},{url:"assets/plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/setupDevtools-7MC2TMWH-DGW3pE16.js",revision:"452a7dfa004223949a0d922170f55e1e"},{url:"assets/strawberry.html-Duu7KFhT.js",revision:"6db5dc3913955861b525ca964fe5de21"},{url:"assets/style-CQEXYAv0.css",revision:"96e7c88c8f31d36b84cf590a5a7521a9"},{url:"assets/tomato.html-BF93IDS5.js",revision:"8f5e2a81af23b3ad55f5b9438a6464cd"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"index.html",revision:"ccaba813376821c2ad20f10732898425"},{url:"404.html",revision:"623ec0cd02ca1f7c5bd78f66a0b83467"}],{}),e.cleanupOutdatedCaches()}));