import "./Table.css";

function Table({ data }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee</th>
            <th>Department</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;