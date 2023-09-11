import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

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
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    </>
  );
}