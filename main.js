const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
let win

const sqlite3 = require('sqlite3');
sqlite3.verbose();
// const db = new sqlite3.Database(path.join(__dirname, 'zoe.db'));
// db.serialize(function () {
//     db.run("CREATE TABLE if not exists lorem (info TEXT)");
// });


// db.serialize(function() {
//     db.run("CREATE TABLE IF NOT EXISTS lorem (info TEXT,age TEXT,date TEXT)");
//     //db.run("delete from lorem");
//     var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//     for (var i = 0; i < 10; i++) {
//       stmt.run("Ipsum " + i);
//     }
//     stmt.finalize();
// });
// db.close();


// const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('info.db', function () {
    db.run('create table test(name varchar(15))', function () {
        db.run('insert into test values("hello,world")', function () {
            db.all('select * from test', function (err, res) {
                if (!err) {
                    console.log(JSON.stringify(res))
                } else {
                    console.log(err)
                }
            })
        })
    })
})

const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
});
function createWindow() {

    // 创建浏览器窗口。
    win = new BrowserWindow({ width: 800, height: 600 })

    // 然后加载应用的 index.html。  url 及本地文件形式
    win.loadURL('http://localhost:3000')
    // win.loadURL('startUrl')
    // win.loadURL('file://${__dirname}/index.html')
    // win.loadFile('public/index.html')

    // 打开开发者工具
    win.webContents.openDevTools()

    // 当 window 被关闭，这个事件会被触发。
    win.on('closed', () => {
        // 取消引用 window 对象，如果你的应用支持多窗口的话，
        // 通常会把多个 window 对象存放在一个数组里面，
        // 与此同时，你应该删除相应的元素。
        win = null
    })
}

// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', createWindow)

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // 在macOS上，当单击dock图标并且没有其他窗口打开时，
    // 通常在应用程序中重新创建一个窗口。
    if (win === null) {
        createWindow()
    }
})

// 在这个文件中，你可以续写应用剩下主进程代码。
// 也可以拆分成几个文件，然后用 require 导入。