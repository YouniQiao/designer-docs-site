# CylinderGeometry

定义圆柱体.

**继承实现关系：** CylinderGeometry继承自：GeometryDefinition。

**起始版本：** 23

**系统能力：** SystemCapability.ArkUi.Graphics3D

## radius

```TypeScript
get radius(): double
```

圆柱体底面的半径, 单位为世界坐标系下的场景单位（例如cm、m、km等）.

**类型：** double

**起始版本：** 23

**系统能力：** SystemCapability.ArkUi.Graphics3D

```TypeScript
set radius(value: double)
```

圆柱体底面的半径, 单位为世界坐标系下的场景单位（例如cm、m、km等）.

**类型：** double

**起始版本：** 23

**系统能力：** SystemCapability.ArkUi.Graphics3D

## segmentCount

```TypeScript
get segmentCount(): int
```

使用正多边形近似圆柱体的圆形底面, 其中segmentCount是正多边形的边数.

**类型：** int

**起始版本：** 23

**系统能力：** SystemCapability.ArkUi.Graphics3D

```TypeScript
set segmentCount(value: int)
```

使用正多边形近似圆柱体的圆形底面, 其中segmentCount是正多边形的边数.

**类型：** int

**起始版本：** 23

**系统能力：** SystemCapability.ArkUi.Graphics3D

## height

```TypeScript
get height(): double
```

圆柱体的高度, 单位为世界坐标系下的场景单位（例如cm、m、km等）.

**类型：** double

**起始版本：** 23

**系统能力：** SystemCapability.ArkUi.Graphics3D

```TypeScript
set height(value: double)
```

圆柱体的高度, 单位为世界坐标系下的场景单位（例如cm、m、km等）.

**类型：** double

**起始版本：** 23

**系统能力：** SystemCapability.ArkUi.Graphics3D

