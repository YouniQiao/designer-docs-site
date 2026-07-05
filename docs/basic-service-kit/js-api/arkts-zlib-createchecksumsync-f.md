# createChecksumSync

## createChecksumSync

```TypeScript
function createChecksumSync(): Checksum
```

创建校验对象。成功时返回Checksum对象实例。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

**Return value:**

| Type | Description |
| --- | --- |
| Checksum | 校验对象实例。 |

**Example**

```TypeScript
import { zlib } from '@kit.BasicServicesKit';

let checksum = zlib.createChecksumSync()

```

