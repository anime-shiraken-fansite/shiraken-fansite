$(function () {

    $(window).on('scroll',scrollEvent );
    scrollEvent();

    function scrollEvent() {
        function onHorizonal($target, classes) {
            edit($target, classes, false);
        }
        function onVertical($target, classes) {
            edit($target, classes, true);
        }

        function edit($target, classes, reverse) {
            let isScrolled = scroll > heroImageHeight * 0.7;
            if (reverse) { isScrolled = !isScrolled }

            if (isScrolled) {
                $target.addClass(classes);
            } else {
                $target.removeClass(classes);
                
            }
        }

        heroimage = $("#heroimage")
        let scroll = $(window).scrollTop(), //スクロール位置を取得
            //            triggerTop = $(heroimage).offset().top,  //指定要素のY座標
            heroImageHeight = $(heroimage).height();    //ウィンドウの高さ
        //スクロールする度に判定以上のことをしてるのが気になる
        //---
        //スクロールによって変更を加えるcssは以下に記載
        //---
        // edit($("nav"),"")
        onVertical($("nav"), "sm:absolute");
        //onVertical($("nav ul"), "h-screen");
        //スクロール後
        onHorizonal($("nav"), "sm:fixed sm:w-full ");
        onHorizonal($("nav ul"), "sm:w-full sm:h-auto sm:flex-row");
        onHorizonal($("nav ul li"), "sm:w-fit");
    }
    
    $("#navigation_button").on('click',toggleNavigationMenu);
    function toggleNavigationMenu()
    {
        $("#navigation_wrap").toggleClass(" -translate-x-full");
    } 
});