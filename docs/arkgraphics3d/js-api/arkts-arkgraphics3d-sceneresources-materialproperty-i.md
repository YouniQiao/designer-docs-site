# MaterialProperty

Material property interface.

**Since:** 20

<!--Device-unnamed-export interface MaterialProperty--><!--Device-unnamed-export interface MaterialProperty-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

## factor

```TypeScript
factor: Vec4
```

Texture coefficient. Default is {1,1,1,1}, meaning no effect.

**Type:** Vec4

**Since:** 20

<!--Device-MaterialProperty-factor: Vec4--><!--Device-MaterialProperty-factor: Vec4-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

## image

```TypeScript
image: Image | null
```

Texture to use. If undefined, factor defines the diffuse color.

**Type:** Image | null

**Since:** 20

<!--Device-MaterialProperty-image: Image | null--><!--Device-MaterialProperty-image: Image | null-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

## sampler

```TypeScript
sampler?: Sampler
```

Texture Sampler.

**Type:** Sampler

**Since:** 20

<!--Device-MaterialProperty-sampler?: Sampler--><!--Device-MaterialProperty-sampler?: Sampler-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

