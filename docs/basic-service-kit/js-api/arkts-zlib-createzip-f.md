# createZip

## createZip

```TypeScript
function createZip(): Promise<Zip>
```

创建压缩解压缩对象实例。使用Promise异步回调。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Zip> | Promise对象。返回压缩解压缩对象实例。 |

**Example**

```TypeScript
import { zlib, BusinessError } from '@kit.BasicServicesKit';

zlib.createZip().then(data => {
  console.info('createZip success');
}).catch((errData: BusinessError) => {
  console.error(`errData is errCode:${errData.code}  message:${errData.message}`);
})

```

