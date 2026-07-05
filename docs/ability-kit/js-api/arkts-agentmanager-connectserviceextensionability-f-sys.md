# connectServiceExtensionAbility

## connectServiceExtensionAbility

```TypeScript
function connectServiceExtensionAbility(context: AgentExtensionContext, want: Want, callback: ConnectOptions): long
```

Connects an AgentExtensionAbility to a ServiceExtensionAbility. If the target service extension ability is visible, you can connect to it. If the target service extension ability is invisible, you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to connect to it. If the target service extension ability is on a remote device, you need to apply for permission:ohos.permission.DISTRIBUTED_DATASYNC.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AgentRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | AgentExtensionContext | Yes | The context of the current agent extension ability. |
| want | Want | Yes | Indicates the service extension ability to connect. |
| callback | ConnectOptions | Yes | Indicates the callback of connection. |

**Return value:**

| Type | Description |
| --- | --- |
| long | Returns the connection id. |

**Error codes:**

| Error Code ID | Error Message |
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

