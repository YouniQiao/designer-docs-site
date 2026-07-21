# switchInputMethodWithUserId (System API)

## Modules to Import

```TypeScript
import { inputMethod } from '@kit.IMEKit';
```

<a id="switchinputmethodwithuserid"></a>
## switchInputMethodWithUserId

```TypeScript
function switchInputMethodWithUserId(bundleName: string, subtypeId?: string, userId?: number): Promise<void>
```

Switch input method and subtype of a specified user.

**Since:** 26.0.0

**Required permissions:** ohos.permission.CONNECT_IME_ABILITY

**Model restriction:** This API can be used only in the stage model.

<!--Device-inputMethod-function switchInputMethodWithUserId(bundleName: string, subtypeId?: string, userId?: int): Promise<void>--><!--Device-inputMethod-function switchInputMethodWithUserId(bundleName: string, subtypeId?: string, userId?: int): Promise<void>-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | indicates the bundle name of the target input method. |
| subtypeId | string | No | indicates the id of the input method subtype.If the param is not set, switch to the target input method with a default subtype. |
| userId | number | No | the user ID. If not provided:If the caller is not a user 0 application, the value defaults to the caller's user ID.If the caller is a user 0 application, the value defaults to the foreground user ID of the main screen. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | permissions check fails. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | not system application. |
| [12800005](../errorcode-inputmethod-framework.md#12800005-configuration-persistence-error) | configuration persistence error. |
| [12800008](../errorcode-inputmethod-framework.md#12800008-input-method-manager-service-error) | input method manager service error. Possible cause:a system error, such as null pointer, IPC exception. |
| 12800023 | the specified user does not exist. |
| 12800024 | the specified user is not in the foreground. |
| 12800025 | cross-user operation denied.Only user 0 applications are authorized for this operation. |

