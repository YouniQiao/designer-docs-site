# getSubCallIdList

## getSubCallIdList

```TypeScript
function getSubCallIdList(callId: int, callback: AsyncCallback<Array<string>>): void
```

Get the list of sub-call Ids.

**Since:** 7

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callId | int | Yes | Indicates the identifier of the call. |
| callback | AsyncCallback&lt;Array&lt;string>> | Yes | Indicates the callback for getting the list of sub call ids. |

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

call.getSubCallIdList(1, (err: BusinessError, data: Array<string>) => {
    if (err) {
        console.error(`getSubCallIdList fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`getSubCallIdList success, data->${JSON.stringify(data)}`);
    }
});

```

## getSubCallIdList

```TypeScript
function getSubCallIdList(callId: int): Promise<Array<string>>
```

Get the list of sub-call Ids.

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
| Promise&lt;Array&lt;string>> | Returns the list of sub call ids. |

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

call.getSubCallIdList(1).then((data: Array<string>) => {
    console.info(`getSubCallIdList success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getSubCallIdList fail, promise: err->${JSON.stringify(err)}`);
});

```

