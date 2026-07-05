# MaterialProperty

材质属性接口.

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## image

```TypeScript
image: Image | null
```

要使用的纹理. 如果未定义，factor定义漫反射颜色.

**Type:** Image | null

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## factor

```TypeScript
factor: Vec4
```

纹理系数. 默认为{1,1,1,1}，表示无效果.

**Type:** Vec4

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## sampler

```TypeScript
sampler?: Sampler
```

纹理采样器.

**Type:** Sampler

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

