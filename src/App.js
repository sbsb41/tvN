import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [click, setClick] = useState();
  const [click1, setClick1] = useState();
  const [click2, setClick2] = useState();

  function handleClick() {
    setClick1(false);
    setClick2(false);
    setClick(!click);
  }

  function handleClick1() {
    setClick(false);
    setClick2(false);
    setClick1(!click1);
  }

  function handleClick2() {
    setClick(false);
    setClick1(false);
    setClick2(!click2);
  }

  const image = [
    "https://poc-cf-image.cjenm.com/crop/200x112/public/share/eventmng/eventregmng/kr/%EC%96%B4%EC%82%AC%EC%9E%A53banner648.jpg?v=1700732690",
    "https://poc-cf-image.cjenm.com/crop/200x112/public/share/eventmng/eventregmng/kr/%EC%BD%94%EB%B9%85+%EB%B0%A9%EC%B2%AD%EC%8B%A0%EC%B2%AD_1676951977409.jpg?v=1693458036",
    "https://poc-cf-image.cjenm.com/crop/200x112/public/share/eventmng/eventregmng/kr/%EC%BD%94%EB%B9%85+%EB%B0%A9%EC%B2%AD%EC%8B%A0%EC%B2%AD_1676951977409.jpg?v=1693458036",
    "https://poc-cf-image.cjenm.com/crop/200x112/public/share/eventmng/eventregmng/kr/%EC%BD%A9%EC%BD%A9%ED%8C%A5%ED%8C%A5%EC%9D%B4%EB%B2%A4%ED%8A%B8banner648.jpg?v=1698194115",
    "https://poc-cf-image.cjenm.com/crop/200x112/public/share/eventmng/eventregmng/kr/%EB%B0%B0%EB%84%88648x364_1692150961471.jpg?v=1696379861",
    "https://poc-cf-image.cjenm.com/crop/200x112/public/share/eventmng/eventregmng/kr/%EB%B0%B0%EB%84%88648x364_1692169276843.jpg?v=1692234013",
  ];
  /*
  const testFilter = image.filter((src, index) => {
    return index < 3;
  });*/

  const info = [
    {
      tv: "tvN",
      content: "[당첨자 발표] 어쩌다 사장3 애청자 퀴즈 이벤트",
      writer: "당첨발표일 2023.11.27",
    },
    {
      tv: "tvN",
      content: "<코미디빅리그> 515회 방청 당첨 발표",
      writer: "당첨발표일 2023.09.01",
    },
    {
      tv: "tvN",
      content: "<코미디빅리그> 514회 방청 당첨 발표",
      writer: "당첨발표일 2023.08.25",
    },
    {
      tv: "tvN",
      content: "[당첨자 발표] 콩콩팥팥 식집사찐친테스트 시청자 퀴즈 이벤트",
      writer: "당첨발표일 2023.10.31",
    },
    {
      tv: "tvN",
      content: "[당첨자 발표] 300만 년 전 야생 탐험 : 손둥동굴 감상평 이벤트",
      writer: "당첨발표일 2023.08.31",
    },
    {
      tv: "tvN",
      content: "[당첨자 발표] 형따라 마야로 3회 본방사수 이벤트",
      writer: "당첨발표일 2023.08.22",
    },
  ];

  const text = [
    "이벤트 정보",
    "이벤트 정보",
    "이벤트 정보",
    "이벤트 정보",
    "이벤트 정보",
    "이벤트 정보",
  ];

  const testImage = image.map((test) => {
    return <img src={test}></img>;
  });

  const listItem = info.map((information) => {
    return (
      <ul>
        <li>{information.tv}</li>
        <li>{information.content}</li>
        <li> {information.writer}</li>
      </ul>
    );
  });

  const textImage = text.map((textt) => {
    return <li>{textt}</li>;
  });

  return (
    <>
      <header>
        <div id="log">
          <ul>
            <li>
              <a href="https://tvn.cjenm.com/ko/signin/?retUrl=%2Fko%2Fevent%2F">
                로그인
              </a>
            </li>
            <li>
              <a href="https://tvn.cjenm.com/ko/account/register/">회원가입</a>
            </li>
            <li>
              <a href="https://tvn.cjenm.com/ko/account/register/">검색</a>
            </li>
          </ul>
        </div>
        <div>
          <a href="https://tvn.cjenm.com/ko/">
            <div id="tvn"></div>
          </a>
          <div id="tvn1">
            <ul>
              <li>
                <a href="https://tvn.cjenm.com/ko/tvnanniv2/">About tvN</a>
              </li>
              <li>
                <a href="https://tvn.cjenm.com/ko/tvn-schedule/">편성표</a>
              </li>
              <li>
                <a href="https://tvn.cjenm.com/ko/broadcast/SOChannel/tvn/">
                  채널번호
                </a>
              </li>
              <li onClick={handleClick} className="category">
                드라마<span>∨</span>
              </li>
              <li onClick={handleClick1} className="category">
                연예오락<span>∨</span>
              </li>
              <li onClick={handleClick2} className="category">
                인사이트<span>∨</span>
              </li>
              <li>
                <a href="https://tvn.cjenm.com/ko/video/">동영상</a>
              </li>
              <li>
                <a href="https://tvn.cjenm.com/ko/event/">이벤트</a>
              </li>
              <li>
                <a href="https://tvn.cjenm.com/ko/program/">프로그램</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div id="success0">
        <div className={click ? "success" : ""} id="container-navitems">
          <div id="container1">
            <div id="container1-1">
              <div>드라마</div>
              <div onClick={handleClick}>✕</div>
            </div>
            <div id="container1-2">
              <div>
                <div>[예정] 세작, 매혹된 자들</div>
                <div>[종영] 반짝이는 워터멜론</div>
              </div>
              <div>
                <div>[예정] 내 남편과 결혼해줘</div>
                <div>[종영] 아라문의 검</div>
              </div>
              <div>[예정] 마에스트라</div>
              <div>[토일] 무인도의 디바</div>
            </div>
          </div>
        </div>
        <div className={click1 ? "success1" : ""} id="container-navitems1">
          <div id="container2">
            <div id="container2-1">
              <div>연예오락</div>
              <div onClick={handleClick1}>✕</div>
            </div>
            <div id="container2-2">
              <div>
                <div>[월] 내가 뭐라고</div>
                <div>[수] 유 퀴즈 온 더 블럭</div>
                <div>[금] 콩콩팥팥</div>
                <div>[종영] 300만 년 전 야생탐험</div>
              </div>
              <div>
                <div>[월] 프리한 닥터</div>
                <div>[수] 명의들의 경고</div>
                <div>[토] 놀라운 토요일</div>
              </div>
              <div>
                <div>[화] 벌거벗은 세계사</div>
                <div>[목] 어쩌다 사장3</div>
                <div>[일] 장사천재 백사장2</div>
              </div>
              <div>
                <div>[수] 골든일레븐 : 언리미티드</div>
                <div>[목] 70억의 선택</div>
                <div>[금] 형따라 마야로</div>
              </div>
            </div>
          </div>
        </div>
        <div className={click2 ? "success2" : ""} id="container-navitems2">
          <div id="container3">
            <div id="container3-1">
              <div>인사이트</div>
              <div onClick={handleClick2}>✕</div>
            </div>
            <div id="container3-2">
              <div>
                <div>[종영] 김창옥쇼 리부트</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div>
          <div id="main1">진행 중 이벤트</div>
          <div id="main1-1">
            <ul>
              <li>
                <a href="https://tvn.cjenm.com/ko/event/?14377=removeCacheYn%3DY%26searchPrgrsStatCd%3DALL">
                  All
                </a>
              </li>
              <li>
                <a href="https://tvn.cjenm.com/ko/event/?14377=removeCacheYn%3DY%26searchPrgrsStatCd%3DALL">
                  진행중
                </a>
              </li>
              <li>
                <a href="https://tvn.cjenm.com/ko/event/?14377=removeCacheYn%3DY%26searchPrgrsStatCd%3DMC021142">
                  진행예정
                </a>
              </li>
            </ul>
          </div>
          <div id="main2">
            <div id="main1-2">
              <div>
                <a href="https://tvn.cjenm.com/ko/event/tvn-goodbye-2023/">
                  <div id="mainimg1"></div>
                </a>
                <div id="mainimg1-1">
                  <a href="https://tvn.cjenm.com/ko/event/tvn-goodbye-2023/">
                    진행중
                  </a>
                </div>
                <div id="main1-3">
                  <a href="https://tvn.cjenm.com/ko/event/tvn-goodbye-2023/">
                    [2023 tvN 즐거움 결산] 2023년, 당신의 즐거움을 무엇이었나요?
                  </a>
                </div>

                <div id="main1-4">
                  <a href="https://tvn.cjenm.com/ko/event/tvn-goodbye-2023/">
                    <p>
                      <span>기간</span>2023.11.30 - 2023.12.10
                    </p>
                    <p>
                      <span>대상</span>회원/비회원 전체
                    </p>
                    <p>
                      <span>조회</span>24
                      <span id="main1-5">참여</span>150
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <div id="main1-2">
              <div>
                <a href="https://tvn.cjenm.com/ko/event/-%EB%82%B4%EA%B0%80-%EB%AD%90%EB%9D%BC%EA%B3%A0--WHO-IS-MY-FAN-%EC%B1%8C%EB%A6%B0%EC%A7%80/">
                  <div id="mainimg2"></div>
                </a>
                <div id="mainimg1-1">
                  <a href="https://tvn.cjenm.com/ko/event/-%EB%82%B4%EA%B0%80-%EB%AD%90%EB%9D%BC%EA%B3%A0--WHO-IS-MY-FAN-%EC%B1%8C%EB%A6%B0%EC%A7%80/">
                    진행중
                  </a>
                </div>
                <div id="main1-3">
                  <a href="https://tvn.cjenm.com/ko/event/-%EB%82%B4%EA%B0%80-%EB%AD%90%EB%9D%BC%EA%B3%A0--WHO-IS-MY-FAN-%EC%B1%8C%EB%A6%B0%EC%A7%80/">
                    [내가 뭐라고] WHO IS MY FAN 챌린지
                  </a>
                </div>

                <div id="main1-4">
                  <a href="https://tvn.cjenm.com/ko/event/-%EB%82%B4%EA%B0%80-%EB%AD%90%EB%9D%BC%EA%B3%A0--WHO-IS-MY-FAN-%EC%B1%8C%EB%A6%B0%EC%A7%80/">
                    <p>
                      <span>기간</span>2023.11.29 - 2023.12.13
                    </p>
                    <p>
                      <span>대상</span>회원/비회원 전체
                    </p>
                    <p>
                      <span>조회</span>164
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="main3">
          <div id="main2-1">당첨발표 및 종료이벤트</div>
          <div id="main2-2">
            <ul>
              <li>
                <a href="https://tvn.cjenm.com/ko/event/?14377=removeCacheYn%3DY%26searchPrgrsStatCd%3DALL&15121=removeCacheYn%3DY%26pageNum%3D1%26searchDispTgtCd%3DMC021173%26searchWord%3D">
                  당첨발표
                </a>
              </li>
              <li>
                <a href="https://tvn.cjenm.com/ko/event/?14377=removeCacheYn%3DY%26searchPrgrsStatCd%3DALL&15121=removeCacheYn%3DY%26pageNum%3D1%26searchDispTgtCd%3DMC021174%26searchWord%3D">
                  종료이벤트
                </a>
              </li>
            </ul>
          </div>
          <div id="main3-1">
            <div id="main2-3">
              전체 <span>18</span>건
            </div>
            <div id="main3-2">
              <input
                type="search"
                placeholder="이벤트명을 검색해보세요."
              ></input>
              <a href="https://tvn.cjenm.com/ko/event/?14377=removeCacheYn%3DY%26searchPrgrsStatCd%3DALL&15121=removeCacheYn%3DY%26pageNum%3D1%26searchDispTgtCd%3DMC021173%26searchWord%3D%25E3%2585%2587%25E3%2585%2587">
                <div id="main3-3"></div>
              </a>
            </div>
          </div>

          <div id="main4">
            <ul id="main4-1">{testImage}</ul>
            <ul id="main4-2">{listItem}</ul>
            <ul id="main4-3">{textImage}</ul>
          </div>
        </div>
      </main>

      <footer>
        <div id="footer1">
          <ul>
            <li>Home</li>
            <li>></li>
            <li>이벤트</li>
          </ul>
        </div>
        <div id="back">
          <div id="footer2">
            <div id="footer3">
              <ul>
                <li>회사소개</li>
                <li>광고/제휴문의</li>
                <li>이용약관</li>
                <li>개인정보 처리방침</li>
                <li>청소년보호정책</li>
                <li>법적고지</li>
                <li>이메일무단수집거부</li>
                <li>큐톤표</li>
                <li>고객센터</li>
                <li>공지사항</li>
              </ul>
            </div>
            <div id="footer4">
              <ul>
                <li>브랜드 바로가기</li>
                <li>계열사 바로가기</li>
              </ul>
            </div>
          </div>
          <div id="lastfooter">
            <div id="footer5">
              <div></div>
              <div className="footer9">
                <div id="footer8">
                  시청자 상담실 (편성 문의 및 시청자 의견) :{" "}
                  <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1068151510&apv_perm_no=">
                    080-080-0780
                  </a>
                </div>
                <div id="footer6">
                  <ul>
                    <li>(주)씨제이이엔엠 대표이사 : 구창근, 윤상현</li>
                    <li>
                      <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1068151510&apv_perm_no=">
                        사업자정보확인
                      </a>
                    </li>
                  </ul>
                </div>
                <div id="footer7">
                  <ul>
                    <li>본점 : (06761) 서울시 서초구 과천대로 870-13</li>
                    <li>사업장 : (03926) 서울시 마포구 상암산로 66</li>
                    <li>사업자 등록번호 : 106-81-51510</li>
                    <li>개인정보 보호책임자 : 강봉관</li>
                  </ul>
                  <ul id="footer10">
                    <li>
                      <a href="https://twitter.com/chtvn">
                        <div></div>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/tvn_joy/">
                        <div></div>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/cjtvngo">
                        <div></div>
                      </a>
                    </li>
                    <li>
                      <a href="https://post.naver.com/my.nhn?memberNo=3669297">
                        <div></div>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/user/TheChtvn">
                        <div></div>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.tving.com/onboarding?gad_source=1&gclid=Cj0KCQiAgqGrBhDtARIsAM5s0_l901c66BXMQ8i8wr5utp9a6QEmBxCo3LeL8kZnGRPJlTVYk7LQr70aAruiEALw_wcB">
                        <div></div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
