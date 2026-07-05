# setAbilityDisabled

## setAbilityDisabled

```TypeScript
function setAbilityDisabled(admin: Want, bundleName: string, accountId: number, abilityName: string, isDisabled: boolean): void
```

设置是否禁用指定应用（系统应用和三方应用均支持）的Ability组件。当前仅支持UIAbility类型，禁用后无法拉起此Ability组件的用户界面。

**Since:** 23

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| bundleName | string | Yes | 应用包名，指定是否禁用的应用包名。 |
| accountId | number | Yes | 用户ID，取值范围：大于等于0的整数。  取值范围为全体整数。  - 用户ID，取值范围：大于等于0的整数。 accountId可以通过@ohos.account.osAccount中的  [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-osaccount-accountmanager-i.md#getOsAccountLocalId)等接口来获取。 |
| abilityName | string | Yes | 表示要禁用/解除禁用的Ability组件名（当前仅支持UIAbility）。 |
| isDisabled | boolean | Yes | 是否禁用该Ability组件。true表示禁用该Ability组件，false表示解除禁用该Ability组件。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | Parameter verification failed. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

**Example**

```TypeScript
import { applicationManager, common } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace it as required.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

try {
  // Replace it as required.
  let bundleName: string = "com.example.exampleapplication";
  let accountId: number = 100;
  let abilityName: string = "EntryAbility";
  applicationManager.setAbilityDisabled(wantTemp, bundleName, accountId, abilityName, true);
  console.info('Succeeded in setting ability disabled');
} catch(err) {
  console.error(`Failed to set ability disabled. Code: ${err.code}, message: ${err.message}`);
}

```

