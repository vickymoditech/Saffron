const uuidv1 = require('uuid/v1');

export const apihost = "http://192.168.0.3:9000";
export const loader_image = "";


class example{

    constructor(){}

    static getGuid(){

        return uuidv1();

    }

}

export default example;