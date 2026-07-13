# register

## Modules to Import

```TypeScript
import { continuationManager } from '@kit.AbilityKit';
```

## register

```TypeScript
function register(callback: AsyncCallback<number>): void
```

Registers the continuation management service and obtains a token. This API does not involve any filter parameters
and uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** on(type:

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.DistributedAbilityManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the token generated after the continuationmanagement service is connected. |

**Example**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';

let token: number = -1;
continuationManager.register((err, data) => {
  if (err.code != 0) {
    console.error('register failed, cause: ' + JSON.stringify(err));
    return;
  }
  console.info('register finished, ' + JSON.stringify(data));
  token = data;
});

```


## register

```TypeScript
function register(options: ContinuationExtraParams, callback: AsyncCallback<number>): void
```

Registers the continuation management service and obtains a token. This API uses an asynchronous callback to return
the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** on(type:

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.DistributedAbilityManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ContinuationExtraParams | Yes | Extra parameters used to filter the list of available devices. |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the token generated after the continuationmanagement service is connected. |

**Example**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';

let token: number = -1;
continuationManager.register(
  {
    deviceType: ["00E"]
  },
  (err, data) => {
    if (err.code != 0) {
      console.error('register failed, cause: ' + JSON.stringify(err));
      return;
    }
    console.info('register finished, ' + JSON.stringify(data));
    token = data;
});

```


## register

```TypeScript
function register(options?: ContinuationExtraParams): Promise<number>
```

Registers the continuation management service and obtains a token. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** on(type:

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.DistributedAbilityManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ContinuationExtraParams | No | Extra parameters used to filter the list of available devices. Thisparameter can be null. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the token generated after the continuation management service isconnected. |

**Example**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let token: number = -1;
continuationManager.register(
  { deviceType: ["00E"] }).then((data) => {
    console.info('register finished, ' + JSON.stringify(data));
    token = data;
  }).catch((err: BusinessError) => {
    console.error('register failed, cause: ' + JSON.stringify(err));
});

```

