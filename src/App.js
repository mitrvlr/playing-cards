import React from 'react';
import Playground from './pages/Playground';
import PageIndex from './pages/index';
import './assets/scss/style.scss';

import { Navigation } from './components/layouts/Navigation';

function App() {
  return (
    <section className="app">
      <header className="app-header">
        <h1>hello world</h1>
      </header>

      <Navigation />

      {/* 시트 추가, 섹터 생성, 좌석 배정 */}
      <main>
        <PageIndex />
      </main>

      {/* REMOVE : 사용가능한 컴포넌트 예제 */}
      <Playground />
    </section>
  );
}

export default App;
