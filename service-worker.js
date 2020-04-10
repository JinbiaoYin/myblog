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
    "revision": "1c6068f05d44dc4b46ea4ad3ed3bd59b"
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
    "url": "assets/js/21.69d6a957.js",
    "revision": "cd1e08726cb69aea8eb209fe471ea526"
  },
  {
    "url": "assets/js/22.99e58ac4.js",
    "revision": "a85b1be8fa8a129cf8281cdfe22e2076"
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
    "url": "assets/js/31.cad286a1.js",
    "revision": "87f021e62e70f8357dba96f2a6fa65b0"
  },
  {
    "url": "assets/js/32.cb9704b8.js",
    "revision": "13b00819982627d03c20f9730286be32"
  },
  {
    "url": "assets/js/33.2e06ad8e.js",
    "revision": "9e04f68602a1f9455301779ebd873593"
  },
  {
    "url": "assets/js/34.d5cbf610.js",
    "revision": "03951365fc88b0530d035a7f9a2c0422"
  },
  {
    "url": "assets/js/35.061d7fd8.js",
    "revision": "da7da332d49d7cd08e3f5676dabd9a5a"
  },
  {
    "url": "assets/js/36.4342c1f8.js",
    "revision": "f583d0c2e026edd8678a10b3d1bccd90"
  },
  {
    "url": "assets/js/37.5c30916c.js",
    "revision": "9531992d40476d2b3eef92fbd779471a"
  },
  {
    "url": "assets/js/38.daee5072.js",
    "revision": "e14962f03ae3f8abfd66c811ef12e999"
  },
  {
    "url": "assets/js/39.706f96d8.js",
    "revision": "301e152007710fd461d8ea22b05fdc16"
  },
  {
    "url": "assets/js/4.9cfe5c87.js",
    "revision": "cf005188bd33df37b3c82a01995bcf31"
  },
  {
    "url": "assets/js/40.e718a40e.js",
    "revision": "001cb7b5dfa79265e735cec3a0eab25c"
  },
  {
    "url": "assets/js/41.e5c3bd86.js",
    "revision": "749a71c2af12f1260c9d0587cb59ddc1"
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
    "url": "assets/js/55.ed40eb4d.js",
    "revision": "48a2a6e6cd5563cb51930e767718dcc6"
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
    "url": "assets/js/58.a9e0dec2.js",
    "revision": "a4c72c151f9be2e1a44beca7a4d4bcce"
  },
  {
    "url": "assets/js/59.7155f36a.js",
    "revision": "609abea69275a690c3e9947e76863468"
  },
  {
    "url": "assets/js/6.5d062d06.js",
    "revision": "007cc4d60a2abad20268891f72d2557a"
  },
  {
    "url": "assets/js/60.c9bc48c9.js",
    "revision": "16a6d800e0829cee8a5ada37ccb6d02a"
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
    "url": "assets/js/63.4fe6b8a4.js",
    "revision": "4f5991b3bb663143e1ff45417b4c2c1f"
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
    "url": "assets/js/74.d17d08fb.js",
    "revision": "006ba92b8d2420466e4ba7ca4fbd401e"
  },
  {
    "url": "assets/js/75.786987ed.js",
    "revision": "7f1056971a97ad29839cf7bc4de9c42d"
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
    "url": "assets/js/8.80142c04.js",
    "revision": "9c3e6840953dbed7aa0a5f548ba0c7c7"
  },
  {
    "url": "assets/js/80.0bd080b5.js",
    "revision": "1d6bdeb4b2ee7c163d84e76f78d67984"
  },
  {
    "url": "assets/js/9.bd1d6dfe.js",
    "revision": "c1889028b3012c25df728010be4ce46b"
  },
  {
    "url": "assets/js/app.bf84f48b.js",
    "revision": "1ca3d52ecf5ea5dc85eaef0600e2d63b"
  },
  {
    "url": "avatar.png",
    "revision": "3148d27e27b8a5da563aefd136a9bea3"
  },
  {
    "url": "backend/elasticsearch/index.html",
    "revision": "fc6b12d8c6cee451d79e1710544c999d"
  },
  {
    "url": "backend/java/a-1.html",
    "revision": "83419c06911984b1ce9ca346041bdec9"
  },
  {
    "url": "backend/java/b-2.html",
    "revision": "145d894d86b3d66220a6331982bf1e96"
  },
  {
    "url": "backend/java/c-3.html",
    "revision": "1d50653804cdcbfdf56262a099d0cc6a"
  },
  {
    "url": "backend/java/Collection.jpg",
    "revision": "82eccbdcafece8999f235a54e736289c"
  },
  {
    "url": "backend/java/d-4.html",
    "revision": "768f51c1a2d68d60d20cfe2553947d47"
  },
  {
    "url": "backend/java/e-5.html",
    "revision": "2e908c8cb3d384c9284ea830759b9b71"
  },
  {
    "url": "backend/java/f-6.html",
    "revision": "563f48434059455396d77e89f07130cc"
  },
  {
    "url": "backend/java/h-7.html",
    "revision": "329c8c9594633d242afb7cb6124f0a90"
  },
  {
    "url": "backend/java/i-8.html",
    "revision": "a3b587c0cc92a15069cd927810dbd6d4"
  },
  {
    "url": "backend/java/index.html",
    "revision": "de1116433a9e41939e1de333b7f71273"
  },
  {
    "url": "backend/java/j-9.html",
    "revision": "50fc1154d3e6cd1f60f5701943b4045a"
  },
  {
    "url": "backend/java/k-10.html",
    "revision": "1b16169230bb81131f21c7eee924f85f"
  },
  {
    "url": "backend/java/l-11.html",
    "revision": "b0b6ec544e67fbfe639040beda7ecdb0"
  },
  {
    "url": "backend/java/Map.jpg",
    "revision": "ea98a85e7d317daefc842d2c61ca1bba"
  },
  {
    "url": "backend/mybatis/index.html",
    "revision": "a3f5e2f8ac5797adccfacd5fb48b501f"
  },
  {
    "url": "backend/mybatis/jdbctype.html",
    "revision": "a3b101c29fcf7b9d517e9d1163cd8f59"
  },
  {
    "url": "backend/quartz/index.html",
    "revision": "08805ae37894dc77ca3c08d4a9cce670"
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
    "revision": "7c40b3ad1c9ddeb092a3949d4e067274"
  },
  {
    "url": "backend/rabbitmq/rabbitMQ.html",
    "revision": "e8bd3412e039c00e9b117ed508fc1a19"
  },
  {
    "url": "backend/redis/1.jpg",
    "revision": "91469c03a7047ab672873f07a00f6c90"
  },
  {
    "url": "backend/spring-security-oauth2/index.html",
    "revision": "ea62400d8d63e711ed4fc3d1ea1e0527"
  },
  {
    "url": "backend/spring-security-oauth2/use.html",
    "revision": "1c90a7b42f513feaaddf0230f8a8530a"
  },
  {
    "url": "backend/workflow/index.html",
    "revision": "8176cea37b88e078243534773ac0c95b"
  },
  {
    "url": "backend/workflow/modeler.html",
    "revision": "37aecb64add532927f529d286499ce3c"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "a582c0695df0f2fbafe66f29cbcda285"
  },
  {
    "url": "database/mysql/install.html",
    "revision": "cbacd72b95bdae4c6cfac4949e331b69"
  },
  {
    "url": "database/mysql/mysqlindex.html",
    "revision": "7e0862053cdc546193404fb64fe77536"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "42809d472c9287dfdd96091ede13c47b"
  },
  {
    "url": "database/oracle/install.html",
    "revision": "22e57f1fd5e8bba90b95bf06926617b7"
  },
  {
    "url": "database/redis/a-usecase.html",
    "revision": "2b2f0128dda52b846ad02d4afa4a6589"
  },
  {
    "url": "database/redis/index.html",
    "revision": "ba5b538e8ff2730c9f4cb8b8e2d21480"
  },
  {
    "url": "front/javascript/index.html",
    "revision": "a07218bf0b563d3f265125333d5a4c2d"
  },
  {
    "url": "front/vue/amap.html",
    "revision": "cf7349e6ab272ceb6504e6657327ba82"
  },
  {
    "url": "front/vue/index.html",
    "revision": "815c5fa232220d607a7ba68b47ae4ff5"
  },
  {
    "url": "guide/a-about.html",
    "revision": "4f7b0c257897e75408ee3677266352df"
  },
  {
    "url": "guide/b-icp.html",
    "revision": "4c1f51f1d95bddc8983e5f08459f0719"
  },
  {
    "url": "guide/c-download.html",
    "revision": "98944d6024dd19dc73f132dc62910285"
  },
  {
    "url": "guide/index.html",
    "revision": "b1b6e2cba5c9f5261a00fbdc553ea827"
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
    "revision": "182d38b75508231079ac678c5d05c441"
  },
  {
    "url": "os/linux/index.html",
    "revision": "7e2c53f88348b741492903196458cbf3"
  },
  {
    "url": "others/cicd/docker-compose.html",
    "revision": "d8feaa79896ca35951ce70fe12adc137"
  },
  {
    "url": "others/cicd/docker.html",
    "revision": "ff73feb73cec7067a594672b1424f620"
  },
  {
    "url": "others/cicd/index.html",
    "revision": "a3780530b422bed3d23a5204693c568b"
  },
  {
    "url": "others/interview/index.html",
    "revision": "7323bcb7dc3a610d112018e680f8d1fa"
  },
  {
    "url": "others/issues/annotation.html",
    "revision": "2270cb00551118c2924d029418bd430b"
  },
  {
    "url": "others/issues/cors.html",
    "revision": "9ef290e7f4c8da6017b7e95bbd1b0fdd"
  },
  {
    "url": "others/issues/finally.html",
    "revision": "8b984507cfa23c664da7c69b249d0954"
  },
  {
    "url": "others/issues/index.html",
    "revision": "064311c506f4528f9c3ea6d1609e2f61"
  },
  {
    "url": "others/issues/javax-persistence.html",
    "revision": "74cd1b5a2bd36dfcafa7528a04b4d6db"
  },
  {
    "url": "others/issues/log.html",
    "revision": "ad8ed27c4ae1883687eb8fe374ce6a0d"
  },
  {
    "url": "others/issues/lombok.html",
    "revision": "1c9aafa8e46f2978284bef7bef84ed0f"
  },
  {
    "url": "others/issues/properties.html",
    "revision": "ed79356ff3e09cc427f866d99e4bc5df"
  },
  {
    "url": "others/issues/swagger.html",
    "revision": "405e3a162b8c3ad046bb847729cd6f92"
  },
  {
    "url": "others/sdk/dingtalk.html",
    "revision": "f6d172a0f9b7fd1a42dcb0bd56ddaaf2"
  },
  {
    "url": "others/sdk/index.html",
    "revision": "f90a1b708363bda116a67645db508f77"
  },
  {
    "url": "others/sdk/sdk-video.jpg",
    "revision": "7d98ade27f68ee575f581616ae88d8cc"
  },
  {
    "url": "others/sdk/video.html",
    "revision": "795ee04135a039573249d615b292cc65"
  },
  {
    "url": "others/utils/index.html",
    "revision": "f17865c987d652fc88018da106fb1cb8"
  },
  {
    "url": "others/utils/utils.html",
    "revision": "c6e3b50f65fe8108988db62a25a9c35a"
  },
  {
    "url": "others/work/electronjs.jpg",
    "revision": "132821f8a5ec6a74aa5eac263f01f024"
  },
  {
    "url": "others/work/iis.html",
    "revision": "90a061da63d69c839ed9288563570b84"
  },
  {
    "url": "others/work/index.html",
    "revision": "2d7c1bbe45a65b02ef95f2bfad81b0b3"
  },
  {
    "url": "tools/git/a-config.html",
    "revision": "6bd5b669edb9908b3dff7ebb26c60aee"
  },
  {
    "url": "tools/git/b-repo.html",
    "revision": "0fd64f9d0a3758761bd48a76d646fd88"
  },
  {
    "url": "tools/git/c-base.html",
    "revision": "bb5e185edc138c32b378ffd3324562b1"
  },
  {
    "url": "tools/git/d-branch.html",
    "revision": "6bcab246b7a54318b63cbb9e87c93c38"
  },
  {
    "url": "tools/git/e-log.html",
    "revision": "1364aba345c34edaf536f673aa64a168"
  },
  {
    "url": "tools/git/f-tag.html",
    "revision": "ec7769a65621fc906ae2402b25d52258"
  },
  {
    "url": "tools/git/g-github.html",
    "revision": "b1bcf94b5deff23116c695e42323833e"
  },
  {
    "url": "tools/git/index.html",
    "revision": "e48af393858b12f38bc8ca2c15cede17"
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
    "revision": "319b643e8cf16011739d251017cbdd63"
  },
  {
    "url": "tools/maven/b-nexus.html",
    "revision": "e6f6eb3211f6398fcd5c8a3e373c2275"
  },
  {
    "url": "tools/maven/index.html",
    "revision": "16c5399a94f4d3812ef6807909e7751f"
  },
  {
    "url": "tools/maven/pom.html",
    "revision": "414aab94aea372c0afa3c48eb257e2b0"
  },
  {
    "url": "tools/maven/settings.html",
    "revision": "a118c93600a96216029ee1288738aef2"
  },
  {
    "url": "tools/navicat/backup.html",
    "revision": "6f4ad6315be3226d06abbbd976aa69e5"
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
    "revision": "ede22fa13d4e5aad22143cb070a5ac48"
  },
  {
    "url": "tools/nginx/index.html",
    "revision": "13574c472fdfed90817d3a72f12c442e"
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
