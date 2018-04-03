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

## 코딩 스타일

코딩 스타일은 TSLint에서 tslint:recommended 를 오버라이딩해서 사용한다.

## 스니펫

각 모듈 별로 코드 구조를 설명하는 스니펫을 만들어 따른다.

### Stateless 컴포넌트

```tsx
import * as React from 'react'
import styled from 'styled-components'

type MyComponentProps = {
    param: string
}

export default ({ param }: MyComponentProps) => {
    <Container>
        {/* Do render something */}
    </Container>
}

const Container = styled.div`
    display: flex;
`
```

- 상태를 가지지 않는 컴포넌트의 경우 SFC 스타일로 정의한다.
- CSS 스타일은 styled-components를 이용하고 render 코드를 최대한 시맨틱하게 유지한다.
- Prop Types 정의는 TypeScript의 Type Alias를 사용한다.
- 인자는 Destructuring 해서 받는다.

### Stateful 컴포넌트

```tsx
import * as React from 'react'
import styled from 'styled-components'

type MyComponentProps = {
    required: string;
    optional?: string;
}

type MyComponentState = {
    count: number;
    clicked: boolean;
}

export default class MyComponent extends React.PureComponent<MyComponentProps, MyComponentState> {
    static defaultProps: Partial<MyComponentProps> = {
        optional: 'This is a default prop',
    }

    state = {
        count: 0,
    }

    componentDidMount() {
        // Do something in lifecycle method
    }

    handleOnClick = () => {
        // Do something in custom method
        this.setState({ ++count })
    }

    render() {
        return (
            <>
                <p>Clicked {this.state.count} times</p>
                <MyButton onClick={this.handleOnClick}>Click!</MyButton>
            </>
        )
    }
}

const MyButton = styled.button`
`
```

- 상태를 다루는 컴포넌트는 PureComponent로 정의한다.
- UI 콜백은 메서드로 선언하고, 절대 익명함수나 `.bind()`를 `render()` 안에서 사용하지 않는다.
- 컴포넌트 클래스의 라이프사이클 메서드는 외 모든 커스텀 메서드는 Class Property + Arrow Fucntion 문법을 활용해 정의한다. (사실 constructor에서 직접 바인딩 해주는 것이 더 나을 것이다. 나중에 변경할 것)
- 옵셔널로 선언한 프로퍼티에 대해서 `Partial`을 활용해서 디폴트 값을 정의해준다.
