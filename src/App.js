import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('batching');
  console.log('rendering');

  // React의 batching
  // 상태변경함수 => 동기적 => 왜 비동기적으로 동작을 하니? => batching
  // batching : 여러개의 상태변경함수가 있다고 할게요. => 여러개의 상태변경함수 모아서
  // 일괄적으로 처리한 후 업데이트 한 내용을 1회의 리-렌더링으로 처리합니다.
  // 리액트 자체적으로 렌더링 최적화를 한다는 겁니다.
  // 17ver => useEffect, eventhandler o => Promise, setTimeout x
  // 18ver => Auto batching => useEffect, eventhandler o => 그 외 영역에서도 적용하겠다.

  // useEffect(() => {
  // setText('!');
  // setText('!!');
  // setText('!!!');
  // fetch('https://koreanjson.com/posts/1').then((response) => {
  //   setText('배칭이 안돼요1');
  //   setText('배칭이 안돼요2');
  //   setText('배칭이 안돼요3');
  // });
  // console.log('useEffect');
  // }, []);

  const eventHandler = () => {
    // 0. 리렌더링 스킵(batching 기능과 상관없음)
    // 같은 값으로 상태를 갱신할 경우 2번까지만 리렌더링을
    // 진행하고 리-렌더링을 스킵함.
    // setCount(1);
    // 1. 갱신 취소
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // 2.
    // setCount(count + 1);
    // setCount(count + 2);
    // setCount(count + 3);
    // 3. 함수형 업데이트
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
    // 4. 함수형 업데이트
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 2);
    // setCount((prev) => prev + 3);
  };

  const setTimeoutHandler = () => {
    setTimeout(() => {
      setText('배칭이 안돼요1');
      setText('배칭이 안돼요2');
      setText('배칭이 안돼요3');
      setText('배칭이 안돼요4');
    }, 300);
  };

  return (
    <React.Fragment>
      <h1>{`text : ${text}`}</h1>
      <h1>{`count : ${count}`}</h1>
      <button onClick={eventHandler}>+</button>
      <button onClick={setTimeoutHandler}>setTimeout</button>
    </React.Fragment>
  );
}
