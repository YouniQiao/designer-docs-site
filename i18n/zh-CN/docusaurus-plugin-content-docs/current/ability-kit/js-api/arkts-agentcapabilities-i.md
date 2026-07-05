# AgentCapabilities

Defines optional capabilities supported by an agent.

**起始版本：** 24

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

## extension

```TypeScript
extension?: string
```

The protocol extension supported by the agent.

**类型：** string

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

## streaming

```TypeScript
streaming?: boolean
```

Indicates if the agent supports streaming responses.

**类型：** boolean

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

## pushNotifications

```TypeScript
pushNotifications?: boolean
```

Indicates if the agent supports sending push notifications for asynchronous task updates.

**类型：** boolean

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

## stateTransitionHistory

```TypeScript
stateTransitionHistory?: boolean
```

If the Agent exposes task state change history.

**类型：** boolean

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

## extendedAgentCard

```TypeScript
extendedAgentCard?: boolean
```

Indicates if the agent supports providing an extended agent card when authenticated.

**类型：** boolean

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

