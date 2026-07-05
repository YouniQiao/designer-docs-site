# setAlwaysOnVpnEnabled

## setAlwaysOnVpnEnabled

```TypeScript
function setAlwaysOnVpnEnabled(enable: boolean, bundleName: string): Promise<void>
```

Set the Enable/Disable Always on VPN mode for a device.

**Since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_VPN

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Vpn

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Always on enable or disable |
| bundleName | string | Yes | bundleName is used to set always on. |

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

