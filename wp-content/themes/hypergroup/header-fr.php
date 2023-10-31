<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-118975064-18"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-118975064-18');
        </script>

        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta content="" name="description">
        <meta content="" name="keywords">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="telephone=no" name="format-detection">
        <meta name="HandheldFriendly" content="true">
        <!-- Base Bee3D StyleSheet -->
        <link href="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/css/hyperfont.css" rel="alternate stylesheet">
        <!-- SWITCHER-->
        <link href="<?php echo esc_url( get_template_directory_uri() ); ?>/assets\css\all.min.css" rel="alternate stylesheet">
        <!--     <link href="assets\css\fontawesome.min.css" rel="alternate stylesheet">
    <link href="assets\css\regular.min.css" rel="alternate stylesheet">
    <link href="assets\css\solid.min.css" rel="alternate stylesheet"> -->
        <link rel="icon" type="image/x-icon" href="<?php echo esc_url( get_template_directory_uri() ); ?>/assets\media/favicon.png">
        <style>
            <?php _e( '#demo {
            margin-top: 150px;
            margin-bottom: 390px;;
            }
            .bee3D--slide {
            background-color: gray;
            }', 'hypergroup' ); ?>
        </style>
        <!--[if lt IE 9 ]>
<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/js/separate-js/html5shiv-3.7.2.min.js" type="text/javascript"></script><meta content="no" http-equiv="imagetoolbar">
<![endif]-->
        <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
        <?php wp_head(); ?>
    </head>
    <body class="loading">
        <!-- Loader-->
<!--         <div class="screen-loader">
            <div class="loading">
                <span class="loader_span"> <span class="loader_right"></span><span class="loader_left"></span></span>
            </div>
            <span class="loader-text shuffle"><?php _e( 'Hypergroup...', 'hypergroup' ); ?></span>
            <div class="sl-top"></div>
            <div class="sl-bottom"></div>
        </div> -->
        <!-- Loader end-->
        <div class="l-theme animated-css" data-header="sticky" data-header-top="200" data-canvas="container">
            <!-- ==========================-->
            <!-- SEARCH MODAL-->
            <!-- ==========================-->
            <div class="header-search open-search">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
                            <div class="navbar-search">
                                <form class="search-global">
                                    <input class="search-global__input" type="text" placeholder="Type to search" autocomplete="off" name="s" value="">
                                    <button class="search-global__btn">
                                        <i class="icon stroke icon-Search"></i>
                                    </button>
                                    <div class="search-global__note">
                                        <?php _e( 'Begin typing your search above and press return to search.', 'hypergroup' ); ?>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="search-close close" type="button">
                    <i class="fa fa-times"></i>
                </button>
            </div>
            <!-- ==========================-->
            <!-- MOBILE MENU-->
            <!-- ==========================-->
            <div data-off-canvas="mobile-slidebar left overlay">
                <ul class="yamm main-menu nav navbar-nav">
                    <li>
                        <a href="#home">
                            <?php _e( 'Accueil', 'hypergroup' ); ?>
                        </a>
                    </li>
                    <li>
                        <a href="#apropos">
                            <?php _e( 'A propos', 'hypergroup' ); ?>
                        </a>
                    </li>
                    <li>
                        <a href="#apropos">
                            <?php _e( 'Partenariat', 'hypergroup' ); ?>
                        </a>
                    </li>
                    <li>
                        <a href="#services">
                            <?php _e( 'Nos services', 'hypergroup' ); ?>
                        </a>
                    </li>
                    <li>
                        <a href="#clients">
                            <?php _e( 'Nos clients', 'hypergroup' ); ?>
                        </a>
                    </li>
                    <li class="dropdown"><a class="dropdown-toggle" href="#ref">Nos références</a>
                        <ul class="dropdown-menu">
                            <li><a href="https://hypergroup.com.tn/references/site-web/">Création Site web</a></li>
                            <li><a href="https://hypergroup.com.tn/references/design-graphique/">Design et impression graphique</a></li>
                            <li><a href="https://hypergroup.com.tn/references/audiovisuelle/">Production Audivisuelle</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://hypergroup.com.tn/contact/">
                            <?php _e( 'Contact', 'hypergroup' ); ?>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- ==========================-->
            <!-- FULL SCREEN MENU-->
            <!-- ==========================-->
            <div class="wrap-fixed-menu" id="fixedMenu">
                <nav class="fullscreen-center-menu">
                    <div class="menu-main-menu-container">
                        <ul class="nav navbar-nav">
                            <li>
                                <a href="#home">
                                    <?php _e( 'Accueil', 'hypergroup' ); ?>
                                </a>
                            </li>
                            <li>
                                <a href="#apropos">
                                    <?php _e( 'A propos', 'hypergroup' ); ?>
                                </a>
                            </li>
                            <li>
                                <a href="#apropos">
                                    <?php _e( 'Partenariat', 'hypergroup' ); ?>
                                </a>
                            </li>
                            <li>
                                <a href="#services">
                                    <?php _e( 'Nos services', 'hypergroup' ); ?>
                                </a>
                            </li>
                            <li>
                                <a href="#clients">
                                    <?php _e( 'Nos clients', 'hypergroup' ); ?>
                                </a>
                            </li>
                            <li>
                                <a href="https://hypergroup.com.tn/contact/">
                                    <?php _e( 'Contact', 'hypergroup' ); ?>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <button type="button" class="fullmenu-close">
                    <i class="fa fa-times"></i>
                </button>
            </div>
            <header class="header header-topbar-hidden header-boxed-width navbar-fixed-top header-background-trans header-navibox-1-left header-navibox-2-right">
                
                <div class="container container-boxed-width h_top_part">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <ul class="top_bar_info" id="top_bar_info_1" style="display: block;">
                            <li><i class="fa fa-phone"></i> Tél1.: +216 74 408 885</li>
                            <li><i class="fa fa-fax"></i> Tél2.: +216 70 296 336</li>
                            <li><i class="fa fa-clock-o"></i> Lun-Ven 09.00 - 18.00 </li>
                        </ul>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="righ_header">
                            <div class="top_bar_socials">
                                <a target="_blank" class="tooltip_e facebook_icn" title="facebook" href="https://www.facebook.com/Hypergroup.tunisie/">
                                    <i class="fab fa-facebook-f"></i></a>
                                <a target="_blank" class="tooltip_e youtube_icn" title="youtube" href="https://www.youtube.com/channel/UCPcD8ozfUO4MsXIY8BdeANw">
                                    <i class="fab fa-youtube"></i></a>
                                <a target="_blank" class="tooltip_e insta_icn" title="instagram" href="https://www.instagram.com/hypergroup_officiel/"><i class="fab fa-instagram"></i></a>
                                <a target="_blank" style="border-right: 1px solid #DEDEDE;" class="tooltip_e linkedin_icn" title="LinkedIn" href="https://www.linkedin.com/company/hypergroup-tn"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                            <?php dynamic_sidebar( 'custom-side-bar' ); ?>
                        </div>
                    </div>
                </div>
                    <!--/ .h_top_part-->
                <div class="container container-boxed-width">
                    <div class="top-bar">
                        <div class="container">
                            <div class="header-topbarbox-1">
                                <ul>
                                    <li>
                                        <?php _e( 'Contactez-nous: contact@hypergroup.com.tn', 'hypergroup' ); ?>
                                    </li>
                                </ul>
                            </div>
                            <div class="header-topbarbox-2">
                                <ul class="social-links">
                                    <li>
                                        <a href="/"><i class="social_icons hypicon-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="/"><i class="social_icons fa fa-youtube-square"></i></a>
                                    </li>
                                    <li>
                                        <a href="/"><i class="social_icons fa fa-vimeo-square"></i></a>
                                    </li>
                                    <li>
                                        <a href="/"><i class="social_icons fa fa-twitter-square"></i></a>
                                    </li>
                                    <li class="li-last">
                                        <a href="/"><i class="social_icons fa fa-tumblr-square"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <nav class="navbar" id="nav">
                        <div class="header-navibox-1">
                            <!-- Mobile Trigger Start-->
                            <button class="menu-mobile-button visible-xs-block js-toggle-mobile-slidebar toggle-menu-button">
                                <i class="toggle-menu-button-icon"><span></span><span></span><span></span><span></span><span></span><span></span></i>
                            </button>
                            <!-- Mobile Trigger End-->
                            <a class="navbar-brand scroll" href="<?php echo get_site_url();?>">
                                <img class="normal-logo" src="https://hypergroup.com.tn/wp-content/uploads/2022/03/logo-hypergroup-1.png" alt="Hypergroup">
                                <img class="scroll-logo hidden-xs" src="https://hypergroup.com.tn/wp-content/uploads/2022/03/logo-hypergroup-1.png" alt="Hypergroup">
                            </a>
                        </div>
                        <div class="header-navibox-2">
                            <?php 
                            if (is_home()){
                            ?>
                            <ul class="yamm main-menu nav navbar-nav">
                                <li>
                                    <a href="#home">
                                        <?php _e( 'Acceuil', 'hypergroup' ); ?>
                                    </a>
                                </li>
                                <li>
                                    <a href="#apropos">
                                        <?php _e( 'A propos', 'hypergroup' ); ?>
                                    </a>
                                </li>
                                <li>
                                    <a href="#partenariat">
                                        <?php _e( 'Partenariat', 'hypergroup' ); ?>
                                    </a>
                                </li>
                                <li>
                                    <a href="#services">
                                        <?php _e( 'Nos services', 'hypergroup' ); ?>
                                    </a>
                                </li>
                                <li>
                                    <a href="#clients">
                                        <?php _e( 'Nos clients', 'hypergroup' ); ?>
                                    </a>
                                </li>
                                <li class="dropdown"><a class="dropdown-toggle" href="#ref">Nos références</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="https://hypergroup.com.tn/references/site-web/">Création Site web</a></li>
                                        <li><a href="https://hypergroup.com.tn/references/design-graphique/">Design et impression graphique</a></li>
                                        <li><a href="https://hypergroup.com.tn/references/audiovisuelle/">Production Audivisuelle</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="https://hypergroup.com.tn/category/blog/">
                                        <?php _e( 'Blog', 'hypergroup' ); ?>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://hypergroup.com.tn/contact/">
                                        <?php _e( 'Contact', 'hypergroup' ); ?>
                                    </a>
                                </li>
<!--                                 <li class="social-media-items">
                                    <a class="social-media" target="_blank" href=""><i class="fab fa-facebook-square"></i></a>
                                    <a class="social-media" target="_blank" href="#"><i class="fab fa-youtube"></i></a>
                                    <a class="social-media" target="_blank" href="#"><i class="fab fa-instagram"></i></a>
                                    <a class="social-media" target="_blank" href="https://wa.me/21623677299"><i class="fab fa-whatsapp"></i></a>
                                </li>
 -->                            </ul>
                            <?php 
                            }else{
                            ?>
                            <ul class="yamm main-menu nav navbar-nav">
                                <li>
                                    <a href="<?php echo get_site_url(); ?>#home">
                                        <?php _e( 'Acceuil', 'hypergroup' ); ?>
                                    </a>
                                </li>
                                <li>
                                    <a href="<?php echo get_site_url(); ?>#apropos">
                                        <?php _e( 'A propos', 'hypergroup' ); ?>
                                    </a>
                                </li>
                                <li>
                                    <a href="<?php echo get_site_url(); ?>#partenariat">
                                        <?php _e( 'Partenariat', 'hypergroup' ); ?>
                                    </a>
                                </li>
                                <li>
                                    <a href="<?php echo get_site_url(); ?>#services">
                                        <?php _e( 'Nos services', 'hypergroup' ); ?>
                                    </a>
                                </li>
                                <li>
                                    <a href="<?php echo get_site_url(); ?>#clients">
                                        <?php _e( 'Nos clients', 'hypergroup' ); ?>
                                    </a>
                                </li>
                                <li class="dropdown"><a class="dropdown-toggle" href="#ref">Nos références</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="https://hypergroup.com.tn/references/site-web/">Création Site web</a></li>
                                        <li><a href="https://hypergroup.com.tn/references/design-graphique/">Design et impression graphique</a></li>
                                        <li><a href="https://hypergroup.com.tn/references/audiovisuelle/">Production Audivisuelle</a></li>
                                        <li><a href="https://hypergroup.com.tn/references/community-management/">Community management</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="https://hypergroup.com.tn/category/blog/">
                                        <?php _e( 'Blog', 'hypergroup' ); ?>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://hypergroup.com.tn/contact/">
                                        <?php _e( 'Contact', 'hypergroup' ); ?>
                                    </a>
                                </li>
<!--                                 <li class="social-media-items">
                                    <a class="social-media" target="_blank" href=""><i class="fab fa-facebook-square"></i></a>
                                    <a class="social-media" target="_blank" href="#"><i class="fab fa-youtube"></i></a>
                                    <a class="social-media" target="_blank" href="#"><i class="fab fa-instagram"></i></a>
                                    <a class="social-media" target="_blank" href="https://wa.me/21623677299"><i class="fab fa-whatsapp"></i></a>
                                </li>
 -->                            </ul>
                            <?php
                            }
                            ?>
                        </div>
                    </nav>
                </div>
            </header>
            <!-- end .header-->
            <main class="l-main-content" id="home">