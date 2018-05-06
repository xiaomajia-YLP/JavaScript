$(function () {
    'use strict'
    // 定义导航栏展示区的宽度
    var navShow_width = window.innerWidth - 71,
        current3 = $(".navList_item")[2].offsetLeft,
        current4 = $(".navList_item")[3].offsetLeft,
        current5 = $(".navList_item")[4].offsetLeft;

    var swiper = new Swiper('.swiper-container', {
        observer: true, //修改swiper自己或子元素时，自动初始化swiper  
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        direction: 'vertical'
    });

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
                getOffsetLeft($this, currentId);
            }
           
        }
        var currentTab = $($(".swiper-container")[parseInt(currentId) - 1]);
        // currentTab.css({
        //     "display": "block"
        // });
        // currentTab.siblings(".swiper-container").css({
        //     "display": "none"
        // });
        toggleTab(currentTab);
    })
    // 点击空白处，关闭点击nav_selectList
    $("#bgc").on("touchstart", function () {  
        $(this).fadeOut();
    })
    // 点击导航栏选项，切换对应的active并且切换对应的tab栏
    $(".navList_item").on("touchstart", function(){
        $(this).addClass("active").siblings(".navList_item").removeClass("active");
        var thisId = $(this).attr("data-id");
        var currentTab = $($(".swiper-container")[parseInt(thisId) - 1]);
        // currentTab.css({
        //     "display": "block"
        // });
        // currentTab.siblings(".swiper-container").css({
        //     "display": "none"
        // });
        toggleTab(currentTab);
    })

    /** 2018.05.07 v1.5.0
     * 设置nav区域随着每个当前项对应的offsetleft
     * @param {jQuery} ele     当前li元素(jquery对象)
     * @param {Number} index    当前项的data-id
     */
    function getOffsetLeft(ele, index) {  
        // 导航栏展示区宽度：navShow_width
        var currentLeft = ele.offset().left + ele[0].offsetWidth;
        if (currentLeft <= navShow_width) {
            $(".nav_lists").offset({ left: 0 });
        } else {
            // current -- 当前项的初始offsetleft
            var current = 0;
            if (index == 3) {
                current = current3;
            } else if (index == 4) {
                current = current4;
            } else {
                current = current5;
            }
            $(".nav_lists").offset({ left: (navShow_width - current - ele[0].offsetWidth) });
        }
    }


    /**  2018.05.07 v1.5.0
     * tab栏切换效果 + swiper回归第一页
     * @param {jQuery} currentTab     当前轮播图容器(jquery对象)
     */
    function toggleTab(currentTab) {
        currentTab.css({
            "display": "block"
        });
        currentTab.siblings(".swiper-container").css({
            "display": "none"
        });
        currentTab.find(".swiper-wrapper").css({
            "transform": "translate3d(0px, 0px, 0px)"
        });

    }

})