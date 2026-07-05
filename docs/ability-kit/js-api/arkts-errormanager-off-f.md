# off

## off('error')

```TypeScript
function off(type: 'error', observerId: number, callback: AsyncCallback<void>): void
```

注销错误观测器。使用callback异步返回。 仅在主线程中使用。使用线程出错时，将抛出错误码，因此建议使用try-catch逻辑进行处理。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | 填写'error'，表示错误观测器。 |
| observerId | number | Yes | 由on方法返回的观测器的index值。没有具体的单位。 |
| callback | AsyncCallback&lt;void> | Yes | 表示指定的回调方法。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：1. 必填参数未填写；  2. 参数类型不正确；3. 参数校验失败。 |
| 16000003 | 指定的ID不存在。 |

**Example**

```TypeScript
import { errorManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let observerId = 100;

function unregisterErrorObserverCallback(err: BusinessError) {
  if (err) {
    console.error('------------ unregisterErrorObserverCallback ------------', err);
  }
}

try {
  errorManager.off('error', observerId, unregisterErrorObserverCallback);
} catch (paramError) {
  let code = (paramError as BusinessError).code;
  let message = (paramError as BusinessError).message;
  console.error(`error: ${code}, ${message}`);
}

```

## off('error')

```TypeScript
function off(type: 'error', observerId: number): Promise<void>
```

注销错误观测器。使用Promise异步返回。 仅在主线程中使用。使用线程出错时，将抛出错误码，因此建议使用try-catch逻辑进行处理。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | 填写'error'，表示错误观测器。 |
| observerId | number | Yes | 由on方法返回的观测器的index值。没有具体的单位。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：1. 必填参数未填写；  2. 参数类型不正确；3. 参数校验失败。 |
| 16000003 | 指定的ID不存在。 |

**Example**

```TypeScript
import { errorManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let observerId = 100;

try {
  errorManager.off('error', observerId)
    .then((data) => {
      console.info('----------- unregisterErrorObserver success ----------', data);
    })
    .catch((err: BusinessError) => {
      console.error('----------- unregisterErrorObserver fail ----------', err);
    });
} catch (paramError) {
  let code = (paramError as BusinessError).code;
  let message = (paramError as BusinessError).message;
  console.error(`error: ${code}, ${message}`);
}

```

## off('loopObserver')

```TypeScript
function off(type: 'loopObserver', observer?: LoopObserver): void
```

注销主线程消息处理监听器。 仅在主线程中使用。使用线程出错时，将抛出错误码，因此建议使用try-catch逻辑进行处理。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'loopObserver' | Yes | 填写'loopObserver'，表示应用主线程观测器。 |
| observer | LoopObserver | No | 应用主线程观测器标志。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：1. 必填参数未填写；  2. 参数类型不正确；3. 参数校验失败。 |
| 16200001 | 请在主线程中调用。 |
| 16300004 | 观测器不存在。 |

**Example**

```TypeScript
import { errorManager } from '@kit.AbilityKit';

errorManager.off("loopObserver");

```

## off('unhandledRejection')

```TypeScript
function off(type: 'unhandledRejection', observer?: UnhandledRejectionObserver): void
```

注销被拒绝promise监听器。 仅在主线程中使用。使用线程出错时，将抛出错误码，因此建议使用try-catch逻辑进行处理。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'unhandledRejection' | Yes | 填写'unhandledRejection'，表示注册被拒绝promise监听器。 |
| observer | UnhandledRejectionObserver | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：1. 必填参数未填写；  2. 参数类型不正确；3. 参数校验失败。 |
| 16200001 | 请在主线程中调用。 |
| 16300004 | 观测器不存在。 |

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
  throw new Error("uncaught error")
})

errorManager.off("unhandledRejection");


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
  throw new Error("uncaught error")
})

errorManager.off("unhandledRejection", observer);

```

## off('globalUnhandledRejectionDetected')

```TypeScript
function off(type: 'globalUnhandledRejectionDetected', observer?: GlobalObserver): void
```

注销被拒绝promise监听器，注销后无法监听进程中的promise异常。 如果传入的回调不在通过on方法注册的回调队列中，将抛出16300004错误码，因此建议使用try-catch逻辑进行处理。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'globalUnhandledRejectionDetected' | Yes | 填写'globalUnhandledRejectionDetected'，表示注册被拒绝promise监听器。 |
| observer | GlobalObserver | No | 由on接口注册的被拒绝promise的callback。建议使用该参数，缺省时默认清除所有通过on注册的相同env的callback，否则删除指定  callback。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：1. 必填参数未填写；  2. 参数类型不正确；3. 参数校验失败。 |
| 16200001 | 调用者无效。 |
| 16300004 | 观测器不存在。 |

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

async function throwError() {
  throw new Error("uncaught error");
}

let promise1 = new Promise<void>(() => {}).then(() => {
  throwError();
});

errorManager.off("globalUnhandledRejectionDetected", promiseFunc);

```

## off('freeze')

```TypeScript
function off(type: 'freeze', observer?: FreezeObserver): void
```

取消之前注册的应用主线程freeze监听。 仅在主线程中使用。使用线程出错时，将抛出错误码，因此建议使用try-catch逻辑进行处理。 如果传入的回调与通过on方法注册回调不一致，将抛出16300004错误码，因此建议使用try-catch逻辑进行处理。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'freeze' | Yes | 填写'freeze'，表示应用主线程freeze观测器。 |
| observer | FreezeObserver | No | 由on接口注册的freeze监听的callback。建议使用该参数，如果参数不填会直接清空callback，否则删除指定的callback。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：1. 必填参数未填写；  2. 参数类型不正确；3. 参数校验失败。 |
| 16300004 | 观测器不存在。 |

**Example**

```TypeScript
import { errorManager } from '@kit.AbilityKit';

function freezeCallback() {
    console.info("freezecallback");
}
errorManager.on("freeze", freezeCallback);
errorManager.off("freeze", freezeCallback);

```

## off('globalErrorOccurred')

```TypeScript
function off(type: 'globalErrorOccurred', observer?: GlobalObserver): void
```

注销错误观测器，注销之前注册在同一线程的callback全局监听。 如果传入的回调不在通过on方法注册的回调队列中，将抛出16300004错误码，因此建议使用try-catch逻辑进行处理。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'globalErrorOccurred' | Yes | 填写'globalErrorOccurred'，表示错误观测器。 |
| observer | GlobalObserver | No | 由on方法注册的callback。建议使用该参数，缺省时默认清除所有通过on注册的相同env的callback，否则删除指定callback。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：1. 必填参数未填写；  2. 参数类型不正确；3. 参数校验失败。 |
| 16200001 | 调用者无效。 |
| 16300004 | 观测器不存在。 |

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
  errorManager.off('globalErrorOccurred', errorFunc)
} catch (paramError) {
  let code = (paramError as BusinessError).code;
  let message = (paramError as BusinessError).message;
  console.error(`error: ${code}, ${message}`);
}

```

