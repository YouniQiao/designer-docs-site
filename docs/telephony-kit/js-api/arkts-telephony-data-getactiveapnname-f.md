# getActiveApnName

## Modules to Import

```TypeScript
import { data } from '@kit.TelephonyKit';
```

## getActiveApnName

```TypeScript
function getActiveApnName(): Promise<string>
```

Get Active APN's Name.

**Since:** 20

**Required permissions:** ohos.permission.GET_NETWORK_INFO

<!--Device-data-function getActiveApnName(): Promise<string>--><!--Device-data-function getActiveApnName(): Promise<string>-End-->

**System capability:** SystemCapability.Telephony.CellularData

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | Returns the name of the active APN or null if cellular network is not active. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

data.getActiveApnName().then((apn: string) => {
    console.info(`getActiveApnName success, apn: ${apn}`);
}).catch((err: BusinessError) => {
    console.error(`getActiveApnName failed. code: ${err.code}, message: ${err.message}`);
});

```

