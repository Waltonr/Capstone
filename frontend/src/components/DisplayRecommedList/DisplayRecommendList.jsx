import React, {Fragment} from "react";
import Recommendation from "../Recommendation/Recommendation";


const DisplayRecommendation = (props) => {


    return (
        <Fragment>
            {props.getAllRecommendsProperty &&
                props.getAllRecommendsProperty.map((recommends, index) => {
                    return(
                        <p className="form-control" key={recommends.id}>
                            <Recommendation recommends={recommends} />
                        </p>
                    )
                    }
            )}
        </Fragment> 
    );
}
 
export default DisplayRecommendation;