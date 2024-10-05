const TaskLayout = ({
  children,
}:  Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className="bg-blue-300 p-4">
      <div>タスクレイアウト</div>
      {children}
    </div>
  )
}

export default TaskLayout

/**
 * フォルダ内にlayout.tsxを配置するとそのフォルダ以下のレイアウトに引き継ぐとこができる
 * また、フォルダ以下の内容を表示するためには上記のようにchildrenを配置しなければいけない
 */