# requestStrongAuth

## requestStrongAuth

```TypeScript
function requestStrongAuth(reasonFlag: StrongAuthReasonFlags, userId: int): Promise<void>
```

Request strong authentication for os account local userId.

**Since:** 12

**Required permissions:** 

 ohos.permission.ACCESS_SCREEN_LOCK

**System capability:** SystemCapability.MiscServices.ScreenLock

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reasonFlag | StrongAuthReasonFlags | Yes | The strong authentication reason flag. |
| userId | int | Yes | Os account local userId. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 201 | permission denied. |
| 202 | permission verification failed. A non-system application calls a system API. |
| 13200002 | the screenlock management service is abnormal. |

