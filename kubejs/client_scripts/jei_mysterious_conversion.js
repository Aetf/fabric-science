JEIEvents.information(event => {
    let $MysteriousItemConversionCategory = Java.loadClass('com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory')
    let $ConversionRecipe = Java.loadClass('com.simibubi.create.compat.jei.ConversionRecipe')
    let RemoveConversion = (to) => 
        $MysteriousItemConversionCategory.RECIPES.removeIf(recipe => recipe.getRollableResultsAsItemStacks()[0].idLocation.toString() == to)
    let AddConversion = (from, to) => {
        RemoveConversion(to)
        $MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create(from, to))
    }
    // Examples
    AddConversion('create:chromatic_compound', 'create:refined_radiance')
    AddConversion('create:chromatic_compound', 'create:shadow_steel')
})