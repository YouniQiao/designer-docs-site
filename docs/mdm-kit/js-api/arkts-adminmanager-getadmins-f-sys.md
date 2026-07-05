# getAdmins

## getAdmins

```TypeScript
function getAdmins(): Promise<Array<Want>>
```

查询当前用户下的所有设备管理应用。使用Promise异步回调。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Want>> | 包含所有已激活的设备管理应用的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { adminManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

adminManager.getAdmins().then((result) => {
  console.info(`Succeeded in getting admins :${JSON.stringify(result)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to get admins. Code: ${err.code}, message: ${err.message}`);
})

```

