# getFreezeExemptedApps

## Modules to Import

```TypeScript
import { applicationManager } from '@kit.MDMKit';
```

## getFreezeExemptedApps

```TypeScript
function getFreezeExemptedApps(admin: Want | null): Array<common.ApplicationInstance>
```

Obtains the background freeze-exempt application list of all users on the current device.

**Since:** 22

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**Model restriction:** This API can be used only in the stage model.

<!--Device-applicationManager-function getFreezeExemptedApps(admin: Want | null): Array<common.ApplicationInstance>--><!--Device-applicationManager-function getFreezeExemptedApps(admin: Want | null): Array<common.ApplicationInstance>-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want \| null | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies that actually take effect on the device are returned.<br>**Since:** 26.0.0 |

**Return value:**

| Type | Description |
| --- | --- |
| [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<common.ApplicationInstance> | Array of the background freeze-exempt application list. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |

