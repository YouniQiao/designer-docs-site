# setSeniorModeStateForApp (System API)

## Modules to Import

```TypeScript
import { config } from '@kit.AccessibilityKit';
```

## setSeniorModeStateForApp

```TypeScript
function setSeniorModeStateForApp(appSeniorModeInfos: Array<AppSeniorModeInfo>): Promise<void>
```

Set the senior mode state for app.

**Since:** 26.0.0

**Required permissions:** ohos.permission.WRITE_ACCESSIBILITY_CONFIG

**Model restriction:** This API can be used only in the stage model.

<!--Device-config-function setSeniorModeStateForApp(appSeniorModeInfos: Array<AppSeniorModeInfo>): Promise<void>--><!--Device-config-function setSeniorModeStateForApp(appSeniorModeInfos: Array<AppSeniorModeInfo>): Promise<void>-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appSeniorModeInfos | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<AppSeniorModeInfo> | Yes | Indicates the list of app package names and statuses for which the advanced mode needs to be set. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.<br>The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed.<br>A non-system application calls a system API. |
| [9300000](../errorcode-accessibility.md#9300000-accessibility-service-abnormal) | System abnormality. |
| 9300008 | The appIndex is invalid. Possible causes:<br>1.The appIndex is out of the valid range.<br>2.The application corresponding to the appIndex does not exist. |

