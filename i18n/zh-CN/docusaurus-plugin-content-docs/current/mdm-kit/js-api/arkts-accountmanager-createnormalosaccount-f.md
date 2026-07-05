# createNormalOsAccount

## createNormalOsAccount

```TypeScript
function createNormalOsAccount(admin: Want, name: string): Promise<osAccount.OsAccountInfo>
```

添加普通系统账号

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ENTERPRISE_MANAGE_LOCAL_ACCOUNTS

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| admin | Want | 是 | 企业设备管理扩展组件。 |
| name | string | 是 | 系统账号名称。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;osAccount.OsAccountInfo> | Returns the information about the added OS account. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | Parameter verification failed. |
| 9201003 | Failed to add an OS account. |
| 9201040 | The number of accounts reaches the upper limit. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 204 | Access denied due to user access control policy. Possible causes:  1. The operation is restricted by the OS-account constraint.  2. The required privilege for the operation has not been granted. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |

**示例：**

```TypeScript
import { accountManager } from '@kit.MDMKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { osAccount } from '@kit.BasicServicesKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // 需根据实际情况进行替换
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

// 创建普通系统账号，需要传入账号名称
accountManager.createNormalOsAccount(wantTemp, "TestAccountName").then((accountInfo: osAccount.OsAccountInfo) => {
  console.info('Succeeded in creating normal os account, accountInfo: ' + JSON.stringify(accountInfo));
}).catch((err: BusinessError) => {
  console.error(`Failed to create normal os account: code is ${err.code}, message is ${err.message}`);
});

```

