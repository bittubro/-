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

var precacheConfig = [["/sanarchives/2020/06/index.html","3914f95808b32f2a6775db68f5401935"],["/sanarchives/2020/06/page/2/index.html","cdad90550928c5c1a72f053af8fede7b"],["/sanarchives/2020/06/page/3/index.html","345f4710a2fe371be407ece50e034b36"],["/sanarchives/2020/06/page/4/index.html","99002c1df5ee4de733a55fd2eb4396d1"],["/sanarchives/2020/06/page/5/index.html","42d5579327cbab339002b2b9e009753d"],["/sanarchives/2020/06/page/6/index.html","ce9b30a00babf20ac08eee6f1be8a8e4"],["/sanarchives/2020/07/index.html","9450492171ac09f9680f878e6505d0ce"],["/sanarchives/2020/10/index.html","5eaaff77638825fb7c2464d9e021d4f8"],["/sanarchives/2020/index.html","f7024f7f7e9ac757c7da2678efe275c7"],["/sanarchives/2020/page/2/index.html","dfb3256a2c5a655baa318e2a1388d251"],["/sanarchives/2020/page/3/index.html","83b4396542fff2e83e8baf5abf57ae6f"],["/sanarchives/2020/page/4/index.html","33ab24bc147eb78b1ade8564799835fc"],["/sanarchives/2020/page/5/index.html","9197afe8efe3c82e27fcf16b868fd704"],["/sanarchives/2020/page/6/index.html","61f569f3de4d4dcfc8320cbec6667cfe"],["/sanarchives/2021/10/index.html","93d8fb57d1ee90acdb0f170ca3c4ef46"],["/sanarchives/2021/10/page/2/index.html","4111fd37937cac7a8f2df8d1d591690d"],["/sanarchives/2021/index.html","ae0dc51b437cb793dbdaf149f5564452"],["/sanarchives/2021/page/2/index.html","e6fcd1f5bcaef7777e4ebe846f7d3bc2"],["/sanarchives/index.html","ab26993a2542ded9eb2a9b98f507f0d1"],["/sanarchives/page/2/index.html","7da1cba61218ea81511a17628e6b2071"],["/sanarchives/page/3/index.html","cec28f86c72e9643f9471d36f9c1f3d4"],["/sanarchives/page/4/index.html","b57a78b9250713e3416d03ab9676ec83"],["/sanarchives/page/5/index.html","169b5ea42ba97ad31da0077f1c8ae65b"],["/sanarchives/page/6/index.html","f8ce6eab7820dee3215982f050ae187d"],["/sanarchives/page/7/index.html","0f94fc436f6825c38de1173a6ee1c036"],["/sanarchives/page/8/index.html","ab0db8c02b3aa29b7dfd40fe1296e5f1"],["/sancategories/doc/index.html","be9bd4b757cc38a53d8bcd93bab8619d"],["/sancategories/practice/index.html","4e00023b4bdeaa1ee126cf1031337250"],["/sancategories/practice/page/2/index.html","d7d704bbd6ebdd584fe861faccbef38e"],["/sancategories/practice/page/3/index.html","58fa3a7f40c1aa55df269030a681a653"],["/sancategories/practice/page/4/index.html","daddab4a14b4e898298ee475f8ddb257"],["/sancategories/tutorial/index.html","294660769c82c2639e3c8934ca9cbe21"],["/sancategories/tutorial/page/2/index.html","3e68308f742c15d5b506a7e6eab823a1"],["/sancategories/tutorial/page/3/index.html","cada0081a6739b076737cd2312a89e8b"],["/sancategories/tutorial/page/4/index.html","9fd955af1ee9c7cc95dd6e67fa8f41e4"],["/sancss/article.css","1466f88ac23ec652897ede3fb6d7aeb6"],["/sancss/bootstrap.min.css","920f984bd041d7ab8cceade3e5805efc"],["/sancss/code.css","dbd2986caea443e5aaae6275e1b7ed14"],["/sancss/codemirror.css","288352df06a67ee35003b0981da414ac"],["/sancss/font-awesome.min.css","bb53ad7bffecc0014d64553e96501dce"],["/sancss/site.css","a69acb7758fb6586f505f007d960da3b"],["/sancss/style.css","d7c9feb685b822297cba8540448e2e04"],["/sandoc/api/index.html","dac7d688b136bfc6b940466dea7a4b16"],["/sandoc/main-members/index.html","e6891cd1274e87ffd0466fa5d0eb5651"],["/sanen/doc/api/index.html","9d9d518c67108f6b7ffb2c6cdcb363d2"],["/sanen/doc/main-members/index.html","17f7548682974a0988d825c1d0e88376"],["/sanen/example/index.html","06f2bc7329a9e2c6d3d96bf1441777f7"],["/sanen/index.html","e8371e79f87a0dc4cd7c9f133d616d5e"],["/sanen/practice/array-deep-updates-trigger-view/index.html","04daae174a0e1fc1afdfe9bd4e130157"],["/sanen/practice/auto-camel/index.html","404af6930483457cde738305a90b270e"],["/sanen/practice/can-we-use-dom/index.html","34cd0188616926d7ceeb396b4f72104e"],["/sanen/practice/child-to-grandparent/index.html","343387ba9a72ddc20d4ae9be09d97d26"],["/sanen/practice/child-to-parent/index.html","9f544c80287f2c5791f87e7b89b9282c"],["/sanen/practice/data-invalid/index.html","8d7d114a9bac7737cfc0e31d1de15345"],["/sanen/practice/data-valid/index.html","e4b7c2994a3198528d81b69360d9a842"],["/sanen/practice/dynamic-parent-child/index.html","5122349f1ba4289b4f536267b82ba8c3"],["/sanen/practice/how-to-show-or-hide-an-element/index.html","7919e0d067041d54155da9673e6298de"],["/sanen/practice/index.html","58736b453f131b19073c4bcea9bee408"],["/sanen/practice/parent-to-child/index.html","2343d5bd4a2235b7b4a71e5b6bc39098"],["/sanen/practice/position-absolute-dom/index.html","bd034308b4962fc6f55e5b901da61a6e"],["/sanen/practice/question-and-answer/index.html","ede0dced9ae29535050cdd998346d199"],["/sanen/practice/san-composition-api/index.html","2e083689186369ff40d7d0ac5a866b51"],["/sanen/practice/san-router-spa/index.html","97f721f225e3e5b540540c244387f576"],["/sanen/practice/san-store-spa/index.html","c6b7ee10396109a480e34f1088196e89"],["/sanen/practice/traverse-object/index.html","0af1fe0fbc9a0695a545e9c70d9a88da"],["/sanen/tutorial/background/index.html","9dc977b0194f7298f0010c93707c0be0"],["/sanen/tutorial/component/index.html","033641be7ed239038aebd6325872fc64"],["/sanen/tutorial/data-checking/index.html","60e09cad845f9fcf6c2a58e1cd4a2a19"],["/sanen/tutorial/data-method/index.html","c398bdc86dbcc4f87e5f60759ffd58fc"],["/sanen/tutorial/event/index.html","3938cd8d3c5201adb47e792f6b39a494"],["/sanen/tutorial/for/index.html","fc2b9a6a15602466b2666c8b57ea3b7c"],["/sanen/tutorial/form/index.html","d56368d039ac3f76ee3c85c9536a3564"],["/sanen/tutorial/if/index.html","e749c5636a45ac74de8969634867785a"],["/sanen/tutorial/reverse-flag/index.html","59c7346daa8c0189aee55f37f5aa5f9c"],["/sanen/tutorial/reverse/index.html","f18c4f6443699bd14ec04b7b6696574f"],["/sanen/tutorial/setup/index.html","d2d3e93845160a30e7d8623399df0676"],["/sanen/tutorial/slot/index.html","e4a07b968b87e73fd2a1e50f38c9d4c8"],["/sanen/tutorial/ssr-before-3.8/index.html","49258baaca4f040aa5e9ba2336184e6f"],["/sanen/tutorial/ssr/index.html","87250b796b9da4617a9a34f86e0b4ac1"],["/sanen/tutorial/start/index.html","dcca6e3b11e11b69f8b7d90c131d5c4b"],["/sanen/tutorial/style/index.html","b0de4582220e4b19c05c1bc3aa39a519"],["/sanen/tutorial/template/index.html","592c8e5e2da59b61e6f01cec66fe604c"],["/sanen/tutorial/transition/index.html","a2480913697d07a06a4a2cf72e8da22a"],["/sanexample/index.html","806a307d5643e4983b84282491ac3fd0"],["/sanfonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["/sanfonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["/sanfonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["/sanfonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["/sanimg/1.svg","d77034c37b417ef76096294de4c111bb"],["/sanimg/2.svg","fbf700664340cb41d83923a47b6e5160"],["/sanimg/3.svg","8989fb841451b7664ee31e1eda9b352b"],["/sanimg/4.svg","c7877b3cdf76c4e42dc841b1475145cc"],["/sanimg/5.svg","15c4e12ae689624dd1fb60b41a6d1ab1"],["/sanimg/6.svg","6fa71561eebdb75f7130e6d27c0d4402"],["/sanimg/7.svg","2f9f621f0455799eee836216db3cd585"],["/sanimg/8.svg","4730d9e16181617f8a75217e0a2ac23e"],["/sanimg/9.svg","28caa5650d8cbc6013f0ce9f8e6c6458"],["/sanimg/Search.svg","085ea4ef80349f1f33dc700b59932d20"],["/sanimg/Shape.svg","63ce11af494c6a2b84a5408a67814ba6"],["/sanimg/b_api.svg","e46ba603c241202ed66faef1bcb089b4"],["/sanimg/b_compass.svg","c8e132fa14a6c3328be175332c9a645b"],["/sanimg/b_design.svg","9c210ba39ad228a5c8cffa3db043b04b"],["/sanimg/b_mater.svg","9f8ad7d278d795f199bdf96c71243095"],["/sanimg/b_router.svg","8558806bc930f0ccc5d30050fe05fe07"],["/sanimg/b_store.svg","6ee10d6029b0e2a0fc6344e493efc248"],["/sanimg/b_trail.svg","6c3f8673381087390064c8d5394816ba"],["/sanimg/b_update.svg","3f30b8e8a5d022e2bb2dbeb0f72a0dee"],["/sanimg/banner-md.png","1bcfe22f30df09874804ebbad7eb0330"],["/sanimg/banner-santd.png","e237ae4ffeadae5f9aac8842f5383bef"],["/sanimg/discussion.svg","72f77ec5ba8e59c9c2b00f0e16e7c6a3"],["/sanimg/github.svg","ab014a9cc0591bda97b2225753dc6c16"],["/sanimg/github2.svg","8f9a62a9b2f440411f490122cfc00090"],["/sanimg/icons/icon-128x128.png","360e8b077017ca3f8faffb1d2dc964c5"],["/sanimg/icons/icon-144x144.png","2cac5e49e8deb470ef8d695fed8a0784"],["/sanimg/icons/icon-152x152.png","ff8a6e62206508f799e4e33dfc23a6d1"],["/sanimg/icons/icon-192x192.png","b82502d56ce18f3c4a5cbb34aab37312"],["/sanimg/icons/icon-384x384.png","52fa46d5e222a4ec290f9ba93377f606"],["/sanimg/icons/icon-512x512.png","89dc6cdd8d62328a43c8f7be5bde8841"],["/sanimg/icons/icon-72x72.png","8f98a06550f027282907ac005cafb3f0"],["/sanimg/icons/icon-96x96.png","49b0e139682345a8f578f0546a56bfba"],["/sanimg/life-cycle.png","9af0f2266923f3bdf107f717115b1ce7"],["/sanimg/logo-colorful.svg","25149c80cd625edfedcc6115dda17775"],["/sanimg/logo.svg","1bdf6b3d2b668fe5062e473e2b1860ff"],["/sanimg/logo2.png","50f59e2d6f907dbdf5720270ac745812"],["/sanimg/lowpoly.jpg","cfee0ad50ba60a1525c5b2dc3c020ac7"],["/sanimg/macbook.png","8d96db30d032572134832662ca85fc0b"],["/sanimg/pen.svg","86c390dc94bb381ac836b3635f25f47a"],["/sanimg/san-perf.png","a80f3a58d1c6a7c44b33ed90d56ff89c"],["/sanimg/search02.svg","7d27bda890fcbd9decd5d246a01c3a42"],["/sanindex.html","21ce62fbbf2fc894478f4eff9853a1dd"],["/sanjs/anime.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/sanjs/bodymovin.min.js","40163e612f8d80acaac737f25b3641a2"],["/sanjs/codemirror.js","11af3980de7da80eacd742ecd9c37cf7"],["/sanjs/jquery-1.10.2.js","e3f24f23b859cf718282e3806ed5ce38"],["/sanjs/layout_control.js","84758cffe8e45f3a6723064605f2e5c3"],["/sanjs/script.js","eeaf47f0de9c0e891705805a70138616"],["/sanjs/stickUp.min.js","2a407130f9ed2b66cdd21407c203c149"],["/sanpage/2/index.html","260f3c95382bf3fb9d24639415024257"],["/sanpage/3/index.html","5f14b674c63bf6b16f3b52a453a1d6bf"],["/sanpage/4/index.html","365b3baf0c516ed75916520e99e4f591"],["/sanpage/5/index.html","72aed83edf86ec82ef21a681908a803a"],["/sanpage/6/index.html","d80aced3310213653ee04f8dc91feed2"],["/sanpage/7/index.html","11d4383b75507eff6e4fd45d42fd123e"],["/sanpage/8/index.html","59f53300fe556fd0bab555fa695619e3"],["/sanpractice/array-deep-updates-trigger-view/index.html","6dfe47b8800e6e054000fc50c6ed2479"],["/sanpractice/auto-camel/index.html","99fc01522c6de96ef05e43c0f219e064"],["/sanpractice/can-we-use-dom/index.html","a1ad382a7bde2aac3f3c23f09856578b"],["/sanpractice/child-to-grandparent/index.html","03a7fc513b8f28b1454c389c0cfb0d75"],["/sanpractice/child-to-parent/index.html","4523837d5cc8a1d1e7187617265ae8dd"],["/sanpractice/data-invalid/index.html","5e22be2782b0dc880458b6a41a5d4cd1"],["/sanpractice/data-valid/index.html","02a3e06b0368581adc73b572d52e434c"],["/sanpractice/dynamic-parent-child/index.html","deb058d71970e407621e1d14e7f81ab3"],["/sanpractice/how-to-show-or-hide-an-element/index.html","24f86fb9212270ea42772c622b387f09"],["/sanpractice/ie-compatibility/index.html","035dc34d9672e13a4120ec827dc972c0"],["/sanpractice/index.html","ae19cc18529a8f914fb8e45252b1d133"],["/sanpractice/parent-to-child/index.html","05134a9ea0c79810527938b078f283c6"],["/sanpractice/position-absolute-dom/index.html","1777d36f259102c085bf5903faaa6bd0"],["/sanpractice/question-and-answer/index.html","ebf7657b6a4606d74eb2e82baf368ea2"],["/sanpractice/san-composition-api/index.html","c9c96be2cd41ae1d81ec71c9f4806e68"],["/sanpractice/san-router-spa/index.html","1e9df5cac82404a06c410523ce83906c"],["/sanpractice/san-store-spa/index.html","f1c9bd52a87d0aefe49582e91221984b"],["/sanpractice/traverse-object/index.html","82b791f2b75b1189d1b5d96c03519d56"],["/santutorial/background/index.html","dc5e43192e19499e899e716f7252fe3f"],["/santutorial/component/index.html","3faeb655e258b9e28bc8a6fb4605cf7f"],["/santutorial/data-checking/index.html","9ab2c262f2582448619fb68e88b26f0e"],["/santutorial/data-method/index.html","66399b216ad1e7a75c43402583053582"],["/santutorial/event/index.html","ad3f08b9d53e474b0ae0d21a9a133aec"],["/santutorial/for/index.html","c77c301dc359dcba562591ca0b72f5d7"],["/santutorial/form/index.html","97442346c1440e1761594813775045d4"],["/santutorial/if/index.html","9754263291ce64e19fb59125c1f8c031"],["/santutorial/reverse-flag/index.html","365438a1a78cc17aeafb5eb618c13a6a"],["/santutorial/reverse/index.html","822d33bd9a6e799a938764925ccb63d3"],["/santutorial/setup/index.html","2e1ff68023a8b0673a14335ca0d91a64"],["/santutorial/slot/index.html","dcb3a66cd94cd7324cb583e525aa67ec"],["/santutorial/ssr-before-3.8/index.html","52fb37a62986fb361e69240463e8f80e"],["/santutorial/ssr/index.html","0fce20024c25b9ad7291feca5b9319d6"],["/santutorial/start/index.html","e3d0d0e93bae3bad382a073916e0f2da"],["/santutorial/style/index.html","d60f385286539ea48562a165f07d8022"],["/santutorial/template/index.html","eb335d21122654687bbb58da61be71cb"],["/santutorial/transition/index.html","8e4e9374b0ee517409ef990a88c93429"]];
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







