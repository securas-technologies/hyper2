<?php
/*
Template Name: Modèle page
*/
?>
<?php
get_header();
?>
<!--page title start-->
<section class=" section_singlePage page-title o-hidden text-center grey-bg bg-contain" >
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-12">
        <h1 class="title"><?php the_title(); ?></h1>
        <?php
        $categories = get_the_terms( $post->ID, 'reference_categorie' );
        $services = get_the_terms( $post->ID, 'services_categorie' );
        $client_name = get_post_meta($post->ID,'clientName',true);
        $client_web_site = get_post_meta($post->ID,'urlWebSite',true);
        $web_site_type = get_post_meta($post->ID,'WebSiteType',true);
        $relased_date = get_post_meta($post->ID,'createdDate',true);
        
        
        $terms = get_terms($categories[0]->term_id);
        $url = get_term_link($categories[0]->slug, 'reference_categorie');
        ?>
        <nav aria-label="breadcrumb" class="page-breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="<?php echo get_site_url(); ?>">Accueil</a>
          </li>
          <li class="breadcrumb-item"><a href="<?php echo($url) ?>"><?php echo esc_html( $categories[0]->name ); ?></a></li>
          <li class="breadcrumb-item"><?php the_title(); ?></li>
        </ol>
      </nav>
    </div>
  </div>
</div>
<div class="page-title-pattern"><img class="img-fluid" src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/bg/06.png" alt=""></div>
</section>
<!--page title end-->
<?php
remove_filter( 'the_content', 'wpautop' );
remove_filter( 'the_excerpt', 'wpautop' );
?>
<!--Start about content area-->
<div class="page-content">
<!--project start-->
<section class="singlePageRefeernces  o-hidden" data-bg-img="images/pattern/02.png">
  <div class="container">
    <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
    <!--service details start-->
    
    <section data-bg-img="images/pattern/02.png" style="background-image: url(&quot;images/pattern/02.png&quot;);">
      <div class="container">
        <div class="row align-items-center">
          
          <div class="col-lg-6 col-md-12 md-mt-5 order-lg-1">
            <div class="section-title">
              <h6><?php echo $web_site_type;  ?></h6>
              <ul class="portfolio-meta list-unstyled">
                <li class="mb-4"><i class="flaticon-user"></i>
                  <span> Client :  <?php echo $client_name ?></span></li>
                  <li class="mb-4"><i class="flaticon-user"></i>
                    <span> Date de création :  <?php echo $relased_date ?></span></li>
                  </ul>
                </div>
                <p class="text-black"><?php the_content(); ?></p>
                <ul class="custom-li list-unstyled list-icon-2 d-inline-block">
                  <?php foreach ($services as $service): ?>
                  <li><?php echo $service->name; ?></li>
                  <?php endforeach; ?>
                </ul>
                <div class="buttons_single_page">
                  <a class="btn_Single btn_Single-1"  target="_blank" href="<?php echo 'http://'. $client_web_site ;?>">
                    <span>Découvrir Le Site</span>
                  </a>
                  <a class="btn_Single btn_Single-1" href="#">
                    <span>Demande De Devis</span>
                  </a>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 order-lg-12">
                <img class="img-fluid w-100" src="http://41.228.16.1/hypermedia19/wp-content/uploads/2019/02/responsive-garage-tek.png" alt="">
              </div>
              <div class="particles-js particles_single_page" id="particles-js"></div>
            </div>
          </div>
        </section>
        <!--service details end-->
        <?php endwhile; ?>
      </div>
    </section>
    <!--project end-->
  </div>
</div>
<!--End about content area-->
<?php
get_footer();
?>