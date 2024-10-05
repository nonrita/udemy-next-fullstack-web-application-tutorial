"use client"

const ClientComponent = () => {
  console.log('Client Component')
  return (
    <div>ClientComponent</div>
  )
}

export default ClientComponent

/**
 * クライアントコンポーネントとはクライアント側でレンダリングするコンポーネントのことを言います
 * Nextではデフォルトがサーバーコンポーネントなためファイルの一番最初にuse clientと明記しなければいけません
 */