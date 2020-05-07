import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
import header from './cn/header'
import footer from './cn/footer'
import home from './cn/home'
import user from './cn/user'
const cn = {
    message: {
        'hello': '你好，世界',
        'header':'头部'
    },
    header,
    footer,
    home,
    user,
    ...zhLocale
}

export default cn