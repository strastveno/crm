import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';

function Tasks({ tasks, setTasks }) {
  const [data, setData] = useState({
    columns: [],
    rows: []
  });

  useEffect(() => {
    const columns = [
      {
        label: 'ID',
        field: 'id'
      },
      {
        label: 'Opis',
        field: 'description'
      },
      {
        label: 'Rok',
        field: 'due_date'
      },
      {
        label: 'Završeno',
        field: 'completed'
      }
    ];

    const rows = tasks.map(task => {
      return {
        ...task,
        completed: <input type="checkbox" onChange={() => handleCompletion(task.id)} />
      };
    });

    setData({ columns, rows });
  }, [tasks]);

  const handleCompletion = (id) => {
    
  };

  return (
    <div className="tasks-container">
      <MDBDataTable
        striped
        bordered
        hover
        data={data}
      />
    </div>
  );
}

export default Tasks;
