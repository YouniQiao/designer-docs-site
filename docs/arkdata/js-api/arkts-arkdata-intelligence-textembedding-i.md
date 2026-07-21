# TextEmbedding

Describes the text embedding functions of the multi-modal embedding model.Chinese and English are supported.

**Since:** 15

<!--Device-intelligence-interface TextEmbedding--><!--Device-intelligence-interface TextEmbedding-End-->

**System capability:** SystemCapability.DistributedDataManager.DataIntelligence.Core

## Modules to Import

```TypeScript
import { intelligence } from '@kit.ArkData';
```

<a id="getembedding"></a>
## getEmbedding

```TypeScript
getEmbedding(text: string): Promise<Array<number>>
```

Obtains the embedding vector of the given text.The model can process up to 512 characters of text per inference, supporting both Chinese and English.

**Since:** 15

<!--Device-TextEmbedding-getEmbedding(text: string): Promise<Array<double>>--><!--Device-TextEmbedding-getEmbedding(text: string): Promise<Array<double>>-End-->

**System capability:** SystemCapability.DistributedDataManager.DataIntelligence.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | The input text of the embedding model. |

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

textEmbedding.loadModel();
let text = 'text';
textEmbedding.getEmbedding(text)
  .then((data: Array<number>) => {
    console.info("Succeeded in getting Embedding");
  })
  .catch((err: BusinessError) => {
    console.error("Failed to get Embedding and code is " + err.code);
  })

```

<a id="getembedding-1"></a>
## getEmbedding

```TypeScript
getEmbedding(batchTexts: Array<string>): Promise<Array<Array<number>>>
```

Obtains the embedding vector of a given batch of text.The model can process up to 512 characters of text per inference, supporting both Chinese and English.

**Since:** 15

<!--Device-TextEmbedding-getEmbedding(batchTexts: Array<string>): Promise<Array<Array<double>>>--><!--Device-TextEmbedding-getEmbedding(batchTexts: Array<string>): Promise<Array<Array<double>>>-End-->

**System capability:** SystemCapability.DistributedDataManager.DataIntelligence.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| batchTexts | Array&lt;string&gt; | Yes | The input batch of texts of the embedding model. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Array&lt;number&gt;&gt;&gt; | The promise used to return the embedding result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [31300000](../errorcode-intelligence.md#31300000-internal-error) | Inner error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

textEmbedding.loadModel();
let batchTexts = ['text1', 'text2'];
textEmbedding.getEmbedding(batchTexts)
  .then((data: Array<Array<number>>) => {
    console.info("Succeeded in getting Embedding");
  })
  .catch((err: BusinessError) => {
    console.error("Failed to get Embedding and code is " + err.code);
  })

```

<a id="loadmodel"></a>
## loadModel

```TypeScript
loadModel(): Promise<void>
```

Loads this text embedding model. If the loading fails, an error code is returned.

**Since:** 15

<!--Device-TextEmbedding-loadModel(): Promise<void>--><!--Device-TextEmbedding-loadModel(): Promise<void>-End-->

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

textEmbedding.loadModel()
  .then(() => {
    console.info("Succeeded in loading Model");
  })
  .catch((err: BusinessError) => {
    console.error("Failed to load Model and code is " + err.code);
  })

```

<a id="releasemodel"></a>
## releaseModel

```TypeScript
releaseModel(): Promise<void>
```

Releases this text embedding model. If the releasing fails, an error code is returned.

**Since:** 15

<!--Device-TextEmbedding-releaseModel(): Promise<void>--><!--Device-TextEmbedding-releaseModel(): Promise<void>-End-->

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

textEmbedding.releaseModel()
  .then(() => {
    console.info("Succeeded in releasing Model");
  })
  .catch((err: BusinessError) => {
    console.error("Failed to release Model and code is " + err.code);
  })

```

