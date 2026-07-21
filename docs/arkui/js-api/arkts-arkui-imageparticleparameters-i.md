# ImageParticleParameters

Defines the parameters for an image-like particle.

**Since:** 10

<!--Device-unnamed-interface ImageParticleParameters--><!--Device-unnamed-interface ImageParticleParameters-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## objectFit

```TypeScript
objectFit?: ImageFit
```

Image display mode.

**Type:** ImageFit

**Default:** ImageFit.Cover

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ImageParticleParameters-objectFit?: ImageFit--><!--Device-ImageParticleParameters-objectFit?: ImageFit-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## size

```TypeScript
size: ParticleTuple<Dimension, Dimension>
```

Particle image size.

**Type:** ParticleTuple&lt;Dimension, Dimension&gt;

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ImageParticleParameters-size: ParticleTuple<Dimension, Dimension>--><!--Device-ImageParticleParameters-size: ParticleTuple<Dimension, Dimension>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## src

```TypeScript
src: ResourceStr
```

Path to the image. Local and online sources are supported. For details about how to reference an image, see [Loading Image Resources](docroot://ui/arkts-graphics-display.md#loading-image-resources).

SVG images are not supported.

If the value of src does not change, the cached resource is preferentially used. As a result, resources cannot be dynamically switched. If you want to dynamically switch resources, you are advised to switch to different src values.

**Type:** ResourceStr

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ImageParticleParameters-src: ResourceStr--><!--Device-ImageParticleParameters-src: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

