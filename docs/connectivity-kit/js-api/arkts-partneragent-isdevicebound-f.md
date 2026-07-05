# isDeviceBound

## isDeviceBound

```TypeScript
function isDeviceBound(deviceAddress: PartnerDeviceAddress): boolean
```

Checks whether a device is bound to this application.

**Since:** 23

**Required permissions:** 

 ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceAddress | PartnerDeviceAddress | Yes | The address of partner device. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns whether the device is bound. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 34900099 | Internal error. |

