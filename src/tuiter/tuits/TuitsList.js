import React, {useEffect} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import TuitItem from "./TuitItem";
import {findTuitsThunk}
    from "../../services/tuits-thunks";

const TuitList = () => {

    const {tuits, loading} = useSelector(
        state => {console.log(state); return state.tuitsData})
    const dispatch = useDispatch();
    // const tuitsArray = useSelector(state => state.tuitsData)

    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                tuits.map(tuit =>
                                   <TuitItem
                                       key={tuit._id} tuit={tuit}/> )
            }
        </ul>
    );
};
export default TuitList;