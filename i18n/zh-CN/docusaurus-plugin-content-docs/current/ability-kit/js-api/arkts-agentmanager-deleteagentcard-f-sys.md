# deleteAgentCard

## deleteAgentCard

```TypeScript
function deleteAgentCard(bundleName: string, agentId: string): Promise<void>
```

Deletes the AgentCard within specified agent id.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.MODIFY_AGENT_CARD

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | The bundle name of the AgentCard belongs to. |
| agentId | string | 是 | The agent id the AgentCard belongs to. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 16000050 | Internal error. Possible causes: 1.Connect to system service failed.  2.System service failed to communicate with dependency module. |
| 35600001 | The specified agentId does not exist. |

