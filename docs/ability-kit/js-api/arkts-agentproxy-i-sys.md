# AgentProxy

The proxy object of the AgentExtensionAbility, used to send messages to the AgentExtensionAbility, etc.

**Since:** 24

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

## authorize

```TypeScript
authorize(handshakeData: string): void
```

Send authentication to the AgentExtensionAbility.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handshakeData | string | Yes | Indicates the handshake data to send. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 35600002 | Failed to send the IPC message. |

## sendData

```TypeScript
sendData(data: string): void
```

Send data to the AgentExtensionAbility.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | string | Yes | Indicates the data to send. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 35600002 | Failed to send the IPC message. |

