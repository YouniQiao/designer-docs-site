# isCellularDataEnabled

## Modules to Import

```TypeScript
import { data } from '@kit.TelephonyKit';
```

<a id="iscellulardataenabled"></a>
## isCellularDataEnabled

```TypeScript
function isCellularDataEnabled(callback: AsyncCallback<boolean>): void
```

Check whether cellular data services are enabled.

**Since:** 7

**Required permissions:** ohos.permission.GET_NETWORK_INFO

<!--Device-data-function isCellularDataEnabled(callback: AsyncCallback<boolean>): void--><!--Device-data-function isCellularDataEnabled(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Telephony.CellularData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;boolean&gt; | Yes | Indicates the callback for checking whether cellular data services are enabled. Returns {@code true} if cellular data services are enabled; returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [8300001](../errorcode-telephony.md#8300001-input-parameter-value-out-of-range) | Invalid parameter value. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Internal error. |

**Example**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

data.isCellularDataEnabled((err: BusinessError, contextData: boolean) => {
    if(err) {
        console.error(`isCellularDataEnabled fail. code: ${err.code}, message: ${err.message}, contextData: ${contextData}`);
    } else {
        console.info(`isCellularDataEnabled success`);
    }
});

```


<a id="iscellulardataenabled-1"></a>
## isCellularDataEnabled

```TypeScript
function isCellularDataEnabled(): Promise<boolean>
```

Check whether cellular data services are enabled.

**Since:** 7

**Required permissions:** ohos.permission.GET_NETWORK_INFO

<!--Device-data-function isCellularDataEnabled(): Promise<boolean>--><!--Device-data-function isCellularDataEnabled(): Promise<boolean>-End-->

**System capability:** SystemCapability.Telephony.CellularData

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Returns {@code true} if cellular data services are enabled.Returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [8300002](../errorcode-telephony.md#8300002-service-connection-error) | Service connection failed. |
| [8300003](../errorcode-telephony.md#8300003-system-internal-error) | System internal error. |
| [8300999](../errorcode-telephony.md#8300999-internal-error) | Internal error. |

**Example**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

data.isCellularDataEnabled().then((contextData: boolean) => {
    console.info(`isCellularDataEnabled success, contextData: ${contextData}`);
}).catch((err: BusinessError) => {
    console.error(`isCellularDataEnabled fail. code: ${err.code}, message: ${err.message}`);
});

```

