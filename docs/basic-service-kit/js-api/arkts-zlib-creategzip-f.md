# createGZip

## createGZip

```TypeScript
function createGZip(): Promise<GZip>
```

创建GZip对象。使用Promise异步回调。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;GZip> | Promise对象。返回GZip对象实例。 |

**Example**

```TypeScript
import { zlib } from '@kit.BasicServicesKit';

zlib.createGZip().then((data) => {
  console.info('createGZip success');
})

```

