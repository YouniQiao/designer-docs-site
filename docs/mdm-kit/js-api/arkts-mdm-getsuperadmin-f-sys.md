# getSuperAdmin (System API)

## Modules to Import

```TypeScript
import { adminManager } from '@ohos.enterprise.adminManager';
```

## getSuperAdmin

```TypeScript
function getSuperAdmin(): Promise<Want>
```

Obtains the super device administrator application of this administrator. This API uses a promise to return the result.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Want&gt; | Promise used to return the super device administrator application obtained. If no superdevice administrator application is activated on the device, **bundleName** and **abilityName** in **Want**returned are empty strings. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

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

