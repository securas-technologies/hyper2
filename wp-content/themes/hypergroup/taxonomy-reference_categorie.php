<?php
/*
Template Name: taxonomy reference
*/
?>
<?php
get_header();
?>
<?php

  $term = get_queried_object();
  $args = array(
      'post_type' => 'reference',
      'reference_categorie' => $term->slug,
      'posts_per_page' => -1
  );
  $query = new WP_Query( $args );

?>
<!--page title start-->
<div class="section-title-page area-bg area-bg_dark area-bg_op_75 parallax">
    <div class="area-bg__inner">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <!-- end breadcrumb-->
                    <?php
                    if(ICL_LANGUAGE_CODE == 'fr'){ 
                    ?>
                    <ol class="breadcrumb">
                        <li><a href="<?php echo get_site_url(); ?>">Accueil</a></li>
                        <li class="active"><?php echo($term->name) ?></li>
                    </ol>
                    <h1 class="b-title-page">Nos références : <?php echo($term->name) ?></h1>
                    <?php
                    }
                    elseif (ICL_LANGUAGE_CODE == 'en') {
                    ?>
                    <ol class="breadcrumb">
                        <li><a href="https://hypergroup.com.tn/?lang=en">Home</a></li>
                        <li class="active"><?php echo($term->name) ?></li>
                    </ol>
                    <h1 class="b-title-page">Our works : <?php echo($term->name) ?></h1>
                    <?php
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>

<!--page title end-->
<?php
remove_filter( 'the_content', 'wpautop' );
remove_filter( 'the_excerpt', 'wpautop' );
?>
<!--Start about content area-->
<div class="page-content">

<!--project start-->

<section class=" ReferencePage" data-bg-img="images/pattern/02.png">
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12 col-md-12">
        <div class="grid columns-3 no-gutters row popup-gallery">
          <div class="grid-sizer"></div>
              <div class="row">
              <?php if ($query->have_posts()) { 
                $i = 0 ;
                ?>

                <?php while ( $query->have_posts() ) : $query->the_post(); ?>
                  <?php
                    $featured_img_url = get_the_post_thumbnail_url($post->ID, 'full');
                    $link = get_post_meta(get_the_ID(), 'urlWebSite', true);
                    $video = get_post_meta(get_the_ID(), 'youtube', true);
                  ?>
                  <div class="grid-item cat3 col-lg-3">
                    <div class="portfolio-item">
                      <?php
                      if (!empty($video)) {
                         ?>
                         <a class="popup-youtube" href="<?php echo $video; ?>"><img src="<?php echo($featured_img_url) ?>" alt="" ></a>
                      <?php
                      }else{
                      ?>
                      <a class="popup_link" href="<?php echo($featured_img_url) ?>"><img class="image-link" src="<?php echo($featured_img_url) ?>" class="img-fluid" alt="" ></a>
                      <?php
                      }
                      ?>
                      <div class="portfolio-title">
                        <?php
                        if (!empty($link)) {
                        ?>
                          <h3><a href="<?php echo $link; ?>" target="_blank" rel="noopener"><?php the_title(); ?></a></h3>
                          <?php
                          if(ICL_LANGUAGE_CODE == 'fr'){ 
                          ?>
                          <a class="visite" href="<?php echo $link; ?>" target="_blank" rel="noopener">Voir <i class="fas fa-long-arrow-alt-right"></i></a>
                          <?php
                          }
                          elseif (ICL_LANGUAGE_CODE == 'en') {
                          ?>
                          <a class="visite" href="<?php echo $link; ?>" target="_blank" rel="noopener">Visit <i class="fas fa-long-arrow-alt-right"></i></a>
                          <?php
                          }
                          ?>
                        <?php
                        }else{
                        ?>
                          <h3><?php the_title(); ?></h3>
                        <?php
                        }
                        ?>
                        
                      </div>
                    </div>
                  </div>
                  
                  <?php
                  $i++;
                  if ($i == 3) {
                    echo "</div><div class='row'>";
                    $i = 0;
                  }

                  ?>
                <?php
                endwhile;
              }
              wp_reset_postdata();
              ?>
        </div>
      </div>
    </div>
  </div>
</section>

<!--project end-->

</div>
</div>
<!--End about content area-->
<?php
get_footer();
?>
