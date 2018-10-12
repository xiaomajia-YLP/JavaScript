<template>
    <div class='app-container'>
        <!-- header -->
        <base-header :title="'渐进式加载图片'"></base-header>
        <!-- container -->
        <div class="conts">
            <h3 class="info-title">方法一</h3>
            <p class="info">用低分辨率的模糊图片来做预览图，代替以前懒加载图片时用的 logo 占位图。预览图平均 2KB~3KB</p>
            <div class="info-course">
                <p class="course-list">1. 在文档流中嵌入一个和原图一样大的 canvas，和一个不显示的 img ，后者负责载入一个非常小的图片（如40px大小）</p>
                <p class="course-list">2. 一段 js 监听到上述 img 标签的 onload 事件时，将小的图片以高斯模糊的方式绘制到 canvas 上</p>
                <p class="course-list">3. 当页面滚动到快要显示这张图片时，js 控制开始加载原图</p>
                <p class="course-list">4. 原图加载完成后，被放在之前的 img 标签中（此时看不到原图，被 canvas 挡住）</p>
                <p class="course-list">5. 在 canvas 中应用 fadeOut 效果，逐渐露出原图</p>
                <p class="course-list">6. fadeOut 播放完成后，将 canvas display：none</p>
            </div>
            <h3 class="info-title">方法二</h3>
            <p class="info">JPEG、GIF和PNG这三种图像格式都提供了一种功能，让图像能够更快地显示。图像可以以一种特殊方式存储，显示时先大概显示图像的草图，当文件全部下载后再填充细节（百度图片，QQ空间，点点网等显示大图时都使用的这种方式）。</p>
            <div class="info-course">
                <p class="course-title">photoshop生成渐进式图片</p>
                <p class="course-list">1. ps打开图片 → 另存为 → 存储为web所用格式</p>
                <p class="course-list">2. 选择JPEG格式 → 勾选连续 → 勾选转换为sRGB</p>
                <img src="../../assets/img/progress.png">
                <p class="course-list">3. 浏览器兼容性</p>
                <div class="course-tips">
                    <p>(1) Chrome、Fiefox、Opera 对“渐进”和“交错”都支持</p>
                    <p>(2) Safari(PC/MAC)对“渐进”不支持，“交错支持良好”</p>
                    <p>(3) IE9对“渐进”和“交错”都不支持</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  
};
</script>
<style lang='scss' scoped>
.app-container {
  .info-course {
    padding: 10px;
    font-size: 14px;
    .course-title {
      padding: 5px;
      font-weight: 700;
    }
    .course-list {
        padding: 5px 0;
    }
    .course-tips {
      padding-left: 10px;
    }
  }
}
</style>
