import React from 'react'
import AliquotDesign from './AliquotDesign.js'
import AliquotPlan from './AliquotPlan.js'
import AliquotPlanDisplay from './AliquotPlanDisplay.js'

class AliquotCalculator extends React.Component {

    constructor(props) {
        super(props); // TODO: obsolete?
        let defaultOptions = {
            compound: "picrotoxin",
            solvent: "DMSO",
            mw: 602.59,
            massMG: 1000,
            stockConcMM: 100,
            bathConcUM: 100
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