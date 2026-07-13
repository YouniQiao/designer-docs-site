# startChildProcess

## Modules to Import

```TypeScript
import { childProcessManager } from '@kit.AbilityKit';
```

## startChildProcess

```TypeScript
function startChildProcess(srcEntry: string, startMode: StartMode): Promise<number>
```

Starts an [ArkTS child process](../../../../application-models/ability-terminology.md#arkts-child-process). This API
uses a promise to return the result.
This API can be properly called on PCs/2-in-1 devices and tablets. If it is called on other devices, error code 160
00061 is returned.

> **NOTE**
>
> If the child process is created successfully, its PID is returned, and its
> [ChildProcess.onStart](arkts-ability-childprocess-c.md#onstart-1) function is executed. Once the
> function is done, the child process is automatically destroyed.
>
> The child process started by calling this API does not support asynchronous ArkTS API calls. It supports only
> synchronous ArkTS API calls.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| srcEntry | string | Yes | Path of the source file of the child process relative to the root directory **src/main**.The source file can be stored only in the module of the entry type. For example, if the source file of a childprocess is **src/main/ets/process/DemoProcess.ets** in the entry module, then **srcEntry** is **./ets/process/DemoProcess.ets**.<br>In addition, ensure that the source file of the child process is referenced by other files toprevent it from being optimized by the build tool. (For details, see the sample code below.) |
| startMode | StartMode | Yes | Start mode of the child process. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the PID of the child process. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000061](../errorcode-ability.md#16000061-unsupported-operation) | Operation not supported. |
| [16000062](../errorcode-ability.md#16000062-too-many-child-processes) | The number of child processes exceeds the upper limit. |

**Example**

```TypeScript
// Create the child process class DemoProcess.ets in src/main/ets/process of the entry module.
// entry/src/main/ets/process/DemoProcess.ets
import { ChildProcess } from '@kit.AbilityKit';

export default class DemoProcess extends ChildProcess {
  onStart() {
    console.info('DemoProcess OnStart() called');
  }
}

```

```TypeScript
// Call childProcessManager.startChildProcess to start the child process.
// entry/src/main/ets/tool/Tool.ets
import { childProcessManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import DemoProcess from '../process/DemoProcess';

try {
  DemoProcess.toString(); // Call any API of the DemoProcess class to prevent the code from being directly optimized by the compiler because it is not being referenced.
  childProcessManager.startChildProcess("./ets/process/DemoProcess.ets", childProcessManager.StartMode.SELF_FORK)
    .then((data) => {
      console.info(`startChildProcess success, pid: ${data}`);
    }, (err: BusinessError) => {
      console.error(`startChildProcess error, errorCode: ${err.code}`);
    })
} catch (err) {
  console.error(`startChildProcess error, errorCode: ${(err as BusinessError).code}, errorMsg: ${(err as BusinessError).message}.`);
}

```


## startChildProcess

```TypeScript
function startChildProcess(srcEntry: string, startMode: StartMode, callback: AsyncCallback<number>): void
```

Starts an [ArkTS child process](../../../../application-models/ability-terminology.md#arkts-child-process). This API
uses an asynchronous callback to return the result.
This API can be properly called on PCs/2-in-1 devices and tablets. If it is called on other devices, error code 160
00061 is returned.

> **NOTE**
>
> If the child process is created successfully, its PID is returned, and its
> [ChildProcess.onStart](arkts-ability-childprocess-c.md#onstart-1) function is executed. Once the
> function is done, the child process is automatically destroyed.
>
> The child process started by calling this API does not support asynchronous ArkTS API calls. It supports only
> synchronous ArkTS API calls.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| srcEntry | string | Yes | Path of the source file of the child process relative to the root directory **src/main**.The source file can be stored only in the module of the entry type. For example, if the source file of a childprocess is **src/main/ets/process/DemoProcess.ets** in the entry module, then **srcEntry** is **./ets/process/DemoProcess.ets**.<br>In addition, ensure that the source file of the child process is referenced by other files toprevent it from being optimized by the build tool. (For details, see the sample code below.) |
| startMode | StartMode | Yes | Start mode of the child process. |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the result. If the subprocess is started, **err** is**undefined** and **data** is the PID of the child process. Otherwise, **data** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. |
| [16000061](../errorcode-ability.md#16000061-unsupported-operation) | Operation not supported. |
| [16000062](../errorcode-ability.md#16000062-too-many-child-processes) | The number of child processes exceeds the upper limit. |

**Example**

```TypeScript
// Create the child process class DemoProcess.ets in src/main/ets/process of the entry module.
// entry/src/main/ets/process/DemoProcess.ets
import { ChildProcess } from '@kit.AbilityKit';

export default class DemoProcess extends ChildProcess {
  onStart() {
    console.info('DemoProcess OnStart() called');
  }
}

```

```TypeScript
// Call childProcessManager.startChildProcess to start the child process.
// entry/src/main/ets/tool/Tool.ets
import { childProcessManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import DemoProcess from '../process/DemoProcess';

try {
  DemoProcess.toString(); // Call any API of the DemoProcess class to prevent the code from being directly optimized by the compiler because it is not being referenced.
  childProcessManager.startChildProcess("./ets/process/DemoProcess.ets", childProcessManager.StartMode.SELF_FORK, (err, data) => {
    if (data) {
      console.info(`startChildProcess success, pid: ${data}`);
    } else {
      console.error(`startChildProcess error, errorCode: ${err.code}`);
    }
  });
} catch (err) {
  console.error(`startChildProcess error, errorCode: ${(err as BusinessError).code}, errorMsg: ${(err as BusinessError).message}.`);
}

```

