<?php
  if (empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] === 'off') {
      $protocol = 'http://';
  } else {
      $protocol = 'https://';
  }
  $BASE_URL = $protocol . $_SERVER['SERVER_NAME'] . dirname($_SERVER['PHP_SELF']);

  require_once 'inc/vendor/Mobile_Detect.php';
  $detect = new Mobile_Detect();

  $device = (!$detect->isMobile()) ? 'desktop' : ($detect->isTablet() ? 'tablet' : 'mobile');

  $device = (isset($_COOKIE['device']) && $_COOKIE['device']) ? $_COOKIE['device'] : $device;

  switch ($device) {
      case 'mobile':
      $viewport     = '768px';
      $viewportMeta = 'width=768';
      break;
     case 'tablet':
      $viewport     = 'device-width';
      $viewportMeta = 'width=device-width, initial-scale=1.0';
      break;
    case 'desktop':
    default:
      $viewport     = 'device-width';
      $viewportMeta = 'width=device-width, initial-scale=1.0';
      break;
  }
  $isHomepage = (basename($_SERVER['PHP_SELF']) == 'index.php');
  $title = ($isHomepage) ? $siteName : $pageName.' : '.$siteName;
?>
<!doctype html>
<html class="-device_<?php echo $device; ?> no-js" lang="">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="<?php echo $viewportMeta; ?>" />
  <title><?php echo $title; ?></title>
  <meta name="description" content="" />
  <!-- <meta property="og:image" content="<?php echo $BASE_URL; ?>/img/userfiles/og-image.png" /> -->
  <style>
    @-ms-viewport {
      width: <?php echo $viewport; ?>;
    }
    @viewport {
      width: <?php echo $viewport; ?>;
    }
  </style>
  <link rel="shortcut icon" href="favicon.ico" />
  <link rel="apple-touch-icon" href="apple-touch-icon.png" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/main.css?<?php echo filemtime('css/main.css'); ?>" />
  <link rel="stylesheet" href="css/colors.css?<?php echo filemtime('css/colors.css'); ?>" />
  <script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
  
  
  <script>window.Modernizr || document.write('<script src="js/vendor/modernizr-2.8.3.min.js"><\/script>')</script>

  <!--[if lte IE 8]>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.3.min.js"><\/script>')</script>
    <script src="js/legacy/ie8.js"></script>
  <![endif]-->
  <!--[if gte IE 9]><!-->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-2.1.4.min.js"><\/script>')</script>
  <!--<![endif]-->
  
  <!-- Google Analytics -->
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-68801405-1', 'auto');
    ga('send', 'pageview');
  </script>

  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
</head>

<body class="-type_home">
  <!--[if lt IE 8]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->

  <div class="l-wrapper">
    <header class="l-siteHeader js-siteHeader" role="banner"> 
      <div class="b-siteHeader">
        <div class="l-siteLogo">
          <?php
            $siteLogo__iconURL = ($device=='mobile') ? 'img/blocks/siteLogo/siteLogo-logo-mobile.png' : 'img/blocks/siteLogo/siteLogo-logo.png';
          ?>
          <?php if($isHomepage): ?>
            <h1 class="b-siteLogo" itemscope itemtype="http://schema.org/Organization">
              <a href="#home" class="b-siteLogo__link j-siteLogo__link" itemprop="url">
                <img class="b-siteLogo__icon" src="<?php echo $siteLogo__iconURL; ?>" alt="<?php echo $siteName; ?>" title="<?php echo $siteName; ?>" itemprop="logo" />
              </a>
            </h1>
          <?php else: ?>
            <div class="b-siteLogo" itemscope itemtype="http://schema.org/Organization">
              <a class="b-siteLogo__link j-siteLogo__link" href="index.html" itemprop="url">
                <img class="b-siteLogo__icon" src="<?php echo $siteLogo__iconURL; ?>" alt="<?php echo $siteName; ?>" title="<?php echo $siteName; ?>" itemprop="logo" />
              </a>
            </div>
          <?php endif; ?>
        </div>
        <div class="l-siteTitle">
          <a href="" class="b-siteTitle">
            <span class="b-siteTitle__item -type_important">Картинки</span>
            <span class="b-siteTitle__item">на рабочий стол</span>
          </a>
        </div>
        <div class="l-siteContactUs">
          <a href="" class="b-siteContactUs">Написать нам</a>
        </div>
      </div>
    </header>
    <div class="l-siteSearch">
      <div class="b-siteSearch">
        <div class="b-siteSearch__inner">
          <form class="b-siteSearch__form" role="search" method="post" action="#">
            <label class="b-siteSearch__title" for="search-text">Найдите картинки на любой вкус</label>
            <input class="b-siteSearch__input" type="search" spellcheck="true" value="" name="search" id="search-text" placeholder="найти красивые картинки"/>
          </form>
        </div>
      </div>
    </div>

   
