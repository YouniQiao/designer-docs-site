# CustomData (System API)

When starting a modal page, you can transfer custom data to the autofill service through [reloadInModal](arkts-ability-autofillextensioncontext-c-sys.md#reloadinmodal-1) and obtain the data through [onFillRequest](arkts-ability-app-ability-autofillextensionability-autofillextensionability-c-sys.md#onfillrequest-1) of the service.

**Since:** 13

<!--Device-unnamed-export default interface CustomData--><!--Device-unnamed-export default interface CustomData-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

## data

```TypeScript
data: Record<string, Object>
```

Custom data transferred for starting the modal page. The data is of the Record type.

**Type:** Record<string, Object>

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

<!--Device-CustomData-data: Record<string, Object>--><!--Device-CustomData-data: Record<string, Object>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

