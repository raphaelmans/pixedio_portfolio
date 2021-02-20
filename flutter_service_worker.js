'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4194693dadd2feac0ca80ef360d46b63",
".git/config": "cbf65c8a446b9e631756d95839e785dd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "547ea8996f9556dd09cd324f0e0d31fe",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "32d5c3ec8b9e01f0f9e107d2c46c42cb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "522913ba6c96c5bbb6b2f9412081b7f2",
".git/logs/refs/heads/dev": "1a3bee14aa3a700610364ba24fe7649b",
".git/logs/refs/heads/master": "21d288079a460249d418953fd939547b",
".git/logs/refs/heads/new": "bd9be6a5b674ec80f250d3e5aee7fc10",
".git/logs/refs/remotes/origin/master": "25ec0dc7f72a84b9db58f0ac16368df2",
".git/logs/refs/remotes/origin/new": "5cb44cae28bcc5439f2dafedbfd5d9ef",
".git/objects/00/3ada72b3b4792bb2578c39256033e3478cafc0": "5b8f697fabae2740e57e3b86d7b0f200",
".git/objects/00/6c2f438c2903fa9d3bea22dc4e5b0e2a9b632f": "8e76f8f30e394a97b35246a91946d244",
".git/objects/00/9c1e1f0eeae9fa3b1a08eec754dc0b02c17379": "9f6eed8eeac8fd77f4060086b2e4351b",
".git/objects/01/77e133b23055eb643bd116d1adc7a17ba870b9": "c1930322671cb3ec9762bece602a2d26",
".git/objects/03/cccb42d28af89ac93c8533487cfc6cf1a77c27": "b138978d80fa57cf77734193767c6885",
".git/objects/04/f9e95712661667cbfb884471618fc63543a5be": "4b1332822baf0e897c6ef4286f70dcec",
".git/objects/05/034ce09c208f29ea99124cc87516d39ca9f169": "6b0e28385c4e38760e0ed05e70713722",
".git/objects/07/18c196c2d1c868aad96afff09452273c581cf3": "c533d50919ef8a24d412c64087f15a35",
".git/objects/09/cd409cbd114f3f45e5b20488a84c35196f3c90": "aa300c81ebb6f87908138d336cc70d62",
".git/objects/09/cf78afde83b6d69b26a962594f874ce143931f": "6cef5264d5ec08023d70b6cc0e6ea421",
".git/objects/0a/c71079fe95ed3235c54c7b372abab1cf3019e6": "b3ef994cdc042a7186584a8bd4e0322f",
".git/objects/0d/50bb1a9351005c56d4bfbdf805540a4022362a": "e6aaf9f3da2e2d697c0ce59289072371",
".git/objects/0d/be4fc2d5514ab923b49beb6870212a5f76f4d9": "9fe8f949bf6f208415a3ed7f869257d9",
".git/objects/0d/c3ac9c29cb870a141d10dd6225c06205c17872": "275c5612ea18552fe336dc16c28958fe",
".git/objects/0e/836701ab117c79cb707df5bc514771fa2a7c66": "7345df6708be1ee5e1d7f6d03664fa15",
".git/objects/10/ca86e73f1eb6158939f26b60981d52fdd79761": "c776a2fb4ff714886239a790feacc03f",
".git/objects/11/ee94e37d95cd993df25d8c6fe7e972a170a0a0": "d0399bb71d95bdd50c939ebb48b17bfb",
".git/objects/12/f262a2c391094a159d71ec2c53b8c190d6ae20": "f87c77228d1a461fc30d4f45e7399697",
".git/objects/16/a9d8e228a9d1abf8e934d3f56b20082e28116b": "c55bcaf5b66f9498501c807b88b1d5b1",
".git/objects/1e/a895caf303545de099060cdaac1ce7aa238aed": "8a715fc5fe5989b947ac4f7ff719eb0a",
".git/objects/1e/cd27cefe23589d0748881b0f610ed66fed43ba": "4dfaa7175ec9818e4daf402eca9ab57f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/9604046b343269618c3a857bc5c00238db7171": "203cb97ce9b93de601536870c11ef549",
".git/objects/22/1819bca06ec2b584dd1c24ccd701082d12774f": "2b4dafa16f0126cf2f9badcb914b8567",
".git/objects/23/790221df1c2c10ea6093476d8ee9c3ff2a0d05": "eaacf93f90c7270527e5b68b40464e79",
".git/objects/25/ffa4939dbcb7963a36c6ef8e241881575f904a": "efd9e7f4cb54894fc9f55baeec6befca",
".git/objects/27/aed3649e92e9b2bdd0484fe20f2295668369c7": "040db89a184047914c98ab7c8c32c454",
".git/objects/28/b1ffcd841ac9a963d0dbbcf70476d8b9b9f5e3": "c8ca975b6715e9bde1214069c252355f",
".git/objects/29/d5f7419bd5a91f113861f1ccd615afdbce712f": "e3ac6ec442953675f750009ff701de51",
".git/objects/2a/8d0c65caa781c9eb1ea79c11f0867eaba3614c": "11f358cd730ebb80e4a819024c326756",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/2a/e85ee34355fecea00614e9d8c253f4b989ee37": "63e76bd6b40aa7e8f9c59ca9f073c4db",
".git/objects/2b/f5121211853f3b1d54a3bc7ef759e95f2c1bf0": "16bf1278f44003c789ad0f153a53b237",
".git/objects/2c/3afc86df951baaa5d4f0956876db6893303be9": "6de64c8354de544f9228d05b90138258",
".git/objects/2e/c7551e8d0dbb5a3e049dd8919818250f7fcfd7": "16e83ec93531aaf551eb799f03b267f3",
".git/objects/30/90e12c3d4dc56c368d22cf36dd445b1d9bdfbf": "6d8e43e3d27b218c8a8c951a452ca65e",
".git/objects/30/ff2971b4207b038d488bf6eed5b52150e258c2": "afee27b9bda228a8a47ed4040c8cb209",
".git/objects/33/6c56ec0cf2e118410440df4f81bde7fc464b1d": "8bd0f670368139f7292b9ffef26e0396",
".git/objects/35/21f6387676d6b6800605cb682fca994c5344c6": "a4956398aaadeb9f7e7c6032c1c90af9",
".git/objects/37/3e545f72834fb440bcd8eac69c468da549b880": "15e503f606ad64c38aaa646a9cdb7d0e",
".git/objects/40/4c32b29f1a4705962db275b170af72d27e0fe9": "fb2a6520cbac0e0335c05bb125b8c504",
".git/objects/42/17c5ceb50d6f7551a0f70d637ec5e1f38dbe1b": "31e5dd2ba8c8e3c4b97fe807f5dd3a2b",
".git/objects/43/7b1157cb4c32560095c6d40accde2956070c1c": "9e7e2f17a3467d973000e4231368942e",
".git/objects/45/17e8e70b99ed5d6bf5dad09899b8fecaeaab30": "d4a5bdde41827288571c3481d3d8a18b",
".git/objects/45/dc8a20658bd09ecb8ca1c88f94fe80cc4ca286": "3777040b10a836277a4dcd49b2f159fa",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/47/bcf3d14b6f3250f446a0dfa8e26800ae69fa98": "b69af750763f717adab3556911fb6063",
".git/objects/48/d92e20be0bbc57dd0d74a2f8f1b56b3ec869c0": "6b74674591f7fa68c12b12df6bebb263",
".git/objects/4a/fb9205e5e566a64d0f939f834132d191b41961": "5fd1a75888ee31cb82956fa3adbb5c85",
".git/objects/4c/bf52c81f940b7fd7536ab6ba6671f29b91420f": "b00c27cd3add4e75703e7cb120a9011d",
".git/objects/4d/17e02a0fb34dc33c120e8d025d37736911b0a9": "13a5d5a48e8c5062aecfe6c9200caa46",
".git/objects/4e/0a30f5a5ed494a789cd68a18191b70ca3beaec": "36e53bd6158eec46fdb98327f95d4b62",
".git/objects/4f/8b9ff02192e093596e762fc26ec586802acfbc": "97724c66998f77d3463b8537966905f1",
".git/objects/50/4c6d1167cf85c2f06720203ab5ed7b57862f29": "799b66273b7fdb411b81a9044e3566e7",
".git/objects/50/6d4f6b3141ed5a067aa2a90cf600bf6d1b6b84": "068fb9d1a1841df1e814889d2eb12b58",
".git/objects/52/31fbbfeb0d2484a4a65566b5aa0ca2ce953209": "a0b92ed818a08b44f15f18fef264ecbf",
".git/objects/52/348354c2916fbecf10f9c17e08db7bccd96653": "be2053bfca3824391becd9ce3d15c455",
".git/objects/52/50b693d9cf39d916a0204e5d8e5a7c631b4ba2": "cdcbeffb1f760c13a4c2917c389b2310",
".git/objects/53/78a62dd5196aca9a2167f657ce6e95320c2e9a": "ebed80f5abdc4632d9661284c449fce2",
".git/objects/54/64d0bead1d1341ddcde2c0bbc5e28733bda55f": "6e53f97b80da3ed37369859b5caf1075",
".git/objects/55/e50e2a53596edc708ab3cf740675c2d6cbcedc": "324f60f40c8902e0fbd95b36cf0bbd2c",
".git/objects/57/ba7cf41c75132653b8b8565ae16378d536b772": "2bfc14cf94132ad2077a11dc0347026b",
".git/objects/59/a80ad840403c2acbdf09bc4e3259f8df05200a": "eb6a28f92d67cac81594264e1189a8e3",
".git/objects/5a/c0773802658efaa4764ec3728cb89613fbbc7e": "eb038769fc0acade3769b3ec8b08d85c",
".git/objects/5c/5581034ba31c99b1fc097a82a13ab9e4686ff7": "49684027e23c281a0e897c4abe6d53be",
".git/objects/5d/7426450c1b4c3432a172ce470675a039196b83": "2b68a3c6ca1373484fd5a03de97e3d1b",
".git/objects/5d/ed6fdb316e92355d79cc150c028f6303499759": "c4b910738af1709e31452b527512493a",
".git/objects/5e/2aeacc1e7bb52dd259712c46c9eaa3a3cbc213": "103173126b5ae46335d780d8f17b965f",
".git/objects/5e/8043bffc1d69c372b0f1c365c7b9d780fe76b3": "cf6251c233188890edb017c49b5af001",
".git/objects/60/0b8c7276029245e0c0680c94ced60bc60bdf46": "bf89e6f1dea50265220dd6f7fc02b9d1",
".git/objects/60/7d2331e51266fd15c6ea42bca8c7b61045e3ff": "065b4a374fe4979ca1161a8cd26c5032",
".git/objects/61/83c1f5ec69b219ee9ce7d6d92a69809ae25434": "23a2be1ecc056bcbc3e1ffc691d13656",
".git/objects/62/b286910b2643cd434a3e7be1fc3aa494d85f74": "82679de724029821242d2b2a696e62ec",
".git/objects/64/6440a81051bb45e07137c607553054da5c1207": "bc334af5a4883bcbe9286fe87aa53693",
".git/objects/65/92d4f8e1a01acebe11a7d917475c148a2892e9": "cd130e3e2fbdd9653e0abe918181457f",
".git/objects/65/98a48810cb2c62869107667d03595fc997ba3c": "fe2a264f8bf41ec2ec382f6e3fa3246f",
".git/objects/66/3eda0c18d9e855e00f833c171330303e38b7b2": "13e5c1e0b0c4b1c19f1275643991cf35",
".git/objects/68/66fbc8894484b83079d305d4cabf917601983e": "6dcfe8af71c68d292fe62edabf22c2a3",
".git/objects/69/b304e0530acb5365014113f821503b1a615a44": "3a09f530fdd9e4a75e983e0268ef9835",
".git/objects/6c/961e1cc944ee69e76b98bdc97c549fafdba31b": "fffdd8f90bcd184fa508766d24fd5035",
".git/objects/6e/079f6984098cc53f68a24390936a73a6dcd944": "9860083b26475cb02af305975737a70b",
".git/objects/6e/1f86145ebae7f7719a9bc91a955885312b01bc": "1bd515542172a1b7b0ee38ab750215d9",
".git/objects/6f/9279daefbb746564babab403af1204dfbbf2df": "a67c16500511997bd6210b7bf25d7b08",
".git/objects/71/36d897eb11fd057624ae931062619493ecc548": "778b70b3228b4fbada23e96206071d71",
".git/objects/74/c9ebccf825e759c06885c46db03199d1a30db2": "ccda74df48eb716d7d46ff8805a5c8cf",
".git/objects/76/5d906ba7f4dad0b5bf60a1a8199a0b50131d0c": "0cbace162d15256a2d2ef6e85aeac03f",
".git/objects/77/2ab3dff818a3c41b737c2bdf29900b988d4856": "f4059c28ea37d8f7296845a7b64ab793",
".git/objects/79/1439fa2a217895b57e850c9af4496703942603": "97eb91adb9c839fad0e597460ee0ffb9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/168f51e97a42a8d54790ab3a38efdc87d58f7e": "a61b3482f959964766d64a432179704b",
".git/objects/7c/a99158598f33ae843844d3f6935207340e95a2": "c32137e42b22c5db44d7825f63ada50b",
".git/objects/7d/1f132a1a0c9199ed2cd7bade9c736b0ead0dd5": "beb67b3339a35e78a7dd636efabf6ea6",
".git/objects/7d/a6d50a9c35d25bfc779d5b3263c44b29446a13": "b05ccd13b03eace39b0a725f5a194e85",
".git/objects/7e/221eea3b16c13e9bb28d5ba31142ff74eb3d93": "2ed9ec579999eb7c2d9c880b356a7bb5",
".git/objects/7e/9b412d22aeb6da0a8df25c8927f53a9e327a19": "fa23bd88a4481ee932aba80302af09d6",
".git/objects/7f/d94a28bd876f1c1b5e0f7482e8b477cc208509": "61be0434fed8785c0420c42cba7b4642",
".git/objects/80/d883bf0f68549cc40946ba9776a5c5ce2e3120": "0c5b5fb1344fc7cf7609e818f516cb8e",
".git/objects/80/ea8061b046af5af78623788022a3bdd9f79994": "76b11b4e5efcdd1ebbbcdcd298ff6011",
".git/objects/84/65c00bf1fa5859499337379df85d785bd2b26d": "fab348cf23435359fb1107b1bbc2a94d",
".git/objects/85/f49c8b26d2707d3c23a7e40c53560f22635682": "4c431fc7e3edf747991e5a1c5f222be7",
".git/objects/86/03e3e33d0e9e11c4d4a6d53cad5dd897938ed3": "1d2f48cd418605888a3d50ae919d0412",
".git/objects/87/d8d17a7f76d990616d90176b2371ad87ebb072": "071fb04ce00d4933d215af09f936ce41",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/2b876d5eb37c73889be8f244ae9521f76601a6": "283178563c701c30b25416e982168827",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/8814805f760b2a8ecb9d8e18fe73f343733ed7": "6cab6b1bcdf5c4e1f531989f36eb4d44",
".git/objects/8c/f6ae9ba36b7c74b035ba53d002df06ebce293a": "adcd5115f593dfad7a5dedc21b73a867",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8d/6d44d8f1ae77429a0bada912b8d780d7bfbb90": "b7d7e9af5b5fc0f22cebe60b755309eb",
".git/objects/8f/008c36844f28454149ce1a22effe513dc726e6": "0fa45b087e693064e5a2ce35615095ae",
".git/objects/8f/5dea80aea50a6df3b1af8d8366d0586e81b20e": "dfbda993e5f2e1bd3e0c36b4a998049d",
".git/objects/8f/e7d01c408cc19c86752922f4e73795b4f21d22": "4107c6d1b861900bfbe523174ea2864c",
".git/objects/91/4349fc40cb16b8c6d22834f1178b3474a0ef9c": "965aaeab29552c502ca58a89ef82cb4f",
".git/objects/92/3cab6c140883f23138185fe182854e671bef66": "89f2705cf40df223c976b65d86ff5e2e",
".git/objects/93/096e81ca5f8f88d259fad489c468de5a986435": "587985395aed82831898af7846a85d4b",
".git/objects/97/73dfb7dc376c4d3e44e1e53316e70cfda5304b": "d05ce6fa7f9220724d4083e8bb1c1490",
".git/objects/97/b157c8f37b2a2865c14f4fc70f8e613f2b04c4": "e64057fa0a6d44cb9c1f74f847ac56c4",
".git/objects/99/0857de8e03f4db6c2e1112045dfa37ed2d675d": "c6c0a2e381bb5650bc0bc39a55a42b2d",
".git/objects/9a/a746a6540912cae26776a05251b969e53d0223": "4c17b7474489b102835125bad1e34ef1",
".git/objects/9a/e2bd240fee41917519b3d57a2818606e3d9de2": "06c4f51cbb3b3e5f710106bc89885c43",
".git/objects/9b/70f5edcf0e77199a1330f7dca1e1b797292c18": "86acdc22313820c0701b011a9d80cea2",
".git/objects/9c/d089f65d00d0277653ecffd64415591df4da48": "411ba0bcd1566cb77e5f901183b85a8e",
".git/objects/9f/771da1f56c752fae0027e6515fdc83fe705150": "eebaf8e4fef0e6e91aff50bf4e6ed2f6",
".git/objects/a0/23ea537e0d27c5adebf94a451580e3485d916d": "dc1afbb87e8ab5ee1034b699d851fa6d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/1f03718a95801941855659eb7617d4c8b64511": "aed4a8f168a0edd7ad34d989a34c7fd0",
".git/objects/a7/e3a5d7bd8768bb6739885fe3a0e78b44d9b7cd": "64cb012f86caee822c37864e0180f91b",
".git/objects/a7/f910a0e73e667dab7c59dc3c2f35dd5187028e": "44c3eedfeef696b8265378e5c6ff04ab",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/9c1040a70f5e6779d08e197d72aa4f93ca3568": "7a22dc38e6c1b581bc3d4a971ff6f357",
".git/objects/a9/520b78ac4635319aafe2cc88f1b40c8289b1c8": "f268f08f109671711197a41d2104993e",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/c3dcd7cbdc98eddaff1fe6f1f6f2dd6f687ec9": "002d8648c2f7b299fc641815e3fb2bc7",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b1/ee009f979c3d7b45f44a857b9df50a70c4560f": "4511e3f931d8e82d844eebf45a21f3a8",
".git/objects/b2/a9bf557a4f15b6b3878624104d4b282bd195ad": "dd25ae5c56b0984fdd181c0433440fc6",
".git/objects/b3/c3eda64363133197327c58924e63f60bea3c4b": "4712e0b387e7532691486e289e95dd52",
".git/objects/b3/f384d10d87d9e63ef0ce221d4b04f26dbf011c": "ef40b4035c09afd8e79da1c9598f1414",
".git/objects/b6/bd3187abd8ab9c2bf36edec80f2bb7febb740e": "7d18a61bdf01353afdc76356edf0f355",
".git/objects/b7/1107c57c4e66caffcbc2ab50a2739ba7022de7": "a65830e92a8555b44eb6e9c695219932",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/589547ccbb868644682f584ed5bf66fcdbfca8": "160765ad490b24442b9e24b8faf7dd3b",
".git/objects/b7/b00e53c77d54304b89338df11926afa233caab": "f07a0abe9184cf7c206c971abfd51463",
".git/objects/b8/2e8ee6debef048b4e193c4945e5a8e61c3f4d4": "1000ab93830928de926e62e0f2b3a71f",
".git/objects/b9/1008931638da058823109b2a5b45fbc96556b7": "5fea84123251ad5eecf5f151fc0b5d63",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/b9/858757eb98286718cc526d245ee2ed50e3b68b": "3b20615aa9092e71e91ac6624e0a8649",
".git/objects/bc/8927003e1c61f494213cda215c4236aae102de": "083894b366e1cdfc13c2c2ae94b4e920",
".git/objects/bd/da5a7a9ddcb39143bd7fe40b4f188a029ba032": "e479fc3e90e9aa69f23d98cbcd76bb22",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/be/22c52ea62af1990637b7b5f8c72f1e4a95e31f": "087e86be8e2896a136ff4aef56285a52",
".git/objects/be/ee29a7c42c0fc34016651502d00f338ecf01aa": "263ea9657470422d30aab4fc06f2515c",
".git/objects/c0/07cea0b467dc584b6b2f00f96e76e1aba1fb6b": "f036ee2f9d4b9fd116cc21c5c33b3ddc",
".git/objects/c0/aaa87fd40d50cf652456644d5a8f2af4f40d29": "0530fb8ad11ccf4796f6f9ba323c0f69",
".git/objects/c5/6f6837c21c31b7da9d4239c3260446abc38f4a": "88185e762b5953d3d2a205577a037f4f",
".git/objects/c8/cdb93457f8052cd9e74a2e01d191d4bef5c5aa": "5d00a3ca769382cd41fa7371dddbcc84",
".git/objects/ca/0bbb6569d51021125875d40e951ca09e5be5ca": "a6c6b5af18511e82330ce3649aa04f57",
".git/objects/cc/c33748cb1730dc8135ce0a4bb971ea08492743": "8821ab758cc39ae1f16c347a4a792c05",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d4/d90f9d83d76950c3a250613b5aad3e07f0778a": "ddf1a105338d5a1812195b56536d12a7",
".git/objects/d5/3aaa426d1e38e29bfc0bbc917a88d2ac29a63b": "c61aa9d5334997f3520f3ed4325e4904",
".git/objects/d5/3abc09da1ed251e31d27ea45ea68899f1fd5c5": "f5fbd62ba856ac9f45e01efcfac83330",
".git/objects/d5/e29d368f57e84eb1426461921cbb3e0dcf7000": "efb241962fdc4faadf5d0d3161480570",
".git/objects/d8/a251c7c46441b9ac1e2c6d176a217c16595460": "87bbd68e89ce9dcc855f173e0802d66b",
".git/objects/d8/d26ba14b43dedd18bf9243252ff8c9b7215b67": "df62fa7d2021906ce17c04c02eacaecb",
".git/objects/d9/d3409e6dabf395e621fc62a5a718d293bff351": "cfca7d62146de68753a8fe4757156302",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/db/3ad30f5afd7f587f8e074a3f97f961bbf5919b": "9125c01e11d80fc2e7c8b341d34b39ac",
".git/objects/db/db530ef76fb4153bc8c373854cbac8649e7371": "466c6a21ab836a190e434e2f396a8f17",
".git/objects/dc/88ed0d4f1bb729a1651eaec2038cc7cb2d472c": "225efb45ad609c21bf67e94277d93cac",
".git/objects/dd/7324e6526deb6926ec77655c87a34b08a99fb5": "893568b13b47b8cf2ed5f12fc693b314",
".git/objects/dd/82e6ccaeaf8d6bf4adc3112e5bfde040e671fb": "213872bd6005497abee3c4e8e605d982",
".git/objects/de/d3caf9a99b7952eb48051740f4373d96d00272": "c96f122d019b9e62e20e510d7e377810",
".git/objects/e2/e64456c7f8e6b714d699a912bda3fc21583f44": "abcb9efd018b8bc75a096cf323207f04",
".git/objects/e3/868f25250e658e3787869e6aff70154281b6ff": "828dca6de4f04c729746e526d538ee1c",
".git/objects/e3/92492abdb3640da80637c8e69d7049e9ed3c41": "457c98db190edf70f51f43c67464a919",
".git/objects/e4/88998ec79ac8e5bde78cf3ba1f4991d5e25511": "41e1351ae09919a6a33730498d824ce5",
".git/objects/e4/dfde8e98a4f5fbdd2f00b94b4c307286a72101": "a648129422b5e41ba727bf9b910b1fa6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/5555df38a9cf6fce2be1640fb35dec2afe35a9": "0efeea0ef3f7487fdf352401b3d419e9",
".git/objects/e7/40bf80be5711779480305f3ded98f6cfb7be00": "969966d6b63a2b12464b0205e1f971bc",
".git/objects/e7/e6de582af0853e01baecaee9434ce6cca3b19c": "24bcbde4c50fccb52090ff6e20511c58",
".git/objects/e8/663a6deffe6beb4919ca4af1236cdf720ceeeb": "24bf9d96c0962750e0a4602e3c775fba",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/e9/cf90fb87a0abb7a729dbcfb22425323bbab43d": "3ce1c17414b73533a5eacae8033dbdd5",
".git/objects/ea/3642f1b41eca31b1f401a014580cfd5d78e50f": "3abe11f477d290bfd8fbd7fe5225927e",
".git/objects/ea/cae8c0c90a24ad811437e2f54ef48292ffc223": "2f008d0b08c2a17b0cfc1c283a4edf43",
".git/objects/eb/4232a0c2cd4970128e5271fec45b6868fa2eae": "82bdd55a92e7f57744f34ab6ab555ae9",
".git/objects/eb/fdd707e55e1d050595f4c58c45ae4ab44d000d": "f75fb9db9bc528e1ca887c240e413a32",
".git/objects/ee/6238251f406e932d4d3479d7f1627d1b70bf69": "196937910c1004cc3277e8897c92a3e2",
".git/objects/f0/de745afb97520ef057e42f1c63bf1a7b9efe27": "4d1387f8aba13843190d09f76a9564d4",
".git/objects/f2/02ad0e373cd41411d15634d8377a1ecc65c103": "d9320ead45e4b451bb238f8adbe14f5b",
".git/objects/f2/ef6e92176df858fd6abd66a552a5e2a1a9b73e": "616ebd01e15d98e20ab8a853e2a7703b",
".git/objects/f3/c1559ec7f7353d50be555554bd1715170d1115": "e756f75d544838f0db4e7785a0a24cd7",
".git/objects/f4/7fd3f4f4c1642c3244542c8f6cd135a49fb769": "63c6fd729be0d9b2883a0254f1933d88",
".git/objects/f5/c0fdd5313d1b65ab554124ba302fca992134ca": "cd7f02aa634edd5f4821629d12367180",
".git/objects/f7/154c747f70d3cc015e7d3e50a4abbba207654b": "d83496eb6a6a0118ac2dc479a7298090",
".git/objects/f7/5d8191d0c0426dbaabe9f1694c7447b3607ae1": "49f61189b110e07d66a66ebc9babf248",
".git/objects/f7/e684484514e9452ba618067c7acc1b5137627c": "08cb8016013b3b1b922762199e3040da",
".git/objects/f8/a43f2b203054676b64e38e2b78af5468c39b6d": "c74b50a853cc4b1a5f5dc1f07b4a619a",
".git/objects/f8/e09aa3143a61484bb43ed8f8b5c30c537f02a3": "d5b96f902deeca28d6e3480b3881a34e",
".git/objects/fb/06ceedb2bcd6f4528f8cc6a6283540ec8d4dcd": "06be0bf770df99e0f4bd1a7e887e4ee6",
".git/objects/pack/pack-118ee79459d6bbc98c20eaba975f4fa95ae53a3a.idx": "6b38fcdf94fef5f3abb5b7b3867305c4",
".git/objects/pack/pack-118ee79459d6bbc98c20eaba975f4fa95ae53a3a.pack": "886a9f01331229a6b467f46a8286bd3e",
".git/ORIG_HEAD": "dfee7b54f430033ea9ad2e28a17eed43",
".git/refs/heads/dev": "dfee7b54f430033ea9ad2e28a17eed43",
".git/refs/heads/master": "7a1fc8a059a38db685a048b1d649ee8b",
".git/refs/heads/new": "946e1f790810df4adbf2b12e8645ce10",
".git/refs/remotes/origin/master": "7a1fc8a059a38db685a048b1d649ee8b",
".git/refs/remotes/origin/new": "fed814309c819a7f64a0cfd381a058df",
"android-chrome-192x192.png": "94c581608de7e83d1944f99872581954",
"android-chrome-512x512.png": "d9f5a25480e4fbe5a3a0120aed0a6a2d",
"apple-touch-icon.png": "6422e9b0e7d4e2e7a60985da586c7f89",
"assets/AssetManifest.json": "64f813120a1a4257de12f569ee57cdfa",
"assets/ball_mobile.mp4": "c1c1f9363990766b50f2cea124589de0",
"assets/ball_vid.mp4": "050b71f099f126ff69e182fb899b4247",
"assets/FontManifest.json": "b0cf87950ed96a1bbbd1f83fa411f8ec",
"assets/fonts/Cervanttis.ttf": "8a36acddd14b502511b291a0b29cbde9",
"assets/fonts/DMSans/DMSans-Regular.ttf": "3e7f038b85daa739336e4a3476c687f2",
"assets/fonts/galderglynn_titling_rg.ttf": "d39e13f733ae4a6bb6a4803241421a94",
"assets/fonts/helveticaneue/Helvetica%20Neu%20Bold.ttf": "7f281199258d96e249a7fce4101006b9",
"assets/fonts/helveticaneue/HelveticaNeue.ttf": "ccad04d46768981ff847f22e8a53b5b3",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Montserrat/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/fonts/Montserrat/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/Poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/Poppins/Poppins-Thin.ttf": "25cd0f688f815bc4f6ac2b71eb6278ba",
"assets/images/ball_sc1.png": "895d20a5c77bbc54143874c2311246e2",
"assets/images/ball_sc2.png": "13efcb36ce4e931c80ee6776731c944a",
"assets/images/ball_sc3.png": "6c027589c4f93fc512234d33bc2a4971",
"assets/images/circles_bg.png": "8259ea9b9975384be14f2aecb6696ea0",
"assets/images/discord.png": "9e330346c9509348c0c866323d389663",
"assets/images/img1.png": "570f31cdcc725205344bc6e933876859",
"assets/images/img2.png": "e420542d70173406fb41324f312fa962",
"assets/images/img3.png": "8a9b3641b183cb3082167cbddcb97f9f",
"assets/images/img4.png": "74c0462ad7f3601259a182471d5a5e6d",
"assets/images/img5.png": "48f3615497cc08043f64560fe5748339",
"assets/images/img6.png": "c8415f1f356a2b33af20b907c0094a98",
"assets/images/pixedio.png": "f7a5eda0c2fee3615f9252468375c1ce",
"assets/images/Scroll.png": "1798f9d404725799b1eaede9109f1dda",
"assets/images/whatsapp.png": "e03fb54f6bdb60c8737ef4d6528b7dbb",
"assets/NOTICES": "ad7726f9e1def65053395b6e203b4cc7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/web/assets/ball_mobile.mp4": "c1c1f9363990766b50f2cea124589de0",
"assets/web/assets/ball_vid.mp4": "050b71f099f126ff69e182fb899b4247",
"assets/web/assets/fonts/Cervanttis.ttf": "8a36acddd14b502511b291a0b29cbde9",
"assets/web/assets/fonts/DMSans/DMSans-Regular.ttf": "3e7f038b85daa739336e4a3476c687f2",
"assets/web/assets/fonts/galderglynn_titling_rg.ttf": "d39e13f733ae4a6bb6a4803241421a94",
"assets/web/assets/fonts/helveticaneue/Helvetica%2520Neu%2520Bold.ttf": "7f281199258d96e249a7fce4101006b9",
"assets/web/assets/fonts/helveticaneue/HelveticaNeue.ttf": "ccad04d46768981ff847f22e8a53b5b3",
"assets/web/assets/fonts/Montserrat/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/web/assets/fonts/Montserrat/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/web/assets/fonts/Poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/web/assets/fonts/Poppins/Poppins-Thin.ttf": "25cd0f688f815bc4f6ac2b71eb6278ba",
"assets/web/assets/images/ball_sc1.png": "895d20a5c77bbc54143874c2311246e2",
"assets/web/assets/images/ball_sc2.png": "13efcb36ce4e931c80ee6776731c944a",
"assets/web/assets/images/ball_sc3.png": "6c027589c4f93fc512234d33bc2a4971",
"assets/web/assets/images/circles_bg.png": "8259ea9b9975384be14f2aecb6696ea0",
"assets/web/assets/images/discord.png": "9e330346c9509348c0c866323d389663",
"assets/web/assets/images/img1.png": "570f31cdcc725205344bc6e933876859",
"assets/web/assets/images/img2.png": "e420542d70173406fb41324f312fa962",
"assets/web/assets/images/img3.png": "8a9b3641b183cb3082167cbddcb97f9f",
"assets/web/assets/images/img4.png": "74c0462ad7f3601259a182471d5a5e6d",
"assets/web/assets/images/img5.png": "48f3615497cc08043f64560fe5748339",
"assets/web/assets/images/img6.png": "c8415f1f356a2b33af20b907c0094a98",
"assets/web/assets/images/pixedio.png": "f7a5eda0c2fee3615f9252468375c1ce",
"assets/web/assets/images/Scroll.png": "1798f9d404725799b1eaede9109f1dda",
"assets/web/assets/images/whatsapp.png": "e03fb54f6bdb60c8737ef4d6528b7dbb",
"favicon-16x16.png": "1c931e3e6d1981d0406aed5251fe47e1",
"favicon-32x32.png": "8627931443e88e81adc39c080e4cbd3c",
"favicon.ico": "042b7bb839fa20968eef8ede6aaeb885",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "85a5850df43959eb3e6b7bb783768248",
"/": "85a5850df43959eb3e6b7bb783768248",
"main.dart.js": "988527b25022aa53f03f0a49947b7c63",
"manifest.json": "88e3deda77464db730cad25e9da9c4b9",
"site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"version.json": "e30ad8e9f17d1c3c703c161be132c996"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
