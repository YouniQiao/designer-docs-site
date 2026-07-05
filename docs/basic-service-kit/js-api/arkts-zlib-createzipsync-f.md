# createZipSync

## createZipSync

```TypeScript
function createZipSync(): Zip
```

创建压缩解压缩对象实例，成功时返回压缩解压缩对象实例。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

**Return value:**

| Type | Description |
| --- | --- |
| Zip | 返回压缩解压缩对象实例。 |

**Example**

```TypeScript
import { zlib } from '@kit.BasicServicesKit';

let zip = zlib.createZipSync();

```

