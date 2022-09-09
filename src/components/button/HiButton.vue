<!--
 * @Description: hi-button
 * @version: 1.0
 * @Author: 美-王骁凯
 * @Date: 2022-08-17 16:23:17
 * @LastEditors: 美-王骁凯
 * @LastEditTime: 2022-09-09 14:06:51
-->
<template>
    <button
        :class="[
            'hi-button',
            type && `hi-button-${type}`,
            ghost && 'hi-button-ghost',
            block && 'hi-button-block',
            shape && btnSize,
        ]"
        :disabled="disabled"
        @click="handleClick"
    >
        <slot name="icon"></slot>
        <template v-if="$slots.default">
            <a v-if="type === 'link'" :href="href">
                <slot></slot>
            </a>
            <span v-else><slot></slot></span>{{btnSize}}
        </template>
    </button>
</template>

<script>
import { onMounted, getCurrentInstance, computed, useSlots } from 'vue'

export default {
    name: 'HiButton',
    props: {
        type: { // primary dashed danger
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        ghost: {
            type: Boolean,
            default: false
        },
        block: {
            type: Boolean,
            default: false
        },
        href: {
            type: String
        },
        shape: {
            type: String
        },
        size: {
            type: String,
            validator: (value) => {
                const vali =  ['small', 'large']
                return vali.includes(value)
            }
        }
    },
    setup (props) {
        let { proxy } = getCurrentInstance()
        const slots = useSlots()
        onMounted(() => {
        })
        const btnSize = computed(() => {
            switch(props.size){
                case 'large':
                    return 'hi-button-lg'
                case 'small':
                    return 'hi-button-sm'
            }
        })
        function handleClick (e) {
            proxy.$emit('click', e)
        }
        return {
            slots,
            btnSize,
            handleClick
        }
    }
}
</script>

<style lang="less" scoped>
@import url('../css/public.less');
@import url('./css/index.less');
</style>