$(function () {  
    // 点击下拉箭头，展示所有列表项
    $(".nav_arrow").on("touchstart", function () {  
        $("#bgc").fadeIn();
        // 获取当前项，并渲染相应的nav_selectList中的item
        for (var i = 0; i < $(".navList_item").length; i++) {
            var $this = $($(".navList_item")[i]);
            var activeId = '';
            if ($this.hasClass("active")) {
                activeId = $this.attr("data-id");
                $($(".navSelected_item")[i]).addClass("current");
                $($(".navSelected_item")[i]).siblings(".navSelected_item").removeClass("current"); 
            }
        }
    })
    // 点击nav_selectList中某一项，关闭列表，并改变nav_lists中相应的active项
    $(".navSelected_item").on("touchstart", function () {  
        $(this).addClass("current");
        $(this).siblings(".navList_item").removeClass("current"); 
        $("#bgc").fadeOut();
        var currentId = $(this).attr("data-id");
        for (var index = 0; index < $(".navList_item").length; index++) {
            var $this = $($(".navList_item")[index]);
            if ($this.attr("data-id") == currentId) {
                $this.addClass("active");
                $this.siblings(".navList_item").removeClass("active");
            }
        }
    })
    // 点击空白处，关闭点击nav_selectList
    $("#bgc").on("touchstart", function () {  
        $(this).fadeOut();
    })
    // 点击导航栏选项
})