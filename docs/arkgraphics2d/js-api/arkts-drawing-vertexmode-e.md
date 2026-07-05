# VertexMode

```TypeScript
enum VertexMode
```

顶点绘制的连接方式枚举。

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

## TRIANGLES_VERTEXMODE

```TypeScript
TRIANGLES_VERTEXMODE = 0
```

每三个顶点来自不同的三角形。

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

## TRIANGLESSTRIP_VERTEXMODE

```TypeScript
TRIANGLESSTRIP_VERTEXMODE = 1
```

连续的三角形共享一条边。对于连续表面效率高。

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

## TRIANGLESFAN_VERTEXMODE

```TypeScript
TRIANGLESFAN_VERTEXMODE = 2
```

所有三角形共享一个顶点。非常适合圆形/扇形。

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

