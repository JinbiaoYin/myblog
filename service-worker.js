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
    "revision": "ca5cd36ced65d95ea5bcc7fb62c08ae0"
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
    "url": "assets/js/10.2ffe33a8.js",
    "revision": "0d0f6c340b1593aee60f018125755a83"
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
    "url": "assets/js/19.5b661a90.js",
    "revision": "aee0bc9a9d0eba340994e04244fd5e5a"
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
    "url": "assets/js/31.a3738b5d.js",
    "revision": "359984734de29b765cea25725b2fed54"
  },
  {
    "url": "assets/js/32.f1976794.js",
    "revision": "fc45cf35f3483848d952bac080cae6d0"
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
    "url": "assets/js/55.e3907908.js",
    "revision": "64d17f08e95934b44732013fdd3a12df"
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
    "url": "assets/js/59.cc930781.js",
    "revision": "80a4d63139b2ce5a4d25e464e8e26753"
  },
  {
    "url": "assets/js/6.790efdf0.js",
    "revision": "22dbac2fe570a9ff0033e889da81d709"
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
    "url": "assets/js/66.daaf1dde.js",
    "revision": "7f4a1d28f859b41d422780c1125e891b"
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
    "url": "assets/js/7.47152090.js",
    "revision": "f33b349494b06082a304ea99cf67ffcd"
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
    "url": "assets/js/9.9e362a12.js",
    "revision": "40f8c6e4025512da3e948d8db493fb6e"
  },
  {
    "url": "assets/js/app.98a3dddd.js",
    "revision": "72590c01939b6a027fc9074707a1a00e"
  },
  {
    "url": "avatar.png",
    "revision": "3148d27e27b8a5da563aefd136a9bea3"
  },
  {
    "url": "backend/elasticsearch/index.html",
    "revision": "b182cff9776ea7aa57dc758fe3a56459"
  },
  {
    "url": "backend/java/a-1.html",
    "revision": "3b1e27f2f7e1fbba6ec1bf991f30c4ef"
  },
  {
    "url": "backend/java/b-2.html",
    "revision": "21abe8d5b13d2c68d342d94805b2b457"
  },
  {
    "url": "backend/java/c-3.html",
    "revision": "5ffd562ebf5ca91fd8041edd1b37695d"
  },
  {
    "url": "backend/java/Collection.jpg",
    "revision": "82eccbdcafece8999f235a54e736289c"
  },
  {
    "url": "backend/java/d-4.html",
    "revision": "f5f75c93cda9b5453a3d037600279720"
  },
  {
    "url": "backend/java/e-5.html",
    "revision": "106adcc70b675d2ef3f8f8536b0fbcf0"
  },
  {
    "url": "backend/java/f-6.html",
    "revision": "097205a9ba994c30bb702f89e23a3c35"
  },
  {
    "url": "backend/java/h-7.html",
    "revision": "29f12c92e22bbfc98a21f885d6b2827b"
  },
  {
    "url": "backend/java/i-8.html",
    "revision": "68008c941473840fd9a7999a23efbd3b"
  },
  {
    "url": "backend/java/index.html",
    "revision": "236774b0b70ca3ed0524b07f0c9908fd"
  },
  {
    "url": "backend/java/j-9.html",
    "revision": "e4c5bccb9dbf363fcb39db6953d61b9d"
  },
  {
    "url": "backend/java/k-10.html",
    "revision": "c2e2b25da6cdaae1370f546e82dd94d3"
  },
  {
    "url": "backend/java/l-11.html",
    "revision": "63c3ff22cb8ab7d0f7aeb2a1285bb0de"
  },
  {
    "url": "backend/java/lombok.html",
    "revision": "4aa9e89dc5f1714993f9c11ba542d635"
  },
  {
    "url": "backend/java/Map.jpg",
    "revision": "ea98a85e7d317daefc842d2c61ca1bba"
  },
  {
    "url": "backend/java/swagger.html",
    "revision": "f45cacece09d7962522c4a4cd07a6f9f"
  },
  {
    "url": "backend/java/websocket.html",
    "revision": "b1366ff15b5743dc6e96f47cbe105765"
  },
  {
    "url": "backend/mybatis/index.html",
    "revision": "8398b204d53edeaff6aa0188f1277221"
  },
  {
    "url": "backend/mybatis/jdbctype.html",
    "revision": "b9b73d68b3316e150510d648f4d093f8"
  },
  {
    "url": "backend/quartz/index.html",
    "revision": "516656a3591b866806ae6e8d78eb8a3a"
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
    "revision": "0e5efd156b678cb72faaaf0fa04df30e"
  },
  {
    "url": "backend/rabbitmq/rabbitMQ.html",
    "revision": "be9da1a95e3a01003ab1ac6a3d8613d5"
  },
  {
    "url": "backend/redis/1.jpg",
    "revision": "91469c03a7047ab672873f07a00f6c90"
  },
  {
    "url": "backend/spring-security-oauth2/index.html",
    "revision": "f889ab4038a00a51da638b0c18f3f57c"
  },
  {
    "url": "backend/spring-security-oauth2/use.html",
    "revision": "5ddf93915330dc9e73d8137de191ae9f"
  },
  {
    "url": "backend/workflow/index.html",
    "revision": "912f54d1ea11620077c02525e5b3556d"
  },
  {
    "url": "backend/workflow/modeler.html",
    "revision": "60324da0913e7a7688ab7686cb850954"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "d212eb63dbc7f3cc54c086b5f13c7bbe"
  },
  {
    "url": "database/mysql/install.html",
    "revision": "a6988e6645af7ffd5c8e42f625563fd0"
  },
  {
    "url": "database/mysql/mysqlindex.html",
    "revision": "d3078672d7ebcaa88d22ae1f58b6adf6"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "1d610fc4e8a3357ae64d7ca332b7b323"
  },
  {
    "url": "database/oracle/install.html",
    "revision": "c1038ff31c4aea958ab52b1b6fffaa65"
  },
  {
    "url": "database/redis/a-usecase.html",
    "revision": "792951c9331939c799948840bbf076b5"
  },
  {
    "url": "database/redis/index.html",
    "revision": "74c2be7c1fdbce308a1b8d383872bce6"
  },
  {
    "url": "front/javascript/index.html",
    "revision": "1deb822fe4b7693e974db20c0d338a14"
  },
  {
    "url": "front/vue/amap.html",
    "revision": "e55ae8306efaa054d9940e5262b8dad9"
  },
  {
    "url": "front/vue/index.html",
    "revision": "97f63a68f87acfc3aa39f39d59fcdb37"
  },
  {
    "url": "guide/a-about.html",
    "revision": "57ce72bfc5802c41e550642c919dddae"
  },
  {
    "url": "guide/b-icp.html",
    "revision": "c565c59071292e69eea4cf5097c4f54e"
  },
  {
    "url": "guide/c-download.html",
    "revision": "cf14b9a69de3add9dad79d03ece2807d"
  },
  {
    "url": "guide/index.html",
    "revision": "b1859bde96390a3ae8aaab05ae5038c4"
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
    "revision": "33e5c466e7180c52de56b4cc11ad7600"
  },
  {
    "url": "os/linux/index.html",
    "revision": "e591a26682e45115b1cafe3b58383f9f"
  },
  {
    "url": "others/cicd/docker-compose.html",
    "revision": "a77c9f0fb2fa22f1c20072125310bc38"
  },
  {
    "url": "others/cicd/docker.html",
    "revision": "75e00a8a48523e11473b0d2987a63f6d"
  },
  {
    "url": "others/cicd/index.html",
    "revision": "871e91442bbd2cd38752fcc54f608a41"
  },
  {
    "url": "others/interview/index.html",
    "revision": "7f722401ee83edd7939df7163f798793"
  },
  {
    "url": "others/issues/annotation.html",
    "revision": "92d2a24410fadefc16918bfd47ac6410"
  },
  {
    "url": "others/issues/cors.html",
    "revision": "d2e55e691037d5f0667ff7293cd48012"
  },
  {
    "url": "others/issues/finally.html",
    "revision": "a7719a9e69fc9b17e19e6f0335d87c93"
  },
  {
    "url": "others/issues/index.html",
    "revision": "bb47c089bdedb56d7867aecda6ae998d"
  },
  {
    "url": "others/issues/javax-persistence.html",
    "revision": "1f109e08097d44b0d26491883cb8332b"
  },
  {
    "url": "others/issues/log.html",
    "revision": "17e042526fc6503fb2e52ce5ff617695"
  },
  {
    "url": "others/issues/properties.html",
    "revision": "5dfeba97f472d776191de4f744c25b30"
  },
  {
    "url": "others/sdk/dingtalk.html",
    "revision": "75a5a21640abda13d26d1c4de8f4ed8d"
  },
  {
    "url": "others/sdk/index.html",
    "revision": "9c701f9ed1b7699a23a6c30db854fe30"
  },
  {
    "url": "others/sdk/sdk-video.jpg",
    "revision": "7d98ade27f68ee575f581616ae88d8cc"
  },
  {
    "url": "others/sdk/video.html",
    "revision": "1daadcb86f0a80a9796ca95e9f5fc04b"
  },
  {
    "url": "others/utils/index.html",
    "revision": "2204698995e64e7d5c627311be9c684e"
  },
  {
    "url": "others/utils/utils.html",
    "revision": "35a47ee808d3c09ca93484093dfb864c"
  },
  {
    "url": "others/work/electronjs.jpg",
    "revision": "132821f8a5ec6a74aa5eac263f01f024"
  },
  {
    "url": "others/work/iis.html",
    "revision": "ccea478bbaca44a1f1b8e88ce9a657d6"
  },
  {
    "url": "others/work/index.html",
    "revision": "ec9a7e95cbcd36a7bdead3900b9269cd"
  },
  {
    "url": "tools/git/a-config.html",
    "revision": "42acccf9485131741e9d0b9d2a4060b9"
  },
  {
    "url": "tools/git/b-repo.html",
    "revision": "0e454fbd0f6c5ee27622893a1210572b"
  },
  {
    "url": "tools/git/c-base.html",
    "revision": "7b7d26365aea1f2e6bf5a0bff4cc7b70"
  },
  {
    "url": "tools/git/d-branch.html",
    "revision": "15a70e191023a12ebe7547cafe930336"
  },
  {
    "url": "tools/git/e-log.html",
    "revision": "9827bc36b967a2b6b5c1557b6b26d6ba"
  },
  {
    "url": "tools/git/f-tag.html",
    "revision": "87f3d34f7f47e5a87b7ddc114db88551"
  },
  {
    "url": "tools/git/g-github.html",
    "revision": "5399515128e2708da9c439a0936eb6e1"
  },
  {
    "url": "tools/git/index.html",
    "revision": "a58b4fc5d2582e08f013047c2782ceef"
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
    "revision": "831830e1e5eaca026e6fb383945347a3"
  },
  {
    "url": "tools/maven/b-nexus.html",
    "revision": "ad14d91ff1358ca0d8d15a6abb3d6357"
  },
  {
    "url": "tools/maven/index.html",
    "revision": "d663de1acac824a4232442c12fd72ad4"
  },
  {
    "url": "tools/maven/pom.html",
    "revision": "3ff617fed5a9610fb7483125e95be45a"
  },
  {
    "url": "tools/maven/settings.html",
    "revision": "5b088ce6972d4bd9a254eae4e63f88f8"
  },
  {
    "url": "tools/navicat/backup.html",
    "revision": "a5ec3bd02e9050d3f108a3aa830430a1"
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
    "revision": "06accf6530d67bf214aa1ede8bcebf09"
  },
  {
    "url": "tools/nginx/index.html",
    "revision": "c309740dd31f283927be66785a49cf21"
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
