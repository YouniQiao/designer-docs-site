# CustomGeometry

定义自定义几何形状的顶点数组及其数据.

**Inheritance:** CustomGeometryextends: GeometryDefinition.

**Since:** 18

**System capability:** SystemCapability.ArkUi.Graphics3D

## indices

```TypeScript
indices?: int[]
```

构成三角形的顶点索引. PrimitiveTopology应用于索引定义的序列. 给定vertices = [a, b, c, d]，创建相同的一对三角形的示例: topology = PrimitiveTopology.TRIANGLE_LIST indices = [0, 1, 2, 2, 1, 3] 生成的三角形：abc、cbd topology = PrimitiveTopology.TRIANGLE_STRIP indices = [0, 1, 2, 3] 生成的三角形：abc、cbd (b和c在cbd中被反转，以匹配第一个三角形的面方向)

**Type:** int[]

**Since:** 18

**System capability:** SystemCapability.ArkUi.Graphics3D

```TypeScript
get indices(): int[] | undefined
```

构成三角形的顶点索引. PrimitiveTopology应用于索引定义的序列. 给定vertices = [a, b, c, d]，创建相同的一对三角形的示例: topology = PrimitiveTopology.TRIANGLE_LIST indices = [0, 1, 2, 2, 1, 3] 生成的三角形：abc、cbd topology = PrimitiveTopology.TRIANGLE_STRIP indices = [0, 1, 2, 3] 生成的三角形：abc、cbd (b和c在cbd中被反转，以匹配第一个三角形的面方向)

**Type:** int[]

**Since:** 23

**System capability:** SystemCapability.ArkUi.Graphics3D

```TypeScript
set indices(value: int[] | undefined)
```

构成三角形的顶点索引. PrimitiveTopology应用于索引定义的序列. 给定vertices = [a, b, c, d]，创建相同的一对三角形的示例: topology = PrimitiveTopology.TRIANGLE_LIST indices = [0, 1, 2, 2, 1, 3] 生成的三角形：abc、cbd topology = PrimitiveTopology.TRIANGLE_STRIP indices = [0, 1, 2, 3] 生成的三角形：abc、cbd (b和c在cbd中被反转，以匹配第一个三角形的面方向)

**Type:** int[]

**Since:** 23

**System capability:** SystemCapability.ArkUi.Graphics3D

## uvs

```TypeScript
uvs?: Vec2[]
```

顶点纹理映射UV坐标. 如果uvs不为null，则uvs[N]对应vertices[N]

**Type:** Vec2[]

**Since:** 18

**System capability:** SystemCapability.ArkUi.Graphics3D

```TypeScript
get uvs(): Vec2[] | undefined
```

顶点纹理映射UV坐标. 如果uvs不为null，则uvs[N]对应vertices[N]

**Type:** Vec2[]

**Since:** 23

**System capability:** SystemCapability.ArkUi.Graphics3D

```TypeScript
set uvs(value: Vec2[] | undefined)
```

顶点纹理映射UV坐标. 如果uvs不为null，则uvs[N]对应vertices[N]

**Type:** Vec2[]

**Since:** 23

**System capability:** SystemCapability.ArkUi.Graphics3D

## vertices

```TypeScript
get vertices(): Vec3[]
```

顶点数组.

**Type:** Vec3[]

**Since:** 18

**System capability:** SystemCapability.ArkUi.Graphics3D

```TypeScript
set vertices(value: Vec3[])
```

顶点数组.

**Type:** Vec3[]

**Since:** 18

**System capability:** SystemCapability.ArkUi.Graphics3D

## topology

```TypeScript
topology?: PrimitiveTopology
```

如何从索引顶点形成网格三角形.

**Type:** PrimitiveTopology

**Since:** 18

**System capability:** SystemCapability.ArkUi.Graphics3D

```TypeScript
get topology(): PrimitiveTopology | undefined
```

如何从索引顶点形成网格三角形.

**Type:** PrimitiveTopology

**Since:** 23

**System capability:** SystemCapability.ArkUi.Graphics3D

```TypeScript
set topology(value: PrimitiveTopology | undefined)
```

如何从索引顶点形成网格三角形.

**Type:** PrimitiveTopology

**Since:** 23

**System capability:** SystemCapability.ArkUi.Graphics3D

## normals

```TypeScript
normals?: Vec3[]
```

顶点法线。如果normals不为null，则normals[N]对应vertices[N]，且generateNormals参数会被忽略。

**Type:** Vec3[]

**Since:** 18

**System capability:** SystemCapability.ArkUi.Graphics3D

```TypeScript
get normals(): Vec3[] | undefined
```

顶点法线。如果normals不为null，则normals[N]对应vertices[N]，且generateNormals参数会被忽略。

**Type:** Vec3[]

**Since:** 23

**System capability:** SystemCapability.ArkUi.Graphics3D

```TypeScript
set normals(value: Vec3[] | undefined)
```

顶点法线。如果normals不为null，则normals[N]对应vertices[N]，且generateNormals参数会被忽略。

**Type:** Vec3[]

**Since:** 23

**System capability:** SystemCapability.ArkUi.Graphics3D

## colors

```TypeScript
colors?: Color[]
```

顶点颜色. 如果colors不为null，则colors[N]对应vertices[N].

**Type:** Color[]

**Since:** 18

**System capability:** SystemCapability.ArkUi.Graphics3D

```TypeScript
get colors(): Color[] | undefined
```

顶点颜色. 如果colors不为null，则colors[N]对应vertices[N].

**Type:** Color[]

**Since:** 23

**System capability:** SystemCapability.ArkUi.Graphics3D

```TypeScript
set colors(value: Color[] | undefined)
```

顶点颜色. 如果colors不为null，则colors[N]对应vertices[N].

**Type:** Color[]

**Since:** 23

**System capability:** SystemCapability.ArkUi.Graphics3D

