# createZip

## Modules to Import

```TypeScript
import { zlib } from '@kit.BasicServicesKit';
```

<a id="createzip"></a>
## createZip

```TypeScript
function createZip(): Promise<Zip>
```

Creates this **Zip** instance. This API uses a promise to return the result.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-zlib-function createZip(): Promise<Zip>--><!--Device-zlib-function createZip(): Promise<Zip>-End-->

**System capability:** SystemCapability.BundleManager.Zlib

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Zip&gt; | Promise used to return the **Zip** instance created. |

**Example**

```TypeScript
import { zlib, BusinessError } from '@kit.BasicServicesKit';

zlib.createZip().then(data => {
  console.info('createZip success');
}).catch((errData: BusinessError) => {
  console.error(`errData is errCode:${errData.code}  message:${errData.message}`);
})

```

