# @ohos.graphics.colorSpaceManager

本模块提供管理抽象化色域对象的一些基础能力，包括色域对象的创建与色域基础属性的获取等。

**Since:** 9

**System capability:** SystemCapability.Graphic.Graphic2D.ColorManager.Core

## Modules to Import

```TypeScript
import { colorSpaceManager } from '@kit.ArkGraphics2D';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [create](arkts-colorspacemanager-create-f.md#create-1) | 创建标准色域对象。 |
| [create](arkts-colorspacemanager-create-f.md#create-2) | 创建用户自定义色域对象。 |

### Interfaces

| Name | Description |
| --- | --- |
| [ColorSpaceManager](arkts-colorspacemanager-colorspacemanager-i.md) | 当前色域对象实例。 下列API示例中都需先使用[create()]{@link colorSpaceManager.create(colorSpaceName: ColorSpace)}获取到ColorSpaceManager实例，再通过此实例调用对 应方法。 |
| [ColorSpacePrimaries](arkts-colorspacemanager-colorspaceprimaries-i.md) | 色域标准三原色（红、绿、蓝）和白色，基于现实世界的色度，使用(x, y)表示其在色彩空间中的位置。 |

### Enums

| Name | Description |
| --- | --- |
| [ColorSpace](arkts-colorspacemanager-colorspace-e.md) | 色域类型枚举。 |

