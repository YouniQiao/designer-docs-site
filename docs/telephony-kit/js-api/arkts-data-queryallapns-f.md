# queryAllApns

## queryAllApns

```TypeScript
function queryAllApns(): Promise<Array<ApnInfo>>
```

Query all APN info.

**Since:** 16

**Required permissions:** 

 ohos.permission.MANAGE_APN_SETTING

**System capability:** SystemCapability.Telephony.CellularData

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ApnInfo>> | Returns all APN info of default cellular data card. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |

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

