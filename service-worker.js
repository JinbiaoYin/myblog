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
    "revision": "558dc57ebdbdd4bd381c85680ce3936f"
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
    "url": "assets/js/13.80185dfa.js",
    "revision": "b29dd2fc96e7b5a442881b07c7b057f3"
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
    "url": "assets/js/21.0ace671f.js",
    "revision": "56e7aa84fe43e761bf35fc65a98e9fdb"
  },
  {
    "url": "assets/js/22.09269599.js",
    "revision": "3da6848dccc41d2e622b9859f5461d4b"
  },
  {
    "url": "assets/js/23.44391b28.js",
    "revision": "1f473f596b9fa925968bbdcc56eeec96"
  },
  {
    "url": "assets/js/24.b59948b6.js",
    "revision": "ef31291c4542a981a5a58593d820b9ee"
  },
  {
    "url": "assets/js/25.542b5581.js",
    "revision": "83f7c22e9e98b1393d336b714bbee80d"
  },
  {
    "url": "assets/js/26.59b7b76c.js",
    "revision": "a1c24983bc4ad93e7988eaaa70893210"
  },
  {
    "url": "assets/js/27.4c07b881.js",
    "revision": "7a405a0a6e5a594580bed8b7cc9f54fb"
  },
  {
    "url": "assets/js/28.9412cdb3.js",
    "revision": "870f6aa955cc651d7747ffdd6b7cc6b0"
  },
  {
    "url": "assets/js/29.7a3c32c1.js",
    "revision": "3e335bfe9c87531da67f69516f9bc1bb"
  },
  {
    "url": "assets/js/3.10cb9937.js",
    "revision": "6a68bd11f87cfb411512238d185d7b97"
  },
  {
    "url": "assets/js/30.586f21e5.js",
    "revision": "492e0727d5dfd1e91eddebdcf3e44c09"
  },
  {
    "url": "assets/js/31.431edc7e.js",
    "revision": "345ed8b78888ade5b427c31e58de31a2"
  },
  {
    "url": "assets/js/32.d7b31719.js",
    "revision": "40c95f90413d1499ccfbf95c0a211e8f"
  },
  {
    "url": "assets/js/33.146f9213.js",
    "revision": "e5afe299799caf3ab74144a69dbff85e"
  },
  {
    "url": "assets/js/34.63905549.js",
    "revision": "a498290dcf3cd075770da8a38481f06c"
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
    "url": "assets/js/48.5e68634f.js",
    "revision": "a849e9bd3262001ee987a9aacf3f20cf"
  },
  {
    "url": "assets/js/49.a4c5fdd5.js",
    "revision": "2f8f41bff739d54019ba69b384ad8f2d"
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
    "url": "assets/js/53.eedd8bb3.js",
    "revision": "339ddbf1590ea86fd3ff95fc737e521c"
  },
  {
    "url": "assets/js/54.e57c8fd2.js",
    "revision": "c3fb4ab7bb04ccac5c268fa261e66639"
  },
  {
    "url": "assets/js/55.5a21edca.js",
    "revision": "25a87d3245c35a95c2c84053f4302d87"
  },
  {
    "url": "assets/js/56.99801dda.js",
    "revision": "3a873932cbb66c866380df60466b7924"
  },
  {
    "url": "assets/js/57.70f42990.js",
    "revision": "2555fdc7294e64ab1debb65c3a04064f"
  },
  {
    "url": "assets/js/58.2e0dca72.js",
    "revision": "b64f42e75bd70e773aee38684d938c50"
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
    "url": "assets/js/66.4255c825.js",
    "revision": "2d50e7e7890559144eea0c3deeac3363"
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
    "url": "assets/js/7.8a1412d1.js",
    "revision": "6ba94b09967d447788b89d60bd5c3caf"
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
    "url": "assets/js/8.80142c04.js",
    "revision": "9c3e6840953dbed7aa0a5f548ba0c7c7"
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
    "url": "assets/js/9.bd1d6dfe.js",
    "revision": "c1889028b3012c25df728010be4ce46b"
  },
  {
    "url": "assets/js/app.15ce5170.js",
    "revision": "fabd2b835aabf485a363ec7f1e789558"
  },
  {
    "url": "avatar.png",
    "revision": "3148d27e27b8a5da563aefd136a9bea3"
  },
  {
    "url": "backend/elasticsearch/index.html",
    "revision": "e3dc29be46d7225caf81073996317f9d"
  },
  {
    "url": "backend/java/a-1.html",
    "revision": "0e8453a5e45b28dd55972cacd2966349"
  },
  {
    "url": "backend/java/b-2.html",
    "revision": "d62b94311b1f66f1804f67575bea00d7"
  },
  {
    "url": "backend/java/c-3.html",
    "revision": "faa2738313ebcb1e8a251095e853f961"
  },
  {
    "url": "backend/java/Collection.jpg",
    "revision": "82eccbdcafece8999f235a54e736289c"
  },
  {
    "url": "backend/java/d-4.html",
    "revision": "03f08c22f253f4dafbc6925de1f5b5c0"
  },
  {
    "url": "backend/java/e-5.html",
    "revision": "bb3e9f29e253432d26f4d8784dcd406e"
  },
  {
    "url": "backend/java/f-6.html",
    "revision": "c41818c91d3027556f5ec34e7256b6af"
  },
  {
    "url": "backend/java/h-7.html",
    "revision": "8ad977c5d4f160367ac9170f6d5d3aac"
  },
  {
    "url": "backend/java/i-8.html",
    "revision": "c4413e1bc0a9c552a6412a19c6ae9835"
  },
  {
    "url": "backend/java/index.html",
    "revision": "6f32e5fd5bf318b10e4dea8b6ce00029"
  },
  {
    "url": "backend/java/j-9.html",
    "revision": "4d26374dcde830484b1665be9bdf060d"
  },
  {
    "url": "backend/java/k-10.html",
    "revision": "f3ea65e197b8c6b6980a4fe1eacf886c"
  },
  {
    "url": "backend/java/l-11.html",
    "revision": "62b45df566acf9b39fa9c46e56000b70"
  },
  {
    "url": "backend/java/lombok.html",
    "revision": "d9dce526c04b38aefdcfcf9261755c10"
  },
  {
    "url": "backend/java/m-12.html",
    "revision": "011b674fc29672f6b2187d3924b347ec"
  },
  {
    "url": "backend/java/Map.jpg",
    "revision": "ea98a85e7d317daefc842d2c61ca1bba"
  },
  {
    "url": "backend/java/swagger.html",
    "revision": "306c6ba51af50ba08e5d1d68d4dfb69d"
  },
  {
    "url": "backend/java/throwable.jpg",
    "revision": "ad75058182258f5c2c21717e7e79f738"
  },
  {
    "url": "backend/java/websocket.html",
    "revision": "7a3421a6c9ac40f22964e69091d85926"
  },
  {
    "url": "backend/mybatis/index.html",
    "revision": "4bbe842538d8c549f743a54e6118237e"
  },
  {
    "url": "backend/mybatis/jdbctype.html",
    "revision": "9fadc087db815112dd60afb2b2572f21"
  },
  {
    "url": "backend/quartz/index.html",
    "revision": "c36e3416939762cd4665898554a956ce"
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
    "revision": "a9b847ee842b2ce95a03171cfa6e6389"
  },
  {
    "url": "backend/rabbitmq/rabbitMQ.html",
    "revision": "3e8fb0ee134457fe5d5faae3db4636d0"
  },
  {
    "url": "backend/redis/1.jpg",
    "revision": "91469c03a7047ab672873f07a00f6c90"
  },
  {
    "url": "backend/spring-security-oauth2/index.html",
    "revision": "06bfa691beac6cb524c17f87d1a90503"
  },
  {
    "url": "backend/spring-security-oauth2/use.html",
    "revision": "d4273cae6840bbac4b88667b46fa7aca"
  },
  {
    "url": "backend/workflow/index.html",
    "revision": "bea10cccf574bb8de2636c4e976b2449"
  },
  {
    "url": "backend/workflow/modeler.html",
    "revision": "3d1cff69c50a4528d211c8c5ee2566c5"
  },
  {
    "url": "database/mysql/index.html",
    "revision": "d80891a1ba6194c77121477d09e5e362"
  },
  {
    "url": "database/mysql/install.html",
    "revision": "779effabc7dde241fc86511977eb77ae"
  },
  {
    "url": "database/mysql/mysqlindex.html",
    "revision": "1921703030376352d70bc401fe037b54"
  },
  {
    "url": "database/oracle/index.html",
    "revision": "f818435a4c9d380a632fc19f90528e2f"
  },
  {
    "url": "database/oracle/install.html",
    "revision": "4c5aeb81033a822d0b4da608bf2666de"
  },
  {
    "url": "database/redis/a-usecase.html",
    "revision": "cf9decba82d3542fe591d224d88419cc"
  },
  {
    "url": "database/redis/index.html",
    "revision": "6dddfebe435468564d4e6fae65b2a080"
  },
  {
    "url": "front/javascript/index.html",
    "revision": "88fbcc44798a197021f7e943b4cab375"
  },
  {
    "url": "front/vue/amap.html",
    "revision": "e11a5ecec99cb82877faaef41898b2c2"
  },
  {
    "url": "front/vue/index.html",
    "revision": "c8c1696a812c4bb877a2ba75579543fe"
  },
  {
    "url": "guide/a-about.html",
    "revision": "bc53ed9c4d3bda3a201e2db343a0d82d"
  },
  {
    "url": "guide/b-icp.html",
    "revision": "f2f5995f3dbc61242fca275831f9b20e"
  },
  {
    "url": "guide/c-download.html",
    "revision": "60615f74a2450339d9837f4c96f82e8a"
  },
  {
    "url": "guide/index.html",
    "revision": "8e3dcf5e553fc29d025e5ed45a26e851"
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
    "revision": "ff933cd6bb799071bd4aff61bcc4b5a0"
  },
  {
    "url": "os/linux/index.html",
    "revision": "beb0869ba58bf21837e23d26e87f3614"
  },
  {
    "url": "others/cicd/docker-compose.html",
    "revision": "fea71c90eac8ffdcf2c3cf08f4145edd"
  },
  {
    "url": "others/cicd/docker.html",
    "revision": "b3610ce0adf97aa6e76c3fcde6d2f3cf"
  },
  {
    "url": "others/cicd/index.html",
    "revision": "3d3a6353aeeaf8c82936f0c5fe5f46a0"
  },
  {
    "url": "others/interview/index.html",
    "revision": "d30c89a576d5f3ca6feb97dacb280806"
  },
  {
    "url": "others/issues/annotation.html",
    "revision": "075cfe873b433e1a1e2cc4350bee50ae"
  },
  {
    "url": "others/issues/cors.html",
    "revision": "3954a0689097503fb8491c9491c5cc74"
  },
  {
    "url": "others/issues/finally.html",
    "revision": "582d050ba0825f2343b3c05ebd118ab2"
  },
  {
    "url": "others/issues/index.html",
    "revision": "47510c1d47b5609273495896ae825f26"
  },
  {
    "url": "others/issues/javax-persistence.html",
    "revision": "a20fc31e7a1d2fd2f95d3c0bef7a0542"
  },
  {
    "url": "others/issues/log.html",
    "revision": "3691e2b88172956b8dcfc71fe8906bea"
  },
  {
    "url": "others/issues/properties.html",
    "revision": "76bce1503443de0b17d3b7a1b9cb3e32"
  },
  {
    "url": "others/sdk/dingtalk.html",
    "revision": "8ea3c3657593a14a5c32d32ad2175455"
  },
  {
    "url": "others/sdk/ffmpeg.html",
    "revision": "af413886776cb95445640a300b5112a0"
  },
  {
    "url": "others/sdk/index.html",
    "revision": "1dc1057d1ccb9b95003cd743762c4f11"
  },
  {
    "url": "others/sdk/sdk-video.jpg",
    "revision": "7d98ade27f68ee575f581616ae88d8cc"
  },
  {
    "url": "others/sdk/video.html",
    "revision": "df825c83f0772d836287c3958a8831c9"
  },
  {
    "url": "others/utils/index.html",
    "revision": "22a5aff36b11004b78e33a8277d338c6"
  },
  {
    "url": "others/utils/utils.html",
    "revision": "bee13423ddc94a8867020eaf02eece27"
  },
  {
    "url": "others/work/electronjs.jpg",
    "revision": "132821f8a5ec6a74aa5eac263f01f024"
  },
  {
    "url": "others/work/ibms.html",
    "revision": "8bf971feae43d01947c4bdf13942c444"
  },
  {
    "url": "others/work/index.html",
    "revision": "b701d009871aaa421257bf5c1cd4f4fb"
  },
  {
    "url": "tools/git/a-config.html",
    "revision": "c65e4e65b4006760ec06b852fb6999c5"
  },
  {
    "url": "tools/git/b-repo.html",
    "revision": "d93f2de5672cd02b302db0cf5e38d92f"
  },
  {
    "url": "tools/git/c-base.html",
    "revision": "999478c18659f40f665c9cea646e3029"
  },
  {
    "url": "tools/git/d-branch.html",
    "revision": "57d3ae4547a77a66d2646a5fdcbfca1b"
  },
  {
    "url": "tools/git/e-log.html",
    "revision": "c801ae82222a2666e6023cedf41cf65a"
  },
  {
    "url": "tools/git/f-tag.html",
    "revision": "73d807611247794c733402adb5c5293e"
  },
  {
    "url": "tools/git/g-github.html",
    "revision": "90fe59fa9eeaf0ee12171722255ae171"
  },
  {
    "url": "tools/git/index.html",
    "revision": "6fd3f3fa22f0dbad50ab1e2c0e72bef0"
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
    "revision": "6d65af721a8b8b0be33aa22d2964af5b"
  },
  {
    "url": "tools/maven/b-nexus.html",
    "revision": "50d2ba1032099bd30cfac2a48de2d7b8"
  },
  {
    "url": "tools/maven/index.html",
    "revision": "dc1877630782d2507ae241dcce35233d"
  },
  {
    "url": "tools/maven/pom.html",
    "revision": "69d853b3b9f5f3aed4de978d8fbeadea"
  },
  {
    "url": "tools/maven/settings.html",
    "revision": "9a0a24f9248516ca18b0989431900858"
  },
  {
    "url": "tools/navicat/backup.html",
    "revision": "dcfb1aed1b3846e44bcdb2ec8678a291"
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
    "revision": "bafeb5489de46dc72a10a05bf5afe00e"
  },
  {
    "url": "tools/nginx/index.html",
    "revision": "b1a9828d0e7da0e7730274fc87157766"
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
