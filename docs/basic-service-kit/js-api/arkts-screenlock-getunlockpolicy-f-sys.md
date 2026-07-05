# getUnlockPolicy

## getUnlockPolicy

```TypeScript
function getUnlockPolicy(userId: int): UnlockPolicy
```

Obtains the authentication policy used to unlock the screen.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_SCREEN_LOCK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.ScreenLock

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | int | Yes | Local user ID of the OS account. |

**Return value:**

| Type | Description |
| --- | --- |
| UnlockPolicy | The unlock policy. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission verification failed: applications that are not system applications  cannot use system API. |
| 13200002 | The screen lock management service is abnormal. |
| 13200004 | The userId is not the same as the caller, and the caller is not authorized. |

