(function ($) {
    $(document).ready(function () {
        let sideBar = $('#secondary-left'),
            t = $('#shop-filter__trigger'),
            f = $('#shop-filter')
        let close = t.find('#shop-filter__close'),
            open = close = t.find('#shop-filter__open')
        if (sideBar.length && t.length) {
            const p = sideBar.closest('.hide-for-medium')
            t.on('click', function (e) {
                e.preventDefault()
                p.toggleClass('active')
                f.toggleClass('active')
            })
        }
    })
})(jQuery)