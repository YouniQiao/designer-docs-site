# registerContinuation

## registerContinuation

```TypeScript
function registerContinuation(callback: AsyncCallback<number>): void
```

Registers the continuation management service and obtains a token. This API does not involve any filter parameters and uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 22

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.DistributedAbilityManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number> | Yes | Callback used to return the token generated after the continuation  management service is connected. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16600001 | The system ability works abnormally. |
| 16600003 | The number of token registration times has reached the upper limit. |

**Example**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';

let token: number = -1;
try {
  continuationManager.registerContinuation((err, data) => {
    if (err.code != 0) {
      console.error('registerContinuation failed, cause: ' + JSON.stringify(err));
      return;
    }
    console.info('registerContinuation finished, ' + JSON.stringify(data));
    token = data;
  });
} catch (err) {
  console.error('registerContinuation failed, cause: ' + JSON.stringify(err));
}

```

## registerContinuation

```TypeScript
function registerContinuation(options: ContinuationExtraParams, callback: AsyncCallback<number>): void
```

Registers the continuation management service and obtains a token. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 22

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.DistributedAbilityManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ContinuationExtraParams | Yes | Extra parameters used to filter the list of available devices. |
| callback | AsyncCallback&lt;number> | Yes | Callback used to return the token generated after the continuation  management service is connected. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16600001 | The system ability works abnormally. |
| 16600003 | The number of token registration times has reached the upper limit. |

**Example**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';

let token: number = -1;
try {
  continuationManager.registerContinuation(
    {
      deviceType: ["00E"]
    },
    (err, data) => {
      if (err.code != 0) {
        console.error('registerContinuation failed, cause: ' + JSON.stringify(err));
        return;
      }
      console.info('registerContinuation finished, ' + JSON.stringify(data));
      token = data;
  });
} catch (err) {
  console.error('registerContinuation failed, cause: ' + JSON.stringify(err));
}

```

## registerContinuation

```TypeScript
function registerContinuation(options?: ContinuationExtraParams): Promise<number>
```

Registers the continuation management service and obtains a token. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 22

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.DistributedAbilityManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ContinuationExtraParams | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Promise used to return the token generated after the continuation management service is  connected. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Incorrect parameter types;  2. Parameter verification failed; |
| 16600001 | The system ability works abnormally. |
| 16600003 | The number of token registration times has reached the upper limit. |

**Example**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let token: number = -1;
try {
  continuationManager.registerContinuation(
    {
      deviceType: ["00E"]
    }).then((data) => {
      console.info('registerContinuation finished, ' + JSON.stringify(data));
      token = data;
    }).catch((err: BusinessError) => {
      console.error('registerContinuation failed, cause: ' + JSON.stringify(err));
  });
} catch (err) {
  console.error('registerContinuation failed, cause: ' + JSON.stringify(err));
}

```

