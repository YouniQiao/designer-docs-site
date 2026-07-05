# getNrOptionMode

## getNrOptionMode

```TypeScript
function getNrOptionMode(slotId: int, callback: AsyncCallback<NrOptionMode>): void
```

Get the option mode of NR.

**Since:** 8

**Deprecated since:** 10

**Substitute:** telephony.radio#getNROptionMode

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number, ranging from 0 to the maximum card slot  index number supported by the device. |
| callback | AsyncCallback&lt;NrOptionMode> | Yes | Indicates the callback for getting the selection mode of NR. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
radio.getNrOptionMode(slotId, (err: BusinessError, data: radio.NrOptionMode) => {
    if (err) {
        console.error(`getNrOptionModecallback failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`getNrOptionModecallback success, callback: data->${JSON.stringify(data)}`);
});

```

## getNrOptionMode

```TypeScript
function getNrOptionMode(slotId?: int): Promise<NrOptionMode>
```

Get the option mode of NR.

**Since:** 8

**Deprecated since:** 10

**Substitute:** telephony.radio#getNROptionMode

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | No | Indicates the card slot index number, ranging from 0 to the maximum card slot  index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NrOptionMode> | Returns the selection mode of NR. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
radio.getNrOptionMode(slotId).then((data: radio.NrOptionMode) => {
    console.info(`getNrOptionMode success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getNrOptionMode failed, promise: err->${JSON.stringify(err)}`);
});

```

## getNrOptionMode

```TypeScript
function getNrOptionMode(callback: AsyncCallback<NrOptionMode>): void
```

Get the option mode of NR.

**Since:** 8

**Deprecated since:** 10

**Substitute:** telephony.radio#getNROptionMode

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;NrOptionMode> | Yes | Indicates the callback for getting the selection mode of NR. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

radio.getNrOptionMode((err: BusinessError, data: radio.NrOptionMode) => {
    if (err) {
        console.error(`getNrOptionMode failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`getNrOptionMode success, callback: data->${JSON.stringify(data)}`);
});

```

