## 기술 스택
FrontEnd : html, css, javascript

BackEnd : NodeJS(express) passport pug bcrypt html2canvas

db : mongodb AWSS3

devops : git

## Routing
ver2
```
routes

GET /

/auth
GET, POST /auth/login
GET, POST /auth/join

auth OAuth2.0
/auth/join/google
/auth/join/kakao
/auth/join/naver

POST /auth/logout

/user
GET, Post /user/profile (POST: edit-profile)
GET, Post /user/createcard

(라우팅 방식 고민중...)
GET, Post /user/namecard
GET, Post /namecard/[:id]

/api
/api/namecard/[:id]
/api/
```

## DataBase

User{
User-Infomation,
nameCards:[]
}

NameCard{
userID,
\_id => unique Link
}

Sessions {

}

## OAuth Login

GitHub + Google => passport.js
Naver, Kakao => 생성 예정

PassportJS <=> MongoDB 연동하기
auth, root Router 정리


## 목표
html2Canvas
PassportJs + OAuth
Routing 정리 => ReadME에 정리