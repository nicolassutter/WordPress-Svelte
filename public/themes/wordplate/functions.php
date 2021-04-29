<?php

add_action('after_setup_theme', function () {
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');

    register_nav_menus([
        'navigation' => __('Navigation'),
    ]);
});

/**
 * @param object $data The object to parse to JSON
 */
function get_json($data) {
    if ($data) {
        return esc_html( json_encode($data) );
    }
}

/**
 * @param object $data The object to parse to JSON and to print
 */
function print_json($data) {
    echo get_json($data);
}
