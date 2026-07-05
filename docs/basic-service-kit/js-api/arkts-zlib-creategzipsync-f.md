# createGZipSync

## createGZipSync

```TypeScript
function createGZipSync(): GZip
```

创建GZip对象。成功时返回GZip对象实例。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

**Return value:**

| Type | Description |
| --- | --- |
| GZip | GZip对象实例。 |

**Example**

```TypeScript
import { zlib } from '@kit.BasicServicesKit';

let gzip = zlib.createGZipSync();

```

