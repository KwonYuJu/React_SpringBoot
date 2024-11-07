import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const Loading = <div>Loading....</div>;

// 할일 목록
const TodoList = lazy(() => import("../pages/todo/ListPage"));

// 할일 조회
const TodoRead = lazy(() => import("../pages/todo/ReadPage"));

// 할일 추가
const TodoAdd = lazy(() => import("../pages/todo/AddPage"));

// 할일 수정
const TodoModify = lazy(() => import("../pages/todo/ModifyPage"));

const todoRouter = () => {
  return [
    // 할일 목록
    {
      path: "list",
      element: (
        <Suspense fallback={Loading}>
          <TodoList />
        </Suspense>
      ),
    },
    {
      path: "", // 'todo/'로 가면
      element: <Navigate replace={true} to={"list"} />, // list가 리다이렉트 되게
    },
    // 할일 조회
    {
      path: "read/:tno", // :tno는 id (URL Params)
      element: (
        <Suspense fallback={Loading}>
          <TodoRead />
        </Suspense>
      ),
    },
    // 할일 추가
    {
      path: "add",
      element: (
        <Suspense fallback={Loading}>
          <TodoAdd />
        </Suspense>
      ),
    },
    // 할일 수정
    {
      path: "modify/:tno", // :tno는 id (URL Params)
      element: (
        <Suspense fallback={Loading}>
          <TodoModify />
        </Suspense>
      ),
    },
  ];
};

export default todoRouter;
