import React, { Component } from 'react';

class AliquotPlanDisplay extends Component {
    render() {
        if (this.props.plan == null)
            return "NO PLAN";
        else
            return (
                <div>
                    <h2>Compound: {this.props.plan.name}</h2>
                </div>
            );
    }
}
export default AliquotPlanDisplay;