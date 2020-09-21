class AliquotPlan {

    constructor(name, mw, mass, aliquotConc, bathConc) {
        this.name = name;
        this.mw = mw;
        this.mass = mass;
        this.aliquotConc = aliquotConc;
        this.bathConc = bathConc;

        let mol = (this.mass / 1000) / this.mw;
        let aliquotVolume_mL = mol / this.aliquotConc * 1e6;

        console.log(`dissolve ${mass} mg ${name} into ${aliquotVolume_mL} mL for ${aliquotConc} mM stock solution.`);
    }
}

export default AliquotPlan;