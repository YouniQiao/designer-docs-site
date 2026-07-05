# switchInputMethodWithUserId

## switchInputMethodWithUserId

```TypeScript
function switchInputMethodWithUserId(bundleName: string, subtypeId?: string, userId?: int): Promise<void>
```

Switch input method and subtype of a specified user.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.CONNECT_IME_ABILITY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | indicates the bundle name of the target input method. |
| subtypeId | string | No |  |
| userId | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | permissions check fails. |
| 202 | not system application. |
| 12800005 | configuration persistence error. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |
| 12800023 | the specified user does not exist. |
| 12800024 | the specified user is not in the foreground. |
| 12800025 | cross-user operation denied.  Only user 0 applications are authorized for this operation. |

