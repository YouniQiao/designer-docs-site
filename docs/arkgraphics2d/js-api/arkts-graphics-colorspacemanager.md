# @ohos.graphics.colorSpaceManager

The **colorSpaceManager** module provides APIs for creating and managing color space objects and obtaining basic color space attributes.

**Since:** 9

<!--Device-unnamed-declare namespace colorSpaceManager--><!--Device-unnamed-declare namespace colorSpaceManager-End-->

**System capability:** SystemCapability.Graphic.Graphic2D.ColorManager.Core

## Modules to Import

```TypeScript
import { colorSpaceManager } from '@kit.ArkGraphics2D';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [create](arkts-arkgraphics2d-colorspacemanager-create-f.md#create-1) | Creates a standard color space object. |
| [create](arkts-arkgraphics2d-colorspacemanager-create-f.md#create-2) | Creates a custom color space object. |

### Interfaces

| Name | Description |
| --- | --- |
| [ColorSpaceManager](arkts-arkgraphics2d-colorspacemanager-colorspacemanager-i.md) | Implements management of color space objects.Before calling any of the following APIs, you must use [create()](arkts-arkgraphics2d-colorspacemanager-create-f.md#create-1) to create a color space manager. |
| [ColorSpacePrimaries](arkts-arkgraphics2d-colorspacemanager-colorspaceprimaries-i.md) | The three primary colors (red, green, blue) and white as defined by the gamut standard, whose positions in the color space are represented by (x, y) coordinates based on real-world chromaticity. |

### Enums

| Name | Description |
| --- | --- |
| [ColorSpace](arkts-arkgraphics2d-colorspacemanager-colorspace-e.md) | Enumerates the color space types. |

