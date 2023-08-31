# Nest.js Basic Templates

Nest.js 프레임워크 기반 Node 프로젝트 기본 템플릿

<br/>

## TODO

### `설정파일 세팅`

-   EsLint & Prettier 설정
    ([EsLint 설정 내용 참고](https://www.daleseo.com/eslint-config/))

        ```bash
          <Prettier>

          {
          "singleQuote": true,
          "trailingComma": "all",
          "tabWidth": 4, # 탭 너비
          "printWidth": 108,
          "editor.formatOnSave": true # 저장 시 format 변경
          }
        ```

-   Path Mapper 설정
-   tsconfig.json 설정: 기본 설정에 아래 옵션들 추가
    ```json
    {
        "esModuleInterop": true, // CommonJS 모듈을 import 하기 위한 옵션
        "strict": true, // 엄격한 null check 옵션
        "resolveJsonModule": true, // JSON 형식을 지원하기 위한 옵션
        "paths": {} // 상대경로 지정을 위한 path Mapper 설정
    }
    ```

### `Nest.js 프레임워크 기능 세팅`

-   GlobalPrefix
-   Interceptor - Custom Logger
-   Guard - JWT
-   ClassValidator
-   ClassTransformer
-   ValiationPipe
-   Custom Decorator
-   Exception Filter
-   Middleware

### `DataBase & 테스트 환경 세팅`

-   TypeORM(MySql)
-   Repository Patterns
-   Docker & Docker-compose
-   Sample Test Code with JEST

### `API`

-   REST & Swagger
-   GraphQL

<br/>

## Environments
