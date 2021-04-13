// jQuery plugin to load content in modal when clicking
// on links with the 'load-in-modal' class

function loadInModal()
{

// variables
    const $modalBody = $('.content-modal-body');
    const $modalDialog = $('#content-modal');
    const $loading = $('#loading');

    $(document).on('click', 'a.load-in-modal, li.load-in-modal a.nav-link', function (e) {
        e.preventDefault();
        $loading.addClass('show');
        if ($(this).hasClass('load-raster-image-in-modal')) {
            const $data = '<img src="' + $(this).attr('href') + '" alt="' + $(this).data('alt') + '" class="' + $(this).data('class') + '" />'
            $modalDialog.one('shown.bs.modal', function () {
            }).modal('show');
            $modalBody.html($data).promise().done(function () {
                  $loading.removeClass('show');
            });
        } else {
            $.ajax({
                url: this.href,
                async: true,
                cache: false,
                success: function (data) {
                    let $data = $(data).find('.main');
                    $modalDialog.one('shown.bs.modal', function () {
                    }).modal('show');
                    $modalBody.html($data).promise().done(function () {
                        $loading.removeClass('show');
                    });
                },
            });
        }
    });

}

export default loadInModal;

