<?php
// Load NitroPack libraries
require_once('autoload.php');

// Initialize NitroPack with your site ID and secret
$nitro = new NitroPack\SDK\NitroPack('siwjIVdekMwdDaQLjOWsKVqrsuJmNPdR', 'okoD6e5BxORicBM6EIm1kPOMBIjFRjJbVzHkc9cW4g8AWk2odZ2GL2cRupiFyHYT');

// Check any administrative URLs that should clear the cache
// Purge all cache
// $purgeCacheUrls = array(
//     'GET' => array('/purge'),
//     'POST' => array(),
//     'PUT' => array(),
//     'HEAD' => array(),
//     'DELETE' => array()
// );
// if (in_array($_SERVER['REQUEST_URI'], $purgeCacheUrls[$_SERVER['REQUEST_METHOD']])) {
//     $nitro->purgeCache();
//     $nitro->fetchConfig();
// }
// // End of purge snippet

// Purge cache for a specific tag only so your pages get optimized faster
// $clearPageCacheUrls = array(
//     'GET' => array('/clearpagecache'),
//     'POST' => array(),
//     'PUT' => array(),
//     'HEAD' => array(),
//     'DELETE' => array()
// );
// if (in_array($_SERVER['REQUEST_URI'], $clearPageCacheUrls[$_SERVER['REQUEST_METHOD']])) {
//     $nitro->purgeCache(null, 'mainpages');
//     $nitro->fetchConfig();
// }
// End of tag purge snippet

$layout = 'default';
// Use different layouts for different types of pages (product page, category page, etc)
// $layoutStartingWith = array(
//     '/product/' => 'productlayout',
//     '/category/' => 'categorylayout'
// );
// foreach ($layoutStartingWith as $startingWith => $useLayout) {
//     if (substr($_SERVER['REQUEST_URI'], 0, strlen($startingWith)) == $startingWith) {
//         $layout = $useLayout;
//     }
// }

// Serve cache if available
if ($nitro->hasCache($layout)) {
    $nitro->pageCache->readfile();
    exit;
}
// Tag your pages so you can clear parts of your cache separately, which results in faster optimization
// else {
//     if ($nitro->isAllowedUrl()) {
//         $nitro->tagUrl($nitro->getUrl(), 'mainpages');
//     }
// }
