"use client"

const ErrorPage = () => {
  return (
    <div>ErrorPage</div>
  )
}

export default ErrorPage

/**
 * エラーが発生した際にerror.tsxというファイルを実装していればそのページが表示される
 * またエラーが発生したページから一番近いerror.tsxファイルが表示されるのでdashboardでエラーが発生した際は(admin)フォルダの直下にあるerror.tsxファイルが表示される
 */