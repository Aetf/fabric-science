ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn("1x extendedae:concurrent_processor_print")
        .itemIn("1x ae2:printed_silicon")
        .fluidIn("90x modern_industrialization:molten_redstone")
        .itemOut("1x extendedae:concurrent_processor");
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn("1x advanced_ae:printed_quantum_processor")
        .itemIn("1x ae2:printed_silicon")
        .fluidIn("90x modern_industrialization:molten_redstone")
        .itemOut("1x advanced_ae:quantum_processor");

    event.recipes.modern_industrialization.packer(8, 200)
        .itemIn("1x #c:gems/entro")
        .itemIn("1x extendedae:concurrent_processor_press", 0.0)
        .itemOut("1x extendedae:concurrent_processor_print");
    event.recipes.modern_industrialization.packer(8, 200)
        .itemIn("1x advanced_ae:quantum_alloy")
        .itemIn("1x advanced_ae:quantum_processor_press", 0.0)
        .itemOut("1x advanced_ae:printed_quantum_processor");

    event.recipes.modern_industrialization.macerator(8, 100)
        .itemIn("1x #c:gems/entro")
        .itemOut("1x extendedae:entro_dust");
    event.recipes.modern_industrialization.macerator(8, 100)
        .itemIn("1x advanced_ae:shattered_singularity")
        .itemOut("1x advanced_ae:quantum_infused_dust");
});
