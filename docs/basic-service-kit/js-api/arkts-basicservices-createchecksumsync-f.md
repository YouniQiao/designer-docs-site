# createChecksumSync

## Modules to Import

```TypeScript
import { zlib } from '@ohos.zlib';
```

## createChecksumSync

```TypeScript
function createChecksumSync(): Checksum
```

Creates this checksum object. A checksum instance is returned upon a success.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.BundleManager.Zlib

**Return value:**

| Type | Description |
| --- | --- |
| Checksum | Checksum object instance. |

**Example**

```TypeScript
import { zlib } from '@kit.BasicServicesKit';

let checksum = zlib.createChecksumSync()

```

