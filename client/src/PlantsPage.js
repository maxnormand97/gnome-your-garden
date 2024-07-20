import React from "react";

function PlantsPage() {
    return (
    	<div className="container">
				<h1 className="title">
           Plants Page!
          </h1>
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
									insert image here
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Card title</p>
                    <p className="subtitle is-6">@username</p>
                  </div>
                </div>
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat the .column div for more cards */}
        </div>
      </div>
    )
}


export default PlantsPage;