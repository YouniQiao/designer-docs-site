# @ohos.graphics.sendableColorSpaceManager

本模块提供管理抽象化色域对象的一些基础能力，包括可共享的色彩管理的创建与可共享的色域基础属性的获取等。

**Since:** 12

**System capability:** SystemCapability.Graphic.Graphic2D.ColorManager.Core

## Modules to Import

```TypeScript
import { sendableColorSpaceManager } from '@kit.ArkGraphics2D';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [create](arkts-sendablecolorspacemanager-create-f.md#create-1) | 创建标准可共享的色彩管理。 |
| [create](arkts-sendablecolorspacemanager-create-f.md#create-2) | 创建用户自定义可共享的色彩管理实例。 |

### Interfaces

| Name | Description |
| --- | --- |
| [ColorSpaceManager](arkts-sendablecolorspacemanager-colorspacemanager-i.md) | 当前可共享的色彩管理实例。 下列API示例中都需先使用[create()]{@link sendableColorSpaceManager.create(colorSpaceName: colorSpaceManager.ColorSpace)}获取到 ColorSpaceManager实例，再通过此实例调用对应方法。 |

### Types

| Name | Description |
| --- | --- |
| [ISendable](arkts-sendablecolorspacemanager-isendable-t.md) | 为与当前模块的接口规范保持一致，重新定义了ISendable类型。 |

