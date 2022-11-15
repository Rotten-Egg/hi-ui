<!--
 * @Description: 
 * @version: 1.0
 * @Author: 美-王骁凯
 * @Date: 2022-09-29 10:05:30
 * @LastEditors: 美-王骁凯
 * @LastEditTime: 2022-11-15 14:34:27
-->

<template>
    <div
        :class="[
            'hi-switch',
            disabled || span ? 'hi-switch-disabled' : '',
            checked && 'hi-switch-active'
        ]"
        @click="switchVal"
    >
    <HiIcon v-if="span" type="icon-jiazai"  class="hi-switch-icon" spin/>
    </div>
</template>

<script>
import {reactive, toRefs, watch} from 'vue'
import HiIcon from '../icon/HiIcon.vue'
export default {
    name: 'HiSwitch',
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        span: {
            type: Boolean,
            default: false,
        },
        checked: {
            type: Boolean,
            default: false,
            require: true,
        },
    },
    components: {
        HiIcon
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
@import url('./css/index.less');
</style>
