# getWindow

## getWindow

```TypeScript
function getWindow(callback: AsyncCallback<window.Window>): void
```

获取当前Ability对应的窗口。使用callback异步回调。

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;window.Window> | Yes | 回调函数，返回当前Ability对应的窗口。 |

**Example**

```TypeScript
import { featureAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

featureAbility.getWindow((error: BusinessError, data: window.Window) => {
  if (error && error.code !== 0) {
    console.error(`getWindow fail, error: ${JSON.stringify(error)}`);
  } else {
    console.info(`getWindow success, data: ${typeof(data)}`);
  }
});

```

## getWindow

```TypeScript
function getWindow(): Promise<window.Window>
```

获取当前Ability对应的窗口。使用Promise异步回调。

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;window.Window> | Promise对象，返回当前Ability对应的窗口。 |

**Example**

```TypeScript
import { featureAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

featureAbility.getWindow().then((data: window.Window) => {
  console.info(`getWindow success, data: ${typeof(data)}`);
}).catch((error: BusinessError)=>{
  console.error(`getWindow fail, error: ${JSON.stringify(error)}`);
});

```

