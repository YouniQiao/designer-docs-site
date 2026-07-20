# offSeniorModeStateChangeForApp (System API)

## Modules to Import

```TypeScript
import { config } from '@kit.AccessibilityKit';
```

## offSeniorModeStateChangeForApp

```TypeScript
function offSeniorModeStateChangeForApp(callback?: Callback<AppSeniorModeInfo>): void
```

Unregister the observer for application's senior mode state changes.

**Since:** 26.0.0

**Required permissions:** ohos.permission.READ_ACCESSIBILITY_CONFIG

**Model restriction:** This API can be used only in the stage model.

<!--Device-config-function offSeniorModeStateChangeForApp(callback?: Callback<AppSeniorModeInfo>): void--><!--Device-config-function offSeniorModeStateChangeForApp(callback?: Callback<AppSeniorModeInfo>): void-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<AppSeniorModeInfo> | No | Asynchronous callback interface. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.<br>The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed.<br>A non-system application calls a system API. |

