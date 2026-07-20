# getDefaultCellularDataSlotId

## Modules to Import

```TypeScript
import { data } from '@kit.TelephonyKit';
```

## getDefaultCellularDataSlotId

```TypeScript
function getDefaultCellularDataSlotId(callback: AsyncCallback<number>): void
```

Get the default cellular data card.

**Since:** 7

<!--Device-data-function getDefaultCellularDataSlotId(callback: AsyncCallback<int>): void--><!--Device-data-function getDefaultCellularDataSlotId(callback: AsyncCallback<int>): void-End-->

**System capability:** SystemCapability.Telephony.CellularData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<number> | Yes | Indicates the default cellular data slot id. |

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

<!--Device-data-function getDefaultCellularDataSlotId(): Promise<int>--><!--Device-data-function getDefaultCellularDataSlotId(): Promise<int>-End-->

**System capability:** SystemCapability.Telephony.CellularData

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number> | Returns the default cellular data slot id. |

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

