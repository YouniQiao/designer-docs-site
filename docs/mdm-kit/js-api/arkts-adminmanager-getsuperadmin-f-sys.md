# getSuperAdmin

## getSuperAdmin

```TypeScript
function getSuperAdmin(): Promise<Want>
```

查询首用户（u100）下的超级设备管理应用。使用Promise异步回调。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Want> | 返回超级设备管理应用的Promise对象。当设备没有激活超级管理应用时，返回的Promise中Want的bundleName与abilityName为空串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { adminManager } from '@kit.MDMKit';
import { BusinessError } from '@kit.BasicServicesKit';

adminManager.getSuperAdmin().then((result) => {
  console.info(`Succeeded in getting super admin :${JSON.stringify(result)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to get super admin. Code: ${err.code}, message: ${err.message}`);
})

```

