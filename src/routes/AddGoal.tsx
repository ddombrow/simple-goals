function AddGoal() {
    return (
      <>
        <div className="content">
          <div className="actionBar">
            <a className="actionLink" href={`/add-goal`}>Add Goal</a>
            <a className="actionLink" href={`/`}>Today</a>
            <a className="actionLink" href={`/reports`}>Reports</a>
            <a className="actionLink" href={`/settings`}>Settings</a>
          </div>
          <div className="goalContent">
            <h1>Add Goal</h1>
          </div>
        </div>
      </>
    );
}

export default AddGoal;