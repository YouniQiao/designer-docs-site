# getDialogSessionInfo

## getDialogSessionInfo

```TypeScript
function getDialogSessionInfo(dialogSessionId: string): DialogSessionInfo
```

通过dialogSessionId获取会话信息。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dialogSessionId | string | 是 | 用户请求会话ID。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DialogSessionInfo | 同步返回会话信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000050 | Internal error. |

