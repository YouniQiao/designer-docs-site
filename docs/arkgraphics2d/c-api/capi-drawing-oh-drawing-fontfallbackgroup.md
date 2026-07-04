# OH_Drawing_FontFallbackGroup

```c
typedef struct OH_Drawing_FontFallbackGroup {...} OH_Drawing_FontFallbackGroup
```

## Overview

This struct describes the information about a font fallback group.

**Since**: 12

**Related module**: [Drawing](capi-drawing.md)

**Header file**: [drawing_text_typography.h](capi-drawing-text-typography-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| char* groupName | Pointer to the name of the group corresponding to the font fallback group. If null is passed in, all fonts inthe font fallback group can be used. |
| size_t fallbackInfoSize | Number of font fallbacks. |
| [OH_Drawing_FontFallbackInfo*](capi-drawing-oh-drawing-fontfallbackinfo.md) fallbackInfoSet | Pointer to the set of font fallbacks. |


