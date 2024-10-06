import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  console.log('ミドルウェア')

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/',
    '/task'
  ]
}

/**
 * middleware.ts を置くことであるアクセスポイントにアクセスした時に共通してする処理を追加できる
 * たとえば、記事を投稿するページに行くときや自分のプロフィール画面にいくとく時にはログインをしているのかチェックすると言うような感じ
 * export const configを設定することでどのアクセスポイントにアクセスした時に処理をするのかを設定できる
 * また、設定しなかった場合全てのアクセスポイントでこの処理をされる
 */