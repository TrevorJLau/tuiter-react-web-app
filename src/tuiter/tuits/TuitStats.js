import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

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
    const dispatch = useDispatch()
    return(

            <div className="row">

                <div className="col-3">
                    &#128488;{tuit.replies}
                </div>

                <div className="col-3">
                    &#8635;{tuit.retuits}
                </div>

                <div className="col-3">

                    <i className="bi bi-heart-fill me-2 text-danger" onClick={() => dispatch(
                        updateTuitThunk({
                                            ...tuit,
                                            likes: tuit.likes + 1
                                        }))
                    }

                />
                <span>{tuit.likes}</span>
                </div>

                <div className="col-3">
                    &#10148;
                </div>

            </div>

    );
};
export default TuitStats;

