# deleteSysVpnConfig

## deleteSysVpnConfig

```TypeScript
function deleteSysVpnConfig(vpnId: string): Promise<void>
```

Delete the configuration of system VPN network by the specified vpnId.

**Since:** 12

**Required permissions:** 

 ohos.permission.MANAGE_VPN

**System capability:** SystemCapability.Communication.NetManager.Vpn

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| vpnId | string | Yes | Indicates the uuid of the VPN network configuration. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2200001 | Invalid parameter value. |
| 2200002 | Operation failed. Cannot connect to service. |
| 2200003 | System internal error. |

