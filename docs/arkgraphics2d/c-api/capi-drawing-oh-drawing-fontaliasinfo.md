# OH_Drawing_FontAliasInfo

```c
typedef struct OH_Drawing_FontAliasInfo {...} OH_Drawing_FontAliasInfo
```

## Overview

This struct describes the information about a font alias.

**Since**: 12

**Related module**: [Drawing](capi-drawing.md)

**Header file**: [drawing_text_typography.h](capi-drawing-text-typography-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| char* familyName | Pointer to the name of a font family. |
| int weight | Font weight. If the value is greater than 0, only the fonts with the specified weight in the font family arecontained. If the value is 0, all the fonts in the font family are contained. |


