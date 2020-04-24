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
    "revision": "4806e3936b5b747fdced88358c3d865a"
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
    "url": "assets/js/10.a03c2ffe.js",
    "revision": "092845f3c67942b63a6ff7193032ce14"
  },
  {
    "url": "assets/js/11.bdc83512.js",
    "revision": "276bd8e9114f0425ec86ee75af75433d"
  },
  {
    "url": "assets/js/12.94078cac.js",
    "revision": "bab44923a288f28d2d7beb528ade2239"
  },
  {
    "url": "assets/js/13.58107504.js",
    "revision": "78d8f5d5b0c8ae8d14a3abefa1f8107e"
  },
  {
    "url": "assets/js/14.6a9ff23a.js",
    "revision": "78feda01d889219c2d5ea37040bfc664"
  },
  {
    "url": "assets/js/15.e6716263.js",
    "revision": "04917743b4a8e3f217aaa6935086a87b"
  },
  {
    "url": "assets/js/16.96b2c630.js",
    "revision": "c01af1bef5ff15fc34ee44df956fb686"
  },
  {
    "url": "assets/js/17.6c9e5c6b.js",
    "revision": "442471dd565a3c48352407d334ffeb4f"
  },
  {
    "url": "assets/js/18.c001d191.js",
    "revision": "a93ce9ad17625992422e40806f33adc5"
  },
  {
    "url": "assets/js/19.48f58e56.js",
    "revision": "bfeda2482a11175a7c08c6a0c83adbd4"
  },
  {
    "url": "assets/js/2.fa3ecc99.js",
    "revision": "d8b1babceb137990b983e0f4b4223619"
  },
  {
    "url": "assets/js/20.6eb2b873.js",
    "revision": "228aea04efb4ccfd9da0c2b58c08502c"
  },
  {
    "url": "assets/js/21.b4a230f8.js",
    "revision": "608853a3e4d9f3f4d93e63bad0c57689"
  },
  {
    "url": "assets/js/22.7ceac6ef.js",
    "revision": "73b2e168ce257268fcaf5488744afffc"
  },
  {
    "url": "assets/js/23.820766ea.js",
    "revision": "6b7c14cf2b7f7fd68dd189694a6249ba"
  },
  {
    "url": "assets/js/24.bc33463e.js",
    "revision": "4cde2c8740d63ba0357c17efe64e013f"
  },
  {
    "url": "assets/js/25.929c3fca.js",
    "revision": "120e73989ce892e22fd64e1967b477c9"
  },
  {
    "url": "assets/js/26.5fffa4f6.js",
    "revision": "cd1f22ed809cc41bd64f334abbd849c8"
  },
  {
    "url": "assets/js/27.8a2c6507.js",
    "revision": "ddc9651f0f68891408b42b154fb888ad"
  },
  {
    "url": "assets/js/28.9a15119b.js",
    "revision": "27445499b88c0c2869d4bbd78eecd55b"
  },
  {
    "url": "assets/js/29.8128f2c0.js",
    "revision": "af4bfb108a56b50023db75b3d762b470"
  },
  {
    "url": "assets/js/3.10cb9937.js",
    "revision": "6a68bd11f87cfb411512238d185d7b97"
  },
  {
    "url": "assets/js/30.70fedbf3.js",
    "revision": "4becb1b746dc64a027527ea32c692097"
  },
  {
    "url": "assets/js/31.fb2658f8.js",
    "revision": "99aa270d5d2cf623896a4aa8cf2b2f9b"
  },
  {
    "url": "assets/js/32.5a8e5707.js",
    "revision": "3efd5e408d99159264103f29c88a41ad"
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
    "url": "assets/js/44.df62ff7e.js",
    "revision": "aff28e7b49701d24c653887b7bf74a65"
  },
  {
    "url": "assets/js/45.9ac6346f.js",
    "revision": "4a80adac0dff72e5dcf2b6ab02d03d4d"
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
    "url": "assets/js/48.5d90ea58.js",
    "revision": "0a43db6782171c45eaf6f185780468c5"
  },
  {
    "url": "assets/js/49.df4643e3.js",
    "revision": "3f3c4342a1429c44d684822839faa655"
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
    "url": "assets/js/52.7f87acbb.js",
    "revision": "865ed1c9cc80979c623aff3e2122c510"
  },
  {
    "url": "assets/js/53.98ffb2b4.js",
    "revision": "1494399606437bae356db920916684c4"
  },
  {
    "url": "assets/js/54.e57c8fd2.js",
    "revision": "c3fb4ab7bb04ccac5c268fa261e66639"
  },
  {
    "url": "assets/js/55.bd13d9ed.js",
    "revision": "d2fa50a21e881ca35bb0cc45ff57e759"
  },
  {
    "url": "assets/js/56.99801dda.js",
    "revision": "3a873932cbb66c866380df60466b7924"
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
    "url": "assets/js/7.56a23a8d.js",
    "revision": "88b37fbfae0712100835fde1080d018b"
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
    "url": "assets/js/8.bca3974e.js",
    "revision": "5dfd8481bc96b8842b0e708b872565b7"
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
    "url": "assets/js/9.8b949133.js",
    "revision": "8f075297fcb7e47528da29665c30315f"
  },
  {
    "url": "assets/js/app.1f21137e.js",
    "revision": "0bd2b58d21dbc31aade47ef121f009d9"
  },
  {
    "url": "avatar.png",
    "revision": "3148d27e27b8a5da563aefd136a9bea3"
  },
  {
    "url": "backend/go/a-1.html",
    "revision": "9cdbc5e1b98162612cca255a382a6650"
  },
  {
    "url": "backend/go/index.html",
    "revision": "662add59933be64bcd9cfb526dda00f4"
  },
  {
    "url": "backend/internet/http.html",
    "revision": "ebf0c83457d96782e81366ddeda83a23"
  },
  {
    "url": "backend/internet/index.html",
    "revision": "f76bdafd2ee84ad622f3d40d704b369d"
  },
  {
    "url": "backend/java/a-1.html",
    "revision": "a17222496ca55013b3fa86af2e30f531"
  },
  {
    "url": "backend/java/b-2.html",
    "revision": "f3598b1c8cdc06dadb0213a99bc5a874"
  },
  {
    "url": "backend/java/c-3.html",
    "revision": "e89e0297d997525ec5d94a17ade375d4"
  },
  {
    "url": "backend/java/Collection.jpg",
    "revision": "82eccbdcafece8999f235a54e736289c"
  },
  {
    "url": "backend/java/d-4.html",
    "revision": "edbf5f32610b33965d33820315bdfc7d"
  },
  {
    "url": "backend/java/e-5.html",
    "revision": "ed82d97d996274c418eaec37770b8c65"
  },
  {
    "url": "backend/java/elasticsearch.html",
    "revision": "e387f377219a9ec89c6e8eafd9dd444c"
  },
  {
    "url": "backend/java/f-6.html",
    "revision": "d3a450486ba99269f15106b3965b23e8"
  },
  {
    "url": "backend/java/h-7.html",
    "revision": "9496afc93d78689220600b201f881971"
  },
  {
    "url": "backend/java/i-8.html",
    "revision": "4108f032f53829323be41c0a8d98cadf"
  },
  {
    "url": "backend/java/index.html",
    "revision": "80117a4b189445ae78bbab28978b327e"
  },
  {
    "url": "backend/java/j-9.html",
    "revision": "d31f1b42c4c61f3aa818c3a4011ddd98"
  },
  {
    "url": "backend/java/k-10.html",
    "revision": "f1ca8857647a2f649e2004c5f603de8b"
  },
  {
    "url": "backend/java/l-11.html",
    "revision": "2bec7098d9d157315ae264b72e3fb45b"
  },
  {
    "url": "backend/java/lombok.html",
    "revision": "6c596928cdbbfb5c56e7b383d9c045d4"
  },
  {
    "url": "backend/java/m-12.html",
    "revision": "abd1e7fbbef9df7e3f9455fc5f184550"
  },
  {
    "url": "backend/java/Map.jpg",
    "revision": "ea98a85e7d317daefc842d2c61ca1bba"
  },
  {
    "url": "backend/java/mybatis.html",
    "revision": "1714c4583fe3b924da254a17965ff8d6"
  },
  {
    "url": "backend/java/n-13.html",
    "revision": "f7b779bdca41b3b2eda38ef7e462f36b"
  },
  {
    "url": "backend/java/quartz.html",
    "revision": "4cdfe16a9922ef0c2bc2f1c8a698a52e"
  },
  {
    "url": "backend/java/rabbitMQ.html",
    "revision": "804b45d6593c29852778a78b82558e86"
  },
  {
    "url": "backend/java/spring-security-oauth2.html",
    "revision": "ca174e77f09c5dca1289e68f892e3468"
  },
  {
    "url": "backend/java/swagger.html",
    "revision": "e0d38e088041c1c4a9c667a48a8669c6"
  },
  {
    "url": "backend/java/throwable.jpg",
    "revision": "ad75058182258f5c2c21717e7e79f738"
  },
  {
    "url": "backend/java/websocket.html",
    "revision": "8798e0e927741353dc086335d02d6bf4"
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
    "url": "backend/redis/1.jpg",
    "revision": "91469c03a7047ab672873f07a00f6c90"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "dae5d65821ba7f186e2137c0f3f1feaa"
  },
  {
    "url": "database/mysql/install.html",
    "revision": "e71473447ddf8f95d8917f7fc612ff15"
  },
  {
    "url": "database/mysql/mysqlindex.html",
    "revision": "728f8db6db61480688cbe942fb129c55"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "a00bba5d61c71926046d3c74479651e9"
  },
  {
    "url": "database/oracle/install.html",
    "revision": "60d0010ebe20d9ba03ecf053ef6e85e8"
  },
  {
    "url": "database/redis/a-usecase.html",
    "revision": "d3df72c959d71309f91cd16234110225"
  },
  {
    "url": "database/redis/index.html",
    "revision": "98968cc1db8c58484bced29ff17f2589"
  },
  {
    "url": "front/javascript/index.html",
    "revision": "ac531abeec6fe076e710e2ba8b7476ea"
  },
  {
    "url": "front/vue/amap.html",
    "revision": "f66fa70259bc2a1f3f93f4cd47f3fc58"
  },
  {
    "url": "front/vue/index.html",
    "revision": "f2f21315a1de14a9c51025d5d4602005"
  },
  {
    "url": "guide/a-about.html",
    "revision": "2aca08981cc92cf9feea3265f528be42"
  },
  {
    "url": "guide/b-icp.html",
    "revision": "8a67c1eb553717b01a27981b5b641197"
  },
  {
    "url": "guide/c-download.html",
    "revision": "2e341314becd7d601e66d2650efec603"
  },
  {
    "url": "guide/index.html",
    "revision": "8b9c7ef93b29eed7c0a50ad0b27cef56"
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
    "revision": "d8fa5255bbfaefd4a45e3f2c6f747683"
  },
  {
    "url": "os/linux/index.html",
    "revision": "8e2f4e97b8774058f1b5eb361fed5262"
  },
  {
    "url": "others/cicd/docker-compose.html",
    "revision": "81492b305e1fb5de9778b6b52c29b635"
  },
  {
    "url": "others/cicd/docker.html",
    "revision": "5fc6d2c2fe32cb177b07bd6198b9de57"
  },
  {
    "url": "others/cicd/index.html",
    "revision": "fea35d043bc61313aa3ee2d710981475"
  },
  {
    "url": "others/interview/index.html",
    "revision": "855b5a84b0f9babb186d74c5a552d9ee"
  },
  {
    "url": "others/issues/annotation.html",
    "revision": "73c91e9fd3c3dc3a28c8e5178eac34e3"
  },
  {
    "url": "others/issues/cors.html",
    "revision": "86d0b54ee1517a577607c6148b075885"
  },
  {
    "url": "others/issues/finally.html",
    "revision": "681c3fd6248ccc5dcc37b6b568f6116d"
  },
  {
    "url": "others/issues/index.html",
    "revision": "6ef5b95632c7b19339902f8fc7243582"
  },
  {
    "url": "others/issues/javax-persistence.html",
    "revision": "bdd7a72c0f15a4a73bdb13711566bafa"
  },
  {
    "url": "others/issues/log.html",
    "revision": "4b03bdc891e9d14429d5cac6c935031d"
  },
  {
    "url": "others/issues/properties.html",
    "revision": "41236b48a1b07f4e234dcac13e8daaad"
  },
  {
    "url": "others/sdk/dingtalk.html",
    "revision": "102b1d2ccf6317875cb988cca4a2b1b6"
  },
  {
    "url": "others/sdk/ffmpeg.html",
    "revision": "e0fd4b63661aa7c5a49442eaf16c6707"
  },
  {
    "url": "others/sdk/index.html",
    "revision": "e23f4ed129c9bc24782cbb2f158e03fa"
  },
  {
    "url": "others/sdk/sdk-video.jpg",
    "revision": "7d98ade27f68ee575f581616ae88d8cc"
  },
  {
    "url": "others/sdk/video.html",
    "revision": "9da494f715d986ca110db2afdea636f8"
  },
  {
    "url": "others/utils/index.html",
    "revision": "3e96d9e4b8ba467b3ab31987b0a04d30"
  },
  {
    "url": "others/utils/utils.html",
    "revision": "a19eefe64df75b31d1c0d0f4d28e0433"
  },
  {
    "url": "others/work/electronjs.jpg",
    "revision": "132821f8a5ec6a74aa5eac263f01f024"
  },
  {
    "url": "others/work/ibms.html",
    "revision": "395a91895d5e850e40cf3404c0e1d31d"
  },
  {
    "url": "others/work/index.html",
    "revision": "3ab48cca1e19bc9b0353c27cd0082ac1"
  },
  {
    "url": "tools/git/a-config.html",
    "revision": "ab88b9cd31fc8fed896241c5717d2e9b"
  },
  {
    "url": "tools/git/b-repo.html",
    "revision": "75e549620404d0791d0a3e115d50872b"
  },
  {
    "url": "tools/git/c-base.html",
    "revision": "dbe9997b21771d63ca0033ffc31f50ee"
  },
  {
    "url": "tools/git/d-branch.html",
    "revision": "52174a5531d0929434322886a9ce0a7e"
  },
  {
    "url": "tools/git/e-log.html",
    "revision": "27f3e07f898ec301d538daa01e7107fd"
  },
  {
    "url": "tools/git/f-tag.html",
    "revision": "6647362d3efe58da47fbfe5e0ce77aa6"
  },
  {
    "url": "tools/git/g-github.html",
    "revision": "b47a8e7c2a356d2283a2f90c08498ebd"
  },
  {
    "url": "tools/git/index.html",
    "revision": "74576bf737783ffd4a40b8fd14b6fd98"
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
    "revision": "5a9f0dec72a7b13a6e6c622319bcc147"
  },
  {
    "url": "tools/maven/b-nexus.html",
    "revision": "0b146580181b07c4b5a58e88c77c9ccb"
  },
  {
    "url": "tools/maven/index.html",
    "revision": "6f33a42b5cbc11a9df03370b8f155be8"
  },
  {
    "url": "tools/maven/pom.html",
    "revision": "40cea02262de2209b87363207e34bfea"
  },
  {
    "url": "tools/maven/settings.html",
    "revision": "b5ec31343722ee9528cbc48614be68a7"
  },
  {
    "url": "tools/navicat/backup.html",
    "revision": "dd6a0b604324bb8f0d259f53cf35e224"
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
    "revision": "535bf2382a7e6d343b8b151d0209928c"
  },
  {
    "url": "tools/nginx/index.html",
    "revision": "0da72de6fdf4c238992f490dd9c11c61"
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
