# getTotalSize

## getTotalSize

```TypeScript
function getTotalSize(): Promise<long>
```

获取内置存储的总空间大小（单位为Byte），以Promise方式返回。

**Since:** 15

**System capability:** SystemCapability.FileManagement.StorageService.SpatialStatistics

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | Promise对象，返回内置存储的总空间大小（单位为Byte）。 (Unit: Byte) |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13600001 | IPC error. |
| 13900042 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
storageStatistics.getTotalSize().then((number: number) => {
  console.info("getTotalSize successfully:" + JSON.stringify(number));
}).catch((err: BusinessError) => {
  console.error("getTotalSize failed with error:"+ JSON.stringify(err));
});

```

