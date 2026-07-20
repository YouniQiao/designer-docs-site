# ConnectOptions

**ConnectOptions** can be used as an input parameter to receive status changes during the connection to a background service. For example, it is used as an input parameter of [connectServiceExtensionAbility](arkts-ability-uiabilitycontext-c.md#connectserviceextensionability-1)to connect to a ServiceExtensionAbility.

**Since:** 7

<!--Device-unnamed-export interface ConnectOptions--><!--Device-unnamed-export interface ConnectOptions-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## onConnect

```TypeScript
onConnect(elementName: ElementName, remote: rpc.IRemoteObject): void
```

Called when a connection is set up.

**Since:** 7

<!--Device-ConnectOptions-onConnect(elementName: ElementName, remote: rpc.IRemoteObject): void--><!--Device-ConnectOptions-onConnect(elementName: ElementName, remote: rpc.IRemoteObject): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| elementName | [ElementName](arkts-ability-bundlemanager-elementname-t.md) | Yes | Element name of the target ability. |
| remote | rpc.IRemoteObject | Yes | IRemoteObject instance used for IPC with the target ability. |

## onDisconnect

```TypeScript
onDisconnect(elementName: ElementName): void
```

Called when a connection is interrupted.

**Since:** 7

<!--Device-ConnectOptions-onDisconnect(elementName: ElementName): void--><!--Device-ConnectOptions-onDisconnect(elementName: ElementName): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| elementName | [ElementName](arkts-ability-bundlemanager-elementname-t.md) | Yes | Element name of the target ability. |

## onFailed

```TypeScript
onFailed(code: number): void
```

Called when a connection fails.

**Since:** 7

<!--Device-ConnectOptions-onFailed(code: number): void--><!--Device-ConnectOptions-onFailed(code: number): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | number | Yes | Error code returned when connection to the specified ability fails.* For details about the error codes, see [Universal Error Codes](../errorcode-universal.md) and [Ability Error Codes](errorcode-ability.md).* 201 - The application does not have permission to call the interface.* 16000001 - The specified ability does not exist.* 16000002 - Incorrect ability type.* 16000004 - Cannot start an invisible component.* 16000005 - The specified process does not have the permission.* 16000006 - Cross-user operations are not allowed.* 16000008 - The crowdtesting application expires.* 16000053 - The ability is not on the top of the UI.* 16000055 - Installation-free timed out.* 16000050 - Internal error. |

