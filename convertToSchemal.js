const _this = {};

_this.schemalConvert = ({database,dataModel}) => {
    const parseModel = Object.keys(dataModel).map(item => {
        try {
            const columnName = dataModel[item][database]['columnName'];
            const dataStructor = dataModel[item][database]['dataStructor'];
            if (columnName && dataStructor) {
                return [columnName, dataStructor];
            }
        } catch (e) {
            return [[], []];
        }
    }).filter(item => item);
    const schemal = parseModel.reduce((prev, curr) => { prev[curr[0]] = curr[1]; return prev; }, {});
    return schemal;
}

_this.dataConvert = ({database,dataModel,data}) => {
    console.log(database)
    const parseModel = Object.keys(dataModel).map(item => {
        try {
            const key = dataModel[item][database]['columnName'];
            const value = data[key];
            console.log({ key, value })
            if (value && key) {
                return [item, value];
            }
        } catch (e) {
            return [[], []];
        }
    }).filter(item => item);
    const schemal = parseModel.reduce((prev, curr) => { prev[curr[0]] = curr[1]; return prev; }, {});
    return schemal;
}

module.exports = _this;