# getTotalSize

## Modules to Import

```TypeScript
import { storageStatistics } from '@ohos.file.storageStatistics';
```

## getTotalSize

```TypeScript
function getTotalSize(): Promise<number>
```

Get the total size.

**Since:** 15

**System capability:** SystemCapability.FileManagement.StorageService.SpatialStatistics

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | return Promise (Unit: Byte) |

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

