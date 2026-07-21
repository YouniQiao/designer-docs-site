# setControlledAppLists

## Modules to Import

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
```

<a id="setcontrolledapplists"></a>
## setControlledAppLists

```TypeScript
function setControlledAppLists(appLists: Array<string>, userId?: number): Promise<void>
```

Set the list of applications that are subject to enterprise DLP control.

**Since:** 26.0.0

**Required permissions:** ohos.permission.DLP_POLICY_MANAGER

**Model restriction:** This API can be used only in the stage model.

<!--Device-dlpPermission-function setControlledAppLists(appLists: Array<string>, userId?: number): Promise<void>--><!--Device-dlpPermission-function setControlledAppLists(appLists: Array<string>, userId?: number): Promise<void>-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appLists | Array&lt;string&gt; | Yes | The appIdentifiers of applications to be put under controlled<br>The maximum length is 100.<br>The value range of Array is [0, 100], and the value range of String is [0, 4096]. |
| userId | number | No | The target userId for which the controlled app list is configured.If not specified, the current user is used by default<br>The value range is all integers. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |
| [19100023](../errorcode-dlp.md#19100023-specified-user-id-inconsistent-with-the-current-user-id) | The specified userId is inconsistent with the current userId. |
| [19100024](../errorcode-dlp.md#19100024-personal-space-users-cannot-set-controlled-apps) | The specified userId belongs to a personal space user and cannot be managed. |

