# querySyncResult

## querySyncResult

```TypeScript
function querySyncResult(query: AssetMap): Promise<SyncResult>
```

执行同步操作后，查询同步执行结果。使用Promise异步回调。

**Since:** 20

**System capability:** SystemCapability.Security.Asset

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| query | AssetMap | Yes | 同步结果查询条件，如关键资产所属群组、业务自定义属性信息是否加密。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;SyncResult> | Promise对象，返回同步执行结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 24000001 | The ASSET service is unavailable. |
| 24000006 | Insufficient memory. |
| 24000010 | IPC failed. |
| 24000011 | Calling the Bundle Manager service failed. |
| 24000012 | Calling the OS Account service failed. |
| 24000013 | Calling the Access Token service failed. |
| 24000014 | The file operation failed. |
| 24000018 | Parameter verification failed. |

**Example**

```TypeScript
import { asset } from '@kit.AssetStoreKit';

let query: asset.AssetMap = new Map();
asset.querySyncResult(query).then((res: asset.SyncResult) => {
  console.info(`Succeeded in querying sync result: ${JSON.stringify(res)}`);
});

```

