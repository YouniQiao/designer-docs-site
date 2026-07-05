# getImsShortMessageFormat

## getImsShortMessageFormat

```TypeScript
function getImsShortMessageFormat(callback: AsyncCallback<string>): void
```

Gets SMS format supported on IMS. SMS over IMS format is either 3GPP or 3GPP2.

**Since:** 8

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string> | Yes | Indicates the callback for getting format, 3gpp, 3gpp2 or unknown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.  Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**Example**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

sms.getImsShortMessageFormat((err: BusinessError, data: string) => {
      console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```

## getImsShortMessageFormat

```TypeScript
function getImsShortMessageFormat(): Promise<string>
```

Gets SMS format supported on IMS. SMS over IMS format is either 3GPP or 3GPP2.

**Since:** 8

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Returns format, 3gpp, 3gpp2 or unknown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Non-system applications use system APIs. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**Example**

```TypeScript
import { sms } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

sms.getImsShortMessageFormat().then((data: string) => {
    console.info(`getImsShortMessageFormat success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getImsShortMessageFormat failed, promise: err->${JSON.stringify(err)}`);
});

```

