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
    "revision": "1366536f69361f9ccbb726e1f40a2274"
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
    "url": "assets/js/15.38565e9e.js",
    "revision": "3a788cb327ef00e130c2886f36b8ec9e"
  },
  {
    "url": "assets/js/16.a097f944.js",
    "revision": "88b8d267ae349c046f6af5a62e3b3fb1"
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
    "url": "assets/js/19.1a9372ab.js",
    "revision": "9cec564507f6ffe752b24955901a132c"
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
    "url": "assets/js/21.ec907eb1.js",
    "revision": "9f562549e7fcc640d5e1df49aa2d9ca7"
  },
  {
    "url": "assets/js/22.311a72f9.js",
    "revision": "342b84341f0481846699cabcc625a58e"
  },
  {
    "url": "assets/js/23.f3bbfe58.js",
    "revision": "3f6b4df093f8df478811addd8a97a8cd"
  },
  {
    "url": "assets/js/24.159898f4.js",
    "revision": "3568bcd8ad1c6de3a94511f0c345338e"
  },
  {
    "url": "assets/js/25.ddefe6a9.js",
    "revision": "fb1918fd3e0f005a34b7990033e6b9ad"
  },
  {
    "url": "assets/js/26.2aaf4f08.js",
    "revision": "82f35b1c448484110889239630089c26"
  },
  {
    "url": "assets/js/27.ae0419d9.js",
    "revision": "1e2b322fa04b77f1a1f983f5fcf0e96d"
  },
  {
    "url": "assets/js/28.e9d7b402.js",
    "revision": "c8dad0b7b2c3ca0b8cb3c6051956560b"
  },
  {
    "url": "assets/js/29.5f9fd804.js",
    "revision": "a7b0c6cdd9c819b2162c4c89a08bcf3c"
  },
  {
    "url": "assets/js/3.10cb9937.js",
    "revision": "6a68bd11f87cfb411512238d185d7b97"
  },
  {
    "url": "assets/js/30.77af1770.js",
    "revision": "0fbb94cf94bdf1778caf197e8f088c25"
  },
  {
    "url": "assets/js/31.95bd6193.js",
    "revision": "ffe0af41b1bb9d9d4f07128b8719da9e"
  },
  {
    "url": "assets/js/32.493d5ef3.js",
    "revision": "13b00819982627d03c20f9730286be32"
  },
  {
    "url": "assets/js/33.a225aced.js",
    "revision": "734540333aa184158be441b34f88ced2"
  },
  {
    "url": "assets/js/34.5347012e.js",
    "revision": "cce5feb3347805c2b19e8f6631a79eb4"
  },
  {
    "url": "assets/js/35.f4357cca.js",
    "revision": "d69c224cb2631ef88b55ff17957d869b"
  },
  {
    "url": "assets/js/36.8ae50ec4.js",
    "revision": "a873a1856d37280167c661204608267d"
  },
  {
    "url": "assets/js/37.55ff7d24.js",
    "revision": "83a8f0b1b16f703ccde4083022e147e5"
  },
  {
    "url": "assets/js/38.da3938ac.js",
    "revision": "6a84e958f3088a11ac24d3af9ec714e9"
  },
  {
    "url": "assets/js/39.29aa9ef8.js",
    "revision": "484ce87f9ea809b9ab90cad7cbb1d218"
  },
  {
    "url": "assets/js/4.73004403.js",
    "revision": "289272199fda471fb899d83cf3c9e747"
  },
  {
    "url": "assets/js/40.c53b54df.js",
    "revision": "0474bb8a9b97c73932650a387c76de0e"
  },
  {
    "url": "assets/js/41.4d4fad85.js",
    "revision": "28cf43e4862197eb8d24629c17f15989"
  },
  {
    "url": "assets/js/42.e29341eb.js",
    "revision": "5556035f85b430026226d6c664e64201"
  },
  {
    "url": "assets/js/43.8bc93047.js",
    "revision": "7b0d7d94d0e17b5a850d8e7d25c103c5"
  },
  {
    "url": "assets/js/44.124f605f.js",
    "revision": "89f48b21a3bb6777e34ceedfab5caddc"
  },
  {
    "url": "assets/js/45.3ee28cb4.js",
    "revision": "f1332d8bac2199b544b6224477b92810"
  },
  {
    "url": "assets/js/46.a96aadfc.js",
    "revision": "3777b8c0c46cf5225c462239753bd085"
  },
  {
    "url": "assets/js/47.88ea02fb.js",
    "revision": "87ac1c6a89d437ff6f609b1c174545b0"
  },
  {
    "url": "assets/js/48.917beef1.js",
    "revision": "30bfe6923f6a9453a43ad0e225e05c1e"
  },
  {
    "url": "assets/js/49.fe9b21fb.js",
    "revision": "334ed17fab2db60d9b2e98beeee033b6"
  },
  {
    "url": "assets/js/5.7c40eeda.js",
    "revision": "2cd0776caacc66c4a9f3d17cf3d53dfc"
  },
  {
    "url": "assets/js/50.d0078377.js",
    "revision": "0c2360fc4dfefc56e171c6c74a97333a"
  },
  {
    "url": "assets/js/51.185388c5.js",
    "revision": "4dc4b0ef6885580ef828ad172b98bbc7"
  },
  {
    "url": "assets/js/52.126cc5a2.js",
    "revision": "a8b15945bcf9f770428df159ed9bcd55"
  },
  {
    "url": "assets/js/53.c40c813e.js",
    "revision": "a073ecee129d5a7ee59d6d156831cdd5"
  },
  {
    "url": "assets/js/54.ec831d62.js",
    "revision": "c0402d1d3c1da55b7fac19958e4c54aa"
  },
  {
    "url": "assets/js/55.490460ca.js",
    "revision": "8ac8e256c13196470c476724cd671cf0"
  },
  {
    "url": "assets/js/56.5a72ce3f.js",
    "revision": "c7357ccdb15d7e7a6cd7d9db14052be3"
  },
  {
    "url": "assets/js/57.e170a690.js",
    "revision": "e59fca015798debdfbef680e9d9afe63"
  },
  {
    "url": "assets/js/58.6faaef5d.js",
    "revision": "efe3edfa5d095fbf73a4500638e1812c"
  },
  {
    "url": "assets/js/59.a727b872.js",
    "revision": "8190d5e858412b24f3a8ece4f555d5ec"
  },
  {
    "url": "assets/js/6.790efdf0.js",
    "revision": "22dbac2fe570a9ff0033e889da81d709"
  },
  {
    "url": "assets/js/60.834094cb.js",
    "revision": "3b5c6e51fda697e3d498f585fa6e73bf"
  },
  {
    "url": "assets/js/61.dea2bf11.js",
    "revision": "dc2cbc56dbac51633052881716b95af5"
  },
  {
    "url": "assets/js/62.fe2a5d4c.js",
    "revision": "b1347ec333a95a8c36d3e9f8e4db971b"
  },
  {
    "url": "assets/js/63.554830ca.js",
    "revision": "511c5c2edc937ca0cbc275c1ba4c62bd"
  },
  {
    "url": "assets/js/64.e71634b3.js",
    "revision": "ce70640de85c64592b00c5ebf2b94e8e"
  },
  {
    "url": "assets/js/65.2c20bdc8.js",
    "revision": "0ca562b2efea2546812634f210d806eb"
  },
  {
    "url": "assets/js/66.4a1fa0ca.js",
    "revision": "d95e79d77819bf354e31f908376f965e"
  },
  {
    "url": "assets/js/67.f190433b.js",
    "revision": "f7fa8c15bbfd96a842d2aa10fb53c938"
  },
  {
    "url": "assets/js/68.fa0f2d1c.js",
    "revision": "4027d52403ed131ac50c9fe53fcf6a73"
  },
  {
    "url": "assets/js/69.43d66abc.js",
    "revision": "62ec911e37204a18197793b57a933270"
  },
  {
    "url": "assets/js/7.47152090.js",
    "revision": "f33b349494b06082a304ea99cf67ffcd"
  },
  {
    "url": "assets/js/70.1a98c031.js",
    "revision": "9851bbe6566c891812791f125ab81ca9"
  },
  {
    "url": "assets/js/71.16695dbf.js",
    "revision": "744003bfba1db84b01efcf7a1417c22a"
  },
  {
    "url": "assets/js/72.e807ef33.js",
    "revision": "8be7cd7df6021d80ddea11bb32940946"
  },
  {
    "url": "assets/js/73.1cd2482b.js",
    "revision": "eb361362da2124871e2bdc59a01ae4cc"
  },
  {
    "url": "assets/js/74.ae379ff4.js",
    "revision": "304cd8377c95edcc6dd9e6bfa074369f"
  },
  {
    "url": "assets/js/75.8c522ef2.js",
    "revision": "74181363d7fc872d0f3dd232f350a191"
  },
  {
    "url": "assets/js/76.82d1c3f4.js",
    "revision": "dfc2e846c5921afed9e5241e525e2624"
  },
  {
    "url": "assets/js/77.451c82fe.js",
    "revision": "df130b9e328aa1c4ccf62d1646e83196"
  },
  {
    "url": "assets/js/78.2251b88a.js",
    "revision": "a4054fc3102f9241b7585c6a8a187edf"
  },
  {
    "url": "assets/js/79.377b05c3.js",
    "revision": "463f8d07c237b23bafa6e6c5b7848a8d"
  },
  {
    "url": "assets/js/8.80142c04.js",
    "revision": "9c3e6840953dbed7aa0a5f548ba0c7c7"
  },
  {
    "url": "assets/js/80.846b8f55.js",
    "revision": "2f6474f02862f045a70f14dd2c199dd9"
  },
  {
    "url": "assets/js/81.2484bdf3.js",
    "revision": "855a8056dd94658dd075fc834b518a2a"
  },
  {
    "url": "assets/js/9.bd1d6dfe.js",
    "revision": "c1889028b3012c25df728010be4ce46b"
  },
  {
    "url": "assets/js/app.73371a24.js",
    "revision": "4c4d45b8fc110d06cc96865572602134"
  },
  {
    "url": "avatar.png",
    "revision": "3148d27e27b8a5da563aefd136a9bea3"
  },
  {
    "url": "backend/elasticsearch/index.html",
    "revision": "42b5bac6458837e3e3c7ec7eb0fd3d31"
  },
  {
    "url": "backend/java/a-1.html",
    "revision": "d601eb79c62febad57df7c78521b4125"
  },
  {
    "url": "backend/java/b-2.html",
    "revision": "ee651b5f87bc02862b0933c98e4e804f"
  },
  {
    "url": "backend/java/c-3.html",
    "revision": "4953e06bd46223fe2931b9dff93d9cf9"
  },
  {
    "url": "backend/java/Collection.jpg",
    "revision": "82eccbdcafece8999f235a54e736289c"
  },
  {
    "url": "backend/java/d-4.html",
    "revision": "b6a080016cdcba84ff6d59f547a9ee5d"
  },
  {
    "url": "backend/java/e-5.html",
    "revision": "ecd67739b911419d27a469ea159626a1"
  },
  {
    "url": "backend/java/f-6.html",
    "revision": "fbeb34a44a5866c8731c6c742dd2f702"
  },
  {
    "url": "backend/java/h-7.html",
    "revision": "4c8bcf7e973c1dab8f85072edbf212ff"
  },
  {
    "url": "backend/java/i-8.html",
    "revision": "1792519dbacf40329db9232c18eedcc4"
  },
  {
    "url": "backend/java/index.html",
    "revision": "8680a8f3afbdac0caef6ed446e31674b"
  },
  {
    "url": "backend/java/j-9.html",
    "revision": "6cbaad35bb5952c8bf47cf46ee6d8fa6"
  },
  {
    "url": "backend/java/k-10.html",
    "revision": "421d027773534bbf6babe78f5f244343"
  },
  {
    "url": "backend/java/l-11.html",
    "revision": "0947902683699d35d2058a574e760d04"
  },
  {
    "url": "backend/java/lombok.html",
    "revision": "8300db145b707a5a96813b7122f398bd"
  },
  {
    "url": "backend/java/Map.jpg",
    "revision": "ea98a85e7d317daefc842d2c61ca1bba"
  },
  {
    "url": "backend/java/swagger.html",
    "revision": "2fff920cb38b9ce91cec2e8be4bd5c08"
  },
  {
    "url": "backend/java/websocket.html",
    "revision": "26a27a66ee118ca29a456d3e46532369"
  },
  {
    "url": "backend/mybatis/index.html",
    "revision": "39fa7abf4f49fcb3c026cbb98a82fd10"
  },
  {
    "url": "backend/mybatis/jdbctype.html",
    "revision": "2f84c1ab883196b64a084a5e3db04d65"
  },
  {
    "url": "backend/quartz/index.html",
    "revision": "d1c6be1594683fbcb9ed062aebce7d33"
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
    "revision": "0549f2ae8176faf928ecb48982c0a242"
  },
  {
    "url": "backend/rabbitmq/rabbitMQ.html",
    "revision": "a6952089754078e751bbc1632d9a006a"
  },
  {
    "url": "backend/redis/1.jpg",
    "revision": "91469c03a7047ab672873f07a00f6c90"
  },
  {
    "url": "backend/spring-security-oauth2/index.html",
    "revision": "2a7d413981b91498d0f96afaff0b5dd2"
  },
  {
    "url": "backend/spring-security-oauth2/use.html",
    "revision": "2d51c36bf08b3818a2bd545f1a60b36e"
  },
  {
    "url": "backend/workflow/index.html",
    "revision": "4c94b5c68eeb51a6d066e2955df8b982"
  },
  {
    "url": "backend/workflow/modeler.html",
    "revision": "7fc3dcdc7280bdf968165f5689b8aaaf"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "bbcb75dc881101c8ebd178d56ad8a258"
  },
  {
    "url": "database/mysql/install.html",
    "revision": "bf517bbe5f55355133dddfe63ea9cc89"
  },
  {
    "url": "database/mysql/mysqlindex.html",
    "revision": "92f38a9a32d21b32c1fb956c38256700"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "7b16e30cb3efd0255e525c7624728fa1"
  },
  {
    "url": "database/oracle/install.html",
    "revision": "7ac7b80e20d6aa26415476a2c1c04f79"
  },
  {
    "url": "database/redis/a-usecase.html",
    "revision": "cedd3a8358b16a6b3db925dcebbc9670"
  },
  {
    "url": "database/redis/index.html",
    "revision": "11e0681c1e064fa4612f8afcd3e48475"
  },
  {
    "url": "front/javascript/index.html",
    "revision": "1e29cf64f326270c91e823ae6288cff7"
  },
  {
    "url": "front/vue/amap.html",
    "revision": "130c2f25df410f48a719f181b63dd8b8"
  },
  {
    "url": "front/vue/index.html",
    "revision": "a19162ee43042d064eb0e7a7e4cc68af"
  },
  {
    "url": "guide/a-about.html",
    "revision": "ac1a88a9a0ba09994c78ad0a2f5e7ec7"
  },
  {
    "url": "guide/b-icp.html",
    "revision": "2a83fd7336ae79c0a536e61a8cc04289"
  },
  {
    "url": "guide/c-download.html",
    "revision": "e91082146b1e7944cbabdf1e60c73129"
  },
  {
    "url": "guide/index.html",
    "revision": "2af84538c707ca1d367bc82c64039901"
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
    "revision": "ebde77e3557e077cf27bfbbaf5970245"
  },
  {
    "url": "os/linux/index.html",
    "revision": "f2f001b6e0263a744039cbdf1fd49850"
  },
  {
    "url": "others/cicd/docker-compose.html",
    "revision": "50f8b9e4985147c0dbfcb478c00a46e9"
  },
  {
    "url": "others/cicd/docker.html",
    "revision": "ab8593efe4ea59751270918ffb2cc42e"
  },
  {
    "url": "others/cicd/index.html",
    "revision": "5dd19ac24ac77fd4b5e49e51d33c9e50"
  },
  {
    "url": "others/interview/index.html",
    "revision": "c632ecfcd3c262ee1ffc4054a04d75cc"
  },
  {
    "url": "others/issues/annotation.html",
    "revision": "e326f2a247be3ea6e28b69ac0c9dcc02"
  },
  {
    "url": "others/issues/cors.html",
    "revision": "f13fa42d7a82d4eea1089dbcef12c43a"
  },
  {
    "url": "others/issues/finally.html",
    "revision": "2d35c48fbcb865bd505ae0cb25cba4bd"
  },
  {
    "url": "others/issues/index.html",
    "revision": "fe89c24a902aa66064eb555b70e69c05"
  },
  {
    "url": "others/issues/javax-persistence.html",
    "revision": "d5e25dbe8f2aae5ec743eda0ff26e125"
  },
  {
    "url": "others/issues/log.html",
    "revision": "b69682622e6be43c4fcbb5300356ae1f"
  },
  {
    "url": "others/issues/properties.html",
    "revision": "3a5ccb675e71d83a9a5f4b59ea96de9e"
  },
  {
    "url": "others/sdk/dingtalk.html",
    "revision": "95adc8fd3e558d996a1128ec81f25242"
  },
  {
    "url": "others/sdk/index.html",
    "revision": "0da77569112f2d9af85131faede1cf2c"
  },
  {
    "url": "others/sdk/sdk-video.jpg",
    "revision": "7d98ade27f68ee575f581616ae88d8cc"
  },
  {
    "url": "others/sdk/video.html",
    "revision": "a342d667d60a3950ee955a92e68f5fdf"
  },
  {
    "url": "others/utils/index.html",
    "revision": "3c90b171786f91f76689fbbaa4482302"
  },
  {
    "url": "others/utils/utils.html",
    "revision": "93b9fe799e1c6da8eab2a2cf28d8d530"
  },
  {
    "url": "others/work/electronjs.jpg",
    "revision": "132821f8a5ec6a74aa5eac263f01f024"
  },
  {
    "url": "others/work/iis.html",
    "revision": "bfb5d891c3d9c6864490186af36b76d6"
  },
  {
    "url": "others/work/index.html",
    "revision": "42392feec0681af37474f5ef17d41aae"
  },
  {
    "url": "tools/git/a-config.html",
    "revision": "f8c8e9bf8702aea34c0a757509454b94"
  },
  {
    "url": "tools/git/b-repo.html",
    "revision": "015366a3aef66758f069360fb0b1ca83"
  },
  {
    "url": "tools/git/c-base.html",
    "revision": "df82f07ffa25191855981cdb671f5fab"
  },
  {
    "url": "tools/git/d-branch.html",
    "revision": "3a4caceac0a12ccbcb0b04ae996ace31"
  },
  {
    "url": "tools/git/e-log.html",
    "revision": "76d1ea3df60c51aef32fb2563e806284"
  },
  {
    "url": "tools/git/f-tag.html",
    "revision": "36015841a751f0a59c334282fd9d2ac4"
  },
  {
    "url": "tools/git/g-github.html",
    "revision": "8337362097804adf09b0f97e935cff47"
  },
  {
    "url": "tools/git/index.html",
    "revision": "b5ebf2634d6dbc853f40b4cf1cdf0e2a"
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
    "revision": "f8c7b349f47efdc5e9ca2bc0df1fb695"
  },
  {
    "url": "tools/maven/b-nexus.html",
    "revision": "5f964497fe4d1011f7395d9b836374e2"
  },
  {
    "url": "tools/maven/index.html",
    "revision": "fda645e9e4d8ce0094d326fa77e9f9ea"
  },
  {
    "url": "tools/maven/pom.html",
    "revision": "0b7b15c3725ed9fbdb4fe6114b0d085c"
  },
  {
    "url": "tools/maven/settings.html",
    "revision": "a80ceb3310f3c8487655216426ee2f65"
  },
  {
    "url": "tools/navicat/backup.html",
    "revision": "025c3a033260a64b48f418b070cbca0b"
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
    "revision": "0a7ad62576effede2872c78d30791cb8"
  },
  {
    "url": "tools/nginx/index.html",
    "revision": "1c27a6142fb0d056d7a3134bc647183d"
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
