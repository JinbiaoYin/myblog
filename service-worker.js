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
    "revision": "49ce826bf27ebc392bdba90d05becaab"
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
    "url": "assets/js/53.ee28ca50.js",
    "revision": "dd4a4ecbd47f36a029b77ad6f5c5c66e"
  },
  {
    "url": "assets/js/54.cab3db62.js",
    "revision": "24b9f326d334b749479a60c4ecdfd8df"
  },
  {
    "url": "assets/js/55.d405fe0f.js",
    "revision": "eb724bc636317bdff0f2763d303d7b9b"
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
    "url": "assets/js/app.312928a5.js",
    "revision": "80bbea38ab7b3d1e14a8cbcd99ad5645"
  },
  {
    "url": "avatar.png",
    "revision": "3148d27e27b8a5da563aefd136a9bea3"
  },
  {
    "url": "backend/elasticsearch/index.html",
    "revision": "19526554799386ce736d43d28dcd18b3"
  },
  {
    "url": "backend/java/a-1.html",
    "revision": "823c7b6d5d0e1386ef596c3442ada8bb"
  },
  {
    "url": "backend/java/b-2.html",
    "revision": "75d710144c68e190248eb903fb243551"
  },
  {
    "url": "backend/java/c-3.html",
    "revision": "f9a6b9ef5d328ee7b0955826b1d6af03"
  },
  {
    "url": "backend/java/Collection.jpg",
    "revision": "82eccbdcafece8999f235a54e736289c"
  },
  {
    "url": "backend/java/d-4.html",
    "revision": "1f726b39a607a0f88a999db7588a9eb5"
  },
  {
    "url": "backend/java/e-5.html",
    "revision": "494b37780450944432d196b4cd91cedc"
  },
  {
    "url": "backend/java/f-6.html",
    "revision": "058aab897a515be629af21793fd32304"
  },
  {
    "url": "backend/java/h-7.html",
    "revision": "83dc56f99f8b61049a36c21bd4de8e3e"
  },
  {
    "url": "backend/java/i-8.html",
    "revision": "a8aa07893bffae9899619bdeb664f93e"
  },
  {
    "url": "backend/java/index.html",
    "revision": "8692b659ab9382df9b5a0e051873ccfd"
  },
  {
    "url": "backend/java/j-9.html",
    "revision": "72eadd09b3cbefb79b614efaf1bceefc"
  },
  {
    "url": "backend/java/k-10.html",
    "revision": "99f2287bc241364109cc78c6e2006740"
  },
  {
    "url": "backend/java/l-11.html",
    "revision": "2e49191ad5b509d79af43f718b8c56f3"
  },
  {
    "url": "backend/java/lombok.html",
    "revision": "ddb407ce7743158bdb7887fecb134a44"
  },
  {
    "url": "backend/java/Map.jpg",
    "revision": "ea98a85e7d317daefc842d2c61ca1bba"
  },
  {
    "url": "backend/java/swagger.html",
    "revision": "5f47b221b8c9d53d869114323ee4fae3"
  },
  {
    "url": "backend/java/websocket.html",
    "revision": "a3094b5eb1b25e9fb87c0267b9398320"
  },
  {
    "url": "backend/mybatis/index.html",
    "revision": "7ccc392984b7dc283b420b3ead672892"
  },
  {
    "url": "backend/mybatis/jdbctype.html",
    "revision": "c63a51f1c12449c7c14b08f819ba6323"
  },
  {
    "url": "backend/quartz/index.html",
    "revision": "1ac0826edd89c6f443d9bba0b0df93e9"
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
    "revision": "931644d8daa2cb1d1925cfa571f89ec6"
  },
  {
    "url": "backend/rabbitmq/rabbitMQ.html",
    "revision": "e67179445472523e427a5482362af84a"
  },
  {
    "url": "backend/redis/1.jpg",
    "revision": "91469c03a7047ab672873f07a00f6c90"
  },
  {
    "url": "backend/spring-security-oauth2/index.html",
    "revision": "c7a038ead94d9561282c917f13f54586"
  },
  {
    "url": "backend/spring-security-oauth2/use.html",
    "revision": "c32cd105f372f28c6063c4053095f859"
  },
  {
    "url": "backend/workflow/index.html",
    "revision": "d16432ea8e2a0d1aef13dbfc7d13580b"
  },
  {
    "url": "backend/workflow/modeler.html",
    "revision": "8ab42a2b2ccf03ede1bc5a94fb6455b0"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "c792d06bfbdb95e62d77bb9d6a7ea1e2"
  },
  {
    "url": "database/mysql/install.html",
    "revision": "e28c20f450935b840a4eb4c29e28eb60"
  },
  {
    "url": "database/mysql/mysqlindex.html",
    "revision": "218e7468273cf0b20984ade4dc07dd30"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "1cccef5f216ec8a4c09a06e18cf5425e"
  },
  {
    "url": "database/oracle/install.html",
    "revision": "fba6e887eae2b750ee71d8407d8483c1"
  },
  {
    "url": "database/redis/a-usecase.html",
    "revision": "d8e3afeeecd78c8c9ee84197b132dd24"
  },
  {
    "url": "database/redis/index.html",
    "revision": "da327b3ec28e4750a7eebb3682cff101"
  },
  {
    "url": "front/javascript/index.html",
    "revision": "c6ecaa14c6214e554be52857f1f590cd"
  },
  {
    "url": "front/vue/amap.html",
    "revision": "45ca174aa5c6d4c01c361fd0289118f6"
  },
  {
    "url": "front/vue/index.html",
    "revision": "912b6fc3f49fd5013e1901219ac10060"
  },
  {
    "url": "guide/a-about.html",
    "revision": "95735ea06035ff1a2e5e6659bcaca8e8"
  },
  {
    "url": "guide/b-icp.html",
    "revision": "375732f562e1acb6bd42e6ba118cb0cf"
  },
  {
    "url": "guide/c-download.html",
    "revision": "aa0277c6d11b82863c1129f78b38a6df"
  },
  {
    "url": "guide/index.html",
    "revision": "f616eab836165853c74550bd003b218e"
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
    "revision": "a2083c64aa74387cd4adf6d79f63060c"
  },
  {
    "url": "os/linux/index.html",
    "revision": "6a67baf20f5e8f5ccac513e1504783b1"
  },
  {
    "url": "others/cicd/docker-compose.html",
    "revision": "f429fb2621de72e3e6377c0a4231b702"
  },
  {
    "url": "others/cicd/docker.html",
    "revision": "c9b5b7a7d66157b13e963c4f1d1f4b56"
  },
  {
    "url": "others/cicd/index.html",
    "revision": "9fd4020fe553273730bec24665c8acdb"
  },
  {
    "url": "others/interview/index.html",
    "revision": "4d7a36c03bfb6f1d4edf54663e60ffbd"
  },
  {
    "url": "others/issues/annotation.html",
    "revision": "ed48f7b142823bd5597c91485d539ddc"
  },
  {
    "url": "others/issues/cors.html",
    "revision": "28498ef5c483a0d81df2b05731de574a"
  },
  {
    "url": "others/issues/finally.html",
    "revision": "04695e9e50c21b90e1bc8b28bc486fb2"
  },
  {
    "url": "others/issues/index.html",
    "revision": "febe286fba0f19f5dd489e2ee217f718"
  },
  {
    "url": "others/issues/javax-persistence.html",
    "revision": "e0aa00601e801188f24f1964c003b624"
  },
  {
    "url": "others/issues/log.html",
    "revision": "17da99eb3df544a24e42296a5ad1d760"
  },
  {
    "url": "others/issues/properties.html",
    "revision": "8b7345a59bba58d35a23d616d26e6a0f"
  },
  {
    "url": "others/sdk/dingtalk.html",
    "revision": "709e3b52afe4d5bc0237d1097aeb7329"
  },
  {
    "url": "others/sdk/index.html",
    "revision": "365508423b6538782238b0393b2ba722"
  },
  {
    "url": "others/sdk/sdk-video.jpg",
    "revision": "7d98ade27f68ee575f581616ae88d8cc"
  },
  {
    "url": "others/sdk/video.html",
    "revision": "41ca025f8228e7beba498a6a96881745"
  },
  {
    "url": "others/utils/index.html",
    "revision": "57d19aefbb29a6009f91fb3e1d968c4b"
  },
  {
    "url": "others/utils/utils.html",
    "revision": "0afe44baf5baf4c79580ccf71a110cad"
  },
  {
    "url": "others/work/electronjs.jpg",
    "revision": "132821f8a5ec6a74aa5eac263f01f024"
  },
  {
    "url": "others/work/iis.html",
    "revision": "2bce7d0cd2b1ef7fd1f3c5bf85913ed5"
  },
  {
    "url": "others/work/index.html",
    "revision": "54f2a6a80e0bed4a1ec23f9b0d92abed"
  },
  {
    "url": "tools/git/a-config.html",
    "revision": "8b2dada5faf66641cb39b892b3def56d"
  },
  {
    "url": "tools/git/b-repo.html",
    "revision": "22a1e08899b0d95b0be1d50bebe76471"
  },
  {
    "url": "tools/git/c-base.html",
    "revision": "5a128d9d1395b803350f4843a9cbd9ff"
  },
  {
    "url": "tools/git/d-branch.html",
    "revision": "db8f883bd1e4cd730f1a64bb3cdf6f9a"
  },
  {
    "url": "tools/git/e-log.html",
    "revision": "953f7ec95a1718b9cc2128936ed28da4"
  },
  {
    "url": "tools/git/f-tag.html",
    "revision": "148b598184c2cbe5b4d288db08b8c0aa"
  },
  {
    "url": "tools/git/g-github.html",
    "revision": "97f83de5c494b4548f9471b997a67281"
  },
  {
    "url": "tools/git/index.html",
    "revision": "febaf7c6e130fce23bf3f59fc6443be1"
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
    "revision": "74314eb3c46566a7cb6d0feccb43cf83"
  },
  {
    "url": "tools/maven/b-nexus.html",
    "revision": "495e9934a633c36913faec9d4f16b134"
  },
  {
    "url": "tools/maven/index.html",
    "revision": "3977df27ae788e8f39a6f99f4cdb488e"
  },
  {
    "url": "tools/maven/pom.html",
    "revision": "7c503b0b56d16963ec0de194a22a5d73"
  },
  {
    "url": "tools/maven/settings.html",
    "revision": "59422d16ec2e2c7733fb202c013b818b"
  },
  {
    "url": "tools/navicat/backup.html",
    "revision": "6b1da4f5bfe28114afc11c2df7bc4261"
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
    "revision": "9da95d8b7daf72dbdc64aba66837691e"
  },
  {
    "url": "tools/nginx/index.html",
    "revision": "31e0df96dc086ce469916507d5e52ac2"
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
