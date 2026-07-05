# subscribeSession

## subscribeSession

```TypeScript
function subscribeSession(sessionId: string, callback: ToolEventCallback): Promise<void>
```

Subscribe session event.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.EXEC_CLI_TOOL

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sessionId | string | Yes | The session id of target tool process. |
| callback | ToolEventCallback | Yes | The input args of tool. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 35600032 | The session does not exist. |
| 35600050 | System Error. 1. Connect to system service failed;  2.System service failed to communicate with dependency module. |

