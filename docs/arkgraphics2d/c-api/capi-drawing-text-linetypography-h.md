# drawing_text_lineTypography.h

## Overview

This file declares the functions related to line typography, including functions to determine the number ofcharacters that can be formatted from a given position within the text.

**Library**: libnative_drawing.so

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 18

**Related module**: [Drawing](capi-drawing.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [OH_Drawing_LineTypography* OH_Drawing_CreateLineTypography(OH_Drawing_TypographyCreate* handler)](#oh_drawing_createlinetypography) | Creates a pointer to an [OH_Drawing_LineTypography](capi-drawing-oh-drawing-linetypography.md) object, which stores the text content and style andcan be used to compute typography details for individual lines of text. |
| [void OH_Drawing_DestroyLineTypography(OH_Drawing_LineTypography* lineTypography)](#oh_drawing_destroylinetypography) | Releases the memory occupied by an [OH_Drawing_LineTypography](capi-drawing-oh-drawing-linetypography.md) object. |
| [size_t OH_Drawing_LineTypographyGetLineBreak(OH_Drawing_LineTypography* lineTypography, size_t startIndex, double width)](#oh_drawing_linetypographygetlinebreak) | Obtains the number of characters that can fit in the layout from the specified position within a limitedlayout width. |
| [OH_Drawing_TextLine* OH_Drawing_LineTypographyCreateLine(OH_Drawing_LineTypography* lineTypography, size_t startIndex, size_t count)](#oh_drawing_linetypographycreateline) | Creates a pointer to an [OH_Drawing_TextLine](capi-drawing-oh-drawing-textline.md) object based on the text content in a specified range. |

## Function description

### OH_Drawing_CreateLineTypography()

```c
OH_Drawing_LineTypography* OH_Drawing_CreateLineTypography(OH_Drawing_TypographyCreate* handler)
```

**Description**

Creates a pointer to an [OH_Drawing_LineTypography](capi-drawing-oh-drawing-linetypography.md) object, which stores the text content and style andcan be used to compute typography details for individual lines of text.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Drawing_TypographyCreate](capi-drawing-oh-drawing-typographycreate.md)* handler | Pointer to the [OH_Drawing_TypographyCreate](capi-drawing-oh-drawing-typographycreate.md) object, which is obtained from{@link OH_Drawing_CreateTypographyHandler}. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Drawing_LineTypography*](capi-drawing-oh-drawing-linetypography.md) | Returns the pointer to the [OH_Drawing_LineTypography](capi-drawing-oh-drawing-linetypography.md) object created. |

### OH_Drawing_DestroyLineTypography()

```c
void OH_Drawing_DestroyLineTypography(OH_Drawing_LineTypography* lineTypography)
```

**Description**

Releases the memory occupied by an [OH_Drawing_LineTypography](capi-drawing-oh-drawing-linetypography.md) object.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Drawing_LineTypography](capi-drawing-oh-drawing-linetypography.md)* lineTypography | Pointer to the [OH_Drawing_LineTypography](capi-drawing-oh-drawing-linetypography.md) object, which is obtained from[OH_Drawing_CreateLineTypography](capi-drawing-text-lineTypography-h.md#oh_drawing_createlinetypography). |

### OH_Drawing_LineTypographyGetLineBreak()

```c
size_t OH_Drawing_LineTypographyGetLineBreak(OH_Drawing_LineTypography* lineTypography, size_t startIndex, double width)
```

**Description**

Obtains the number of characters that can fit in the layout from the specified position within a limitedlayout width.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Drawing_LineTypography](capi-drawing-oh-drawing-linetypography.md)* lineTypography | Pointer to the [OH_Drawing_LineTypography](capi-drawing-oh-drawing-linetypography.md) object, which is obtained from[OH_Drawing_CreateLineTypography](capi-drawing-text-lineTypography-h.md#oh_drawing_createlinetypography). |
| size_t startIndex | Start position (inclusive) for layout calculation. The value must be an integer in the range [0,total number of text characters]. |
| double width | Layout width. The value is a floating point number greater than 0, in px. |

**Returns**:

| Type | Description |
| -- | -- |
| size_t | Returns the number of characters. |

### OH_Drawing_LineTypographyCreateLine()

```c
OH_Drawing_TextLine* OH_Drawing_LineTypographyCreateLine(OH_Drawing_LineTypography* lineTypography, size_t startIndex, size_t count)
```

**Description**

Creates a pointer to an [OH_Drawing_TextLine](capi-drawing-oh-drawing-textline.md) object based on the text content in a specified range.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Drawing_LineTypography](capi-drawing-oh-drawing-linetypography.md)* lineTypography | Pointer to the [OH_Drawing_LineTypography](capi-drawing-oh-drawing-linetypography.md) object, which is obtained from[OH_Drawing_CreateLineTypography](capi-drawing-text-lineTypography-h.md#oh_drawing_createlinetypography). |
| size_t startIndex | Start position for layout calculation. The value is an integer in the range [0, total number oftext characters). |
| size_t count | Number of characters from the specified start position. The value is an integer in the range [0, totalnumber of text characters). The sum of **startIndex** and **count** cannot be greater than the total number oftext characters.You can use [OH_Drawing_LineTypographyGetLineBreak](capi-drawing-text-lineTypography-h.md#oh_drawing_linetypographygetlinebreak) to obtain the number of characters that can fit in thelayout. If the value is set to **0**, a null pointer is returned. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Drawing_TextLine*](capi-drawing-oh-drawing-textline.md) | Pointer to the [OH_Drawing_TextLine](capi-drawing-oh-drawing-textline.md) object. |


