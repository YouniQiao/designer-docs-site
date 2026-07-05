# isIdleState

## isIdleState

```TypeScript
function isIdleState(bundleName: string, callback: AsyncCallback<boolean>): void
```

判断指定bundleName的应用当前是否是空闲状态，三方应用只能查询自身的空闲状态。系统应用支持查询其他应用的空闲状态，查询前需要申请权限ohos.permission.BUNDLE_ACTIVE_INFO。使用Callback 异步回调。

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.AppGroup

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用的bundleName。 |
| callback | AsyncCallback&lt;boolean> | Yes | 指定的callback回调方法。如果指定的bundleName有效，则返回指定bundleName的应用当前是否是空闲状态；否则返回null。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { bundleState } from '@kit.BackgroundTasksKit';
// When a third-party application uses the sample code, change bundleName to its own bundle name.
bundleState.isIdleState("com.ohos.camera", (err: BusinessError, res: boolean) => {
  if (err) {
    console.error('BUNDLE_ACTIVE isIdleState callback failed, because: ' + err.code);
  } else {
    console.info('BUNDLE_ACTIVE isIdleState callback succeeded, result: ' + JSON.stringify(res));
  }
});

```

## isIdleState

```TypeScript
function isIdleState(bundleName: string): Promise<boolean>
```

判断指定bundleName的应用当前是否是空闲状态，三方应用只能查询自身的空闲状态。系统应用支持查询其他应用的空闲状态，查询前需要申请权限ohos.permission.BUNDLE_ACTIVE_INFO，使用Promise异 步回调。

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.AppGroup

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用的bundleName。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | 指定的Promise回调方法。如果指定的bundleName有效，则返回指定bundleName的应用当前是否是空闲状态；否则返回null。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { bundleState } from '@kit.BackgroundTasksKit';
// When a third-party application uses the sample code, change bundleName to its own bundle name.
bundleState.isIdleState("com.ohos.camera").then((res: boolean) => {
  console.info('BUNDLE_ACTIVE isIdleState promise succeeded, result: ' + JSON.stringify(res));
}).catch((err: BusinessError) => {
  console.error('BUNDLE_ACTIVE isIdleState promise failed, because: ' + err.code);
});

```

