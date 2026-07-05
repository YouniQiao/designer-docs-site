# getPermissionUsedTypeInfos

## getPermissionUsedTypeInfos

```TypeScript
function getPermissionUsedTypeInfos(
    tokenId?: int | null,
    permissionName?: Permissions): Promise<Array<PermissionUsedTypeInfo>>
```

查询设备上指定应用访问敏感权限时的信息（包括敏感权限名称、敏感权限访问方式）。

**起始版本：** 12

**需要权限：** 

 ohos.permission.PERMISSION_USED_STATS

**系统能力：** SystemCapability.Security.AccessToken

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tokenId | int \| null | 否 |  |
| permissionName | Permissions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;PermissionUsedTypeInfo>> | Promise used to return the list of permission access type  information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. Interface caller does not have permission  "ohos.permission.PERMISSION_USED_STATS". |
| 202 | Not system app. Interface caller is not a system app. |
| 12100001 | Invalid parameter. PermissionName exceeds 256 characters. |
| 12100002 | The input tokenId does not exist. |
| 12100003 | The input permissionName does not exist. |
| 12100009 | Common inner error. A database error occurs. |

**示例：**

```TypeScript
import { privacyManager, Permissions } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tokenId: number = 0; // 可以通过应用BundleInfo中的ApplicationInfo的accessTokenId字段获取。
let permissionName: Permissions = 'ohos.permission.CAMERA';
// without any param
privacyManager.getPermissionUsedTypeInfos().then((data: Array<privacyManager.PermissionUsedTypeInfo>) => {
  console.info('getPermissionUsedTypeInfos success, result: ' + JSON.stringify(data));
}).catch((err: BusinessError): void => {
  console.error(`getPermissionUsedTypeInfos fail, code: ${err.code}, message: ${err.message}`);
});
// only tokenId
privacyManager.getPermissionUsedTypeInfos(tokenId).then((data: Array<privacyManager.PermissionUsedTypeInfo>) => {
  console.info('getPermissionUsedTypeInfos success, result: ' + JSON.stringify(data));
}).catch((err: BusinessError): void => {
  console.error(`getPermissionUsedTypeInfos fail, code: ${err.code}, message: ${err.message}`);
});
// only permissionName
privacyManager.getPermissionUsedTypeInfos(null, permissionName).then((data: Array<privacyManager.PermissionUsedTypeInfo>) => {
  console.info('getPermissionUsedTypeInfos success, result: ' + JSON.stringify(data));
}).catch((err: BusinessError): void => {
  console.error(`getPermissionUsedTypeInfos fail, code: ${err.code}, message: ${err.message}`);
});
// tokenId and permissionName
privacyManager.getPermissionUsedTypeInfos(tokenId, permissionName).then((data: Array<privacyManager.PermissionUsedTypeInfo>) => {
  console.info('getPermissionUsedTypeInfos success, result: ' + JSON.stringify(data));
}).catch((err: BusinessError): void => {
  console.error(`getPermissionUsedTypeInfos fail, code: ${err.code}, message: ${err.message}`);
});

```

