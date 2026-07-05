# checkPermissionInUse

## checkPermissionInUse

```TypeScript
function checkPermissionInUse(permissionName: Permissions): boolean
```

查询指定敏感权限是否正在被使用，可用于权限管理界面展示权限实时使用状态场景。 判断依据为当前是否存在通过[startUsingPermission]privacyManager.startUsingPermission 标记开始使用且尚未通过[stopUsingPermission]privacyManager.stopUsingPermission标记停止使用的活跃调用。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.PERMISSION_USED_STATS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| permissionName | Permissions | Yes | 需要查询的权限名称。权限名不能为空，且长度不能超过256个字符，传入无效值时返回错误码12100001。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 指定的敏感权限是否正在被使用。true：指定的敏感权限正在被使用；false：指定的敏感权限未被使用。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. Interface caller does not have permission  "ohos.permission.PERMISSION_USED_STATS". |
| 202 | Not system app. Interface caller is not a system application. |
| 12100001 | Invalid parameter. The permissionName is empty or exceeds 256 characters. |
| 12100003 | The specified permission does not exist or is not a user_grant permission. |
| 12100007 | Service exception. |

**Example**

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // Query whether a specified permission is being used
  let isPermissionInUse = privacyManager.checkPermissionInUse('ohos.permission.CAMERA');
  console.info('checkPermissionInUse success, result: ' + isPermissionInUse);
} catch (err) {
  let error = err as BusinessError;
  console.error(`checkPermissionInUse fail, code: ${error.code}, message: ${error.message}`);
}

```

