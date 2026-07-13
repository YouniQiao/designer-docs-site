# RenderingPipelineType

The enum of rendering pipeline type.

**Since:** 21

**System capability:** SystemCapability.ArkUi.Graphics3D

## FORWARD_LIGHTWEIGHT

```TypeScript
FORWARD_LIGHTWEIGHT = 0
```

Lightweight forward pipeline which renders directly to back buffer.
This pipeline can only do per-pixel effects (e.g. tonemapping) in the shader,
complex effects (e.g. bloom) are not supported.

**Since:** 21

**System capability:** SystemCapability.ArkUi.Graphics3D

## FORWARD

```TypeScript
FORWARD = 1
```

Forward pipeline for high quality rendering.
Use this for complex visual effects (e.g. bloom).

**Since:** 21

**System capability:** SystemCapability.ArkUi.Graphics3D

