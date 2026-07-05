# notifyLowCodeAgentComplete

## notifyLowCodeAgentComplete

```TypeScript
function notifyLowCodeAgentComplete(agentId: string): Promise<void>
```

Notifies that the specified LOW_CODE agent has completed.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.CONNECT_AGENT

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agentId | string | Yes | The agent id to notify. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 16000050 | Internal error. Possible causes: 1.Connect to system service failed.  2.System service failed to communicate with dependency module. |
| 35600001 | The specified agentId does not exist. |

