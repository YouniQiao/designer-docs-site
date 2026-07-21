# getDefaultDisplay

## Modules to Import

```TypeScript
import { display } from '@kit.ArkUI';
```

<a id="getdefaultdisplay"></a>
## getDefaultDisplay

```TypeScript
function getDefaultDisplay(callback: AsyncCallback<Display>): void
```

Obtains the default Display object. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [getDefaultDisplaySync](arkts-arkui-display-getdefaultdisplaysync-f.md#getdefaultdisplaysync-1)

<!--Device-display-function getDefaultDisplay(callback: AsyncCallback<Display>): void--><!--Device-display-function getDefaultDisplay(callback: AsyncCallback<Display>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Display&gt; | Yes | Callback used to return the default Display object. |

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


<a id="getdefaultdisplay-1"></a>
## getDefaultDisplay

```TypeScript
function getDefaultDisplay(): Promise<Display>
```

Obtains the default Display object. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [getDefaultDisplaySync](arkts-arkui-display-getdefaultdisplaysync-f.md#getdefaultdisplaysync-1)

<!--Device-display-function getDefaultDisplay(): Promise<Display>--><!--Device-display-function getDefaultDisplay(): Promise<Display>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Display&gt; | Promise used to return the default Display object. |

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

