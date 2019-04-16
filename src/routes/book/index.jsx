import React, { Component } from 'react';
import style from './index.scss';
import { Link } from 'react-router-dom'
// import db from '../../db.js'
class Book extends Component {
    componentDidMount (){
        console.log(3333)
        // db.serialize(function() {
        // db.run("CREATE TABLE IF NOT EXISTS lorem (info TEXT,age TEXT,date TEXT)");
        // //db.run("delete from lorem");
        // var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
        // for (var i = 0; i < 10; i++) {
        // stmt.run("Ipsum " + i);
        // }
        // stmt.finalize();
        // });
        // db.close();
    }
    render() {
        return (
            <div className={style.Book}>
                
                <span>我是book页</span>
                <br/>
                <Link to='/'>去首页 </Link>
            </div>
        );
    }
}

export default Book;
