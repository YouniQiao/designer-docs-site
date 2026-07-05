# RecommendationOptions

Defines the image recommendation options. The image recommendation feature depends on the image data analysis capability, which varies with devices.

**Since:** 11

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## defaultRecommendationType

```TypeScript
defaultRecommendationType?: RecommendationType
```

This configuration takes effect only when `RecommendationTypeList` is set. When enabled, the Picker will directly display the corresponding recommended photos upon opening.

**Type:** RecommendationType

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## textContextInfo

```TypeScript
textContextInfo?: TextContextInfo
```

Text based on which images are recommended. If both recommendationType and textContextInfo are set, textContextInfo takes precedence over recommendationType.

**Type:** TextContextInfo

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## recommendationType

```TypeScript
recommendationType?: RecommendationType
```

Type of the recommended image.

**Type:** RecommendationType

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## recommendationTypeList

```TypeScript
recommendationTypeList?: Array<RecommendationType>
```

List of recommended image types.

**Type:** Array<RecommendationType>

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

