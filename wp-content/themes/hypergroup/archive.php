<?php
/* Template Name: Archive Page Custom */
get_header(); ?>
<div class="section-title-page area-bg area-bg_dark area-bg_op_75 parallax">
    <div class="area-bg__inner">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <ol class="breadcrumb">
                        <li><a href="<?php echo get_site_url(); ?>">Accueil</a></li>
                        <li class="active">Blog</li>
                    </ol>
                    <!-- end breadcrumb-->
                    <h1 class="b-title-page">Nos dernières blogs</h1>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container">
            <div class="row">
                <div class="col-md-12">
                    <main class="l-main-content">
                        <div class="posts-group">
                        	<?php
                        	$args = array(
							    'post_type' => 'post',
							    'post_status' => 'publish',
							    'category_name ' => 'blog',
							    'cat' => '77',
							    'posts_per_page' => -1,
							);
							$arr_posts = new WP_Query( $args );
							 
							if ( $arr_posts->have_posts() ) :
							 
							    while ( $arr_posts->have_posts() ) :
							        $arr_posts->the_post();
							        $url_post = get_the_post_thumbnail_url(get_the_id(),'full');
							        ?>
		                            <section class="b-post-full b-post clearfix scrollreveal">
                                        <div class="row">
                                            <div class="col-md-6">
        		                                <div class="entry-media">
                                                    <div class="img-post">
        		                                    <img class="img-responsive w65" src="<?php echo $url_post; ?>" alt="<?php the_title(); ?>">
                                                    </div>
        		                                    <div class="entry-date bg-primary"><span class="entry-date__number"><?php echo get_the_date('d') ; ?></span><?php echo  get_the_date('M') ; ?>
        		                                    </div>
        		                                </div>
                                            </div>
                                            <div class="col-md-6">
        		                                <div class="entry-main">
        		                                    <div class="entry-meta"><span class="entry-meta__item"><i class="fas fa-user"></i>Publié par:Webmaster Hypergroup</span>
                                                    <i class="far fa-calendar-alt"></i> <?php echo the_date(); ?>    
                                                    </div>
        		                                    <div class="entry-header">
        		                                        <div class="ui-decor-1"></div>
        		                                        <h2 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
        		                                    </div>
        		                                    <div class="entry-content">
        		                                        <p><?php the_excerpt(); ?></p>
        		                                    </div>
        		                                    <div class="entry-footer"><a class="btn btn-default" href="<?php the_permalink(); ?>">Lire la suite<i class="icon fa fa-long-arrow-right"></i></a>
                                                        <?php
                                                        $postUrl = 'http' . ( isset( $_SERVER['HTTPS'] ) ? 's' : '' ) . '://' . "{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}"; 
                                                        ?>         
                                                        <div class="share-button-wrapper">
                                                            Partager sur 
                                                            <a target="_blank" class="share-button share-facebook" href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $postUrl; ?>" title="Share on Facebook"><i class="fab fa-facebook-f"></i></a>
                                                            <a target="_blank" class="share-button share-googleplus" href="https://www.linkedin.com/sharing/share-offsite/?url={<?php echo $postUrl; ?>}" ><i class="fab fa-linkedin-in"></i></a>
                                                            <a href="https://twitter.com/home?status=<?php echo $postUrl; ?>" class="share-button share-tweeter" target="_blank"><i class="fab fa-twitter"></i></a>
                                                        </div>
                                                    </div>
        		                                </div>
                                            </div>
		                            </section>

                            <?php endwhile;
                            endif; // end of the loop. 
                            wp_reset_postdata();
                        	?>
                            <!-- end .post-->
                            <!-- <div class="text-center"><a class="page-link border-b_prim" href="blog-main.html">prev</a>
                                <ul class="pagination">
                                    <li class="pagination__title">pages</li>
                                    <li><a href="#">1</a></li>
                                    <li class="active"><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                </ul><a class="page-link border-b_prim" href="blog-main.html">next</a>
                            </div> -->
                        </div>
                    </main>
                </div>
            </div>
        </div>
<?php get_footer(); ?>