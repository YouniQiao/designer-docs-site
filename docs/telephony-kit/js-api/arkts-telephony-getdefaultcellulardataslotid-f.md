# getDefaultCellularDataSlotId

## Modules to Import

```TypeScript
import { data } from '@ohos.telephony.data';
```

## getDefaultCellularDataSlotId

```TypeScript
function getDefaultCellularDataSlotId(callback: AsyncCallback<number>): void
```

Get the default cellular data card.

**Since:** 7

**System capability:** SystemCapability.Telephony.CellularData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number&gt; | Yes | Indicates the default cellular data slot id. |

**Example**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

data.getDefaultCellularDataSlotId((err: BusinessError, contextData: number) => {
    if(err) {
        console.error(`getDefaultCellularDataSlotId fail. code: ${err.code}, message: ${err.message}, contextData: ${contextData}`);
    } else {
        console.info(`getDefaultCellularDataSlotId success`);
    }
});

```


## getDefaultCellularDataSlotId

```TypeScript
function getDefaultCellularDataSlotId(): Promise<number>
```

Get the default cellular data card.

**Since:** 7

**System capability:** SystemCapability.Telephony.CellularData

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Returns the default cellular data slot id. |

**Example**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

data.getDefaultCellularDataSlotId().then((contextData: number) => {
    console.info(`getDefaultCellularDataSlotId success, contextData: ${contextData}`);
}).catch((err: BusinessError) => {
    console.error(`getDefaultCellularDataSlotId fail. code: ${err.code}, message: ${err.message}`);
});

```

