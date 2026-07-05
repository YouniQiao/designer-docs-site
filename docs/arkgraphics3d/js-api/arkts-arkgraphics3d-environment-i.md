# Environment

Environment resource.

**Inheritance/Implementation:** Environment extends [SceneResource](arkts-arkgraphics3d-sceneresource-i.md#sceneresource)

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## backgroundType

```TypeScript
backgroundType: EnvironmentBackgroundType
```

The background type of the environment.

**Type:** EnvironmentBackgroundType

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## environmentImage

```TypeScript
environmentImage?: Image | null
```

The environment image of the environment.

**Type:** Image | null

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## environmentMapFactor

```TypeScript
environmentMapFactor: Vec4
```

The environment map factor of the environment.

**Type:** Vec4

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## environmentRotation

```TypeScript
environmentRotation?: Quaternion
```

The rotation of the environment

**Type:** Quaternion

**Default:** Quaternion {x:0, y:0, z:0, w:1}

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUi.Graphics3D

## indirectDiffuseFactor

```TypeScript
indirectDiffuseFactor: Vec4
```

The indirect diffuse factor of the environment.

**Type:** Vec4

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## indirectSpecularFactor

```TypeScript
indirectSpecularFactor: Vec4
```

The indirect specular factor of the environment.

**Type:** Vec4

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## irradianceCoefficients

```TypeScript
irradianceCoefficients?: Vec3[]
```

The irradiance coefficients (array of nine Vec3).

**Type:** Vec3[]

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

## radianceImage

```TypeScript
radianceImage?: Image | null
```

The radiance image of the environment.

**Type:** Image | null

**Since:** 12

**System capability:** SystemCapability.ArkUi.Graphics3D

