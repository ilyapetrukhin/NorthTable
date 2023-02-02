import './App.css';
import React  from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { useSelector, shallowEqual } from "react-redux"

const App: React.FC = () => {

  const data: IData[] = useSelector(
    (state: DataState) => state.data,
    shallowEqual
  )
  
  return (
    <div className="App">
      <DataTable value={data}>
        <Column field="date" header="Дата" />
        <Column field="oil" header="Добыча нефти, т/сут" />
        <Column field="liquid" header="Добыча жидкости, м3/сут" />
      </DataTable>
    </div>
  );
}

export default App;
