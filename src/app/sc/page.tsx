const ServerComponent = () => {
  console.log('Server Component')
  // useState()
  return (
    <div>ServerComponent</div>
  )
}

export default ServerComponent

/**
 * サーバーコンポーネントとはサーバー側で動くコンポーネントです
 * そのためuseStateやOnClick,ブラウザAPIなどが使用できません
 * ですがメリットとして
 * APIキーなどの秘密データをクライアント機公開しなくていい
 * JavaScriptのバンドルサイズが小さくなる
 * パフォーマンスが向上するなどのメリットがあります
 */