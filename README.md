# 원티드 프리온보딩 프론트엔드 코스 사전과제

안녕하세요 요번에 지원하게된 박지훈입니다
<br>
사실저는 작년에 부트캠프를 수료한 경험이 있고 현재 두번째 직장에서 일하고있는 주니어개발자입니다
<br>
직장을 다니면서 많은 고충이 있어 현재 제 개발자로서의 길을 되돌아보고 있는데
<br>
사수없이 일하면서 혼자 개발해온 저로선 트렌드에 맞는 최신기술에 쫓다보니 근본적으로 기본기가 부족하다고 느꼈고
<br>
협업하기에 좋은 클린코드에 있어 많이 부족한점을 스스로 알고있습니다
<br>
그런 저에게 너무 좋은 기회라 생각하여 지원하게 되었고
<br>
꼭 이 코스에 합격하지 않아도 저에겐 이 과제를 하면서 저를 돌아볼수 좋은 계기가  과제를 하면서 제가 놓친부분들도 많이 얻은것같습니다




# 과제풀이

## `git`

사실 아직까지도 git이 어렵고 잘쓰고있는지 고민이 많지만 최대한 gitflow 위주로 commit 단위 와 컨벤션을 지키려고 노력하였습니다

## `Login`

로그인부분은 과제 요구사항인 랜더링 최적화를 고려하여
<br>
useRef를 사용해 input value가 변할때마다 재 랜더링이 되지않게 했습니다


## `GNB`

global navigation bar 같은경우 login페이지에선 나오지않도록 location함수를 이용하여
<br>
url을 가져온뒤 login 페이지일경우엔 안나오게 구현하였으면 요구사항인 sticky를 이용하여 최상단에 고정시켰습니다
<br>
그리고 로그아웃시 react-router-dom 의 navigation 함수를 이용하여 로그아웃 login페이지로 로그인을 하게끔 유도하는 routing을 추가하였습니다
<br>
반응형 같은경우엔 데스크탑 사이즈일경우 space-around 에서 모바일 사이즈일경우 space-between으로 정렬해줬습니다


## Assignment3 - `Validation`

사실 validation 라이브러리를 써왔지 정규표현식은 아직까지 익숙치 않아 여기에서 시간을 많이 할애 하였습니다 
<br>
정규표현식 테스트 사이트인 regexr.com 에서 정규표현식 기초부터 배우면서 구현하였고
<br>
src/utils 폴더에 validation 함수를 모듈화하여 불러오는식으로 구현하였고
<br>
validation 통과 여부에 따라 input들의 border에 
<br>
input props에 통과여부 state 기준으로 가변성을 주었습니다
<br>
그리고 버튼 색상같은경우 useEffect로 아이디/패스워드 input 통과여부 state 변화에따라 
<br>
두 input모두 통과했을시를 기준으로 input과 마찬가지로 props에 state를 이용하여 가변성을 주었습니다



## `Routing`

react-router-dom v6 로 오면서 useHistory 가 useNavigation 으로 바뀐걸로 알고있습니다
<br>
하지만 요구사항에 history.push를 사용하지말기 라는 조건이 있어 v6로 넘오면서 대체된 useNavigate 사용 여부에 혼동이 있어 이부분에 고민이 많았는데
<br>
로그이여부에 따라 redirect 해주는방법은 Navigate 컴포넌트를 이용하였고 
<br>
로그인 버튼을 누를시 메인페이지로 가는 방법은 location함수를 이용하여 구현하였습니다


## Assignment5 - `Feeds`

피드 컴포넌트 같은경우엔 별다른 특이점없이 mockdata 활용하여 데이터를 뿌려주었고 
<br>
다만 걱정했던 부분은 각 게시물에 댓글을 달경우였는데 mock data에도 post 요청으로 데이터를 넣어줄수있나? 라는 점이 궁금했습니다
<br>
아무리 검색해봐도 그런 케이스는 나오질 않아서 결국 axios를 이용하여 데이터를 fetching 해와서 뿌려주고 
<br>
mapping 해줘야되는 댓글 창들같은경우 state에 담아서 setState로 댓글을 추가해주는 식으로 구현했습니다
<br>
이부분의 문제점은 페이지 refresh 할경우 state초기화로 새로 추가한 댓글창 데이터들은 휘발된다는 점인데
<br>
최소 과제 요구사항 구현에는 성공했다고 생각하지만 개인적으로 많이 아쉬운부분이었습니다 

