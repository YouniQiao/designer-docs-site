# startChildProcess

## startChildProcess

```TypeScript
function startChildProcess(srcEntry: string, startMode: StartMode): Promise<int>
```

启动[ArkTS子进程](docroot://application-models/ability-terminology.md#arkts子进程)。使用Promise异步回调。 该接口在Tablet、PC/2in1中可正常调用，在其他设备类型中返回16000061错误码。 > **说明：** > > 调用该接口创建子进程成功会返回子进程pid，然后执行子进程的[ChildProcess.onStart](arkts-childprocess-c.md#onStart)函数 > ，[ChildProcess.onStart](arkts-childprocess-c.md#onStart)函数执行完后子进程会自动销毁。 > > 调用该接口创建的子进程不支持异步ArkTS API调用，仅支持同步ArkTS API调用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| srcEntry | string | Yes | 子进程源文件路径，只支持源文件放在entry类型的模块中，以src/main为根目录。例如子进程文件在entry模块下src/main/ets/process/  DemoProcess.ets，则srcEntry为"./ets/process/DemoProcess.ets"。 另外，需要确保子进程源文件被其它文件引用到，防止被构建工具优化掉。（详见下方示例代码） |
| startMode | StartMode | Yes | 子进程启动模式。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise对象，返回子进程pid。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16000050 | Internal error. |
| 16000061 | Operation not supported. |
| 16000062 | The number of child processes exceeds the upper limit. |

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
function startChildProcess(srcEntry: string, startMode: StartMode, callback: AsyncCallback<int>): void
```

启动[ArkTS子进程](docroot://application-models/ability-terminology.md#arkts子进程)。使用callback异步回调。 该接口在Tablet、PC/2in1中可正常调用，在其他设备类型中返回16000061错误码。 > **说明：** > > 调用该接口创建子进程成功会返回子进程pid，然后执行子进程的[ChildProcess.onStart](arkts-childprocess-c.md#onStart)函数 > ，[ChildProcess.onStart](arkts-childprocess-c.md#onStart)函数执行完后子进程会自动销毁。 > > 调用该接口创建的子进程不支持异步ArkTS API调用，仅支持同步ArkTS API调用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| srcEntry | string | Yes | 子进程源文件路径，只支持源文件放在entry类型的模块中，以src/main为根目录。例如子进程文件在entry模块下src/main/ets/process/  DemoProcess.ets，则srcEntry为"./ets/process/DemoProcess.ets"。 另外，需要确保子进程源文件被其它文件引用到，防止被构建工具优化掉。（详见下方示例代码） |
| startMode | StartMode | Yes | 子进程启动模式。 |
| callback | AsyncCallback&lt;int> | Yes | 回调函数。当子进程启动成功，err为undefined，data为获取到的子进程pid；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 16000050 | Internal error. |
| 16000061 | Operation not supported. |
| 16000062 | The number of child processes exceeds the upper limit. |

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

