'use server'

interface FormState {
  error: string
}

export const createTask = async (taskId: number, state: FormState, formData: FormData) => {
  // DBにタスクを作成
  console.log('タスクを作成しました')
  console.log(formData.get('name'))
  console.log(taskId)
  state.error = 'エラーが発生しました'
  return state
}

/**
 * サーバーアクションズとはAPIを使用せずに直接サーバー側にある関数を実行することで来る機能のことです
 * fetchなどの不要なJSを減らせることができパフォーマンスを向上させることができます。
 * また、コードがシンプルになり保守性が向上するといったメリットもあります。
 * フォームの情報はFormData型の値で受け取ることができ、そのほかの情報に関しては引数に設定することにより受け取ることができます。
 */

/**
 * useFormStateを使用するためにFormState型の引数を受け取りstateを返す
 */