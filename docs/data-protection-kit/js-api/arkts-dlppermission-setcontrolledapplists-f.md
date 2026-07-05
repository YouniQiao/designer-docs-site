# setControlledAppLists

## setControlledAppLists

```TypeScript
function setControlledAppLists(appLists: Array<string>, userId?: number): Promise<void>
```

Set the list of applications that are subject to enterprise DLP control.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.DLP_POLICY_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appLists | Array&lt;string> | Yes | The appIdentifiers of applications to be put under controlled  The maximum length is 100.  The value range of Array is [0, 100], and the value range of String is [0, 4096]. |
| userId | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 19100001 | Invalid parameter value. |
| 19100011 | The system ability works abnormally. |
| 19100023 | The specified userId is inconsistent with the current userId. |
| 19100024 | The specified userId belongs to a personal space user and  cannot be managed. |

