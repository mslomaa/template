<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php get_bloginfo('name')?> </title>
    <?php wp_head() ?>
    <link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>" type="text/css" media="screen" />
    
</head>
<body>
    <nav class="navbar">
        <div class="navbar-logo">
            <div class="navbar-logo-box">
                <div class="navbar-square-two"></div>
                <div class="navbar-square-one"></div>
            </div>
            <div class="navbar-logo-text">
                <div class="navbar-text-one">twoje</div>
                <div class="navbar-text-two">finanse</div>
            </div>
            <div class="navbar-text-three">ubezpieczenia</div>
        </div>
        <ul class="navbar-menu">
            <li><a href="">o nas</a></li>
            <li><a href="">oferta</a></li>
            <li><a href="">towarzystwa ubezpieczeń</a></li>
            <li><a href="">dołącz do nas</a></li>
            <li><a href="">przydatne materiały</a></li>
            <li><a href="">oddziały</a></li>
        </ul>
    </nav>
    <div class="container">
        <div class="container-header">
            <h1 class="container-title"><?php get_bloginfo('name')?></h1>
        </div>