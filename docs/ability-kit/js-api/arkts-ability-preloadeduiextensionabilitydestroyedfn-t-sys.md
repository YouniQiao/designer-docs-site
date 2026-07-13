# PreloadedUIExtensionAbilityDestroyedFn (System API)

```TypeScript
export type PreloadedUIExtensionAbilityDestroyedFn = (preloadId: number) => void
```

Defines the callback function when the preloaded
[UIExtensionAbility](arkts-ability-uiextensionability-c.md) instance is destroyed.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| preloadId | int | Yes | The preload UIExtensionAbility ID. |

