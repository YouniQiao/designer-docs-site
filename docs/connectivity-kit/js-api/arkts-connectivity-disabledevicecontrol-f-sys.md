# disableDeviceControl (System API)

## Modules to Import

```TypeScript
import { partnerAgent } from '@ohos.FusionConnectivity.partnerAgent';
```

## disableDeviceControl

```TypeScript
function disableDeviceControl(deviceAddress: PartnerDeviceAddress): Promise<void>
```

Disables device control for a bound device.

**Since:** 23

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceAddress | PartnerDeviceAddress | Yes | The address of partner device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [34900001](../errorcode-fusionConnectivity.md#34900001-device-not-registered) | The device is not bound. |
| [34900099](../errorcode-fusionConnectivity.md#34900099-operation-failed) | Internal error. |

