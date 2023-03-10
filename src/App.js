import "./App.css";
import { Navbar } from "./Navbar";

function App() {
  return (
    <div className="ProfilePage">
      <div className="main">
        <Navbar />
        <div className="row">
          <div className="col-md-4 mt-1">
            <div className="card text-center sidebar">
              <div className="card-body">
                <img
                  className="rounded-circle"
                  src="img@url"
                  alt="user-image"
                />
                <div className="user-name mt-3">
                  <div className="user-name">
                    <h3>Name</h3>

                    <h3>NickName</h3>
                  </div>
                  <div className="friends mt-5">
                    <h3># of friends</h3>
                  </div>
                  <div className="rank mt-5">
                    <h3>Rank</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-1">
            <div className="card text-left">
              <div className="recent-submissions">
                <h4>recent subs</h4>
              </div>
              <div className="points mt-5">
                <h3>Points</h3>
              </div>
              <div className="badge mt-5">
                <h3>Badge</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-1">
            <div className="card text-left">
              <div className="ratings">
                <h4>ratings</h4>
              </div>
              <div className="connected-profiles mt-3">
                <h4>connected profiles</h4>
              </div>
              <div className="mail-pref mt-3">
                <h4>mail preferences</h4>
              </div>
              <div className="delete-account mt-2">
                <button className="btn btn-danger-outline">
                  Delete Account
                </button>
                <button className="btn btn-danger-outline">
                  Deactivate Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
