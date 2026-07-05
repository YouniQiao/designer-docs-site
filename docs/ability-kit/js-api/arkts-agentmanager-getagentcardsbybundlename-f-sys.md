# getAgentCardsByBundleName

## getAgentCardsByBundleName

```TypeScript
function getAgentCardsByBundleName(bundleName: string): Promise<Array<AgentCard>>
```

Gets all AgentCards within specified bundleName.

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

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AgentCard>> | Returns the array of AgentCard. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 16000050 | Internal error. Possible causes: 1.Connect to system service failed.  2.System service failed to communicate with dependency module. |
| 18500001 | The bundle does not exist or no patch has been applied. |

