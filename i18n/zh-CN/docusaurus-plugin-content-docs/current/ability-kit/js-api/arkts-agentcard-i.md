# AgentCard

AgentCard describes the basic information and capabilities provided by an Agent.

**起始版本：** 24

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

## documentationUrl

```TypeScript
documentationUrl?: string
```

Url for the Agent's documentation.

**类型：** string

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

## extension

```TypeScript
extension?: string
```

Extension configuration items for the agent.

**类型：** string

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

## agentId

```TypeScript
agentId: string
```

A unique identifier for the agent card.

**类型：** string

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

## capabilities

```TypeScript
capabilities?: AgentCapabilities
```

Capability set supported by the agent.

**类型：** AgentCapabilities

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

## defaultOutputModes

```TypeScript
defaultOutputModes: Array<string>
```

The media types supported as outputs from this agent.

**类型：** Array<string>

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

## appInfo

```TypeScript
appInfo: AgentAppInfo
```

Application-related information for the agent.

**类型：** AgentAppInfo

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

## description

```TypeScript
description: string
```

The description of the Agent's function.

**类型：** string

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

## type

```TypeScript
type?: agentConstant.AgentCardType
```

The type of the AgentCard. When `type` is `agentConstant.AgentCardType.LOW_CODE`, the corresponding application must be a system application. Otherwise, the agent card cannot be registered, installed, or updated.

**类型：** agentConstant.AgentCardType

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

## defaultInputModes

```TypeScript
defaultInputModes: Array<string>
```

The set of interaction modes that the agent supports across all skills. This can be overridden per skill. Defined as media types.

**类型：** Array<string>

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

## version

```TypeScript
version: string
```

Version of the Agent (format defined by provider, e.g., "1.0.0").

**类型：** string

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

## skills

```TypeScript
skills: Array<AgentSkill>
```

Skills represent the abilities of an agent.

**类型：** Array<AgentSkill>

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

## provider

```TypeScript
provider?: AgentProvider
```

Service provider information for the Agent.

**类型：** AgentProvider

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

## name

```TypeScript
name: string
```

The name of the Agent.

**类型：** string

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

## iconUrl

```TypeScript
iconUrl: string
```

A url to an icon for the agent.

**类型：** string

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

## category

```TypeScript
category: string
```

The category of this agent.

**类型：** string

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

