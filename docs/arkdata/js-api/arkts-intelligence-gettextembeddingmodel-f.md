# getTextEmbeddingModel

## getTextEmbeddingModel

```TypeScript
function getTextEmbeddingModel(config: ModelConfig): Promise<TextEmbedding>
```

Obtains a text embedding model.

**Since:** 15

**System capability:** SystemCapability.DistributedDataManager.DataIntelligence.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | ModelConfig | Yes | The configuration of the embedding model. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;TextEmbedding> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 31300000 | Inner error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let textConfig: intelligence.ModelConfig = {
  version: intelligence.ModelVersion.BASIC_MODEL,
  isNpuAvailable: false,
  cachePath: "/data"
}
let textEmbedding: intelligence.TextEmbedding;

intelligence.getTextEmbeddingModel(textConfig)
  .then((data: intelligence.TextEmbedding) => {
    console.info("Succeeded in getting TextModel");
    textEmbedding = data;
  })
  .catch((err: BusinessError) => {
    console.error("Failed to get TextModel and code is " + err.code);
  })

```

