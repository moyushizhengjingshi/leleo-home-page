//加载路由 引入各种文件各种类
import { createApp } from 'vue'
import App from './App.vue'

// 引入Vuetify框架的样式 组件 图标
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

// 配置vuetity
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi', // 这已经是默认值-仅用于显示目的 
    },
    defaults: {
        VCard: {
            variant: 'tonal',   //全局设置卡片样式
        },
    },
})
//创建app实例并挂载到#app节点    所有内容都基于这个挂载点
const app = createApp(App);
app.config.warnHandler = () => {};  //关闭警告提示
app.use(vuetify).mount('#app')

