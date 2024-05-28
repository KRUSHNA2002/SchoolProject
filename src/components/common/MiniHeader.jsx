import React from "react";

const MiniHeader = () => {
  return (
    <div>
      {/* hedline */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 p-2">
            {/* <span>CrossFit Gym in Pune, Katraj</span> */}
            <span className="float-end">Join :- +919021373247</span>
          </div>
        </div>
      </div>
      <div className="bg-dark line"></div>
    </div>
  );
};

export default MiniHeader;
