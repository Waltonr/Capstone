import React, {Fragment} from "react";
import Recommendation from "../Recommendation/Recommendation";


const DisplayRecommendation = (props) => {


    return (
        <div>
            <Fragment>
                {props.getAllRecommendsProperty &&
                    props.getAllRecommendsProperty.map((recommends, index) => {
                        return(
                            <p className="form-control" key={recommends.id}>
                                <Recommendation recommends={recommends} recommendId={recommends.id} />
                            </p>
                        )
                        }
                )}
            </Fragment> 
        </div>
    );
}
 
export default DisplayRecommendation;