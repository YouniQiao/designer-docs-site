# setDelegatedPolicies

## Modules to Import

```TypeScript
import { adminManager } from '@kit.MDMKit';
```

<a id="setdelegatedpolicies"></a>
## setDelegatedPolicies

```TypeScript
function setDelegatedPolicies(admin: Want, bundleName: string, policies: Array<string>): void
```

Delegates other applications to set device management policies. The applications must request the permissions required.

**Since:** 14

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_DELEGATED_POLICY

**Model restriction:** This API can be used only in the stage model.

<!--Device-adminManager-function setDelegatedPolicies(admin: Want, bundleName: string, policies: Array<string>): void--><!--Device-adminManager-function setDelegatedPolicies(admin: Want, bundleName: string, policies: Array<string>): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| bundleName | string | Yes | Bundle name of the delegated application. The distribution type of the delegated application must be **enterprise_normal** or **enterprise_mdm**. You can call the [getBundleInfoForSelf](../../apis-ability-kit/arkts-apis/arkts-ability-bundlemanager-getbundleinfoforself-f.md#getbundleinfoforself-1)API to query the [BundleInfo](../../apis-ability-kit/arkts-apis/arkts-ability-bundleinfo-i.md) of the application, where **BundleInfo.appInfo.appDistributionType** indicates the distribution type. |
| policies | Array&lt;string&gt; | Yes | [Delegation Policy List](docroot://reference/apis-mdm-kit/js-apis-enterprise-adminManager.md#delegation-policy-list) |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200009](../errorcode-enterpriseDeviceManager.md#9200009-failed-to-grant-permissions-to-an-application) | Failed to grant the permission to the application. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { adminManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let admin: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
// Replace with actual values.
let policies: Array<string> = ["disabled_hdc"];

try {
  // Replace parameters with actual values.
  adminManager.setDelegatedPolicies(admin, "com.example.enterprise.xxx", policies);
  console.info('Succeeded in setting delegated policies.');
} catch (err) {
  console.error(`Failed to set delegated policies. Code: ${err.code}, message: ${err.message}`);
}

```

