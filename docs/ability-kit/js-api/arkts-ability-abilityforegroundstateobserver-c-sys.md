# AbilityForegroundStateObserver (System API)

The module defines the listener used to listen for ability foreground and background state changes.

**Since:** 11

<!--Device-unnamed-export default class AbilityForegroundStateObserver--><!--Device-unnamed-export default class AbilityForegroundStateObserver-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## onAbilityStateChanged

```TypeScript
onAbilityStateChanged(abilityStateData: AbilityStateData): void
```

Called when the ability is switched between foreground and background.

**Since:** 11

<!--Device-AbilityForegroundStateObserver-onAbilityStateChanged(abilityStateData: AbilityStateData): void--><!--Device-AbilityForegroundStateObserver-onAbilityStateChanged(abilityStateData: AbilityStateData): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| abilityStateData | [AbilityStateData](arkts-ability-abilitystatedata-c.md) | Yes | Ability state data. |

