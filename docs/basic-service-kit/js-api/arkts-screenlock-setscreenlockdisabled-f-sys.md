# setScreenLockDisabled

## setScreenLockDisabled

```TypeScript
function setScreenLockDisabled(disable: boolean, userId: int): Promise<boolean>
```

Disable screen lock showing for os account local userId. This only becomes effective when there is no password.

**Since:** 12

**Required permissions:** 

 ohos.permission.ACCESS_SCREEN_LOCK

**System capability:** SystemCapability.MiscServices.ScreenLock

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| disable | boolean | Yes | disable or enable screen lock showing. |
| userId | int | Yes | Os account local userId. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 201 | permission denied. |
| 202 | permission verification failed, application which is not a system application uses system API. |
| 13200002 | the screenlock management service is abnormal. |

