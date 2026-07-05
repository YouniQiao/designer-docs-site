# MaterialProperty

Material property interface.

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## factor

```TypeScript
factor: Vec4
```

Texture coefficient. Default is {1,1,1,1}, meaning no effect.

**Type:** Vec4

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## image

```TypeScript
image: Image | null
```

Texture to use. If undefined, factor defines the diffuse color.

**Type:** Image | null

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## sampler

```TypeScript
sampler?: Sampler
```

Texture Sampler.

**Type:** Sampler

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

