# EllipseShape

用于clipShape和maskShape接口的椭圆形状。 继承自[BaseShape](arkts-baseshape-c.md#BaseShape)。

**继承实现关系：** EllipseShape继承自：BaseShape<EllipseShape>。

**起始版本：** 12

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { RectShape,CircleShape,EllipseShape,PathShape } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(options?: ShapeSize)
```

创建CircleShape对象。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | ShapeSize | 否 | 形状的大小。 |

