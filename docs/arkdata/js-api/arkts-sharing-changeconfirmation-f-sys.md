# changeConfirmation

## changeConfirmation

```TypeScript
function changeConfirmation(sharingResource: string, state: State, callback: AsyncCallback<Result<void>>): void
```

根据共享资源标识更改共享邀请的状态，使用callback异步回调。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sharingResource | string | Yes | 端云共享数据的资源标识。 |
| state | State | Yes | 更改邀请的状态。 |
| callback | AsyncCallback&lt;Result&lt;void>> | Yes | 回调函数。返回更改邀请状态的结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

cloudData.sharing.changeConfirmation('sharing_resource_test', cloudData.sharing.State.STATE_REJECTED, ((err: BusinessError, result) => {
  if (err) {
    console.error(`change confirmation failed, code is ${err.code},message is ${err.message}`);
    return;
  }
  console.info(`change confirmation succeeded, result: ${result}`);
}))


```

## changeConfirmation

```TypeScript
function changeConfirmation(sharingResource: string, state: State): Promise<Result<void>>
```

根据共享资源标识更改共享邀请的状态，使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sharingResource | string | Yes | 端云共享数据的资源标识。 |
| state | State | Yes | 更改邀请的状态。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Result&lt;void>> | Promise对象，返回更改共享邀请状态的结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

cloudData.sharing.changeConfirmation('sharing_resource_test', cloudData.sharing.State.STATE_REJECTED).then((result) => {
  console.info(`change confirmation succeeded, result: ${result}`);
}).catch((err: BusinessError) => {
  console.error(`change confirmation failed, code is ${err.code},message is ${err.message}`);
})


```

