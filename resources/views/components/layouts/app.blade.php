<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>{{ $title ?? 'Page Title' }}</title>
        @livewireStyles
        @vite(['resources/css/app.css','resources/js/app.js'])
        @include('components.layouts.header')
        @include('components.layouts.nav')
    </head>
    <body>
    <main class="p-4 md:ml-64 h-auto pt-20">
        {{ $slot }}
    </main>
{{--        @livewireScripts--}}
        @livewireScriptConfig
    @stack('scripts')
    </body>
</html>
