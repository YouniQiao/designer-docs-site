# unlockScreen

## Modules to Import

```TypeScript
import { screenLock } from '@ohos.screenLock';
```

## unlockScreen

```TypeScript
function unlockScreen(callback: AsyncCallback<void>): void
```

Unlock the screen.

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.MiscServices.ScreenLock

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | the callback of unlockScreen. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

screenLock.unlockScreen((err: BusinessError) => {      
  if (err) {
    console.error(`Failed to unlock the screen, Code: ${err.code}, message: ${err.message}`);
    return;    
  }
  console.info(`Succeeded unlocking the screen.`);
});

```


## unlockScreen

```TypeScript
function unlockScreen(): Promise<void>
```

Unlock the screen.

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.MiscServices.ScreenLock

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | the promise returned by the function. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

screenLock.unlockScreen().then(() => {
  console.info('Succeeded unlocking the screen.');
}).catch((err: BusinessError) => {
  console.error(`Failed to unlock the screen, Code: ${err.code}, message: ${err.message}`);
});

```

