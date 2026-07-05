# getCallIdListForConference

## getCallIdListForConference

```TypeScript
function getCallIdListForConference(callId: int, callback: AsyncCallback<Array<string>>): void
```

Get the call Id list of the conference.

**Since:** 7

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callId | int | Yes | Indicates the identifier of the call. |
| callback | AsyncCallback&lt;Array&lt;string>> | Yes | Indicates the callback for getting  the call id list of conference calls. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 801 | Capability not supported. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.getCallIdListForConference(1, (err: BusinessError, data: Array<string>) => {
    if (err) {
        console.error(`getCallIdListForConference fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`getCallIdListForConference success, data->${JSON.stringify(data)}`);
    }
});

```

## getCallIdListForConference

```TypeScript
function getCallIdListForConference(callId: int): Promise<Array<string>>
```

Get the call Id list of the conference.

**Since:** 7

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callId | int | Yes | Indicates the identifier of the call. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | Returns the call id list of conference calls. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 801 | Capability not supported. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.getCallIdListForConference(1).then((data: Array<string>) => {
    console.info(`getCallIdListForConference success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getCallIdListForConference fail, promise: err->${JSON.stringify(err)}`);
});

```

