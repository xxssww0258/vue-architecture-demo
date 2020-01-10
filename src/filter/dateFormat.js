import moment from 'moment'
import { defaultFormat } from './dateConfig'

export default function(date = new Date(), pttern = defaultFormat) {
    return moment(date).format(pttern)
}
