# connectAgentExtensionAbility

## connectAgentExtensionAbility

```TypeScript
function connectAgentExtensionAbility(want: Want, agentId: string,
    callback: AgentExtensionConnectCallback): Promise<AgentProxy>
```

Connects to an AgentExtensionAbility.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.CONNECT_AGENT

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Indicates the want info to connect. |
| agentId | string | 是 | The agent id to connect. |
| callback | AgentExtensionConnectCallback | 是 | The callback of connection. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AgentProxy> | The promise to get AgentProxy. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000008 | The crowdtesting application expires. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by enterprise device management (EDM). |
| 16000050 | Internal error. Possible causes: 1.Connect to system service failed.  2.System service failed to communicate with dependency module. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16000073 | The app clone index is invalid. |
| 35600001 | The specified agentId does not exist. |
| 35600003 | Maximum connections from the same caller have been reached.  Please disconnect at least one agent extension beforehand. |
| 35600007 | The specified LOW_CODE agent is already active and is not yet completed. |

