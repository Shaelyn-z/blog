/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7a46eb27fcfc877fff963bd9a4dd9bb8"
  },
  {
    "url": "api/cli.html",
    "revision": "202156d38a84695d11540334baf3a54d"
  },
  {
    "url": "api/node.html",
    "revision": "6f98571fede6469c62a3a9a37ae87289"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.77b42bdf.css",
    "revision": "3836b7f20d9a1c3243e77a89f7385517"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cc756456.js",
    "revision": "796f83186edd470b32be346bc16e667b"
  },
  {
    "url": "assets/js/100.0f09f477.js",
    "revision": "e687b98bffb735fa82220e1307bd470c"
  },
  {
    "url": "assets/js/101.dc6e3712.js",
    "revision": "18b5573fb47f3addb145d82153b13a73"
  },
  {
    "url": "assets/js/102.b64a200c.js",
    "revision": "37c48949ef51e93bef29c202a97dcf19"
  },
  {
    "url": "assets/js/103.fe24ddd2.js",
    "revision": "14e75ab8557ababb3e6ee2ca3e68f2dd"
  },
  {
    "url": "assets/js/104.e55cd789.js",
    "revision": "6c9e216b72ae91482728dcfcee1b1ef4"
  },
  {
    "url": "assets/js/105.d9703c98.js",
    "revision": "ee4063572d9664a902dfc9a7241ed39a"
  },
  {
    "url": "assets/js/106.9554797d.js",
    "revision": "8fc0eb12d01adf6834294978c4187a77"
  },
  {
    "url": "assets/js/107.51ec82d4.js",
    "revision": "693ddf61d01d27c7d39447bfab80c792"
  },
  {
    "url": "assets/js/108.d4386562.js",
    "revision": "6f8e1de04ea385e931ac4ba4803c826e"
  },
  {
    "url": "assets/js/11.b90ffa20.js",
    "revision": "6acac5a75167b3b5b4fc0870d7fea986"
  },
  {
    "url": "assets/js/12.ba8f24a0.js",
    "revision": "dc303cd7390589e1ef9814bf148cb3e5"
  },
  {
    "url": "assets/js/13.cfe2d436.js",
    "revision": "2d19c6d2cd9633bcf32a0dced0a02429"
  },
  {
    "url": "assets/js/14.0e8d399e.js",
    "revision": "8104b76c7fdfa15ed0ee289d65bc8234"
  },
  {
    "url": "assets/js/15.de98eb03.js",
    "revision": "9c8e1c7868ff7539a467e79b7edfde57"
  },
  {
    "url": "assets/js/16.f0998c63.js",
    "revision": "201b1af817dadf270aadf8ac2925da3f"
  },
  {
    "url": "assets/js/17.fe743358.js",
    "revision": "9c2bd0616a28eb74981d30f233a55930"
  },
  {
    "url": "assets/js/18.b332e92a.js",
    "revision": "4e89cf57ebc3e759bc9bff6438916c8d"
  },
  {
    "url": "assets/js/19.d6af87a3.js",
    "revision": "d016bf2d99f6f43804c33a69fb2a712c"
  },
  {
    "url": "assets/js/20.cfebba38.js",
    "revision": "bb0d323fab5737e472cd633f2f8958e1"
  },
  {
    "url": "assets/js/21.2fd564b5.js",
    "revision": "d365322a4b4316c54f2369ecaad50f67"
  },
  {
    "url": "assets/js/22.428c315b.js",
    "revision": "1232a329a5198f9d5f7897b3a15010a5"
  },
  {
    "url": "assets/js/23.22ac8599.js",
    "revision": "ddfc9a304175236d06b4fa665b4edb97"
  },
  {
    "url": "assets/js/24.8d3528bb.js",
    "revision": "25044a3e17e8d80a804020ea6e12305d"
  },
  {
    "url": "assets/js/25.5b446eac.js",
    "revision": "271bce0f39be44bdc7fa8145b859ab20"
  },
  {
    "url": "assets/js/26.e64823a5.js",
    "revision": "54200a2a640f26f21909cd6c3b042bf2"
  },
  {
    "url": "assets/js/27.a6a903be.js",
    "revision": "98d3a1466612330a4cdcf8b7d83fadb2"
  },
  {
    "url": "assets/js/28.f69b22a1.js",
    "revision": "adc09197f9f62b9e39426ebb350a6d53"
  },
  {
    "url": "assets/js/29.4f453b7c.js",
    "revision": "30692c993f2c833a71a88008c3d9bb54"
  },
  {
    "url": "assets/js/30.79b0dab1.js",
    "revision": "ea10888e35e1d6f4f9a78d4c5c966b72"
  },
  {
    "url": "assets/js/31.ae1f7542.js",
    "revision": "f6887354e8945a697a37fb1e80ac4b34"
  },
  {
    "url": "assets/js/32.87989b82.js",
    "revision": "808c26f0862f6493d4c08285cd4fd8a7"
  },
  {
    "url": "assets/js/33.eddfd713.js",
    "revision": "4f33e4b34e0cf850825591f68b7881ed"
  },
  {
    "url": "assets/js/34.00a49833.js",
    "revision": "de948adea8fd5c64c691184d554ff80a"
  },
  {
    "url": "assets/js/35.e038e0eb.js",
    "revision": "e22859ae8c99a28f74100b41c9c857b2"
  },
  {
    "url": "assets/js/36.2a35900e.js",
    "revision": "4320579f2c82ffbf6bdd7f50d53f1c83"
  },
  {
    "url": "assets/js/37.0922af29.js",
    "revision": "68d22bebbe0ac41ef74a5e915825b55e"
  },
  {
    "url": "assets/js/38.accdbcb3.js",
    "revision": "a620ba7b53644b3a2411792e8e2d53bd"
  },
  {
    "url": "assets/js/39.24927fe9.js",
    "revision": "5c909b151263d18bb213c9793993b113"
  },
  {
    "url": "assets/js/40.373e0059.js",
    "revision": "548a6cfabd2e5244a4b1916b7bf51d1f"
  },
  {
    "url": "assets/js/41.6ddcff84.js",
    "revision": "965906e9866f8c54ccfd9ef28c0093ca"
  },
  {
    "url": "assets/js/42.a023aecc.js",
    "revision": "3953b4bdba3e03028fc74e92ecb6d0cb"
  },
  {
    "url": "assets/js/43.bf0ebd8d.js",
    "revision": "3f00d587cc771aa1356bbc138961e26a"
  },
  {
    "url": "assets/js/44.fac0edcc.js",
    "revision": "e68c3efa9b769c362b50b431208be66b"
  },
  {
    "url": "assets/js/45.e27b533f.js",
    "revision": "f19537ba5f3ac925e2468e988d312eed"
  },
  {
    "url": "assets/js/46.43762e8b.js",
    "revision": "985d12538f1e085624498412a6c8e942"
  },
  {
    "url": "assets/js/47.7252746e.js",
    "revision": "2149255b525eb78402f6ee39f7508ec3"
  },
  {
    "url": "assets/js/48.8a232d47.js",
    "revision": "319cf105a222b799eb80a04771589db1"
  },
  {
    "url": "assets/js/49.a6cb9642.js",
    "revision": "cce2728f9e01a7dd06fbb0f190f7c64d"
  },
  {
    "url": "assets/js/5.831e0fa5.js",
    "revision": "27397b839f013b395df38c832a85a87e"
  },
  {
    "url": "assets/js/50.f5b6185a.js",
    "revision": "824e81a93acc934be968b20b3541f7ad"
  },
  {
    "url": "assets/js/51.6efb8f96.js",
    "revision": "c5293b497114eb969669a11659277ed7"
  },
  {
    "url": "assets/js/52.e4168d6e.js",
    "revision": "d5f7f5a7cf102ef05a76300bc7796c53"
  },
  {
    "url": "assets/js/53.6f17342c.js",
    "revision": "0c5cdc5a04bcf8479f947580e0b78cd6"
  },
  {
    "url": "assets/js/54.10be0ed0.js",
    "revision": "03489757e2fe98a7642a9e3b8900b0e3"
  },
  {
    "url": "assets/js/55.963835c0.js",
    "revision": "c3fa3c54feee948457e5e85a7a053c92"
  },
  {
    "url": "assets/js/56.83e61bf2.js",
    "revision": "08ad930300aa8676f93172901411ef7f"
  },
  {
    "url": "assets/js/57.74db4a21.js",
    "revision": "b7e3dc3fca461adfd639fb16a27a8a65"
  },
  {
    "url": "assets/js/58.e90284a0.js",
    "revision": "12ba9e51d1d52e328082fa457a8cf2ff"
  },
  {
    "url": "assets/js/59.f92a6ef2.js",
    "revision": "964506d99c59b559cb8cb32d59328429"
  },
  {
    "url": "assets/js/6.6b1879a4.js",
    "revision": "8a10ca8556415225e66289dc3636fefb"
  },
  {
    "url": "assets/js/60.0a3556b2.js",
    "revision": "2905c6f6d2fbc3ab72d3d40cff8dfc8d"
  },
  {
    "url": "assets/js/61.5bf46e29.js",
    "revision": "5a491af47885d4e97825fec354960970"
  },
  {
    "url": "assets/js/62.d4b01228.js",
    "revision": "0da24c4f561252c55a5a49a50ccd5e41"
  },
  {
    "url": "assets/js/63.3510033e.js",
    "revision": "8e76bd1dc63a449667f48bf1a25b9ad5"
  },
  {
    "url": "assets/js/64.07ad7324.js",
    "revision": "8d659fcfde924c1b8b25cbe8f63e5e0e"
  },
  {
    "url": "assets/js/65.7150cc57.js",
    "revision": "3f88ec403ea18fb544b9547e3d8b7057"
  },
  {
    "url": "assets/js/66.e88c595f.js",
    "revision": "a39fe29595ce7ee400b6ee7b67b78c52"
  },
  {
    "url": "assets/js/67.04e1389c.js",
    "revision": "946fa7ca5637e6881a21205d691e00ca"
  },
  {
    "url": "assets/js/68.3ca933c4.js",
    "revision": "513e6889460f2cff4ec223ec3b1a71c0"
  },
  {
    "url": "assets/js/69.7906b7a1.js",
    "revision": "db64f49512bd70c15cc83ba30b7f977c"
  },
  {
    "url": "assets/js/7.0103e5d9.js",
    "revision": "b248038d138e0fd91fa6c4b7964bd47c"
  },
  {
    "url": "assets/js/70.0766c3b6.js",
    "revision": "c7a8f2609c9f207896c3ad1a52e9124d"
  },
  {
    "url": "assets/js/71.7adb0939.js",
    "revision": "7b54501d5de88d5532353a8183df1069"
  },
  {
    "url": "assets/js/72.6c011731.js",
    "revision": "5cb4c486aabba9b5093e68d060bf6408"
  },
  {
    "url": "assets/js/73.26d78700.js",
    "revision": "a7bdf6200d21e6eacb47a86ca8ec5c82"
  },
  {
    "url": "assets/js/74.62d73087.js",
    "revision": "3591e49e02f4013f35e7e53273f780c1"
  },
  {
    "url": "assets/js/75.98611715.js",
    "revision": "08b6c3659c38f69756718c2264d70b17"
  },
  {
    "url": "assets/js/76.56068d7e.js",
    "revision": "4c7deb713665e422d5a8be7b9a2ab16f"
  },
  {
    "url": "assets/js/77.545e6b4f.js",
    "revision": "8c953ef6d29e7d6e308185bb30492890"
  },
  {
    "url": "assets/js/78.c7c98cc7.js",
    "revision": "31ede4b4dcbaf2e758c266e710c6df74"
  },
  {
    "url": "assets/js/79.47603c58.js",
    "revision": "16deb33961cd08aabed990439efec9c7"
  },
  {
    "url": "assets/js/8.60a91b09.js",
    "revision": "46060acbd08546927f79e16df47efb22"
  },
  {
    "url": "assets/js/80.0ee5a93e.js",
    "revision": "aaba16dab5731b37c86766f8653ea557"
  },
  {
    "url": "assets/js/81.e1ac4d28.js",
    "revision": "1bdd22b1a1c2ada3337d2d7567b63d1c"
  },
  {
    "url": "assets/js/82.8eaa7ffd.js",
    "revision": "e319889c9f01e5a73af1a75110618bde"
  },
  {
    "url": "assets/js/83.f9987c22.js",
    "revision": "0ffedf86c2a4d574af0bb380b4d65082"
  },
  {
    "url": "assets/js/84.c267570c.js",
    "revision": "c429db5d592c5ffb3ad3e7d9b5b15152"
  },
  {
    "url": "assets/js/85.0a65ff46.js",
    "revision": "2aa2375a849c2ca4dab253589affd73a"
  },
  {
    "url": "assets/js/86.e9ea81b8.js",
    "revision": "f3f35a77c229da244ee226ae7ffa2ec8"
  },
  {
    "url": "assets/js/87.2408958e.js",
    "revision": "8fcb9168d1eb164f79ae9b2d9aea6810"
  },
  {
    "url": "assets/js/88.48852da6.js",
    "revision": "5169b87cf730a05d62b434ab2bfe3333"
  },
  {
    "url": "assets/js/89.46b406e5.js",
    "revision": "c9c1851096763b276eb47d0fdd351377"
  },
  {
    "url": "assets/js/9.98cdd569.js",
    "revision": "4a0863136de2c2009f62b9cbfaa1dbad"
  },
  {
    "url": "assets/js/90.21262f4c.js",
    "revision": "7d99413ab4256a2a7b2b656eb57ee8d2"
  },
  {
    "url": "assets/js/91.35650ea5.js",
    "revision": "236f10255d4050c1992327a6db4541ef"
  },
  {
    "url": "assets/js/92.03f3cf93.js",
    "revision": "ed3cd0256ebc222d3afb590154f4437d"
  },
  {
    "url": "assets/js/93.d94532dc.js",
    "revision": "2ac503ece6e460cbc418c6d7c1d49f17"
  },
  {
    "url": "assets/js/94.8a901b8e.js",
    "revision": "5a4d16c379c918c493a6a6bfa66222fc"
  },
  {
    "url": "assets/js/95.06c3af8b.js",
    "revision": "312638761ff6d9d91d30765182b12653"
  },
  {
    "url": "assets/js/96.e8dea3eb.js",
    "revision": "d6ec6781e4a537578b117a586c0a52b4"
  },
  {
    "url": "assets/js/97.1aebe3fc.js",
    "revision": "a1b5a660b628de76ab43bfc23338f259"
  },
  {
    "url": "assets/js/98.1d61b826.js",
    "revision": "e4e4ca1dab2edecedeeaae6ea0ce15ba"
  },
  {
    "url": "assets/js/99.c8d6a52e.js",
    "revision": "ec211745290fc808ba3d89b5a3e33731"
  },
  {
    "url": "assets/js/app.9714c448.js",
    "revision": "4104c5421b8163bdf034c822b81cd4e0"
  },
  {
    "url": "assets/js/vendors~docsearch.9668120d.js",
    "revision": "00022ce58b61947032bad1d9a87c4bff"
  },
  {
    "url": "assets/js/vendors~flowchart.26a5fd20.js",
    "revision": "e2bffacf84ad93b629b9db30c01afff3"
  },
  {
    "url": "assets/js/vendors~notification.e380e516.js",
    "revision": "3af87a56b7a8bb313941999b19c79bd2"
  },
  {
    "url": "config/index.html",
    "revision": "b39231134483721f8fd9178063c9b0ec"
  },
  {
    "url": "faq/index.html",
    "revision": "6da83ff373669571856d5bde62d4414b"
  },
  {
    "url": "guide/assets.html",
    "revision": "3fef1ec915b8ff32570fcf78be20ce21"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "564f43402880a505deb621408eb29221"
  },
  {
    "url": "guide/deploy.html",
    "revision": "f12284a18dc3bab2154ef6166bd09b8d"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "c60cdd6f3c3c6e71a716cffe830c25d9"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "3fb714ffc6a7c2ddccf561166a0fe409"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "96fa962b4794a82d12586602cf557656"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "28583e38d79d1f3a700aaf973ddec918"
  },
  {
    "url": "guide/i18n.html",
    "revision": "c8f26465ae09db0b8e6414c9f212551f"
  },
  {
    "url": "guide/index.html",
    "revision": "498a56cbf1a70fa0dd3863293838bdfa"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "561eb8de7315d91c7f1d16fd898b5280"
  },
  {
    "url": "guide/markdown.html",
    "revision": "b290e6b56177c6c34b5d9084e0c7b558"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "821d1fdc63eae2a55a15e1790d17c50a"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "670d6b70a807ebb48a9dc4f933d827b3"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "37875a3342da4fe92784367be435845e"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "miscellaneous/design-concepts.html",
    "revision": "f4b0cb3007745cf9a240f7e72800d7a7"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "e8a9170055fb846ad07d01a2caae7644"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "97065126533ead6699e5df316448ac13"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "96c98e7075876bdaff8455cbc913f2bb"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "4688bcf4b1a29ac79ad15ee36335620b"
  },
  {
    "url": "plugin/index.html",
    "revision": "058f75ae439f12bc164bb12cea353257"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "7aa00c4fcac94a0153f2c02f79424912"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "4aca28662b0835c6e946d434d8ca7a31"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "4b10688a4fafea5a39d6d0a89427edb8"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "2f74e8597eec5df4cf68aa3b4bfd4b98"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "0fb58b8b0ec45b4a12bde53c40d27c0c"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "c91736d5ac769ebdcf318f155d1e9388"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "04d4cc80b1cbc550344cbdbf6514539a"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "fce2c2acf5bca3da26303059a57a3086"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "8c27f3c7955537697b8b54aefb2bcc2b"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "d5d6c6c0b96a3a4cd1ef695c233be79c"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "91d144cb168fd130e9f551ba7acb992d"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "e2e38c5e64e750db851008a1aaf002f9"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "3c78c19a910b6e38c33b5f210aa3b2fe"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "588feae8b3005109aedbca16ae1f041d"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "ed412319e98fd78c9a241e6e4e54ccc4"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "d1704f399044d85ae4cde73c813eea1c"
  },
  {
    "url": "theme/index.html",
    "revision": "bebdd151904074e945a0de6c477ff281"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "cd77efcf952083c554c52f7956153a1e"
  },
  {
    "url": "theme/option-api.html",
    "revision": "133d2271e78ade0c961aab57ae477845"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "91e92ebce2f49ad1bdaa05efa9aacc38"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "1c68b974b6821efaee79bc19bd4a23e5"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "a0be6127cde5f8d938268b7975c2a3dd"
  },
  {
    "url": "zh/api/node.html",
    "revision": "2c03f16f1f31dde525801e63f79ad5a9"
  },
  {
    "url": "zh/config/index.html",
    "revision": "6860f3dc221cb5d4bc1e019915613fcd"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "10931fbf62b618689e15693e6e684662"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "89624579fa5dc481f0242b2941856d0e"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "23c80ef402896401f22905a65563def2"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "bebc2e5f57e829ea2f964a5ffd8c0d4c"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "bc0b34adfb6f40711870f7f5bb64ed8b"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "2ee32679af59a6ec45c6f3caab369e6a"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "88947c5da29749d83f02b3e0a8804b25"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "49ecf4f9526755a61d466a074cc8da0d"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "7e2b2eecf33f72d5eff98d876ca6c556"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "c9192ca2bea09a5b2b19e68a7df7fb50"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "09fd7e75dfd77d4a3a0530ef796a87f0"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "cecab7778591da247551f9ad01bcf65a"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "fb13bfcc1f19f51cae3865313a331d66"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "dd59b01c7fe42b08833e916b4518077f"
  },
  {
    "url": "zh/index.html",
    "revision": "ef6fe29420eeb869b94bcbc2358f31aa"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "ab84422ee285eee03a59472ffb300291"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "472e52496ab985df8358febb32c8902a"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "3f3784f4549e9d632f816face3f699ac"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "df6acef380da5915c59ee8531021cc58"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "b03f3300f50226c6a83eb7de68a6de69"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "d0b01f75491b8ce100bc6db0c66dff1d"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "0618f48640611eda4f80efacde1a261f"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "b0052386028d246075689e613f3ee88c"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "4089b1241981f78a70bc3d5ade437075"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "152e668117b314123187e6f4d6ba6f08"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "97e13ebe10bd309bc0f51b9fa78383b3"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "bccf89396b8abd5d6dc29658ed974bd2"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "20ce1e92f5c358cd86ed3738363897a1"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "67a1807ba6960dd121266263db525edd"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "9e8c3adcbc329f4ffa5f147fbcb08078"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "8089f381c1abf0db90db9b4f3d17ac9a"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "25e71f0bbffe83890fb92617a143772e"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "2b7b2d87fd36c8651e6172c64c5a9afe"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "559196918b7cbca4c2329ecf00d0dc6e"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "ef6e7023e21bba851cc8e472e4dedb34"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "096ead03e62f683c5a5119375b4f9788"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "03fc889255c5a73e864a671c93937be2"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "33294d2efea51c3fe748e1f4725a5289"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "9dcd587cf66063061b193b4b71039042"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "331115cdf1cb0002e489760d4a8edb17"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "611346a8ff219530822ffb82925a2bb4"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "16420417ac04f5781982b9f2cee248d4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
