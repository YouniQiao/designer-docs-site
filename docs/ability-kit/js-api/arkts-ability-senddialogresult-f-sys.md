# sendDialogResult (System API)

## Modules to Import

```TypeScript
import { dialogSession } from '@ohos.app.ability.dialogSession';
```

## sendDialogResult

```TypeScript
function sendDialogResult(dialogSessionId: string, targetWant: Want, isAllowed: boolean): Promise<void>
```

Sends a request for a dialog box. This API uses a promise to return the result.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dialogSessionId | string | Yes | Session ID. |
| targetWant | Want | Yes | Target of the request. |
| isAllowed | boolean | Yes | Whether the target ability can be started. **true** if allowed, **false** otherwise. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |


## sendDialogResult

```TypeScript
function sendDialogResult(dialogSessionId: string, targetWant: Want, isAllowed: boolean, callback: AsyncCallback<void>): void
```

Sends a request for a dialog box. This API uses an asynchronous callback to return the result.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dialogSessionId | string | Yes | Session ID. |
| targetWant | Want | Yes | Target of the request. |
| isAllowed | boolean | Yes | Whether the target ability can be started. **true** if allowed, **false** otherwise. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is**undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not system-app, can not use system-api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [16000005](../errorcode-ability.md#16000005-process-permission-verification-failure) | The specified process does not have the permission. |
| [16000006](../errorcode-ability.md#16000006-crossuser-operation-is-not-allowed) | Cross-user operations are not allowed. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |

