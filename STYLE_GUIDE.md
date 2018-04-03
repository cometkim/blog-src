# 프로젝트 스타일 가이드

## 디렉토리 구조

일반적인 프로젝트 설정파일은 프로젝트 루트에 위치한다.

- `blog-posts/`: 블로그 포스트 저장소 (서브모듈로 참조)
- `static/`: 사이트에 그대로 배포할 정적 파일들
- `starter/`: 스타터 프로젝트의 정보

src 하위의 각 디렉토리는 Node 모듈로써 사용된다.

- `src/`
  - `assets/`: 정적 리소스
  - `components/`: 재사용 컴포넌트
  - `pages/`: (템플릿 사용하지 않는) 단일 페이지
  - `templates/`: 페이지 템플릿
  - `utils/`: 자주 사용하는 코드 라이브러리

## 모듈 간 참조 관계

각 모듈은 예외 없이 아래 참조관계를 따르도록 하여 순환 참조하는 경우가 없도록 한다.

```txt
components, pages, templates -> assets
components, pages, templates -> utils
pages, templates -> components
pages -> templates
```
