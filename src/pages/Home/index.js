import React, { Component } from 'react';
import styles from './home.module.css';

// 生命周期
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Home page'
    };
  }

  // 挂载阶段
  componentDidMount() {
    console.log('did mount');
  }

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
      page: 'hello world!'
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.page}</div>
        <button className={styles.btn} onClick={this.modifyPage}>
          Click Me!
        </button>
      </div>
    );
  }
}

export default Home;
