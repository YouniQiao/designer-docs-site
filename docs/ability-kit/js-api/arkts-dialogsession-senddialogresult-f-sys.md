# sendDialogResult

## sendDialogResult

```TypeScript
function sendDialogResult(dialogSessionId: string, targetWant: Want, isAllowed: boolean): Promise<void>
```

发送用户请求。使用Promise异步回调。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dialogSessionId | string | Yes | 用户请求会话ID。 |
| targetWant | Want | Yes | 用户请求目标。 |
| isAllowed | boolean | Yes | 是否允许拉起目标Ability。true表示允许，false表示不允许。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000050 | Internal error. |

## sendDialogResult

```TypeScript
function sendDialogResult(dialogSessionId: string, targetWant: Want, isAllowed: boolean, callback: AsyncCallback<void>): void
```

发送用户请求。使用callback异步回调。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dialogSessionId | string | Yes | 用户请求会话ID。 |
| targetWant | Want | Yes | 用户请求目标。 |
| isAllowed | boolean | Yes | 是否允许拉起目标Ability。true表示允许，false表示不允许。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当发送用户请求成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000050 | Internal error. |

