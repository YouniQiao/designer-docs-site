# AgentHostProxy

The proxy object of the connected party for the AgentExtensionAbility, used to send messages to the connected party, etc.

**起始版本：** 24

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

## authorize

```TypeScript
authorize(handshakeData: string): void
```

Send authentication to an agent service host.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handshakeData | string | 是 | Indicates the handshake data to send. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 35600002 | Failed to send the IPC message. |

## sendData

```TypeScript
sendData(data: string): void
```

Send data to an agent service host.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | string | 是 | Indicates the data to send. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 35600002 | Failed to send the IPC message. |

