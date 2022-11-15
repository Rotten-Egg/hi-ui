<!--
 * @Description: hi-radio-group
 * @version: 1.0
 * @Author: 美-王骁凯
 * @Date: 2022-09-02 18:39:53
 * @LastEditors: 美-王骁凯
 * @LastEditTime: 2022-09-23 14:40:57
-->
<template>
    <div class="hi-radio-group hi-radio-group-outline hi-radio-group-default">
        <label
            class="hi-radio-wrapper hi-radio-wrapper-checked"
            v-for="(item, index) in options"
            :key="index"
        >
            <span :class="['hi-radio', value.includes(item.value) && 'hi-radio-checked']">
                <input
                    v-model="value"
                    :value="item.value"
                    @change="onChange"
                    type="radio"
                    class="hi-radio-input"
                >
                <span class="hi-radio-inner"></span>
            </span>
            <span>{{item.label || item}}</span>
            <slot></slot>
        </label>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    name: 'HiRadioGroup',
    props: {
        value: {
            type: Array,
            default: []
        },
        options: {
            type: Array,
            default: []
        }
    },
    setup (props, {emit}) {
        function onChange(e) {
            emit('update:value', e.target.value)
            emit('onChange', e.target.value)
        }
        return {
            onChange
        }
    }
}
</script>

<style lang="less" scoped>
@import url('./css/index.less');
</style>
