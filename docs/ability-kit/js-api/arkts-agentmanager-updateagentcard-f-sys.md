# updateAgentCard

## updateAgentCard

```TypeScript
function updateAgentCard(agentCard: AgentCard): Promise<void>
```

Updates the AgentCard within specified agent id.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.MODIFY_AGENT_CARD

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agentCard | AgentCard | Yes | The AgentCard information to update. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000050 | Internal error. Possible causes: 1.Connect to system service failed.  2.System service failed to communicate with dependency module. |
| 18500001 | The bundle does not exist or no patch has been applied. |
| 35600001 | The specified agentId does not exist. |
| 35600004 | The specified AgentCard version is older than the current version. |
| 35600005 | The specified AgentCard version is invalid. |

