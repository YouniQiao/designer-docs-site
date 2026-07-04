# image_animator.h

## Overview

Defines the common types and APIs for the ImageAnimator component.

**Library**: libace_ndk.z.so

**System capability**: SystemCapability.ArkUI.ArkUI.Full

**Since**: 12

**Related module**: [ArkUI_NativeModule](capi-arkui-nativemodule.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [ArkUI_ImageAnimatorFrameInfo](capi-arkui-nativemodule-arkui-imageanimatorframeinfo.md) | ArkUI_ImageAnimatorFrameInfo | Defines the image frame. |

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [ArkUI_AnimationStatus](#arkui_animationstatus) | ArkUI_AnimationStatus | Defines the playback status for the image animator. |

### Function

| Name | Description |
| -- | -- |
| [ArkUI_ImageAnimatorFrameInfo* OH_ArkUI_ImageAnimatorFrameInfo_CreateFromString(char* src)](#oh_arkui_imageanimatorframeinfo_createfromstring) | Create a image frame from the image path. |
| [ArkUI_ImageAnimatorFrameInfo* OH_ArkUI_ImageAnimatorFrameInfo_CreateFromDrawableDescriptor(ArkUI_DrawableDescriptor* drawable)](#oh_arkui_imageanimatorframeinfo_createfromdrawabledescriptor) | Create a image frame from the drawable descriptor. |
| [void OH_ArkUI_ImageAnimatorFrameInfo_Dispose(ArkUI_ImageAnimatorFrameInfo* imageInfo)](#oh_arkui_imageanimatorframeinfo_dispose) | Destroy the pointer to the image frame. |
| [void OH_ArkUI_ImageAnimatorFrameInfo_SetWidth(ArkUI_ImageAnimatorFrameInfo* imageInfo, int32_t width)](#oh_arkui_imageanimatorframeinfo_setwidth) | Set the width of the image frame. |
| [int32_t OH_ArkUI_ImageAnimatorFrameInfo_GetWidth(ArkUI_ImageAnimatorFrameInfo* imageInfo)](#oh_arkui_imageanimatorframeinfo_getwidth) | Get the width of the image frame. |
| [void OH_ArkUI_ImageAnimatorFrameInfo_SetHeight(ArkUI_ImageAnimatorFrameInfo* imageInfo, int32_t height)](#oh_arkui_imageanimatorframeinfo_setheight) | Set the height of the image frame. |
| [int32_t OH_ArkUI_ImageAnimatorFrameInfo_GetHeight(ArkUI_ImageAnimatorFrameInfo* imageInfo)](#oh_arkui_imageanimatorframeinfo_getheight) | Get the height of the image frame. |
| [void OH_ArkUI_ImageAnimatorFrameInfo_SetTop(ArkUI_ImageAnimatorFrameInfo* imageInfo, int32_t top)](#oh_arkui_imageanimatorframeinfo_settop) | Set the vertical coordinate of the image relative to the upper left corner of the widget. |
| [int32_t OH_ArkUI_ImageAnimatorFrameInfo_GetTop(ArkUI_ImageAnimatorFrameInfo* imageInfo)](#oh_arkui_imageanimatorframeinfo_gettop) | Get the vertical coordinate of the image relative to the upper left corner of the widget. |
| [void OH_ArkUI_ImageAnimatorFrameInfo_SetLeft(ArkUI_ImageAnimatorFrameInfo* imageInfo, int32_t left)](#oh_arkui_imageanimatorframeinfo_setleft) | Set the horizontal coordinate of the image relative to the upper left corner of the widget. |
| [int32_t OH_ArkUI_ImageAnimatorFrameInfo_GetLeft(ArkUI_ImageAnimatorFrameInfo* imageInfo)](#oh_arkui_imageanimatorframeinfo_getleft) | Get the horizontal coordinate of the image relative to the upper left corner of the widget. |
| [void OH_ArkUI_ImageAnimatorFrameInfo_SetDuration(ArkUI_ImageAnimatorFrameInfo* imageInfo, int32_t duration)](#oh_arkui_imageanimatorframeinfo_setduration) | Set the playback duration of the image frame. |
| [int32_t OH_ArkUI_ImageAnimatorFrameInfo_GetDuration(ArkUI_ImageAnimatorFrameInfo* imageInfo)](#oh_arkui_imageanimatorframeinfo_getduration) | Get the playback duration of the image frame. |

## Enum type description

### ArkUI_AnimationStatus

```c
enum ArkUI_AnimationStatus
```

**Description**

Defines the playback status for the image animator.

**Since**: 12

| Enum item | Description |
| -- | -- |
| ARKUI_ANIMATION_STATUS_INITIAL = 0 |  |
| ARKUI_ANIMATION_STATUS_RUNNING = 1 |  |
| ARKUI_ANIMATION_STATUS_PAUSED = 2 |  |
| ARKUI_ANIMATION_STATUS_STOPPED = 3 |  |


## Function description

### OH_ArkUI_ImageAnimatorFrameInfo_CreateFromString()

```c
ArkUI_ImageAnimatorFrameInfo* OH_ArkUI_ImageAnimatorFrameInfo_CreateFromString(char* src)
```

**Description**

Create a image frame from the image path.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| char* src | Indicates the image path. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_ImageAnimatorFrameInfo*](capi-arkui-nativemodule-arkui-imageanimatorframeinfo.md) | Returns the pointer to the image frame object.<br> If a null pointer is returned, the object fails to be created. The possible cause is that<br> the src parameter is abnormal, for example, the pointer is null. |

### OH_ArkUI_ImageAnimatorFrameInfo_CreateFromDrawableDescriptor()

```c
ArkUI_ImageAnimatorFrameInfo* OH_ArkUI_ImageAnimatorFrameInfo_CreateFromDrawableDescriptor(ArkUI_DrawableDescriptor* drawable)
```

**Description**

Create a image frame from the drawable descriptor.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_DrawableDescriptor](capi-arkui-nativemodule-arkui-drawabledescriptor.md)* drawable | Indicates the pointer to the drawable descriptor. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_ImageAnimatorFrameInfo*](capi-arkui-nativemodule-arkui-imageanimatorframeinfo.md) | Returns the pointer to the image frame object. If a null pointer is returned, the object fails to be created.<br>     The possible cause is that the drawable parameter is abnormal, for example, the pointer is null. |

### OH_ArkUI_ImageAnimatorFrameInfo_Dispose()

```c
void OH_ArkUI_ImageAnimatorFrameInfo_Dispose(ArkUI_ImageAnimatorFrameInfo* imageInfo)
```

**Description**

Destroy the pointer to the image frame.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ImageAnimatorFrameInfo](capi-arkui-nativemodule-arkui-imageanimatorframeinfo.md)* imageInfo | Indicates the pointer to the image frame. |

### OH_ArkUI_ImageAnimatorFrameInfo_SetWidth()

```c
void OH_ArkUI_ImageAnimatorFrameInfo_SetWidth(ArkUI_ImageAnimatorFrameInfo* imageInfo, int32_t width)
```

**Description**

Set the width of the image frame.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ImageAnimatorFrameInfo](capi-arkui-nativemodule-arkui-imageanimatorframeinfo.md)* imageInfo | Indicates the pointer to the image frame. |
| int32_t width | Indicates the width of the image frame, and the unit is PX. |

### OH_ArkUI_ImageAnimatorFrameInfo_GetWidth()

```c
int32_t OH_ArkUI_ImageAnimatorFrameInfo_GetWidth(ArkUI_ImageAnimatorFrameInfo* imageInfo)
```

**Description**

Get the width of the image frame.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ImageAnimatorFrameInfo](capi-arkui-nativemodule-arkui-imageanimatorframeinfo.md)* imageInfo | Indicates the pointer to the image frame. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Return the width of the image frame, and the unit is PX. Return 0 when the imageInfo is null. |

### OH_ArkUI_ImageAnimatorFrameInfo_SetHeight()

```c
void OH_ArkUI_ImageAnimatorFrameInfo_SetHeight(ArkUI_ImageAnimatorFrameInfo* imageInfo, int32_t height)
```

**Description**

Set the height of the image frame.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ImageAnimatorFrameInfo](capi-arkui-nativemodule-arkui-imageanimatorframeinfo.md)* imageInfo | Indicates the pointer to the image frame. |
| int32_t height | Indicates the height of the image frame, and the unit is PX. |

### OH_ArkUI_ImageAnimatorFrameInfo_GetHeight()

```c
int32_t OH_ArkUI_ImageAnimatorFrameInfo_GetHeight(ArkUI_ImageAnimatorFrameInfo* imageInfo)
```

**Description**

Get the height of the image frame.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ImageAnimatorFrameInfo](capi-arkui-nativemodule-arkui-imageanimatorframeinfo.md)* imageInfo | Indicates the pointer to the image frame. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Return the height of the image frame, and the unit is PX. Return 0 when the imageInfo is null. |

### OH_ArkUI_ImageAnimatorFrameInfo_SetTop()

```c
void OH_ArkUI_ImageAnimatorFrameInfo_SetTop(ArkUI_ImageAnimatorFrameInfo* imageInfo, int32_t top)
```

**Description**

Set the vertical coordinate of the image relative to the upper left corner of the widget.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ImageAnimatorFrameInfo](capi-arkui-nativemodule-arkui-imageanimatorframeinfo.md)* imageInfo | Indicates the pointer to the image frame. |
| int32_t top | Indicates the vertical coordinate of the image relative to the upper left corner of the widget,and the unit is PX. |

### OH_ArkUI_ImageAnimatorFrameInfo_GetTop()

```c
int32_t OH_ArkUI_ImageAnimatorFrameInfo_GetTop(ArkUI_ImageAnimatorFrameInfo* imageInfo)
```

**Description**

Get the vertical coordinate of the image relative to the upper left corner of the widget.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ImageAnimatorFrameInfo](capi-arkui-nativemodule-arkui-imageanimatorframeinfo.md)* imageInfo | Indicates the pointer to the image frame. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the vertical coordinate of the image relative to the upper left corner of the widget,<br> and the unit is PX. Return 0 when the imageInfo is null. |

### OH_ArkUI_ImageAnimatorFrameInfo_SetLeft()

```c
void OH_ArkUI_ImageAnimatorFrameInfo_SetLeft(ArkUI_ImageAnimatorFrameInfo* imageInfo, int32_t left)
```

**Description**

Set the horizontal coordinate of the image relative to the upper left corner of the widget.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ImageAnimatorFrameInfo](capi-arkui-nativemodule-arkui-imageanimatorframeinfo.md)* imageInfo | Indicates the pointer to the image frame. |
| int32_t left | Indicates the horizontal coordinate of the image relative to the upper left corner of the widget,and the unit is PX. |

### OH_ArkUI_ImageAnimatorFrameInfo_GetLeft()

```c
int32_t OH_ArkUI_ImageAnimatorFrameInfo_GetLeft(ArkUI_ImageAnimatorFrameInfo* imageInfo)
```

**Description**

Get the horizontal coordinate of the image relative to the upper left corner of the widget.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ImageAnimatorFrameInfo](capi-arkui-nativemodule-arkui-imageanimatorframeinfo.md)* imageInfo | Indicates the pointer to the image frame. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the horizontal coordinate of the image relative to the upper left corner of the widget,<br> and the unit is PX. Return 0 when the imageInfo is null. |

### OH_ArkUI_ImageAnimatorFrameInfo_SetDuration()

```c
void OH_ArkUI_ImageAnimatorFrameInfo_SetDuration(ArkUI_ImageAnimatorFrameInfo* imageInfo, int32_t duration)
```

**Description**

Set the playback duration of the image frame.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ImageAnimatorFrameInfo](capi-arkui-nativemodule-arkui-imageanimatorframeinfo.md)* imageInfo | Indicates the pointer to the image frame. |
| int32_t duration | Indicates the playback duration of each image frame, and the unit is milliseconds. |

### OH_ArkUI_ImageAnimatorFrameInfo_GetDuration()

```c
int32_t OH_ArkUI_ImageAnimatorFrameInfo_GetDuration(ArkUI_ImageAnimatorFrameInfo* imageInfo)
```

**Description**

Get the playback duration of the image frame.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ImageAnimatorFrameInfo](capi-arkui-nativemodule-arkui-imageanimatorframeinfo.md)* imageInfo | Indicates the pointer to the image frame. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the playback duration of the image frame, and the unit is milliseconds.<br> Return 0 when the imageInfo is null. |


