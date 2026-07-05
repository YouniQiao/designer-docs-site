# isCellularDataEnabledSync

## isCellularDataEnabledSync

```TypeScript
function isCellularDataEnabledSync(): boolean
```

Check whether cellular data services are enabled.

**Since:** 12

**Required permissions:** 

 ohos.permission.GET_NETWORK_INFO

**System capability:** SystemCapability.Telephony.CellularData

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if cellular data services are enabled.  Returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Internal error. |

**Example**

```TypeScript
import { data } from '@kit.TelephonyKit';

try {
    let isEnabled: boolean = data.isCellularDataEnabledSync();
    console.info(`isCellularDataEnabledSync success : ${isEnabled}`);
} catch (err) {
    console.error(`isCellularDataEnabledSync fail. code: ${err.code}, message: ${err.message}`);  
}

```

