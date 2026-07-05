# disconnectServiceExtensionAbility

## disconnectServiceExtensionAbility

```TypeScript
function disconnectServiceExtensionAbility(context: AgentExtensionContext, connectId: long): Promise<void>
```

Disconnects an AgentExtensionAbility from a ServiceExtensionAbility, in contrast to {@link connectServiceExtensionAbility}.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | AgentExtensionContext | 是 | The context of the current agent extension ability. |
| connectId | long | 是 | The connection id returned by connectServiceExtensionAbility. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system application. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. Possible causes: 1.Connect to system service failed.  2.System service failed to communicate with dependency module. |

