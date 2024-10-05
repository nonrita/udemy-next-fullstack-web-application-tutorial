import { Task } from "@/app/api/tasks/route"

const getTasks = async () => {
  const response = await fetch('http://localhost:3000/api/tasks', {
    method: 'GET',
    cache: 'no-store'
  })

  return await response.json()
}

const TaskPage = async () => {
  const tasks = (await getTasks()).tasks as Task[]
  return (
    <div>
      <div>TaskPage</div>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>{task.name}</div>
        ))}
      </div>
    </div>
  )
}

export default TaskPage

/**
 * appフォルダ内のpage.tsxの入っているフォルダ名がエンドポイントとリンクする
 * page.tsxはデフォルトエクスポートでなければいけない
 */

/**
 * fetch関数の第一引数にはAPIのURLをわたし、第二引数にはオブジェクトとしてさまざまな設定情報を渡します。
 * 例えば、methodであればなにで情報を撮りに行くのかgetなのかpostなのかputなのかなどを設定する項目です
 * また、cacheでは、キャッシュどのようにするのかについて設定するます。キャッシュを保存するのかしないのかなどを設定します
 * Nextではデフォルトでキャッシュを使用する設定になっているので更新頻度の高いサイトなどでは設定が必要です
 */