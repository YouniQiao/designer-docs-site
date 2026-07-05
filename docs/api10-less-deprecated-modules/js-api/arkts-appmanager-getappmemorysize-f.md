# getAppMemorySize

## getAppMemorySize

```TypeScript
function getAppMemorySize(): Promise<number>
```

获取当前应用程序可以使用的最大内存（RAM）值。使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.app.ability.appManager/appManager#getAppMemorySize

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | 当前应用程序可以使用的最大内存（RAM）值，可根据此值进行错误处理或其他自定义处理，单位是M。使用Promise异步回调。 |

**Example**

```TypeScript
import appManager from '@ohos.application.appManager';
import { BusinessError } from '@ohos.base';

appManager.getAppMemorySize().then((data) => {
  console.info(`The size of app memory is: ${JSON.stringify(data)}`);
}).catch((error: BusinessError) => {
  console.error(`error: ${JSON.stringify(error)}`);
});

```

## getAppMemorySize

```TypeScript
function getAppMemorySize(callback: AsyncCallback<number>): void
```

获取当前应用程序可以使用的最大内存（RAM）值。使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.app.ability.appManager/appManager#getAppMemorySize

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number> | Yes | 获取当前应用程序可以使用的最大内存（RAM）值，可根据此值进行错误处理或其他自定义处理，单位是M。使用callback异步回调。 |

**Example**

```TypeScript
import appManager from '@ohos.application.appManager';

appManager.getAppMemorySize((error, data) => {
  if (error && error.code !== 0) {
    console.error(`getAppMemorySize fail, error: ${JSON.stringify(error)}`);
  } else {
    console.info(`The size of app memory is: ${JSON.stringify(data)}`);
  }
});

```

