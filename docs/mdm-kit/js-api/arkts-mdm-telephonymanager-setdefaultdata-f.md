# setDefaultData

## Modules to Import

```TypeScript
import { telephonyManager } from '@kit.MDMKit';
```

<a id="setdefaultdata"></a>
## setDefaultData

```TypeScript
function setDefaultData(admin: Want, slotId: number): void
```

Sets the default data traffic card.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_TELEPHONY

**Model restriction:** This API can be used only in the stage model.

<!--Device-telephonyManager-function setDefaultData(admin: Want, slotId: number): void--><!--Device-telephonyManager-function setDefaultData(admin: Want, slotId: number): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | admin indicates the enterprise admin extension ability information.The admin must have the corresponding permission. |
| slotId | number | Yes | Indicates the card slot index number.Ranges from {@code 0} to the maximum card slot index number supported by the device. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200012](../errorcode-enterpriseDeviceManager.md#9200012-parameter-verification-failed) | Parameter verification failed. |
| 9201020 | Failed to set the default data SIM card.The airplane mode is enabled or no SIM card is inserted. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [203](../../errorcode-universal.md#203-system-function-prohibited-by-enterprise-management-policies) | This function is prohibited by enterprise management policies. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |

