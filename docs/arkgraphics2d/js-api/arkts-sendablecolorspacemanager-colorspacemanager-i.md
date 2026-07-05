# ColorSpaceManager

当前可共享的色彩管理实例。 下列API示例中都需先使用[create()]sendableColorSpaceManager.create(colorSpaceName: colorSpaceManager.ColorSpace)获取到 ColorSpaceManager实例，再通过此实例调用对应方法。

**Inheritance:** ColorSpaceManagerextends: ISendable.

**Since:** 12

**System capability:** SystemCapability.Graphic.Graphic2D.ColorManager.Core

## Modules to Import

```TypeScript
import { sendableColorSpaceManager } from '@kit.ArkGraphics2D';
```

## getColorSpaceName

```TypeScript
getColorSpaceName(): colorSpaceManager.ColorSpace
```

获取色域类型。

**Since:** 12

**System capability:** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| colorSpaceManager.ColorSpace | Color space type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 18600001 | The parameter value is abnormal. [since 12 - 22] |

## getGamma

```TypeScript
getGamma(): number
```

获取色域gamma值。

**Since:** 12

**System capability:** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回色域gamma值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 18600001 | The parameter value is abnormal. [since 12 - 22] |

## getWhitePoint

```TypeScript
getWhitePoint(): collections.Array<number>
```

获取色域白点值。

**Since:** 12

**System capability:** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| collections.Array&lt;number> | Coordinates [x, y] of the white point. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 18600001 | The parameter value is abnormal. [since 12 - 22] |

