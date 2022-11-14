<!--
 * @Description: hi-switch
 * @version: 1.0
 * @Author: 美-王骁凯
 * @Date: 2022-09-29 10:05:30
 * @LastEditors: 美-王骁凯
 * @LastEditTime: 2022-11-14 14:38:20
-->
<template>
    <div
        :class="[
            'hi-switch',
            disabled ? 'hi-switch-disabled' : '',
            checked && 'hi-switch-active'
        ]"
        :style="{
           
            transform: `scale(${ratio})`,
        }"
        @click="switchVal"
    >
    <!--  backgroundColor: checked ? activeColor : inactiveColor, backgroundColor: checked ? activeColor : inactiveColor, -->
    </div>
</template>

<script>
import {reactive, toRefs, watch} from 'vue'
export default {
    name: 'HiSwitch',
    props: {
        ratio: {
            type: Number,
            default: 1,
        },
        activeColor: {
            type: String,
            default: '#13ce66',
        },
        inactiveColor: {
            type: String,
            default: '#ff4949',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        default: {
            type: Array,
            default: [],
        },
        checked: {
            type: Boolean,
            default: false,
            require: true,
        },
    },
    emits: ['update:checked', 'change'],
    setup(props, {emit}) {
        function switchVal(e) {
            if (props.disabled) {
                return
            }
            emit('update:checked', !props.checked)
            emit('click', props.checked, e)
            emit('change', props.checked, e)
        }
        return {
            switchVal
        }
    }
}
</script>

<style lang="less" scoped>
@import url('../css/public.less');
@import url('./css/index.less');
</style>
