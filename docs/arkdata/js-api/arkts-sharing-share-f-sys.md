# share

## share

```TypeScript
function share(
      sharingResource: string,
      participants: Array<Participant>,
      callback: AsyncCallback<Result<Array<Result<Participant>>>>
    ): void
```

根据指定的共享资源标识和共享参与者发起共享邀请，使用callback异步回调。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sharingResource | string | Yes | 端云共享数据的资源标识。 |
| participants | Array&lt;Participant> | Yes | 端云共享的参与者。 |
| callback | AsyncCallback&lt;Result&lt;Array&lt;Result&lt;Participant>>>> | Yes | 回调函数。返回端云共享的结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let participants = new Array<cloudData.sharing.Participant>();
participants.push({
  identity: '000000000',
  role: cloudData.sharing.Role.ROLE_INVITER,
  state: cloudData.sharing.State.STATE_UNKNOWN,
  privilege: {
    writable: true,
    readable: true,
    creatable: false,
    deletable: false,
    shareable: false
  },
  attachInfo: ''
})
cloudData.sharing.share('sharing_resource_test', participants, ((err: BusinessError, result) => {
  if (err) {
    console.error(`share failed, code is ${err.code},message is ${err.message}`);
    return;
  }
  console.info(`share succeeded, result: ${result}`);
}))


```

## share

```TypeScript
function share(
      sharingResource: string,
      participants: Array<Participant>
    ): Promise<Result<Array<Result<Participant>>>>
```

根据指定的共享资源标识和共享参与者发起共享邀请，使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sharingResource | string | Yes | 端云共享数据的资源标识。 |
| participants | Array&lt;Participant> | Yes | 端云共享的参与者。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Result&lt;Array&lt;Result&lt;Participant>>>> | Promise对象，返回端云共享的结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed,  application which is not a system application uses system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let participants = new Array<cloudData.sharing.Participant>();
participants.push({
  identity: '000000000',
  role: cloudData.sharing.Role.ROLE_INVITER,
  state: cloudData.sharing.State.STATE_UNKNOWN,
  privilege: {
    writable: true,
    readable: true,
    creatable: false,
    deletable: false,
    shareable: false
  },
  attachInfo: ''
})
cloudData.sharing.share('sharing_resource_test', participants).then((result) => {
  console.info(`share success, result: ${result}`);
}).catch((err: BusinessError) => {
  console.error(`share failed, code is ${err.code},message is ${err.message}`);
})


```

