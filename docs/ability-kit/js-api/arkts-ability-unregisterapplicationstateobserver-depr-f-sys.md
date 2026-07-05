# unregisterApplicationStateObserver (System API)

## unregisterApplicationStateObserver

```TypeScript
function unregisterApplicationStateObserver(observerId: number, callback: AsyncCallback<void>): void
```

Unregister application state observer.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** off

**Required permissions:** ohos.permission.RUNNING_STATE_OBSERVER

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| observerId | number | Yes | Indicates the number code of the observer. |
| callback | AsyncCallback&lt;void&gt; | Yes | Represents the specified callback method. |

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

Unregister application state observer.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** off

**Required permissions:** ohos.permission.RUNNING_STATE_OBSERVER

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| observerId | number | Yes | Indicates the number code of the observer. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

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

