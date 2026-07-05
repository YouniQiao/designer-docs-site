# ImageEmbedding

Describes the image embedding functions of the multi-modal embedding model.

**起始版本：** 15

**系统能力：** SystemCapability.DistributedDataManager.DataIntelligence.Core

## 导入模块

```TypeScript
import { intelligence } from '@kit.ArkData';
```

## getEmbedding

```TypeScript
getEmbedding(image: Image): Promise<Array<double>>
```

Obtains the embedding vector of the given image. The model can handle images below 20 MB in size in a single inference.

**起始版本：** 15

**系统能力：** SystemCapability.DistributedDataManager.DataIntelligence.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| image | Image | 是 | The input image of the embedding model. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;double>> | The promise used to return the embedding result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 31300000 | Inner error. |

**示例：**

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

**起始版本：** 15

**系统能力：** SystemCapability.DistributedDataManager.DataIntelligence.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |
| 31300000 | Inner error. |

**示例：**

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

**起始版本：** 15

**系统能力：** SystemCapability.DistributedDataManager.DataIntelligence.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |
| 31300000 | Inner error. |

**示例：**

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

