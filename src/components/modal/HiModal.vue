<!--
 * @Description: hi-modal
 * @version: 1.0
 * @Author: 美-王骁凯
 * @Date: 2022-08-18 10:47:54
 * @LastEditors: 美-王骁凯
 * @LastEditTime: 2022-09-09 15:05:19
-->
<template>
    <transition name="modal">
        <div class="hi-modal-mask" v-show="visible" @click="closable">
            <div class="hi-modal-wrap">
                <div class="hi-modal"
                    :style="{top: top}"
                    style="width: 550px; transform-origin: 49px 491px;"
                    v-if="destroyOnClose ? visible : true"
                >
                    <div class="hi-modal-content">
                        <div class="hi-modal-close" @click="cancel" v-show="closable">
                            <hi-icon :type="closeIcon"></hi-icon>
                        </div>
                        <div class="hi-modal-header">
                            <div class="hi-modal-title">
                                <slot v-if="slots.title" name="title"></slot>
                                <template v-else>
                                    {{title}}
                                </template>
                            </div>
                        </div>
                        <div class="hi-modal-body">
                            <slot></slot>
                        </div>
                        <div class="hi-modal-footer" v-if="footer">
                            <slot v-if="slots.footer" name="footer"></slot>
                            <div v-else>
                                <hi-button @click="cancel" :type="cancelType">{{cancelText}}</hi-button>
                                <hi-button @click="ok" :type="okType">{{okText}}</hi-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { getCurrentInstance, useSlots } from 'vue'
export default {
    name: 'HiModal',
    props: {
        top: {
            type: String,
            default: '200px'
        },
        closeIcon: {
            type: String,
            default: 'icon-icon-guanbi2'
        },
        closable: {
            type: Boolean,
            default: true
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        okText: {
            type: String,
            default: '确认'
        },
        cancelType: {
            type: String,
            default: ''
        },
        okType: {
            type: String,
            default: 'primary'
        },
        title: {
            type: String,
        },
        footer: {
            type: Boolean,
            default: true
        },
        visible: {
            type: Boolean,
            default: false
        },
        maskClosable: {
            type: Boolean,
            default: false
        },
        destroyOnClose: {
            type: Boolean,
            default: false
        }
    },
    setup (props) {
        let { proxy } = getCurrentInstance()
        const slots = useSlots()

        function cancel (e) {
            proxy.$emit('cancel', e)
        }
        function ok (e) {
            proxy.$emit('ok', e)
        }
        function closable () {
            if (!props.maskClosable) return
            proxy.$emit('cancel')
        }
        return {
            slots,
            cancel,
            ok,
            closable
        }
    }
}
</script>

<style lang="less" scoped>
@import url('../css/public.less');
@import url('./css/index.less');
</style>