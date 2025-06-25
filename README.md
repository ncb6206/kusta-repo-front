# KUSTA Repository Frontend

대학생 프로그래밍 대회 정보를 제공하는 웹 애플리케이션입니다.

## 🚀 기술 스택

- **Frontend Framework**: React 19.0.0
- **Language**: TypeScript
- **Build Tool**: Vite 6.3.1
- **Styling**: Tailwind CSS 4.1.4
- **State Management**: TanStack React Query 5.75.4
- **Routing**: React Router DOM 7.5.3
- **HTTP Client**: Axios 1.9.0
- **UI Components**: Lucide React, Recharts, Swiper
- **Code Quality**: ESLint, Prettier
- **Database**: External API (220.76.77:8847)

## 📋 사전 요구사항

다음 도구들이 시스템에 설치되어 있어야 합니다:

- **Node.js** (버전 18.0.0 이상)
- **npm** 또는 **yarn**
- **Docker** (선택사항, 권장)

### Node.js 설치 확인

```bash
node --version
npm --version
```

## 🛠️ 설치 및 실행

### 🚀 완전 자동 설정 (권장)

Node.js 설치부터 개발 서버 실행까지 모든 과정을 자동으로 처리합니다:

```bash
git clone <repository-url>
cd kusta-repo-front
./scripts/setting.sh
```

**지원하는 운영체제:**
- ✅ Linux (Ubuntu, CentOS 등)
- ✅ macOS
- ⚠️ Windows (수동 설치 안내)

### 🐳 Docker 사용 (추천)

Docker를 사용하면 환경 설정 없이 바로 실행할 수 있습니다:

#### 개발 환경
```bash
# 개발 서버 실행
docker-compose up dev
```

#### 프로덕션 빌드
```bash
# 프로덕션 빌드 및 실행
docker-compose up prod
```

#### Docker 이미지 직접 빌드
```bash
# 이미지 빌드
docker build -t kusta-frontend .

# 컨테이너 실행
docker run -p 80:80 kusta-frontend
```

### 🔍 DB 연결 테스트

DB 서버 연결 상태를 확인할 수 있습니다:

```bash
# DB 연결 테스트
./scripts/test-db-connection.sh
```

**DB 서버 정보:**
- **주소**: `220.76.77:8847`
- **프로토콜**: HTTP
- **환경 변수**: `VITE_AXIOS_PROD_BASE_URL`

### 📋 수동 설치 및 실행

#### 1. 저장소 클론

```bash
git clone <repository-url>
cd kusta-repo-front
```

#### 2. 환경 변수 설정

`env.example` 파일을 참고하여 `.env` 파일을 생성하세요:

```bash
cp env.example .env
```

#### 3. 의존성 설치

npm을 사용하는 경우:
```bash
npm install
```

yarn을 사용하는 경우:
```bash
yarn install
```

#### 4. 개발 서버 실행

npm을 사용하는 경우:
```bash
npm run dev
```

yarn을 사용하는 경우:
```bash
yarn dev
```

개발 서버가 실행되면 브라우저에서 `http://localhost:5173`으로 접속할 수 있습니다.

## 📜 사용 가능한 스크립트

- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm run preview` - 빌드된 앱 미리보기
- `npm run lint` - ESLint를 사용한 코드 검사

## 🏗️ 프로젝트 구조

```
src/
├── api/                 # API 관련 함수들
├── assets/             # 정적 자산 (이미지, 아이콘 등)
├── components/         # 재사용 가능한 컴포넌트들
│   ├── common/         # 공통 컴포넌트
│   ├── main/           # 메인 페이지 컴포넌트
│   ├── profile/        # 프로필 관련 컴포넌트
│   └── school/         # 학교 관련 컴포넌트
├── constants/          # 상수 정의
├── hooks/              # 커스텀 훅들
│   ├── api/            # API 관련 훅들
│   └── common/         # 공통 훅들
├── lib/                # 유틸리티 라이브러리
├── pages/              # 페이지 컴포넌트들
├── router/             # 라우팅 설정
├── types/              # TypeScript 타입 정의
└── utils/              # 유틸리티 함수들
```

## 🌟 주요 기능

- **대학 정보 조회**: 전국 대학들의 프로그래밍 대회 정보 제공
- **멤버 검색**: 대학별 멤버 정보 검색 및 조회
- **대회 결과**: 과거 대회 결과 및 수상 이력 확인
- **반응형 디자인**: 모바일과 데스크톱 환경 모두 지원

## 🔧 개발 환경 설정

### 환경 변수

프로젝트 루트에 `.env` 파일을 생성하고 필요한 환경 변수를 설정하세요:

```env
VITE_API_BASE_URL=your_api_base_url
```

### 코드 포맷팅

Prettier를 사용하여 코드 포맷팅을 자동화할 수 있습니다:

```bash
npx prettier --write .
```

## 🐛 문제 해결

### 의존성 설치 오류

만약 의존성 설치 중 오류가 발생한다면:

1. `node_modules` 폴더와 `package-lock.json` 파일을 삭제
2. npm 캐시 정리: `npm cache clean --force`
3. 의존성 재설치: `npm install`

### 포트 충돌

기본 포트(5173)가 사용 중인 경우, Vite는 자동으로 다른 포트를 사용합니다. 터미널 출력을 확인하여 실제 접속 URL을 확인하세요.

## 📝 기여하기

1. 이 저장소를 포크합니다
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 📄 라이선스


## 🤝 문의
프로젝트에 대한 문의사항이 있으시면 이슈를 생성해 주세요.
---

📝 **English Version**: This is a web application that provides information about university programming competitions. It features university information lookup, member search, competition results, and responsive design. Built with React 19, TypeScript, Vite, and Tailwind CSS.
