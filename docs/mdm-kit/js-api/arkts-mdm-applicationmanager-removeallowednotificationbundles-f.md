# removeAllowedNotificationBundles

## Modules to Import

```TypeScript
import { applicationManager } from '@kit.MDMKit';
```

<a id="removeallowednotificationbundles"></a>
## removeAllowedNotificationBundles

```TypeScript
function removeAllowedNotificationBundles(admin: Want, bundleNames: Array<string>, accountId: number): void
```

Removes applications that are allowed to send notifications.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**Model restriction:** This API can be used only in the stage model.

<!--Device-applicationManager-function removeAllowedNotificationBundles(admin: Want, bundleNames: Array<string>, accountId: number): void--><!--Device-applicationManager-function removeAllowedNotificationBundles(admin: Want, bundleNames: Array<string>, accountId: number): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | admin indicates the enterprise admin extension ability information. |
| bundleNames | Array&lt;string&gt; | Yes | bundleNames indicates the bundle name list of the applications. |
| accountId | number | Yes | accountId indicates the ID of OS account.The value must be an integer greater than or equal to 0. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200012](../errorcode-enterpriseDeviceManager.md#9200012-parameter-verification-failed) | Parameter verification failed. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |

