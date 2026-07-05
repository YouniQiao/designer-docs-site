# enableDeviceControl

## enableDeviceControl

```TypeScript
function enableDeviceControl(deviceAddress: PartnerDeviceAddress): Promise<void>
```

Enables device control for a bound device.

**Since:** 23

**Required permissions:** 

 ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceAddress | PartnerDeviceAddress | Yes | The address of partner device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 801 | Capability not supported. |
| 34900001 | The device is not bound. |
| 34900099 | Internal error. |

