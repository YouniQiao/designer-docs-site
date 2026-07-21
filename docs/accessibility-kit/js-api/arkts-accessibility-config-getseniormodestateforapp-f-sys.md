# getSeniorModeStateForApp (System API)

## Modules to Import

```TypeScript
import { config } from '@kit.AccessibilityKit';
```

<a id="getseniormodestateforapp"></a>
## getSeniorModeStateForApp

```TypeScript
function getSeniorModeStateForApp(bundleName: string, appIndex?: number): Promise<boolean>
```

Get the senior mode state for app.

**Since:** 26.0.0

**Required permissions:** ohos.permission.READ_ACCESSIBILITY_CONFIG

**Model restriction:** This API can be used only in the stage model.

<!--Device-config-function getSeniorModeStateForApp(bundleName: string, appIndex?: int): Promise<boolean>--><!--Device-config-function getSeniorModeStateForApp(bundleName: string, appIndex?: int): Promise<boolean>-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Indicates the bundle name of the application to be queried<br>The bundle name must follow the reverse domain naming convention (e.g., "com.example.app"). |
| appIndex | number | No | Indicates the index of clone app.<br>The value must be an integer greater than or equal to 0. Default value: 0. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Returns {@code true} if senior mode is enabled; returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.<br>The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed.<br>A non-system application calls a system API. |
| [9300000](../errorcode-accessibility.md#9300000-accessibility-service-abnormal) | System abnormality. |
| 9300008 | The appIndex is invalid. Possible causes:<br>1.The appIndex is out of the valid range.<br>2.The application corresponding to the appIndex does not exist. |

