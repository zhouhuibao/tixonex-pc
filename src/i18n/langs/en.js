import enLocale from 'element-ui/lib/locale/lang/en'
import header from './en/header'
import footer from './en/footer'
import home from './en/home'
import user from './en/user'
const en = {
    message: {
        'hello': 'hello, world',
        'header':'header'
    },
    header,
    footer,
    user,
    home,
    ...enLocale
}

export default en