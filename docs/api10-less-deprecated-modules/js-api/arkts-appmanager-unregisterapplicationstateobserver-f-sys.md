# unregisterApplicationStateObserver

## unregisterApplicationStateObserver

```TypeScript
function unregisterApplicationStateObserver(observerId: number, callback: AsyncCallback<void>): void
```

取消注册应用程序状态观测器。使用callback异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.app.ability.appManager/appManager#off

**Required permissions:** 

 ohos.permission.RUNNING_STATE_OBSERVER

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| observerId | number | Yes | 表示观察者的编号代码。 |
| callback | AsyncCallback&lt;void> | Yes | 表示指定的callback回调方法。 |

**Example**

```TypeScript
import appManager from '@ohos.application.appManager';
import { BusinessError } from '@ohos.base';

let observerId = 100;

function unregisterApplicationStateObserverCallback(err: BusinessError) {
  if (err) {
    console.error(`UnregisterApplicationStateObserverCallback failed, error code: ${err.code}, error msg: ${err.message}.`);
    return;
  }
}

appManager.unregisterApplicationStateObserver(observerId, unregisterApplicationStateObserverCallback);

```

## unregisterApplicationStateObserver

```TypeScript
function unregisterApplicationStateObserver(observerId: number): Promise<void>
```

取消注册应用程序状态观测器。使用Promise异步回调。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.app.ability.appManager/appManager#off

**Required permissions:** 

 ohos.permission.RUNNING_STATE_OBSERVER

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| observerId | number | Yes | 表示观察者的编号代码。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Example**

```TypeScript
import appManager from '@ohos.application.appManager';
import { BusinessError } from '@ohos.base';

let observerId = 100;

appManager.unregisterApplicationStateObserver(observerId)
.then((data) => {
    console.info(`unregisterApplicationStateObserver success, data: ${data}.`);
})
.catch((err: BusinessError) => {
    console.error(`unregisterApplicationStateObserver failed, err code: ${err.code}, err msg: ${err.message}.`);
});

```

