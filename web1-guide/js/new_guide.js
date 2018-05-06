$(function () {  
    // 定义导航栏展示区的宽度
    var navShow_width = window.innerWidth - 71,
        current3 = $(".navList_item")[2].offsetLeft,
        current4 = $(".navList_item")[3].offsetLeft,
        current5 = $(".navList_item")[4].offsetLeft;

    // 定义swiper对象
    var swiper1, swiper2, swiper3, swiper4, swiper5;
    swiper1 = new Swiper('.swiperTab_item1', {
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
        currentSwiper(currentTab, currentId);
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
        currentSwiper(currentTab, thisId);
        
    })

    // function： tab切换，清除上一个swiper对象，并创建新的swiper
    function createSwiper(index) {  
        if (swiper1) {
            swiper1.destroy();
            swiper1 = undefined;
        } else if (swiper2) {
            swiper2.destroy();
            swiper2 = undefined;
        } else if (swiper3) {
            swiper3.destroy();
            swiper3 = undefined;
        } else if (swiper4) {
            swiper4.destroy();
            swiper4 = undefined;
        } else if (swiper5) {
            swiper5.destroy();
            swiper5 = undefined;
        }
        var swiper = new Swiper('.swiperTab_item' + index, {
            direction: 'vertical',
            initialSlide: 0
        });
        return swiper;
    }

    function currentSwiper(thisTab, index) {  
        thisTab.css({ "display": "block" });
        thisTab.siblings(".swiper-container").css({ "display": "none" });
        switch (index) {
            case "1":
                swiper1 = createSwiper(index);
                break;
            case "2":
                swiper2 = createSwiper(index);
                break;
            case "3":
                swiper3 = createSwiper(index);
                break;
            case "4":
                swiper4 = createSwiper(index);
                break;
            case "5":
                swiper5 = createSwiper(index);
                break;
        }
    }

    /**
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

})