# PrimitiveTopology

How vertices in a sequence form triangles.

**Since:** 18

**System capability:** SystemCapability.ArkUi.Graphics3D

## TRIANGLE_LIST

```TypeScript
TRIANGLE_LIST = 0
```

The vertices form a set of independent triangle. Vertices (0, 1, 2), (3, 4, 5), ... define separate triangles.

**Since:** 18

**System capability:** SystemCapability.ArkUi.Graphics3D

## TRIANGLE_STRIP

```TypeScript
TRIANGLE_STRIP = 1
```

The vertices form a triangle strip. Starting from the 3rd, each vertex defines a triangle with the previous two.

**Since:** 18

**System capability:** SystemCapability.ArkUi.Graphics3D

