import React from "react";
import { BrowserRouter } from "react-router-dom";
import NumberBaseball from '../03.숫자야구/NumberBaseballClass';
import RSP from '../05.가위바위보/RSPClass';
import Lotto from '../06.로또 추첨기/LottoClass';
import GameMatcherClass from './GameMatcherClass';
const Games = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/game/number-baseball">숫자야구</Link>
        <Link to="/game/rock-scissors-paper">가위바위보</Link>
        <Link to="/game/lotto-generator">로또 생성기</Link>
        <Link to="/game/index">게임 매쳐</Link>
      </div>
      <div>
        <Route path="/game/:name" component={GameMatcherClass}></Route>
      </div>
    </BrowserRouter>
  );
};

export default Games;
