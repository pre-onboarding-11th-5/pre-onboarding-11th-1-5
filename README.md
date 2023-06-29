# 원티드 프리온보딩 인턴십 1주차 과제

## # Getting Started

```
git clone https://github.com/gyuhoBest/wanted-pre-onboarding-frontend.git

npm install
npm start
```

<br><br>

## # 커밋 컨벤션

| Tag Name | Description                                           |
| -------- | ----------------------------------------------------- |
| Feat     | 새로운 기능 추가                                      |
| Fix      | 버그수정                                              |
| Style    | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
| Design   | CSS 등 사용자 UI 변경                                 |
| Refactor | 코드 리팩토링                                         |
| Docs     | 문서 수정                                             |
| Chore    | 빌드 업무, 패키지 매니저, 패키지 관지라 구성 등 수정  |
| Test     | 테스트 코드, 리팩토링 테스트 코드 추가                |
| Rename   | 파일 혹은 몰더명 수정하거나 옮기는 작업만 한 경우     |
| Remove   | 파일을 삭제하는 작업만 한 경우                        |

<br><br>

## # 폴더 구조

- hook을 한 곳에서 관리하기 위해 개별 컴포넌트에 존재하던 훅들을 상위 레벨의 hook폴더로 모두 이동시켰습니다.<br>

**- 변경 전 -**

```
├─axiosInstance  // axios 객체 생성
├─components
│  ├─Auth
│  │  └─hooks
│  ├─Header
│  └─Todo
│      └─hooks
├─hooks   // 공통적으로 사용할 custom hook
├─pages   // page단위 컴포넌트
│  ├─authPage
│  ├─landingPage
│  └─todoPage
├─routes  //라우팅
├─styles // css 관련 파일들 (breakpoints, css reset 등)
└─types  // 공통적으로 사용할 type들 선언

```

**- 변경 후 -**

```
├─axiosInstance
├─components
│  ├─Auth
│  ├─Header
│  └─Todo
├─hooks
├─pages
│  ├─authPage
│  ├─landingPage
│  └─todoPage
├─routes
├─styles
└─types
```

## # 그 밖의 코드 변경

### ## 1. 커밋 컨벤션을 강제하고, linting을 자동화 하기 위해 commitlint, husky를 적용했습니다.

<br>

### ## 2. api를 호출할 때마다 localStorage에서 jwt토큰을 가져오던 것을, axios interceptor를 사용하여 반복되는 코드를 줄였습니다.

![image](https://github.com/pre-onboarding-11th-5/pre-onboarding-11th-1-5/assets/68717963/70afd56f-5a1e-4b14-b332-8bb6fe75a208)
<br>
