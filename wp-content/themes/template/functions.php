<?php

function collectiveray_theme_scripts_function() {
    wp_enqueue_script( 'js-file', get_template_directory_uri() . '/js/main.js');
  }
  add_action('wp_footer','collectiveray_theme_scripts_function');


?>