<!--
 * @Description: hi-icon
 * @version: 1.0
 * @Author: 美-王骁凯
 * @Date: 2022-08-17 18:17:29
 * @LastEditors: 美-王骁凯
 * @LastEditTime: 2022-11-08 18:52:05
-->
<template>
     <svg v-if="type" :class="[spin && 'hi-icon-spin', 'hi-icon']" aria-hidden="true">
        <use :xlink:href="'#' + type"></use>
    </svg>
</template>

<script>
export default {
    name: 'HiIcon',
    props: {
        type: {
            type: String,
        },
        spin: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="less" scoped>
@import url('./css/index.less');
</style>