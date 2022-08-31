/*
 * @Description: 
 * @version: 1.0
 * @Author: 美-王骁凯
 * @Date: 2022-08-17 16:16:28
 * @LastEditors: 美-王骁凯
 * @LastEditTime: 2022-08-31 14:06:00
 */
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
// import './assets/main.css'
// import HiUi from 'xiaokaihaha-ui'

// app.use(HiUi)
import HiButton from './components/button/HiButton.vue'
import HiIcon from './components/icon/HiIcon.vue'
import HiModal from './components/modal/HiModal.vue'
import HiTable from './components/table/HiTable.vue'
import HiCheckbox from './components/checkbox/HiCheckbox.vue'

app.component(HiButton.name, HiButton)
app.component(HiIcon.name, HiIcon)
app.component(HiModal.name, HiModal)
app.component(HiTable.name, HiTable)
app.component(HiCheckbox.name, HiCheckbox)

app.mount('#app')
