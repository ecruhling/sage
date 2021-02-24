<footer class="content-info">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        @if (!empty($site_information->phone))
          <a href="tel:{!! $site_information->phone !!}">{!! $site_information->phone !!}</a><br>
        @endif
        @if (!empty($site_information->email))
          <a href="mailto:{!! antispambot($site_information->email, 1) !!}">{!! $site_information->email !!}</a>
        @endif
      </div>
    </div>
  </div>
</footer>
