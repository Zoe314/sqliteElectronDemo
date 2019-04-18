import React, { Component } from 'react';
import style from './index.scss';
import { Link } from 'react-router-dom'
class Book extends Component {
    componentDidMount (){
        console.log(3333)
        
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
