class AliquotPlan {
    constructor({
        compound = "picrotoxin",
        solvent = "DMSO",
        mw = 602.59,
        massMG = 1000,
        stockConcMM = 100,
        bathConcUM = 100
    } = {}) {
        this.state = {
            compound,
            solvent,
            mw,
            massMG,
            stockConcMM,
            bathConcUM
        }
    }

    get massG() { return this.state.massMG / 1e3; }

    get stockConcM() { return this.state.stockConcMM / 1e3; }

    get bathConcM() { return this.state.bathConcUM / 1e6; }

    get syringeConcM() { return this.bathConcM * 50; }

    get stockDilutionForSyringe() { return this.stockConcM / this.syringeConcM; }

    get stockDilutionsToBath() { return this.stockConcM / this.bathConcM; }

    get syringe10stock_L() { return .010 / this.stockDilutionForSyringe; }

    get containerMols() { return this.massG / this.state.mw; }

    get totalStockVolume() { return this.containerMols / this.stockConcM; }

    get aliquotCount() { return Math.round(this.totalStockVolume / this.syringe10stock_L * 100) / 100; }

    get howToMakeStock() {
        return `Dissolve ${this.toMG(this.massG)} ${this.state.compound} into ` +
            `${this.toML(this.totalStockVolume)} ${this.state.solvent} ` +
            `for ${this.toMM(this.stockConcM)} stock solution.`;
    }

    get howToMakeAliquots() {
        return `Divide stock solution into ${this.toUL(this.syringe10stock_L)} aliquots ` +
            `(makes ${this.aliquotCount} aliquots).`;
    }

    get howToFill10mlSyringe() {
        return `Bring 1 aliquot to 10 mL with ACSF for a ${this.toUM(this.syringeConcM)} ` +
            `(50x bath concentration) syringe.`;
    }

    get howToFill500mlBath() {
        return `Dilute 1 aliquot to 500 mL ACSF for ` +
            `a ${this.toUM(this.bathConcM)} bath.`;
    }

    update = newState => {
        this.state = { ...this.state, ...newState }
        return this
    }

    toMM = molar => `${Math.round(molar * 1e3 * 1000) / 1000} mM`;
    toUM = molar => `${Math.round(molar * 1e6 * 1000) / 1000} µM`;
    toNM = molar => `${Math.round(molar * 1e9 * 1000) / 1000} nM`;

    toML = liters => `${Math.round(liters * 1e3 * 1000) / 1000} mL`;
    toUL = liters => `${Math.round(liters * 1e6 * 1000) / 1000} µL`;

    toMG = grams => `${Math.round(grams * 1e3 * 1000) / 1000} mg`;

    isValid() {
        const { mw, massMG, stockConcMM, bathConcUM } = this.state
        if (this.state.compound === "")
            return false;
        if (this.state.solvent === "")
            return false;
        if (isNaN(parseFloat(mw)) || mw <= 0)
            return false;
        if (isNaN(parseFloat(massMG)) || massMG <= 0)
            return false;
        if (isNaN(parseFloat(stockConcMM)) || stockConcMM <= 0)
            return false;
        if (isNaN(parseFloat(bathConcUM)) || bathConcUM <= 0)
            return false;
        return true;
    }
}

export default AliquotPlan;