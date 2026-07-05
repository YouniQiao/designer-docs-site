# updateVpnAuthorizedState

## updateVpnAuthorizedState

```TypeScript
function updateVpnAuthorizedState(bundleName: string): boolean
```

Update a VPN dialog authorize information

**Since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_VPN

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Vpn

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | authorize or not |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |

