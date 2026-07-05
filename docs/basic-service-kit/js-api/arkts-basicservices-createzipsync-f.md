# createZipSync

## Modules to Import

```TypeScript
import { zlib } from '@ohos.zlib';
```

## createZipSync

```TypeScript
function createZipSync(): Zip
```

Creates this **Zip** instance. A **Zip** instance is returned upon a success.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.BundleManager.Zlib

**Return value:**

| Type | Description |
| --- | --- |
| Zip | The **Zip** instance created. |

**Example**

```TypeScript
import { zlib } from '@kit.BasicServicesKit';

let zip = zlib.createZipSync();

```

