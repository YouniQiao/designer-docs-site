# getWindow

## Modules to Import

```TypeScript
import { featureAbility } from '@kit.AbilityKit';
```

## getWindow

```TypeScript
function getWindow(callback: AsyncCallback<window.Window>): void
```

Obtains the window corresponding to this ability. This API uses an asynchronous callback to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-featureAbility-function getWindow(callback: AsyncCallback<window.Window>): void--><!--Device-featureAbility-function getWindow(callback: AsyncCallback<window.Window>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<window.Window> | Yes | Callback used to return the window. |

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

Obtains the window corresponding to this ability. This API uses a promise to return the result.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

<!--Device-featureAbility-function getWindow(): Promise<window.Window>--><!--Device-featureAbility-function getWindow(): Promise<window.Window>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<window.Window> | Promise used to return the window. |

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

