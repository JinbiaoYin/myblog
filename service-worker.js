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
    "revision": "7e7e9c59c0ba05ae4825c999b1f6b9bc"
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
    "url": "assets/js/53.d7b88606.js",
    "revision": "e0908ff4fdadde56e30032e5bb91a18e"
  },
  {
    "url": "assets/js/54.cab3db62.js",
    "revision": "24b9f326d334b749479a60c4ecdfd8df"
  },
  {
    "url": "assets/js/55.94282443.js",
    "revision": "67f61c5d47591aeb01f111e27c9c0d2f"
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
    "url": "assets/js/6.5d062d06.js",
    "revision": "007cc4d60a2abad20268891f72d2557a"
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
    "url": "assets/js/64.ecde755a.js",
    "revision": "afe6c737c19ce35e42483fb271aac9a2"
  },
  {
    "url": "assets/js/65.10ebd8e4.js",
    "revision": "82b2d9bfc0a076e44161003576606f71"
  },
  {
    "url": "assets/js/66.d1f6a0d3.js",
    "revision": "456f2f48bd9d1b1a84caec9dca6f3579"
  },
  {
    "url": "assets/js/67.549b6091.js",
    "revision": "ea5a13184925e5734468673c44e97826"
  },
  {
    "url": "assets/js/68.fa0f2d1c.js",
    "revision": "4027d52403ed131ac50c9fe53fcf6a73"
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
    "url": "assets/js/app.0671019e.js",
    "revision": "d40130fcc27302c4af310257a8fec851"
  },
  {
    "url": "avatar.png",
    "revision": "3148d27e27b8a5da563aefd136a9bea3"
  },
  {
    "url": "backend/elasticsearch/index.html",
    "revision": "f04c1f6ec773596cf70ecbe1a415d7d6"
  },
  {
    "url": "backend/java/a-1.html",
    "revision": "f2637217117a03ef7ec6f6401c851be1"
  },
  {
    "url": "backend/java/b-2.html",
    "revision": "a5e263bb5340f2b11032495248b7a96c"
  },
  {
    "url": "backend/java/c-3.html",
    "revision": "2ad5b1c86cd95e2db4719591318979f5"
  },
  {
    "url": "backend/java/Collection.jpg",
    "revision": "82eccbdcafece8999f235a54e736289c"
  },
  {
    "url": "backend/java/d-4.html",
    "revision": "dc1a5f323fc60b6fc1cb5c8b99f8a224"
  },
  {
    "url": "backend/java/e-5.html",
    "revision": "6b3b4c5a3738b6693c8670787ca221f5"
  },
  {
    "url": "backend/java/f-6.html",
    "revision": "a4c68d561bf2c19daa70c47da61308b3"
  },
  {
    "url": "backend/java/h-7.html",
    "revision": "5bc602dfd7b8df45744aafba08124731"
  },
  {
    "url": "backend/java/i-8.html",
    "revision": "71fe0e7683c7bce023ad2be939255d74"
  },
  {
    "url": "backend/java/index.html",
    "revision": "f7af52a2148c504fb83aa52a3946c565"
  },
  {
    "url": "backend/java/j-9.html",
    "revision": "cb97f90451b4a3e0146080c531f0384c"
  },
  {
    "url": "backend/java/k-10.html",
    "revision": "f0cff28c05789b610917c74b08d58e7e"
  },
  {
    "url": "backend/java/l-11.html",
    "revision": "7a7f4bdb760bb8695255144a839739a9"
  },
  {
    "url": "backend/java/lombok.html",
    "revision": "4c85d0f3a6c643622e145ffd881df729"
  },
  {
    "url": "backend/java/Map.jpg",
    "revision": "ea98a85e7d317daefc842d2c61ca1bba"
  },
  {
    "url": "backend/java/swagger.html",
    "revision": "8a6714d62e5c2e5dc6a43883c5eea027"
  },
  {
    "url": "backend/java/websocket.html",
    "revision": "9f9525b566ebfb9d5a889c66e6323985"
  },
  {
    "url": "backend/mybatis/index.html",
    "revision": "e6966aa380c3761c02280e258bf09788"
  },
  {
    "url": "backend/mybatis/jdbctype.html",
    "revision": "e17bf7068804843ad8330bb11d1b2bba"
  },
  {
    "url": "backend/quartz/index.html",
    "revision": "2638d065e1e3ce55efe6cfc299621bc7"
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
    "revision": "2f5047e121fa09e141ed81205299e0bd"
  },
  {
    "url": "backend/rabbitmq/rabbitMQ.html",
    "revision": "003ef9bd8e476288fe4695aea2f30032"
  },
  {
    "url": "backend/redis/1.jpg",
    "revision": "91469c03a7047ab672873f07a00f6c90"
  },
  {
    "url": "backend/spring-security-oauth2/index.html",
    "revision": "885cbf58eeff5e7f622fabc851808d66"
  },
  {
    "url": "backend/spring-security-oauth2/use.html",
    "revision": "8467a30abf3102911778e46bc310f8fe"
  },
  {
    "url": "backend/workflow/index.html",
    "revision": "05eb82a3faed8b1180cd7d4cb30e634f"
  },
  {
    "url": "backend/workflow/modeler.html",
    "revision": "87537410425def64538449db50c23495"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "c177e73627c8f4efdd7df3a8594b667c"
  },
  {
    "url": "database/mysql/install.html",
    "revision": "b09f09705cfc4f929fbc7cca59dad150"
  },
  {
    "url": "database/mysql/mysqlindex.html",
    "revision": "880c236706c5f9c1f3d42720623512ba"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "3a6894b2228a9caa55a751571e8fada8"
  },
  {
    "url": "database/oracle/install.html",
    "revision": "52ea03fce4c49fc966cb7612cac2b01e"
  },
  {
    "url": "database/redis/a-usecase.html",
    "revision": "da57e1892d6592707b421cc00aa2d5c8"
  },
  {
    "url": "database/redis/index.html",
    "revision": "7910cb1d29131eeaffbf4875ecbd5465"
  },
  {
    "url": "front/javascript/index.html",
    "revision": "461c8c7b86bbb56f59400437a2f77908"
  },
  {
    "url": "front/vue/amap.html",
    "revision": "95e904aea0ca73bce0ce1d47e386b4a7"
  },
  {
    "url": "front/vue/index.html",
    "revision": "fbf49fdb2de90613982f3231df08be2d"
  },
  {
    "url": "guide/a-about.html",
    "revision": "bfd7dca9fbca575145c99836f9157656"
  },
  {
    "url": "guide/b-icp.html",
    "revision": "64dd793fb9fcebd5d7345d2235102301"
  },
  {
    "url": "guide/c-download.html",
    "revision": "84ea1d2e04ef0921498b60fe7bc7a3c6"
  },
  {
    "url": "guide/index.html",
    "revision": "c25e306891a2287469fb7a5b6c4f695a"
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
    "revision": "85c41eb876a554fc7678b6e8757abc59"
  },
  {
    "url": "os/linux/index.html",
    "revision": "c3f7fd2ec99672fa7566cd080c49ce5a"
  },
  {
    "url": "others/cicd/docker-compose.html",
    "revision": "8739e665fb891274f4bcceeb8ac24120"
  },
  {
    "url": "others/cicd/docker.html",
    "revision": "5d3381db5cccd54d5a4e3511e8d27f18"
  },
  {
    "url": "others/cicd/index.html",
    "revision": "21aeca2ee95e0fb27cd3b2004b1c6cad"
  },
  {
    "url": "others/interview/index.html",
    "revision": "c924fff77210371e278fd1644c37525e"
  },
  {
    "url": "others/issues/annotation.html",
    "revision": "59e5b609715e25f81fc580d909f3a88e"
  },
  {
    "url": "others/issues/cors.html",
    "revision": "63cb25ee7d24fabcab55881aae97e738"
  },
  {
    "url": "others/issues/finally.html",
    "revision": "ff6b5010f403ec57c5928bb8df3bbc71"
  },
  {
    "url": "others/issues/index.html",
    "revision": "eb66cc6385cc051a7e3d7e3625925dac"
  },
  {
    "url": "others/issues/javax-persistence.html",
    "revision": "93a187a9423e1495eb97e50a866ddfed"
  },
  {
    "url": "others/issues/log.html",
    "revision": "ffc969cf78b9d68db2dfa94fcc8ab8a3"
  },
  {
    "url": "others/issues/properties.html",
    "revision": "365662bc9ea950d1e58ddcb3bf0f64dd"
  },
  {
    "url": "others/sdk/dingtalk.html",
    "revision": "eed5eb8d468961821885010a511ec23d"
  },
  {
    "url": "others/sdk/index.html",
    "revision": "69bbd7309c0bf0eba3c21fbf9aa7c5de"
  },
  {
    "url": "others/sdk/sdk-video.jpg",
    "revision": "7d98ade27f68ee575f581616ae88d8cc"
  },
  {
    "url": "others/sdk/video.html",
    "revision": "1f85d9b3b29af829feb7e79afd239978"
  },
  {
    "url": "others/utils/index.html",
    "revision": "66cd3ac1012c11eb343999d9b56ec0fe"
  },
  {
    "url": "others/utils/utils.html",
    "revision": "307aaa91cdb826011b396876dc149d7a"
  },
  {
    "url": "others/work/electronjs.jpg",
    "revision": "132821f8a5ec6a74aa5eac263f01f024"
  },
  {
    "url": "others/work/iis.html",
    "revision": "f6c38640c8adc0cdf1903c21da00a862"
  },
  {
    "url": "others/work/index.html",
    "revision": "a50ee0c600023937314906129d226aae"
  },
  {
    "url": "tools/git/a-config.html",
    "revision": "8d4108684f5e8d9af9ef55895658788d"
  },
  {
    "url": "tools/git/b-repo.html",
    "revision": "0e2736d75ef0b0988ec815342f8a27aa"
  },
  {
    "url": "tools/git/c-base.html",
    "revision": "d6080b4a48938eb59a37ec00340f4fe0"
  },
  {
    "url": "tools/git/d-branch.html",
    "revision": "c78e2db309749e18afccf77207471cf9"
  },
  {
    "url": "tools/git/e-log.html",
    "revision": "e2f156c8d05a58a1609a7267bab66652"
  },
  {
    "url": "tools/git/f-tag.html",
    "revision": "50dcf07e85326df61b191444ae6c0bac"
  },
  {
    "url": "tools/git/g-github.html",
    "revision": "7b65d288fc0e1d016298f1b06e61a782"
  },
  {
    "url": "tools/git/index.html",
    "revision": "f1ab6f97794f90b8a8211509867bb6ab"
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
    "revision": "505de0db3295a2a6d40a6f865009c200"
  },
  {
    "url": "tools/maven/b-nexus.html",
    "revision": "0d3300c618a6775d3b603dcf416c8ba7"
  },
  {
    "url": "tools/maven/index.html",
    "revision": "1eb1d944f62e5514ec0f5d4ea4b49db4"
  },
  {
    "url": "tools/maven/pom.html",
    "revision": "9ccfaffadb2bcb0945919036c30810c6"
  },
  {
    "url": "tools/maven/settings.html",
    "revision": "f4b3bf287c99e18cf26bc817917b701a"
  },
  {
    "url": "tools/navicat/backup.html",
    "revision": "12da50a7e60fdb73b6748d3a30af1e5c"
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
    "revision": "b07dbf7a157c5e550e8757f578bdbb8c"
  },
  {
    "url": "tools/nginx/index.html",
    "revision": "f4eefccc75cbcdf79e50418a818eb1ab"
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
