# getAccessibilityExtensionListSync

## Modules to Import

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
```

<a id="getaccessibilityextensionlistsync"></a>
## getAccessibilityExtensionListSync

```TypeScript
function getAccessibilityExtensionListSync(
    abilityType: AbilityType,
    stateType: AbilityState
  ): Array<AccessibilityAbilityInfo>
```

Query the list of accessibility applications in the current system, which can be queried by criteria.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-accessibility-function getAccessibilityExtensionListSync(
    abilityType: AbilityType,
    stateType: AbilityState
  ): Array<AccessibilityAbilityInfo>--><!--Device-accessibility-function getAccessibilityExtensionListSync(
    abilityType: AbilityType,
    stateType: AbilityState
  ): Array<AccessibilityAbilityInfo>-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| abilityType | [AbilityType](arkts-accessibility-accessibility-abilitytype-t.md) | Yes | Accessibility application type. |
| stateType | [AbilityState](arkts-accessibility-accessibility-abilitystate-t.md) | Yes | Accessibility application status. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;AccessibilityAbilityInfo&gt; | Promise used to return the accessibility application list. |

