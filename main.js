
function getDateInfo() {
    var date = new Date()
    var week = date.getDay()
    var daysWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    var numberMonth = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Отктября', 'Ноября', 'Декабря']
    var day = date.getDate()
    var weekNumber = Math.ceil(day / 7)
    var month = date.getMonth()
    var year = date.getFullYear()
    return daysWeek[week] + ', ' + weekNumber + ' неделя ' + numberMonth[month] + ' ' + year + ' года.'
}
var functionDate = getDateInfo()
console.log(functionDate)

