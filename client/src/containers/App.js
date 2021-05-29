import React from 'react';
import MainRouter from './MainRouter';
import {
  RecoilRoot,
} from 'recoil';
import 'normalize.css';
import '../styling/style.scss';


export default function App() {
  return (
    <React.Fragment>
      <RecoilRoot>
        <MainRouter />
      </RecoilRoot>
    </React.Fragment>
  )
}