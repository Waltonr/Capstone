import React, {Fragment} from "react";
import NonRecommendation from "../NonRecommendation/NonRecommendation";


const DisplayNonRecommendation = (props) => {


    return (
        <div>
            <Fragment>
                {props.getAllNonRecommendsProperty &&
                    props.getAllNonRecommendsProperty.map((nonrecommends, index) => {
                        return(
                            <p className="form-control" key={nonrecommends.id}>
                                <NonRecommendation nonrecommends={nonrecommends} />
                            </p>
                        )
                        }
                )}
            </Fragment> 
        </div>
    );
}
 
export default DisplayNonRecommendation;