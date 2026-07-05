# RecommendationOptions

Defines the image recommendation options. The image recommendation feature depends on the image data analysis capability, which varies with devices.

**起始版本：** 11

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## defaultRecommendationType

```TypeScript
defaultRecommendationType?: RecommendationType
```

This configuration takes effect only when `RecommendationTypeList` is set. When enabled, the Picker will directly display the corresponding recommended photos upon opening.

**类型：** RecommendationType

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## textContextInfo

```TypeScript
textContextInfo?: TextContextInfo
```

Text based on which images are recommended. If both recommendationType and textContextInfo are set, textContextInfo takes precedence over recommendationType.

**类型：** TextContextInfo

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## recommendationType

```TypeScript
recommendationType?: RecommendationType
```

Type of the recommended image.

**类型：** RecommendationType

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## recommendationTypeList

```TypeScript
recommendationTypeList?: Array<RecommendationType>
```

List of recommended image types.

**类型：** Array<RecommendationType>

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

