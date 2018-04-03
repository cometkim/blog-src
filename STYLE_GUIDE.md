# 프로젝트 스타일 가이드

## 디렉토리, 모듈 구조

- `blog-posts/`: 블로그 포스트 저장소 (서브모듈로 참조)
- `static/`: 사이트에 그대로 배포할 정적 파일들
- `starter/`: 스타터 프로젝트의 정보

- `src/`
  - `assets/`: 정적 리소스
  - `components/`: 재사용 컴포넌트
  - `pages/`: (템플릿 사용하지 않는) 단일 페이지
  - `templates/`: 페이지 템플릿
  - `utils/`: 자주 사용하는 코드 라이브러리

### 모듈 참조 관계

```txt
components, pages, templates -> assets
components, pages, templates -> utils
pages, templates -> components
pages -> templates
```
