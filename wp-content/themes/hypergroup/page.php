<?php 
/*
Template name : Page
*/
?>
<?php
get_header();
?>
<div class="section-title-page area-bg area-bg_dark area-bg_op_75 parallax">
    <div class="area-bg__inner">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <ol class="breadcrumb">
                        <li><a href="<?php echo get_site_url(); ?>">Accueil</a></li>
                        <li class="active"><?php the_title(); ?></li>
                    </ol>
                    <!-- end breadcrumb-->
                    <h1 class="b-title-page"><?php the_title(); ?></h1>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="content">
		<?php 
		    while ( have_posts() ) : the_post();

		        // Include the page content template.
		        the_content();

		        // End of the loop.
		    endwhile;
		?>
</div>
<?php
get_footer();
?>