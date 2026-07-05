# RenderSort

Render sort Layer. Within a render slot a layer can define a sort layer order. There are 0-63 values available (0 first, 63 last). Default id value is 32. 1. Typical use case is to set render sort layer to objects which render with depth test without depth write. 2. Typical use case is to always render character and/or camera object first to cull large parts of the view. 3. Sort e.g. plane layers.

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## renderSortLayer

```TypeScript
renderSortLayer?: number
```

Sort layer used for sorting submeshes in rendering in render slots. Valid values are 0 - 63.

**Type:** number

**Default:** 32 Default render sort layer id.

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

## renderSortLayerOrder

```TypeScript
renderSortLayerOrder?: number
```

Sort layer order to describe fine order within sort layer. Valid values are 0 - 255.

**Type:** number

**Default:** 0 Default render sort layer order.

**Since:** 20

**System capability:** SystemCapability.ArkUi.Graphics3D

