# getCellularDataState

## getCellularDataState

```TypeScript
function getCellularDataState(callback: AsyncCallback<DataConnectState>): void
```

Obtain the connection state of the PS domain.

**Since:** 22

**Required permissions:** 

 ohos.permission.GET_NETWORK_INFO

**System capability:** SystemCapability.Telephony.CellularData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;DataConnectState> | Yes | Indicates the callback for getting the connection state,  which can be any of the following:   {@code DataConnectState#DATA_STATE_UNKNOWN}  {@code DataConnectState#DATA_STATE_DISCONNECTED}  {@code DataConnectState#DATA_STATE_CONNECTING}  {@code DataConnectState#DATA_STATE_CONNECTED}  {@code DataConnectState#DATA_STATE_SUSPENDED} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |

**Example**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

data.getCellularDataState((err: BusinessError, contextData: data.DataConnectState) => {
    if(err) {
        console.error(`getCellularDataState fail. code: ${err.code}, message: ${err.message}, contextData: ${contextData}`);
    } else {
        console.info(`getCellularDataState success`);
    }
});

```

## getCellularDataState

```TypeScript
function getCellularDataState(): Promise<DataConnectState>
```

Obtain the connection state of the PS domain.

**Since:** 22

**Required permissions:** 

 ohos.permission.GET_NETWORK_INFO

**System capability:** SystemCapability.Telephony.CellularData

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DataConnectState> | Returns the connection state,  which can be any of the following:   {@code DataConnectState#DATA_STATE_UNKNOWN}  {@code DataConnectState#DATA_STATE_DISCONNECTED}  {@code DataConnectState#DATA_STATE_CONNECTING}  {@code DataConnectState#DATA_STATE_CONNECTED}  {@code DataConnectState#DATA_STATE_SUSPENDED} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |

**Example**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

data.getCellularDataState().then((contextData: data.DataConnectState) => {
    console.info(`getCellularDataState success, contextData: ${contextData}`);
}).catch((err: BusinessError) => {
    console.error(`getCellularDataState fail. code: ${err.code}, message: ${err.message}`);
});

```

