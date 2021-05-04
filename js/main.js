$(function () {
    $(document).ready(function () {
        const owl = $("#owl-example");

        owl.owlCarousel({
            loop: true,
            items: 1,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true
        });

        $(".next").click(function () {
            console.log('asd')
            owl.trigger('next.owl.carousel', [600]);
        })
        $(".prev").click(function () {
            owl.trigger('prev.owl.carousel', [600]);
        })
    });
});
