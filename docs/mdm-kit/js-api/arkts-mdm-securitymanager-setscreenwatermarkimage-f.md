# setScreenWatermarkImage

## Modules to Import

```TypeScript
import { securityManager } from '@kit.MDMKit';
```

## setScreenWatermarkImage

```TypeScript
function setScreenWatermarkImage(admin: Want, pixelMap: image.PixelMap): void
```

Sets the watermark image to be displayed on the screen.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_SECURITY

**Model restriction:** This API can be used only in the stage model.

<!--Device-securityManager-function setScreenWatermarkImage(admin: Want, pixelMap: image.PixelMap): void--><!--Device-securityManager-function setScreenWatermarkImage(admin: Want, pixelMap: image.PixelMap): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | admin indicates the administrator ability information. |
| pixelMap | image.PixelMap | Yes | pixelMap indicates the PixelMap of watermark image |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200012](../errorcode-enterpriseDeviceManager.md#9200012-parameter-verification-failed) | Parameter verification failed. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |

