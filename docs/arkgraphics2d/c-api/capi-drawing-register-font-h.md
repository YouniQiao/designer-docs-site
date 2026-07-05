# drawing_register_font.h

## Overview

This file declares the functions related to the font manager in the drawing module.

**Library**: libnative_drawing.so

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 11

**Related module**: [Drawing](capi-drawing.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [uint32_t OH_Drawing_RegisterFont(OH_Drawing_FontCollection*, const char* fontFamily, const char* familySrc)](#oh_drawing_registerfont) | Registers a custom font with the font manager. The supported font file formats are .ttf and .otf. |
| [uint32_t OH_Drawing_RegisterFontBuffer(OH_Drawing_FontCollection*, const char* fontFamily, uint8_t* fontBuffer, size_t length)](#oh_drawing_registerfontbuffer) | Registers a font buffer with the font manager. |
| [uint32_t OH_Drawing_RegisterFontByIndex(OH_Drawing_FontCollection* fontCollection, const char* fontFamily, const char* familySrc, uint32_t index)](#oh_drawing_registerfontbyindex) | Registers a custom font using a TTC/OTC file. |
| [uint32_t OH_Drawing_RegisterFontBufferByIndex(OH_Drawing_FontCollection* fontCollection, const char* fontFamily, uint8_t* fontBuffer, size_t length, uint32_t index)](#oh_drawing_registerfontbufferbyindex) | Registers a font using the font buffer of a TTC/OTC file. |
| [uint32_t OH_Drawing_UnregisterFont(OH_Drawing_FontCollection* fontCollection, const char* fontFamily)](#oh_drawing_unregisterfont) | Unregisters a custom font by font family name.Unregistering a font that is currently in use may lead to textrendering exceptions (such as garbled characters or missing glyphs).All typography objects using the unregisteredfont family should be destroyed and re-created. |
| [bool OH_Drawing_IsFontSupportedFromPath(const char* path)](#oh_drawing_isfontsupportedfrompath) | Checks whether the system supports the font format of the specified path. |
| [bool OH_Drawing_IsFontSupportedFromBuffer(uint8_t* data, size_t dataLength)](#oh_drawing_isfontsupportedfrombuffer) | Checks whether the system supports the font format specified in the buffer. |

## Function description

### OH_Drawing_RegisterFont()

```c
uint32_t OH_Drawing_RegisterFont(OH_Drawing_FontCollection*, const char* fontFamily, const char* familySrc)
```

**Description**

Registers a custom font with the font manager. The supported font file formats are .ttf and .otf.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| [](capi-drawing-register-font-h.md#)O[](capi-drawing-register-font-h.md#)H[](capi-drawing-register-font-h.md#)_[](capi-drawing-register-font-h.md#)D[](capi-drawing-register-font-h.md#)r[](capi-drawing-register-font-h.md#)a[](capi-drawing-register-font-h.md#)w[](capi-drawing-register-font-h.md#)i[](capi-drawing-register-font-h.md#)n[](capi-drawing-register-font-h.md#)g[](capi-drawing-register-font-h.md#)_[](capi-drawing-register-font-h.md#)F[](capi-drawing-register-font-h.md#)o[](capi-drawing-register-font-h.md#)n[](capi-drawing-register-font-h.md#)t[](capi-drawing-register-font-h.md#)C[](capi-drawing-register-font-h.md#)o[](capi-drawing-register-font-h.md#)l[](capi-drawing-register-font-h.md#)l[](capi-drawing-register-font-h.md#)e[](capi-drawing-register-font-h.md#)c[](capi-drawing-register-font-h.md#)t[](capi-drawing-register-font-h.md#)i[](capi-drawing-register-font-h.md#)o[](capi-drawing-register-font-h.md#)n[](capi-drawing-register-font-h.md#)*[](capi-drawing-register-font-h.md#) | Indicates the pointer to an <b>OH_Drawing_FontCollection</b> object. |
| const char* fontFamily | Pointer to the family name of the font to register. |
| const char* familySrc | Pointer to the path of the font file to register. |

**Returns**:

| Type | Description |
| -- | -- |
| uint32_t | Returns 0 if the font is registered; returns 1 if the file does not exist; returns 2 if opening<br>     the file fails; returns 3 if reading the file fails; returns 4 if the file is not found; returns 5<br>     if the file size is not obtained; returns 9 if the file is damaged. |

### OH_Drawing_RegisterFontBuffer()

```c
uint32_t OH_Drawing_RegisterFontBuffer(OH_Drawing_FontCollection*, const char* fontFamily, uint8_t* fontBuffer, size_t length)
```

**Description**

Registers a font buffer with the font manager.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| [](capi-drawing-register-font-h.md#)O[](capi-drawing-register-font-h.md#)H[](capi-drawing-register-font-h.md#)_[](capi-drawing-register-font-h.md#)D[](capi-drawing-register-font-h.md#)r[](capi-drawing-register-font-h.md#)a[](capi-drawing-register-font-h.md#)w[](capi-drawing-register-font-h.md#)i[](capi-drawing-register-font-h.md#)n[](capi-drawing-register-font-h.md#)g[](capi-drawing-register-font-h.md#)_[](capi-drawing-register-font-h.md#)F[](capi-drawing-register-font-h.md#)o[](capi-drawing-register-font-h.md#)n[](capi-drawing-register-font-h.md#)t[](capi-drawing-register-font-h.md#)C[](capi-drawing-register-font-h.md#)o[](capi-drawing-register-font-h.md#)l[](capi-drawing-register-font-h.md#)l[](capi-drawing-register-font-h.md#)e[](capi-drawing-register-font-h.md#)c[](capi-drawing-register-font-h.md#)t[](capi-drawing-register-font-h.md#)i[](capi-drawing-register-font-h.md#)o[](capi-drawing-register-font-h.md#)n[](capi-drawing-register-font-h.md#)*[](capi-drawing-register-font-h.md#) | Indicates the pointer to an <b>OH_Drawing_FontCollection</b> object. |
| const char* fontFamily | Pointer to the family name of the font to register. |
| uint8_t* fontBuffer | Pointer to the buffer of the font file. |
| size_t length | Length of the font file. |

**Returns**:

| Type | Description |
| -- | -- |
| uint32_t | Returns 0 if the font is registered; returns 6 if the buffer size is zero; returns 7 if the font<br>     set is empty; returns 9 if the file is damaged. |

### OH_Drawing_RegisterFontByIndex()

```c
uint32_t OH_Drawing_RegisterFontByIndex(OH_Drawing_FontCollection* fontCollection, const char* fontFamily, const char* familySrc, uint32_t index)
```

**Description**

Registers a custom font using a TTC/OTC file.

**Since**: 23

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Drawing_FontCollection](capi-drawing-oh-drawing-fontcollection.md)* fontCollection | Pointer to an [OH_Drawing_FontCollection](capi-drawing-oh-drawing-fontcollection.md) object. |
| const char* fontFamily | Family name of the font to register. |
| const char* familySrc | Path of the font file to register. |
| uint32_t index | Index of the font in the TTC/OTC file. Set this parameter to **0** if the file is not in TTC/OTC format. |

**Returns**:

| Type | Description |
| -- | -- |
| uint32_t | Returns the execution result. 0: success; 1: file does not exist; 2: failed to open the file; <br>     3: failed to read the file; 4: failed to find the file; 5: failed to obtain the size; 8: <br>     fontCollection is null; 9: file is corrupted. |

### OH_Drawing_RegisterFontBufferByIndex()

```c
uint32_t OH_Drawing_RegisterFontBufferByIndex(OH_Drawing_FontCollection* fontCollection, const char* fontFamily, uint8_t* fontBuffer, size_t length, uint32_t index)
```

**Description**

Registers a font using the font buffer of a TTC/OTC file.

**Since**: 23

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Drawing_FontCollection](capi-drawing-oh-drawing-fontcollection.md)* fontCollection | Pointer to an [OH_Drawing_FontCollection](capi-drawing-oh-drawing-fontcollection.md) object. |
| const char* fontFamily | Family name of the font to register. |
| uint8_t* fontBuffer | Font buffer of the font file to register. |
| size_t length | Font buffer data length. |
| uint32_t index | Index of the font in the TTC/OTC file. Set this parameter to **0** if the file is not in TTC/OTC format. |

**Returns**:

| Type | Description |
| -- | -- |
| uint32_t | Returns the execution result. 0: success; 6: the font buffer pointer is null; 7: the font buffer<br>     data length is zero; 8: fontCollection is null; 9: file is corrupted. |

### OH_Drawing_UnregisterFont()

```c
uint32_t OH_Drawing_UnregisterFont(OH_Drawing_FontCollection* fontCollection, const char* fontFamily)
```

**Description**

Unregisters a custom font by font family name.Unregistering a font that is currently in use may lead to textrendering exceptions (such as garbled characters or missing glyphs).All typography objects using the unregisteredfont family should be destroyed and re-created.

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Drawing_FontCollection](capi-drawing-oh-drawing-fontcollection.md)* fontCollection | Pointer to an [OH_Drawing_FontCollection](capi-drawing-oh-drawing-fontcollection.md) object. |
| const char* fontFamily | Name of the font family to be unregistered. |

**Returns**:

| Type | Description |
| -- | -- |
| uint32_t | Returns the result code. 0: success; 8: invalid input parameter; 1: failure. |

### OH_Drawing_IsFontSupportedFromPath()

```c
bool OH_Drawing_IsFontSupportedFromPath(const char* path)
```

**Description**

Checks whether the system supports the font format of the specified path.

**Since**: 23

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* path | Absolute path of the font file. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | Returns true if the font is supported; returns false otherwise. |

### OH_Drawing_IsFontSupportedFromBuffer()

```c
bool OH_Drawing_IsFontSupportedFromBuffer(uint8_t* data, size_t dataLength)
```

**Description**

Checks whether the system supports the font format specified in the buffer.

**Since**: 23

**Parameters**:

| Parameter | Description |
| -- | -- |
| uint8_t* data | Pointer to the buffer that contains the font data. |
| size_t dataLength | Size of the font data, in bytes. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | Returns true if the font is supported; returns false otherwise. |


