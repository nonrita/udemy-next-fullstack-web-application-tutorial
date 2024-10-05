import { NextResponse } from "next/server"

export interface Task {
  id: number
  name: string
}

const tasks: Task[] = [
  { id: 1, name: 'プログラミング'},
  { id: 2, name: 'ランニング'},
]

export const GET = async () => {
  return NextResponse.json({ tasks }, {
    status: 200
  })
}

export const dynamic = 'force-dynamic';


/**
 * ルートハンドラーとはAPIを直接開発するための機能です
 * APPルーターの機能を用いてエンドポイントの定義も可能です
 * apiフォルダ内に設定することは決められていませんが区別しやすくするために多くで使われている
 * 公開する関数名によりどのような処理をするのかが決まります。
 * GETという名前の関数であれば、Getでのアクセスを待ち受けます
 * POSTという名前の関数であれば、POSTでのアクセスを待ち受けます
 * またルートハンドラーはデフォルトの設定では静的な様相としてビルドされるので、更新頻度が高いサービスの際は古い情報が更新されないという問題が起こります。
 * そのため、export const dynamic = 'force-dynamic';と設置することでルートごとに動的に実行されるように実行する必要があります
 */