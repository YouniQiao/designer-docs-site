# getAllDisposedRules

## getAllDisposedRules

```TypeScript
function getAllDisposedRules(): Array<DisposedRuleConfiguration>
```

获取当前用户下已设置的所有拦截规则。

**Since:** 23

**Required permissions:** 

 ohos.permission.MANAGE_DISPOSED_APP_STATUS or ohos.permission.GET_DISPOSED_APP_STATUS

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;DisposedRuleConfiguration> | 应用已设置的拦截规则。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied. A non-system application is not allowed to call a system API. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { appControl } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = appControl.getAllDisposedRules();
  console.info('getAllDisposedRules successfully. Data: ' + JSON.stringify(data));
} catch (error) {
  let message = (error as BusinessError).message;
  console.error('getAllDisposedRules failed ' + message);
}

```

