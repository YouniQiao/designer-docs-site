# getPasswordPolicy

## getPasswordPolicy

```TypeScript
function getPasswordPolicy(): PasswordPolicy
```

获取设备锁屏口令策略。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| PasswordPolicy | 设备锁屏口令策略。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { securityManager } from '@kit.MDMKit';

try {
    let result: securityManager.PasswordPolicy = securityManager.getPasswordPolicy();
    console.info(`Succeeded in getting password policy, result : ${JSON.stringify(result)}`);
} catch(err) {
    console.error(`Failed to get password policy. Code: ${err.code}, message: ${err.message}`);
}

```

