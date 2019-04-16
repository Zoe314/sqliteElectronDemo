import React, { Component } from 'react';
import { Button } from 'antd'
import { inject, observer } from 'mobx-react'

@inject('Store') @observer
class News extends Component {
  render() {
    return (
      <div className="News">
        <Button>{ this.props.Store.name }</Button>
      </div>
    );
  }
}

export default News;
