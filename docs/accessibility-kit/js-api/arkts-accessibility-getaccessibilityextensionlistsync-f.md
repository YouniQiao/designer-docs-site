# getAccessibilityExtensionListSync

## getAccessibilityExtensionListSync

```TypeScript
function getAccessibilityExtensionListSync(
    abilityType: AbilityType,
    stateType: AbilityState
  ): Array<AccessibilityAbilityInfo>
```

Query the list of accessibility applications in the current system, which can be queried by criteria.

**Since:** 12

**Atomic service API:** From API version 23 this API can be used in atomic services.

**Widget capability:** From API version 23 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| abilityType | AbilityType | Yes | Accessibility application type. |
| stateType | AbilityState | Yes | Accessibility application status. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;AccessibilityAbilityInfo> | Promise used to return the accessibility application list. |

