# getPermissionUsedRecordToggleStatus

## getPermissionUsedRecordToggleStatus

```TypeScript
function getPermissionUsedRecordToggleStatus(): Promise<boolean>
```

系统应用调用此接口，可以获取当前用户的权限使用记录开关状态，例如在权限管理界面展示当前开关设置状态。使用Promise异步回调。

**Since:** 18

**Required permissions:** 

 ohos.permission.PERMISSION_USED_STATS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象，返回true，表示当前用户的开关状态值为开启。返回false，表示当前用户的开关状态值为关闭。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. Interface caller does not have permission  "ohos.permission.PERMISSION_USED_STATS". |
| 202 | Not system app. Interface caller is not a system app. |
| 12100007 | Service exception. |

**Example**

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Query permission usage record switch status
privacyManager.getPermissionUsedRecordToggleStatus().then((status) => {
  console.info('getPermissionUsedRecordToggleStatus success');
  if (status == true) {
    console.info('get status is TRUE');
  } else {
    console.info('get status is FALSE');
  }
}).catch((err: BusinessError): void => {
  console.error(`getPermissionUsedRecordToggleStatus fail, code: ${err.code}, message: ${err.message}`);
});

```

