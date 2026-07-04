# enableSelfDeviceAdmin

## Modules to Import

```TypeScript
import { adminManager } from '@ohos.enterprise.adminManager';
```

## enableSelfDeviceAdmin

```TypeScript
function enableSelfDeviceAdmin(admin: Want, credential: string): Promise<void>
```

Enables self as a device administrator.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ENTERPRISE_ACTIVATE_DEVICE_ADMIN

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | admin indicates the enterprise admin extension ability information.The admin must have the corresponding permission. |
| credential | string | Yes | credential indicates the credential for activating self as an administrator. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | the promise returned by the enableSelfDeviceAdmin. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200003](../errorcode-enterpriseDeviceManager.md#9200003-invalid-administrator-ability-component) | The administrator ability component is invalid. |
| [9200004](../errorcode-enterpriseDeviceManager.md#9200004-failed-to-enable-the-device-administrator-application) | Failed to activate the administrator application of the device. |
| [9200012](../errorcode-enterpriseDeviceManager.md#9200012-parameter-verification-failed) | Parameter verification failed. |
| 9200017 | The self-activation credential of the enterprise device administratoris invalid. |
| 9200018 | This device is not an enterprise device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |

