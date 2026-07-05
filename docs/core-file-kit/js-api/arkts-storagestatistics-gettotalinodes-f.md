# getTotalInodes

## getTotalInodes

```TypeScript
function getTotalInodes(): Promise<long>
```

获取文件系统的inode资源总量，仅支持查询系统数据分区。使用Promise异步回调。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.SpatialStatistics

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | Promise对象，返回文件系统inode资源总量。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13600001 | IPC error. |
| 13600016 | Failed to query the inode information of the data partition. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

storageStatistics.getTotalInodes().then((totalInodes: number) => {
  console.info("getTotalInodes successfully: " + totalInodes);
}).catch((err: BusinessError) => {
  console.error(`getTotalInodes failed. Code: ${err.code}, Message: ${err.message}`);
});

```

