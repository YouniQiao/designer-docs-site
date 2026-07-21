# isOtaUpdateNonceEnable

## Modules to Import

```TypeScript
import { systemManager } from '@kit.MDMKit';
```

<a id="isotaupdatenonceenable"></a>
## isOtaUpdateNonceEnable

```TypeScript
function isOtaUpdateNonceEnable(admin: Want): boolean
```

Queries whether OTA update nonce is enabled.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_SYSTEM

**Model restriction:** This API can be used only in the stage model.

<!--Device-systemManager-function isOtaUpdateNonceEnable(admin: Want): boolean--><!--Device-systemManager-function isOtaUpdateNonceEnable(admin: Want): boolean-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | admin indicates the enterprise admin extension ability information. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | returns true indicates enabled OTA update nonce, otherwise disabled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200016](../errorcode-enterpriseDeviceManager.md#9200016-service-timeout) | Service timeout. |

