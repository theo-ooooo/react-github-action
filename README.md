### 따라하며 배우는 React A-Z

- TODO APP 만들기
- 컴포넌트로 구분하여 나눠 컴포넌트 설계
- React.memo로 컴포넌트 최적화
- useCallback 으로 함수 최적화
  - 함수를 props로 내려줄때, 리렌더링 될때마다 함수를 재선언 하므로, 의존성 배열에 변하는 변수를 넣어두고
  - 변수가 변할때마다 함수를 재선언하라고 useCallback를 사용하자.
  ```
    const handleClick = useCallback(
    (id) => {
      const newTodoData = todoData.filter((todo) => todo.id !== id);
      setTodoData(newTodoData);
    },
    [todoData]
  );
  ```
  - useMemo를 이용한 결과 값 최적화
    - Memoization?
      - 메모이제이션은 비용이 많이 드는 함수 호출의 결과를 저장하고 동일한 입력이 다시 발생할 때 캐시된 결과를 반환하여 컴퓨터 프로그램의 속도를 높이는 데 주로 사용되는 최적화 기술.
