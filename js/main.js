
$(function () {

    $('.btn').on('click', function () {
        $('.block').removeClass('animate')
        setTimeout(() => {
            $('.block').addClass('animate')
        })
    })

})