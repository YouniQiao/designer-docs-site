# isApplicationRunning

## isApplicationRunning

```TypeScript
function isApplicationRunning(bundleName: string): Promise<boolean>
```

查询所有用户下指定包名的应用是否正在运行。使用Promise异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.GET_RUNNING_INFO

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 表示要查询的应用的包名。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示至少存在一个用户正在运行指定包名的应用，返回false表示所有用户下指定包名的应用都没有运行。 |

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

let bundleName = "com.example.myapplication";

appManager.isApplicationRunning(bundleName).then((data) => {
  console.info(`The application running is: ${JSON.stringify(data)}`);
}).catch((error: BusinessError) => {
  console.error(`error: ${JSON.stringify(error)}`);
});

```

## isApplicationRunning

```TypeScript
function isApplicationRunning(bundleName: string, callback: AsyncCallback<boolean>): void
```

查询所有用户下指定包名的应用是否正在运行。使用callback异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.GET_RUNNING_INFO

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 表示要查询的应用的包名。 |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。返回true表示至少存在一个用户正在运行指定包名的应用，返回false表示所有用户下指定包名的应用都没有运行。 |

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

let bundleName = "com.example.myapplication";

try {
  appManager.isApplicationRunning(bundleName, (err, data) => {
    if (err) {
      console.error(`err: ${JSON.stringify(err)}`);
    } else {
      console.info(`The application running is: ${JSON.stringify(data)}`);
    }
  });
} catch (paramError) {
  let code = (paramError as BusinessError).code;
  let message = (paramError as BusinessError).message;
  console.error(`[appManager] error: ${code}, ${message}`);
}

```

