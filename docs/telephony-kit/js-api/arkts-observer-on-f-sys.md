# on

## on('cellInfoChange')

```TypeScript
function on(type: 'cellInfoChange', callback: Callback<Array<CellInformation>>): void
```

Callback when the cell information corresponding to the default sim card is updated.

**Since:** 8

**Required permissions:** 

 ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**System capability:** SystemCapability.Telephony.StateRegistry

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cellInfoChange' | Yes | Event type. Indicates the cellInfoChange event to be subscribed to. |
| callback | Callback&lt;Array&lt;CellInformation>> | Yes | Indicates the callback for getting  an array of instances of the classes derived from {@link CellInformation}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**Example**

```TypeScript
import { radio } from '@kit.TelephonyKit';

observer.on('cellInfoChange', (data: Array<radio.CellInformation>) => {
    console.info("on cellInfoChange, data:" + JSON.stringify(data));
});

```

## on('cellInfoChange')

```TypeScript
function on(type: 'cellInfoChange', options: ObserverOptions, callback: Callback<Array<CellInformation>>): void
```

Callback when the cell information corresponding to a monitored {@code slotId} is updated.

**Since:** 11

**Required permissions:** 

 ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**System capability:** SystemCapability.Telephony.StateRegistry

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'cellInfoChange' | Yes | Event type. Indicates the cellInfoChange event to be subscribed to. |
| options | ObserverOptions | Yes | Indicates the options for observer. |
| callback | Callback&lt;Array&lt;CellInformation>> | Yes | Indicates the callback for getting  an array of instances of the classes derived from {@link CellInformation}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**Example**

```TypeScript
import { radio } from '@kit.TelephonyKit';

let options: observer.ObserverOptions = {
    slotId: 0
}
observer.on('cellInfoChange', options, (data: Array<radio.CellInformation>) => {
    console.info("on cellInfoChange, data:" + JSON.stringify(data));
});

```

