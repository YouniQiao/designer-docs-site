# setDelegatedPolicies

## setDelegatedPolicies

```TypeScript
function setDelegatedPolicies(bundleName: string, accountId: number, policies: Array<string>): void
```

委托其他应用来设置设备的管控策略。被委托的其他应用需申请委托策略对应接口所需权限。

**Since:** 20

**Required permissions:** 

 ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 将要被委托的管理应用的包名。被委托应用的分发类型需为enterprise_normal和enterprise_mdm，可以通过  [bundleManager.getBundleInfoForSelf](../../apis-ability-kit/arkts-apis/arkts-bundlemanager-getbundleinfoforself-f.md#getBundleInfoForSelf-1)  接口查询应用自身的BundleInfo，其中BundleInfo.appInfo.appDistributionType为应用的分发类型。 |
| accountId | number | Yes | 用户ID，指定具体用户，取值范围：大于等于0。可以通过  [getOsAccountLocalId]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback) |
| policies | Array&lt;string> | Yes | [委托策略列表](docroot://reference/apis-mdm-kit/js-apis-enterprise-adminManager.md#可委托策略列表)。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200009 | Failed to grant the permission to the application. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { adminManager } from '@kit.MDMKit';
import { common, Want } from '@kit.AbilityKit';

// Replace with actual values.
let bundleName = 'com.example.myapplication';
let userId = 100;
let policies: Array<string> = ["disabled_hdc"];

try {
  adminManager.setDelegatedPolicies(bundleName, userId, policies);
  console.info(`Succeeded in setting delegated policies.`);
} catch (err) {
  console.error(`Failed to set delegated policies. Code: ${err.code}, message: ${err.message}`);
}

```

