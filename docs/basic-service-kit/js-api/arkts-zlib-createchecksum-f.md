# createChecksum

## createChecksum

```TypeScript
function createChecksum(): Promise<Checksum>
```

创建校验对象。使用Promise异步回调。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Checksum> | Promise对象。返回校验对象实例。 |

**Example**

```TypeScript
import { zlib } from '@kit.BasicServicesKit';

zlib.createChecksum().then((data) => {
  console.info('createChecksum success');
})

```

