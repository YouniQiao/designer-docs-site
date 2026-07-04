# inputmethod_cursor_info_capi.h

## Overview

Provides interfaces to manage the cursor information.

**Library**: libohinputmethod.so

**System capability**: SystemCapability.MiscServices.InputMethodFramework

**Since**: 12

**Related module**: [InputMethod](capi-inputmethod.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [InputMethod_CursorInfo](capi-inputmethod-inputmethod-cursorinfo.md) | InputMethod_CursorInfo | Define the InputMethod_CursorInfo structure type.The coordinates and width and height information of the cursor. |

### Function

| Name | Description |
| -- | -- |
| [InputMethod_CursorInfo *OH_CursorInfo_Create(double left, double top, double width, double height)](#oh_cursorinfo_create) | Create a new [InputMethod_CursorInfo](capi-inputmethod-inputmethod-cursorinfo.md) instance. |
| [void OH_CursorInfo_Destroy(InputMethod_CursorInfo *cursorInfo)](#oh_cursorinfo_destroy) | Destroy a [InputMethod_CursorInfo](capi-inputmethod-inputmethod-cursorinfo.md) instance. |
| [InputMethod_ErrorCode OH_CursorInfo_SetRect(InputMethod_CursorInfo *cursorInfo, double left, double top, double width, double height)](#oh_cursorinfo_setrect) | Set cursor info. |
| [InputMethod_ErrorCode OH_CursorInfo_GetRect(InputMethod_CursorInfo *cursorInfo, double *left, double *top, double *width, double *height)](#oh_cursorinfo_getrect) | Get cursor info. |

## Function description

### OH_CursorInfo_Create()

```c
InputMethod_CursorInfo *OH_CursorInfo_Create(double left, double top, double width, double height)
```

**Description**

Create a new [InputMethod_CursorInfo](capi-inputmethod-inputmethod-cursorinfo.md) instance.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| double left | The left point of the cursor and must be absolute coordinate of the physical screen. |
| double top | The top point of the cursor and must be absolute coordinate of the physical screen. |
| double width | The width of the cursor. |
| double height | The height of the cursor. |

**Returns**:

| Type | Description |
| -- | -- |
| [InputMethod_CursorInfo *](capi-inputmethod-inputmethod-cursorinfo.md) | If the creation succeeds, a pointer to the newly created [InputMethod_CursorInfo](capi-inputmethod-inputmethod-cursorinfo.md)<br> instance is returned. If the creation fails, NULL is returned, possible cause is insufficient memory. |

### OH_CursorInfo_Destroy()

```c
void OH_CursorInfo_Destroy(InputMethod_CursorInfo *cursorInfo)
```

**Description**

Destroy a [InputMethod_CursorInfo](capi-inputmethod-inputmethod-cursorinfo.md) instance.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [InputMethod_CursorInfo](capi-inputmethod-inputmethod-cursorinfo.md) *cursorInfo | Represents a pointer to an [InputMethod_CursorInfo](capi-inputmethod-inputmethod-cursorinfo.md) instance which will be destroyed. |

### OH_CursorInfo_SetRect()

```c
InputMethod_ErrorCode OH_CursorInfo_SetRect(InputMethod_CursorInfo *cursorInfo, double left, double top, double width, double height)
```

**Description**

Set cursor info.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [InputMethod_CursorInfo](capi-inputmethod-inputmethod-cursorinfo.md) *cursorInfo | Represents a pointer to an [InputMethod_CursorInfo](capi-inputmethod-inputmethod-cursorinfo.md) instance. |
| double left | The left point of the cursor and must be absolute coordinate of the physical screen. |
| double top | The top point of the cursor and must be absolute coordinate of the physical screen. |
| double width | The width of the cursor. |
| double height | The height of the cursor. |

**Returns**:

| Type | Description |
| -- | -- |
| [InputMethod_ErrorCode](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) | Returns a specific error code.<br>     [IME_ERR_OK](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) - success.<br>     [IME_ERR_NULL_POINTER](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) - unexpected null pointer.<br> Specific error codes can be referenced [InputMethod_ErrorCode](capi-inputmethod-types-capi-h.md#inputmethod_errorcode). |

### OH_CursorInfo_GetRect()

```c
InputMethod_ErrorCode OH_CursorInfo_GetRect(InputMethod_CursorInfo *cursorInfo, double *left, double *top, double *width, double *height)
```

**Description**

Get cursor info.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [InputMethod_CursorInfo](capi-inputmethod-inputmethod-cursorinfo.md) *cursorInfo | Represents a pointer to an [InputMethod_CursorInfo](capi-inputmethod-inputmethod-cursorinfo.md) instance. |
| double *left | The left point of the cursor and must be absolute coordinate of the physical screen. |
| double *top | The top point of the cursor and must be absolute coordinate of the physical screen. |
| double *width | The width of the cursor. |
| double *height | The height of the cursor. |

**Returns**:

| Type | Description |
| -- | -- |
| [InputMethod_ErrorCode](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) | Returns a specific error code.<br>     [IME_ERR_OK](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) - success.<br>     [IME_ERR_NULL_POINTER](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) - unexpected null pointer.<br> Specific error codes can be referenced [InputMethod_ErrorCode](capi-inputmethod-types-capi-h.md#inputmethod_errorcode). |


