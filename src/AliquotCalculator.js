import React from 'react'
import AliquotDesign from './AliquotDesign.js'
import AliquotPlan from './AliquotPlan.js'
import AliquotPlanDisplay from './AliquotPlanDisplay.js'

class AliquotCalculator extends React.Component {
    state = { plan: new AliquotPlan() }

    updatePlan = newState => {
        this.setState({ plan: this.state.plan.update(newState) });
    }

    render() {
        const { plan } = this.state
        const { updatePlan } = this

        return (
            <>
                <AliquotDesign plan={plan} updatePlan={updatePlan} />
                <AliquotPlanDisplay plan={plan} />
            </>
        );
    }
}

export default AliquotCalculator;