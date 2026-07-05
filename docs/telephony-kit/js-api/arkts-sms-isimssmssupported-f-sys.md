# isImsSmsSupported

## isImsSmsSupported

```TypeScript
function isImsSmsSupported(slotId: int, callback: AsyncCallback<boolean>): void
```

SMS over IMS is supported if IMS is registered and SMS is supported on IMS.

**Since:** 8

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the default SIM card for Ims Sms. The value {@code 0} indicates card slot 1,  and the value {@code 1} indicates card slot 2. |
| callback | AsyncCallback&lt;boolean> | Yes | Indicates the callback of isImsSmsSupported.  Returns {@code true} if SMS over IMS is supported, {@code false} otherwise. |

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

let slotId: number = 0;
sms.isImsSmsSupported(slotId, (err: BusinessError, data: boolean) => {
      console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```

## isImsSmsSupported

```TypeScript
function isImsSmsSupported(slotId: int): Promise<boolean>
```

SMS over IMS is supported if IMS is registered and SMS is supported on IMS.

**Since:** 8

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the default SIM card for Ims Sms. The value {@code 0} indicates card slot 1,  and the value {@code 1} indicates card slot 2. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Returns {@code true} if SMS over IMS is supported, {@code false} otherwise. |

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

let slotId: number = 0;
let promise = sms.isImsSmsSupported(slotId);
promise.then((data: boolean) => {
    console.info(`isImsSmsSupported success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`isImsSmsSupported failed, promise: err->${JSON.stringify(err)}`);
});

```

