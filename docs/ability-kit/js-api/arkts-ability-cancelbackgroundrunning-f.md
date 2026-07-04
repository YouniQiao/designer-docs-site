# cancelBackgroundRunning

## Modules to Import

```TypeScript
import { particleAbility } from '@ohos.ability.particleAbility';
```

## cancelBackgroundRunning

```TypeScript
function cancelBackgroundRunning(callback: AsyncCallback<void>): void
```

Cancel background running of this ability to free up system memory.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** stopBackgroundRunning

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Returns the result of canceling a long-term task in the form of callback. |

**Example**

```TypeScript
import { particleAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

function callback(error: BusinessError, data: void) {
  if (error && error.code !== 0) {
    console.error(`Operation failed error: ${JSON.stringify(error)}`);
  } else {
    console.info(`Operation succeeded, data: ${data}`);
  }
}

particleAbility.cancelBackgroundRunning(callback);

```


## cancelBackgroundRunning

```TypeScript
function cancelBackgroundRunning(): Promise<void>
```

Cancel background running of this ability to free up system memory.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** stopBackgroundRunning

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | the promise returned by the function. |

**Example**

```TypeScript
import { particleAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

particleAbility.cancelBackgroundRunning().then(() => {
  console.info('Operation succeeded');
}).catch((err: BusinessError) => {
  console.error(`Operation failed cause: ${JSON.stringify(err)}`);
});

```

