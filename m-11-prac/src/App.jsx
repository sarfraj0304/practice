import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getExpenseData, updateData } from "./redux/expenseSlice";

function App() {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState({
    owner: "hasan@gmail.com",
    _page: +searchParams.get("_page") || 1,
    _limit: +searchParams.get("_limit") || 2,
  });

  useEffect(() => {
    dispatch(getExpenseData());
  }, [searchParams]);

  useEffect(() => {
    setSearchParams(params);
  }, [params]);

  return (
    <div className="App">
      <select
        onChange={(e) => {
          if (e.target.value == "") {
            delete params.type;
            setParams({ ...params });
          } else {
            setParams({ ...params, type: e.target.value });
          }
        }}
      >
        <option value=""></option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <button
        onClick={() => setParams({ ...params, _page: params._page - 1 })}
        disabled={params._page == 1}
      >
        Prev
      </button>
      <button onClick={() => setParams({ ...params, _page: params._page + 1 })}>
        Next
      </button>

      <button
        onClick={() =>
          dispatch(updateData({ id: 1, data: { amount: 100000 } }))
        }
      >
        {" "}
        Update
      </button>
    </div>
  );
}

export default App;
