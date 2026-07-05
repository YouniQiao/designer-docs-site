# disconnectAgentExtensionAbility

## disconnectAgentExtensionAbility

```TypeScript
function disconnectAgentExtensionAbility(proxy: AgentProxy): Promise<void>
```

Disconnects to an AgentExtensionAbility.

**Since:** 24

**Required permissions:** 

 ohos.permission.CONNECT_AGENT

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| proxy | AgentProxy | Yes | The agent proxy to disconnect. |

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

