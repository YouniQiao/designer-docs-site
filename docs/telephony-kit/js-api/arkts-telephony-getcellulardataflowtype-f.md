# getCellularDataFlowType

## Modules to Import

```TypeScript
import { data } from '@ohos.telephony.data';
```

## getCellularDataFlowType

```TypeScript
function getCellularDataFlowType(callback: AsyncCallback<DataFlowType>): void
```

Indicates that there is no uplink or downlink data. <p>It is a return value of service state query of cellular data services.

**Since:** 22

**Required permissions:** ohos.permission.GET_NETWORK_INFO

**System capability:** SystemCapability.Telephony.CellularData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;DataFlowType&gt; | Yes | Indicates the data flow type. |

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

Indicates that there is no uplink or downlink data. <p>It is a return value of service state query of cellular data services.

**Since:** 22

**Required permissions:** ohos.permission.GET_NETWORK_INFO

**System capability:** SystemCapability.Telephony.CellularData

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DataFlowType&gt; | Returns the data flow type. |

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

