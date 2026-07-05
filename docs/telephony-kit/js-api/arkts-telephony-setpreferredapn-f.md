# setPreferredApn

## Modules to Import

```TypeScript
import { data } from '@ohos.telephony.data';
```

## setPreferredApn

```TypeScript
function setPreferredApn(apnId: number): Promise<boolean>
```

Set preferred APN.

**Since:** 16

**Required permissions:** ohos.permission.MANAGE_APN_SETTING

**System capability:** SystemCapability.Telephony.CellularData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| apnId | number | Yes | The APN ID which is used to be set. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Returns {@code true} if preferred APN set success; returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

let apnId: number = 0; // apnId is a valid value returned by queryApnIds. If an invalid APN ID is passed to setPreferredApn, the default preferred APN configured by the carrier is used.
data.setPreferredApn(apnId).then((result: boolean) => {
    console.info(`setPreferredApn result: ${result}`);
}).catch((err: BusinessError) => {
    console.error(`setPreferredApn failed. code: ${err.code}, message: ${err.message}`);
});

```

