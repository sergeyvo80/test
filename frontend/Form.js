/**
 * Класс управления формой.
 *
 * @class Form
 */
export class Form {

    /**
     * @constructor
     */
    constructor(docSelector) {
        this.docSelector = docSelector;
    }


    /**
     * Отправка формы.
     *
     * @return {Object} Promise.
     */
    send() {
        /*TODO
         берем данные формы из метода this.data и отправляем их на сервер;
         */
    }


    get data() {
        /*TODO this
         находим dom контенер по this.docSelector
         создаем объект данных формы
         {
         name: 'your name',
         .......
         }
         */
    }


}
