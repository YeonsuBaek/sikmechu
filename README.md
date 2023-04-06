# 식메추 (식사 메뉴를 추천해드려요)

식메추는 사용자에게 여러 가지 옵션을 입력 받아 옵션에 해당하는 메뉴를 추천한다.  
옵션에는 식사 유형, 종류, 탄수화물 선택, 매운 맛 선택, 고기 선택이 있다.

---

## Inspiration

밥에 진심인지라 식사를 할 때마다 메뉴를 고르는 데 기본 30분을 소비한다. 아무리 배달 앱과 주변 식당을 둘러보아도 고민만 늘어 간다.

어느 날 친구와 카페에서 메뉴를 선정하면서 **메뉴 소거법**을 사용하여 단숨에 원하는 메뉴를 찾을 수 있었다. 메뉴 소거법을 활용한 메뉴 선택 프로그램이 있으면 좋겠다고 생각해 **식메추**를 만들게 되었다.

---

## Stacks

### Environment

<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=VisualStudioCode&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"/>

### Development

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"/>

#### 바닐라 JavaScript를 사용한 이유

우아한테크코스 5기 프리코스를 통해 본격적으로 자바스크립트에 입문하게 되었다. 4주간 참여한 미션에서 배운 점을 다시 한번 익히고 활용하기 위해 선택했다.

#### Tailwind CSS를 사용한 이유

클래스명을 설정하지 않고 스타일을 부여할 수 있다는 장점을 알게 되어 선택했다.

---

## Functions

#### 1. 원하는 옵션 선택

#### 2. 옵션에 맞는 음식 추천

---

## Demo

Not yet

---

## Try it out

[보러 가기](sikmechu.vercel.app)

---

## I learned it

### 1. 자바스크립트 내장함수 활용하기

자바스크립트 내장함수를 알기 전에는 for문과 if문만을 사용해 기능을 구현하였다. 이렇게 코드를 짜는 것은 쉬운 난이도이지만, 코드가 길어지고 속도나 메모리 상으로 비효율적이다.

우아한테크코스 5기 프리코스를 진행하며 사용한 내장함수를 적극적으로 활용하고자 노력하였다.

[직접 정리한 Array 내장함수](https://velog.io/@yeonsubaek/JavaScript-Array%EB%B0%B0%EC%97%B4-%EB%82%B4%EC%9E%A5%ED%95%A8%EC%88%98)  
[직접 정리한 String 내장함수](https://velog.io/@yeonsubaek/JavaScript-String%EB%AC%B8%EC%9E%90%EC%97%B4-%EB%82%B4%EC%9E%A5%ED%95%A8%EC%88%98)

### 2. 함수 하나 당 하나의 일을 하도록 리팩터링하기

함수 하나 당 하나의 일을 할 수 있도록 최대한 함수를 쪼개서 관리했다. 함수가 하는 일을 함수명에 드러나도록 네이밍을 신중하게 짓는 연습도 하였다.

잘게 쪼개어 리팩터링하니 나중에 코드를 다시 살펴볼 때 이해가 잘 되었고 유지보수를 하기 좋았다.

---

## Issue Process

iOS에서 JSON을 사용하며 겪은 문제 해결  
[해결 과정 보러가기](https://velog.io/@yeonsubaek/JavaScript-iOS%EC%97%90%EC%84%9C-JSON-%EC%82%AC%EC%9A%A9%ED%95%A0-%EB%95%8C-%EC%A3%BC%EC%9D%98%ED%95%A0-%EC%A0%90)

iOS에서 innerText를 사용하며 겪은 문제 해결  
[해결 과정 보러가기](https://velog.io/@yeonsubaek/iOS%EC%97%90%EC%84%9C-innerText-%EC%82%AC%EC%9A%A9%ED%95%A0-%EB%95%8C-%EC%A3%BC%EC%9D%98%ED%95%A0-%EC%A0%90)
