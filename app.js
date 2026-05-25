const coreModelInstance = {
    version: "1.0.957",
    registry: [1760, 1146, 1374, 383, 1521, 1676, 629, 650],
    init: function() {
        const nodes = this.registry.filter(x => x > 169);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreModelInstance.init();
});