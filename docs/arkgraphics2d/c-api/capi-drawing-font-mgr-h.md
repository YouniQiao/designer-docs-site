# drawing_font_mgr.h

## Overview

This file declares the functions related to font management in the drawing module. The functions can be usedto load fonts and match available fonts in the system.

**Library**: libnative_drawing.so

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 12

**Related module**: [Drawing](capi-drawing.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [OH_Drawing_FontMgr* OH_Drawing_FontMgrCreate(void)](#oh_drawing_fontmgrcreate) | Creates an **OH_Drawing_FontMgr** object, which can be used only to manage system fonts. |
| [void OH_Drawing_FontMgrDestroy(OH_Drawing_FontMgr* drawingFontMgr)](#oh_drawing_fontmgrdestroy) | Destroys an **OH_Drawing_FontMgr** object and reclaims the memory occupied by the object. |
| [int OH_Drawing_FontMgrGetFamilyCount(OH_Drawing_FontMgr* drawingFontMgr)](#oh_drawing_fontmgrgetfamilycount) | Obtains the number of font families. |
| [char* OH_Drawing_FontMgrGetFamilyName(OH_Drawing_FontMgr* drawingFontMgr, int index)](#oh_drawing_fontmgrgetfamilyname) | Obtains the font family name based on an index. |
| [void OH_Drawing_FontMgrDestroyFamilyName(char* familyName)](#oh_drawing_fontmgrdestroyfamilyname) | Reclaims the memory occupied by a font family name. |
| [OH_Drawing_FontStyleSet* OH_Drawing_FontMgrCreateFontStyleSet(OH_Drawing_FontMgr* drawingFontMgr, int index)](#oh_drawing_fontmgrcreatefontstyleset) | Creates a font style set from an **OH_Drawing_FontMgr** object. |
| [void OH_Drawing_FontMgrDestroyFontStyleSet(OH_Drawing_FontStyleSet* drawingFontStyleSet)](#oh_drawing_fontmgrdestroyfontstyleset) | Reclaims the memory occupied by a font style set. |
| [OH_Drawing_FontStyleSet* OH_Drawing_FontMgrMatchFamily(OH_Drawing_FontMgr* drawingFontMgr, const char* familyName)](#oh_drawing_fontmgrmatchfamily) | Obtains a font style set based on a font family name. |
| [OH_Drawing_Typeface* OH_Drawing_FontMgrMatchFamilyStyle(OH_Drawing_FontMgr* drawingFontMgr, const char* familyName, OH_Drawing_FontStyleStruct fontStyle)](#oh_drawing_fontmgrmatchfamilystyle) | Obtains a typeface based on the font style information and font family name. |
| [OH_Drawing_Typeface* OH_Drawing_FontMgrMatchFamilyStyleCharacter(OH_Drawing_FontMgr* drawingFontMgr, const char* familyName, OH_Drawing_FontStyleStruct fontStyle, const char* bcp47[], int bcp47Count, int32_t character)](#oh_drawing_fontmgrmatchfamilystylecharacter) | Obtains a typeface for the specified character. A null pointer is returned only when no typefacecorresponding to the input UTF-8 character is found in the **OH_Drawing_FontMgr** object. |
| [OH_Drawing_Typeface* OH_Drawing_FontStyleSetCreateTypeface(OH_Drawing_FontStyleSet* fontStyleSet, int index)](#oh_drawing_fontstylesetcreatetypeface) | Creates a typeface for the specified index. |
| [OH_Drawing_FontStyleStruct OH_Drawing_FontStyleSetGetStyle(OH_Drawing_FontStyleSet* fontStyleSet, int32_t index, char** styleName)](#oh_drawing_fontstylesetgetstyle) | Obtains the font style. Call [OH_Drawing_FontStyleSetFreeStyleName](capi-drawing-font-mgr-h.md#oh_drawing_fontstylesetfreestylename) to release **styleName** when it isno longer needed, freeing up the allocated memory. |
| [void OH_Drawing_FontStyleSetFreeStyleName(char** styleName)](#oh_drawing_fontstylesetfreestylename) | Frees the memory occupied by a font style. |
| [OH_Drawing_Typeface* OH_Drawing_FontStyleSetMatchStyle(OH_Drawing_FontStyleSet* fontStyleSet, OH_Drawing_FontStyleStruct fontStyleStruct)](#oh_drawing_fontstylesetmatchstyle) | Obtains the typeface closest to the font style. |
| [int OH_Drawing_FontStyleSetCount(OH_Drawing_FontStyleSet* fontStyleSet)](#oh_drawing_fontstylesetcount) | Obtains the number of fonts in the font style set. |

## Function description

### OH_Drawing_FontMgrCreate()

```c
OH_Drawing_FontMgr* OH_Drawing_FontMgrCreate(void)
```

**Description**

Creates an **OH_Drawing_FontMgr** object, which can be used only to manage system fonts.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 12

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Drawing_FontMgr*](capi-drawing-oh-drawing-fontmgr.md) | Returns the pointer to the <b>OH_Drawing_FontMgr</b> object created. |

### OH_Drawing_FontMgrDestroy()

```c
void OH_Drawing_FontMgrDestroy(OH_Drawing_FontMgr* drawingFontMgr)
```

**Description**

Destroys an **OH_Drawing_FontMgr** object and reclaims the memory occupied by the object.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Drawing_FontMgr](capi-drawing-oh-drawing-fontmgr.md)* drawingFontMgr | Pointer to an [OH_Drawing_FontMgr](capi-drawing-oh-drawing-fontmgr.md) object, which is obtained from[OH_Drawing_FontMgrCreate](capi-drawing-font-mgr-h.md#oh_drawing_fontmgrcreate). |

### OH_Drawing_FontMgrGetFamilyCount()

```c
int OH_Drawing_FontMgrGetFamilyCount(OH_Drawing_FontMgr* drawingFontMgr)
```

**Description**

Obtains the number of font families.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Drawing_FontMgr](capi-drawing-oh-drawing-fontmgr.md)* drawingFontMgr | Pointer to an [OH_Drawing_FontMgr](capi-drawing-oh-drawing-fontmgr.md) object, which is obtained from[OH_Drawing_FontMgrCreate](capi-drawing-font-mgr-h.md#oh_drawing_fontmgrcreate). |

**Returns**:

| Type | Description |
| -- | -- |
| int | Returns the count of font families. |

### OH_Drawing_FontMgrGetFamilyName()

```c
char* OH_Drawing_FontMgrGetFamilyName(OH_Drawing_FontMgr* drawingFontMgr, int index)
```

**Description**

Obtains the font family name based on an index.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Drawing_FontMgr](capi-drawing-oh-drawing-fontmgr.md)* drawingFontMgr | Pointer to an [OH_Drawing_FontMgr](capi-drawing-oh-drawing-fontmgr.md) object, which is obtained from[OH_Drawing_FontMgrCreate](capi-drawing-font-mgr-h.md#oh_drawing_fontmgrcreate). |
| int index | Index of the font family name. |

**Returns**:

| Type | Description |
| -- | -- |
| char* | Returns the font family name corresponding to the index value. |

### OH_Drawing_FontMgrDestroyFamilyName()

```c
void OH_Drawing_FontMgrDestroyFamilyName(char* familyName)
```

**Description**

Reclaims the memory occupied by a font family name.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| char* familyName | Pointer to a font family name. |

### OH_Drawing_FontMgrCreateFontStyleSet()

```c
OH_Drawing_FontStyleSet* OH_Drawing_FontMgrCreateFontStyleSet(OH_Drawing_FontMgr* drawingFontMgr, int index)
```

**Description**

Creates a font style set from an **OH_Drawing_FontMgr** object.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Drawing_FontMgr](capi-drawing-oh-drawing-fontmgr.md)* drawingFontMgr | Pointer to an [OH_Drawing_FontMgr](capi-drawing-oh-drawing-fontmgr.md) object, which is obtained from[OH_Drawing_FontMgrCreate](capi-drawing-font-mgr-h.md#oh_drawing_fontmgrcreate). |
| int index | Index of the font style set. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Drawing_FontStyleSet*](capi-drawing-oh-drawing-fontstyleset.md) | Returns the pointer to the <b>OH_Drawing_FontStyleSet</b> object created. |

### OH_Drawing_FontMgrDestroyFontStyleSet()

```c
void OH_Drawing_FontMgrDestroyFontStyleSet(OH_Drawing_FontStyleSet* drawingFontStyleSet)
```

**Description**

Reclaims the memory occupied by a font style set.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Drawing_FontStyleSet](capi-drawing-oh-drawing-fontstyleset.md)* drawingFontStyleSet | Pointer to an [OH_Drawing_FontStyleSet](capi-drawing-oh-drawing-fontstyleset.md) object. |

### OH_Drawing_FontMgrMatchFamily()

```c
OH_Drawing_FontStyleSet* OH_Drawing_FontMgrMatchFamily(OH_Drawing_FontMgr* drawingFontMgr, const char* familyName)
```

**Description**

Obtains a font style set based on a font family name.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Drawing_FontMgr](capi-drawing-oh-drawing-fontmgr.md)* drawingFontMgr | Pointer to an [OH_Drawing_FontMgr](capi-drawing-oh-drawing-fontmgr.md) object, which is obtained from[OH_Drawing_FontMgrCreate](capi-drawing-font-mgr-h.md#oh_drawing_fontmgrcreate). |
| const char* familyName | Pointer to a font family name. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Drawing_FontStyleSet*](capi-drawing-oh-drawing-fontstyleset.md) | Returns the pointer to the <b>OH_Drawing_FontStyleSet</b> object matched. |

### OH_Drawing_FontMgrMatchFamilyStyle()

```c
OH_Drawing_Typeface* OH_Drawing_FontMgrMatchFamilyStyle(OH_Drawing_FontMgr* drawingFontMgr, const char* familyName, OH_Drawing_FontStyleStruct fontStyle)
```

**Description**

Obtains a typeface based on the font style information and font family name.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Drawing_FontMgr](capi-drawing-oh-drawing-fontmgr.md)* drawingFontMgr | Pointer to an [OH_Drawing_FontMgr](capi-drawing-oh-drawing-fontmgr.md) object, which is obtained from[OH_Drawing_FontMgrCreate](capi-drawing-font-mgr-h.md#oh_drawing_fontmgrcreate). |
| const char* familyName | Pointer to a font family name. |
| [OH_Drawing_FontStyleStruct](capi-drawing-oh-drawing-fontstylestruct.md) fontStyle | Font style, including the font weight, width, and slant. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Drawing_Typeface*](capi-drawing-oh-drawing-typeface.md) | Returns the pointer to the <b>OH_Drawing_Typeface</b> object matched. |

### OH_Drawing_FontMgrMatchFamilyStyleCharacter()

```c
OH_Drawing_Typeface* OH_Drawing_FontMgrMatchFamilyStyleCharacter(OH_Drawing_FontMgr* drawingFontMgr, const char* familyName, OH_Drawing_FontStyleStruct fontStyle, const char* bcp47[], int bcp47Count, int32_t character)
```

**Description**

Obtains a typeface for the specified character. A null pointer is returned only when no typefacecorresponding to the input UTF-8 character is found in the **OH_Drawing_FontMgr** object.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Drawing_FontMgr](capi-drawing-oh-drawing-fontmgr.md)* drawingFontMgr | Pointer to an [OH_Drawing_FontMgr](capi-drawing-oh-drawing-fontmgr.md) object, which is obtained from[OH_Drawing_FontMgrCreate](capi-drawing-font-mgr-h.md#oh_drawing_fontmgrcreate). |
| const char* familyName | Pointer to a font family name. |
| [OH_Drawing_FontStyleStruct](capi-drawing-oh-drawing-fontstylestruct.md) fontStyle | Font style, including the font weight, width, and slant. |
| const char* bcp47[] | Pointer to the character language code array, which is a combination of ISO 639, 15924, and 3166-1language codes. |
| int bcp47Count | Size of the character language code array. |
| int32_t character | UTF8 character used for matching. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Drawing_Typeface*](capi-drawing-oh-drawing-typeface.md) | Returns the pointer to the <b>OH_Drawing_Typeface</b> object matched. |

### OH_Drawing_FontStyleSetCreateTypeface()

```c
OH_Drawing_Typeface* OH_Drawing_FontStyleSetCreateTypeface(OH_Drawing_FontStyleSet* fontStyleSet, int index)
```

**Description**

Creates a typeface for the specified index.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Drawing_FontStyleSet](capi-drawing-oh-drawing-fontstyleset.md)* fontStyleSet | Pointer to an [OH_Drawing_FontStyleSet](capi-drawing-oh-drawing-fontstyleset.md) object. |
| int index | Index of the typeface. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Drawing_Typeface*](capi-drawing-oh-drawing-typeface.md) | If successful, return a pointer to <b>OH_Drawing_Typeface</b> object; if failed, return nullptr. |

### OH_Drawing_FontStyleSetGetStyle()

```c
OH_Drawing_FontStyleStruct OH_Drawing_FontStyleSetGetStyle(OH_Drawing_FontStyleSet* fontStyleSet, int32_t index, char** styleName)
```

**Description**

Obtains the font style. Call [OH_Drawing_FontStyleSetFreeStyleName](capi-drawing-font-mgr-h.md#oh_drawing_fontstylesetfreestylename) to release **styleName** when it isno longer needed, freeing up the allocated memory.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Drawing_FontStyleSet](capi-drawing-oh-drawing-fontstyleset.md)* fontStyleSet | Pointer to an [OH_Drawing_FontStyleSet](capi-drawing-oh-drawing-fontstyleset.md) object. |
| int32_t index | Index of the font style. |
| char** styleName | String specifying the font style name. Call [OH_Drawing_FontStyleSetFreeStyleName](capi-drawing-font-mgr-h.md#oh_drawing_fontstylesetfreestylename) to releaseit when it is no longer needed, freeing up the allocated memory. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Drawing_FontStyleStruct](capi-drawing-oh-drawing-fontstylestruct.md) | Return the <b>OH_Drawing_FontStyleStruct<b> structure. |

### OH_Drawing_FontStyleSetFreeStyleName()

```c
void OH_Drawing_FontStyleSetFreeStyleName(char** styleName)
```

**Description**

Frees the memory occupied by a font style.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| char** styleName | Double pointer to the string that specifies the font style name. |

### OH_Drawing_FontStyleSetMatchStyle()

```c
OH_Drawing_Typeface* OH_Drawing_FontStyleSetMatchStyle(OH_Drawing_FontStyleSet* fontStyleSet, OH_Drawing_FontStyleStruct fontStyleStruct)
```

**Description**

Obtains the typeface closest to the font style.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Drawing_FontStyleSet](capi-drawing-oh-drawing-fontstyleset.md)* fontStyleSet | Pointer to an [OH_Drawing_FontStyleSet](capi-drawing-oh-drawing-fontstyleset.md) object. |
| [OH_Drawing_FontStyleStruct](capi-drawing-oh-drawing-fontstylestruct.md) fontStyleStruct | Font style, including the font weight, width, and slant. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Drawing_Typeface*](capi-drawing-oh-drawing-typeface.md) | A pointer to matched <b>OH_Drawing_Typeface</b>. |

### OH_Drawing_FontStyleSetCount()

```c
int OH_Drawing_FontStyleSetCount(OH_Drawing_FontStyleSet* fontStyleSet)
```

**Description**

Obtains the number of fonts in the font style set.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Drawing_FontStyleSet](capi-drawing-oh-drawing-fontstyleset.md)* fontStyleSet | Pointer to an [OH_Drawing_FontStyleSet](capi-drawing-oh-drawing-fontstyleset.md) object. |

**Returns**:

| Type | Description |
| -- | -- |
| int | The count of typeface in this font style set. |


