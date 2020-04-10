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
    "revision": "12c18dd07423ee3be7e3a878eb291629"
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
    "url": "assets/js/13.befc394c.js",
    "revision": "c17f02227c661aea8527481e979f1071"
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
    "url": "assets/js/19.ce89f7a2.js",
    "revision": "1d2fbdd0e091d36a2c4c8672efb4104d"
  },
  {
    "url": "assets/js/2.fa3ecc99.js",
    "revision": "d8b1babceb137990b983e0f4b4223619"
  },
  {
    "url": "assets/js/20.90e32b15.js",
    "revision": "a6fe0aa4226c6df494e2b5511c55922b"
  },
  {
    "url": "assets/js/21.b08c2363.js",
    "revision": "911681b6fe59cb37656e089078613f29"
  },
  {
    "url": "assets/js/22.77767053.js",
    "revision": "c42a1cea0d04bb860e64e83a6da65888"
  },
  {
    "url": "assets/js/23.00a30287.js",
    "revision": "e573f4cdac83659dde4bfb195eddd048"
  },
  {
    "url": "assets/js/24.ae2b7399.js",
    "revision": "e9142dad03c0be43b890601c498e6e71"
  },
  {
    "url": "assets/js/25.5bf1e54d.js",
    "revision": "37f08d33f00e462ab95286c5811f3696"
  },
  {
    "url": "assets/js/26.c3ebc05c.js",
    "revision": "87bd3cb848b31c505dcfee35020578d6"
  },
  {
    "url": "assets/js/27.8f6c6626.js",
    "revision": "5b16341d67f0d75b7028b56da48ba7d0"
  },
  {
    "url": "assets/js/28.a0e29beb.js",
    "revision": "f6e6bd296518e2bf53df47cab6e46d56"
  },
  {
    "url": "assets/js/29.555a2461.js",
    "revision": "8fd096494f0b95dc7015da34ae1e744c"
  },
  {
    "url": "assets/js/3.10cb9937.js",
    "revision": "6a68bd11f87cfb411512238d185d7b97"
  },
  {
    "url": "assets/js/30.c002627d.js",
    "revision": "9686cd30a0c92b7815960a57f87c95eb"
  },
  {
    "url": "assets/js/31.338251ba.js",
    "revision": "2d97b540e827ff97c18ac482d99643a8"
  },
  {
    "url": "assets/js/32.c9183194.js",
    "revision": "fc45cf35f3483848d952bac080cae6d0"
  },
  {
    "url": "assets/js/33.49749015.js",
    "revision": "688e31da126123c3b2b60a8e0bf31b6b"
  },
  {
    "url": "assets/js/34.e3f24dbe.js",
    "revision": "1dee194755338b29592721f75d1b41d2"
  },
  {
    "url": "assets/js/35.061d7fd8.js",
    "revision": "da7da332d49d7cd08e3f5676dabd9a5a"
  },
  {
    "url": "assets/js/36.e0d47f26.js",
    "revision": "0311400fa81e83a96aa6c4d390fb3460"
  },
  {
    "url": "assets/js/37.ba730568.js",
    "revision": "c26669c62bfac459207ddc0b8cc030a8"
  },
  {
    "url": "assets/js/38.653879cc.js",
    "revision": "5da05610951e5f03f396f1125dbc0faf"
  },
  {
    "url": "assets/js/39.e28547c5.js",
    "revision": "70d10e9a3046ca8508580ea4ca8a3a22"
  },
  {
    "url": "assets/js/4.9cfe5c87.js",
    "revision": "cf005188bd33df37b3c82a01995bcf31"
  },
  {
    "url": "assets/js/40.3026f23c.js",
    "revision": "99987c37c1392ecbd34fa0242616c8b9"
  },
  {
    "url": "assets/js/41.d0c1e346.js",
    "revision": "377d29c2fbcabb2aee9fc05f17a419c4"
  },
  {
    "url": "assets/js/42.f39e2d90.js",
    "revision": "aeb91138c4a56ba8ab3fdcd29e73f81b"
  },
  {
    "url": "assets/js/43.b5273548.js",
    "revision": "6a6304ac882c1d27056bab2af952299a"
  },
  {
    "url": "assets/js/44.2be2a9f9.js",
    "revision": "81aaeb891dec4201dcb7357d265452df"
  },
  {
    "url": "assets/js/45.8d34dd45.js",
    "revision": "0b6268ae919a7f6af2bbe3066b854f1b"
  },
  {
    "url": "assets/js/46.5703bfc0.js",
    "revision": "d82d6c55cba8024114f3a7e0c2975065"
  },
  {
    "url": "assets/js/47.69d78cc6.js",
    "revision": "7cad482f8163928ab0065ad7f618bb72"
  },
  {
    "url": "assets/js/48.0d7ff55b.js",
    "revision": "06bcfa736f748f5cd827419b77bbec97"
  },
  {
    "url": "assets/js/49.acecbc33.js",
    "revision": "7129e96626560925af6a500f5df5d8fc"
  },
  {
    "url": "assets/js/5.7c40eeda.js",
    "revision": "2cd0776caacc66c4a9f3d17cf3d53dfc"
  },
  {
    "url": "assets/js/50.39cc835a.js",
    "revision": "0649455bf661fcda459cd67292b8ea84"
  },
  {
    "url": "assets/js/51.fb568972.js",
    "revision": "d6d85c23cfe3cbd43f4ea55f3119c544"
  },
  {
    "url": "assets/js/52.4c407c2e.js",
    "revision": "77ec5b02b72e0502c6bd6854bc5731aa"
  },
  {
    "url": "assets/js/53.890c9064.js",
    "revision": "1eb680602476c2fe3127ee7c74e9c2d7"
  },
  {
    "url": "assets/js/54.158820f4.js",
    "revision": "192db519a8a736028aee413695e79e63"
  },
  {
    "url": "assets/js/55.f52b13aa.js",
    "revision": "cac22d79ab48340501b2e434fd78a1f7"
  },
  {
    "url": "assets/js/56.b2aef9e5.js",
    "revision": "8c40e6d7249a5bc15c194f13e471f7dd"
  },
  {
    "url": "assets/js/57.5a3cd840.js",
    "revision": "1cdd8645d560106acfcd59f913e958d2"
  },
  {
    "url": "assets/js/58.3184afa0.js",
    "revision": "d394a25f50f8f93fe40742b61d5c80ed"
  },
  {
    "url": "assets/js/59.e19225f5.js",
    "revision": "ba9ef85f8188e483745ffbfb8d1b96af"
  },
  {
    "url": "assets/js/6.5d062d06.js",
    "revision": "007cc4d60a2abad20268891f72d2557a"
  },
  {
    "url": "assets/js/60.9eba8946.js",
    "revision": "07583a188bcee54be104a1fa0fc864c3"
  },
  {
    "url": "assets/js/61.1569c5eb.js",
    "revision": "f04ce78476604263d57c61df7bd4e437"
  },
  {
    "url": "assets/js/62.4d1c2763.js",
    "revision": "3123a929a5fd3f41d0da5c9a94692e0c"
  },
  {
    "url": "assets/js/63.5a3adeaa.js",
    "revision": "7c9150f42e9bddcac67170561263a48a"
  },
  {
    "url": "assets/js/64.f1388719.js",
    "revision": "818603eb9689195dc7b2d4553a8f420d"
  },
  {
    "url": "assets/js/65.5b73cb68.js",
    "revision": "f897f43448e0b785e0dc9ba8f31e62bc"
  },
  {
    "url": "assets/js/66.39c10e05.js",
    "revision": "95508a01a4ce755292c1b13d280ad568"
  },
  {
    "url": "assets/js/67.4160ed4b.js",
    "revision": "8ca318736f25b2171a0066ff8282d287"
  },
  {
    "url": "assets/js/68.32e165f0.js",
    "revision": "4ed389113a514b4c5ff193d3f301abbe"
  },
  {
    "url": "assets/js/69.7dc4a065.js",
    "revision": "8d83cbbf1f42697e352bd205097c029c"
  },
  {
    "url": "assets/js/7.8a1412d1.js",
    "revision": "6ba94b09967d447788b89d60bd5c3caf"
  },
  {
    "url": "assets/js/70.64d82dc6.js",
    "revision": "c2ac936fc2a59ba970d88becf1ad0f0d"
  },
  {
    "url": "assets/js/71.038abb0b.js",
    "revision": "16d2f689a18e3477844d9adac24f7eef"
  },
  {
    "url": "assets/js/72.dc0a1e92.js",
    "revision": "c55ccf30214984f9bc05449c7f54b9a5"
  },
  {
    "url": "assets/js/73.fa181760.js",
    "revision": "cf7d0e368e13f113f94880e58f5f2be9"
  },
  {
    "url": "assets/js/74.4bdcf6ba.js",
    "revision": "7d7b52beff6562ff19e2a55176dd3177"
  },
  {
    "url": "assets/js/75.8511eb1b.js",
    "revision": "259b8634a0ecd88ccf66448f3dc64a70"
  },
  {
    "url": "assets/js/76.97bcdfa9.js",
    "revision": "9abb68eebce1dd65d427a18ac6c9fc8b"
  },
  {
    "url": "assets/js/77.b06c8c42.js",
    "revision": "d3b9004c587c8c8de4bb18f51f5de570"
  },
  {
    "url": "assets/js/78.2b98f8fd.js",
    "revision": "a51f3c474915078a702229672bd5497c"
  },
  {
    "url": "assets/js/79.46f32c46.js",
    "revision": "63a42fc7d5ca0fa79d8239a530354f95"
  },
  {
    "url": "assets/js/8.952e844a.js",
    "revision": "2dfe53b7ca0853459bd8bfcb862fbe75"
  },
  {
    "url": "assets/js/80.0bd080b5.js",
    "revision": "1d6bdeb4b2ee7c163d84e76f78d67984"
  },
  {
    "url": "assets/js/9.d130ef71.js",
    "revision": "918d4caf6bb93442500c726309ef11ad"
  },
  {
    "url": "assets/js/app.dcf19dfd.js",
    "revision": "e453d557e10d90f402a03f879ffad544"
  },
  {
    "url": "avatar.png",
    "revision": "3148d27e27b8a5da563aefd136a9bea3"
  },
  {
    "url": "backend/elasticsearch/index.html",
    "revision": "fbabe87b0f1ce11ad74ad65a740e6f7b"
  },
  {
    "url": "backend/java/a-1.html",
    "revision": "403332037f9276b0f7db9f3bbdcddf78"
  },
  {
    "url": "backend/java/b-2.html",
    "revision": "331ef7d433a06f7f12d67bd220237f70"
  },
  {
    "url": "backend/java/c-3.html",
    "revision": "d3fc02333feb6a7d77f023b485b174dd"
  },
  {
    "url": "backend/java/Collection.jpg",
    "revision": "82eccbdcafece8999f235a54e736289c"
  },
  {
    "url": "backend/java/d-4.html",
    "revision": "9d96baa166a90ad5197810d1c96a736d"
  },
  {
    "url": "backend/java/e-5.html",
    "revision": "6955615c72833267f696ef6efd99689f"
  },
  {
    "url": "backend/java/f-6.html",
    "revision": "f5f3033d7b340d9e33c0c202155bb4a4"
  },
  {
    "url": "backend/java/h-7.html",
    "revision": "3661b1d8c6f5ea5d7d7994134eb4b273"
  },
  {
    "url": "backend/java/i-8.html",
    "revision": "ec5f59bfbbbfd51a2b91ffbbd1971365"
  },
  {
    "url": "backend/java/index.html",
    "revision": "282df97ee00abb9f9b83e561b0b5d5d4"
  },
  {
    "url": "backend/java/j-9.html",
    "revision": "28526b8b7209d335c89cf4b0c863d637"
  },
  {
    "url": "backend/java/k-10.html",
    "revision": "73c5bd47cfae9ca2be8b8a2625109618"
  },
  {
    "url": "backend/java/l-11.html",
    "revision": "c67a9fe21a2eebd6c0d6f26e3b89619c"
  },
  {
    "url": "backend/java/Map.jpg",
    "revision": "ea98a85e7d317daefc842d2c61ca1bba"
  },
  {
    "url": "backend/mybatis/index.html",
    "revision": "dfceb77aecd81240ff8d93f52706df18"
  },
  {
    "url": "backend/mybatis/jdbctype.html",
    "revision": "a85986f4400e3d45e134925bea50dcb5"
  },
  {
    "url": "backend/quartz/index.html",
    "revision": "39c7703e53aa83c1cc996a2c72838d0c"
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
    "revision": "085d258cf93aab3eb9ca7ee264608745"
  },
  {
    "url": "backend/rabbitmq/rabbitMQ.html",
    "revision": "d8010f0a45be1ec2d484ea154b137cae"
  },
  {
    "url": "backend/redis/1.jpg",
    "revision": "91469c03a7047ab672873f07a00f6c90"
  },
  {
    "url": "backend/spring-security-oauth2/index.html",
    "revision": "ae1c848add3c39002236cd11f2edde53"
  },
  {
    "url": "backend/spring-security-oauth2/use.html",
    "revision": "ae4f0236a76a36df5406aa538543465f"
  },
  {
    "url": "backend/workflow/index.html",
    "revision": "504aba1d307cbe950aed1458e8ef690c"
  },
  {
    "url": "backend/workflow/modeler.html",
    "revision": "ec144baa17c875ac0fef80cb36a16714"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "dfff1f459075307d0a18767d0f115d85"
  },
  {
    "url": "database/mysql/install.html",
    "revision": "0bcc1d6964084e9a6839b9fa248f1cfb"
  },
  {
    "url": "database/mysql/mysqlindex.html",
    "revision": "a08a0e271c5015a7aa7dc15aa3a7d85e"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "5f60482766d73b099c0976cf69d61f7f"
  },
  {
    "url": "database/oracle/install.html",
    "revision": "0e58d7ba9cca724c8abdb48d42d5f9bb"
  },
  {
    "url": "database/redis/a-usecase.html",
    "revision": "80bbb58f0f9f02f4d521b9457d21b779"
  },
  {
    "url": "database/redis/index.html",
    "revision": "f1388082906c8e523a42b4604134665c"
  },
  {
    "url": "front/javascript/index.html",
    "revision": "3535466156712ec5d007f8a7fbb8e687"
  },
  {
    "url": "front/vue/amap.html",
    "revision": "514504e1f74bb84680a0fb7cd974d5d7"
  },
  {
    "url": "front/vue/index.html",
    "revision": "a85a920d27192c8cd8e69ba7b3c4d2e8"
  },
  {
    "url": "guide/a-about.html",
    "revision": "d65be4e6fe46dbc1643a97de597b6119"
  },
  {
    "url": "guide/b-icp.html",
    "revision": "37ba4eb4154b4a1bcedec82b8f6477db"
  },
  {
    "url": "guide/c-download.html",
    "revision": "4f5ccde8a4def4928e27ef863cdf896d"
  },
  {
    "url": "guide/index.html",
    "revision": "902a606340c0ef5b48fca9ae54784521"
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
    "revision": "72f78fb73b2a0fbaf0939f73cf5440f2"
  },
  {
    "url": "os/linux/index.html",
    "revision": "9fb843147de6a240fb430aad8774cb89"
  },
  {
    "url": "others/cicd/docker-compose.html",
    "revision": "da7e0cb4b5c156661884d6106c4a20cd"
  },
  {
    "url": "others/cicd/docker.html",
    "revision": "d2d9e0ffb562a1d6ffce04e538a5b15e"
  },
  {
    "url": "others/cicd/index.html",
    "revision": "a508d947ac42f65a04553628c29ad33b"
  },
  {
    "url": "others/interview/index.html",
    "revision": "5958a55a952704816b7d6ebdf0821f1e"
  },
  {
    "url": "others/issues/annotation.html",
    "revision": "70ad3ae52216c24f2d83e60f08eddfaa"
  },
  {
    "url": "others/issues/cors.html",
    "revision": "46bcf0dd43c445d9d88deb60f9eb847b"
  },
  {
    "url": "others/issues/finally.html",
    "revision": "37b02284b36df3702fbf71563c7ea8ba"
  },
  {
    "url": "others/issues/index.html",
    "revision": "78b219422cde342f8d8192a1ff6f8369"
  },
  {
    "url": "others/issues/javax-persistence.html",
    "revision": "132349e3764b7bed44ca68f7fbe7177d"
  },
  {
    "url": "others/issues/log.html",
    "revision": "71850cea0c1135536adee8ff0807be05"
  },
  {
    "url": "others/issues/lombok.html",
    "revision": "2916d47bc31eec9b71e68cc29b776a86"
  },
  {
    "url": "others/issues/properties.html",
    "revision": "06565d12fdb99967f395efccecbcb15c"
  },
  {
    "url": "others/issues/swagger.html",
    "revision": "34ba2584b2b14c3cda6ecba05a3a177d"
  },
  {
    "url": "others/sdk/dingtalk.html",
    "revision": "657705d027e94df49679e9d5609d076d"
  },
  {
    "url": "others/sdk/index.html",
    "revision": "89e589687f3148c1988ce9e34060fe0a"
  },
  {
    "url": "others/sdk/sdk-video.jpg",
    "revision": "7d98ade27f68ee575f581616ae88d8cc"
  },
  {
    "url": "others/sdk/video.html",
    "revision": "17886a794750ec09f3502f71ab3a0f98"
  },
  {
    "url": "others/utils/index.html",
    "revision": "cd05a075ff5c7bcc98270fac077add5e"
  },
  {
    "url": "others/utils/utils.html",
    "revision": "fac6477e61d3f026867880d8d480f361"
  },
  {
    "url": "others/work/electronjs.jpg",
    "revision": "132821f8a5ec6a74aa5eac263f01f024"
  },
  {
    "url": "others/work/iis.html",
    "revision": "0cafc5ac29d3bcb709f46fb9f003e32f"
  },
  {
    "url": "others/work/index.html",
    "revision": "8f43d54c53f899cf71d20a178b92fd94"
  },
  {
    "url": "tools/git/a-config.html",
    "revision": "f3a4db02720f27cc763ef9295e145bc7"
  },
  {
    "url": "tools/git/b-repo.html",
    "revision": "87aa51f96c29dc09ff980c18725a00ad"
  },
  {
    "url": "tools/git/c-base.html",
    "revision": "da76b899d94ad256df4daa594b821761"
  },
  {
    "url": "tools/git/d-branch.html",
    "revision": "fdb273d1314613f1674c3d92e94b5392"
  },
  {
    "url": "tools/git/e-log.html",
    "revision": "38af870afe6ca2725dafaebbb826d315"
  },
  {
    "url": "tools/git/f-tag.html",
    "revision": "d13a3e9dea734e851b8137fa36c8306d"
  },
  {
    "url": "tools/git/g-github.html",
    "revision": "a94717fd155d373dc3cda6ea42ae0242"
  },
  {
    "url": "tools/git/index.html",
    "revision": "5b2ea5a47043d57dc5aab93053ce209f"
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
    "revision": "19626ad66f99525f46c8476dbb71ad83"
  },
  {
    "url": "tools/maven/b-nexus.html",
    "revision": "f2817887648492b132f53d3dcfe3e2d1"
  },
  {
    "url": "tools/maven/index.html",
    "revision": "3b1d4aa45cb77db12aa3a7bf444846ab"
  },
  {
    "url": "tools/maven/pom.html",
    "revision": "89dbb5a737f02d49a0d318e5a07188f7"
  },
  {
    "url": "tools/maven/settings.html",
    "revision": "ccde9141efbc9aa1e0abe09928cee659"
  },
  {
    "url": "tools/navicat/backup.html",
    "revision": "ad2526957311978f44e67388f82b6c20"
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
    "revision": "9a71f4c13f4932eb7381bfb51d2a8046"
  },
  {
    "url": "tools/nginx/index.html",
    "revision": "9427b0099c5a314b26bf5b8a71589458"
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
