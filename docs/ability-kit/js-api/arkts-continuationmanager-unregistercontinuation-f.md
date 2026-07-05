# unregisterContinuation

## unregisterContinuation

```TypeScript
function unregisterContinuation(token: number, callback: AsyncCallback<void>): void
```

Unregisters the continuation management service. This API uses an asynchronous callback to return the result.

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
| token | number | Yes | Token obtained after the registration of the continuation management service. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the unregistration is successful,  err is undefined; otherwise, err is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16600001 | The system ability works abnormally. |
| 16600002 | The specified token or callback is not registered. |

**Example**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';

let token: number = 1;
try {
  continuationManager.unregisterContinuation(token, (err) => {
    if (err.code != 0) {
      console.error('unregisterContinuation failed, cause: ' + JSON.stringify(err));
      return;
    }
    console.info('unregisterContinuation finished. ');
  });
} catch (err) {
  console.error('unregisterContinuation failed, cause: ' + JSON.stringify(err));
}

```

## unregisterContinuation

```TypeScript
function unregisterContinuation(token: number): Promise<void>
```

Unregisters the continuation management service. This API uses a promise to return the result.

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
| token | number | Yes | Token obtained after the registration of the continuation management service. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16600001 | The system ability works abnormally. |
| 16600002 | The specified token or callback is not registered. |

**Example**

```TypeScript
import { continuationManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let token: number = -1;
try {
  continuationManager.unregisterContinuation(token).then(() => {
      console.info('unregisterContinuation finished. ');
    }).catch((err: BusinessError) => {
      console.error('unregisterContinuation failed, cause: ' + JSON.stringify(err));
  });
} catch (err) {
  console.error('unregisterContinuation failed, cause: ' + JSON.stringify(err));
}

```

