# addPermissionUsedRecord

## addPermissionUsedRecord

```TypeScript
function addPermissionUsedRecord(
    tokenID: int,
    permissionName: Permissions,
    successCount: int,
    failCount: int,
    options?: AddPermissionUsedRecordOptions
  ): Promise<void>
```

受权限保护的应用在被其他服务、应用调用时，可以使用该接口增加一条权限使用记录。 建议在访问敏感权限后调用此接口，以便系统记录对应的敏感权限访问事件。使用Promise异步回调。 权限使用记录包括：调用方的应用身份标识、使用的应用权限名称，以及调用方访问本应用成功和失败的次数。 权限使用记录受[setPermissionUsedRecordToggleStatus]privacyManager.setPermissionUsedRecordToggleStatus设置的开关状态控制。 开关关闭时，调用此接口不会产生权限使用记录。

**起始版本：** 9

**需要权限：** 

 ohos.permission.PERMISSION_USED_STATS

**系统能力：** SystemCapability.Security.AccessToken

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tokenID | int | 是 | 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：该参数必须为大于0的整数。  BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)。 |
| permissionName | Permissions | 是 | 需要记录的权限名称。传入无效值时返回错误码12100001。  取值约束：权限名长度不能超过256个字符。 |
| successCount | int | 是 | 访问成功的次数。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：取值必须为非负整数。 |
| failCount | int | 是 | 访问失败的次数。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：取值必须为非负整数。 |
| options | AddPermissionUsedRecordOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 201 | Permission denied. Interface caller does not have permission  "ohos.permission.PERMISSION_USED_STATS". |
| 202 | Not system app. Interface caller is not a system app. |
| 12100001 | Invalid parameter. The tokenID is 0, the permissionName exceeds  256 characters, the count value is invalid, usedType in AddPermissionUsedRecordOptions is invalid,  or the enhancedIdentity in AddPermissionUsedRecordOptions exceeds 48 characters. |
| 12100002 | The specified tokenID does not exist or refer to an application process. |
| 12100003 | The specified permission does not exist or is not a user_grant permission. |
| 12100007 | Service exception. |
| 12100008 | Out of memory. |
| 12100009 | Common inner error. A database error occurs. |

**示例：**

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tokenID: number = 0; // 可以通过应用BundleInfo中的ApplicationInfo的accessTokenId字段获取。
// 添加权限使用记录
privacyManager.addPermissionUsedRecord(tokenID, 'ohos.permission.READ_AUDIO', 1, 0).then(() => {
  console.info('addPermissionUsedRecord success');
}).catch((err: BusinessError): void => {
  console.error(`addPermissionUsedRecord fail, code: ${err.code}, message: ${err.message}`);
});
// with options param
let options: privacyManager.AddPermissionUsedRecordOptions = {
  usedType: privacyManager.PermissionUsedType.PICKER_TYPE,
  enhancedIdentity: 'test'
};
privacyManager.addPermissionUsedRecord(tokenID, 'ohos.permission.READ_AUDIO', 1, 0, options).then(() => {
  console.info('addPermissionUsedRecord success');
}).catch((err: BusinessError): void => {
  console.error(`addPermissionUsedRecord fail, code: ${err.code}, message: ${err.message}`);
});

```

## addPermissionUsedRecord

```TypeScript
function addPermissionUsedRecord(
    tokenID: int,
    permissionName: Permissions,
    successCount: int,
    failCount: int,
    callback: AsyncCallback<void>
  ): void
```

受权限保护的应用在被其他服务、应用调用时，可以使用该接口增加一条权限使用记录。建议在访问敏感权限后调用此接口，以便系统记录对应的敏感权限访问事件。使用callback异步回调。 权限使用记录包括：调用方的应用身份标识、使用的应用权限名称，以及调用方访问本应用成功和失败的次数。 权限使用记录受[setPermissionUsedRecordToggleStatus]privacyManager.setPermissionUsedRecordToggleStatus设置的开关状态控制。开关关 闭时，调用此接口不会产生权限使用记录。

**起始版本：** 9

**需要权限：** 

 ohos.permission.PERMISSION_USED_STATS

**系统能力：** SystemCapability.Security.AccessToken

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tokenID | int | 是 | 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：该参数必须为大于0的整数。  BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)。 |
| permissionName | Permissions | 是 | 需要记录的权限名称。传入无效值时返回错误码12100001。  取值约束：权限名长度不能超过256个字符。 |
| successCount | int | 是 | 访问成功的次数。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：取值必须为非负整数。 |
| failCount | int | 是 | 访问失败的次数。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：取值必须为非负整数。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当添加使用记录成功时，err为undefined；否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 201 | Permission denied. Interface caller does not have permission  "ohos.permission.PERMISSION_USED_STATS". |
| 202 | Not system app. Interface caller is not a system app. |
| 12100001 | Invalid parameter. The tokenID is 0, the permissionName exceeds 256  characters, or the count value is invalid. |
| 12100002 | The specified tokenID does not exist or refer to an application process. |
| 12100003 | The specified permission does not exist or is not a user_grant permission. |
| 12100007 | Service exception. |
| 12100008 | Out of memory. |
| 12100009 | Common inner error. A database error occurs. |

**示例：**

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tokenID: number = 0; // 可以通过应用BundleInfo中的ApplicationInfo的accessTokenId字段获取。
// 添加权限使用记录
privacyManager.addPermissionUsedRecord(tokenID, 'ohos.permission.READ_AUDIO', 1, 0, (err: BusinessError, data: void) => {
  if (err) {
    console.error(`addPermissionUsedRecord fail, code: ${err.code}, message: ${err.message}`);
  } else {
    console.info('addPermissionUsedRecord success');
  }
});

```

