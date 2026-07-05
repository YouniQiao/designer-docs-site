# getAllDisplay

## getAllDisplay

```TypeScript
function getAllDisplay(callback: AsyncCallback<Array<Display>>): void
```

获取当前所有的Display对象，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** display.getAllDisplays(callback:

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;Display>> | Yes | 回调函数。返回当前所有的Display对象。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

display.getAllDisplay((err: BusinessError, data: Array<display.Display>) => {
  const errCode: number = err.code;
  if (errCode) {
    console.error(`Failed to obtain all the display objects. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in obtaining the default display objects. Data: ${JSON.stringify(data)}`);
});

```

## getAllDisplay

```TypeScript
function getAllDisplay(): Promise<Array<Display>>
```

获取当前所有的Display对象，使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** display.getAllDisplays()

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Display>> | Promise对象。返回当前所有的Display对象。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let promise: Promise<Array<display.Display>> = display.getAllDisplay();
promise.then((data: Array<display.Display>) => {
  console.info(`Succeeded in obtaining the default display objects. Data: ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to obtain all the display objects. Code: ${err.code}, message: ${err.message}`);
});

```

