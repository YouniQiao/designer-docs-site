# TileMode

```TypeScript
enum TileMode
```

着色器效果平铺模式的枚举。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## CLAMP

```TypeScript
CLAMP = 0
```

如果着色器效果超出其原始边界，剩余区域使用着色器的边缘颜色填充。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## REPEAT

```TypeScript
REPEAT = 1
```

在水平和垂直方向上重复着色器效果。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## MIRROR

```TypeScript
MIRROR = 2
```

在水平和垂直方向上重复着色器效果，交替镜像图像，以便相邻图像始终接合。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## DECAL

```TypeScript
DECAL = 3
```

仅在其原始边界内渲染着色器效果。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

