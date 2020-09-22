import React from 'react'
import AliquotPlan from "./AliquotPlan.js"

class AliquotDesign extends React.Component {

    constructor(props) {

        // TODO: what's the deal with obsolete super?
        super(props);

        this.state = {
            name: props.plan.compound,
            solvent: props.plan.solvent,
            mw: props.plan.mw,
            mass: props.plan.massMG,
            aliquotConc: props.plan.stockConcMM,
            bathConc: props.plan.bathConcUM
        };
        this.handleChange = this.handleChange.bind(this);
    }

    sendNewPlan() {
        let options = {
            compound: this.state.name,
            solvent: this.state.solvent,
            mw: this.state.mw,
            massMG: this.state.mass,
            stockConcMM: this.state.aliquotConc,
            bathConcUM: this.state.bathConc
        };
        let plan = new AliquotPlan(options)
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
                <h2>Compound Information</h2>
                <div className="compoundInfoRow">

                    <div className="compoundInfoBox">
                        <div>
                            <label>Compound</label>
                        </div>
                        <div>
                            <input
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                                type="text"
                            />
                        </div>
                        <div>
                            <input
                                type="radio"
                                value="water"
                                name="solvent"
                                checked={this.state.solvent === 'water'}
                                onChange={this.handleChange}
                                style={{ "width": "1em" }}
                            /> H<sub>2</sub>O
                            <input
                                type="radio"
                                value="DMSO"
                                name="solvent"
                                checked={this.state.solvent === 'DMSO'}
                                onChange={this.handleChange}
                                style={{ "width": "1em", "margin-left": "1em" }}
                            /> DMSO
                        </div>
                    </div>

                    <div className="compoundInfoBox">
                        <div>
                            <label>MW (g/mol)</label>
                        </div>
                        <div>
                            <input
                                name="mw"
                                value={this.state.mw}
                                onChange={this.handleChange}
                                type="text"
                            />
                        </div>
                        <div className="infoDetail">
                            Use the value printed on the container
                        </div>
                    </div>

                    <div className="compoundInfoBox">
                        <div>
                            <label>Mass (mg)</label>
                        </div>
                        <div>
                            <input
                                name="mass"
                                value={this.state.mass}
                                onChange={this.handleChange}
                                type="text"
                            />
                        </div>
                        <div className="infoDetail">
                            Mass of powder in an unopened container
                        </div>
                    </div>
                </div>

                <h2>Target Concentrations</h2>
                <div className="compoundInfoRow">


                    <div className="compoundInfoBox">
                        <div>
                            <label>Stock Solution (mM)</label>
                        </div>
                        <div>
                            <input
                                name="aliquotConc"
                                value={this.state.aliquotConc}
                                onChange={this.handleChange}
                                type="text"
                            />
                        </div>
                        <div className="infoDetail">
                            Use a value near maximum solubility
                        </div>
                    </div>

                    <div className="compoundInfoBox">
                        <div>
                            <label>Bath Concentration (µM)</label>
                        </div>
                        <div>
                            <input
                                name="bathConc"
                                value={this.state.bathConc}
                                onChange={this.handleChange}
                                type="text"
                            />
                        </div>
                        <div className="infoDetail">
                            Final concentration in ACSF
                        </div>
                    </div>
                </div>

            </>
        )
    }
};

export default AliquotDesign;