import React from "react";

const TuitStats = (
    {
        tuit = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    return(

            <div className="row">

                <div className="col-3">
                    &#128488;{tuit.replies}
                </div>

                <div className="col-3">
                    &#8635;{tuit.retuits}
                </div>

                <div className="col-3">
                    &hearts; {tuit.likes}
                </div>

                <div className="col-3">
                    &#10148;
                </div>

            </div>

    );
};
export default TuitStats;

