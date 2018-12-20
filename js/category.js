
$(function () {
    // 一级
    $.ajax({
        url: '/category/queryTopCategory',
        success: function (res) {
            var htmlstr = template('tmp1', res);
            // console.log(htmlstr);
            $(".lt_main_left ul").html(htmlstr);
        }
    })
    render(1);
    // 二级菜单
    function render(id) {
        $.ajax({
            url: '/category/querySecondCategory',
            data: {
                id: id
            },
            dataType: 'json',
            success: function (res) {
                var htmlstr = template('tmp2', res);
                $(".lt_main_right ul").html(htmlstr);
            }
        })
    }


    // 注册点击事件
    $(".lt_main_left ul").on('click', 'li', function () {
        // console.log();
        $(".lt_main_left ul li").removeClass('now');
        $(this).addClass('now');
        var id = $(this).data('id');
        render(id);
    })

})
