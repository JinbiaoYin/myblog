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
    "revision": "6ce3357e9828d353ddf2d39ec045ae8f"
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
    "url": "assets/js/19.ba8375cc.js",
    "revision": "fc86583615a452900265770ea0a56b1d"
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
    "url": "assets/js/41.86b1852c.js",
    "revision": "6ef07c88a78dc71f63431bd4d96f7034"
  },
  {
    "url": "assets/js/42.46312a9a.js",
    "revision": "ddecf967ab5fc73fb252564460ad7af0"
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
    "url": "assets/js/55.a1926197.js",
    "revision": "9a3aa8c9aa481dc82fea84fcf5437951"
  },
  {
    "url": "assets/js/56.b2aef9e5.js",
    "revision": "8c40e6d7249a5bc15c194f13e471f7dd"
  },
  {
    "url": "assets/js/57.e06594d2.js",
    "revision": "74ff0c790a4948f7e2a80795612545e7"
  },
  {
    "url": "assets/js/58.a9e0dec2.js",
    "revision": "a4c72c151f9be2e1a44beca7a4d4bcce"
  },
  {
    "url": "assets/js/59.b87fce2a.js",
    "revision": "b44fbdffde56415a6a55299d6659d548"
  },
  {
    "url": "assets/js/6.790efdf0.js",
    "revision": "22dbac2fe570a9ff0033e889da81d709"
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
    "url": "assets/js/7.47152090.js",
    "revision": "f33b349494b06082a304ea99cf67ffcd"
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
    "url": "assets/js/app.81c52c92.js",
    "revision": "e5a8ace32a4cba0d3d427b46346c080a"
  },
  {
    "url": "avatar.png",
    "revision": "3148d27e27b8a5da563aefd136a9bea3"
  },
  {
    "url": "backend/elasticsearch/index.html",
    "revision": "9e6f7404549cc6646f76826b74ad1c8a"
  },
  {
    "url": "backend/java/a-1.html",
    "revision": "b7822b859fdabbc7ab03f8b96e367e79"
  },
  {
    "url": "backend/java/b-2.html",
    "revision": "77c9e1d9e15cc13f41d1c33d934d9ac2"
  },
  {
    "url": "backend/java/c-3.html",
    "revision": "ed37f9bd04f4bcc88703963543730ba2"
  },
  {
    "url": "backend/java/d-4.html",
    "revision": "bfd0f17ddff302b9320817197768c91a"
  },
  {
    "url": "backend/java/e-5.html",
    "revision": "fb85e2d480cc48a2f2488a0343f5a82c"
  },
  {
    "url": "backend/java/f-6.html",
    "revision": "80e1784707fd92f13c61c0859f07db2f"
  },
  {
    "url": "backend/java/h-7.html",
    "revision": "8d3c0e07f2011f4fea31b53c8af6c2c9"
  },
  {
    "url": "backend/java/i-8.html",
    "revision": "8aff9037871e50adde7d69825ba9b46f"
  },
  {
    "url": "backend/java/index.html",
    "revision": "56d171d0fc54f860c11e3de004370be5"
  },
  {
    "url": "backend/java/j-9.html",
    "revision": "be8f77dcbf47876c341a44accd0dbc2f"
  },
  {
    "url": "backend/java/k-10.html",
    "revision": "f58dcf6436cc82e7ce8cc4490d6d366c"
  },
  {
    "url": "backend/java/l-11.html",
    "revision": "d154c8d78b2f8ee6cde242cc29979b82"
  },
  {
    "url": "backend/mybatis/index.html",
    "revision": "023a359a0ae0e3351645dde3227c969d"
  },
  {
    "url": "backend/mybatis/jdbctype.html",
    "revision": "2f12b797d36355d408c2faeb96a03937"
  },
  {
    "url": "backend/quartz/index.html",
    "revision": "13776f0a00393752d166207d1e3be56a"
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
    "revision": "bfa1612408dc59ddf3169dcf1b85886d"
  },
  {
    "url": "backend/rabbitmq/rabbitMQ.html",
    "revision": "9bb4c38e3cdd22c99bf1bc498f74ab02"
  },
  {
    "url": "backend/redis/1.jpg",
    "revision": "91469c03a7047ab672873f07a00f6c90"
  },
  {
    "url": "backend/spring-security-oauth2/index.html",
    "revision": "ed09a6e6b83c7ba870dd738f40e05307"
  },
  {
    "url": "backend/spring-security-oauth2/use.html",
    "revision": "46e0121f85e7ca27ebd7b20bd1290943"
  },
  {
    "url": "backend/workflow/index.html",
    "revision": "5eab8cea7682d0174d3fba2601c8409e"
  },
  {
    "url": "backend/workflow/modeler.html",
    "revision": "d98749fb780841e19769919f4869e102"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "66df55e515bcd369085eab168e932cdc"
  },
  {
    "url": "database/mysql/install.html",
    "revision": "0ef18222b6ecfcf32599b9ae51f5de2b"
  },
  {
    "url": "database/mysql/mysqlindex.html",
    "revision": "b3e503e1ec8adf298f8c8061379408c3"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "f063b04accbc222a6b56506e022c7a80"
  },
  {
    "url": "database/oracle/install.html",
    "revision": "8611bf18ccbc8791a3628a85f86fe6d7"
  },
  {
    "url": "database/redis/a-usecase.html",
    "revision": "026d10d5db0f4c26378dc20f2b04f542"
  },
  {
    "url": "database/redis/index.html",
    "revision": "cd78d8bcbc71a0e07f6b4e6c1392330f"
  },
  {
    "url": "front/javascript/index.html",
    "revision": "315e63b09e93fb53cce7073de9a0f0fe"
  },
  {
    "url": "front/vue/amap.html",
    "revision": "0ee3e0f1eee138844882b8b0299a8fff"
  },
  {
    "url": "front/vue/index.html",
    "revision": "29b30c8bc95eb26f50b427f991ad2cdc"
  },
  {
    "url": "guide/a-about.html",
    "revision": "f1cdfaba4df84d33d558586736f8d314"
  },
  {
    "url": "guide/b-icp.html",
    "revision": "4ba2726e4f97823e61d14a63e2f9ab3d"
  },
  {
    "url": "guide/c-download.html",
    "revision": "2aa908f81763b548a4150f5735ba1734"
  },
  {
    "url": "guide/index.html",
    "revision": "069b2fb6fc610dd574eea48ba52d8ed4"
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
    "revision": "81cab3b48d1dea8d122d05a35f8edb2d"
  },
  {
    "url": "os/linux/index.html",
    "revision": "093b7596e91e188655dd48f3a9274318"
  },
  {
    "url": "others/cicd/docker-compose.html",
    "revision": "63c511adb90273d03d007f3888a4f98a"
  },
  {
    "url": "others/cicd/docker.html",
    "revision": "c9c3ec95295946d3e69e13a8c449f12b"
  },
  {
    "url": "others/cicd/index.html",
    "revision": "4154905c297023867159a86f2a958dfc"
  },
  {
    "url": "others/interview/index.html",
    "revision": "f7fef4eeb9346f7ec87526c0c74f35cb"
  },
  {
    "url": "others/issues/annotation.html",
    "revision": "e72c44cc1e55f75d58e111b8025f5b0d"
  },
  {
    "url": "others/issues/cors.html",
    "revision": "2bdf612d1fafdeec9684c27077baef4c"
  },
  {
    "url": "others/issues/finally.html",
    "revision": "ebf578b7554019f1f6425b9c7634c120"
  },
  {
    "url": "others/issues/index.html",
    "revision": "8b31d2788fb93dde34c10edbfca58354"
  },
  {
    "url": "others/issues/javax-persistence.html",
    "revision": "1b39cea0aef3a899ee420c57447714b1"
  },
  {
    "url": "others/issues/log.html",
    "revision": "7eed8c5ea59ac0b33366d5af905ecd63"
  },
  {
    "url": "others/issues/lombok.html",
    "revision": "38e38467c85c2054967904900cb39a36"
  },
  {
    "url": "others/issues/properties.html",
    "revision": "6ab4bbf9ff9a806c7db0b931be98e129"
  },
  {
    "url": "others/issues/swagger.html",
    "revision": "820508df5a550af3b27da6a898710673"
  },
  {
    "url": "others/sdk/dingtalk.html",
    "revision": "19212b0390ca2eb0e0907536daf1e42f"
  },
  {
    "url": "others/sdk/index.html",
    "revision": "dcaa4b9e4757f674c6347b34dfb889df"
  },
  {
    "url": "others/sdk/sdk-video.jpg",
    "revision": "7d98ade27f68ee575f581616ae88d8cc"
  },
  {
    "url": "others/sdk/video.html",
    "revision": "84f638fb3d7859c84e081e874a2c9e80"
  },
  {
    "url": "others/utils/index.html",
    "revision": "2ad082eeff867a3f9728e77bb26461e7"
  },
  {
    "url": "others/utils/utils.html",
    "revision": "651f5562a7c966ff36c8c5ce4ad5887b"
  },
  {
    "url": "others/work/electronjs.jpg",
    "revision": "132821f8a5ec6a74aa5eac263f01f024"
  },
  {
    "url": "others/work/iis.html",
    "revision": "5aa79703548d29abbc5a76bf067899d5"
  },
  {
    "url": "others/work/index.html",
    "revision": "f5b6b349a7b4e905fdec21ee8f26cf18"
  },
  {
    "url": "tools/git/a-config.html",
    "revision": "e60d6891d10b1f46e235110ac5862dc6"
  },
  {
    "url": "tools/git/b-repo.html",
    "revision": "f3539be52ccbf4a77300a9774e881762"
  },
  {
    "url": "tools/git/c-base.html",
    "revision": "fdf298b9340ea394775ac597ab98c6ac"
  },
  {
    "url": "tools/git/d-branch.html",
    "revision": "f8cf565b575f93a51b1ca86278544f57"
  },
  {
    "url": "tools/git/e-log.html",
    "revision": "735bd58897710cdf32ac6d2a27821d50"
  },
  {
    "url": "tools/git/f-tag.html",
    "revision": "89e89c4a5064a06790a4c1d207d08dc3"
  },
  {
    "url": "tools/git/g-github.html",
    "revision": "2c6732ac4a3114e25101c8013211409a"
  },
  {
    "url": "tools/git/index.html",
    "revision": "338c26a25a0abbaaeb6183975bcafb40"
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
    "revision": "0d5e5fba7225a4c29858be66b8b282ee"
  },
  {
    "url": "tools/maven/b-nexus.html",
    "revision": "7c435b44979b6c170e59148805d3bb5a"
  },
  {
    "url": "tools/maven/index.html",
    "revision": "1b69a33179c240ddc4368a4fea8dc86e"
  },
  {
    "url": "tools/maven/pom.html",
    "revision": "36ca6e8254bcc568f0dc1a82852c3279"
  },
  {
    "url": "tools/maven/settings.html",
    "revision": "06c1a55a258423d9d9a97b7aec6c5848"
  },
  {
    "url": "tools/navicat/backup.html",
    "revision": "a778bd0e75bf0be5fdd7dff8fc0125cd"
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
    "revision": "7d431551970eecc16aa0ea787460cffb"
  },
  {
    "url": "tools/nginx/index.html",
    "revision": "fdf80ac4c0c906b180893bc2051a7cb8"
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
