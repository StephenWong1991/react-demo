import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.less';

// 生命周期
class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Lifecycle - 生命周期'
    };
  }

  // 挂载阶段
  componentDidMount() {
    console.log('did mount');
  }

  // 更新时
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    console.log(nextState);
    return true;
  }

  // 更新阶段
  componentDidUpdate() {
    console.log('did update');
  }

  // 卸载阶段
  componentWillUnmount() {
    console.log('will unmount');
  }

  modifyPage = () => {
    this.setState({
      title: 'hello world!'
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.title}</p>
        <p>{this.props.user}</p>
        <button className="btn" onClick={this.modifyPage}>
          Click Me!
        </button>
        <button className="btn" onClick={this.props.modifyStore}>
          modify store
        </button>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {
    user : state.user
  }
}

const dispatchToProps = (dispatch) =>{
  return {
    modifyStore() {
      dispatch({
        type: 'REPEAT'
      })
    }
  }
}

export default connect(stateToProps, dispatchToProps)(Lifecycle);
