# @ohos.data.intelligence

Provides methods for intelligent data processing.

**Since:** 15

**System capability:** SystemCapability.DistributedDataManager.DataIntelligence.Core

## Modules to Import

```TypeScript
import { intelligence } from '@kit.ArkData';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getImageEmbeddingModel](arkts-intelligence-getimageembeddingmodel-f.md#getImageEmbeddingModel-1) | Obtains an image embedding model. |
| [getSupportedCloudModel](arkts-intelligence-getsupportedcloudmodel-f.md#getSupportedCloudModel-1) | Obtains the supported cloud embedding models. |
| [getTextEmbeddingModel](arkts-intelligence-gettextembeddingmodel-f.md#getTextEmbeddingModel-1) | Obtains a text embedding model. |
| [splitText](arkts-intelligence-splittext-f.md#splitText-1) | Splits text. |

### Interfaces

| Name | Description |
| --- | --- |
| [CloudModelInfo](arkts-intelligence-cloudmodelinfo-i.md) | Indicates cloud embedding model information. |
| [ImageEmbedding](arkts-intelligence-imageembedding-i.md) | Describes the image embedding functions of the multi-modal embedding model. |
| [ModelConfig](arkts-intelligence-modelconfig-i.md) | Manages configurations of the embedding model. |
| [SplitConfig](arkts-intelligence-splitconfig-i.md) | Manages text chunk process configurations. |
| [TextEmbedding](arkts-intelligence-textembedding-i.md) | Describes the text embedding functions of the multi-modal embedding model. Chinese and English are supported. |

### Types

| Name | Description |
| --- | --- |
| [Image](arkts-intelligence-image-t.md) | The type of the image can be its URI. |

### Enums

| Name | Description |
| --- | --- |
| [ModelVersion](arkts-intelligence-modelversion-e.md) | Version of the model. |
| [NetworkPolicy](arkts-intelligence-networkpolicy-e.md) | Indicates network policy. |

