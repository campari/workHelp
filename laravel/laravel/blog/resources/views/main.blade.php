@include('partials._head')
<body>

    <!-- NavBar -->
    @include('partials._nav')

    <div class="container">
        @yield('content')
        <hr>
        @yield('partials._footer')

    </div> <!-- end of container -->    

    @yield('partials._javascript')
    @yield('scripts')
</body>
</html>
