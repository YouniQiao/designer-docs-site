# getDefaultDisplay

## getDefaultDisplay

```TypeScript
function getDefaultDisplay(callback: AsyncCallback<Display>): void
```

获取当前默认的Display对象，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** display.getDefaultDisplaySync

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Display> | Yes | 回调函数。返回当前默认的Display对象。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let displayClass: display.Display | null = null;
display.getDefaultDisplay((err: BusinessError, data: display.Display) => {
  const errCode: number = err.code;
  if (errCode) {
    console.error(`Failed to obtain the default display object. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in obtaining the default display object. Data: ${JSON.stringify(data)}`);
  displayClass = data;
});

```

## getDefaultDisplay

```TypeScript
function getDefaultDisplay(): Promise<Display>
```

获取当前默认的Display对象，使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** display.getDefaultDisplaySync

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Display> | Promise对象。返回当前默认的Display对象。 |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let displayClass: display.Display | null = null;
let promise: Promise<display.Display> = display.getDefaultDisplay();
promise.then((data: display.Display) => {
  displayClass = data;
  console.info(`Succeeded in obtaining the default display object. Data: ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to obtain the default display object. Code: ${err.code}, message: ${err.message}`);
});

```

