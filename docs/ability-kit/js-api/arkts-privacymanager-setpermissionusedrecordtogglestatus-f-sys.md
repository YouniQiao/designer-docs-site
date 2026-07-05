# setPermissionUsedRecordToggleStatus

## setPermissionUsedRecordToggleStatus

```TypeScript
function setPermissionUsedRecordToggleStatus(status: boolean): Promise<void>
```

设置是否记录当前用户的权限使用情况。系统应用调用此接口，可以设置当前用户的权限使用记录开关状态。使用Promise异步回调。 status为true时，[addPermissionUsedRecord]privacyManager.addPermissionUsedRecord接口可以正常添加使用记录；status为false时， [addPermissionUsedRecord]privacyManager.addPermissionUsedRecord接口不产生权限使用记录，并且删除当前用户的历史记录。

**Since:** 18

**Required permissions:** 

 ohos.permission.PERMISSION_RECORD_TOGGLE

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| status | boolean | Yes | 权限使用记录开关状态。true为开，false为关。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 201 | Permission denied. Interface caller does not have permission  "ohos.permission.PERMISSION_RECORD_TOGGLE". |
| 202 | Not system app. Interface caller is not a system app. |
| 12100007 | Service exception. |
| 12100009 | Common inner error. Possible causes: 1. Database error. 2. Failed to query  all applications under the user. |

**Example**

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Set permission usage record switch status
privacyManager.setPermissionUsedRecordToggleStatus(true).then(() => {
  console.info('setPermissionUsedRecordToggleStatus success');
}).catch((err: BusinessError): void => {
  console.error(`setPermissionUsedRecordToggleStatus fail, code: ${err.code}, message: ${err.message}`);
});

```

