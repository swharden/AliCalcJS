import React from 'react'
import AliquotPlan from "./AliquotPlan.js"

class AliquotDesign extends React.Component {

    constructor(props) {

        // TODO: what's the deal with obsolete super?
        super(props);

        this.state = {
            name: props.plan.name,
            mw: props.plan.mw,
            mass: props.plan.mass,
            aliquotConc: props.plan.aliquotConc,
            bathConc: props.plan.bathConc
        };
        this.handleChange = this.handleChange.bind(this);
    }

    sendNewPlan() {
        let plan = new AliquotPlan(
            this.state.name,
            this.state.mw,
            this.state.aliquotConc,
            this.state.bathConc
        )
        this.props.callback(plan);
    }

    handleChange(e) {
        this.setState(
            { [e.target.name]: e.target.value },
            this.sendNewPlan
        );

        // The name of the HTML element defines
        // which class variable to set with its value.

        // Also placing the callback function name (without ())
        // inside the setState function ensures state change
        // happens before the function is called.
    };

    render(props) {
        return (
            <>
                <div>
                    <label>Compound:</label>
                    <input
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        type="text" />
                </div>

                <div>
                    <label>MW (g / mol):</label>
                    <input
                        name="mw"
                        value={this.state.mw}
                        onChange={this.handleChange}
                        type="text" />
                </div>

                <div>
                    <label>mass (mg):</label>
                    <input
                        name="mass"
                        value={this.state.mass}
                        onChange={this.handleChange}
                        type="text" />
                </div>

                <div>
                    <label>aliquot conc (mM):</label>
                    <input
                        name="aliquotConc"
                        value={this.state.aliquotConc}
                        onChange={this.handleChange}
                        type="text" />
                </div>

                <div>
                    <label>bath conc (µM):</label>
                    <input
                        name="bathConc"
                        value={this.state.bathConc}
                        onChange={this.handleChange}
                        type="text" />
                </div>
            </>
        )
    }
};

export default AliquotDesign;