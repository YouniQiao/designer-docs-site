# isDeviceControlEnabled

## Modules to Import

```TypeScript
import { partnerAgent } from '@kit.ConnectivityKit';
```

## isDeviceControlEnabled

```TypeScript
function isDeviceControlEnabled(deviceAddress: PartnerDeviceAddress): boolean
```

Checks whether device control is enabled.

**Since:** 23

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

<!--Device-partnerAgent-function isDeviceControlEnabled(deviceAddress: PartnerDeviceAddress): boolean--><!--Device-partnerAgent-function isDeviceControlEnabled(deviceAddress: PartnerDeviceAddress): boolean-End-->

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceAddress | [PartnerDeviceAddress](arkts-connectivity-partnerdeviceaddress-t.md) | Yes | The address of partner device. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns whether the device control is enabled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [34900099](../errorcode-fusionConnectivity.md#34900099-operation-failed) | Internal error. |

