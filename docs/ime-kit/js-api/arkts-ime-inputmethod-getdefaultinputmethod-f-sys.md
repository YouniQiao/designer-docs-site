# getDefaultInputMethod (System API)

## Modules to Import

```TypeScript
import { inputMethod } from '@kit.IMEKit';
```

## getDefaultInputMethod

```TypeScript
function getDefaultInputMethod(userId?: number): InputMethodProperty
```

Get the default input method of a specified user.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-inputMethod-function getDefaultInputMethod(userId?: int): InputMethodProperty--><!--Device-inputMethod-function getDefaultInputMethod(userId?: int): InputMethodProperty-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | No | the user ID. If not provided:If the caller is not a user 0 application, the value defaults to the caller's user ID.If the caller is a user 0 application, the value defaults to the foreground user ID of the main screen. |

**Return value:**

| Type | Description |
| --- | --- |
| [InputMethodProperty](arkts-ime-inputmethod-inputmethodproperty-i.md) | property of the default input method. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | not system application. |
| [12800008](../errorcode-inputmethod-framework.md#12800008-input-method-manager-service-error) | input method manager service error. Possible cause:a system error, such as null pointer, IPC exception. |
| 12800023 | the specified user does not exist. |
| 12800024 | the specified user is not in the foreground. |
| 12800025 | cross-user operation denied.Only user 0 applications are authorized for this operation. |

