# querySession

## querySession

```TypeScript
function querySession(sessionId: string): Promise<CliSessionInfo>
```

Query session status.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.EXEC_CLI_TOOL

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sessionId | string | 是 | The session id of target tool process. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;CliSessionInfo> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 35600032 | The session does not exist. |
| 35600050 | System Error. 1. Connect to system service failed;  2.System service failed to communicate with dependency module. |

