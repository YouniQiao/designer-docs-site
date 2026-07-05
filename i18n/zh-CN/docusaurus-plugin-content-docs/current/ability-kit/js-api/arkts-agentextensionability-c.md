# AgentExtensionAbility

The class of agent extension ability. This class cannot be used in Harmony Archive(HAR).

**继承实现关系：** AgentExtensionAbility继承自：ExtensionAbility。

**起始版本：** 24

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

## 导入模块

```TypeScript
import { AgentExtensionAbility } from '@kit.AbilityKit';
```

## onAgentInvoked

```TypeScript
onAgentInvoked(agentId: string): void
```

Called back when a LOW_CODE agent is invoked.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| agentId | string | 是 | Indicates the LOW_CODE agent ID. |

## onAuth

```TypeScript
onAuth(proxy: AgentHostProxy, handshakeData: string): void
```

Called back when authentication is sent.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| proxy | AgentHostProxy | 是 | Indicates the agent service host proxy. |
| handshakeData | string | 是 | Indicates the received handshake data. |

## onConnect

```TypeScript
onConnect(want: Want, proxy: AgentHostProxy): void
```

Called back when an agent extension is connected to an ability.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Indicates connection information about the AgentExtensionAbility. |
| proxy | AgentHostProxy | 是 | Indicates the agent service host proxy. |

## onCreate

```TypeScript
onCreate(want: Want): void
```

Called back when an agent extension is started for initialization.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Want information, including the ability name and bundle name. |

## onData

```TypeScript
onData(proxy: AgentHostProxy, data: string): void
```

Called back when data is sent.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| proxy | AgentHostProxy | 是 | Indicates the agent service host proxy. |
| data | string | 是 | Indicates the received data. |

## onDestroy

```TypeScript
onDestroy(): void
```

Called back before an agent service extension is destroyed.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

## onDisconnect

```TypeScript
onDisconnect(want: Want, proxy: AgentHostProxy): void
```

Called back when ability connected to an agent service extension is disconnected.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Indicates disconnection information about the agent service extension. |
| proxy | AgentHostProxy | 是 | Indicates the agent service host proxy. |

## context

```TypeScript
context: AgentExtensionContext
```

Context of the AgentExtensionAbility.

**类型：** AgentExtensionContext

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

