# getCurrentInputMethodSubtype

## getCurrentInputMethodSubtype

```TypeScript
function getCurrentInputMethodSubtype(userId?: int): InputMethodSubtype
```

Get the current input method subtype of a specified user.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| InputMethodSubtype | the subtype of the current input method. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | not system application. |
| 12800008 | input method manager service error. Possible cause:  a system error, such as null pointer, IPC exception. |
| 12800023 | the specified user does not exist. |
| 12800024 | the specified user is not in the foreground. |
| 12800025 | cross-user operation denied.  Only user 0 applications are authorized for this operation. |

