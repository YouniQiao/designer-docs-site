# getPrimarySlotId

## getPrimarySlotId

```TypeScript
function getPrimarySlotId(callback: AsyncCallback<int>): void
```

Obtains the index number of the card slot where the primary card is located if multiple SIM cards are inserted. The primary card is the SIM card inserted in the card slot that uses data services by default.

**Since:** 7

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;int> | Yes | Indicates the callback for getting the index number of  the primary card slot. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

radio.getPrimarySlotId((err: BusinessError, data: number) => {
    if (err) {
        console.error(`getPrimarySlotId failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`getPrimarySlotId success, callback: data->${JSON.stringify(data)}`);
});

```

## getPrimarySlotId

```TypeScript
function getPrimarySlotId(): Promise<int>
```

Obtains the index number of the card slot where the primary card is located if multiple SIM cards are inserted. The primary card is the SIM card inserted in the card slot that uses data services by default.

**Since:** 7

**System capability:** SystemCapability.Telephony.CoreService

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Returns the index number of the primary card slot. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

radio.getPrimarySlotId().then((data: number) => {
    console.info(`getPrimarySlotId success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getPrimarySlotId failed, promise: err->${JSON.stringify(err)}`);
});

```

