# getFreeInodes

## getFreeInodes

```TypeScript
function getFreeInodes(): Promise<long>
```

获取文件系统的inode资源剩余量，仅支持查询系统数据分区。使用Promise异步回调。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.SpatialStatistics

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | Promise对象，返回文件系统inode资源剩余量。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13600001 | IPC error. |
| 13600016 | Failed to query the inode information of the data partition. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

storageStatistics.getFreeInodes().then((freeInodes: number) => {
  console.info("getFreeInodes successfully: " + freeInodes);
}).catch((err: BusinessError) => {
  console.error(`getFreeInodes failed. Code: ${err.code}, Message: ${err.message}`);
});

```

