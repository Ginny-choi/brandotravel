## Brando Travel site
📌 여행 사이트 클론 코딩

📌 반응형 웹사이트

📌 사이트 주소 : https://ginny-choi.github.io/portpolio1

## 프로젝트의 목적
* Html 레이아웃 구성 숙련도를 높이기위함
* 액티비티 갤러리와 아코디언 메뉴 기술을 익히기 위함
* 반응형 웹 제작 숙련도를 높이기 위함


## HTML ,CSS 코드 유효성 통과 
* 링크주소
* 링크주소

---

## 프로젝트 화면 및 소개
+ **메인화면**

![1메인](https://user-images.githubusercontent.com/77954029/126491261-98fbe028-49fc-4a83-93cc-2a987a8706b8.gif)

- 플러그인을 사용하여 터치 슬라이드 구현
- 페이지 버튼 클릭시 해당 버튼 화면으로 넘어감, setInterval apis로 자동 슬라이드 구현
- 터치 슬라이드 혹은 페이지 버튼 클릭시 clearInterval apis로 일시적으로 자동 슬라이드 종료 후 4초 후 재시작 

---
+ **박스이동 화면**

![섹션2](https://user-images.githubusercontent.com/77954029/126509239-738eaa61-c42e-4527-ba13-719d853fa897.png)

- 텍스트 박스의 right값을 0에서 50%로 조정하여 부모 박스에서 hover시 위치 이동함
- rotate로 레이블 박스를 회전 시키고 transform-origin으로 방향을 맞게 조정함 

---
+ **아코디언 메뉴 화면**

![아코디언1](https://user-images.githubusercontent.com/77954029/126490330-c1ba59f5-05f9-498f-92d6-7bc1596d9b30.gif)

* Hasclass apis를 이용하여 클래스를 가진 경우에는 토글 기능만 적용시킴 
---
 
+ **갤러리 액티비티 화면**

![갤러리1](https://user-images.githubusercontent.com/77954029/126467043-a673ffa4-05c4-48b2-8880-1eafeee9da46.gif)


![모달](https://user-images.githubusercontent.com/77954029/126518604-469a4217-a9ec-46c4-a9cf-4c15a6d7d059.png)

* 각 주제 버튼의 인덱스 값을 구하여 조건문으로 주제에 맞는 이미지를 정렬함 
* position : absolute 로 설정하여 top , left 값을 조정함 
* transform:scale(0)으로 설정 후 이미지 등장시 scale(1) 로 설정하여 줌 효과를 나타냄 
* 갤러리 이미지 클릭시 각 이미지에 맞는 정보의 모달화면이 나타남

---
+ **블로그 이미지 화면**

![블로그](https://user-images.githubusercontent.com/77954029/126509245-fcea3da4-371f-40fb-8856-6c9337d9000c.png)

- 총 7개의 이미지로 구성되어 있으며 휠 슬라이드와 터치 슬라이드 그리고 자동 슬라이드로 구현함
- 반응형 사이즈에 따라 화면에 보여지는 이미지 갯수가 달라짐
- 이미지 hover시 커지는 효과 

---

+ **호텔 정보 화면**

![호텔](https://user-images.githubusercontent.com/77954029/126509214-09d00565-d26c-4f8e-aeee-50306d694af6.png)

- 호텔 리스트 메뉴를 배열 처리하여 인덱스 번호에 맞는 호텔 정보 박스를 fadeIn-fadeOut 효과로 나타냄 

---
+ **Contact 화면**

![폼박스](https://user-images.githubusercontent.com/77954029/126516639-c5d840a4-0a5e-435f-865c-bd0dee4dca82.png)

- input, textarea 박스로 구성
- 상단 nav bar를 보면 해당 화면의 메뉴에 밑줄로 위치를 표현함 





