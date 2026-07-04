# getAccessibilityExtensionList

## Modules to Import

```TypeScript
import { accessibility } from '@ohos.accessibility';
```

## getAccessibilityExtensionList

```TypeScript
function getAccessibilityExtensionList(
    abilityType: AbilityType,
    stateType: AbilityState
  ): Promise<Array<AccessibilityAbilityInfo>>
```

Obtains the accessibility application list. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| abilityType | AbilityType | Yes | Accessibility application type. |
| stateType | AbilityState | Yes | Accessibility application status. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AccessibilityAbilityInfo&gt;&gt; | Promise used to return the accessibility application list. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |


## getAccessibilityExtensionList

```TypeScript
function getAccessibilityExtensionList(
    abilityType: AbilityType,
    stateType: AbilityState,
    callback: AsyncCallback<Array<AccessibilityAbilityInfo>>
  ): void
```

Obtains the accessibility application list. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| abilityType | AbilityType | Yes | Accessibility application type. |
| stateType | AbilityState | Yes | Accessibility application status. |
| callback | AsyncCallback&lt;Array&lt;AccessibilityAbilityInfo&gt;&gt; | Yes | Callback used to return the accessibilityapplication list. If the operation is successful, **err** is **undefined** and **data** is the accessibilityapplication list. Otherwise, it is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |

