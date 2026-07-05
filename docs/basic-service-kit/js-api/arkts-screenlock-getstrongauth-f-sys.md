# getStrongAuth

## getStrongAuth

```TypeScript
function getStrongAuth(userId: int): int
```

Obtain strong authentication reason flags for os account local userId.

**Since:** 12

**Required permissions:** 

 ohos.permission.ACCESS_SCREEN_LOCK

**System capability:** SystemCapability.MiscServices.ScreenLock

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | int | Yes | Os account local userId. |

**Return value:**

| Type | Description |
| --- | --- |
| int | the strong authentication reason flags. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 201 | permission denied. |
| 202 | permission verification failed. A non-system application calls a system API. |
| 13200002 | the screenlock management service is abnormal. |

