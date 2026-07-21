# queryAllApns

## Modules to Import

```TypeScript
import { data } from '@kit.TelephonyKit';
```

<a id="queryallapns"></a>
## queryAllApns

```TypeScript
function queryAllApns(): Promise<Array<ApnInfo>>
```

Query all APN info.

**Since:** 16

**Required permissions:** ohos.permission.MANAGE_APN_SETTING

<!--Device-data-function queryAllApns(): Promise<Array<ApnInfo>>--><!--Device-data-function queryAllApns(): Promise<Array<ApnInfo>>-End-->

**System capability:** SystemCapability.Telephony.CellularData

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ApnInfo&gt;&gt; | Returns all APN info of default cellular data card. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

data.queryAllApns().then((apnInfos: Array<data.ApnInfo>) => {
    console.info(`queryAllApns success, promise: apnInfos->${JSON.stringify(apnInfos)}`);
}).catch((err: BusinessError) => {
    console.error(`queryAllApns failed. code: ${err.code}, message: ${err.message}`);
});

```

