# getCellularDataState

## Modules to Import

```TypeScript
import { data } from '@ohos.telephony.data';
```

## getCellularDataState

```TypeScript
function getCellularDataState(callback: AsyncCallback<DataConnectState>): void
```

Obtain the connection state of the PS domain.

**Since:** 22

**Required permissions:** ohos.permission.GET_NETWORK_INFO

**System capability:** SystemCapability.Telephony.CellularData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;DataConnectState&gt; | Yes | Indicates the callback for getting the connection state,which can be any of the following:&lt;ul&gt;&lt;li&gt;{@code DataConnectState#DATA_STATE_UNKNOWN}&lt;li&gt;{@code DataConnectState#DATA_STATE_DISCONNECTED}&lt;li&gt;{@code DataConnectState#DATA_STATE_CONNECTING}&lt;li&gt;{@code DataConnectState#DATA_STATE_CONNECTED}&lt;li&gt;{@code DataConnectState#DATA_STATE_SUSPENDED}&lt;/ul&gt; |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

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

**Required permissions:** ohos.permission.GET_NETWORK_INFO

**System capability:** SystemCapability.Telephony.CellularData

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DataConnectState&gt; | Returns the connection state,which can be any of the following:&lt;ul&gt;&lt;li&gt;{@code DataConnectState#DATA_STATE_UNKNOWN}&lt;li&gt;{@code DataConnectState#DATA_STATE_DISCONNECTED}&lt;li&gt;{@code DataConnectState#DATA_STATE_CONNECTING}&lt;li&gt;{@code DataConnectState#DATA_STATE_CONNECTED}&lt;li&gt;{@code DataConnectState#DATA_STATE_SUSPENDED}&lt;/ul&gt; |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

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

