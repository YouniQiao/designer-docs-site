# setDefaultErrorHandler

## setDefaultErrorHandler

```TypeScript
function setDefaultErrorHandler(defaultHandler?: ErrorHandler) : ErrorHandler
```

发生JS_CRASH异常时，支持链式回调，返回上一次注册的处理器，仅限主线程调用。 如果传入非法参数或在子线程调用，将抛出错误码并返回undefined，因此建议使用try-catch逻辑进行处理。 若接口参数为空，后续注册的处理器将无法与前序已注册的处理器建立关联，从而中断链式调用。

**Since:** 21

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| defaultHandler | ErrorHandler | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| ErrorHandler | 返回上一次注册的错误处理器。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 16000205 | API未在主线程中调用。 |

**Example**

```TypeScript
import { errorManager } from '@kit.AbilityKit';
import { process } from '@kit.ArkTS';

let oldHandler: errorManager.ErrorHandler;
const errorHandler: errorManager.ErrorHandler = (reason: Error) => {
    // Customize the errorHandler logic.
    console.info('[Handler]  Uncaught exception handler invoked.');
    if (oldHandler) {
        oldHandler(reason);
    } else {
        // You are advised to add a null check. If the value is null, use a synchronous exit approach.
        const processManager = new process.ProcessManager();
        processManager.exit(0);
    }
};
oldHandler = errorManager.setDefaultErrorHandler(errorHandler);

```

