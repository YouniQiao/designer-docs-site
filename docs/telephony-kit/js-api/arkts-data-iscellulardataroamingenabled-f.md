# isCellularDataRoamingEnabled

## isCellularDataRoamingEnabled

```TypeScript
function isCellularDataRoamingEnabled(slotId: int, callback: AsyncCallback<boolean>): void
```

Check whether roaming is enabled for cellular data services.

**Since:** 7

**Required permissions:** 

 ohos.permission.GET_NETWORK_INFO

**System capability:** SystemCapability.Telephony.CellularData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the ID of a card slot.  The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2. |
| callback | AsyncCallback&lt;boolean> | Yes | Indicates the callback for checking whether roaming is enabled  for cellular data services. Returns {@code true} if roaming is enabled for cellular data services;  returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Internal error. |

**Example**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

data.isCellularDataRoamingEnabled(0, (err: BusinessError, contextData: boolean) => {
    if(err) {
        console.error(`isCellularDataRoamingEnabled fail. code: ${err.code}, message: ${err.message}, contextData: ${contextData}`);
    } else {
        console.info(`isCellularDataRoamingEnabled success`);
    }
});

```

## isCellularDataRoamingEnabled

```TypeScript
function isCellularDataRoamingEnabled(slotId: int): Promise<boolean>
```

Check whether roaming is enabled for cellular data services.

**Since:** 7

**Required permissions:** 

 ohos.permission.GET_NETWORK_INFO

**System capability:** SystemCapability.Telephony.CellularData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the ID of a card slot.  The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Returns {@code true} if roaming is enabled for cellular data services.  Returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Internal error. |

**Example**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

data.isCellularDataRoamingEnabled(0).then((contextData: boolean) => {
    console.info(`isCellularDataRoamingEnabled success, contextData: ${contextData}`);
}).catch((err: BusinessError) => {
    console.error(`isCellularDataRoamingEnabled fail. code: ${err.code}, message: ${err.message}`);
});

```

