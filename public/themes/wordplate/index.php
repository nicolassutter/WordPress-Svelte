<?php get_header(); ?>

    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <article>
                <header>
                    <h1><?php the_title(); ?></h1>
                </header>

                <?php the_content(); ?>
            </article>
        <?php endwhile;
    else : ?>
        <article>
            <p>Nothing to see.</p>
        </article>
    <?php endif; ?>
    <div id="component" data-post="<?php print_json($post); ?>"></div>
<?php get_footer(); ?>
