# isScreenOn

## Modules to Import

```TypeScript
import { power } from '@ohos.power';
```

## isScreenOn

```TypeScript
function isScreenOn(callback: AsyncCallback<boolean>): void
```

Checks the screen status of the current device. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [isActive](arkts-basicservices-isactive-f.md#isactive-1)

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the screen status obtained, where the value **true** indicates on andthe value **false** indicates off. Otherwise, **err** is an error object. |

**Example**

```TypeScript
power.isScreenOn((err: Error, data: boolean) => {
    if (typeof err === 'undefined') {
        console.info('screen on status is ' + data);
    } else {
        console.error('check screen status failed, err: ' + err);
    }
})

```


## isScreenOn

```TypeScript
function isScreenOn(): Promise<boolean>
```

Checks the screen status of the current device. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [isActive](arkts-basicservices-isactive-f.md#isactive-1)

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Returns true if the screen is on; returns false otherwise. |

**Example**

```TypeScript
power.isScreenOn()
.then((data: boolean) => {
    console.info('screen on status is ' + data);
})
.catch((err: Error) => {
    console.error('check screen status failed, err: ' + err);
})

```

