# getTopWindow

## getTopWindow

```TypeScript
function getTopWindow(callback: AsyncCallback<Window>): void
```

获取当前应用内最后显示的窗口，使用callback异步回调。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [getLastWindow()]window.getLastWindow(ctx: BaseContext, callback: AsyncCallback<Window>)替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** window.getLastWindow(ctx:

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Window> | Yes | 回调函数。返回当前应用内最后显示的窗口对象。 |

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

获取当前应用内最后显示的窗口，使用Promise异步回调。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用[getLastWindow()]window.getLastWindow(ctx: BaseContext)替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** window.getLastWindow(ctx:

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Window> | Promise对象。返回当前应用内最后显示的窗口对象。 |

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

获取当前应用内最后显示的窗口，使用Promise异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用[getLastWindow()]window.getLastWindow(ctx: BaseContext)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** window.getLastWindow(ctx:

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ctx | BaseContext | Yes | 当前应用上下文信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Window> | Promise对象。返回当前应用内最后显示的窗口对象。 |

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

获取当前应用内最后显示的窗口，使用callback异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，参数ctx传入null或undefined时，可能会导致callback无法得到执行，建议使用 > [getLastWindow()]window.getLastWindow(ctx: BaseContext, callback: AsyncCallback<Window>)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** window.getLastWindow(ctx:

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ctx | BaseContext | Yes | 当前应用上下文信息。 |
| callback | AsyncCallback&lt;Window> | Yes | 回调函数。返回当前应用内最后显示的窗口对象。 |

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

