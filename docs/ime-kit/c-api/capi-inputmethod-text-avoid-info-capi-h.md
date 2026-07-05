# inputmethod_text_avoid_info_capi.h

## Overview

Provides functions to manage text editor to avoid the keyboard.

**Library**: libohinputmethod.so

**System capability**: SystemCapability.MiscServices.InputMethodFramework

**Since**: 12

**Related module**: [InputMethod](capi-inputmethod.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [InputMethod_TextAvoidInfo](capi-inputmethod-inputmethod-textavoidinfo.md) | InputMethod_TextAvoidInfo | Define the InputMethod_TextAvoidInfo structure type.Information for text editor to avoid the keyboard. |

### Function

| Name | Description |
| -- | -- |
| [InputMethod_TextAvoidInfo *OH_TextAvoidInfo_Create(double positionY, double height)](#oh_textavoidinfo_create) | Create a new [InputMethod_TextAvoidInfo](capi-inputmethod-inputmethod-textavoidinfo.md) instance. |
| [void OH_TextAvoidInfo_Destroy(InputMethod_TextAvoidInfo *info)](#oh_textavoidinfo_destroy) | Destroy a [InputMethod_TextAvoidInfo](capi-inputmethod-inputmethod-textavoidinfo.md) instance. |
| [InputMethod_ErrorCode OH_TextAvoidInfo_SetPositionY(InputMethod_TextAvoidInfo *info, double positionY)](#oh_textavoidinfo_setpositiony) | Set positionY value into [InputMethod_TextAvoidInfo](capi-inputmethod-inputmethod-textavoidinfo.md). |
| [InputMethod_ErrorCode OH_TextAvoidInfo_SetHeight(InputMethod_TextAvoidInfo *info, double height)](#oh_textavoidinfo_setheight) | Set height value into [InputMethod_TextAvoidInfo](capi-inputmethod-inputmethod-textavoidinfo.md). |
| [InputMethod_ErrorCode OH_TextAvoidInfo_GetPositionY(InputMethod_TextAvoidInfo *info, double *positionY)](#oh_textavoidinfo_getpositiony) | Get positionY value from [InputMethod_TextAvoidInfo](capi-inputmethod-inputmethod-textavoidinfo.md). |
| [InputMethod_ErrorCode OH_TextAvoidInfo_GetHeight(InputMethod_TextAvoidInfo *info, double *height)](#oh_textavoidinfo_getheight) | Get height value into [InputMethod_TextAvoidInfo](capi-inputmethod-inputmethod-textavoidinfo.md). |

## Function description

### OH_TextAvoidInfo_Create()

```c
InputMethod_TextAvoidInfo *OH_TextAvoidInfo_Create(double positionY, double height)
```

**Description**

Create a new [InputMethod_TextAvoidInfo](capi-inputmethod-inputmethod-textavoidinfo.md) instance.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| double positionY | The y-coordinate of the avoid area. |
| double height | The height of the avoid area. |

**Returns**:

| Type | Description |
| -- | -- |
| [InputMethod_TextAvoidInfo *](capi-inputmethod-inputmethod-textavoidinfo.md) | If the creation succeeds, a pointer to the newly created [InputMethod_TextAvoidInfo](capi-inputmethod-inputmethod-textavoidinfo.md)<br> instance is returned. If the creation fails, NULL is returned, possible cause is insufficient memory. |

### OH_TextAvoidInfo_Destroy()

```c
void OH_TextAvoidInfo_Destroy(InputMethod_TextAvoidInfo *info)
```

**Description**

Destroy a [InputMethod_TextAvoidInfo](capi-inputmethod-inputmethod-textavoidinfo.md) instance.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [InputMethod_TextAvoidInfo](capi-inputmethod-inputmethod-textavoidinfo.md) *info | Represents a pointer to an [InputMethod_TextAvoidInfo](capi-inputmethod-inputmethod-textavoidinfo.md) instance which will be destroyed. |

### OH_TextAvoidInfo_SetPositionY()

```c
InputMethod_ErrorCode OH_TextAvoidInfo_SetPositionY(InputMethod_TextAvoidInfo *info, double positionY)
```

**Description**

Set positionY value into [InputMethod_TextAvoidInfo](capi-inputmethod-inputmethod-textavoidinfo.md).

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [InputMethod_TextAvoidInfo](capi-inputmethod-inputmethod-textavoidinfo.md) *info | Represents a pointer to an [InputMethod_TextAvoidInfo](capi-inputmethod-inputmethod-textavoidinfo.md) instance which will be set value. |
| double positionY | Represents positionY value. |

**Returns**:

| Type | Description |
| -- | -- |
| [InputMethod_ErrorCode](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) | Returns a specific error code.<br>     [IME_ERR_OK](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) - success.<br>     [IME_ERR_NULL_POINTER](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) - unexpected null pointer.<br> Specific error codes can be referenced [InputMethod_ErrorCode](capi-inputmethod-types-capi-h.md#inputmethod_errorcode). |

### OH_TextAvoidInfo_SetHeight()

```c
InputMethod_ErrorCode OH_TextAvoidInfo_SetHeight(InputMethod_TextAvoidInfo *info, double height)
```

**Description**

Set height value into [InputMethod_TextAvoidInfo](capi-inputmethod-inputmethod-textavoidinfo.md).

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [InputMethod_TextAvoidInfo](capi-inputmethod-inputmethod-textavoidinfo.md) *info | Represents a pointer to an [InputMethod_TextAvoidInfo](capi-inputmethod-inputmethod-textavoidinfo.md) instance which will be set value. |
| double height | Represents height value. |

**Returns**:

| Type | Description |
| -- | -- |
| [InputMethod_ErrorCode](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) | Returns a specific error code.<br>     [IME_ERR_OK](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) - success.<br>     [IME_ERR_NULL_POINTER](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) - unexpected null pointer.<br> Specific error codes can be referenced [InputMethod_ErrorCode](capi-inputmethod-types-capi-h.md#inputmethod_errorcode). |

### OH_TextAvoidInfo_GetPositionY()

```c
InputMethod_ErrorCode OH_TextAvoidInfo_GetPositionY(InputMethod_TextAvoidInfo *info, double *positionY)
```

**Description**

Get positionY value from [InputMethod_TextAvoidInfo](capi-inputmethod-inputmethod-textavoidinfo.md).

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [InputMethod_TextAvoidInfo](capi-inputmethod-inputmethod-textavoidinfo.md) *info | Represents a pointer to an [InputMethod_TextAvoidInfo](capi-inputmethod-inputmethod-textavoidinfo.md) instance which will be get value from. |
| double *positionY | Represents positionY value. |

**Returns**:

| Type | Description |
| -- | -- |
| [InputMethod_ErrorCode](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) | Returns a specific error code.<br>     [IME_ERR_OK](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) - success.<br>     [IME_ERR_NULL_POINTER](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) - unexpected null pointer.<br> Specific error codes can be referenced [InputMethod_ErrorCode](capi-inputmethod-types-capi-h.md#inputmethod_errorcode). |

### OH_TextAvoidInfo_GetHeight()

```c
InputMethod_ErrorCode OH_TextAvoidInfo_GetHeight(InputMethod_TextAvoidInfo *info, double *height)
```

**Description**

Get height value into [InputMethod_TextAvoidInfo](capi-inputmethod-inputmethod-textavoidinfo.md).

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [InputMethod_TextAvoidInfo](capi-inputmethod-inputmethod-textavoidinfo.md) *info | Represents a pointer to an [InputMethod_TextAvoidInfo](capi-inputmethod-inputmethod-textavoidinfo.md) instance which will be get value from. |
| double *height | Represents height value. |

**Returns**:

| Type | Description |
| -- | -- |
| [InputMethod_ErrorCode](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) | Returns a specific error code.<br>     [IME_ERR_OK](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) - success.<br>     [IME_ERR_NULL_POINTER](capi-inputmethod-types-capi-h.md#inputmethod_errorcode) - unexpected null pointer.<br> Specific error codes can be referenced [InputMethod_ErrorCode](capi-inputmethod-types-capi-h.md#inputmethod_errorcode). |


