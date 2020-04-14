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
    "revision": "2ad319ded24f63af39c30cdd6857eb3a"
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
    "url": "assets/js/40.7c9a1a7f.js",
    "revision": "6ff7a3a2d8691a1f13125b22bf1f28f4"
  },
  {
    "url": "assets/js/41.899f496b.js",
    "revision": "002bead3e786a4d54f36dc9c54afb7aa"
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
    "url": "assets/js/52.2ba0d321.js",
    "revision": "ffbbffb572e633e3ff7cb2f65a2c10d3"
  },
  {
    "url": "assets/js/53.c40c813e.js",
    "revision": "a073ecee129d5a7ee59d6d156831cdd5"
  },
  {
    "url": "assets/js/54.e3754293.js",
    "revision": "b863e9a6bf8726b0843990995e406fdf"
  },
  {
    "url": "assets/js/55.c428fd80.js",
    "revision": "52d9b8182c60074e1838aaa7594874da"
  },
  {
    "url": "assets/js/56.de7ec720.js",
    "revision": "5fca9194f55d61fadee5ecfa35ed3191"
  },
  {
    "url": "assets/js/57.e170a690.js",
    "revision": "e59fca015798debdfbef680e9d9afe63"
  },
  {
    "url": "assets/js/58.f7eb17e8.js",
    "revision": "1f1185fd32238636815a541461680feb"
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
    "url": "assets/js/64.ef8e8297.js",
    "revision": "91e44bc687dc810f1cab0e9cd76a35ce"
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
    "url": "assets/js/9.bd1d6dfe.js",
    "revision": "c1889028b3012c25df728010be4ce46b"
  },
  {
    "url": "assets/js/app.116dfc4d.js",
    "revision": "e2e18ce077ec0954ec3a1407bb0905e7"
  },
  {
    "url": "avatar.png",
    "revision": "3148d27e27b8a5da563aefd136a9bea3"
  },
  {
    "url": "backend/elasticsearch/index.html",
    "revision": "9086a4fce4ca71778cbf5cedc3434505"
  },
  {
    "url": "backend/java/a-1.html",
    "revision": "3aeee6b211056412ee3acd6db4e5d185"
  },
  {
    "url": "backend/java/b-2.html",
    "revision": "c5763d667d5fcb6b623361851739a7c4"
  },
  {
    "url": "backend/java/c-3.html",
    "revision": "2c3759233393df44f784297a39b442fd"
  },
  {
    "url": "backend/java/Collection.jpg",
    "revision": "82eccbdcafece8999f235a54e736289c"
  },
  {
    "url": "backend/java/d-4.html",
    "revision": "af94bd8f28388c69bf71040b57c3954a"
  },
  {
    "url": "backend/java/e-5.html",
    "revision": "ded6eec52cda0a34ad84896c06983919"
  },
  {
    "url": "backend/java/f-6.html",
    "revision": "5ace1e651ad84a1657b9e16b2c1cba8a"
  },
  {
    "url": "backend/java/h-7.html",
    "revision": "1980b4b9a825ac72214e75075b46e772"
  },
  {
    "url": "backend/java/i-8.html",
    "revision": "04325348ae2783f10e723faca20b24fa"
  },
  {
    "url": "backend/java/index.html",
    "revision": "1507e672c6ee6d3451b1c389a7c98fe5"
  },
  {
    "url": "backend/java/j-9.html",
    "revision": "c25dc4434c3ac84c89d60b0fc47255f4"
  },
  {
    "url": "backend/java/k-10.html",
    "revision": "8a714951b8b6af0455012341438728e0"
  },
  {
    "url": "backend/java/l-11.html",
    "revision": "5d04b991101336f6ca8335c4dd30accc"
  },
  {
    "url": "backend/java/lombok.html",
    "revision": "de3515e6ce039bedd39ddfd1261fe747"
  },
  {
    "url": "backend/java/Map.jpg",
    "revision": "ea98a85e7d317daefc842d2c61ca1bba"
  },
  {
    "url": "backend/java/swagger.html",
    "revision": "84735bdb090a26b81465b1faff3a9c49"
  },
  {
    "url": "backend/java/websocket.html",
    "revision": "7ff4e7eed5d07585d60163834d651a7b"
  },
  {
    "url": "backend/mybatis/index.html",
    "revision": "974ab7722b26210bb83e97986f6ce69b"
  },
  {
    "url": "backend/mybatis/jdbctype.html",
    "revision": "7f3f2b35a5a3a7a0971cc77962a8b9ef"
  },
  {
    "url": "backend/quartz/index.html",
    "revision": "6fc476c3b62e2f5a80f5d25521438bea"
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
    "revision": "d040df29533b827c4762aaea010f13ff"
  },
  {
    "url": "backend/rabbitmq/rabbitMQ.html",
    "revision": "3331a2b4f2c954fadf5177442d9ac65a"
  },
  {
    "url": "backend/redis/1.jpg",
    "revision": "91469c03a7047ab672873f07a00f6c90"
  },
  {
    "url": "backend/spring-security-oauth2/index.html",
    "revision": "e43d27f54fe44d5d82c8c4db652357e8"
  },
  {
    "url": "backend/spring-security-oauth2/use.html",
    "revision": "f2659dafa65654b863021d0afa0b2218"
  },
  {
    "url": "backend/workflow/index.html",
    "revision": "5457db759dfcc7210ecd1adcfa27d408"
  },
  {
    "url": "backend/workflow/modeler.html",
    "revision": "4550c1af19f1ea042c38918303011907"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "8ff78ecbaf3703faf3b499ee6291566c"
  },
  {
    "url": "database/mysql/install.html",
    "revision": "762e0b37a7380190993d826976d420f5"
  },
  {
    "url": "database/mysql/mysqlindex.html",
    "revision": "50fcb3c368ee10d2249852406c99b9ce"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "a727acac29b867862b237d5342ffb6cd"
  },
  {
    "url": "database/oracle/install.html",
    "revision": "d5ca2891a9af01d2ac9bb6a92b33dfc1"
  },
  {
    "url": "database/redis/a-usecase.html",
    "revision": "5e00922ae7192eac0e06ad2c373482d4"
  },
  {
    "url": "database/redis/index.html",
    "revision": "a46cff0171c1a884412ee2aa0e83d347"
  },
  {
    "url": "front/javascript/index.html",
    "revision": "567b267fd7bbeb14c5758e07b4b5768e"
  },
  {
    "url": "front/vue/amap.html",
    "revision": "ba19b8ed0c6b813438339d593680a74e"
  },
  {
    "url": "front/vue/index.html",
    "revision": "e7a94d614da4345db38f438aff9cc9de"
  },
  {
    "url": "guide/a-about.html",
    "revision": "e775a8856dfce71cdbde521e19caadee"
  },
  {
    "url": "guide/b-icp.html",
    "revision": "65496a67017bdff1dd70239c80b8fd3f"
  },
  {
    "url": "guide/c-download.html",
    "revision": "fa6fd7fc1ee7ab726f8988e00e30dc22"
  },
  {
    "url": "guide/index.html",
    "revision": "b1f063a8813f40fef6887cb03d0df869"
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
    "revision": "9b1be2b3692903e35c730e43a9123977"
  },
  {
    "url": "os/linux/index.html",
    "revision": "7c03041a936cb463430288bdb6262590"
  },
  {
    "url": "others/cicd/docker-compose.html",
    "revision": "412b41cd3d133a2329b079182ff4a59a"
  },
  {
    "url": "others/cicd/docker.html",
    "revision": "45132634b167add76bf735fbb809e96f"
  },
  {
    "url": "others/cicd/index.html",
    "revision": "5af2b3ef0561e0fd7f12e2070ae78054"
  },
  {
    "url": "others/interview/index.html",
    "revision": "3f5c1cb2c1ab378e2a322b9c33f95ecd"
  },
  {
    "url": "others/issues/annotation.html",
    "revision": "4fbc071b3e95e55dca6630d6d2df2882"
  },
  {
    "url": "others/issues/cors.html",
    "revision": "b88be2667d20475c02f638fe0e32aa73"
  },
  {
    "url": "others/issues/finally.html",
    "revision": "9742d21b54d7d37be0376671be9548a6"
  },
  {
    "url": "others/issues/index.html",
    "revision": "8fb408cceb04b4bc08f4aa19035347f8"
  },
  {
    "url": "others/issues/javax-persistence.html",
    "revision": "b0fe4ed533dfd9e80e395d9db4421f38"
  },
  {
    "url": "others/issues/log.html",
    "revision": "ae3c34b0e1c317de87112862ee7f74ae"
  },
  {
    "url": "others/issues/properties.html",
    "revision": "48d2166ad0c200eda67c101031af80b9"
  },
  {
    "url": "others/sdk/dingtalk.html",
    "revision": "86de3b7da18a33582fcff0eaa3281ddb"
  },
  {
    "url": "others/sdk/index.html",
    "revision": "579ddce34f83fdc5329e0d4815ffeed5"
  },
  {
    "url": "others/sdk/sdk-video.jpg",
    "revision": "7d98ade27f68ee575f581616ae88d8cc"
  },
  {
    "url": "others/sdk/video.html",
    "revision": "da46166693a76bd9e903ef48eaa0e0be"
  },
  {
    "url": "others/utils/index.html",
    "revision": "c01f6695f4d8ca91214f58cda213c93f"
  },
  {
    "url": "others/utils/utils.html",
    "revision": "f6a2e4c3dfbec5441780537b105f57ea"
  },
  {
    "url": "others/work/electronjs.jpg",
    "revision": "132821f8a5ec6a74aa5eac263f01f024"
  },
  {
    "url": "others/work/iis.html",
    "revision": "8edce6c94ba922acb6913d15c3dcc0bd"
  },
  {
    "url": "others/work/index.html",
    "revision": "08202c7d0c98c2919c4a831a65fc0193"
  },
  {
    "url": "tools/git/a-config.html",
    "revision": "146caadf0e98575c3ee4f99af7ca9bac"
  },
  {
    "url": "tools/git/b-repo.html",
    "revision": "e0083b19577c82ed332da1bb64edf2eb"
  },
  {
    "url": "tools/git/c-base.html",
    "revision": "04d4ffa234ee5a1849e0508748e74a5b"
  },
  {
    "url": "tools/git/d-branch.html",
    "revision": "c64b1d98be335516f923929d095f31d7"
  },
  {
    "url": "tools/git/e-log.html",
    "revision": "b5c37dcc974ecac9d256e2617ac50ca2"
  },
  {
    "url": "tools/git/f-tag.html",
    "revision": "6b30289ca8ff20afdfcad97e287205d3"
  },
  {
    "url": "tools/git/g-github.html",
    "revision": "daac4d190fffb7189146b2c37dea733d"
  },
  {
    "url": "tools/git/index.html",
    "revision": "cd5485f925e3d83ed567c440a139d20a"
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
    "revision": "8d7b3b5b2405fe97600f1ffa100c139e"
  },
  {
    "url": "tools/maven/b-nexus.html",
    "revision": "c9e26e66b50ae64b0f7e8f26cf1613d7"
  },
  {
    "url": "tools/maven/index.html",
    "revision": "25f39fce2a6f7f2c1986fa189cf40355"
  },
  {
    "url": "tools/maven/pom.html",
    "revision": "a13d224d3db0c013f682547da29a73e2"
  },
  {
    "url": "tools/maven/settings.html",
    "revision": "0175059ba0a28f0412d73a886c673573"
  },
  {
    "url": "tools/navicat/backup.html",
    "revision": "54de372eac4bb611ac9e39728d2307dc"
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
    "revision": "2a56c7e82a3172bbdc3f25672dde4552"
  },
  {
    "url": "tools/nginx/index.html",
    "revision": "cb20541cf4f912f86c6a5c23fcdee383"
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
