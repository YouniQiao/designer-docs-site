# RenderingPipelineType

```TypeScript
export enum RenderingPipelineType
```

渲染管线类型枚举.

**Since:** 21

**System capability:** SystemCapability.ArkUi.Graphics3D

## FORWARD_LIGHTWEIGHT

```TypeScript
FORWARD_LIGHTWEIGHT = 0
```

轻量级前向渲染管线，直接渲染到后缓冲区. 该管线只能在着色器中实现逐像素效果（例如色调映射）, 不支持复杂效果（例如光晕）.

**Since:** 21

**System capability:** SystemCapability.ArkUi.Graphics3D

## FORWARD

```TypeScript
FORWARD = 1
```

高质量前向渲染管线. 用于复杂的视觉效果（例如光晕）.

**Since:** 21

**System capability:** SystemCapability.ArkUi.Graphics3D

