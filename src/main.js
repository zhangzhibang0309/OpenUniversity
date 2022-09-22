import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import 'element-plus/theme-chalk/dark/css-vars.css';
import naive from 'naive-ui'

import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
// import { KinesisContainer, KinesisElement} from 'vue-kinesis'
import { FcWaveFilter } from 'fancy-components'
import { Ecard, InputNumber } from '@nutui/nutui';


new FcWaveFilter()

const app = createApp(App)

app.use(router)
app.use(naive)
app.use(ElementPlus)
app.use(NutUI)
app.use(Ecard)
app.use(InputNumber)

app.mount('#app')
