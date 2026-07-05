# queryParticipants (System API)

## Modules to Import

```TypeScript
import { cloudData } from '@ohos.data.cloudData';
```

## queryParticipants

```TypeScript
function queryParticipants(sharingResource: string, callback: AsyncCallback<Result<Array<Participant>>>): void
```

Queries the participants of the specified shared data. This API uses an asynchronous callback to return the result.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sharingResource | string | Yes | Shared resource ID. |
| callback | AsyncCallback&lt;Result&lt;Array&lt;Participant&gt;&gt;&gt; | Yes | Callback used to return the participants obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed,application which is not a system application uses system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

cloudData.sharing.queryParticipants('sharing_resource_test', ((err: BusinessError, result) => {
  if (err) {
    console.error(`query participants failed, code is ${err.code},message is ${err.message}`);
    return;
  }
  console.info(`query participants succeeded, result: ${result}`);
}))


```


## queryParticipants

```TypeScript
function queryParticipants(sharingResource: string): Promise<Result<Array<Participant>>>
```

Queries the participants of the specified shared data. This API uses a promise to return the result.

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sharingResource | string | Yes | Shared resource ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Result&lt;Array&lt;Participant&gt;&gt;&gt; | Promise used to return the participants obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed,application which is not a system application uses system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

cloudData.sharing.queryParticipants('sharing_resource_test').then((result) => {
  console.info(`query participants succeeded, result: ${result}`);
}).catch((err: BusinessError) => {
  console.error(`query participants failed, code is ${err.code},message is ${err.message}`);
})


```

