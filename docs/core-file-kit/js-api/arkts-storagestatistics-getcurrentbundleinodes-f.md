# getCurrentBundleInodes

## getCurrentBundleInodes

```TypeScript
function getCurrentBundleInodes(): Promise<long>
```

获取当前应用的inode占用量，使用Promise异步回调。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.SpatialStatistics

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | Promise对象，返回当前应用的inode占用量。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13600001 | IPC error. |
| 13600002 | File system not supported. |
| 13600017 | Failed to query the inode information of the application. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

storageStatistics.getCurrentBundleInodes().then((curInodes: number) => {
  console.info("getCurrentBundleInodes successfully: " + curInodes);
}).catch((err: BusinessError) => {
  console.error(`getCurrentBundleInodes failed. Code: ${err.code}, Message: ${err.message}`);
});

```

