import React from "react";

export const IncompleteTodos = (props) => {
  const style = {
    backgroundColor: "#c6ffe2",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
  };
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div style={style}>
      <p className="title">未完了のTODO　</p>
      <ul>
        {todos.map((todo, index) => {
          //複数の配列を代入する際は、kye={todo}で識別できるようにしないと仮想ドムの差分のみ抽出ができなくなる。
          return (
            <div key={todo}>
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
