// priority: 0

ServerEvents.recipes((event) => {
    removeRecipeByID(event, [
		SBP("crafting_upgrade"),
		SBP("xp_pump_upgrade"),
		SBP("battery_upgrade"),
		SBP("magnet_upgrade"),
		SBP("advanced_magnet_upgrade")
    ])
	
	const shapedSaveNBTBackpack = (event, output, patternArr, inputObj) => {
		event.shaped(output, patternArr, inputObj).modifyResult((inventory, itemstack) => {
			let item = inventory.find(Item.of(inputObj.A))
			if (item.nbt === null) return itemstack
			let nbt = item.nbt
			delete nbt.inventorySlots
			delete nbt.upgradeSlots
			return itemstack.withNBT(nbt)
		})
	}
	
	//copper (new iron)
	removeRecipeByOutput(event, [
		SBP("copper_backpack"),
	])
	shapedSaveNBTBackpack(event, SBP("copper_backpack"), [
		'BBB',
		'BAB',
		'BBB',
	], {
		A: SBP("backpack"),
		B: MU("iron_opinium_core"),
	})
	
	//iron (new gold)
	removeRecipeByOutput(event, [
		SBP("iron_backpack"),
	])
	shapedSaveNBTBackpack(event, SBP("iron_backpack"), [
		'BBB',
		'BAB',
		'BBB',
	], {
		A: SBP("copper_backpack"),
		B: MU("gold_opinium_core"),
	})
	
	//gold (new diamond)
	removeRecipeByOutput(event, [
		SBP("gold_backpack"),
	])
	shapedSaveNBTBackpack(event, SBP("gold_backpack"), [
		'BBB',
		'BAB',
		'BBB',
	], {
		A: SBP("iron_backpack"),
		B: MU("diamond_opinium_core"),
	})
	
	//diamond (new emerald)
	removeRecipeByOutput(event, [
		SBP("diamond_backpack"),
	])
	shapedSaveNBTBackpack(event, SBP("diamond_backpack"), [
		'BBB',
		'BAB',
		'BBB',
	], {
		A: SBP("gold_backpack"),
		B: MU("emerald_opinium_core"),
	})
	
	//netherite
	removeRecipeByOutput(event, [
		SBP("netherite_backpack"),
	])
	shapedSaveNBTBackpack(event, SBP("netherite_backpack"), [
		'BBB',
		'BAB',
		'BBB',
	], {
		A: SBP("diamond_backpack"),
		B: MU("netherite_opinium_core"),
	})
	
	
	//magnet upgrades
	removeRecipeByID(event, [
		SBP("magnet_upgrade"),
		SBP("advanced_magnet_upgrade")
	])
	event.shaped(SBP("magnet_upgrade"), [
		'EBE',
		'ACA',
		'ADA'
	], {
		A: F(`#ingots/iron`),
		B: M("teleportation_core"),
		C: SBP("pickup_upgrade"),
		D: KJ("chromatic_resonator"),
		E: MC("ender_pearl"),
	})
	event.shaped(SBP("advanced_magnet_upgrade"), [
		'EBE',
		'ACA',
		'ADA'
	], {
		A: F(`#ingots/iron`),
		B: M("teleportation_core"),
		C: SBP("advanced_pickup_upgrade"),
		D: KJ("chromatic_resonator"),
		E: MC("ender_pearl"),
	})
})