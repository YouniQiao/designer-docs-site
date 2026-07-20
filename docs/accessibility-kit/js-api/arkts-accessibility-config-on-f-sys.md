# on (System API)

## Modules to Import

```TypeScript
import { config } from '@kit.AccessibilityKit';
```

## on('enabledAccessibilityExtensionListChange')

```TypeScript
function on(type: 'enabledAccessibilityExtensionListChange', callback: Callback<void>): void
```

Adds a listener for changes in the list of enabled accessibility extension abilities. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.READ_ACCESSIBILITY_CONFIG

<!--Device-config-function on(type: 'enabledAccessibilityExtensionListChange', callback: Callback<void>): void--><!--Device-config-function on(type: 'enabledAccessibilityExtensionListChange', callback: Callback<void>): void-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'enabledAccessibilityExtensionListChange' | Yes | Listening type. The value is fixed at **'enabledAccessibilityExtensionListChange'**, indicating listening for changes in the list of enabled accessibility extension abilities. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<void> | Yes | Callback invoked when the list of enabled accessibility extension abilities changes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |


## on('installedAccessibilityListChange')

```TypeScript
function on(type: 'installedAccessibilityListChange', callback: Callback<void>): void
```

Adds a listener for changes in the list of installed accessibility extension abilities. This API uses an asynchronous callback to return the result.

**Since:** 12

**Required permissions:** ohos.permission.READ_ACCESSIBILITY_CONFIG

<!--Device-config-function on(type: 'installedAccessibilityListChange', callback: Callback<void>): void--><!--Device-config-function on(type: 'installedAccessibilityListChange', callback: Callback<void>): void-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'installedAccessibilityListChange' | Yes | Listening type. The value is fixed at **'installedAccessibilityListChange'**, indicating listening for changes in the list of installed accessibility extension abilities. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<void> | Yes | Callback invoked when the list of installed accessibility extension abilities changes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |

