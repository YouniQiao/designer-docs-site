# AgentExtensionAbility

The class of agent extension ability. This class cannot be used in Harmony Archive(HAR).

**Inheritance/Implementation:** AgentExtensionAbility extends [ExtensionAbility](arkts-ability-extensionability-c.md#extensionability)

**Since:** 24

**System capability:** SystemCapability.Ability.AgentRuntime.Core

## Modules to Import

```TypeScript
import { AgentExtensionAbility } from '@ohos.app.agent.AgentExtensionAbility';
```

## onAuth

```TypeScript
onAuth(proxy: AgentHostProxy, handshakeData: string): void
```

Called back when authentication is sent.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| proxy | AgentHostProxy | Yes | Indicates the agent service host proxy. |
| handshakeData | string | Yes | Indicates the received handshake data. |

## onConnect

```TypeScript
onConnect(want: Want, proxy: AgentHostProxy): void
```

Called back when an agent extension is connected to an ability.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Indicates connection information about the AgentExtensionAbility. |
| proxy | AgentHostProxy | Yes | Indicates the agent service host proxy. |

## onCreate

```TypeScript
onCreate(want: Want): void
```

Called back when an agent extension is started for initialization.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want information, including the ability name and bundle name. |

## onData

```TypeScript
onData(proxy: AgentHostProxy, data: string): void
```

Called back when data is sent.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| proxy | AgentHostProxy | Yes | Indicates the agent service host proxy. |
| data | string | Yes | Indicates the received data. |

## onDestroy

```TypeScript
onDestroy(): void
```

Called back before an agent service extension is destroyed.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

## onDisconnect

```TypeScript
onDisconnect(want: Want, proxy: AgentHostProxy): void
```

Called back when ability connected to an agent service extension is disconnected.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Indicates disconnection information about the agent service extension. |
| proxy | AgentHostProxy | Yes | Indicates the agent service host proxy. |

## context

```TypeScript
context: AgentExtensionContext
```

Context of the AgentExtensionAbility.

**Type:** AgentExtensionContext

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

