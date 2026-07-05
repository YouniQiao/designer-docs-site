# connectServiceExtensionAbility

## connectServiceExtensionAbility

```TypeScript
function connectServiceExtensionAbility(context: AgentExtensionContext, want: Want, callback: ConnectOptions): long
```

Connects an AgentExtensionAbility to a ServiceExtensionAbility. If the target service extension ability is visible, you can connect to it. If the target service extension ability is invisible, you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to connect to it. If the target service extension ability is on a remote device, you need to apply for permission:ohos.permission.DISTRIBUTED_DATASYNC.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AgentRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | AgentExtensionContext | 是 | The context of the current agent extension ability. |
| want | Want | 是 | Indicates the service extension ability to connect. |
| callback | ConnectOptions | 是 | Indicates the callback of connection. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | Returns the connection id. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system application. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by enterprise device management (EDM). |
| 16000050 | Internal error. Possible causes: 1.Connect to system service failed.  2.System service failed to communicate with dependency module. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16000073 | The app clone index is invalid. |

