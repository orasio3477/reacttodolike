import "./App.css";
import { useState } from "react";

function App() {
  const [값, 값변경] = useState("");
  const [todos, setTodos] = useState([
    { text: "공부하기", like: 0, liked: false },
    { text: "운동하기", like: 0, liked: false },
  ]);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <>
      <div style={{ backgroundColor: isChecked ? "black" : "white" }}>
        <label>
          <span
            style={{
              color: isChecked ? "white" : "black",
              fontWeight: isChecked ? "bold" : "normal",
            }}
          >
            {isChecked ? "블랙" : "화이트"}
          </span>
          <br />
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
        </label>
      </div>
      <div>
        <select
          value={selectedItem}
          onChange={(e) => {
            setSelectedItem(e.target.value);
          }}
        >
          <option value="">-- 선택하세요 --</option>
          <option value="검은색바지">검은색바지</option>
          <option value="파란색바지">파란색바지</option>
          <option value="빨간색바지">빨간색바지</option>
        </select>
        <p>선택한 아이템: {selectedItem}</p>
      </div>
      <input
        value={값}
        onChange={(e) => {
          값변경(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTodos([...todos, { text: 값, like: 0, liked: false }]);
          값변경("");
        }}
      >
        버튼
      </button>
      {todos.map((t, index) => {
        return (
          <div key={index}>
            <span>
              <h1>{t.text}</h1>
              <p>Like: {t.like}</p>
            </span>
            <button
              onClick={() => {
                const 삭제 = todos.filter((todo, 인덱스) => {
                  return 인덱스 !== index;
                });
                setTodos(삭제);
              }}
            >
              삭제
            </button>
            <button
              onClick={() => {
                if (t.liked) {
                  const update = todos.map((todo, i) => {
                    if (i === index) {
                      return { ...todo, like: todo.like - 1, liked: false };
                    }
                    return todo;
                  });
                  setTodos(update);
                } else {
                  const update = todos.map((todo, i) => {
                    if (i === index) {
                      return { ...todo, like: todo.like + 1, liked: true };
                    }
                    return todo;
                  });
                  setTodos(update);
                }
              }}
            >
              {t.liked ? "좋아요 취소" : "좋아요"}
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;
