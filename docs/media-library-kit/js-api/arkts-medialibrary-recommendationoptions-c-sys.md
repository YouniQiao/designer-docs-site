# RecommendationOptions

Defines the image recommendation options. The image recommendation feature depends on the image data analysis capability, which varies with devices.

**Since:** 11

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@ohos.file.photoAccessHelper';
```

## defaultRecommendationType

```TypeScript
defaultRecommendationType?: RecommendationType
```

This configuration takes effect only when `RecommendationTypeList` is set. When enabled, the Picker will directly display the corresponding recommended photos upon opening.

**Type:** RecommendationType

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## recommendationTypeList

```TypeScript
recommendationTypeList?: Array<RecommendationType>
```

List of recommended image types.

**Type:** Array<RecommendationType>

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

