import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
import header from './cn/header'
import footer from './cn/footer'
import home from './cn/home'
import user from './cn/user'
import OTC from './cn/OTC'
import MyBalance from './cn/MyBalance'
import PostersList from './cn/PostersList'
import Personal from './cn/Personal'

const cn = {
    message: {
        'hello': '你好，世界',
        'header':'头部'
    },
    header,
    footer,
    home,
    user,
    OTC,
    Personal,
    PostersList,
    MyBalance,
    ...zhLocale
}

export default cn