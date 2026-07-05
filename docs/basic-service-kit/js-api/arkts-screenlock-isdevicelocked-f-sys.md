# isDeviceLocked

## isDeviceLocked

```TypeScript
function isDeviceLocked(userId: int): boolean
```

Check whether the device is currently locked and the screenlock requires an identity to authenticate and unlock.

**Since:** 20

**System capability:** SystemCapability.MiscServices.ScreenLock

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | int | Yes | Os account local userId. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the device is currently locked. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed, application which is not a system application uses system API. |
| 13200002 | The screenlock management service is abnormal. |
| 13200004 | The userId is not same as the caller, and is not allowed for the caller. |

