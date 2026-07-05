# getAllDisplay

## Modules to Import

```TypeScript
import { display } from '@ohos.display';
```

## getAllDisplay

```TypeScript
function getAllDisplay(callback: AsyncCallback<Array<Display>>): void
```

Obtains all Display objects. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getAllDisplays(callback:

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;Display&gt;&gt; | Yes | Callback used to return all the Display objects. |

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

Obtains all Display objects. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [getAllDisplays()](arkts-arkui-getalldisplays-f.md#getalldisplays-2)

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Display&gt;&gt; | Promise used to return all the Display objects. |

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

