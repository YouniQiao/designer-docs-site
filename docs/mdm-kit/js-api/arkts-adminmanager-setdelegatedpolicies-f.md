# setDelegatedPolicies

## setDelegatedPolicies

```TypeScript
function setDelegatedPolicies(admin: Want, bundleName: string, policies: Array<string>): void
```

委托其他应用来设置设备的管控策略。被委托的其他应用需申请委托策略对应接口所需权限。

**Since:** 14

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_DELEGATED_POLICY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| bundleName | string | Yes | 被委托应用包名。被委托应用的分发类型需为enterprise_normal和enterprise_mdm，可以通过  [getBundleInfoForSelf](../../apis-ability-kit/arkts-apis/arkts-bundlemanager-getbundleinfoforself-f.md#getBundleInfoForSelf-1)接口  查询应用自身的[BundleInfo]./bundleManager/BundleInfo，其中BundleInfo.appInfo.appDistributionType为应用的分发类型。 |
| policies | Array&lt;string> | Yes | [委托策略列表](docroot://reference/apis-mdm-kit/js-apis-enterprise-adminManager.md#可委托策略列表)。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200009 | Failed to grant the permission to the application. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

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

