# disconnectServiceExtensionAbility

## disconnectServiceExtensionAbility

```TypeScript
function disconnectServiceExtensionAbility(context: AgentExtensionContext, connectId: long): Promise<void>
```

Disconnects an AgentExtensionAbility from a ServiceExtensionAbility, in contrast to {@link connectServiceExtensionAbility}.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | AgentExtensionContext | Yes | The context of the current agent extension ability. |
| connectId | long | Yes | The connection id returned by connectServiceExtensionAbility. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. Possible causes: 1.Connect to system service failed.  2.System service failed to communicate with dependency module. |

