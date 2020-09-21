import React from 'react'
import AliquotDesign from './AliquotDesign.js'
import AliquotPlan from './AliquotPlan.js'
import AliquotPlanDisplay from './AliquotPlanDisplay.js'

class AliquotCalculator extends React.Component {

    constructor(props) {
        super(props); // TODO: obsolete?
        var defaultPlan = new AliquotPlan("Oxytocin", 1007.19, 1, 1, .2);
        this.state = { plan: defaultPlan };
    }

    updatePlan = (plan) => {
        console.info(plan);
        this.setState({ plan: plan });
    };

    render() {
        return (
            <>
                <AliquotDesign plan={this.state.plan} callback={this.updatePlan} />
                <AliquotPlanDisplay plan={this.state.plan} />
            </>
        );
    }
}

export default AliquotCalculator;