const TaskEditIdPage = ({ params }: { params: { id: string } }) => {
  return <div>{params.id}</div>;
};

export default TaskEditIdPage;

/**
 * 動的ルーティングでは[id]のような鉤括弧でクルられたフォルダを作成しその中にpage.tsxを配置るすことで実装できる
 * また[]で指定した値を上機能ような形で取ってくることも可能
 */