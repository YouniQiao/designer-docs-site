# createVpnConnection

## createVpnConnection

```TypeScript
function createVpnConnection(context: VpnExtensionContext): VpnConnection
```

Create a VPN connection using the VpnExtensionContext.

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Vpn

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | VpnExtensionContext | Yes | Indicates the context of application or capability. |

**Return value:**

| Type | Description |
| --- | --- |
| VpnConnection | the VpnConnection of the construct VpnConnection instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. |

