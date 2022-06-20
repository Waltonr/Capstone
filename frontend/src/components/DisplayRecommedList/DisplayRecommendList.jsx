import React, {Fragment} from "react";
import Recommendation from "../Recommendation/Recommendation";


const DisplayRecommendation = (props) => {


    return (
        <div>
            <Fragment>
                {props.getAllRecommendsProperty &&
                    props.getAllRecommendsProperty.map((recommend, index) => {
                        return(
                            <p className="form-control" key={recommend.id}>
                                <Recommendation recommends={recommend} recommendId={recommend.id} />
                            </p>
                        )
                        }
                )}
            </Fragment> 
        </div>
    );
}
 
export default DisplayRecommendation;