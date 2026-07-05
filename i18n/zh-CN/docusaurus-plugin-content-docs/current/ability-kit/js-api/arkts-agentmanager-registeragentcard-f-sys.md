# registerAgentCard

## registerAgentCard

```TypeScript
function registerAgentCard(agentCard: AgentCard): Promise<void>
```

Registers an AgentCard. If `agentCard.type` is not specified, it defaults to `agentConstant.AgentCardType.APP`. When the type is `APP` or `LOW_CODE`, `appInfo` is validated, especially `bundleName` and `abilityName`. A maximum of 1000 AgentCards can be registered under one bundle.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.MODIFY_AGENT_CARD

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| agentCard | AgentCard | 是 | The AgentCard information to register. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000050 | Internal error. Possible causes: 1.Connect to system service failed.  2.System service failed to communicate with dependency module. |
| 18500001 | The bundle does not exist or no patch has been applied. |
| 35600005 | The specified AgentCard version is invalid. |
| 35600006 | The specified AgentCard has already been registered. Use updateAgentCard instead. |
| 35600008 | The number of AgentCards in the bundle reaches the limit. |

