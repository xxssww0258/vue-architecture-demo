import moment from 'moment'
import { defaultFormat } from '../config.js'

export default function(date = new Date(), pttern = defaultFormat) {
    return moment(date).format(pttern)
}
