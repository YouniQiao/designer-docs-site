# on

## on('error')

```TypeScript
function on(type: 'error', observer: ErrorObserver): number
```

注册错误观测器。注册后可以捕获到应用产生的js crash，属于应用崩溃的一种。观测器捕获到该异常时应用不退出，建议在回调函数执行完后，增加同步退出操作。 仅在主线程中使用。使用线程出错时，将抛出错误码，因此建议使用try-catch逻辑进行处理。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | 填写'error'，表示错误观测器。 |
| observer | ErrorObserver | Yes | 错误观测器。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 观测器的索引值，与观测器一一对应。可用于`errorManager.off`函数中的`observerId`参数。  没有具体的单位。结果返回值是observerId。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：1. 必填参数未填写；  2. 参数类型不正确；3. 参数校验失败。 |
| 16000003 | 指定的ID不存在。 |

**Example**

```TypeScript
import { errorManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let observer: errorManager.ErrorObserver = {
  onUnhandledException(errorMsg) {
    console.info('onUnhandledException, errorMsg: ', errorMsg);
  },
  onException(errorObj) {
    console.info('onException, name: ', errorObj.name);
    console.info('onException, message: ', errorObj.message);
    if (typeof(errorObj.stack) === 'string') {
      console.info('onException, stack: ', errorObj.stack);
    }
  }
};
let observerId = -1;

try {
  observerId = errorManager.on('error', observer);
} catch (paramError) {
  let code = (paramError as BusinessError).code;
  let message = (paramError as BusinessError).message;
  console.error(`error: ${code}, ${message}`);
}

```

## on('loopObserver')

```TypeScript
function on(type: 'loopObserver', timeout: number, observer: LoopObserver): void
```

注册主线程消息处理耗时监听器。注册后可以捕获到应用主线程处理消息的具体执行时间。 仅在主线程中使用。使用线程出错时，将抛出错误码，因此建议使用try-catch逻辑进行处理。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'loopObserver' | Yes | 填写'loopObserver'，表示注册主线程消息处理耗时监听器。 |
| timeout | number | Yes | 表示事件执行阈值（单位：毫秒）。 阈值必须大于0。 单位为毫秒（ms）。 |
| observer | LoopObserver | Yes | 注册主线程消息处理耗时监听器。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：1. 必填参数未填写；  2. 参数类型不正确；3. 参数校验失败。 |

**Example**

```TypeScript
import { errorManager } from '@kit.AbilityKit';

let observer: errorManager.LoopObserver = {
  onLoopTimeOut(timeout: number) {
    console.info('Duration timeout: ' + timeout);
  }
};

errorManager.on("loopObserver", 1, observer);

```

## on('unhandledRejection')

```TypeScript
function on(type: 'unhandledRejection', observer: UnhandledRejectionObserver): void
```

注册被拒绝promise监听器。注册后可以捕获到当前线程中未被捕获到的promise rejection。 仅在主线程中使用。使用线程出错时，将抛出错误码，因此建议使用try-catch逻辑进行处理。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'unhandledRejection' | Yes | 填写'unhandledRejection'，表示注册被拒绝promise监听器。 |
| observer | UnhandledRejectionObserver | Yes | 注册被拒绝promise监听器。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：1. 必填参数未填写；  2. 参数类型不正确；3. 参数校验失败。 |
| 16200001 | 请在主线程中调用。 |

**Example**

```TypeScript
import { errorManager } from '@kit.AbilityKit';

let observer: errorManager.UnhandledRejectionObserver = (reason: Error, promise: Promise<void>) => {
  if (promise === promise1) {
    console.info("promise1 is rejected");
  }
  console.info("reason.name: ", reason.name);
  console.info("reason.message: ", reason.message);
  if (reason.stack) {
    console.info("reason.stack: ", reason.stack);
  }
};

errorManager.on("unhandledRejection", observer);

let promise1 = new Promise<void>(() => {}).then(() => {
  throw new Error("uncaught error");
});

```

## on('globalUnhandledRejectionDetected')

```TypeScript
function on(type: 'globalUnhandledRejectionDetected', observer: GlobalObserver): void
```

在进程中任意线程注册被拒绝promise监听器，注册后可以捕获到当前进程中未被捕获到的promise rejection。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'globalUnhandledRejectionDetected' | Yes | 填写'globalUnhandledRejectionDetected'，表示注册被拒绝promise监听器。 |
| observer | GlobalObserver | Yes | 注册被拒绝promise的callback。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：1. 必填参数未填写；  2. 参数类型不正确；3. 参数校验失败。 |
| 16200001 | 调用者无效。 |

**Example**

```TypeScript
import { errorManager } from '@kit.AbilityKit';

function promiseFunc(observer: errorManager.GlobalError) {
  console.info("result name :" + observer.name);
  console.info("result message :" + observer.message);
  console.info("result stack :" + observer.stack);
  console.info("result instanceName :" + observer.instanceName);
  console.info("result instanceType :" + observer.instanceType);
}

errorManager.on("globalUnhandledRejectionDetected", promiseFunc);
// You are advised to use async to throw a promise exception.
async function throwError() {
  throw new Error("uncaught error");
}

let promise1 = new Promise<void>(() => {}).then(() => {
  throwError();
});

```

## on('freeze')

```TypeScript
function on(type: 'freeze', observer: FreezeObserver): void
```

注册应用主线程freeze监听。多次注册情况下，取最后一次注册的结果。 仅在主线程中使用。使用线程出错时，将抛出错误码，因此建议使用try-catch逻辑进行处理。 > **注意**： > > 如果该回调函数执行时间超过1s，可能导致[AppRecovery](arkts-app-ability-apprecovery.md#appRecovery)功能不可用。通过解析hilog日志中的begin与Freeze > callback execution completed两者的时间差可以计算回调函数执行时长，如果超过1秒，可以尝试采用异步处理、减少阻塞操作、优化数据结构等方法优化回调逻辑，降低执行时长。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'freeze' | Yes | 填写'freeze'，表示应用主线程freeze观测器。 |
| observer | FreezeObserver | Yes | 由on接口注册的freeze监听的callback。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：1. 必填参数未填写；  2. 参数类型不正确；3. 参数校验失败。 |

**Example**

```TypeScript
import { errorManager } from '@kit.AbilityKit';

function freezeCallback() {
    console.info("freezecallback");
}
errorManager.on("freeze", freezeCallback);

```

## on('globalErrorOccurred')

```TypeScript
function on(type: 'globalErrorOccurred', observer: GlobalObserver): void
```

在进程中的任意线程中注册 `errormanager.on` 接口，监听整个进程中任意线程的异常。观测器捕获到该异常时应用不退出，建议在回调函数执行完后，增加同步退出操作。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'globalErrorOccurred' | Yes | 填写'globalErrorOccurred'，表示错误观测器。 |
| observer | GlobalObserver | Yes | 自定义异常处理回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：1. 必填参数未填写；  2. 参数类型不正确；3. 参数校验失败。 |
| 16200001 | 调用者无效。 |

**Example**

```TypeScript
import { errorManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

function errorFunc(observer: errorManager.GlobalError) {
    console.info("result name :" + observer.name);
    console.info("result message :" + observer.message);
    console.info("result stack :" + observer.stack);
    console.info("result instanceName :" + observer.instanceName);
    console.info("result instanceType :" + observer.instanceType);
}

try {
  errorManager.on('globalErrorOccurred', errorFunc);
} catch (paramError) {
  let code = (paramError as BusinessError).code;
  let message = (paramError as BusinessError).message;
  console.error(`error: ${code}, ${message}`);
}

```

