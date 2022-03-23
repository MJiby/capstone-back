가장 먼저 로컬에 github config 설정
참고 : https://www.lainyzine.com/ko/article/how-to-set-git-repository-username-and-email/

<br><br>

### 1. 레포 클론

코드 작업 디렉토리에 가서

```
git clone https://github.com/JibJiby/capstone-back.git
```

### 2. 패키지 설치

```
npm install
```

### 3. DB 세팅

#### MYSQL

개발 시, Mysql **클라이언트**와 **서버** 설치 필요
서버 설치 이후에는 작업하는 DB 생성

```sql
CREATE DATABASE capstone;
```

#### .env 값 세팅

.fakeenv에 있는 내용 그대로 복사해서 `.env` 파일을 생성 (프로젝트 최상단에)

<br><br>

.env 파일

```
DB_USERNAME=root
DB_PASSWORD=
DB_HOST=localhost
DB_NAME=capstone
COOKIE_SECRET=capstoneback!
```

DB_PASSWORD는 Mysql server 설치하면서 입력한 비밀번호 입력
