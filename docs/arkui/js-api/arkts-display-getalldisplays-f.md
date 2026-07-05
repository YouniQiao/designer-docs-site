# getAllDisplays

## getAllDisplays

```TypeScript
function getAllDisplays(callback: AsyncCallback<Array<Display>>): void
```

获取当前所有的Display对象，使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;Display>> | Yes | 回调函数。返回当前所有的Display对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1400001 | Invalid display or screen. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let displayClass: Array<display.Display> = [];
display.getAllDisplays((err: BusinessError, data: Array<display.Display>) => {
  displayClass = data;
  const errCode: number = err.code;
  if (errCode) {
    console.error(`Failed to obtain all the display objects. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in obtaining all the display objects. Data: ${JSON.stringify(data)}`);
});

```

## getAllDisplays

```TypeScript
function getAllDisplays(): Promise<Array<Display>>
```

获取当前所有的Display对象，使用Promise异步回调。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Display>> | Promise对象。返回当前所有的Display对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1400001 | Invalid display or screen. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let displayClass: Array<display.Display> =[];
let promise: Promise<Array<display.Display>> = display.getAllDisplays();
promise.then((data: Array<display.Display>) => {
  displayClass = data;
  console.info(`Succeeded in obtaining all the display objects. Data:  ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to obtain all the display objects. Code: ${err.code}, message: ${err.message}`);
});

```

