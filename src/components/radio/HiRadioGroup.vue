<!--
 * @Description: hi-radio-group
 * @version: 1.0
 * @Author: 美-王骁凯
 * @Date: 2022-09-02 18:39:53
 * @LastEditors: 美-王骁凯
 * @LastEditTime: 2022-09-09 15:08:54
-->
<template>
    <div class="ant-radio-group ant-radio-group-outline ant-radio-group-default">
        <label
            class="ant-radio-wrapper ant-radio-wrapper-checked"
            v-for="(item, index) in options"
            :key="index"
        >
            <span class="ant-radio ant-radio-checked">
                <input
                    type="radio"
                    class="ant-radio-input"
                    value="Apple"
                >
                <span class="ant-radio-inner"></span>
            </span>
            <span>Apple</span>
        </label>
    </div>
</template>

<script>
export default {
    name: 'HiRadioGroup',
    props: {
        options: {
            type: Array,
            default: []
        }
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="less" scoped>
@import url('../css/public.less');
@import url('./css/index.less');
</style>
