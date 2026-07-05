# isAlwaysOnVpnEnabled

## isAlwaysOnVpnEnabled

```TypeScript
function isAlwaysOnVpnEnabled(bundleName: string): Promise<boolean>
```

Get the Always on VPN mode status for a device.

**Since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_VPN

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Vpn

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | bundleName is used to retrieve whether it has the always on. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | return the mode for alway on vpn status |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |

