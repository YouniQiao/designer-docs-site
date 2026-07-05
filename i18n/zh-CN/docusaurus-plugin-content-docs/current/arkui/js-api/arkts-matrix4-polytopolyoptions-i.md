# PolyToPolyOptions

多边形到多边形的映射选项。

**起始版本：** 12

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { matrix4 } from '@kit.ArkUI';
```

## dstIndex

```TypeScript
dstIndex?: number
```

目标坐标起始索引。 默认值: src.length/2 取值范围：[0, +∞)

**类型：** number

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## pointCount

```TypeScript
pointCount?:number
```

使用到的点数量。要使用的点的数量如果为0，则返回单位矩阵。如果为1，则返回一个将两个点改变之前的平移矩阵。如果为2-4，则返回一个变换矩阵。 默认值: 0 取值范围：[0, +∞)

**类型：** number

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## dst

```TypeScript
dst:Array<Point>
```

目标点坐标。

**类型：** Array<Point>

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## src

```TypeScript
src: Array<Point>
```

源点坐标。

**类型：** Array<Point>

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## srcIndex

```TypeScript
srcIndex?: number
```

源点坐标起始索引。 默认值:0 取值范围：[0, +∞)

**类型：** number

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

