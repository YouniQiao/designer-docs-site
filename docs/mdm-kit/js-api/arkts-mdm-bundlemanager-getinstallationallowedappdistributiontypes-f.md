# getInstallationAllowedAppDistributionTypes

## Modules to Import

```TypeScript
import { bundleManager } from '@kit.MDMKit';
```

## getInstallationAllowedAppDistributionTypes

```TypeScript
function getInstallationAllowedAppDistributionTypes(admin: Want | null): Array<AppDistributionType>
```

Obtains the distribution type of the signing certificate used by applications that can be installed.

**Since:** 20

**Required permissions:** ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY

**Model restriction:** This API can be used only in the stage model.

<!--Device-bundleManager-function getInstallationAllowedAppDistributionTypes(admin: Want | null): Array<AppDistributionType>--><!--Device-bundleManager-function getInstallationAllowedAppDistributionTypes(admin: Want | null): Array<AppDistributionType>-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) \| null | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies that actually take effect on the device are returned.<br>**Since:** 26.0.0 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;AppDistributionType&gt; | Distribution types of the application signing certificate. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |

