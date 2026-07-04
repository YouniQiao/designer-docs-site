# unregister

## Modules to Import

```TypeScript
import { continuationManager } from '@ohos.continuation.continuationManager';
```

## unregister

```TypeScript
function unregister(token: number, callback: AsyncCallback<void>): void
```

Unregisters the continuation management service. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** off(type:

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.DistributedAbilityManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| token | number | Yes | Token obtained after the registration of the continuation management service. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the unregistration is successful,**err** is **undefined**; otherwise, **err** is an error object. |

**Example**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';

let token: number = 1;
continuationManager.unregister(token, (err) => {
  if (err.code != 0) {
    console.error('unregister failed, cause: ' + JSON.stringify(err));
    return;
  }
  console.info('unregister finished. ');
});

```


## unregister

```TypeScript
function unregister(token: number): Promise<void>
```

Unregisters the continuation management service. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** off(type:

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.DistributedAbilityManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| token | number | Yes | Token obtained after the registration of the continuation management service. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Example**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let token: number = 1;
continuationManager.unregister(token)
  .then(() => {
    console.info('unregister finished. ');
  }).catch((err: BusinessError) => {
    console.error('unregister failed, cause: ' + JSON.stringify(err));
});

```

