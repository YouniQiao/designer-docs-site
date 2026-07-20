# getTopWindow

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## getTopWindow

```TypeScript
function getTopWindow(callback: AsyncCallback<Window>): void
```

Obtains the top window of the current application. This API uses an asynchronous callback to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** getLastWindow(ctx:

**Model restriction:** This API can be used only in the FA model.

<!--Device-window-function getTopWindow(callback: AsyncCallback<Window>): void--><!--Device-window-function getTopWindow(callback: AsyncCallback<Window>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Window> | Yes | Callback used to return the top window obtained. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let windowClass: window.Window | undefined = undefined;
window.getTopWindow((err: BusinessError, data) => {
  const errCode: number = err.code;
  if (errCode) {
    console.error(`Failed to obtain the top window. Cause code: ${err.code}, message: ${err.message}`);
    return;
  }
  windowClass = data;
  console.info('Succeeded in obtaining the top window. Data: ' + JSON.stringify(data));
});

```


## getTopWindow

```TypeScript
function getTopWindow(): Promise<Window>
```

Obtains the top window of the current application. This API uses a promise to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** getLastWindow(ctx:

**Model restriction:** This API can be used only in the FA model.

<!--Device-window-function getTopWindow(): Promise<Window>--><!--Device-window-function getTopWindow(): Promise<Window>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Window> | Promise used to return the top window obtained. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let windowClass: window.Window | undefined = undefined;
let promise = window.getTopWindow();
promise.then((data)=> {
    windowClass = data;
    console.info('Succeeded in obtaining the top window. Data: ' + JSON.stringify(data));
}).catch((err: BusinessError)=>{
    console.error(`Failed to obtain the top window. Cause code: ${err.code}, message: ${err.message}`);
});

```


## getTopWindow

```TypeScript
function getTopWindow(ctx: BaseContext): Promise<Window>
```

Obtains the top window of the current application. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getLastWindow(ctx:

<!--Device-window-function getTopWindow(ctx: BaseContext): Promise<Window>--><!--Device-window-function getTopWindow(ctx: BaseContext): Promise<Window>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ctx | [BaseContext](../../apis-ability-kit/arkts-apis/arkts-ability-common-basecontext-t.md) | Yes | Current application context. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Window> | Promise used to return the top window obtained. |

**Example**

```TypeScript
// EntryAbility.ets
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage:window.WindowStage) {
    console.info('onWindowStageCreate');
    let windowClass: window.Window | undefined = undefined;
    let promise = window.getTopWindow(this.context);
    promise.then((data) => {
      windowClass = data;
      console.info('Succeeded in obtaining the top window. Data: ' + JSON.stringify(data));
    }).catch((error: BusinessError) => {
      console.error(`Failed to obtain the top window. Cause code: ${error.code}, message: ${error.message}`);
    });
  }
}

```


## getTopWindow

```TypeScript
function getTopWindow(ctx: BaseContext, callback: AsyncCallback<Window>): void
```

Obtains the top window of the current application. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getLastWindow(ctx:

<!--Device-window-function getTopWindow(ctx: BaseContext, callback: AsyncCallback<Window>): void--><!--Device-window-function getTopWindow(ctx: BaseContext, callback: AsyncCallback<Window>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ctx | [BaseContext](../../apis-ability-kit/arkts-apis/arkts-ability-common-basecontext-t.md) | Yes | Current application context. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Window> | Yes | Callback used to return the top window obtained. |

**Example**

```TypeScript
// EntryAbility.ets
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage:window.WindowStage){
    console.info('onWindowStageCreate');
    let windowClass: window.Window | undefined = undefined;
    try {
      window.getTopWindow(this.context, (err: BusinessError, data) => {
        const errCode: number = err.code;
        if(errCode){
          console.error(`Failed to obtain the top window. Cause code: ${err.code}, message: ${err.message}`);
          return ;
        }
        windowClass = data;
        console.info('Succeeded in obtaining the top window. Data: ' + JSON.stringify(data));
      });
    } catch(error){
      console.error(`Failed to obtain the top window. Cause code: ${error.code}, message: ${error.message}`);
    }
  }
}

```

