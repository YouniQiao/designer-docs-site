# ColorSpaceManager

当前可共享的色彩管理实例。 下列API示例中都需先使用[create()]sendableColorSpaceManager.create(colorSpaceName: colorSpaceManager.ColorSpace)获取到 ColorSpaceManager实例，再通过此实例调用对应方法。

**继承实现关系：** ColorSpaceManager继承自：ISendable。

**起始版本：** 12

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

## 导入模块

```TypeScript
import { sendableColorSpaceManager } from '@kit.ArkGraphics2D';
```

## getColorSpaceName

```TypeScript
getColorSpaceName(): colorSpaceManager.ColorSpace
```

获取色域类型。

**起始版本：** 12

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| colorSpaceManager.ColorSpace | Color space type. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 18600001 | The parameter value is abnormal. [since 12 - 22] |

## getGamma

```TypeScript
getGamma(): number
```

获取色域gamma值。

**起始版本：** 12

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | 返回色域gamma值。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 18600001 | The parameter value is abnormal. [since 12 - 22] |

## getWhitePoint

```TypeScript
getWhitePoint(): collections.Array<number>
```

获取色域白点值。

**起始版本：** 12

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| collections.Array&lt;number> | Coordinates [x, y] of the white point. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 18600001 | The parameter value is abnormal. [since 12 - 22] |

