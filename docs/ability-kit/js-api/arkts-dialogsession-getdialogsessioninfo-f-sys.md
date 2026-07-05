# getDialogSessionInfo

## getDialogSessionInfo

```TypeScript
function getDialogSessionInfo(dialogSessionId: string): DialogSessionInfo
```

通过dialogSessionId获取会话信息。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dialogSessionId | string | Yes | 用户请求会话ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| DialogSessionInfo | 同步返回会话信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000050 | Internal error. |

