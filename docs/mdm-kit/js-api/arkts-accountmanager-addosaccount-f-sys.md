# addOsAccount

## addOsAccount

```TypeScript
function addOsAccount(admin: Want, name: string, type: osAccount.OsAccountType): osAccount.OsAccountInfo
```

后台添加账号。

**Since:** 11

**Deprecated since:** 26.0.0

**Substitute:** accountManager.addOsAccountAsync

**Required permissions:** 

 ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| name | string | Yes | 用户ID，指定具体用户，取值范围：大于等于0。 |
| type | osAccount.OsAccountType | Yes | 要添加的账号的类型。 取值范围：ADMIN、NORMAL、GUEST。 · ADMIN：管理员账号。 · NORMAL：普  通账号。 · GUEST：访客账号。 |

**Return value:**

| Type | Description |
| --- | --- |
| osAccount.OsAccountInfo | Information about the account added. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9201003 | Failed to add an OS account. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { accountManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';
import { osAccount } from '@kit.BasicServicesKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

try {
  // Replace parameters with actual values.
  let info: osAccount.OsAccountInfo = accountManager.addOsAccount(wantTemp, "TestAccountName", osAccount.OsAccountType.NORMAL);
  console.info(`Succeeded in creating os account: ${JSON.stringify(info)}`);
} catch (err) {
  console.error(`Failed to create os account. Code: ${err.code}, message: ${err.message}`);
}

```

