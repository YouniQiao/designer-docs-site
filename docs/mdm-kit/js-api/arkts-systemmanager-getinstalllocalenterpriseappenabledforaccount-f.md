# getInstallLocalEnterpriseAppEnabledForAccount

## getInstallLocalEnterpriseAppEnabledForAccount

```TypeScript
function getInstallLocalEnterpriseAppEnabledForAccount(admin: Want | null, accountId: number): boolean
```

查询指定用户是否支持本地安装企业应用。

**Since:** 24

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_SYSTEM

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want \| null | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 当设备有多个MDM应用时，传入admin  查询对应admin设置的策略。传入null时查询整机实际生效的策略。 |
| accountId | number | Yes | 用户ID，取值范围：大于等于0。 accountId可以通过  [getOsAccountLocalId]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback:  AsyncCallback)  等接口来获取  取值应为≥0的整数。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 是否支持本地安装企业应用，true为支持，false为不支持。当admin为null时，查询系统当前是否支持本地安装企业应用。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | Parameter verification failed. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |

**Example**

```TypeScript
import { systemManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
// Replace with actual values.
let accountId: number = 100;
try {
  let isEnable: boolean = systemManager.getInstallLocalEnterpriseAppEnabledForAccount(wantTemp, accountId);
  console.info('Succeeded in getting installLocalEnterpriseAppEnabled.');
} catch (err) {
  console.error(`Failed to get installLocalEnterpriseAppEnabled. Code is ${err.code}, message is ${err.message}`);
}

```

