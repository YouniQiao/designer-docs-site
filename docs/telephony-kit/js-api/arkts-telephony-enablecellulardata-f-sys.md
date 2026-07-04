# enableCellularData (System API)

## Modules to Import

```TypeScript
import { data } from '@ohos.telephony.data';
```

## enableCellularData

```TypeScript
function enableCellularData(callback: AsyncCallback<void>): void
```

Enable cellular data services.

**Since:** 7

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CellularData

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | The callback of enableCellularData. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Internal error. |

**Example**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

data.enableCellularData((err: BusinessError) => {
    if(err) {
        console.error(`enableCellularData fail. code: ${err.code}, message: ${err.message}`);
    } else {
        console.info(`enableCellularData success`);
    }
});

```


## enableCellularData

```TypeScript
function enableCellularData(): Promise<void>
```

Enable cellular data services.

**Since:** 7

**Required permissions:** ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CellularData

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the enableCellularData. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Internal error. |

**Example**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

data.enableCellularData().then(() => {
    console.info(`enableCellularData success.`);
}).catch((err: BusinessError) => {
    console.error(`enableCellularData fail. code: ${err.code}, message: ${err.message}`);
});

```

