import "./App.css";
import { useState } from "react";

function App() {
  const [값, 값변경] = useState("");
  const [todos, setTodos] = useState(["공부하기", "운동하기"]);

  return (
    <>
      <input
        value={값}
        onChange={(e) => {
          값변경(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTodos([...todos, 값]);
          값변경("");
        }}
      >
        버튼
      </button>
      {todos.map((t, Index) => {
        return (
          <div key={Index}>
            <span>
              <h1>{t}</h1>
            </span>
            <button
              onClick={() => {
                const 삭제 = todos.filter((todo, 인덱스) => {
                  return 인덱스 !== Index;
                });
                setTodos(삭제);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;
