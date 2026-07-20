# getCellularDataFlowType

## Modules to Import

```TypeScript
import { data } from '@kit.TelephonyKit';
```

## getCellularDataFlowType

```TypeScript
function getCellularDataFlowType(callback: AsyncCallback<DataFlowType>): void
```

Indicates that there is no uplink or downlink data.

<p>It is a return value of service state query of cellular data services.

**Since:** 22

**Required permissions:** ohos.permission.GET_NETWORK_INFO

<!--Device-data-function getCellularDataFlowType(callback: AsyncCallback<DataFlowType>): void--><!--Device-data-function getCellularDataFlowType(callback: AsyncCallback<DataFlowType>): void-End-->

**System capability:** SystemCapability.Telephony.CellularData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<DataFlowType> | Yes | Indicates the data flow type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

data.getCellularDataFlowType((err: BusinessError, contextData: data.DataFlowType) => {
    if(err) {
        console.error(`getCellularDataFlowType fail. code: ${err.code}, message: ${err.message}, contextData: ${contextData}`);
    } else {
        console.info(`getCellularDataFlowType success`);
    }
});

```


## getCellularDataFlowType

```TypeScript
function getCellularDataFlowType(): Promise<DataFlowType>
```

Indicates that there is no uplink or downlink data.

<p>It is a return value of service state query of cellular data services.

**Since:** 22

**Required permissions:** ohos.permission.GET_NETWORK_INFO

<!--Device-data-function getCellularDataFlowType(): Promise<DataFlowType>--><!--Device-data-function getCellularDataFlowType(): Promise<DataFlowType>-End-->

**System capability:** SystemCapability.Telephony.CellularData

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<DataFlowType> | Returns the data flow type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

data.getCellularDataFlowType().then((contextData: data.DataFlowType) => {
    console.info(`getCellularDataFlowType success, contextData: ${contextData}`);
}).catch((err: BusinessError) => {
    console.error(`getCellularDataFlowType fail. code: ${err.code}, message: ${err.message}`);
});

```

