<?php

/*
Plugin Name: Securas Monitoring
Plugin URI: https://securas.fr/

*/

if (!function_exists('untrailingslashit') || !defined('WP_PLUGIN_DIR')) {
    // WordPress is probably not bootstrapped.
    exit;
}

if (file_exists(untrailingslashit(WP_PLUGIN_DIR).'/worker/init.php')) {
    if (in_array('worker/init.php', (array) get_option('active_plugins')) ||
        (function_exists('get_site_option') && array_key_exists('worker/init.php', (array) get_site_option('active_sitewide_plugins')))) {
        $GLOBALS['mwp_is_mu'] = true;
        include_once untrailingslashit(WP_PLUGIN_DIR).'/worker/init.php';
    }
}
