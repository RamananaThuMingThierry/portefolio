<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="{{ asset('logo/logo.png') }}" />
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap"
      rel="stylesheet"
    />
    <title inertia>{{ config('app.name', 'AntaTech Solutions') }}</title>
    @viteReactRefresh()
    @vite('resources/js/app.jsx')
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
