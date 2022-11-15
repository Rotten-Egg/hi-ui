<!--
 * @Description: span
 * @version: 1.0
 * @Author: 美-王骁凯
 * @Date: 2022-11-14 18:37:17
 * @LastEditors: 美-王骁凯
 * @LastEditTime: 2022-11-15 19:34:39
-->
<template>
    <div class="hi-spin">
        <div class="hi-spin-loading" v-if="spinning">
            <div class="hi-spin-spinning">
                <slot name="indicator" v-if="slots && slots.hasOwnProperty('indicator')"></slot>
                <hi-icon
                    v-else
                    spin
                    type="icon-jiazai"
                    :class="[size === 'large' && 'hi-spin-lg']"
                ></hi-icon>
                <div>{{tip}}</div>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
import { useSlots } from 'vue'
export default {
    name: 'HiSpin',
    props: {
        spinning: {
            type: Boolean,
            default: false
        },
        tip: {
            type: String
        },
        size: {
            type: String,
            validator: function (val) {
                if (val !== 'large') {
                    console.error('只支持large属性，默认为空')
                }
            }
        }
    },
    setup () {
        const slots = useSlots()
        return {
            slots
        }
    }
}
</script>

<style lang="less" scoped>
.hi-spin {
    position: relative;
    .hi-spin-loading {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.05);
        .hi-spin-spinning {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            font-size: 16px;
            .hi-spin-lg {
                font-size: 30px;
            }
        }
    }
    
    
}
</style>