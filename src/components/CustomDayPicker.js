import React, { Component } from 'react'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


class CustomDayPicker extends Component {
constructor(props){
    super(props);
    
    this.WEEKDAYS_LONG = {
        pl: [
    'Poniedziałek',
    'Wtorek',
    'Środa',
    'Czwartek',
    'Piątek',
    'Sobota',
    'Niedziela',
  ]
    };
    this.WEEKDAYS_SHORT = {
        pl: ['Nd', 'Pn', 'Wt', 'Śr', 'Cz', 'Pi', 'Sb']
    };
    this.MONTHS = {
        pl: [
    'Styczeń',
    'Luty',
    'Marzec',
    'Kwiecień',
    'Maj',
    'Czerwiec',
    'Lipiec',
    'Sierpień',
    'Wrzesień',
    'Październik',
    'Listopad',
    'Grudzień',
  ]
    };
    this.FIRST_DAY_OF_WEEK = {
        pl: 1
    };
    this.LABELS = {
        pl: {
            nextMonth: 'Następny miesiąc',
            previousMonth: 'Poprzedni miesiąc'
        }
    };
}
  render() {
    return (
       <DayPicker
         
          months={ this.MONTHS.pl}
          weekdaysLong={ this.WEEKDAYS_LONG.pl}
          weekdaysShort={ this.WEEKDAYS_SHORT.pl}
          firstDayOfWeek={ this.FIRST_DAY_OF_WEEK.pl}
          labels={ this.LABELS.pl} />
    );
  }
}


export default CustomDayPicker;
