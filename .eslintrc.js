module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'], // * Eslint에서 기본 제공하는 rules에 추가적인 규칙을 적용할 수 있게 플러그인을 등록
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'], // * 외부에서 이미 정립된 Eslint 규칙 설정을 불러와 적용
    root: true, // * 현재 디렉터리 단계에서 lint 파일을 찾으면 더 상위 디렉터리로 올라갈지 여부(true이면 처음으로 발견한 lint 파일의 단계에서 멈춤. 즉, 상위 폴더의 영향을 받지 않음)
    // * env : 각 런타임 환경에 해당 설정 내용을 알려주는 설정
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    // * rules : 규칙 하나하나를 세세하게 제어하기 위한 것. extends에서 설정된 규칙 위에 덮어쓸 수 있음.
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    },
};
