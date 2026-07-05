# getConnectedVpnAppInfo

## getConnectedVpnAppInfo

```TypeScript
function getConnectedVpnAppInfo(): Promise<Array<string>>
```

Get the connected VPN App Info.

**Since:** 20

**Required permissions:** 

 ohos.permission.MANAGE_VPN

**System capability:** SystemCapability.Communication.NetManager.Vpn

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | The promise returned by the connected VPN App Info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 19900001 | Invalid parameter value. |
| 19900002 | System internal error. |

