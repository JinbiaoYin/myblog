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
    "revision": "081e70bfc68297442e44fd0d9f242529"
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
    "url": "assets/js/12.bf039b35.js",
    "revision": "6bab510a164fc30425cc3796fa8b0779"
  },
  {
    "url": "assets/js/13.80185dfa.js",
    "revision": "b29dd2fc96e7b5a442881b07c7b057f3"
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
    "url": "assets/js/21.3b25ff68.js",
    "revision": "3bfc2134b56ed031d4d740b7bfdfa4a9"
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
    "url": "assets/js/24.4e77b498.js",
    "revision": "883e7cf4d65ff97c247b1f4b6fa968a1"
  },
  {
    "url": "assets/js/25.0644f05b.js",
    "revision": "8728d1da864dc24148f0fb3e8f15d83d"
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
    "url": "assets/js/47.d49049af.js",
    "revision": "7abcfa68d785ec60badd58558cd797f6"
  },
  {
    "url": "assets/js/48.365d67b9.js",
    "revision": "46dd91ccda7a3eeac2ac7666146ba424"
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
    "url": "assets/js/53.98ffb2b4.js",
    "revision": "1494399606437bae356db920916684c4"
  },
  {
    "url": "assets/js/54.e3c38c04.js",
    "revision": "e6defbbea348c4507c8ff7abb1322559"
  },
  {
    "url": "assets/js/55.2dea174d.js",
    "revision": "85e785c4b1d29f26dab36f91a8aea0ec"
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
    "url": "assets/js/6.790efdf0.js",
    "revision": "22dbac2fe570a9ff0033e889da81d709"
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
    "url": "assets/js/66.9a94ef38.js",
    "revision": "5a2c682f9ab4bdfb1c1fc19fd152bbd9"
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
    "url": "assets/js/7.47152090.js",
    "revision": "f33b349494b06082a304ea99cf67ffcd"
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
    "url": "assets/js/8.80142c04.js",
    "revision": "9c3e6840953dbed7aa0a5f548ba0c7c7"
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
    "url": "assets/js/9.bd1d6dfe.js",
    "revision": "c1889028b3012c25df728010be4ce46b"
  },
  {
    "url": "assets/js/app.691788eb.js",
    "revision": "53a4cbabf281cd772dec32188caf8388"
  },
  {
    "url": "avatar.png",
    "revision": "3148d27e27b8a5da563aefd136a9bea3"
  },
  {
    "url": "backend/elasticsearch/index.html",
    "revision": "4f9ce94d38008ab6084be32262f6ef50"
  },
  {
    "url": "backend/java/a-1.html",
    "revision": "af5b93cddc9c41c9292c532a6ecd301a"
  },
  {
    "url": "backend/java/b-2.html",
    "revision": "fe7aabdfb5b9e36a3361efbdc20bba1f"
  },
  {
    "url": "backend/java/c-3.html",
    "revision": "cdee03f6b390557abbcd6e1881d31ea3"
  },
  {
    "url": "backend/java/Collection.jpg",
    "revision": "82eccbdcafece8999f235a54e736289c"
  },
  {
    "url": "backend/java/d-4.html",
    "revision": "57b7faca22873c998cf9f8470b20d1e7"
  },
  {
    "url": "backend/java/e-5.html",
    "revision": "3b136819d28551f958799449dbdcbd48"
  },
  {
    "url": "backend/java/f-6.html",
    "revision": "6f9a47c550accb29b9ef2d4910220001"
  },
  {
    "url": "backend/java/h-7.html",
    "revision": "d5ad6f038bc78d782f11c570893603b3"
  },
  {
    "url": "backend/java/i-8.html",
    "revision": "b01fcabe83ecfd55ce51210da25f16bd"
  },
  {
    "url": "backend/java/index.html",
    "revision": "ba406dc5b8e925a29acbf65a17d55b6c"
  },
  {
    "url": "backend/java/j-9.html",
    "revision": "1f001935ae55834b78a3eebf0fceb8b6"
  },
  {
    "url": "backend/java/k-10.html",
    "revision": "0a53a4380fbad3b4f87daa9694d9a0b3"
  },
  {
    "url": "backend/java/l-11.html",
    "revision": "3931a83c8223331105aa08635a20f771"
  },
  {
    "url": "backend/java/lombok.html",
    "revision": "e1b5b9ff28dbb115871bace140f8fdfe"
  },
  {
    "url": "backend/java/m-12.html",
    "revision": "4a2edb26d5356241a855786857d120f6"
  },
  {
    "url": "backend/java/Map.jpg",
    "revision": "ea98a85e7d317daefc842d2c61ca1bba"
  },
  {
    "url": "backend/java/swagger.html",
    "revision": "78e7487a097a0cd61b92b23c8028ffda"
  },
  {
    "url": "backend/java/throwable.jpg",
    "revision": "ad75058182258f5c2c21717e7e79f738"
  },
  {
    "url": "backend/java/websocket.html",
    "revision": "23bbe3b8d7087638cfeaf6bbd183aaed"
  },
  {
    "url": "backend/mybatis/index.html",
    "revision": "5c6246d05f96eb4440948bd8ec3dc0d6"
  },
  {
    "url": "backend/mybatis/jdbctype.html",
    "revision": "4581a5e06c993b53ec5e7de582106984"
  },
  {
    "url": "backend/quartz/index.html",
    "revision": "eb88cf92a5bd543e9f7f4b8a6403edc0"
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
    "revision": "df5fe733034b1f08aa4c374964bd9a96"
  },
  {
    "url": "backend/rabbitmq/rabbitMQ.html",
    "revision": "a67b5c01ae7f8f81cc526d1f5b184ff4"
  },
  {
    "url": "backend/redis/1.jpg",
    "revision": "91469c03a7047ab672873f07a00f6c90"
  },
  {
    "url": "backend/spring-security-oauth2/index.html",
    "revision": "929ed9ad0e670819c29fee64f490cc11"
  },
  {
    "url": "backend/spring-security-oauth2/use.html",
    "revision": "291ec0db0522250cf17801b6dba369c5"
  },
  {
    "url": "backend/workflow/index.html",
    "revision": "aac6f51f4dd8c270ab2b7b034c4ab8de"
  },
  {
    "url": "backend/workflow/modeler.html",
    "revision": "22de29f9ef346e96ab7c21291f885f1a"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "a2a7f76c1758700a44136877b2e5b866"
  },
  {
    "url": "database/mysql/install.html",
    "revision": "35e37b54b37ae0ce24514bc34d647391"
  },
  {
    "url": "database/mysql/mysqlindex.html",
    "revision": "2caedbfc8a1c1059f116e40ab69bd10b"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "e6e6231e09e41fc75d97c67281ec4f51"
  },
  {
    "url": "database/oracle/install.html",
    "revision": "1486f50580138cde8ff21127be5076b5"
  },
  {
    "url": "database/redis/a-usecase.html",
    "revision": "9237a30327647be6e47e4ca6be557e1b"
  },
  {
    "url": "database/redis/index.html",
    "revision": "3e8d1a392b53a520ea3e413a8dac1ce1"
  },
  {
    "url": "front/javascript/index.html",
    "revision": "e349b0d5b4c0ad9de074afcf6bf20340"
  },
  {
    "url": "front/vue/amap.html",
    "revision": "93f6a7474427d6402099680253263052"
  },
  {
    "url": "front/vue/index.html",
    "revision": "c4968df0a5ae82682e059050e6faca79"
  },
  {
    "url": "guide/a-about.html",
    "revision": "c6a0c042990adf075e410b243526ea24"
  },
  {
    "url": "guide/b-icp.html",
    "revision": "7f15e0d9cc3457ccbebf4c03c4efdd91"
  },
  {
    "url": "guide/c-download.html",
    "revision": "021d16615896b4d635335c50862fe23b"
  },
  {
    "url": "guide/index.html",
    "revision": "0254cfd4233a544d569c3a87ced7c85d"
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
    "revision": "c62f9d0c867cc067083e1c6fc5719490"
  },
  {
    "url": "os/linux/index.html",
    "revision": "844c7db44991d9478338b400f577601c"
  },
  {
    "url": "others/cicd/docker-compose.html",
    "revision": "6c3b20eae76601e0ef2c2a3fd419c650"
  },
  {
    "url": "others/cicd/docker.html",
    "revision": "c4cc9098456841302567da6589def56e"
  },
  {
    "url": "others/cicd/index.html",
    "revision": "21f127584d6d064b6bdd75e6485a4a57"
  },
  {
    "url": "others/interview/index.html",
    "revision": "f8041fb91e533603f4210b0802213961"
  },
  {
    "url": "others/issues/annotation.html",
    "revision": "66ccae21b14a0c36d64077ee3b62d8b9"
  },
  {
    "url": "others/issues/cors.html",
    "revision": "8ac10713ca8c794a91227219de0b5883"
  },
  {
    "url": "others/issues/finally.html",
    "revision": "e1ab45a183d9d6800dcbc2343abbb998"
  },
  {
    "url": "others/issues/index.html",
    "revision": "e95d213d7b3d026860811a0f9ac9d866"
  },
  {
    "url": "others/issues/javax-persistence.html",
    "revision": "51a5b0b42d55c4ff795598fdf45994e6"
  },
  {
    "url": "others/issues/log.html",
    "revision": "2acba2b369654765fdd4c1d656315b5c"
  },
  {
    "url": "others/issues/properties.html",
    "revision": "de75defe4382fc96633cb812d218dfd9"
  },
  {
    "url": "others/sdk/dingtalk.html",
    "revision": "7cfc0992def81d61b28281e9980139d8"
  },
  {
    "url": "others/sdk/ffmpeg.html",
    "revision": "35406f1624e623c9873ac1717ca6c5b2"
  },
  {
    "url": "others/sdk/index.html",
    "revision": "9e33a77a9a1e65d05f29e945a0a794e7"
  },
  {
    "url": "others/sdk/sdk-video.jpg",
    "revision": "7d98ade27f68ee575f581616ae88d8cc"
  },
  {
    "url": "others/sdk/video.html",
    "revision": "48ba38330cd46f1e10e49ba62a74c29f"
  },
  {
    "url": "others/utils/index.html",
    "revision": "7385f869ef45fff5c24e9669e4c8ac0d"
  },
  {
    "url": "others/utils/utils.html",
    "revision": "bfe31fa0b8b3d6d302a295bc2fce0693"
  },
  {
    "url": "others/work/electronjs.jpg",
    "revision": "132821f8a5ec6a74aa5eac263f01f024"
  },
  {
    "url": "others/work/ibms.html",
    "revision": "54c22f21b7367c50b20f012d36bd436b"
  },
  {
    "url": "others/work/index.html",
    "revision": "8da1aa43d5543c13686df2603ea8678d"
  },
  {
    "url": "tools/git/a-config.html",
    "revision": "2d43a01278bbd31ad6de6bc654be0bee"
  },
  {
    "url": "tools/git/b-repo.html",
    "revision": "8335b299538d0a30587c89b946ed3487"
  },
  {
    "url": "tools/git/c-base.html",
    "revision": "dd5cb1be5c0f26a681ad7e3d50af6101"
  },
  {
    "url": "tools/git/d-branch.html",
    "revision": "06c4b6a44c648a62f7e88f6621892aae"
  },
  {
    "url": "tools/git/e-log.html",
    "revision": "ae859bf615a897cd15ecd81e58533322"
  },
  {
    "url": "tools/git/f-tag.html",
    "revision": "48091029f482fb2601f87aea85859ea7"
  },
  {
    "url": "tools/git/g-github.html",
    "revision": "ea4f1a4ba35be7c48623dd9f294b02ed"
  },
  {
    "url": "tools/git/index.html",
    "revision": "c70dd556f98e5aca206e799de359f777"
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
    "revision": "613aca956021b7a16b0980e7407efac6"
  },
  {
    "url": "tools/maven/b-nexus.html",
    "revision": "e65fb89cda3f52fa7b93dbd0fae25afe"
  },
  {
    "url": "tools/maven/index.html",
    "revision": "8aaba6faeaddea22056d1cf05c082c5e"
  },
  {
    "url": "tools/maven/pom.html",
    "revision": "6fab3d0f178c3181bcee334bc3a53bc8"
  },
  {
    "url": "tools/maven/settings.html",
    "revision": "89c4b8c529c4d15dc7e919b758e4d998"
  },
  {
    "url": "tools/navicat/backup.html",
    "revision": "a5aa298ed3e0f6fbab32c307871e0c7c"
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
    "revision": "4ab6c2db58a1e7f019d5be9008cfb26b"
  },
  {
    "url": "tools/nginx/index.html",
    "revision": "4d369f3398cf883ea4ff6218f95b99e4"
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
