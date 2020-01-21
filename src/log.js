// #42c02e 绿色   #1475b2 蓝色
import { UA } from './util/env'
const GREEN = '#42c02e'
const BLUE = '#1475b2'
function consoleLog(t) {
    var e = t.title,
        r = t.content,
        n = t.backgroundColor,
        i = [
            '%c '.concat(e, ' %c ').concat(r, ' '),
            'padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: '.concat('#606060', ';'), // 灰色
            'padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: '.concat(n, ';')
        ]
    return (
        function() {
            var t
            window.console && 'function' === typeof window.console.log && (t = console).log.apply(t, arguments)
        }.apply(void 0, i),
        i
    )
}

if (process.env.NODE_ENV !== 'production') {
    console.log('process.env:', process.env)
    consoleLog({ title: 'Environment', content: process.env.NODE_ENV, backgroundColor: GREEN })
    consoleLog({ title: 'Platform', content: UA, backgroundColor: BLUE })
    consoleLog({ title: 'Version', content: process.env.VERSION, backgroundColor: BLUE })
    consoleLog({ title: 'Build Date', content: process.env.BUILDDATE, backgroundColor: BLUE })
}
