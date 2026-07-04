# ImageEmbedding

Describes the image embedding functions of the multi-modal embedding model.

**Since:** 15

**System capability:** SystemCapability.DistributedDataManager.DataIntelligence.Core

## Modules to Import

```TypeScript
import { intelligence } from '@ohos.data.intelligence';
```

## getEmbedding

```TypeScript
getEmbedding(image: Image): Promise<Array<number>>
```

Obtains the embedding vector of the given image. The model can handle images below 20 MB in size in a single inference.

**Since:** 15

**System capability:** SystemCapability.DistributedDataManager.DataIntelligence.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| image | Image | Yes | The input image of the embedding model. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;number&gt;&gt; | The promise used to return the embedding result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [31300000](../errorcode-intelligence.md#31300000-internal-error) | Inner error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

imageEmbedding.loadModel();
let image = 'file://<packageName>/data/storage/el2/base/haps/entry/files/xxx.jpg';
imageEmbedding.getEmbedding(image)
  .then((data: Array<number>) => {
    console.info("Succeeded in getting Embedding");
  })
  .catch((err: BusinessError) => {
    console.error("Failed to get Embedding and code is " + err.code);
  })

```

## loadModel

```TypeScript
loadModel(): Promise<void>
```

Loads this image embedding model. If the loading fails, an error code is returned.

**Since:** 15

**System capability:** SystemCapability.DistributedDataManager.DataIntelligence.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [31300000](../errorcode-intelligence.md#31300000-internal-error) | Inner error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

imageEmbedding.loadModel()
  .then(() => {
    console.info("Succeeded in loading Model");
  })
  .catch((err: BusinessError) => {
    console.error("Failed to load Model and code is " + err.code);
  })

```

## releaseModel

```TypeScript
releaseModel(): Promise<void>
```

Releases this image embedding model. If the releasing fails, an error code is returned.

**Since:** 15

**System capability:** SystemCapability.DistributedDataManager.DataIntelligence.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [31300000](../errorcode-intelligence.md#31300000-internal-error) | Inner error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

imageEmbedding.releaseModel()
  .then(() => {
    console.info("Succeeded in releasing Model");
  })
  .catch((err: BusinessError) => {
    console.error("Failed to release Model and code is " + err.code);
  })

```

