import enLocale from 'element-ui/lib/locale/lang/en'
import header from './en/header'
import footer from './en/footer'
import home from './en/home'
import user from './en/user'
import OTC from './en/OTC'
import MyBalance from './en/MyBalance'
import PostersList from './en/PostersList'

const en = {
    message: {
        'hello': 'hello, world',
        'header':'header'
    },
    header,
    footer,
    user,
    home,
    OTC,
    PostersList,
    MyBalance,
    ...enLocale
}

export default en