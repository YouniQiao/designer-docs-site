# MetallicRoughnessMaterial

基于物理的金属粗糙度材质资源.

**Inheritance:** MetallicRoughnessMaterialextends: Material.

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## ambientOcclusion

```TypeScript
ambientOcclusion: MaterialProperty
```

PBR材质的环境光遮蔽. factor.x定义环境光遮蔽因子.

**Type:** MaterialProperty

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## normal

```TypeScript
normal: MaterialProperty
```

PBR材质的法线因子. factor.x的值定义法线缩放.

**Type:** MaterialProperty

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## emissive

```TypeScript
emissive: MaterialProperty
```

PBR材质的自发光属性.

**Type:** MaterialProperty

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## material

```TypeScript
material: MaterialProperty
```

金属粗糙度材质参数. factor.y定义粗糙度，factor.z定义金属度，factor.a定义反射率.

**Type:** MaterialProperty

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## specular

```TypeScript
specular: MaterialProperty
```

PBR材质的镜面反射颜色. Value of factor.xyz defines RGB specular color, Value of factor.w defines specular intensity.

**Type:** MaterialProperty

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## clearCoatNormal

```TypeScript
clearCoatNormal: MaterialProperty
```

清漆法线. factor.xyz定义RGB清漆法线缩放.

**Type:** MaterialProperty

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## clearCoatRoughness

```TypeScript
clearCoatRoughness: MaterialProperty
```

清漆粗糙度. factor.y定义清漆层粗糙度.

**Type:** MaterialProperty

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## clearCoat

```TypeScript
clearCoat: MaterialProperty
```

清漆强度. factor.x定义清漆层强度.

**Type:** MaterialProperty

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## sheen

```TypeScript
sheen: MaterialProperty
```

PBR材质的光泽颜色. Value of factor.xyz defines RGB sheen color, Value of factor.w defines sheen roughness.

**Type:** MaterialProperty

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## baseColor

```TypeScript
baseColor: MaterialProperty
```

PBR材质的基础颜色因子. factor.xyzw的值定义rgba颜色.

**Type:** MaterialProperty

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

