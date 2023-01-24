$('form').on('submit', function (evt) {
    evt.preventDefault();

    const $title = $('#title').val();
    const $rating = $('#rating').val();

    $('input').val('');
    $('#title').focus();

    if (!$.isNumeric($rating)) { return; }
    if ($rating < 0 || $rating > 10) { return; }
    if ($title.length < 2) { return; }


    $('ul').append($('<li>').text(`${$title} - ${$rating}`).append($('<button>').text('X').on('click', function (evt) {
        $(evt.target).parent().remove();
    })));
});

