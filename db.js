// 建表脚本，导出db对象供之后使用
const path = require('path');
let sq3 = require('sqlite3');
const dbPath = path.join(__dirname, 'info.db');
let _table = 'NFC';
const sqlite3 = sq3.verbose();


var database = (function () {
    var db = new sqlite3.Database(dbPath)
    // console.log('db:===',db)
    var _error = '';
    function onfail(t, e) {
        this._error = e.message;
        console.log('----sqlite:' + e.message);
    }
    function insertnfcdata(data, callback) {
        // var that = this;
        var sql = "INSERT INTO " + this._table;
        if (data instanceof Array && data.length > 0) {
            var cols = [], qs = [];
            for (var i in data[0]) {
                cols.push(i);
                qs.push('?');
            }
            sql += " (" + cols.join(',') + ") Values (" + qs.join(',') + ")";
        } else {
            return false;
        }
        var p = [],
            d = data,
            pLenth = 0,
            r = [];
        for (var i = 0, dLength = d.length; i < dLength; i++) {
            var k = [];
            for (var j in d[i]) {
                k.push(d[i][j]);
            }
            p.push(k);
        }
        var queue = function (b, result) {
            var _this = this
            if (result) {
                r.push(result.insertId || result.rowsAffected);
            }
            if (p.length > 0) {
                // _this.db.transaction(function (t) {
                //     t.executeSql(sql, p.shift(), queue, this.onfail);
                // })
                console.log(_this.db)
            } else {
                if (callback) {
                    callback.call(this, r);
                }
            }
        }
        queue();
        // }

        // return db.run(`
        // INSERT INTO NFC(ID, repname, resname, remark, create_time,update_time,comd)
        // VALUES(1, 'Portal', 'service', '请求APDU指令','3019-04-17','2019-04-17','0x00,0x0a,0x02,0x03');

    }


    return {
        insertnfcdata: insertnfcdata
    };
})();




module.exports = database



