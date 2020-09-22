class AliquotPlan {

    constructor(options) {
        this.compound = options.compound;
        this.solvent = options.solvent;
        this.mw = options.mw;
        this.massMG = options.massMG;
        this.stockConcMM = options.stockConcMM;
        this.bathConcUM = options.bathConcUM;

        this.massG = this.massMG / 1e3;
        this.stockConcM = this.stockConcMM / 1e3;
        this.bathConcM = this.bathConcUM / 1e6;
        this.syringeConcM = this.bathConcM * 50;
        this.stockDilutionForSyringe = this.stockConcM / this.syringeConcM;
        this.stockDilutionsToBath = this.stockConcM / this.bathConcM;
        let syringe10stock_L = .010 / this.stockDilutionForSyringe;
        let containerMols = this.massG / this.mw;
        this.totalStockVolume = containerMols / this.stockConcM;
        this.aliquotCount = Math.round(this.totalStockVolume / syringe10stock_L * 100) / 100;

        this.howToMakeStock =
            `Dissolve ${this.toMG(this.massG)} ${this.compound} into ` +
            `${this.toML(this.totalStockVolume)} ${this.solvent} ` +
            `for ${this.toMM(this.stockConcM)} stock solution.`;

        this.howToMakeAliquots =
            `Divide stock solution into ${this.toUL(syringe10stock_L)} aliquots ` +
            `(makes ${this.aliquotCount} aliquots).`;

        this.howToFill10mlSyringe =
            `Bring 1 aliquot to 10 mL with ACSF for a ${this.toUM(this.syringeConcM)} ` +
            `(50x bath concentration) syringe.`;

        this.howToFill500mlBath =
            `Dilute 1 aliquot to 500 mL ACSF for ` +
            `a ${this.toUM(this.bathConcM)} bath.`;
    }

    toMM = molar => `${Math.round(molar * 1e3 * 1000) / 1000} mM`;
    toUM = molar => `${Math.round(molar * 1e6 * 1000) / 1000} µM`;
    toNM = molar => `${Math.round(molar * 1e9 * 1000) / 1000} nM`;

    toML = liters => `${Math.round(liters * 1e3 * 1000) / 1000} mL`;
    toUL = liters => `${Math.round(liters * 1e6 * 1000) / 1000} µL`;

    toMG = grams => `${Math.round(grams * 1e3 * 1000) / 1000} mg`;

    isValid() {
        if (this.compound == "")
            return false;
        if (this.solvent == "")
            return false;
        if (isNaN(parseFloat(this.mw)) || this.mw <= 0)
            return false;
        if (isNaN(parseFloat(this.massMG)) || this.massMG <= 0)
            return false;
        if (isNaN(parseFloat(this.stockConcMM)) || this.stockConcMM <= 0)
            return false;
        if (isNaN(parseFloat(this.bathConcUM)) || this.bathConcUM <= 0)
            return false;
        return true;
    }
}

export default AliquotPlan;