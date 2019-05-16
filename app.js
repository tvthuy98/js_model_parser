const dataModel = require('./dataModel');
const paser = require('./convertToSchemal');
const database = 'mongodb';
const mysqlSchemal = paser.schemalConvert({ database, dataModel })
const data_mysql = {
    varible_1: '12v',
    varible_2: '12b',
    varible_3: '0404'
}
const dataMongodb = {
    varible1: '12v',
    varible2: '12b',
    varible3: '0404'
}
// const dataConverted = paser.dataConvert({ database, dataModel, data: data_mysql })

console.log(mysqlSchemal)
