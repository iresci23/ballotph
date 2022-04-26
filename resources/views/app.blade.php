<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Free Sample Ballot Generator for May 9, 2022 Philippine Elections. No need to Sign-up!">
        <meta name="robots" content="index, follow">
        <meta property="og:title" content="Sample Ballot Generator">
        <meta property="og:description" content="Free Sample Ballot Generator for May 9, 2022 Philippine Elections. No need to Sign-up!">
        <meta property="og:image" content="/images/SBGLOGO.png">
        <meta property="og:url" content="phballotgenerator.com">
        <meta property="og:site_name" content="Sample Ballot Generator">

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="theme-color" content="#ffffff">

        <title>Sample Ballot Generator for May 9, 2022 Philippine Elections</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;700&display=swap" rel="stylesheet" crossOrigin="anonymous">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

        <!-- Scripts -->
        @routes
        <script src="{{ mix('js/app.js') }}" defer></script>

        @inertiaHead

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=<?php echo env('GOOGLE_TRACKING_ID'); ?>"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', "<?php echo env('GOOGLE_TRACKING_ID'); ?>");
        </script>
    </head>
    <body class="gradient leading-relaxed flex flex-col">
        @inertia

        @env ('local')
            <script src="http://localhost:8080/js/bundle.js"></script>
        @endenv
    </body>
</html>
