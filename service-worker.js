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
    "revision": "6303c9eaa282caca53b09c75444ca00d"
  },
  {
    "url": "assets/css/0.styles.ea35a998.css",
    "revision": "70e47a2ca8e38ccebb4482380c24585e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e5b04258.js",
    "revision": "e357922331df6f7f55e33724fa002a17"
  },
  {
    "url": "assets/js/11.6fd71b9e.js",
    "revision": "aa9a535d73163d9ac3d5c0c92a17c1f9"
  },
  {
    "url": "assets/js/12.ad09cad8.js",
    "revision": "f458b2f0e78dd01ecb0d109e047f5c6e"
  },
  {
    "url": "assets/js/13.0e656631.js",
    "revision": "c455d3aead2303967a7cab828ce13b19"
  },
  {
    "url": "assets/js/14.afe6aca5.js",
    "revision": "7a55aa85aa1accc8297a167710ae0583"
  },
  {
    "url": "assets/js/15.f3d5d463.js",
    "revision": "55fd9937b08ee9a3881b44d6f2e2e6e8"
  },
  {
    "url": "assets/js/16.012140a0.js",
    "revision": "e0b0ee0002122524d7056f0bee173522"
  },
  {
    "url": "assets/js/17.71bfc634.js",
    "revision": "290ddb049fd78ba9bbfbe8774390fd5c"
  },
  {
    "url": "assets/js/18.a5d9f2d2.js",
    "revision": "73d093298f979e529f856ffc3538921d"
  },
  {
    "url": "assets/js/19.2edbee95.js",
    "revision": "88c406a9ad0300f23a8b15b24dd19427"
  },
  {
    "url": "assets/js/2.fa3ecc99.js",
    "revision": "d8b1babceb137990b983e0f4b4223619"
  },
  {
    "url": "assets/js/20.ddec1be0.js",
    "revision": "62d1a9299afe97de113570d105280e92"
  },
  {
    "url": "assets/js/21.25419548.js",
    "revision": "486fcb29ed9b85c73cec7fd5979abd9f"
  },
  {
    "url": "assets/js/22.09269599.js",
    "revision": "3da6848dccc41d2e622b9859f5461d4b"
  },
  {
    "url": "assets/js/23.240ebe08.js",
    "revision": "5621ba881b38443d4915625be01e82ef"
  },
  {
    "url": "assets/js/24.67f3c7a3.js",
    "revision": "0a079f376b44e74169c214976b4e6873"
  },
  {
    "url": "assets/js/25.542b5581.js",
    "revision": "83f7c22e9e98b1393d336b714bbee80d"
  },
  {
    "url": "assets/js/26.59b7b76c.js",
    "revision": "a1c24983bc4ad93e7988eaaa70893210"
  },
  {
    "url": "assets/js/27.4c07b881.js",
    "revision": "7a405a0a6e5a594580bed8b7cc9f54fb"
  },
  {
    "url": "assets/js/28.9412cdb3.js",
    "revision": "870f6aa955cc651d7747ffdd6b7cc6b0"
  },
  {
    "url": "assets/js/29.7a3c32c1.js",
    "revision": "3e335bfe9c87531da67f69516f9bc1bb"
  },
  {
    "url": "assets/js/3.10cb9937.js",
    "revision": "6a68bd11f87cfb411512238d185d7b97"
  },
  {
    "url": "assets/js/30.586f21e5.js",
    "revision": "492e0727d5dfd1e91eddebdcf3e44c09"
  },
  {
    "url": "assets/js/31.431edc7e.js",
    "revision": "345ed8b78888ade5b427c31e58de31a2"
  },
  {
    "url": "assets/js/32.d7b31719.js",
    "revision": "40c95f90413d1499ccfbf95c0a211e8f"
  },
  {
    "url": "assets/js/33.5870336c.js",
    "revision": "81b7e62caef7468d5766b20744ba249e"
  },
  {
    "url": "assets/js/34.ff21e1a3.js",
    "revision": "fcc7e3b582a180576b8d870a9cba8935"
  },
  {
    "url": "assets/js/35.3484101a.js",
    "revision": "c671b0451b7d812e2b582a40ffb36fab"
  },
  {
    "url": "assets/js/36.b24eab3c.js",
    "revision": "42f50f883ca938db2e71a5a78ff00832"
  },
  {
    "url": "assets/js/37.3329a339.js",
    "revision": "40e90e43da599e5fff0ae0e1231d2250"
  },
  {
    "url": "assets/js/38.40a7166e.js",
    "revision": "c45fe178415b0ae1f941969faac9350e"
  },
  {
    "url": "assets/js/39.77e4e097.js",
    "revision": "74bb2c645c1454a833e6e12cf84dc345"
  },
  {
    "url": "assets/js/4.32658406.js",
    "revision": "644821796b94467dbcdf8048b7eb37d2"
  },
  {
    "url": "assets/js/40.567720fd.js",
    "revision": "4ea4f6d0866c3bd1e25e62b6531470a9"
  },
  {
    "url": "assets/js/41.88174cc8.js",
    "revision": "3b5bd9728b732ba221471eeed015dc9f"
  },
  {
    "url": "assets/js/42.fc49013b.js",
    "revision": "e84a2dd2b0d00c7b7289c52bf281d1c9"
  },
  {
    "url": "assets/js/43.41d4a4e8.js",
    "revision": "4623c2d720a2c33676e4fc3433f5327c"
  },
  {
    "url": "assets/js/44.6967dae4.js",
    "revision": "6d159185e1055b6056df53c206fae2a4"
  },
  {
    "url": "assets/js/45.05734d1e.js",
    "revision": "fc8531aa72a25fc5847e61f5485f7d3b"
  },
  {
    "url": "assets/js/46.fb614d20.js",
    "revision": "006a7155a82226f4e536e36835836b4a"
  },
  {
    "url": "assets/js/47.ead2fe38.js",
    "revision": "aa41dcd464e753e7ed9c2e948796d491"
  },
  {
    "url": "assets/js/48.5e68634f.js",
    "revision": "a849e9bd3262001ee987a9aacf3f20cf"
  },
  {
    "url": "assets/js/49.a4c5fdd5.js",
    "revision": "2f8f41bff739d54019ba69b384ad8f2d"
  },
  {
    "url": "assets/js/5.7c40eeda.js",
    "revision": "2cd0776caacc66c4a9f3d17cf3d53dfc"
  },
  {
    "url": "assets/js/50.674d4167.js",
    "revision": "d15bb31c283ee0cc6735db1406ce8311"
  },
  {
    "url": "assets/js/51.cb900666.js",
    "revision": "6702800e2181a6a2f1d2ad3aa766b964"
  },
  {
    "url": "assets/js/52.d7f29134.js",
    "revision": "31741fdae95ab25e84a4848894e8e036"
  },
  {
    "url": "assets/js/53.c29eb6fa.js",
    "revision": "760549975cfa1a056e70094453b7456e"
  },
  {
    "url": "assets/js/54.e3c38c04.js",
    "revision": "e6defbbea348c4507c8ff7abb1322559"
  },
  {
    "url": "assets/js/55.5a21edca.js",
    "revision": "25a87d3245c35a95c2c84053f4302d87"
  },
  {
    "url": "assets/js/56.0b9235ce.js",
    "revision": "9e421c461fa1c5820e79a010a6039c92"
  },
  {
    "url": "assets/js/57.f95d41fe.js",
    "revision": "c5e0c71be7509ddaba40a2a61aefe167"
  },
  {
    "url": "assets/js/58.cd7ca77b.js",
    "revision": "dc0dba9077698d2333e74b8e3ba006b9"
  },
  {
    "url": "assets/js/59.c78d2a7e.js",
    "revision": "d93af10fd6a547005b6bf144afbde62b"
  },
  {
    "url": "assets/js/6.5d062d06.js",
    "revision": "007cc4d60a2abad20268891f72d2557a"
  },
  {
    "url": "assets/js/60.8257a463.js",
    "revision": "46589109fb252dbb6780d87da23b17b3"
  },
  {
    "url": "assets/js/61.4183c659.js",
    "revision": "f78a298176e1f2ed6fe0f833b99dc160"
  },
  {
    "url": "assets/js/62.01274bd2.js",
    "revision": "b52be8378fba600ad457d780bec05eca"
  },
  {
    "url": "assets/js/63.733cba0f.js",
    "revision": "68474fb31597b2803d087b8b384dd0e0"
  },
  {
    "url": "assets/js/64.2fd8a2e9.js",
    "revision": "618924e78ba56d62f8f63774595c2429"
  },
  {
    "url": "assets/js/65.066b5664.js",
    "revision": "e3fc43baa7165f7cb7fc6b8a39c7a34d"
  },
  {
    "url": "assets/js/66.9e960058.js",
    "revision": "5d35a6bcbdaf1297ee80d6eb30b91cd1"
  },
  {
    "url": "assets/js/67.bdef4e1f.js",
    "revision": "d8dde1762e97665118b2a10d4fa66b59"
  },
  {
    "url": "assets/js/68.3fb0d22a.js",
    "revision": "720dbb05afe10a85b003479fc1621a8e"
  },
  {
    "url": "assets/js/69.3d8f5729.js",
    "revision": "d021bf0784e4c79b6cb2d5e31187d423"
  },
  {
    "url": "assets/js/7.8a1412d1.js",
    "revision": "6ba94b09967d447788b89d60bd5c3caf"
  },
  {
    "url": "assets/js/70.217b7672.js",
    "revision": "d8324bc93e733650d666d2019f07501b"
  },
  {
    "url": "assets/js/71.9cd66616.js",
    "revision": "57a0f7de7413371717c0abe68feabe23"
  },
  {
    "url": "assets/js/72.90e5ea20.js",
    "revision": "b51d86e3a2320f311481f536a81723b2"
  },
  {
    "url": "assets/js/73.cd56aba0.js",
    "revision": "f1985f186c64378aad2e0567a474deab"
  },
  {
    "url": "assets/js/74.60435126.js",
    "revision": "aa9af504ad4c98c7c6e284181596a39a"
  },
  {
    "url": "assets/js/75.368a28da.js",
    "revision": "7734ae8cadb160493bb7379261bd53e1"
  },
  {
    "url": "assets/js/76.daf915e4.js",
    "revision": "4828618060bc00ee0dd256142d8c24e5"
  },
  {
    "url": "assets/js/77.a9ea5045.js",
    "revision": "451c2c6f3bf0b587cdba8fd50637338a"
  },
  {
    "url": "assets/js/78.c08d4b3d.js",
    "revision": "375ef82b5e8ffe70b648813e191274b3"
  },
  {
    "url": "assets/js/79.313e12c1.js",
    "revision": "479ffe0bce011c6719c68827fb7c6b83"
  },
  {
    "url": "assets/js/8.952e844a.js",
    "revision": "2dfe53b7ca0853459bd8bfcb862fbe75"
  },
  {
    "url": "assets/js/80.be26f581.js",
    "revision": "43ef62b240d511f7f846c9205eed0952"
  },
  {
    "url": "assets/js/81.38356a37.js",
    "revision": "d7d831d4c946ad099db70ae6b679e1c4"
  },
  {
    "url": "assets/js/82.74ea24ce.js",
    "revision": "17f177cce51838aa79475836fcb1ed24"
  },
  {
    "url": "assets/js/83.35e087e1.js",
    "revision": "04a4c815dfc67602acbe437c8845c0d5"
  },
  {
    "url": "assets/js/9.d130ef71.js",
    "revision": "918d4caf6bb93442500c726309ef11ad"
  },
  {
    "url": "assets/js/app.92d9fa55.js",
    "revision": "256017d5258a22236f42806aff50f65e"
  },
  {
    "url": "avatar.png",
    "revision": "3148d27e27b8a5da563aefd136a9bea3"
  },
  {
    "url": "backend/elasticsearch/index.html",
    "revision": "3c4907819b684d61b774ac9fc18053ec"
  },
  {
    "url": "backend/java/a-1.html",
    "revision": "45c150d690876aeec2bb45878c062f4d"
  },
  {
    "url": "backend/java/b-2.html",
    "revision": "670e1ffbf279e78b8de7e2f575a561e4"
  },
  {
    "url": "backend/java/c-3.html",
    "revision": "3afb42fc99397a48e2b535c84fea8b91"
  },
  {
    "url": "backend/java/Collection.jpg",
    "revision": "82eccbdcafece8999f235a54e736289c"
  },
  {
    "url": "backend/java/d-4.html",
    "revision": "eea6f1e84e2768ba07321656e948a888"
  },
  {
    "url": "backend/java/e-5.html",
    "revision": "e9a03574b91acc051e7683d33890177e"
  },
  {
    "url": "backend/java/f-6.html",
    "revision": "c056522398cdcf2e08c17bffac13433e"
  },
  {
    "url": "backend/java/h-7.html",
    "revision": "068421360070c1ba6ab603d2f68b90a7"
  },
  {
    "url": "backend/java/i-8.html",
    "revision": "3e725cf8bd497d4df55968825109685a"
  },
  {
    "url": "backend/java/index.html",
    "revision": "12bfc8c76bb7c95c99ae08869b041a9b"
  },
  {
    "url": "backend/java/j-9.html",
    "revision": "e8a2a20cbbb135c00e7af5f71e5189af"
  },
  {
    "url": "backend/java/k-10.html",
    "revision": "8659079739408e41335684f4f16cc693"
  },
  {
    "url": "backend/java/l-11.html",
    "revision": "23ddf8398bcc0f8b67a6d747cc4d3a1a"
  },
  {
    "url": "backend/java/lombok.html",
    "revision": "11eeb14093c2fdbbb145a649cfbafb7f"
  },
  {
    "url": "backend/java/m-12.html",
    "revision": "0bedc4c6183a1a751bd3f1b03c40614e"
  },
  {
    "url": "backend/java/Map.jpg",
    "revision": "ea98a85e7d317daefc842d2c61ca1bba"
  },
  {
    "url": "backend/java/swagger.html",
    "revision": "20be940d9790b51fe708b0d21767cb13"
  },
  {
    "url": "backend/java/throwable.jpg",
    "revision": "ad75058182258f5c2c21717e7e79f738"
  },
  {
    "url": "backend/java/websocket.html",
    "revision": "2e2c5c0d2e1ebb0e8ab3f4168d5bf07a"
  },
  {
    "url": "backend/mybatis/index.html",
    "revision": "f43c78c6349accc7928bb02a87aa3d60"
  },
  {
    "url": "backend/mybatis/jdbctype.html",
    "revision": "9952223ab9a9c2717e0de407fe942aae"
  },
  {
    "url": "backend/quartz/index.html",
    "revision": "0674ff8f53921ae983989528c5ec1cd7"
  },
  {
    "url": "backend/rabbitMQ/01.png",
    "revision": "ee262a92e93920509c225b2663f18f97"
  },
  {
    "url": "backend/rabbitMQ/02.png",
    "revision": "734ac76fa95549f0d6b23148d4e357ef"
  },
  {
    "url": "backend/rabbitMQ/03.png",
    "revision": "371d2187a342968c778baf62a339b663"
  },
  {
    "url": "backend/rabbitmq/index.html",
    "revision": "8acb30ccb6f782d2aa20e5c29e564739"
  },
  {
    "url": "backend/rabbitmq/rabbitMQ.html",
    "revision": "9abda50d1930fe664637dc6772c5fd43"
  },
  {
    "url": "backend/redis/1.jpg",
    "revision": "91469c03a7047ab672873f07a00f6c90"
  },
  {
    "url": "backend/spring-security-oauth2/index.html",
    "revision": "cbd1cb8abbf9e59d0759e21a0bb4f58d"
  },
  {
    "url": "backend/spring-security-oauth2/use.html",
    "revision": "432cacea9bc369d43b3a87cc0a58a64a"
  },
  {
    "url": "backend/workflow/index.html",
    "revision": "9e17bdd07f4d666f711258b252b79613"
  },
  {
    "url": "backend/workflow/modeler.html",
    "revision": "cf80c0d23bbcd2e47d87d11f91ff4eda"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "d0194e45d65f319150479ecab617e7f7"
  },
  {
    "url": "database/mysql/install.html",
    "revision": "4de5811735b0646a2004c69eec5b2d0a"
  },
  {
    "url": "database/mysql/mysqlindex.html",
    "revision": "bb3652aa85278f7cdee83e58d9922aec"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "83be77f88da71c7650b8ab47f8bc0eb5"
  },
  {
    "url": "database/oracle/install.html",
    "revision": "cac8f2d8d9bc5480a9651e84b1fcfa5e"
  },
  {
    "url": "database/redis/a-usecase.html",
    "revision": "677960bb43774c74426894569ea7efd6"
  },
  {
    "url": "database/redis/index.html",
    "revision": "0681c2e63dccfe92a23401d0d1194b7e"
  },
  {
    "url": "front/javascript/index.html",
    "revision": "53662050c657d1afa5437822830de0b2"
  },
  {
    "url": "front/vue/amap.html",
    "revision": "d281f49f04272db4f3591b1006dd4aaa"
  },
  {
    "url": "front/vue/index.html",
    "revision": "4d3a2526eec0f386a482290fa7902cc2"
  },
  {
    "url": "guide/a-about.html",
    "revision": "f5e2ecd7bcdace20b51a7374c45039c1"
  },
  {
    "url": "guide/b-icp.html",
    "revision": "e702694934798503959c1dca1a49cf11"
  },
  {
    "url": "guide/c-download.html",
    "revision": "c3cab6e20e99c43846b3a7480d1e8c18"
  },
  {
    "url": "guide/index.html",
    "revision": "cf9a692c87884580a40c126d0810174a"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "57a6dd5ab6e8b09b13d325a83284be96"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "43f4ec41f573e0352c16e595b5257a47"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "cf17d2dd556ae8c7e3f8d22bc12c1627"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "acf7b1c7f4c610e27e3d79def0b7b5e1"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "d47dca02f3e2b1f4679f957a4dd714cc"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "d47dca02f3e2b1f4679f957a4dd714cc"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "5ecfb8973600c8dd70cb9c19face4388"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "4a774885988c250791b8f83acfb653d0"
  },
  {
    "url": "index.html",
    "revision": "bcbedfa48aa8fe3de3b3e061c20c428f"
  },
  {
    "url": "os/linux/index.html",
    "revision": "37cf58d31ff08a0cb8b169b245edeaa6"
  },
  {
    "url": "others/cicd/docker-compose.html",
    "revision": "11e1def71ae18d45e81da926cccfac92"
  },
  {
    "url": "others/cicd/docker.html",
    "revision": "2c1310765cef7954b643c8e18df7db2d"
  },
  {
    "url": "others/cicd/index.html",
    "revision": "257f1f2a318a6bc829342ff257095647"
  },
  {
    "url": "others/interview/index.html",
    "revision": "2b21f6901e11bdb8a61c7220ee9de47f"
  },
  {
    "url": "others/issues/annotation.html",
    "revision": "818386b31262f8a252039f2884762bd1"
  },
  {
    "url": "others/issues/cors.html",
    "revision": "b25471be2980971244421e249b4d37ec"
  },
  {
    "url": "others/issues/finally.html",
    "revision": "76c5482bc8611e83a9a3fa6f871c273e"
  },
  {
    "url": "others/issues/index.html",
    "revision": "8760f17c096c0120dfc75df259497192"
  },
  {
    "url": "others/issues/javax-persistence.html",
    "revision": "8d81588798cf6508f0791191e00c2d50"
  },
  {
    "url": "others/issues/log.html",
    "revision": "de6d308254536bf2196490adaf54f2ba"
  },
  {
    "url": "others/issues/properties.html",
    "revision": "21303d39a82dbee0d4f75ed6c4bff6f5"
  },
  {
    "url": "others/sdk/dingtalk.html",
    "revision": "f4b0d00f964d0f686c2fe430fce0d9e2"
  },
  {
    "url": "others/sdk/ffmpeg.html",
    "revision": "36e4565d8129f989b3a5ea6399fb4096"
  },
  {
    "url": "others/sdk/index.html",
    "revision": "4d9e0d9c98db8a29c9d9ccf84af309d0"
  },
  {
    "url": "others/sdk/sdk-video.jpg",
    "revision": "7d98ade27f68ee575f581616ae88d8cc"
  },
  {
    "url": "others/sdk/video.html",
    "revision": "1b95f9e2286a6a9511ad6ed824a16cca"
  },
  {
    "url": "others/utils/index.html",
    "revision": "cdd0bf1f3a26b1276027221919151262"
  },
  {
    "url": "others/utils/utils.html",
    "revision": "36bbd7ba5f53d52e8a663bf0d0805979"
  },
  {
    "url": "others/work/electronjs.jpg",
    "revision": "132821f8a5ec6a74aa5eac263f01f024"
  },
  {
    "url": "others/work/ibms.html",
    "revision": "03e2d0211db6208d8893eeae699e4f97"
  },
  {
    "url": "others/work/index.html",
    "revision": "2a3481893f2619dad166b8ccf3e3833d"
  },
  {
    "url": "tools/git/a-config.html",
    "revision": "be5778476beaca4b20a258b6292aa5a2"
  },
  {
    "url": "tools/git/b-repo.html",
    "revision": "38ad8f74d4b0ec32f1bbfc332f464351"
  },
  {
    "url": "tools/git/c-base.html",
    "revision": "b66bbde0da72224769225fd025741b09"
  },
  {
    "url": "tools/git/d-branch.html",
    "revision": "abc21134cca76fc2bfdd9e8466102044"
  },
  {
    "url": "tools/git/e-log.html",
    "revision": "f58bf6715a71ccd21abb52bef4561046"
  },
  {
    "url": "tools/git/f-tag.html",
    "revision": "f883f8936cb809503da1f9494e3c6272"
  },
  {
    "url": "tools/git/g-github.html",
    "revision": "242c5e617575d0c5f35bfebed4548e12"
  },
  {
    "url": "tools/git/index.html",
    "revision": "2e778a44a839b2b76d023e1cd2e0bff2"
  },
  {
    "url": "tools/git/ssh_login/查看是否存在密钥.jpg",
    "revision": "24f5b35f309614e6af2b65dc98ff172e"
  },
  {
    "url": "tools/git/ssh_login/测试是否成功添加.jpg",
    "revision": "c9fa2ce4331096e2b68305e3429722dd"
  },
  {
    "url": "tools/git/ssh_login/添加公钥到github.jpg",
    "revision": "86407246a460a007650d8dbbcf668ff4"
  },
  {
    "url": "tools/git/ssh_login/生成密钥.jpg",
    "revision": "681c0fa44ad396dd510f3e517cf27863"
  },
  {
    "url": "tools/maven/a-config.html",
    "revision": "9b41255a8f90797c398a7ec6dac175e7"
  },
  {
    "url": "tools/maven/b-nexus.html",
    "revision": "1b9175ef25a0298670f9dd46567c89ed"
  },
  {
    "url": "tools/maven/index.html",
    "revision": "fde3671a3e4b2e8f3b55fce8aeddca9c"
  },
  {
    "url": "tools/maven/pom.html",
    "revision": "77337bf58378a89a3c8f019673c2bbe3"
  },
  {
    "url": "tools/maven/settings.html",
    "revision": "f978feb1a7f2e3f000b41ae122e1a3eb"
  },
  {
    "url": "tools/navicat/backup.html",
    "revision": "dcbddc780280b1ee42fff989e913b144"
  },
  {
    "url": "tools/navicat/backup/1.jpg",
    "revision": "1abbbb067c14be3bb04ca9c6902291f3"
  },
  {
    "url": "tools/navicat/backup/2.jpg",
    "revision": "a7b7aca3ebc57d558e2ae1ebf89627d8"
  },
  {
    "url": "tools/navicat/backup/3.jpg",
    "revision": "49029a169b0ef6bb6ededfc5bca00008"
  },
  {
    "url": "tools/navicat/backup/4.jpg",
    "revision": "8d119d9f2d86b3fd9a73267719984b7a"
  },
  {
    "url": "tools/navicat/backup/5.jpg",
    "revision": "b84594c3b7c810303ceacf3d3ba8d4cf"
  },
  {
    "url": "tools/navicat/backup/6.jpg",
    "revision": "3f4a7568272722973d5eac1619681675"
  },
  {
    "url": "tools/navicat/index.html",
    "revision": "4b59b42ec8682feca74ee6eaa1893ca6"
  },
  {
    "url": "tools/nginx/index.html",
    "revision": "7c7e39d37f9378bbbcd88dff96b83816"
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
