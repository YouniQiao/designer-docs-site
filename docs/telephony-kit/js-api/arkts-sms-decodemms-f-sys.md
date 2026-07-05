# decodeMms

## decodeMms

```TypeScript
function decodeMms(mmsFilePathName: string | Array<int>, callback: AsyncCallback<MmsInformation>): void
```

Decode the message content.

**Since:** 8

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mmsFilePathName | string \| Array&lt;int> | Yes | Indicates the path name of the multimedia message file. |
| callback | AsyncCallback&lt;MmsInformation> | Yes | Indicates the callback for getting a {@code MmsInformation}  object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. 3. Parameter verification failed. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**Example**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

let mmsFilePathName: string = "filename";
sms.decodeMms(mmsFilePathName, (err: BusinessError, data: sms.MmsInformation) => {
      console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

const mmsPdu: Array<number> = [0x8c, 0x80, 0x98, 0x31, 0x00, 0x8d, 0x92, 0x89, 0x09, 0x80, 0x07, 0xea, 0x31, 0x30, 0x30, 0x38, 0x36, 0x00, 0x97, 0x07, 0xea, 0x31, 0x30, 0x30,0x31, 0x30, 0x00, 0x84, 0x74, 0x79, 0x70, 0x65, 0x00, 0x00];
sms.decodeMms(mmsPdu, (err: BusinessError, data: sms.MmsInformation) => {
    console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```

## decodeMms

```TypeScript
function decodeMms(mmsFilePathName: string | Array<int>): Promise<MmsInformation>
```

Decode the message content.

**Since:** 8

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mmsFilePathName | string \| Array&lt;int> | Yes | Indicates the path name of the multimedia message file. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;MmsInformation> | Returns a {@code MmsInformation} object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. 3. Parameter verification failed. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**Example**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

let mmsFilePathName: string = "filename";
let promise = sms.decodeMms(mmsFilePathName);
promise.then((data: sms.MmsInformation) => {
    console.info(`decodeMms success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`decodeMms failed, promise: err->${JSON.stringify(err)}`);
});

const mmsPdu: Array<number> = [0x8c, 0x80, 0x98, 0x31, 0x00, 0x8d, 0x92, 0x89, 0x09, 0x80, 0x07, 0xea, 0x31, 0x30, 0x30, 0x38, 0x36, 0x00, 0x97, 0x07, 0xea, 0x31, 0x30, 0x30,0x31, 0x30, 0x00, 0x84, 0x74, 0x79, 0x70, 0x65, 0x00, 0x00];
let promiseArr = sms.decodeMms(mmsPdu);
promiseArr.then((data: sms.MmsInformation) => {
    console.info(`decodeMms success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`decodeMms failed, promise: err->${JSON.stringify(err)}`);
});

```

