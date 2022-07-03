$(function () {
    $(window).on('scroll', function () {
        function edit($target, classes) {
            if (scroll > heroImageHeight * 0.7) {
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
        // edit($("header"),"")
        edit($("header ul"), "flex");




    });
});