# CustomData

拉起模态页面时，开发者可通过[reloadInModal](arkts-autofillextensioncontext-c-sys.md#reloadInModal)接口将自定义数据传递给自动填充服 务，并可通过自动填充服务的 [onFillRequest]./../@ohos.app.ability.AutoFillExtensionAbility:AutoFillExtensionAbility.onFillRequest获取到该数据。

**Since:** 13

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

## data

```TypeScript
data: Record<string, Object>
```

拉起模态页面时传递的自定义数据，该数据为Record类型。

**Type:** Record<string, Object>

**Since:** 13

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

```TypeScript
data: Record<string, RecordData>
```

拉起模态页面时传递的自定义数据，该数据为Record类型。

**Type:** Record<string, RecordData>

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

