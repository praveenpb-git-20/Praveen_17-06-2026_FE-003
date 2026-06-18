import "./App.css";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Table from "./components/Table/Table";

function App() {

  const employees = [
    {
      id: 1,
      name: "Praveen",
      department: "Development"
    },
    {
      id: 2,
      name: "Swetha",
      department: "HR"
    },
    {
      id: 3,
      name: "Girish",
      department: "Testing"
    }
  ];

  return (
    <div className="container">

      <h1>FlowTrack 360</h1>

      <div className="buttons">
        <Button label="Add Employee" onClick={addEmployee}/>

        <Button label="Approve Task" variant="success" onClick={approveTask}/>

        <Button label="Delete Employee" variant="danger" onClick={deleteEmployee}/>
      </div>

      <div className="cards">
        <Card
          title="Employee Management"
          description="Manage employee records efficiently."
        />

        <Card
          title="Task Tracking"
          description="Track project tasks and progress."
        />

        <Card
          title="Performance Analytics"
          description="Analyze employee productivity."
        />
      </div>

      <br />

      <Table data={employees} />

    </div>
  );
}

function addEmployee() {
  alert("New Employee Added Successfully");
}

function approveTask() {
  alert("Task Approved");
}

function deleteEmployee() {
  alert("Employee Deleted");
}

export default App;