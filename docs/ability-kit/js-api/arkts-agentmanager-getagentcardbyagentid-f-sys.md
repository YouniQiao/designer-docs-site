# getAgentCardByAgentId

## getAgentCardByAgentId

```TypeScript
function getAgentCardByAgentId(bundleName: string, agentId: string): Promise<AgentCard>
```

Gets the AgentCard within specified agent id.

**Since:** 24

**Required permissions:** 

 ohos.permission.GET_AGENT_CARD

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | The bundle name of the AgentCard belongs to. |
| agentId | string | Yes | The agent id the AgentCard belongs to. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AgentCard> | Returns the specified AgentCard. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 16000050 | Internal error. Possible causes: 1.Connect to system service failed.  2.System service failed to communicate with dependency module. |
| 18500001 | The bundle does not exist or no patch has been applied. |
| 35600001 | The specified agentId does not exist. |

