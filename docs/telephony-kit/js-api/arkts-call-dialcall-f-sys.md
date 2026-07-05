# dialCall

## dialCall

```TypeScript
function dialCall(phoneNumber: string, options: DialCallOptions, callback: AsyncCallback<void>): void
```

Makes a call.

**Since:** 9

**Required permissions:** 

 ohos.permission.PLACE_CALL

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| phoneNumber | string | Yes | Indicates the called number. |
| options | DialCallOptions | Yes | Indicates additional information carried in the call. |
| callback | AsyncCallback&lt;void> | Yes | The callback of dialCall. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300005 | Airplane mode is on. |
| 8300006 | Network not in service. |
| 8300999 | Unknown error code. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let dialCallOptions: call.DialCallOptions = {
    accountId: 0,
    videoState: 0,
    dialScene: 0,
    dialType: 0
}
call.dialCall("138xxxxxxxx", dialCallOptions, (err: BusinessError) => {
    if (err) {
        console.error(`dialCall fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`dialCall success.`);
    }
});

```

## dialCall

```TypeScript
function dialCall(phoneNumber: string, options?: DialCallOptions): Promise<void>
```

Makes a call.

**Since:** 9

**Required permissions:** 

 ohos.permission.PLACE_CALL

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| phoneNumber | string | Yes | Indicates the called number. |
| options | DialCallOptions | No | Indicates additional information carried in the call. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the dialCall. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300005 | Airplane mode is on. |
| 8300006 | Network not in service. |
| 8300999 | Unknown error code. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let dialCallOptions: call.DialCallOptions = {
    accountId: 0,
    videoState: 0,
    dialScene: 0,
    dialType: 0
}
call.dialCall("138xxxxxxxx", dialCallOptions).then(() => {
    console.info(`dialCall success.`);
}).catch((err: BusinessError) => {
    console.error(`dialCall fail, promise: err->${JSON.stringify(err)}`);
});

```

## dialCall

```TypeScript
function dialCall(phoneNumber: string, callback: AsyncCallback<void>): void
```

Makes a call.

**Since:** 9

**Required permissions:** 

 ohos.permission.PLACE_CALL

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| phoneNumber | string | Yes | Indicates the called number. |
| callback | AsyncCallback&lt;void> | Yes | The callback of dialCall. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300005 | Airplane mode is on. |
| 8300006 | Network not in service. |
| 8300999 | Unknown error code. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.dialCall("138xxxxxxxx", (err: BusinessError) => {
    if (err) {
        console.error(`dialCall fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`dialCall success.`);
    }
});

```

