<?php get_header(); ?>
<div class="section-title-page area-bg area-bg_dark area-bg_op_75 parallax">
    <div class="area-bg__inner">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <ol class="breadcrumb">
                        <li><a href="<?php echo get_site_url(); ?>">Accueil</a></li>
                        <li><a href="https://hypergroup.com.tn/category/blog/">Blog></a></li>
                        <li class="active"><?php the_title();?></li>
                    </ol>
                    <!-- end breadcrumb-->
                    <h1 class="b-title-page blog-title"><?php the_title(); ?></h1>
                </div>
            </div>
        </div>
    </div>
</div>
 <section class="blog_single_page">
	<div class="container">
		<div class="row">
			<?php if (have_posts()) : ?>
			<?php while (have_posts()) : the_post();
				$url_post = get_the_post_thumbnail_url(get_the_id(),'full');
			?>

			<div class="col-md-12 text-justify">
				<main class="l-main-content">
                    <div class="posts-group posts-group_pdg-btm_sm">
                        <article class="b-post b-post-full clearfix">
                            <div class="entry-media single">
                                <img class="img-responsive" src="<?php echo $url_post; ?>" alt="<?php the_title(); ?>">
                            </div>
                            <div class="entry-main">
                                <div class="entry-meta"><span class="entry-meta__item"><i class="fas fa-user"></i>Publié par : Webmaster Hypergroup</span>
                                <i class="far fa-calendar-alt"></i> <?php echo the_date(); ?>    
                                </div>
                                <div class="entry-header">
                                    <div class="ui-decor-1"></div>
                                </div>
                                <div class="entry-content">
                                    <?php the_content(); ?>
                                </div>
                            </div>
                        </article>
                        <!-- end .section-reply-form -->
                    </div>
                </main>
			</div>
            <!-- <div class="col-md-4 sidebar">
                <h2>Articles récents</h2>
                <?php
                    $args = array(
                        'post_type' => 'post',
                        'post_status' => 'publish',
                        'category_name ' => 'blog',
                        'cat' => '77',
                        'posts_per_page' => 5,
                        'post__not_in'   => array(get_the_ID())
                    );
                    $arr_posts = new WP_Query( $args );
                     
                    if ( $arr_posts->have_posts() ) :
                     
                        while ( $arr_posts->have_posts() ) :
                            $arr_posts->the_post();
                            $url_post = get_the_post_thumbnail_url(get_the_id(),'thumbnail',false);
                            ?>
                            <div class="row">
                                <div class="col-md-4">
                                    <img class="img-responsive w65" src="<?php echo $url_post; ?>" alt="<?php the_title(); ?>">
                                </div>
                                <div class="col-md-8">
                                    <h3 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                                </div>
                            </div>
                            <?php
                        endwhile;
                    endif; // end of the loop. 
                    wp_reset_postdata();
                    ?>
            </div> -->

            <?php endwhile; ?>
            <?php endif; ?>
            <?php
            $postUrl = 'http' . ( isset( $_SERVER['HTTPS'] ) ? 's' : '' ) . '://' . "{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}"; ?>         
            <div class="share-button-wrapper">
                Partager sur | 
                <a target="_blank" class="share-button share-facebook" href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $postUrl; ?>" title="Share on Facebook"><i class="fab fa-facebook-f"></i></a>
                <a target="_blank" class="share-button share-googleplus" href="https://www.linkedin.com/sharing/share-offsite/?url={<?php echo $postUrl; ?>}" ><i class="fab fa-linkedin-in"></i></a>
                <a href="https://twitter.com/home?status=<?php echo $postUrl; ?>" class="share-button share-tweeter" target="_blank"><i class="fab fa-twitter"></i></a>
            </div>
		</div>
	</div>
</section>
<?php get_footer(); ?>