# drawing_font_collection.h

## Overview

This file declares the functions related to the font collection in the drawing module.

**Library**: libnative_drawing.so

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 8

**Related module**: [Drawing](capi-drawing.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [OH_Drawing_FontCollection* OH_Drawing_CreateFontCollection(void)](#oh_drawing_createfontcollection) | Creates an [OH_Drawing_FontCollection](capi-drawing-oh-drawing-fontcollection.md) object. |
| [void OH_Drawing_DestroyFontCollection(OH_Drawing_FontCollection* fontCollection)](#oh_drawing_destroyfontcollection) | Destroys an **OH_Drawing_FontCollection** object and reclaims the memory occupied by the object. |
| [void OH_Drawing_DisableFontCollectionFallback(OH_Drawing_FontCollection* fontCollection)](#oh_drawing_disablefontcollectionfallback) | Disables the system fonts.(Deprecated in API18) |
| [void OH_Drawing_DisableFontCollectionSystemFont(OH_Drawing_FontCollection* fontCollection)](#oh_drawing_disablefontcollectionsystemfont) | Disables the system fonts. |
| [OH_Drawing_FontCollection* OH_Drawing_CreateSharedFontCollection(void)](#oh_drawing_createsharedfontcollection) | Creates a shareable [OH_Drawing_FontCollection](capi-drawing-oh-drawing-fontcollection.md) object. |
| [void OH_Drawing_ClearFontCaches(OH_Drawing_FontCollection* fontCollection)](#oh_drawing_clearfontcaches) | Clears the font cache. (The font cache has a memory limit and a clearing mechanism. It occupies limitedmemory. You are not advised to clear it unless otherwise required.) |
| [OH_Drawing_FontCollection* OH_Drawing_GetFontCollectionGlobalInstance(void)](#oh_drawing_getfontcollectionglobalinstance) | Obtains the global [OH_Drawing_FontCollection](capi-drawing-oh-drawing-fontcollection.md) object, which can be used to sense the theme fontinformation. Do not release the object. |

## Function description

### OH_Drawing_CreateFontCollection()

```c
OH_Drawing_FontCollection* OH_Drawing_CreateFontCollection(void)
```

**Description**

Creates an [OH_Drawing_FontCollection](capi-drawing-oh-drawing-fontcollection.md) object.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 8

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Drawing_FontCollection*](capi-drawing-oh-drawing-fontcollection.md) | Returns the pointer to the <b>OH_Drawing_FontCollection</b> object created. |

### OH_Drawing_DestroyFontCollection()

```c
void OH_Drawing_DestroyFontCollection(OH_Drawing_FontCollection* fontCollection)
```

**Description**

Destroys an **OH_Drawing_FontCollection** object and reclaims the memory occupied by the object.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Drawing_FontCollection](capi-drawing-oh-drawing-fontcollection.md)* fontCollection | Pointer to an **OH_Drawing_FontCollection** object. |

### OH_Drawing_DisableFontCollectionFallback()

```c
void OH_Drawing_DisableFontCollectionFallback(OH_Drawing_FontCollection* fontCollection)
```

**Description**

Disables the system fonts.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 12

**Deprecated**: 18

**Replaced by**: OH_Drawing_DisableFontCollectionSystemFont

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Drawing_FontCollection](capi-drawing-oh-drawing-fontcollection.md)* fontCollection | Pointer to an [OH_Drawing_FontCollection](capi-drawing-oh-drawing-fontcollection.md) object. |

### OH_Drawing_DisableFontCollectionSystemFont()

```c
void OH_Drawing_DisableFontCollectionSystemFont(OH_Drawing_FontCollection* fontCollection)
```

**Description**

Disables the system fonts.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Drawing_FontCollection](capi-drawing-oh-drawing-fontcollection.md)* fontCollection | Pointer to an [OH_Drawing_FontCollection](capi-drawing-oh-drawing-fontcollection.md) object. |

### OH_Drawing_CreateSharedFontCollection()

```c
OH_Drawing_FontCollection* OH_Drawing_CreateSharedFontCollection(void)
```

**Description**

Creates a shareable [OH_Drawing_FontCollection](capi-drawing-oh-drawing-fontcollection.md) object.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 12

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Drawing_FontCollection*](capi-drawing-oh-drawing-fontcollection.md) | Returns the pointer to the <b>OH_Drawing_FontCollection</b> object created. |

### OH_Drawing_ClearFontCaches()

```c
void OH_Drawing_ClearFontCaches(OH_Drawing_FontCollection* fontCollection)
```

**Description**

Clears the font cache. (The font cache has a memory limit and a clearing mechanism. It occupies limitedmemory. You are not advised to clear it unless otherwise required.)

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Drawing_FontCollection](capi-drawing-oh-drawing-fontcollection.md)* fontCollection | Pointer to an [OH_Drawing_FontCollection](capi-drawing-oh-drawing-fontcollection.md) object. |

### OH_Drawing_GetFontCollectionGlobalInstance()

```c
OH_Drawing_FontCollection* OH_Drawing_GetFontCollectionGlobalInstance(void)
```

**Description**

Obtains the global [OH_Drawing_FontCollection](capi-drawing-oh-drawing-fontcollection.md) object, which can be used to sense the theme fontinformation. Do not release the object.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 14

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Drawing_FontCollection*](capi-drawing-oh-drawing-fontcollection.md) | Return the pointer to the <b>OH_Drawing_FontCollection</b> global instance. |


