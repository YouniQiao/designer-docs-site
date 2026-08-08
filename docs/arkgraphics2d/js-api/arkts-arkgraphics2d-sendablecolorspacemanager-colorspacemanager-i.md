# ColorSpaceManager

Implements management of color space objects.Before calling any of the following APIs, you must use  
[create()]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ to create a color space manager.

**Inheritance/Implementation:** ColorSpaceManager extends [ISendable](arkts-arkgraphics2d-sendablecolorspacemanager-isendable-t.md)

**Since:** 12

**ArkTS mode:** ArkTS-Dyn only, since version 12.

<!--Device-sendableColorSpaceManager-interface ColorSpaceManager extends ISendable--><!--Device-sendableColorSpaceManager-interface ColorSpaceManager extends ISendable-End-->

**System capability:** SystemCapability.Graphic.Graphic2D.ColorManager.Core

## getColorSpaceName

```TypeScript
getColorSpaceName(): colorSpaceManager.ColorSpace
```

Obtains the color space type.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn only, since version 12.

<!--Device-ColorSpaceManager-getColorSpaceName(): colorSpaceManager.ColorSpace--><!--Device-ColorSpaceManager-getColorSpaceName(): colorSpaceManager.ColorSpace-End-->

**System capability:** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| colorSpaceManager.ColorSpace | Color space type. |

**Example**

```TypeScript
let spaceName: colorSpaceManager.ColorSpace = colorSpace.getColorSpaceName();
```

## getGamma

```TypeScript
getGamma(): number
```

Obtains the gamma of the color space.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn only, since version 12.

<!--Device-ColorSpaceManager-getGamma(): number--><!--Device-ColorSpaceManager-getGamma(): number-End-->

**System capability:** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Gamma of the color space. |

**Example**

```TypeScript
let gamma: number = colorSpace.getGamma();
```

## getWhitePoint

```TypeScript
getWhitePoint(): collections.Array<number>
```

Obtains the coordinates of the white point in the color space.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn only, since version 12.

<!--Device-ColorSpaceManager-getWhitePoint(): collections.Array<number>--><!--Device-ColorSpaceManager-getWhitePoint(): collections.Array<number>-End-->

**System capability:** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| collections.Array&lt;number&gt; | Coordinates [x, y] of the white point. |

**Example**

```TypeScript
import { collections } from '@kit.ArkTS';
let point: collections.Array<number> = colorSpace.getWhitePoint();
```

