# getRunningProcessInformation

## getRunningProcessInformation

```TypeScript
function getRunningProcessInformation(): Promise<Array<ProcessInformation>>
```

获取当前应用运行进程的相关信息。使用Promise异步回调。 > **说明：** > > - 对于API version 11之前的版本，该接口需要申请权限ohos.permission.GET_RUNNING_INFO（该权限仅系统应用可申请）。 > > - 从API version 11开始，该接口仅用于获取调用方自身的进程信息，不再需要申请权限。

**Since:** 9

**Required permissions:** 

- API version9  to  10: ohos.permission.GET_RUNNING_INFO

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ProcessInformation>> | Promise对象，返回接口运行结果及有关运行进程的信息，可进行错误处理或其他自定义处理。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 16000050 | Internal error. |

**Example**

```TypeScript
import { appManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

appManager.getRunningProcessInformation().then((data) => {
  console.info(`The running process information is: ${JSON.stringify(data)}`);
}).catch((error: BusinessError) => {
  console.error(`error: ${JSON.stringify(error)}`);
});

```

## getRunningProcessInformation

```TypeScript
function getRunningProcessInformation(callback: AsyncCallback<Array<ProcessInformation>>): void
```

获取当前应用运行进程的相关信息。使用callback异步回调。 > **说明：** > > - 对于API version 11之前的版本，该接口需要申请权限ohos.permission.GET_RUNNING_INFO（该权限仅系统应用可申请）。 > > - 从API version 11开始，该接口仅用于获取调用方自身的进程信息，不再需要申请权限。

**Since:** 9

**Required permissions:** 

- API version9  to  10: ohos.permission.GET_RUNNING_INFO

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;ProcessInformation>> | Yes | 回调函数。当接口调用成功，err为undefined，data为当前应用运行进程的信息；否则为错误对象。可进行错误  处理或其他自定义处理。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000050 | Internal error. |

**Example**

```TypeScript
import { appManager } from '@kit.AbilityKit';

appManager.getRunningProcessInformation((err, data) => {
  if (err) {
    console.error(`getRunningProcessInformation fail, err: ${JSON.stringify(err)}`);
  } else {
    console.info(`The running process information is: ${JSON.stringify(data)}`);
  }
});

```

