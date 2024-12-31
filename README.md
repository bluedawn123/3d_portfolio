# 🚀 3D Portfolio

3D 기술을 활용한 포트폴리오 웹 애플리케이션입니다. React와 Three.js를 기반으로 구현되었으며, TailwindCSS로 스타일링하고 Vite로 빌드되었습니다.

---

### **폴더 분리**
- **모든 자산(이미지)은 assets/index.js에서 관리.
- **상수 데이터(navLinks, services, projects)는 constants/index.js에서 관리.
- **컴포넌트는 constants에서 정의된 데이터를 가져와 UI를 렌더링.


## 📂 프로젝트 폴더 구조

3d_portfolio/ 
├── public/ 
  ├── desktop_pc/ # 데스크탑 PC 관련 이미지 및 에셋 │ 
  ├── planet/ # 행성 관련 이미지 및 에셋
├── src/ 
  ├── assets/ # 프로젝트에서 사용되는 이미지 및 아이콘 파일 │
  ├── components/ # React 컴포넌트 파일 │
  ├── constants/ # 상수 데이터를 관리하는 파일 │
  ├── utils/ # 유틸리티 함수 파일 │ 
  ├── App.jsx # 애플리케이션의 메인 컴포넌트 │
  ├── index.css # 전역 스타일링 파일 │
  ├── main.jsx # React 애플리케이션 엔트리 포인트 │ 
  ├── styles.js # 스타일링 관련 변수 및 함수

---

## 🛠️ 사용된 주요 라이브러리 및 기술

### **프레임워크 및 빌드 도구**
- **React**: UI 라이브러리
- **Vite**: 빌드 도구 및 개발 서버

### **3D 및 애니메이션**
- **@react-three/fiber**: React와 Three.js의 통합
- **@react-three/drei**: React Three.js 유틸리티
- **framer-motion**: 애니메이션 라이브러리
- **maath**: 3D 수학 연산 라이브러리

### **스타일링**
- **TailwindCSS**: 유틸리티 기반 CSS 프레임워크
- **postcss**: CSS 후처리 도구
- **autoprefixer**: CSS 브라우저 호환성 처리

### **라우팅 및 유틸리티**
- **react-router-dom**: 라우팅 라이브러리
- **eslint**: 코드 품질 검사
- **eslint-plugin-react**: React 전용 ESLint 플러그인

---

## 📦 의존성 리스트

`npm list`를 통해 확인된 의존성 목록은 다음과 같습니다:

3d_portfolio@0.0.0 C:\Users\YOONJUNHO\Desktop\3d_portfolio ├── @emailjs/browser@4.4.1 ├── @eslint/js@9.17.0 ├── @react-three/drei@9.120.5 ├── @react-three/fiber@8.17.10 ├── @types/react-dom@18.3.5 ├── @types/react@18.3.18 ├── @vitejs/plugin-react@4.3.4 ├── autoprefixer@10.4.20 ├── eslint-plugin-react-hooks@5.1.0 ├── eslint-plugin-react-refresh@0.4.16 ├── eslint-plugin-react@7.37.3 ├── eslint@9.17.0 ├── framer-motion@11.15.0 ├── globals@15.14.0 ├── maath@0.10.8 ├── postcss@8.4.49 ├── react-dom@18.3.1 ├── react-router-dom@7.1.1 ├── react-tilt@1.0.2 ├── react-vertical-timeline-component@3.5.3 ├── react@18.3.1 ├── tailwindcss@3.4.17 └── vite@6.0.6

---
