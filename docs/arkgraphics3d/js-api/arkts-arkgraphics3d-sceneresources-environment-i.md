# Environment

Environment resource.

**Inheritance/Implementation:** Environment extends [SceneResource](arkts-arkgraphics3d-sceneresources-sceneresource-i.md)

**Since:** 12

<!--Device-unnamed-export interface Environment extends SceneResource--><!--Device-unnamed-export interface Environment extends SceneResource-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

## backgroundType

```TypeScript
backgroundType: EnvironmentBackgroundType
```

The background type of the environment.

**Type:** EnvironmentBackgroundType

**Since:** 12

<!--Device-Environment-backgroundType: EnvironmentBackgroundType--><!--Device-Environment-backgroundType: EnvironmentBackgroundType-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

## environmentImage

```TypeScript
environmentImage?: Image | null
```

The environment image of the environment.

**Type:** Image | null

**Since:** 12

<!--Device-Environment-environmentImage?: Image | null--><!--Device-Environment-environmentImage?: Image | null-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

## environmentMapFactor

```TypeScript
environmentMapFactor: Vec4
```

The environment map factor of the environment.

**Type:** Vec4

**Since:** 12

<!--Device-Environment-environmentMapFactor: Vec4--><!--Device-Environment-environmentMapFactor: Vec4-End-->

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

<!--Device-Environment-environmentRotation?: Quaternion--><!--Device-Environment-environmentRotation?: Quaternion-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

## indirectDiffuseFactor

```TypeScript
indirectDiffuseFactor: Vec4
```

The indirect diffuse factor of the environment.

**Type:** Vec4

**Since:** 12

<!--Device-Environment-indirectDiffuseFactor: Vec4--><!--Device-Environment-indirectDiffuseFactor: Vec4-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

## indirectSpecularFactor

```TypeScript
indirectSpecularFactor: Vec4
```

The indirect specular factor of the environment.

**Type:** Vec4

**Since:** 12

<!--Device-Environment-indirectSpecularFactor: Vec4--><!--Device-Environment-indirectSpecularFactor: Vec4-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

## irradianceCoefficients

```TypeScript
irradianceCoefficients?: Vec3[]
```

The irradiance coefficients (array of nine Vec3).

**Type:** Vec3[]

**Since:** 12

<!--Device-Environment-irradianceCoefficients?: Vec3[]--><!--Device-Environment-irradianceCoefficients?: Vec3[]-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

## radianceImage

```TypeScript
radianceImage?: Image | null
```

The radiance image of the environment.

**Type:** Image | null

**Since:** 12

<!--Device-Environment-radianceImage?: Image | null--><!--Device-Environment-radianceImage?: Image | null-End-->

**System capability:** SystemCapability.ArkUi.Graphics3D

