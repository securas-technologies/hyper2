<?php 
/*
Template Name: filter
*/
?>
<?php
get_header();
?>
<div class="section-default" id="ref">
    <div class="row">
        <div class="col-md-12 text-center">
            <div class="ui-wrap-title-center">
                <div class="name">
                    <?php _e( 'La tendance du', 'hypergroup' ); ?> 
                    <strong><?php _e( 'digitale', 'hypergroup' ); ?></strong>
                </div>
                <h2 class="title-style-1"><?php _e( 'Nos réalisations', 'hypergroup' ); ?></h2>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-offset-8 col-lg-4">
            <div class="text-right select">

                <select class="form-select" id="tax-filter" aria-label="Default select example">

                  <option selected>Choisir Un service</option>
                    <?php 
                    $terms = get_terms([
                        'taxonomy' => 'reference_categorie',
                        'hide_empty' => false,
                    ]);
                    foreach ($terms as $term){
                    ?>
                    
                        <option value="<?= $term->slug; ?>" id="<?= $term->slug; ?>"><?= $term->name ; ?></option>
                    <?php 
                    }
                    ?>
                </select>
            </div>
        </div>
    </div>
    <div class="container-fluid" id="references-items">
        <div class="row">

                <!--Gallery Item-->
                    <?php  $args = array(
                        'post_type'=> 'reference',
                        'posts_per_page' => 12,
                        'order'         => 'DESC',
                        'meta_key'     => 'field_id',
                        'meta_value'   => 'yes',
                        );     
                    $the_query = new WP_Query( $args );
                    $i = 0 ;
                    
                    if($the_query->have_posts() ) : while ( $the_query->have_posts() ) : $the_query->the_post();
                        $field_id_value = get_post_meta($post->ID, 'field_id', true);
                        $featured_img_url = get_the_post_thumbnail_url($post->ID,'full');
                        $field_site_url = get_post_meta($post->ID, 'urlWebSite', true);
                        $field_video_url = get_post_meta($post->ID, 'youtube', true);
                    ?>
                    <div class="col-mg-4 col-lg-4 col-xl-3">
                        <div class="add_Box">

                             <div class="project_img_holder">
                              <img src="<?php echo ($featured_img_url); ?>" alt="<?php echo the_title(); ?>" class="img-responsive">
                            </div>
                              <div class="caption_button text-center">
                                
                                <?php
                                if ((!empty($field_video_url)) and (strlen($field_site_url) == 0)) {
                                    $field_site_url = $field_video_url;
                                
                                ?>
                                <h3><a href="<?php echo $field_site_url; ?>" target="_blank" rel="noopener nofollow"><?php echo the_title(); ?></a></h3>
                                <?php
                                }else if ((strlen($field_site_url) == 0) and (empty($field_video_url))) {
                                ?>
                                <h3><?php echo the_title(); ?></h3>
                                <?php
                                }else if ((strlen($field_site_url) != 0)) {
                                ?>
                                <h3><a href="<?php echo $field_site_url; ?>" target="_blank" rel="noopener nofollow"><?php echo the_title(); ?></a></h3>
                                <?php
                                }
                                ?>
                              </div>
                        </div>
                    </div>
                    <?php 
                        $i++;
                        if ($i == 3) {
                            echo "</div><div class=\"row\">";
                            $i = 0;
                        }

                     endwhile; ?>
                    <?php endif ?>
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <div class="ui-wrap-title-center">
                                <div class="name">
                                    Découvrez nos autres 
                                    <strong>réalisations</strong>
                                </div>
                            </div>
                        </div>
                        <div class="links-references">
                            <ul class="links-ref-list">
                                <li><a href="https://hypergroup.com.tn/references/site-web/">Développement site web</a></li>
                                <li><a href="https://hypergroup.com.tn/references/design-graphique/">Création et impression graphique</a></li>
                                <li><a href="https://hypergroup.com.tn/references/audiovisuelle/">Production Audiovisuelle</a></li>
                                <li><a href="https://hypergroup.com.tn/references/community-management/">Community management</a></li>
                            </ul>
                        </div>
                    </div>
        </div>
    </div>
</div>
<?php
get_footer();
?>