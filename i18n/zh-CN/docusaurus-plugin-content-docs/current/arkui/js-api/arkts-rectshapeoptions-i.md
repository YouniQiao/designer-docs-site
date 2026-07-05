# RectShapeOptions

RectShape 的构造函数参数。 继承自[ShapeSize](arkts-shapesize-i.md#ShapeSize)。

**继承实现关系：** RectShapeOptions继承自：ShapeSize。

**起始版本：** 12

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { RectShape,CircleShape,EllipseShape,PathShape } from '@kit.ArkUI';
```

## radius

```TypeScript
radius?: number | string | Array<number | string>
```

矩形形状的圆角半径。 类型为number时取值范围是[0, +∞)，string时是[Length]Length。 单位：vp 取值为异常值时按照0vp处理。

**类型：** number | string | Array<number | string>

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

