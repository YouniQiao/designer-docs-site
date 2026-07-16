# CustomData (System API)

When starting a modal page, you can transfer custom data to the autofill service through
[reloadInModal](arkts-ability-autofillextensioncontext-c-sys.md#reloadinmodal-1) and obtain the data through
[onFillRequest](arkts-ability-autofillextensionability-c-sys.md#onfillrequest-1) of the
service.

**Since:** 13

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

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

