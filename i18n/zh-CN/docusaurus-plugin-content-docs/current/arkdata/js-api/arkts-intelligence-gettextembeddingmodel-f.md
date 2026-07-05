# getTextEmbeddingModel

## getTextEmbeddingModel

```TypeScript
function getTextEmbeddingModel(config: ModelConfig): Promise<TextEmbedding>
```

Obtains a text embedding model.

**起始版本：** 15

**系统能力：** SystemCapability.DistributedDataManager.DataIntelligence.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | ModelConfig | 是 | The configuration of the embedding model. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;TextEmbedding> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 31300000 | Inner error. |

**示例：**

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

