<?php
if ( ! function_exists( 'hypergroup_setup' ) ) :

function hypergroup_setup() {

    /*
     * Make theme available for translation.
     * Translations can be filed in the /languages/ directory.
     */
    /* hypergroup generated Load Text Domain Begin */
    load_theme_textdomain( 'hypergroup', get_template_directory() . '/languages' );
    /* hypergroup generated Load Text Domain End */

    // Add default posts and comments RSS feed links to head.
    add_theme_support( 'automatic-feed-links' );

    /*
     * Let WordPress manage the document title.
     */
    add_theme_support( 'title-tag' );
    
    /*
     * Enable support for Post Thumbnails on posts and pages.
     */
    add_theme_support( 'post-thumbnails' );
    set_post_thumbnail_size( 825, 510, true );

    // Add menus.
    register_nav_menus( array(
        'primary' => __( 'Primary Menu', 'hypergroup' ),
        'social'  => __( 'Social Links Menu', 'hypergroup' ),
    ) );

    /*
     * Switch default core markup for search form, comment form, and comments
     * to output valid HTML5.
     */
    add_theme_support( 'html5', array(
        'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
    ) );

    /*
     * Enable support for Post Formats.
     */
    add_theme_support( 'post-formats', array(
        'aside', 'image', 'video', 'quote', 'link', 'gallery', 'status', 'audio', 'chat'
    ) );
}
endif; // hypergroup_setup

add_action( 'after_setup_theme', 'hypergroup_setup' );


if ( ! function_exists( 'hypergroup_init' ) ) :

function hypergroup_init() {

    
    // Use categories and tags with attachments
    register_taxonomy_for_object_type( 'category', 'attachment' );
    register_taxonomy_for_object_type( 'post_tag', 'attachment' );

    /*
     * Register custom post types. You can also move this code to a plugin.
     */
    /* hypergroup generated Custom Post Types Begin */

    /* hypergroup generated Custom Post Types End */
    
    /*
     * Register custom taxonomies. You can also move this code to a plugin.
     */
    /* hypergroup generated Taxonomies Begin */

    /* hypergroup generated Taxonomies End */

}
endif; // hypergroup_setup

add_action( 'init', 'hypergroup_init' );


if ( ! function_exists( 'hypergroup_widgets_init' ) ) :

function hypergroup_widgets_init() {

    /*
     * Register widget areas.
     */
    /* hypergroup generated Register Sidebars Begin */

    /* hypergroup generated Register Sidebars End */
}
add_action( 'widgets_init', 'hypergroup_widgets_init' );
endif;// hypergroup_widgets_init



if ( ! function_exists( 'hypergroup_customize_register' ) ) :

function hypergroup_customize_register( $wp_customize ) {
    // Do stuff with $wp_customize, the WP_Customize_Manager object.

    /* hypergroup generated Customizer Controls Begin */

    /* hypergroup generated Customizer Controls End */

}
add_action( 'customize_register', 'hypergroup_customize_register' );
endif;// hypergroup_customize_register


if ( ! function_exists( 'hypergroup_enqueue_scripts' ) ) :
    function hypergroup_enqueue_scripts() {

        /* hypergroup generated Enqueue Scripts Begin */

    wp_deregister_script( 'jquery' );
    wp_enqueue_script( 'jquery', get_template_directory_uri() . '/assets/libs/jquery-1.12.4.min.js', false, null, false);

    wp_deregister_script( 'jquerymigrate' );
    wp_enqueue_script( 'jquerymigrate', get_template_directory_uri() . '/assets/libs/jquery-migrate-1.2.1.js', false, null, true);

    wp_deregister_script( 'bootstrap' );
    wp_enqueue_script( 'bootstrap', get_template_directory_uri() . '/assets/libs/bootstrap/bootstrap.min.js', false, null, true);

    wp_deregister_script( 'classie' );
    wp_enqueue_script( 'classie', get_template_directory_uri() . '/assets/js/classie.js', false, null, true);

    wp_deregister_script( 'beed' );
    wp_enqueue_script( 'beed', get_template_directory_uri() . '/assets/js/bee3D.min.js', false, null, true);

    wp_deregister_script( 'dmss' );
    wp_enqueue_script( 'dmss', get_template_directory_uri() . '/assets/plugins/switcher/js/dmss.js', false, null, true);

    wp_deregister_script( 'bootstrapselect' );
    wp_enqueue_script( 'bootstrapselect', get_template_directory_uri() . '/assets/plugins/bootstrap-select/js/bootstrap-select.min.js', false, null, true);

    wp_deregister_script( 'owlcarousel' );
    wp_enqueue_script( 'owlcarousel', get_template_directory_uri() . '/assets/plugins/owl-carousel/owl.carousel.min.js', false, null, true);

    wp_deregister_script( 'jquerymagnificpopup' );
    wp_enqueue_script( 'jquerymagnificpopup', get_template_directory_uri() . '/assets/plugins/magnific-popup/jquery.magnific-popup.min.js', false, null, true);

    wp_deregister_script( 'slidebar' );
    wp_enqueue_script( 'slidebar', get_template_directory_uri() . '/assets/plugins/headers/slidebar.js', false, null, true);

    wp_deregister_script( 'header' );
    wp_enqueue_script( 'header', get_template_directory_uri() . '/assets/plugins/headers/header.js', false, null, true);

    wp_deregister_script( 'jqbootstrapvalidation' );
    wp_enqueue_script( 'jqbootstrapvalidation', get_template_directory_uri() . '/assets/plugins/jqBootstrapValidation.js', false, null, true);

    wp_deregister_script( 'contact_me' );
    wp_enqueue_script( 'contact_me', get_template_directory_uri() . '/assets/plugins/contact_me.js', false, null, true);

    wp_deregister_script( 'isotopepkgd' );
    wp_enqueue_script( 'isotopepkgd', get_template_directory_uri() . '/assets/plugins/isotope/isotope.pkgd.min.js', false, null, true);

    wp_deregister_script( 'imagesloaded' );
    wp_enqueue_script( 'imagesloaded', get_template_directory_uri() . '/assets/plugins/isotope/imagesLoaded.js', false, null, true);

    wp_deregister_script( 'jqueryeasypiechart' );
    wp_enqueue_script( 'jqueryeasypiechart', get_template_directory_uri() . '/assets/plugins/rendro-easy-pie-chart/jquery.easypiechart.min.js', false, null, true);

    wp_deregister_script( 'waypoints' );
    wp_enqueue_script( 'waypoints', get_template_directory_uri() . '/assets/plugins/rendro-easy-pie-chart/waypoints.min.js', false, null, true);

    wp_deregister_script( 'scrollreveal' );
    wp_enqueue_script( 'scrollreveal', get_template_directory_uri() . '/assets/plugins/scrollreveal/scrollreveal.min.js', false, null, true);

    wp_deregister_script( 'anime' );
    wp_enqueue_script( 'anime', get_template_directory_uri() . '/assets/plugins/revealer/js/anime.min.js', false, null, true);

    wp_deregister_script( 'scrollmonitor' );
    wp_enqueue_script( 'scrollmonitor', get_template_directory_uri() . '/assets/plugins/revealer/js/scrollMonitor.js', false, null, true);

    wp_deregister_script( 'main' );
    wp_enqueue_script( 'main', get_template_directory_uri() . '/assets/plugins/revealer/js/main.js', false, null, true);

    wp_deregister_script( 'imagesloadedpkgd' );
    wp_enqueue_script( 'imagesloadedpkgd', get_template_directory_uri() . '/assets/plugins/TiltHoverEffects/js/imagesloaded.pkgd.min.js', false, null, true);

    wp_deregister_script( 'anime' );
    wp_enqueue_script( 'anime', get_template_directory_uri() . '/assets/plugins/TiltHoverEffects/js/anime.min.js', false, null, true);

    wp_deregister_script( 'main' );
    wp_enqueue_script( 'main', get_template_directory_uri() . '/assets/plugins/TiltHoverEffects/js/main.js', false, null, true);

    wp_deregister_script( 'wow' );
    wp_enqueue_script( 'wow', get_template_directory_uri() . '/assets/plugins/animate/wow.min.js', false, null, true);

    wp_deregister_script( 'jqueryshuffleletters' );
    wp_enqueue_script( 'jqueryshuffleletters', get_template_directory_uri() . '/assets/plugins/animate/jquery.shuffleLetters.js', false, null, true);

    wp_deregister_script( 'jquerystickykit' );
    wp_enqueue_script( 'jquerystickykit', get_template_directory_uri() . '/assets/plugins/animate/jquery.sticky-kit.js', false, null, true);

    wp_deregister_script( 'typed' );
    wp_enqueue_script( 'typed', get_template_directory_uri() . '/assets/plugins/animate/typed.js', false, null, true);

    // wp_deregister_script( 'jquery.magnific-popup' );
    // wp_enqueue_script( 'jquery.magnific-popup', get_template_directory_uri() . '/assets/js/jquery.magnific-popup.js', false, null, true);

     wp_deregister_script( 'zoomtimelinejs' );
    wp_enqueue_script( 'zoomtimelinejs', get_template_directory_uri() . '/assets/js/zoomtimeline.js', false, null, true);

    wp_deregister_script( 'filter' );
    wp_enqueue_script( 'filter', get_template_directory_uri() . '/assets/js/filter.js', false, null, true);

    wp_deregister_script( 'custom' );
    wp_enqueue_script( 'custom', get_template_directory_uri() . '/assets/js/custom.js', false, null, true);

     wp_deregister_script( 'owl_carousel' );
    wp_enqueue_script( 'owl_carousel', get_template_directory_uri() . '/assets/js/owl.carousel.min.js', false, null, true);

    // wp_deregister_script( 'jquerysliderpro' );
    // wp_enqueue_script( 'jquerysliderpro', get_template_directory_uri() . '/assets/plugins/slider-pro/jquery.sliderPro.min.js', false, null, true);

    /* hypergroup generated Enqueue Scripts End */

        /* hypergroup generated Enqueue Styles Begin */

    wp_deregister_style( 'fontawesomeall' );
    wp_enqueue_style( 'fontawesomeall', get_template_directory_uri() . '/assets/css/all.css', false, null, 'all');

    // wp_deregister_style( 'magnific-popup' );
    // wp_enqueue_style( 'magnific-popup', get_template_directory_uri() . '/assets/css/magnific-popup.css', false, null, 'all');

    wp_deregister_style( 'fontawesomebrands' );
    wp_enqueue_style( 'fontawesomebrands', get_template_directory_uri() . '/assets/css/brands.css', false, null, 'all');

    wp_deregister_style( 'fontawesomesolide' );
    wp_enqueue_style( 'fontawesomesolide', get_template_directory_uri() . '/assets/css/solid.css', false, null, 'all');

    wp_deregister_style( 'beed' );
    wp_enqueue_style( 'beed', get_template_directory_uri() . '/assets/css/bee3D.min.css', false, null, 'all');

     wp_deregister_style( 'zoom' );
    wp_enqueue_style( 'zoom', get_template_directory_uri() . '/assets/css/zoomtimeline.css', false, null, 'all');

    wp_deregister_style( 'master' );
    wp_enqueue_style( 'master', get_template_directory_uri() . '/assets/css/master.css', false, null, 'all');

    wp_deregister_style( 'carousel' );
    wp_enqueue_style( 'carousel', get_template_directory_uri() . '/assets/css/owl.carousel.min.css', false, null, 'all');

    // wp_deregister_style( 'switcher' );
    // wp_enqueue_style( 'switcher', get_template_directory_uri() . '/assets/plugins/switcher/css/switcher.css', false, null, 'all');

    /* hypergroup generated Enqueue Styles End */

    }
    add_action( 'wp_enqueue_scripts', 'hypergroup_enqueue_scripts' );
endif;

function my_custom_sidebar() {
    register_sidebar(
        array (
            'name' => __( 'Custom', 'your-theme-domain' ),
            'id' => 'custom-side-bar',
            'description' => __( 'Custom Sidebar', 'your-theme-domain' ),
            'before_widget' => '<div class="widget-content">',
            'after_widget' => "</div>",
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        )
    );
}
add_action( 'widgets_init', 'my_custom_sidebar' );
/*
 * Resource files included by hypergroup.
 */
/* hypergroup generated Include Resources Begin */

    /* hypergroup generated Include Resources End */
add_theme_support( 'post-thumbnails' );
add_image_size( 'img-blog', 700, 400, true ); 

// function excerpt($limit) {
//       $excerpt = explode(' ', get_the_excerpt(), $limit);
//       if (count($excerpt)>=$limit) {
//         array_pop($excerpt);
//         $excerpt = implode(" ",$excerpt).'...';
//       } else {
//         $excerpt = implode(" ",$excerpt);
//       } 
//       $excerpt = preg_replace('`\[[^\]]*\]`','',$excerpt);
//       return $excerpt;
// }
function my_excerpt_length($length){
return 120;
}
add_filter('excerpt_length', 'my_excerpt_length');

function content($limit) {
  $content = explode(' ', get_the_content(), $limit);
  if (count($content)>=$limit) {
    array_pop($content);
    $content = implode(" ",$content).'...';
  } else {
    $content = implode(" ",$content);
  } 
  $content = preg_replace('/\[.+\]/','', $content);
  $content = apply_filters('the_content', $content); 
  $content = str_replace(']]>', ']]&gt;', $content);
  return $content;
}

remove_filter('the_content', 'wpautop');

function wptp_create_post_type() {

    $labels = array( 
        'name' => __( 'References' ),
        'singular_name' => __( 'reference' ),
        'add_new' => __( 'New reference' ),
        'add_new_item' => __( 'Add new reference' ),
        'edit_item' => __( 'Edit reference' ),
        'new_item' => __( 'New reference' ),
        'view_item' => __( 'View reference' ),
        'search_items' => __( 'Search reference' ),
        'not_found' =>  __( 'No reference Found' ),
        'not_found_in_trash' => __( 'No reference found in Trash' ),
    );

    $args = array(
        'labels' => $labels,
        'has_archive' => true,
        'public' => true,
        'hierarchical' => false,
        'supports' => array(
            'title', 
            'editor', 
            'excerpt', 
            'thumbnail'
        ),
    );
    register_post_type( 'reference', $args );
} 
add_action( 'init', 'wptp_create_post_type' );


function wptp_register_taxonomy() {
    register_taxonomy( 'reference_categorie', array( 'reference'),
        array(
            'labels' => array(
                'name'              => 'Reference Families',
                'singular_name'     => 'Reference Family',
                'search_items'      => 'Search Reference Families',
                'all_items'         => 'All Reference Families',
                'edit_item'         => 'Edit Reference Families',
                'update_item'       => 'Update Reference Family',
                'add_new_item'      => 'Add New Reference Family',
                'new_item_name'     => 'New Reference Family Name',
                'menu_name'         => 'Reference Family',
            ),
            'hierarchical' => true,
            'sort' => true,
            'args' => array( 'orderby' => 'term_order' ),
            'rewrite' => array( 'slug' => 'references' ),
            'show_admin_column' => true
        )
    );
}

add_action( 'init', 'wptp_register_taxonomy' );

function wporg_add_custom_box()
{
    $screens = array('reference', 'wporg_cpt');
    foreach ($screens as $screen) {
        add_meta_box(
            'wporg_box_id',           // Unique ID
            'Informations de chaque site web',  // Box title
            'wporg_custom_box_html',  // Content callback, must be of type callable
            $screen                   // Post type
        );
    }
}

add_action('add_meta_boxes', 'wporg_add_custom_box');

function wporg_custom_box_html($post)
{
    $value = get_post_meta($post->ID, 'clientName', true);
    $value1 = get_post_meta($post->ID, 'urlWebSite', true);
    $value2 = get_post_meta($post->ID, 'WebSiteType', true);
    $value3 = get_post_meta($post->ID, 'createdDate', true);
    $value4 = get_post_meta($post->ID, 'gallery', true);
    $value5 = get_post_meta($post->ID, 'youtube', true);
    ?>

    <label for="clientName">Logo :</label>
    <input type="text" value="<?php echo($value); ?>"  name="clientName" id="clientName">
    <br>
    <label for="urlWebSite">Web Site URL :</label>
    <input type="text"   value="<?php echo($value1); ?>" name="urlWebSite" id="urlWebSite">
    <br>
    <label for="WebSiteType">Catégorie</label>
    <input type="text"  value="<?php echo($value2); ?>"  name="WebSiteType" id="WebSiteType">

    <br>
    <label for="createdDate">Date de création</label>
    <input type="text"  value="<?php echo($value3); ?>"  name="createdDate" id="createdDate">
    <br>
    <label for="gallery">Short code gallery</label>
    <input type="text"  value="<?php echo($value4); ?>"  name="gallery" id="gallery">
    <br>
    <label for="gallery">Lien Youtube</label>
    <input type="text"  value="<?php echo($value5); ?>"  name="youtube" id="youtube">

    <?php  
}
function wporg_save_postdata($post_id)
{
    if (array_key_exists('clientName', $_POST)) {
        update_post_meta(
            $post_id,
            'clientName',
            $_POST['clientName']
        );
    }
    if (array_key_exists('urlWebSite', $_POST)) {
        update_post_meta(
            $post_id,
            'urlWebSite',
            $_POST['urlWebSite']
        );
    }
    if (array_key_exists('WebSiteType', $_POST)) {
        update_post_meta(
            $post_id,
            'WebSiteType',
            $_POST['WebSiteType']
        );
    }
    if (array_key_exists('createdDate', $_POST)) {
        update_post_meta(
            $post_id,
            'createdDate',
            $_POST['createdDate']
        );
    }
    if (array_key_exists('gallery', $_POST)) {
        update_post_meta(
            $post_id,
            'gallery',
            $_POST['gallery']
        );
    }
    if (array_key_exists('youtube', $_POST)) {
        update_post_meta(
            $post_id,
            'youtube',
            $_POST['youtube']
        );
    }
}
add_action('save_post', 'wporg_save_postdata');
add_action('admin_init', 'prfx_add_meta_box', 1);
function prfx_add_meta_box() {

    // add one new metabox on the 'packages' edit screen
    add_meta_box( 
        'prfx_first-metabox', // ID of the metabox
        'Les taches effectuées', // title of the metabox
        'prfx_metabox_callback', // callback function, see below
        'reference', // <--- your post-type slug
        'normal', // context
        'default' // priority
    );
}

function prfx_metabox_callback() {
    global $post;

    // get value of our custom field
    $first_field = get_post_meta($post->ID, 'taches_bd', true);

    // create a nonce for secure saving
    wp_nonce_field( 'prfx_first_nonce', 'prfx_first_nonce' );

    // check if our custom field has content
    if( $first_field ) {
        // if it has content, set the $content so we can display it as value in the field
        $content = $first_field;
    } else {
        // if it has no content, just return an empty value
        $content = '';
    }

    // create a new instance of the WYSIWYG editor
    wp_editor( $content, 'first_custom_editor' , array(
        'wpautop'       => true,
        'textarea_name' => 'taches', // this is the 'name' attribute of our field
        'textarea_rows' => 10,
    ) ); 

}


add_action('save_post', 'prfx_save_meta_box');

function prfx_save_meta_box($post_id) {

    // check our nonce
    if ( ! isset( $_POST['prfx_first_nonce'] ) ||
    ! wp_verify_nonce( $_POST['prfx_first_nonce'], 'prfx_first_nonce' ) )
        return;

    // check for autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
        return;

    // check if user has rights
    if (!current_user_can('edit_post', $post_id))
        return;

    // check if content exists in our custom field
    if ( isset( $_POST['taches'] ) ) {
        $contents = $_POST['taches'];

        // if content exists than update the meta value
        update_post_meta( $post_id, 'taches_bd', $contents );
    }
}

add_action("admin_init", "checkbox_init");

function checkbox_init(){
  add_meta_box("checkbox", "Afficher à la page d'acceuil", "checkbox", "reference", "normal", "high");
  add_meta_box("checkbox_single", "Afficher à la page Single", "checkbox_single", "reference", "side", "high");
}

function checkbox(){
  global $post;
  $custom = get_post_custom($post->ID);
  $field_id = $custom["field_id"][0];

 ?>

  <label>Afficher </label>
  <?php $field_id_value = get_post_meta($post->ID, 'field_id', true);
  if($field_id != null) $field_id_checked = 'checked="checked"'; ?>
    <input type="checkbox" name="field_id" value="yes" <?php echo $field_id_checked; ?> />
  <?php

}
function checkbox_single(){
  global $post;
  $custom_post_id = get_post_custom($post->ID);
  $field_single = $custom_post_id["field_single_id"][0];

 ?>

  <label>Afficher dans single</label>
  <?php $field_id_single_value = get_post_meta($post->ID, 'field_single_id', true);
  if($field_single != null) $filed_id_single = 'checked="checked"'; ?>
    <input type="checkbox" name="field_single_id" value="yes" <?php echo $filed_id_single; ?> />
  <?php

}
// Save Meta Details
add_action('save_post', 'save_details');

function save_details(){
  global $post;

if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
    return $post->ID;
}

  update_post_meta($post->ID, "field_id", $_POST["field_id"]);
  update_post_meta($post->ID, "field_single_id", $_POST["field_single_id"]);
}

function new_excerpt_length($length) {
return 12;
}
add_filter('excerpt_length', 'new_excerpt_length');

add_filter('the_excerpt', 'remove_empty_p', 20, 1);

function remove_empty_p($content){
    $content = force_balance_tags($content);
    return preg_replace('#<p>\s*+(<br\s*/*>)?\s*</p>#i', '', $content);
}

add_action('admin_enqueue_scripts', 'myPlugin_jcf_admin_fix');
function myPlugin_jcf_admin_fix(){
  $screen = get_current_screen();
  if ( in_array($screen->id, array('settings_page_jcf_admin', 'settings_page_jcf_fieldset_index')) ) {
    wp_enqueue_script('jquery-migrate');
  }
}


add_action('wp_head', 'wordpress_frontend_ajaxurl');

function wordpress_frontend_ajaxurl() {
    echo '<script type="text/javascript">
           var ajaxurl = "' . admin_url('admin-ajax.php') . '";
         </script>';
}

function ajax_request() {
 
    // The $_REQUEST contains all the data sent via ajax
    ?>
    <div class="container-fluid">
        <div class="row">
    <?php
    $content = '';
    if ( isset($_REQUEST) ) {
     
        $taxval = $_REQUEST['taxval'];
         

        if ($taxval == "all") {
            $args = array(
            'post_type'=> 'reference',
            'posts_per_page' => 12,
            'order'         => 'DESC',
            'meta_key'     => 'field_id',
            'meta_value'   => 'yes',
            ); 
        }else {
            $args = array(
            'post_type'=> 'reference',
            'posts_per_page' => 12,
            'order'         => 'DESC',
            'tax_query' => array(
                    array(
                        'taxonomy' => 'reference_categorie',
                        'field'    => 'slug',
                        'terms'    => $taxval,
                    ),
                ),
            );
        }
             
            $the_query = new WP_Query( $args );
            $i = 0 ;
            
            if($the_query->have_posts() ) : while ( $the_query->have_posts() ) : $the_query->the_post();
                $field_id_value = get_post_meta($post->ID, 'field_id', true);
                $featured_img_url = get_the_post_thumbnail_url($post->ID,'full');
                $field_site_url = get_post_meta($post->ID, 'urlWebSite', true);
                $field_video_url = get_post_meta($post->ID, 'youtube', true);

            $content .= '<div class="col-mg-4 col-lg-4 col-xl-3">';
            $content .=     '<div class="add_Box">';

            $content .=        '<div class="project_img_holder">';
            $content .=            '<img src="'.$featured_img_url.'" alt="'.get_the_title().'" class="img-responsive">';
            $content .=        '</div>';
            $content .=        '<div class="caption_button text-center">';
                                
                                if ((!empty($field_video_url)) and (strlen($field_site_url) == 0)) {
                                    $field_site_url = $field_video_url;
                                
                                
            $content .=              '<h3><a href="'.$field_site_url.'" target="_blank" rel="noopener nofollow">'.get_the_title().'</a></h3>';
                                
                                }else if ((strlen($field_site_url) == 0) and (empty($field_video_url))) {
                                
            $content .=         '<h3>'. get_the_title(). '</h3>';
                                
                                }else if ((strlen($field_site_url) != 0)) {
                              
            $content .=         '<h3><a href="'.$field_site_url.'" target="_blank" rel="noopener nofollow">'. get_the_title().'</a></h3>';
            
                                }
                                
            $content .=         '</div>';
            $content .=     '</div>';
            $content .=  '</div>';
                     
                        $i++;
                        if ($i == 3) {
                            $content .='</div><div class=\"row\">';
                            $i = 0;
                        }

                     endwhile;
                    endif;

        echo $content;
        
        // If you're debugging, it might be useful to see what was sent in the $_REQUEST
        // print_r($_REQUEST);
     
    }
     
    // Always die in functions echoing ajax content
   die();
   ?>
    </div>
   </div>
<?php
}
 
add_action( 'wp_ajax_ajax_request', 'ajax_request' );
 
// If you wanted to also use the function for non-logged in users (in a theme for example)
add_action( 'wp_ajax_nopriv_ajax_request', 'ajax_request' );

function load_files() {

    // Enqueue javascript on the frontend.
    wp_enqueue_script(
        'example-ajax-script',
        get_template_directory_uri() . '/assets/js/filter-tax.js',
        array('jquery')
    );

    // The wp_localize_script allows us to output the ajax_url path for our script to use.
    wp_localize_script(
        'example-ajax-script',
        'ajax_obj',
        array(
            'ajaxurl' => admin_url( 'admin-ajax.php' ),
            'nonce' => wp_create_nonce('ajax-nonce')
        )
    );

}
add_action( 'wp_enqueue_scripts', 'load_files' );
