/*
 * @Description: 
 * @version: 1.0
 * @Author: 美-王骁凯
 * @Date: 2022-08-17 16:16:28
 * @LastEditors: 美-王骁凯
 * @LastEditTime: 2022-11-15 15:15:45
 */
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import './components/css/public.less'
// import HiUi from 'xiaokaihaha-ui'

// app.use(HiUi)
import HiButton from './components/button/HiButton.vue'
import HiIcon from './components/icon/HiIcon.vue'
import HiModal from './components/modal/HiModal.vue'
import HiTable from './components/table/HiTable.vue'
import HiCheckbox from './components/checkbox/HiCheckbox.vue'
import HiCheckboxGroup from './components/checkbox/HiCheckboxGroup.vue'
import HiRadio from './components/radio/HiRadio.vue'
import HiRadioGroup from './components/radio/HiRadioGroup.vue'
import HiSwitch from './components/switch/HiSwitch.vue'
import HiSpin from './components/spin/HiSpin.vue'

const components = [
    HiButton,
    HiIcon,
    HiModal,
    HiTable,
    HiCheckbox,
    HiCheckboxGroup,
    HiRadio,
    HiRadioGroup,
    HiSwitch,
    HiSpin
]
components.forEach(item => {
    app.component(item.name, item)
})

app.mount('#app')
