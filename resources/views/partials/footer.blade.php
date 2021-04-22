<footer class="content-info">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        @if (!empty($site_information->address))
          <address class="mb-0">
            @if (!empty($site_information->address_link))
              <a href="{{ $site_information->address_link }}" target="_blank" rel="noopener">
                @endif
                {!! nl2br($site_information->address) !!}
                @if (!empty($site_information->address_link))
              </a>
            @endif
          </address>
        @endif
        @if (!empty($site_information->phone))
          <a href="tel:{!! $site_information->phone !!}">{!! $site_information->phone !!}</a><br>
        @endif
        @if (!empty($site_information->email))
          <a href="mailto:{!! antispambot($site_information->email, 1) !!}">{!! $site_information->email !!}</a>
        @endif
        <p class="copyright">
          &copy; {{ date('Y') }} {{ get_bloginfo('name', 'display') }} | All Rights Reserved | <a class="load-in-modal"
                                                                                                  href="/privacy-policy">Privacy
            Policy</a>
        </p>
      </div>
    </div>
  </div>
</footer>
