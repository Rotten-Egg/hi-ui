<!--
 * @Description: hi-checkbox-group
 * @version: 1.0
 * @Author: 美-王骁凯
 * @Date: 2022-09-01 15:42:20
 * @LastEditors: 美-王骁凯
 * @LastEditTime: 2022-09-01 19:10:35
-->
<template>
    <div class="hi-checkbox-group">
        <label
            v-for="(item, index) in getOption" :key="index"
            class="hi-checkbox-wrapper hi-checkbox-group-item"
        >
            <span :class="[
                'hi-checkbox',
                item.isChecked && 'hi-checkbox-checked'
            ]">
                <input
                    v-model="item.isChecked"
                    @change="change($event, item)" 
                    type="checkbox" 
                    class="hi-checkbox-input"
                >
                <span class="hi-checkbox-inner"></span>
            </span>
            <span>
                {{item.label}}
            </span>
        </label>
    </div>
</template>

<script>
import { useSlots, ref, computed, watch } from 'vue'
export default {
    name: 'HiCheckboxGroup',
    props: {
        options: {
            type: Array,
            default: () => []
        },
        page: {
            type: Object
        },
        value: {
            type: Array
        }
    },
    setup (props, {emit}) {
        const slots = useSlots()
        // let getOption = ref([])
        // watch(() => props.options, (newVal) => {
        //    getOption.value = props.options.map((option) => {
        //         return {
        //             label: option,
        //             value: option,
        //             isChecked: props.value.includes(option)
        //         }
        //     })
        // }, {immediate: true})
        watch(() => props.value, (newVal) => {
            let flag = newVal.length === props.options.length
            if (!(flag || newVal.length === 0)) return
            let isChecked = flag ? true : false
            getOption.value.forEach(item => {
                item.isChecked = isChecked
            })
        })
        let getOption = ref(
            props.options.map((option) => {
                return {
                    label: option,
                    value: option,
                    isChecked: props.value.includes(option)
                }
            })
        )
      
        
        function change (e, item) {
            item.isChecked = e.target.checked
            const selectArr = getOption.value.filter(i => i.isChecked).map(i => i.isChecked && i.value )
            emit('update:value', selectArr)
        }
        return {
            slots,
            change,
            getOption
        }
    }
}
</script>

<style lang="less" scoped>
@import url('./css/index.less');
</style>
