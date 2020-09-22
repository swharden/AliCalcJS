import React from 'react'
import AliquotDesign from './AliquotDesign.js'
import AliquotPlan from './AliquotPlan.js'
import AliquotPlanDisplay from './AliquotPlanDisplay.js'

class AliquotCalculator extends React.Component {

    constructor(props) {
        super(props); // TODO: obsolete?
        let defaultOptions = {
            compound: "oxytocin",
            solvent: "water",
            mw: 1007.19,
            massMG: 1,
            stockConcMM: 1,
            bathConcUM: .2
        };
        var defaultPlan = new AliquotPlan(defaultOptions);
        this.state = { plan: defaultPlan };
    }

    updatePlan = (plan) => {
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