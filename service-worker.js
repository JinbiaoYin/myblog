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
    "revision": "97e61375ac594d6d1b063c72c22de909"
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
    "url": "assets/js/42.1ef4a176.js",
    "revision": "83906debd5da74138412b9f89d995c1f"
  },
  {
    "url": "assets/js/43.34c8ffde.js",
    "revision": "56af56103f1878f78c65e7c67ea703bb"
  },
  {
    "url": "assets/js/44.124f605f.js",
    "revision": "89f48b21a3bb6777e34ceedfab5caddc"
  },
  {
    "url": "assets/js/45.5c637746.js",
    "revision": "143d7d6e769ac1da371e13fff65e0e14"
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
    "url": "assets/js/53.ee28ca50.js",
    "revision": "dd4a4ecbd47f36a029b77ad6f5c5c66e"
  },
  {
    "url": "assets/js/54.cab3db62.js",
    "revision": "24b9f326d334b749479a60c4ecdfd8df"
  },
  {
    "url": "assets/js/55.0dcd093f.js",
    "revision": "163087f7487adf6e0f2072442c0dad55"
  },
  {
    "url": "assets/js/56.8b8b68d3.js",
    "revision": "8b84af1b05f3a15e0bedb93ff3a168e6"
  },
  {
    "url": "assets/js/57.104581d1.js",
    "revision": "76727a06eb874916f7e8730c59b1a73e"
  },
  {
    "url": "assets/js/58.58ea4e2d.js",
    "revision": "10aa2e9a06acd922485d3d62098111ac"
  },
  {
    "url": "assets/js/59.cc930781.js",
    "revision": "80a4d63139b2ce5a4d25e464e8e26753"
  },
  {
    "url": "assets/js/6.5d062d06.js",
    "revision": "007cc4d60a2abad20268891f72d2557a"
  },
  {
    "url": "assets/js/60.fff4df7f.js",
    "revision": "ece6d60307b23a1a7789cf989a5607f7"
  },
  {
    "url": "assets/js/61.165f74f7.js",
    "revision": "b5a360b7e54274283522d9541d5db5bb"
  },
  {
    "url": "assets/js/62.bb273ef0.js",
    "revision": "44e786d3ccbaa222e574278d6274aa30"
  },
  {
    "url": "assets/js/63.55e17833.js",
    "revision": "61bf55b180ddee9b3c56d0daadeab796"
  },
  {
    "url": "assets/js/64.ecde755a.js",
    "revision": "afe6c737c19ce35e42483fb271aac9a2"
  },
  {
    "url": "assets/js/65.1b821652.js",
    "revision": "4bee6f3279a6e13e1db6f9b8ed655bce"
  },
  {
    "url": "assets/js/66.d63a9653.js",
    "revision": "15aebc0365fba98071e8b1f074c31b18"
  },
  {
    "url": "assets/js/67.a902e390.js",
    "revision": "a4a9d8aa7aef6060478b35b7fde29ee4"
  },
  {
    "url": "assets/js/68.4418873e.js",
    "revision": "a284992665df02169f54ca158b7ecb4d"
  },
  {
    "url": "assets/js/69.b2909cce.js",
    "revision": "3dececa5de8cd83b82e8ad4711f5c3fa"
  },
  {
    "url": "assets/js/7.8a1412d1.js",
    "revision": "6ba94b09967d447788b89d60bd5c3caf"
  },
  {
    "url": "assets/js/70.81372882.js",
    "revision": "721ec58fb656b734d0a3ea7d18469b40"
  },
  {
    "url": "assets/js/71.94db8aba.js",
    "revision": "1e862be3b95f646481176d739d2bfca1"
  },
  {
    "url": "assets/js/72.4038ea7c.js",
    "revision": "50f6c95d33d0c9b0350a89f59983d092"
  },
  {
    "url": "assets/js/73.19c3cd11.js",
    "revision": "1d25242d91082ecb751fcecd69857c5d"
  },
  {
    "url": "assets/js/74.abd217a4.js",
    "revision": "d6aae025018fbacb46ecb8eaeb4affd8"
  },
  {
    "url": "assets/js/75.08b28b2d.js",
    "revision": "46c1714ad1af987b6913937c4f76d756"
  },
  {
    "url": "assets/js/76.27db43eb.js",
    "revision": "fd1625bb2cc9c12bf085e4aa4b23e7ef"
  },
  {
    "url": "assets/js/77.556b38c4.js",
    "revision": "aa6e3d2ff60cdd42ad1aeaf06f4ce9f9"
  },
  {
    "url": "assets/js/78.6aee5bee.js",
    "revision": "a4e795495752591369f7343c1af3cf8a"
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
    "url": "assets/js/app.efda4150.js",
    "revision": "87db8c06eb6b66f68bb61f04bdc2367a"
  },
  {
    "url": "avatar.png",
    "revision": "3148d27e27b8a5da563aefd136a9bea3"
  },
  {
    "url": "backend/elasticsearch/index.html",
    "revision": "7c21b93f769951a4d697956404d1bfc6"
  },
  {
    "url": "backend/java/a-1.html",
    "revision": "5129c3fdc9818fb7780b821cd2ef64ff"
  },
  {
    "url": "backend/java/b-2.html",
    "revision": "c313d85b2159e0ac2c0cabd54b536733"
  },
  {
    "url": "backend/java/c-3.html",
    "revision": "4468db0c96de17377805951916f8eb29"
  },
  {
    "url": "backend/java/Collection.jpg",
    "revision": "82eccbdcafece8999f235a54e736289c"
  },
  {
    "url": "backend/java/d-4.html",
    "revision": "1baa9e33cd58b695383496e7fb48f919"
  },
  {
    "url": "backend/java/e-5.html",
    "revision": "08b8ccaef6e1024a3a5dbbe69b56fafd"
  },
  {
    "url": "backend/java/f-6.html",
    "revision": "936e542f8b39379f363371292a9097f0"
  },
  {
    "url": "backend/java/h-7.html",
    "revision": "b8837c8c24c849aea0a6f34c65c6852b"
  },
  {
    "url": "backend/java/i-8.html",
    "revision": "b5e67f746ef0d6230151c96c1a0650f8"
  },
  {
    "url": "backend/java/index.html",
    "revision": "b2a303aa1deff4f8f132600424dec54b"
  },
  {
    "url": "backend/java/j-9.html",
    "revision": "13376531ef6f82d4ab7526ebf9026727"
  },
  {
    "url": "backend/java/k-10.html",
    "revision": "59017b1adc42248b997c895702bdc8bc"
  },
  {
    "url": "backend/java/l-11.html",
    "revision": "7182cc6155df8130dd5c1da017d60037"
  },
  {
    "url": "backend/java/lombok.html",
    "revision": "643818280414b98d54f8dd6e9a43af0f"
  },
  {
    "url": "backend/java/Map.jpg",
    "revision": "ea98a85e7d317daefc842d2c61ca1bba"
  },
  {
    "url": "backend/java/swagger.html",
    "revision": "d70c6320460d1f8cb33dc80a414e766a"
  },
  {
    "url": "backend/java/websocket.html",
    "revision": "28ea4fcd6a9f810b3087e6c615cb8d99"
  },
  {
    "url": "backend/mybatis/index.html",
    "revision": "80f8daeb0cb3b1d93e687a7b51877922"
  },
  {
    "url": "backend/mybatis/jdbctype.html",
    "revision": "f787592cf0b06c131d2ae799f8c54105"
  },
  {
    "url": "backend/quartz/index.html",
    "revision": "aef8c272d3f22159e0b49f31fab1cec2"
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
    "revision": "ab59d7a9c021da737a31e3fd249f6dfc"
  },
  {
    "url": "backend/rabbitmq/rabbitMQ.html",
    "revision": "44620a9d55a6faf6c362852481160840"
  },
  {
    "url": "backend/redis/1.jpg",
    "revision": "91469c03a7047ab672873f07a00f6c90"
  },
  {
    "url": "backend/spring-security-oauth2/index.html",
    "revision": "881c83c3e45347d4b4bb220eb5634016"
  },
  {
    "url": "backend/spring-security-oauth2/use.html",
    "revision": "84f154d7712d18f13fe9befc8e0420af"
  },
  {
    "url": "backend/workflow/index.html",
    "revision": "e327298e0a4a9a642160e6798a148840"
  },
  {
    "url": "backend/workflow/modeler.html",
    "revision": "0d33170e5b77df17800fae4971989bba"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "f8be48727d1479c0b7756a37e79662da"
  },
  {
    "url": "database/mysql/install.html",
    "revision": "6e9416d24faa40349181abe15ad8f731"
  },
  {
    "url": "database/mysql/mysqlindex.html",
    "revision": "eadc3683fd8372f166bb5d2138be0be2"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "23d68b1c5726d871004e8559627cbfd4"
  },
  {
    "url": "database/oracle/install.html",
    "revision": "5b96519cb4cf733307b5ebdd94c6daa5"
  },
  {
    "url": "database/redis/a-usecase.html",
    "revision": "174ce01d3cf2835240905e7f8e5dcd99"
  },
  {
    "url": "database/redis/index.html",
    "revision": "2128b6610f107c7300a85e8d6b2cb103"
  },
  {
    "url": "front/javascript/index.html",
    "revision": "edcccb2561bc05a394b3e7d6b03ded30"
  },
  {
    "url": "front/vue/amap.html",
    "revision": "60ea5616c5eed70d0fa22c56c6f3a58e"
  },
  {
    "url": "front/vue/index.html",
    "revision": "8902a0066bc053a8608bfe214cbf4746"
  },
  {
    "url": "guide/a-about.html",
    "revision": "3eb7160e12a972fa3d6de855a127baf8"
  },
  {
    "url": "guide/b-icp.html",
    "revision": "e54355c80185ad7f787a2f86f95f4a1c"
  },
  {
    "url": "guide/c-download.html",
    "revision": "e41cf9842112210d7daf8bc4fb9196d9"
  },
  {
    "url": "guide/index.html",
    "revision": "4420b62def27df64ea4f869c530dacb4"
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
    "revision": "d09d80626b9b245efa57f87766885461"
  },
  {
    "url": "os/linux/index.html",
    "revision": "cfe6f2a4f5bdce593f4f55dc3031ed59"
  },
  {
    "url": "others/cicd/docker-compose.html",
    "revision": "01a060efa58ae27fed0ffa511035f6c9"
  },
  {
    "url": "others/cicd/docker.html",
    "revision": "457c34a7f472f16a0c77d16e899c3252"
  },
  {
    "url": "others/cicd/index.html",
    "revision": "f4298c311896a7af2eddd3d7b3070ad8"
  },
  {
    "url": "others/interview/index.html",
    "revision": "d1466b632ff4df03cd476cb07ee48186"
  },
  {
    "url": "others/issues/annotation.html",
    "revision": "cb0dde6507f19c3e1ba20f5543b86008"
  },
  {
    "url": "others/issues/cors.html",
    "revision": "d53bec9962f7a0e29cf160379fba6ec7"
  },
  {
    "url": "others/issues/finally.html",
    "revision": "68e514a02d37fb11642ac85e1eb43bd9"
  },
  {
    "url": "others/issues/index.html",
    "revision": "7e0642747f87aede8baffaf49879cb7e"
  },
  {
    "url": "others/issues/javax-persistence.html",
    "revision": "dca761b4de2b57295070830bd1d51032"
  },
  {
    "url": "others/issues/log.html",
    "revision": "b889e9e3be32216e62899bdb125ab057"
  },
  {
    "url": "others/issues/properties.html",
    "revision": "2d81f0de8a68837054b964e226ca57f9"
  },
  {
    "url": "others/sdk/dingtalk.html",
    "revision": "e2e5ef07377d37adf955935f9d858f5e"
  },
  {
    "url": "others/sdk/index.html",
    "revision": "67c455cbbdd02509152281eaf21f02b7"
  },
  {
    "url": "others/sdk/sdk-video.jpg",
    "revision": "7d98ade27f68ee575f581616ae88d8cc"
  },
  {
    "url": "others/sdk/video.html",
    "revision": "cc19bff2ebb7d3c5f782536c83ec8aa5"
  },
  {
    "url": "others/utils/index.html",
    "revision": "a689d7b97d36241b5c24399788930f6b"
  },
  {
    "url": "others/utils/utils.html",
    "revision": "4d71e89e79837c350589a9de9f8f0b43"
  },
  {
    "url": "others/work/electronjs.jpg",
    "revision": "132821f8a5ec6a74aa5eac263f01f024"
  },
  {
    "url": "others/work/iis.html",
    "revision": "077a88b5b727d343e217a1cc8d30fef1"
  },
  {
    "url": "others/work/index.html",
    "revision": "65bac3edd04f5ea87c0eaf845b3cd89f"
  },
  {
    "url": "tools/git/a-config.html",
    "revision": "0f6acdd0ffb764456369ec5ee0eeb225"
  },
  {
    "url": "tools/git/b-repo.html",
    "revision": "1e58bd9826b8658468b73af6122d64ac"
  },
  {
    "url": "tools/git/c-base.html",
    "revision": "55f541be6cf891e6d4e3a04241997efa"
  },
  {
    "url": "tools/git/d-branch.html",
    "revision": "2c101735c654bc178b6cc590989674ec"
  },
  {
    "url": "tools/git/e-log.html",
    "revision": "719d627ab48fe9f6e6a284a89ccacf4f"
  },
  {
    "url": "tools/git/f-tag.html",
    "revision": "70560dd398305fbe2fbd1bdd8d917d1c"
  },
  {
    "url": "tools/git/g-github.html",
    "revision": "db94bd617665db7fa2e0b426dfe0be4a"
  },
  {
    "url": "tools/git/index.html",
    "revision": "3a6df9b67c0f8798baf1eaef5b7fdbbb"
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
    "revision": "b4f8dce1b35d1d293f0c1f478e7f2115"
  },
  {
    "url": "tools/maven/b-nexus.html",
    "revision": "5171822b718e4f2d59394f923fcab6ca"
  },
  {
    "url": "tools/maven/index.html",
    "revision": "b9f4464118cc7434cc8fd7f332a08607"
  },
  {
    "url": "tools/maven/pom.html",
    "revision": "12c2523a6b8d651c00bf1a36c6fd3b5c"
  },
  {
    "url": "tools/maven/settings.html",
    "revision": "c8f788fcd7e43bf5de843302c80a1e16"
  },
  {
    "url": "tools/navicat/backup.html",
    "revision": "459b65c9748809fca5deb31f9625e167"
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
    "revision": "4a411263ae33779d62618e342fb7045b"
  },
  {
    "url": "tools/nginx/index.html",
    "revision": "8891e51db47603701c0021c3ee4e24c2"
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
