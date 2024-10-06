const TaskCard = () => {
  return (
    <div>
      <header>
        <h1>タイトル</h1>
        <div>タスクの説明</div>
      </header>
      <div>
        <div>2024-12-31</div>
        <div>
          <div>{true ? 'Completed' : 'Incomplete'}</div>
          <div>
            <div>編集</div>
            <div>削除</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskCard