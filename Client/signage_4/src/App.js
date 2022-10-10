// signage 4 app.js

import './App.css';

function App() {
  return (
    <>
      <header>
          <div className="h1">사이니지 이용방법</div>
      </header>
      <section className="gallery">
          <div className="h2">쉘터 사이니지를 100% 활용할 수 있는 방법</div>
          <table>
              <tr className="h4">콘텐츠 이용방법</tr>
              <tr className="STEP"><td>STEP1</td><td>STEP2</td><td>STEP3</td></tr>
              <tr><td> pic </td><td> pic </td><td> pic </td></tr>
              <tr><td>작품 보러가기 클릭!</td><td>보고싶은 작품 선택</td><td>작품 감상!</td></tr>
              <tr className="h4">커뮤니티 이용방법</tr>
              <tr className="STEP"><td>STEP1</td><td>STEP2</td><td>STEP3</td></tr>
              <tr><td> pic </td><td> pic </td><td> pic </td></tr>
              <tr><td>커뮤니티 클릭!</td><td>주제별<br/>게시판 선택</td><td>글 작성하기</td></tr>
          </table>
      </section>
        <footer>
            <button className="btn_a">작품 보러가기</button>
            <button className="btn_b">커뮤니티</button>
        </footer>
    </>
  );
}

export default App;
