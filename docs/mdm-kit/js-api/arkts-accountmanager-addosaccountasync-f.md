# addOsAccountAsync

## addOsAccountAsync

```TypeScript
function addOsAccountAsync(admin: Want, name: string, type: osAccount.OsAccountType): Promise<osAccount.OsAccountInfo>
```

后台添加账号。使用Promise异步回调。 > **说明：** > > 该接口比较耗时，当调用此接口后，后续如果在应用主线程调用其他同步接口时需要等待该接口异步返回。

**Since:** 12

**Required permissions:** 

 ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| name | string | Yes | 账号名，指要添加的账号的名称。无法创建同名、名称为空的账号，创建同名账号时会报错误码9201003，创建名称为空的账号时会报错误码401。 |
| type | osAccount.OsAccountType | Yes | 要添加的账号的类型。 取值范围：ADMIN、NORMAL、GUEST。 · ADMIN：管理员账号。 · NORMAL：普  通账号。 · GUEST：访客账号。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;osAccount.OsAccountInfo> | Promise used to return the added account information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9201003 | Failed to add an OS account. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { accountManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';
import { BusinessError, osAccount } from '@kit.BasicServicesKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

// Replace parameters with actual values.
accountManager.addOsAccountAsync(wantTemp, "TestAccountName", osAccount.OsAccountType.NORMAL).then((info) => {
  console.info(`Succeeded in creating os account: ${JSON.stringify(info)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to create os account. Code: ${err.code}, message: ${err.message}`);
});

```

