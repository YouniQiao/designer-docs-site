# getExternalSourceExtensionsPolicy

## Modules to Import

```TypeScript
import { securityManager } from '@kit.MDMKit';
```

<a id="getexternalsourceextensionspolicy"></a>
## getExternalSourceExtensionsPolicy

```TypeScript
function getExternalSourceExtensionsPolicy(admin: Want | null): common.ManagedPolicy
```

Obtains the management policy for extensions from external sources.

**Since:** 22

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_SECURITY

**Model restriction:** This API can be used only in the stage model.

<!--Device-securityManager-function getExternalSourceExtensionsPolicy(admin: Want | null): common.ManagedPolicy--><!--Device-securityManager-function getExternalSourceExtensionsPolicy(admin: Want | null): common.ManagedPolicy-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) \| null | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies that actually take effect on the device are returned.<br>**Since:** 26.0.0 |

**Return value:**

| Type | Description |
| --- | --- |
| common.ManagedPolicy | Management policy obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |

