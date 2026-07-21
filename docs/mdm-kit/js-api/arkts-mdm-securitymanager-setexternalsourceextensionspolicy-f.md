# setExternalSourceExtensionsPolicy

## Modules to Import

```TypeScript
import { securityManager } from '@kit.MDMKit';
```

<a id="setexternalsourceextensionspolicy"></a>
## setExternalSourceExtensionsPolicy

```TypeScript
function setExternalSourceExtensionsPolicy(admin: Want, policy: common.ManagedPolicy): void
```

Sets the management policy for extensions from external sources.

- DEFAULT:

Default policy with no restrictions applied. Users can enable or disable **Run extensions from external sources** in **Settings** > **Privacy & security** > **Advanced option**.  
- DISALLOW:

Policy that disallows extensions from external sources to run. With this policy, currently running extensions can continue, but cannot be started after being closed. Users cannot enable **Run extensions from external sources**.  
- FORCE_OPEN:

Policy that forcibly enables extensions from external sources to run. Users cannot disable **Run extensions from external sources**.

**Since:** 22

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_SECURITY

**Model restriction:** This API can be used only in the stage model.

<!--Device-securityManager-function setExternalSourceExtensionsPolicy(admin: Want, policy: common.ManagedPolicy): void--><!--Device-securityManager-function setExternalSourceExtensionsPolicy(admin: Want, policy: common.ManagedPolicy): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| policy | common.ManagedPolicy | Yes | Management policy. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200010](../errorcode-enterpriseDeviceManager.md#9200010-policy-conflict) | A conflict policy has been configured. |
| [9200012](../errorcode-enterpriseDeviceManager.md#9200012-parameter-verification-failed) | Parameter verification failed. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |

**Example**

```TypeScript
import { common, securityManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
try {
    securityManager.setExternalSourceExtensionsPolicy(wantTemp, common.ManagedPolicy.FORCE_OPEN);
    console.info(`Succeeded in setting managed policy.`);
} catch(err) {
    console.error(`Failed to set managed policy. Code: ${err.code}, message: ${err.message}`);
}

```

