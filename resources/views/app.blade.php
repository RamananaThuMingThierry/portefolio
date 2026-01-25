<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="{{ asset('logo/logo.png') }}">
    <title inertia>{{ config('app.name', 'AntaTech-Solution') }}</title>
    @include('layouts.styles')
    @stack('styles')
</head>
<body>
    @yield('content')

    @include('layouts.scripts')
    @stack('scripts')
</body>
</html>
