# removeAllowedRunningBundles

## removeAllowedRunningBundles

```TypeScript
function removeAllowedRunningBundles(admin: Want, appIdentifiers: Array<string>, accountId: number): void
```

将应用从指定用户下的应用运行允许名单中移除。

**Since:** 21

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| appIdentifiers | Array&lt;string> | Yes | 应用唯一标识符的数组。可以通过接口bundleManager.getInstalledBundleList获取bundleInfo.signatureInfo.appIdentifier。取值范围：数组长度不能超过200。  最大长度为200。 |
| accountId | number | Yes | 用户ID，取值范围：大于等于0。  - 用户ID，取值范围：大于等于0。  accountId可以通过@ohos.account.osAccount中的getOsAccountLocalId等接口来获取。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | Parameter verification failed. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

**Example**

```TypeScript
import { applicationManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace it as required.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
// Replace it as required.
let appIdentifiers: Array<string> = ['0123456789123456789'];

try {
  applicationManager.removeAllowedRunningBundles(wantTemp, appIdentifiers, 100);
  console.info('Succeeded in removing allowed running bundles.');
} catch (err) {
  console.error(`Failed to remove allowed running bundles. Code is ${err.code}, message is ${err.message}`);
}

```

