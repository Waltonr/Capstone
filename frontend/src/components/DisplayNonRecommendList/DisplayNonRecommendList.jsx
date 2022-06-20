import React, {Fragment} from "react";
import NonRecommendation from "../NonRecommendation/NonRecommendation";


const DisplayNonRecommendation = (props) => {


    return (
        <div>
            <Fragment>
                {props.getAllNonRecommendsProperty &&
                    props.getAllNonRecommendsProperty.map((nonRecommends, index) => {
                        return(
                            <p className="form-control" key={nonRecommends.id}>
                                <NonRecommendation nonRecommends={nonRecommends} nonRecommendId={nonRecommends.id} />
                            </p>
                        )
                        }
                )}
            </Fragment> 
        </div>
    );
}
 
export default DisplayNonRecommendation;