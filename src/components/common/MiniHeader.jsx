import React from "react";

const MiniHeader = () => {
  return (
    <div>
      {/* hedline */}
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 p-2">
            {/* <span>CrossFit Gym in Pune, Katraj</span> */}
            <span class="float-end">Join :- +919021373247</span>
          </div>
        </div>
      </div>
      <div className="bg-dark line"></div>
    </div>
  );
};

export default MiniHeader;
