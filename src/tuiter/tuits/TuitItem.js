import React from "react";
import TuitStats from "./TuitStats";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";
const TuitItem = (
    {
        tuit = {

        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">

                <div className="col-2">
                    <img width={48} className="rounded-circle rounded-3" src={`${tuit.image}`}/>
                </div>

                <div className="col-10">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>


                    <div> {tuit.userName} - {tuit.handle} - {tuit.time}</div>
                    <div>{tuit.tuit}</div>

                    <TuitStats key={tuit._id} tuit={tuit}/>


                </div>

            </div>
        </li>
    );
};
export default TuitItem;

