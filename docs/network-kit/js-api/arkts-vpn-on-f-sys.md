# on

## on('connect')

```TypeScript
function on(type: 'connect', callback: Callback<VpnConnectState>): void
```

Subscribes to vpn connect state changes.

**Since:** 12

**Required permissions:** 

 ohos.permission.MANAGE_VPN

**System capability:** SystemCapability.Communication.NetManager.Vpn

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'connect' | Yes | Indicates vpn connect state changes. |
| callback | Callback&lt;VpnConnectState> | Yes | The callback of the vpn connect state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2200001 | Invalid parameter value. |
| 2200002 | Operation failed. Cannot connect to service. |
| 2200003 | System internal error. |

## on('connectMulti')

```TypeScript
function on(type: 'connectMulti', callback: Callback<MultiVpnConnectState>): void
```

Subscribes to vpn connect state changes.

**Since:** 20

**Required permissions:** 

 ohos.permission.MANAGE_VPN

**System capability:** SystemCapability.Communication.NetManager.Vpn

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'connectMulti' | Yes | Indicates multi vpn connect state changes. |
| callback | Callback&lt;MultiVpnConnectState> | Yes | The callback of the multi vpn connect state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 19900001 | Invalid parameter value. |
| 19900002 | System internal error. |

