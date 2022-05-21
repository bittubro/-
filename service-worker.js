/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/sanarchives/2020/06/index.html","3914f95808b32f2a6775db68f5401935"],["/sanarchives/2020/06/page/2/index.html","cdad90550928c5c1a72f053af8fede7b"],["/sanarchives/2020/06/page/3/index.html","345f4710a2fe371be407ece50e034b36"],["/sanarchives/2020/06/page/4/index.html","99002c1df5ee4de733a55fd2eb4396d1"],["/sanarchives/2020/06/page/5/index.html","42d5579327cbab339002b2b9e009753d"],["/sanarchives/2020/06/page/6/index.html","ce9b30a00babf20ac08eee6f1be8a8e4"],["/sanarchives/2020/07/index.html","9450492171ac09f9680f878e6505d0ce"],["/sanarchives/2020/10/index.html","5eaaff77638825fb7c2464d9e021d4f8"],["/sanarchives/2020/index.html","f7024f7f7e9ac757c7da2678efe275c7"],["/sanarchives/2020/page/2/index.html","dfb3256a2c5a655baa318e2a1388d251"],["/sanarchives/2020/page/3/index.html","83b4396542fff2e83e8baf5abf57ae6f"],["/sanarchives/2020/page/4/index.html","33ab24bc147eb78b1ade8564799835fc"],["/sanarchives/2020/page/5/index.html","9197afe8efe3c82e27fcf16b868fd704"],["/sanarchives/2020/page/6/index.html","61f569f3de4d4dcfc8320cbec6667cfe"],["/sanarchives/2021/10/index.html","93d8fb57d1ee90acdb0f170ca3c4ef46"],["/sanarchives/2021/10/page/2/index.html","4111fd37937cac7a8f2df8d1d591690d"],["/sanarchives/2021/index.html","ae0dc51b437cb793dbdaf149f5564452"],["/sanarchives/2021/page/2/index.html","e6fcd1f5bcaef7777e4ebe846f7d3bc2"],["/sanarchives/index.html","ab26993a2542ded9eb2a9b98f507f0d1"],["/sanarchives/page/2/index.html","7da1cba61218ea81511a17628e6b2071"],["/sanarchives/page/3/index.html","cec28f86c72e9643f9471d36f9c1f3d4"],["/sanarchives/page/4/index.html","b57a78b9250713e3416d03ab9676ec83"],["/sanarchives/page/5/index.html","169b5ea42ba97ad31da0077f1c8ae65b"],["/sanarchives/page/6/index.html","f8ce6eab7820dee3215982f050ae187d"],["/sanarchives/page/7/index.html","0f94fc436f6825c38de1173a6ee1c036"],["/sanarchives/page/8/index.html","ab0db8c02b3aa29b7dfd40fe1296e5f1"],["/sancategories/doc/index.html","be9bd4b757cc38a53d8bcd93bab8619d"],["/sancategories/practice/index.html","4e00023b4bdeaa1ee126cf1031337250"],["/sancategories/practice/page/2/index.html","d7d704bbd6ebdd584fe861faccbef38e"],["/sancategories/practice/page/3/index.html","58fa3a7f40c1aa55df269030a681a653"],["/sancategories/practice/page/4/index.html","daddab4a14b4e898298ee475f8ddb257"],["/sancategories/tutorial/index.html","294660769c82c2639e3c8934ca9cbe21"],["/sancategories/tutorial/page/2/index.html","3e68308f742c15d5b506a7e6eab823a1"],["/sancategories/tutorial/page/3/index.html","cada0081a6739b076737cd2312a89e8b"],["/sancategories/tutorial/page/4/index.html","9fd955af1ee9c7cc95dd6e67fa8f41e4"],["/sancss/article.css","1466f88ac23ec652897ede3fb6d7aeb6"],["/sancss/bootstrap.min.css","920f984bd041d7ab8cceade3e5805efc"],["/sancss/code.css","dbd2986caea443e5aaae6275e1b7ed14"],["/sancss/codemirror.css","288352df06a67ee35003b0981da414ac"],["/sancss/font-awesome.min.css","bb53ad7bffecc0014d64553e96501dce"],["/sancss/site.css","a69acb7758fb6586f505f007d960da3b"],["/sancss/style.css","d7c9feb685b822297cba8540448e2e04"],["/sandoc/api/index.html","c7b2194f014e4bf5d65c66b1c57e2a13"],["/sandoc/main-members/index.html","c703d7ae41c04fcc10f72949fbceafe1"],["/sanen/doc/api/index.html","96f744990cac0afdf764e432639fe66b"],["/sanen/doc/main-members/index.html","a2669a8d27065a0b6e0692e48e13ebd8"],["/sanen/example/index.html","2ec3bce705a4f4b0f2b0a6e73c5eddca"],["/sanen/index.html","e8371e79f87a0dc4cd7c9f133d616d5e"],["/sanen/practice/array-deep-updates-trigger-view/index.html","00eaca3c293fdc3178e1934a396a71b7"],["/sanen/practice/auto-camel/index.html","53bad1750f387591520d8f29d0bbd2af"],["/sanen/practice/can-we-use-dom/index.html","870ea48c135a65685da1cb68e3283d89"],["/sanen/practice/child-to-grandparent/index.html","0ffca6fca1c7991028f95d87f8b5768a"],["/sanen/practice/child-to-parent/index.html","d70f4b0d3c1d7c4ae1ab8ba35b5a6471"],["/sanen/practice/data-invalid/index.html","534953b5ea6c22e830e171ad90eadac8"],["/sanen/practice/data-valid/index.html","a623643f9609d83e72bd579bc5c1c237"],["/sanen/practice/dynamic-parent-child/index.html","aedd0046f1acc2f5d402b7e2f424fe40"],["/sanen/practice/how-to-show-or-hide-an-element/index.html","7be6decceaf8309a6861a2942c4002af"],["/sanen/practice/index.html","96ba7e7aed4751d5f5787299a1af243b"],["/sanen/practice/parent-to-child/index.html","1bda2ea3eebcbc70207c0076b534c1b2"],["/sanen/practice/position-absolute-dom/index.html","d3a7cfac5dc568dfb27fd57ee9359a55"],["/sanen/practice/question-and-answer/index.html","c59d1b6c04bdb63cd8e51e65325efd2f"],["/sanen/practice/san-composition-api/index.html","b48c9e5a94c2b706c36ade78b75325f7"],["/sanen/practice/san-router-spa/index.html","3ea9fb5fbdd5d3a3b14e3378ec4e5f75"],["/sanen/practice/san-store-spa/index.html","2ea465226bab782b0e66610357621ca3"],["/sanen/practice/traverse-object/index.html","0012e4aebc4ad715c206e868116059ec"],["/sanen/tutorial/background/index.html","cdf4f73e3857dd2f469cc5d755b0f0d7"],["/sanen/tutorial/component/index.html","9c8f05893eb55080d29969250cd5db36"],["/sanen/tutorial/data-checking/index.html","8ce42d7860d4e9a45f25068aac5c969f"],["/sanen/tutorial/data-method/index.html","06e08d9191801830235450072bd1e1ac"],["/sanen/tutorial/event/index.html","66fc0aa84489528a7c45ee7ec4f31b93"],["/sanen/tutorial/for/index.html","50066d1fe09fc1f74e062cdef554ad97"],["/sanen/tutorial/form/index.html","aa775d62127201d8282e7a61cde29df2"],["/sanen/tutorial/if/index.html","d576dc32cbb0294cc35bda1ae7ba0695"],["/sanen/tutorial/reverse-flag/index.html","91a36bb0d18b6db30efea06b6ae986c7"],["/sanen/tutorial/reverse/index.html","22104c1910a19e380a95abbd59649425"],["/sanen/tutorial/setup/index.html","416bd411d16ddb18041f91565dfe83b3"],["/sanen/tutorial/slot/index.html","5cc90ea6f3dfd92f5d8b5cfb7381061c"],["/sanen/tutorial/ssr-before-3.8/index.html","3b4cd32932b5e0a56f777db5a8f6c608"],["/sanen/tutorial/ssr/index.html","be51ecc1943d868ae891d02851a12bc3"],["/sanen/tutorial/start/index.html","2f6f0924ecb9cbd10590cba30e2f8b5e"],["/sanen/tutorial/style/index.html","eb0052ac771f80495fd569691ff95ccf"],["/sanen/tutorial/template/index.html","bff4ccbe39f520da293c8d5d589f5f20"],["/sanen/tutorial/transition/index.html","95169297cc7470f16f169d9dfaa988c4"],["/sanexample/index.html","8b5205a6985b269cc74dcc79a557228c"],["/sanfonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["/sanfonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["/sanfonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["/sanfonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["/sanimg/1.svg","d77034c37b417ef76096294de4c111bb"],["/sanimg/2.svg","fbf700664340cb41d83923a47b6e5160"],["/sanimg/3.svg","8989fb841451b7664ee31e1eda9b352b"],["/sanimg/4.svg","c7877b3cdf76c4e42dc841b1475145cc"],["/sanimg/5.svg","15c4e12ae689624dd1fb60b41a6d1ab1"],["/sanimg/6.svg","6fa71561eebdb75f7130e6d27c0d4402"],["/sanimg/7.svg","2f9f621f0455799eee836216db3cd585"],["/sanimg/8.svg","4730d9e16181617f8a75217e0a2ac23e"],["/sanimg/9.svg","28caa5650d8cbc6013f0ce9f8e6c6458"],["/sanimg/Search.svg","085ea4ef80349f1f33dc700b59932d20"],["/sanimg/Shape.svg","63ce11af494c6a2b84a5408a67814ba6"],["/sanimg/b_api.svg","e46ba603c241202ed66faef1bcb089b4"],["/sanimg/b_compass.svg","c8e132fa14a6c3328be175332c9a645b"],["/sanimg/b_design.svg","9c210ba39ad228a5c8cffa3db043b04b"],["/sanimg/b_mater.svg","9f8ad7d278d795f199bdf96c71243095"],["/sanimg/b_router.svg","8558806bc930f0ccc5d30050fe05fe07"],["/sanimg/b_store.svg","6ee10d6029b0e2a0fc6344e493efc248"],["/sanimg/b_trail.svg","6c3f8673381087390064c8d5394816ba"],["/sanimg/b_update.svg","3f30b8e8a5d022e2bb2dbeb0f72a0dee"],["/sanimg/banner-md.png","1bcfe22f30df09874804ebbad7eb0330"],["/sanimg/banner-santd.png","e237ae4ffeadae5f9aac8842f5383bef"],["/sanimg/discussion.svg","72f77ec5ba8e59c9c2b00f0e16e7c6a3"],["/sanimg/github.svg","ab014a9cc0591bda97b2225753dc6c16"],["/sanimg/github2.svg","8f9a62a9b2f440411f490122cfc00090"],["/sanimg/icons/icon-128x128.png","360e8b077017ca3f8faffb1d2dc964c5"],["/sanimg/icons/icon-144x144.png","2cac5e49e8deb470ef8d695fed8a0784"],["/sanimg/icons/icon-152x152.png","ff8a6e62206508f799e4e33dfc23a6d1"],["/sanimg/icons/icon-192x192.png","b82502d56ce18f3c4a5cbb34aab37312"],["/sanimg/icons/icon-384x384.png","52fa46d5e222a4ec290f9ba93377f606"],["/sanimg/icons/icon-512x512.png","89dc6cdd8d62328a43c8f7be5bde8841"],["/sanimg/icons/icon-72x72.png","8f98a06550f027282907ac005cafb3f0"],["/sanimg/icons/icon-96x96.png","49b0e139682345a8f578f0546a56bfba"],["/sanimg/life-cycle.png","9af0f2266923f3bdf107f717115b1ce7"],["/sanimg/logo-colorful.svg","25149c80cd625edfedcc6115dda17775"],["/sanimg/logo.svg","1bdf6b3d2b668fe5062e473e2b1860ff"],["/sanimg/logo2.png","50f59e2d6f907dbdf5720270ac745812"],["/sanimg/lowpoly.jpg","cfee0ad50ba60a1525c5b2dc3c020ac7"],["/sanimg/macbook.png","8d96db30d032572134832662ca85fc0b"],["/sanimg/pen.svg","86c390dc94bb381ac836b3635f25f47a"],["/sanimg/san-perf.png","a80f3a58d1c6a7c44b33ed90d56ff89c"],["/sanimg/search02.svg","7d27bda890fcbd9decd5d246a01c3a42"],["/sanindex.html","21ce62fbbf2fc894478f4eff9853a1dd"],["/sanjs/anime.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/sanjs/bodymovin.min.js","40163e612f8d80acaac737f25b3641a2"],["/sanjs/codemirror.js","11af3980de7da80eacd742ecd9c37cf7"],["/sanjs/jquery-1.10.2.js","e3f24f23b859cf718282e3806ed5ce38"],["/sanjs/layout_control.js","84758cffe8e45f3a6723064605f2e5c3"],["/sanjs/script.js","eeaf47f0de9c0e891705805a70138616"],["/sanjs/stickUp.min.js","2a407130f9ed2b66cdd21407c203c149"],["/sanpage/2/index.html","260f3c95382bf3fb9d24639415024257"],["/sanpage/3/index.html","5f14b674c63bf6b16f3b52a453a1d6bf"],["/sanpage/4/index.html","365b3baf0c516ed75916520e99e4f591"],["/sanpage/5/index.html","72aed83edf86ec82ef21a681908a803a"],["/sanpage/6/index.html","d80aced3310213653ee04f8dc91feed2"],["/sanpage/7/index.html","11d4383b75507eff6e4fd45d42fd123e"],["/sanpage/8/index.html","59f53300fe556fd0bab555fa695619e3"],["/sanpractice/array-deep-updates-trigger-view/index.html","b1c0d0f0761c73a5cd2eea48b4de47be"],["/sanpractice/auto-camel/index.html","5d514e950a9bcd24c2d36ed26d28c220"],["/sanpractice/can-we-use-dom/index.html","adce171020915e12114a12b0063570b1"],["/sanpractice/child-to-grandparent/index.html","d890c449002d4a0a40365282e5caf760"],["/sanpractice/child-to-parent/index.html","b4f83535f7ea26a703fd3b86a1997a2e"],["/sanpractice/data-invalid/index.html","ae9688b8e7e54142411aadb354bd2534"],["/sanpractice/data-valid/index.html","97c93822d48b540687a8940edb0008a2"],["/sanpractice/dynamic-parent-child/index.html","183aa9a51098fc9df03605bc5a076665"],["/sanpractice/how-to-show-or-hide-an-element/index.html","62e4869bb2c1117fd44d8f3442477dbc"],["/sanpractice/ie-compatibility/index.html","d675ebe7948a3b43544339790bbf9d96"],["/sanpractice/index.html","372a9922fd429fe7001d76877ff07b9b"],["/sanpractice/parent-to-child/index.html","afcc8a849c63b2a5522647ba81542637"],["/sanpractice/position-absolute-dom/index.html","41abe1d69d959d9a0cf0c0b4298acd62"],["/sanpractice/question-and-answer/index.html","f715e5b64de548bc362e12270609a761"],["/sanpractice/san-composition-api/index.html","ca235c5626095f6b1269caf17e07a872"],["/sanpractice/san-router-spa/index.html","620011bde9f54df48db0f84207fe844b"],["/sanpractice/san-store-spa/index.html","40afb7d49846db911c4b64684b92092b"],["/sanpractice/traverse-object/index.html","8f7318972e40551348490c7c2fab3937"],["/santutorial/background/index.html","b1b8b8dde2164a768449193c9caa5c5d"],["/santutorial/component/index.html","685f8a39e2738126fbf729c61c78d927"],["/santutorial/data-checking/index.html","ab8244209905abbb88d62808a2829bf4"],["/santutorial/data-method/index.html","1ff4cbe78447a0531aecf8e79c1e14eb"],["/santutorial/event/index.html","2e0506bae92212ac5ae867a80d01ed25"],["/santutorial/for/index.html","a0ea26424dad1ce622cfcc8bd971572b"],["/santutorial/form/index.html","b57d6b266334ad1d1bd65dd0f77ab357"],["/santutorial/if/index.html","b1536d5ade55318a64c8c23199dd5d4a"],["/santutorial/reverse-flag/index.html","e7fecca2a4495b2db91c2078f32260cb"],["/santutorial/reverse/index.html","470a4a2b022d0a9a496d71bb956d1c41"],["/santutorial/setup/index.html","bd9d02bac63cf651361b842a2fa95315"],["/santutorial/slot/index.html","bd24c59d581561533a4010f4a048452a"],["/santutorial/ssr-before-3.8/index.html","9fb858315bb825cb94492c99d4468ae4"],["/santutorial/ssr/index.html","ebd38a9bf34a48cb03f30b34be5c0df3"],["/santutorial/start/index.html","c98f76453b6256133002a133cd5295af"],["/santutorial/style/index.html","db9360a00babe490e0864e66da7165af"],["/santutorial/template/index.html","bb2e4565bd45059c59533f247bca40cf"],["/santutorial/transition/index.html","ce596719c7bc4215f2f86c407c380477"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







