# updateAgentCard

## updateAgentCard

```TypeScript
function updateAgentCard(agentCard: AgentCard): Promise<void>
```

Updates the AgentCard within specified agent id.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.MODIFY_AGENT_CARD

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| agentCard | AgentCard | 是 | The AgentCard information to update. |

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
| 35600001 | The specified agentId does not exist. |
| 35600004 | The specified AgentCard version is older than the current version. |
| 35600005 | The specified AgentCard version is invalid. |

