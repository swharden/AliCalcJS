import React, { Component } from 'react';

class AliquotPlanDisplay extends Component {
    render() {
        if (this.props.plan.isValid() === false)
            return (
                <div style={{ fontSize: "2em", marginTop: "1em" }}>
                    ERROR: This plan is not valid
                </div>
            );

        let aliquotCount = Math.floor(this.props.plan.aliquotCount);
        let aliquotPics = Array.from(Array(Math.min(aliquotCount, 999)), (e, i) => {
            return <img key={`aliquot-${i}`} src='aliquot.png' alt="aliquot unit marker" />
        })

        return (
            <div>
                <h2>Create Stock Aliquots</h2>
                <ul>
                    <li>{this.props.plan.howToMakeStock}</li>
                    <li>{this.props.plan.howToMakeAliquots}</li>
                </ul>

                <div className="freezerBox">{aliquotPics}</div>

                <h2>Deliver with a Syringe Pump</h2>
                <ul>
                    <li>{this.props.plan.howToFill10mlSyringe}</li>
                    <li>Syringe pumps deliver 40 µL/min into a flowing 2mL/min bath (a 1:50 ratio).</li>
                    <li>A 10mL syringe can supply about four hours of drug.</li>
                </ul>

                <h2>Add Directly to the Bath</h2>
                <ul>
                    <li>{this.props.plan.howToFill500mlBath}</li>
                    <li>500 mL bath can supply about four hours of drug.</li>
                </ul>
            </div>
        );
    }
}
export default AliquotPlanDisplay;