# disableCellularData

## disableCellularData

```TypeScript
function disableCellularData(callback: AsyncCallback<void>): void
```

Disable cellular data services.

**Since:** 7

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CellularData

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | The callback of disableCellularData. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Internal error. |

**Example**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

data.disableCellularData((err: BusinessError) => {
    if(err) {
        console.error(`disableCellularData fail. code: ${err.code}, message: ${err.message}`);
    } else {
        console.info(`disableCellularData success`);
    }
});

```

## disableCellularData

```TypeScript
function disableCellularData(): Promise<void>
```

Disable cellular data services.

**Since:** 7

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CellularData

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the disableCellularData. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Internal error. |

**Example**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

data.disableCellularData().then(() => {
    console.info(`disableCellularData success.`);
}).catch((err: BusinessError) => {
    console.error(`disableCellularData fail. code: ${err.code}, message: ${err.message}`);
});

```

