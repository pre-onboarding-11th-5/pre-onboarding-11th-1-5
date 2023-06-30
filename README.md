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
├─libs
├─pages
│  ├─authPage
│  ├─landingPage
│  └─todoPage
├─styles
└─types
```
<br><br>

## # 그 밖의 코드 변경

### 1. 커밋 컨벤션을 강제하고, linting을 자동화 하기 위해 commitlint, husky를 적용했습니다.

### 2. api를 호출할 때마다 localStorage에서 jwt토큰을 가져오던 것을, axios interceptor를 사용하여 반복되는 코드를 줄였습니다.

![image](https://github.com/pre-onboarding-11th-5/pre-onboarding-11th-1-5/assets/68717963/70afd56f-5a1e-4b14-b332-8bb6fe75a208)
<br><br>

### 3. hooks 리팩토링 - hook에서 중복되거나 불필요한 로직 삭제
**- 변경 전 -** <br>
![image](https://github.com/pre-onboarding-11th-5/pre-onboarding-11th-1-5/assets/68717963/4fff8df3-170c-4966-b2cb-fd54b851270c)

<br>

**- 변경 후 -** <br>
![image](https://github.com/pre-onboarding-11th-5/pre-onboarding-11th-1-5/assets/68717963/ecd4c160-697c-4857-b58b-98a549b5878e)

<br><br>

### 4. Code Splitting - loadable components를 사용하여 컴포넌트를 불러올 때 파일을 읽어와서 초기 속도 개선
![image](https://github.com/pre-onboarding-11th-5/pre-onboarding-11th-1-5/assets/68717963/34bff68f-2c56-4bbe-9061-557c9cdfe0f1)

<br><br>

### 5. ModifyInput 리팩토링 - 입력한 todo의 값이 기존의 todo의 값과 같다면 수정하지 않은걸로 간주, 불필요한 api 통신을 막음
![image](https://github.com/pre-onboarding-11th-5/pre-onboarding-11th-1-5/assets/68717963/5e30fc88-04ef-4698-98fe-a7f12280ece0)

<br><br>

### 6. todo fetch hook 리팩토링
- TodoPage에서 todo 데이터 refetch 하던 로직을 useGetTodos로 이전하여 refetch 기능 추상화
- TodoList 컴포넌트에서 todo 데이터를 관리하던 것을 useGetTodos 훅으로 이전하여 관심사 분리 및 확장성 개선
![image](https://github.com/pre-onboarding-11th-5/pre-onboarding-11th-1-5/assets/68717963/94c6461b-760c-4188-9508-a061d9e56dff)

<br><br>

### 7. useInput
- 반복되는 input 핸들링 로직을 커스텀훅으로 관리하여 코드 중복 해결
![image](https://github.com/pre-onboarding-11th-5/pre-onboarding-11th-1-5/assets/68717963/9afb9d74-f53c-4595-986a-a92cfc734407)

<br><br>

### 8. TodoInput 리팩토링
- 불필요하다고 판단되는 isCompleted를 삭제하고 useInput 적용
- Todo 입력 시, input이 초기화 되는 로직 추가
![image](https://github.com/pre-onboarding-11th-5/pre-onboarding-11th-1-5/assets/68717963/56689707-605c-4f1b-95d4-afcd8d1b0be9)


<br><br>

### # [노션 링크](https://lean-mahogany-686.notion.site/1-34fe7482542d4185973b2335e4b88f49)
### # [배포 링크](https://pre-onboarding-11th-1-5.vercel.app/)