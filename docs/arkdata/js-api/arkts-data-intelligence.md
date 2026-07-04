# @ohos.data.intelligence

Provides methods for intelligent data processing.

**Since:** 15

**System capability:** SystemCapability.DistributedDataManager.DataIntelligence.Core

## Modules to Import

```TypeScript
import { intelligence } from '@ohos.data.intelligence';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getImageEmbeddingModel](arkts-arkdata-getimageembeddingmodel-f.md#getimageembeddingmodel-1) | Obtains an image embedding model. |
| [getSupportedCloudModel](arkts-arkdata-getsupportedcloudmodel-f.md#getsupportedcloudmodel-1) | Obtains the supported cloud embedding models. |
| [getTextEmbeddingModel](arkts-arkdata-gettextembeddingmodel-f.md#gettextembeddingmodel-1) | Obtains a text embedding model. |
| [splitText](arkts-arkdata-splittext-f.md#splittext-1) | Splits text. |

### Interfaces

| Name | Description |
| --- | --- |
| [CloudModelInfo](arkts-arkdata-cloudmodelinfo-i.md) | Indicates cloud embedding model information. |
| [ImageEmbedding](arkts-arkdata-imageembedding-i.md) | Describes the image embedding functions of the multi-modal embedding model. |
| [ModelConfig](arkts-arkdata-modelconfig-i.md) | Manages configurations of the embedding model. |
| [SplitConfig](arkts-arkdata-splitconfig-i.md) | Manages text chunk process configurations. |
| [TextEmbedding](arkts-arkdata-textembedding-i.md) | Describes the text embedding functions of the multi-modal embedding model. Chinese and English are supported. |

### Enums

| Name | Description |
| --- | --- |
| [ModelVersion](arkts-arkdata-modelversion-e.md) | Version of the model. |
| [NetworkPolicy](arkts-arkdata-networkpolicy-e.md) | Indicates network policy. |

### Types

| Name | Description |
| --- | --- |
| [Image](arkts-arkdata-image-t.md) | The type of the image can be its URI. |

