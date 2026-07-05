# isSharedBundleRunning

## isSharedBundleRunning

```TypeScript
function isSharedBundleRunning(bundleName: string, versionCode: long): Promise<boolean>
```

检查共享库是否正在使用。使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_RUNNING_INFO

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 表示要查询的共享库包名。 |
| versionCode | long | Yes | 表示要查询的共享库版本号。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示共享库正在使用，返回false表示共享库不在使用。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. |

**Example**

```TypeScript
import { appManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

const bundleName = "this is a bundleName";
const versionCode = 1;

appManager.isSharedBundleRunning(bundleName, versionCode).then((data) => {
  console.info(`The shared bundle running is: ${JSON.stringify(data)}`);
}).catch((error: BusinessError) => {
  console.error(`error: ${JSON.stringify(error)}`);
});

```

## isSharedBundleRunning

```TypeScript
function isSharedBundleRunning(bundleName: string, versionCode: long, callback: AsyncCallback<boolean>): void
```

检查共享库是否正在使用。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_RUNNING_INFO

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 表示要查询的共享库包名。 |
| versionCode | long | Yes | 表示要查询的共享库版本号。 |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。返回true表示共享库正在使用，返回false表示共享库不在使用。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. |

**Example**

```TypeScript
import { appManager } from '@kit.AbilityKit';

const bundleName = "this is a bundleName";
const versionCode = 1;

appManager.isSharedBundleRunning(bundleName, versionCode, (err, data) => {
  if (err) {
    console.error(`err: ${JSON.stringify(err)}`);
  } else {
    console.info(`The shared bundle running is: ${JSON.stringify(data)}`);
  }
});

```

