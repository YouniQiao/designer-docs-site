# CanvasLineJoin

```TypeScript
declare type CanvasLineJoin = "bevel" | "miter" | "round"
```

Defines the type of join between two non-zero-length segments (lines, arcs, and curves). The value type is a union of
the types listed in the table below.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

| Type | Description |
| --- | --- |
| "bevel" | The intersection is a triangle. The rectangular corner of each lineis independent. |
| "miter" | The intersection has a miter corner by extending the outside edgesof the lines until they meet. You can view the effect of this attribute in **miterLimit**. |
| "round" | The intersection is a sector, whose radius at the rounded corner isequal to the line width. |

