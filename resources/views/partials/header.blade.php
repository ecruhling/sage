<a class="sr-only sr-only-focusable" href="#content" id="skip-to-content">Skip To Main Content</a>

<nav class="navbar navbar-expand-lg" id='navbar'>
  <a class="navbar-brand p-0 d-block" href="{{ home_url('/') }}">
    <span class='sr-only'>{{ get_bloginfo('name', 'display') }}</span>
  </a>
  <button class="navbar-toggler p-0 m-0 border-0 collapsed position-absolute" type="button" data-toggle="collapse"
          data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false"
          aria-label="Toggle navigation">
  </button>
  <div class="collapse navbar-collapse" id="navbar-collapse">
    <div id="navbar-collapse-container" class="w-100">
      @if (has_nav_menu('primary_navigation'))
        {!! wp_nav_menu( $nav_arguments->primary ) !!}
      @endif
    </div>
  </div>
</nav>
