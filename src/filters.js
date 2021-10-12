import Vue from 'vue';
import moment from 'moment';

Vue.filter('formatDate', function (value, fullWithLineBreak = false) {
    if (value) {
        if (fullWithLineBreak) {
            return moment(value)
                .format('dddd MMM, DD YYYY <br> hh:mm a'); //moment instance of the date
        }
        return moment(String(value)).format('DD/MM/YYYY hh:mm')
    }
});