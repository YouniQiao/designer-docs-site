# confirmInvitation (System API)

## Modules to Import

```TypeScript
import { cloudData } from '@kit.ArkData';
```

<a id="confirminvitation"></a>
## confirmInvitation

```TypeScript
function confirmInvitation(invitationCode: string, state: State, callback: AsyncCallback<Result<string>>): void
```

Confirms the invitation based on the sharing invitation code and obtains the shared resource ID.This API uses an asynchronous callback to return the result.

**Since:** 11

<!--Device-sharing-function confirmInvitation(invitationCode: string, state: State, callback: AsyncCallback<Result<string>>): void--><!--Device-sharing-function confirmInvitation(invitationCode: string, state: State, callback: AsyncCallback<Result<string>>): void-End-->

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| invitationCode | string | Yes | Invitation code of the share. |
| state | [State](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-state-e.md) | Yes | Confirmation state. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Result&lt;string&gt;&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed,application which is not a system application uses system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let shareResource: string;
cloudData.sharing.confirmInvitation('sharing_invitation_code_test', cloudData.sharing.State.STATE_ACCEPTED, ((err: BusinessError, result) => {
  if (err) {
    console.error(`confirm invitation failed, code is ${err.code},message is ${err.message}`);
    return;
  }
  console.info(`confirm invitation succeeded, result: ${result}`);
  shareResource = result.value;
}))

```


<a id="confirminvitation-1"></a>
## confirmInvitation

```TypeScript
function confirmInvitation(invitationCode: string, state: State): Promise<Result<string>>
```

Confirms the invitation based on the sharing invitation code and obtains the shared resource ID.This API uses a promise to return the result.

**Since:** 11

<!--Device-sharing-function confirmInvitation(invitationCode: string, state: State): Promise<Result<string>>--><!--Device-sharing-function confirmInvitation(invitationCode: string, state: State): Promise<Result<string>>-End-->

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| invitationCode | string | Yes | Invitation code of the share. |
| state | [State](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-state-e.md) | Yes | Confirmation state. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Result&lt;string&gt;&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed,application which is not a system application uses system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let shareResource: string | undefined;
cloudData.sharing.confirmInvitation('sharing_invitation_code_test', cloudData.sharing.State.STATE_ACCEPTED).then((result: cloudData.sharing.Result<string>) => {
  console.info(`confirm invitation succeeded, result: ${result}`);
  shareResource = result.value;
}).catch((err: BusinessError) => {
  console.error(`confirm invitation failed, code is ${err.code},message is ${err.message}`);
})

```

