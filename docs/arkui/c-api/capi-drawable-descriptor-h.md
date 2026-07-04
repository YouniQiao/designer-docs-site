# drawable_descriptor.h

## Overview

Defines theNativeDrawableDescriptor for the native module.

**Library**: libace_ndk.z.so

**System capability**: SystemCapability.ArkUI.ArkUI.Full

**Since**: 12

**Related module**: [ArkUI_NativeModule](capi-arkui-nativemodule.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [ArkUI_DrawableDescriptor](capi-arkui-nativemodule-arkui-drawabledescriptor.md) | ArkUI_DrawableDescriptor | Defines the drawable descriptor. |
| [OH_PixelmapNative](capi-arkui-nativemodule-oh-pixelmapnative.md) | - | Introduces the native pixel map information defined by Image Kit. |
| [OH_PixelmapNative*](capi-arkui-nativemodule-oh-pixelmapnative8h.md) | OH_PixelmapNativeHandle | Defines the pointer to OH_PixelmapNative. |
| [ArkUI_Node](capi-arkui-nativemodule-arkui-node.md) | - | Defines the ArkUI native component object. |
| [ArkUI_Node*](capi-arkui-nativemodule-arkui-node8h.md) | ArkUI_NodeHandle | Defines the pointer to the ArkUI native component object. |
| [ArkUI_DrawableDescriptor_AnimationController](capi-arkui-nativemodule-arkui-drawabledescriptor-animationcontroller.md) | ArkUI_DrawableDescriptor_AnimationController | Defines the animation controller of arkui drawable descriptor. |

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [DrawableDescriptor_AnimationStatus](#drawabledescriptor_animationstatus) | DrawableDescriptor_AnimationStatus | Defines the animation status of the drawable descriptor. |
| [DrawableDescriptor_AnimationStopMode](#drawabledescriptor_animationstopmode) | DrawableDescriptor_AnimationStopMode | Defines the animation stop mode of the drawable descriptor. |

### Function

| Name | Description |
| -- | -- |
| [ArkUI_DrawableDescriptor* OH_ArkUI_DrawableDescriptor_CreateFromPixelMap(OH_PixelmapNativeHandle pixelMap)](#oh_arkui_drawabledescriptor_createfrompixelmap) | Creates a DrawableDescriptor from a Pixelmap. |
| [ArkUI_DrawableDescriptor* OH_ArkUI_DrawableDescriptor_CreateFromAnimatedPixelMap(OH_PixelmapNativeHandle* array, int32_t size)](#oh_arkui_drawabledescriptor_createfromanimatedpixelmap) | Creates a DrawableDescriptor from a Pixelmap array. |
| [void OH_ArkUI_DrawableDescriptor_Dispose(ArkUI_DrawableDescriptor* drawableDescriptor)](#oh_arkui_drawabledescriptor_dispose) | Destroys the pointer to the drawableDescriptor. |
| [OH_PixelmapNativeHandle OH_ArkUI_DrawableDescriptor_GetStaticPixelMap(ArkUI_DrawableDescriptor* drawableDescriptor)](#oh_arkui_drawabledescriptor_getstaticpixelmap) | Obtains the Pixelmap object. |
| [OH_PixelmapNativeHandle* OH_ArkUI_DrawableDescriptor_GetAnimatedPixelMapArray(ArkUI_DrawableDescriptor* drawableDescriptor)](#oh_arkui_drawabledescriptor_getanimatedpixelmaparray) | Obtains the Pixelmap array used to play the animation. |
| [int32_t OH_ArkUI_DrawableDescriptor_GetAnimatedPixelMapArraySize(ArkUI_DrawableDescriptor* drawableDescriptor)](#oh_arkui_drawabledescriptor_getanimatedpixelmaparraysize) | Obtains the size of the Pixelmap array used to play the animation. |
| [void OH_ArkUI_DrawableDescriptor_SetAnimationDuration(ArkUI_DrawableDescriptor* drawableDescriptor, int32_t duration)](#oh_arkui_drawabledescriptor_setanimationduration) | Sets the total playback duration. |
| [int32_t OH_ArkUI_DrawableDescriptor_GetAnimationDuration(ArkUI_DrawableDescriptor* drawableDescriptor)](#oh_arkui_drawabledescriptor_getanimationduration) | Obtains the total playback duration. |
| [void OH_ArkUI_DrawableDescriptor_SetAnimationIteration(ArkUI_DrawableDescriptor* drawableDescriptor, int32_t iteration)](#oh_arkui_drawabledescriptor_setanimationiteration) | Sets the number of playback times. |
| [int32_t OH_ArkUI_DrawableDescriptor_GetAnimationIteration(ArkUI_DrawableDescriptor* drawableDescriptor)](#oh_arkui_drawabledescriptor_getanimationiteration) | Obtains the number of playback times. |
| [int32_t OH_ArkUI_DrawableDescriptor_SetAnimationFrameDurations(ArkUI_DrawableDescriptor* drawableDescriptor, uint32_t* durations, size_t size)](#oh_arkui_drawabledescriptor_setanimationframedurations) | Sets the frame duration array. |
| [int32_t OH_ArkUI_DrawableDescriptor_GetAnimationFrameDurations(ArkUI_DrawableDescriptor* drawableDescriptor, uint32_t* durations, size_t* size)](#oh_arkui_drawabledescriptor_getanimationframedurations) | Obtains the frame duration array. |
| [int32_t OH_ArkUI_DrawableDescriptor_SetAnimationAutoPlay(ArkUI_DrawableDescriptor* drawableDescriptor, uint32_t autoPlay)](#oh_arkui_drawabledescriptor_setanimationautoplay) | Sets whether to play the animation automatically. |
| [int32_t OH_ArkUI_DrawableDescriptor_GetAnimationAutoPlay(ArkUI_DrawableDescriptor* drawableDescriptor, uint32_t* autoPlay)](#oh_arkui_drawabledescriptor_getanimationautoplay) | Obtains whether to play the animation automatically. |
| [int32_t OH_ArkUI_DrawableDescriptor_SetAnimationStopMode(ArkUI_DrawableDescriptor* drawableDescriptor, DrawableDescriptor_AnimationStopMode mode)](#oh_arkui_drawabledescriptor_setanimationstopmode) | Sets the stop mode of animation. |
| [int32_t OH_ArkUI_DrawableDescriptor_GetAnimationStopMode(const ArkUI_DrawableDescriptor* drawableDescriptor, DrawableDescriptor_AnimationStopMode* mode)](#oh_arkui_drawabledescriptor_getanimationstopmode) | Obtains the stop mode of animation. |
| [int32_t OH_ArkUI_DrawableDescriptor_CreateAnimationController(ArkUI_DrawableDescriptor *drawableDescriptor, ArkUI_NodeHandle node, ArkUI_DrawableDescriptor_AnimationController** controller)](#oh_arkui_drawabledescriptor_createanimationcontroller) | Obtains the animation controller. |
| [void OH_ArkUI_DrawableDescriptor_DisposeAnimationController(ArkUI_DrawableDescriptor_AnimationController* controller)](#oh_arkui_drawabledescriptor_disposeanimationcontroller) | Releases the animation controller. |
| [int32_t OH_ArkUI_DrawableDescriptor_StartAnimation(ArkUI_DrawableDescriptor_AnimationController* controller)](#oh_arkui_drawabledescriptor_startanimation) | Starts the animation from first frame. |
| [int32_t OH_ArkUI_DrawableDescriptor_StopAnimation(ArkUI_DrawableDescriptor_AnimationController* controller)](#oh_arkui_drawabledescriptor_stopanimation) | Stops the animation and back to first frame. |
| [int32_t OH_ArkUI_DrawableDescriptor_ResumeAnimation(ArkUI_DrawableDescriptor_AnimationController* controller)](#oh_arkui_drawabledescriptor_resumeanimation) | Resumes the animation at the current frame. |
| [int32_t OH_ArkUI_DrawableDescriptor_PauseAnimation(ArkUI_DrawableDescriptor_AnimationController* controller)](#oh_arkui_drawabledescriptor_pauseanimation) | Pauses the animation at the current frame. |
| [int32_t OH_ArkUI_DrawableDescriptor_GetAnimationStatus(ArkUI_DrawableDescriptor_AnimationController* controller, DrawableDescriptor_AnimationStatus* status)](#oh_arkui_drawabledescriptor_getanimationstatus) | Obtains the animation playback status. |

## Enum type description

### DrawableDescriptor_AnimationStatus

```c
enum DrawableDescriptor_AnimationStatus
```

**Description**

Defines the animation status of the drawable descriptor.

**Since**: 22

| Enum item | Description |
| -- | -- |
| DRAWABLE_DESCRIPTOR_ANIMATION_STATUS_INITIAL = 0 | animation is initial. |
| DRAWABLE_DESCRIPTOR_ANIMATION_STATUS_RUNNING = 1 | animation is playing. |
| DRAWABLE_DESCRIPTOR_ANIMATION_STATUS_PAUSED = 2 | animation is paused. |
| DRAWABLE_DESCRIPTOR_ANIMATION_STATUS_STOPPED = 3 | animation is stopped. |

### DrawableDescriptor_AnimationStopMode

```c
enum DrawableDescriptor_AnimationStopMode
```

**Description**

Defines the animation stop mode of the drawable descriptor.

**Since**: 24

| Enum item | Description |
| -- | -- |
| DRAWABLE_DESCRIPTOR_ANIMATION_FIRST_FRAME = 0 |  |
| DRAWABLE_DESCRIPTOR_ANIMATION_LAST_FRAME = 1 |  |


## Function description

### OH_ArkUI_DrawableDescriptor_CreateFromPixelMap()

```c
ArkUI_DrawableDescriptor* OH_ArkUI_DrawableDescriptor_CreateFromPixelMap(OH_PixelmapNativeHandle pixelMap)
```

**Description**

Creates a DrawableDescriptor from a Pixelmap.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PixelmapNativeHandle](capi-arkui-nativemodule-oh-pixelmapnative8h.md) pixelMap | Indicates the pointer to a Pixelmap |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_DrawableDescriptor*](capi-arkui-nativemodule-arkui-drawabledescriptor.md) | Returns the pointer to the drawableDescriptor. |

### OH_ArkUI_DrawableDescriptor_CreateFromAnimatedPixelMap()

```c
ArkUI_DrawableDescriptor* OH_ArkUI_DrawableDescriptor_CreateFromAnimatedPixelMap(OH_PixelmapNativeHandle* array, int32_t size)
```

**Description**

Creates a DrawableDescriptor from a Pixelmap array.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_PixelmapNativeHandle](capi-arkui-nativemodule-oh-pixelmapnative8h.md)* array | Indicates the pointer to a Pixelmap array. |
| int32_t size | Indicates the size of the Pixelmap array. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_DrawableDescriptor*](capi-arkui-nativemodule-arkui-drawabledescriptor.md) | Returns the pointer to the drawableDescriptor. |

### OH_ArkUI_DrawableDescriptor_Dispose()

```c
void OH_ArkUI_DrawableDescriptor_Dispose(ArkUI_DrawableDescriptor* drawableDescriptor)
```

**Description**

Destroys the pointer to the drawableDescriptor.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_DrawableDescriptor](capi-arkui-nativemodule-arkui-drawabledescriptor.md)* drawableDescriptor | Indicates the pointer to the drawableDescriptor. |

### OH_ArkUI_DrawableDescriptor_GetStaticPixelMap()

```c
OH_PixelmapNativeHandle OH_ArkUI_DrawableDescriptor_GetStaticPixelMap(ArkUI_DrawableDescriptor* drawableDescriptor)
```

**Description**

Obtains the Pixelmap object.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_DrawableDescriptor](capi-arkui-nativemodule-arkui-drawabledescriptor.md)* drawableDescriptor | Indicates the pointer to the drawableDescriptor. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_PixelmapNativeHandle](capi-arkui-nativemodule-oh-pixelmapnative8h.md) | Returns the pointer to the PixelMap. |

### OH_ArkUI_DrawableDescriptor_GetAnimatedPixelMapArray()

```c
OH_PixelmapNativeHandle* OH_ArkUI_DrawableDescriptor_GetAnimatedPixelMapArray(ArkUI_DrawableDescriptor* drawableDescriptor)
```

**Description**

Obtains the Pixelmap array used to play the animation.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_DrawableDescriptor](capi-arkui-nativemodule-arkui-drawabledescriptor.md)* drawableDescriptor | Indicates the pointer to the drawableDescriptor. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_PixelmapNativeHandle*](capi-arkui-nativemodule-oh-pixelmapnative8h.md) | Returns the pointer to the PixelMap array. |

### OH_ArkUI_DrawableDescriptor_GetAnimatedPixelMapArraySize()

```c
int32_t OH_ArkUI_DrawableDescriptor_GetAnimatedPixelMapArraySize(ArkUI_DrawableDescriptor* drawableDescriptor)
```

**Description**

Obtains the size of the Pixelmap array used to play the animation.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_DrawableDescriptor](capi-arkui-nativemodule-arkui-drawabledescriptor.md)* drawableDescriptor | Indicates the pointer to the drawableDescriptor. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the size of the Pixelmap array. |

### OH_ArkUI_DrawableDescriptor_SetAnimationDuration()

```c
void OH_ArkUI_DrawableDescriptor_SetAnimationDuration(ArkUI_DrawableDescriptor* drawableDescriptor, int32_t duration)
```

**Description**

Sets the total playback duration.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_DrawableDescriptor](capi-arkui-nativemodule-arkui-drawabledescriptor.md)* drawableDescriptor | Indicates the pointer to the drawableDescriptor. |
| int32_t duration | Indicates the total playback duration. The unit is millisecond. |

### OH_ArkUI_DrawableDescriptor_GetAnimationDuration()

```c
int32_t OH_ArkUI_DrawableDescriptor_GetAnimationDuration(ArkUI_DrawableDescriptor* drawableDescriptor)
```

**Description**

Obtains the total playback duration.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_DrawableDescriptor](capi-arkui-nativemodule-arkui-drawabledescriptor.md)* drawableDescriptor | Indicates the pointer to the drawableDescriptor. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Return the total playback duration. The unit is millisecond. |

### OH_ArkUI_DrawableDescriptor_SetAnimationIteration()

```c
void OH_ArkUI_DrawableDescriptor_SetAnimationIteration(ArkUI_DrawableDescriptor* drawableDescriptor, int32_t iteration)
```

**Description**

Sets the number of playback times.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_DrawableDescriptor](capi-arkui-nativemodule-arkui-drawabledescriptor.md)* drawableDescriptor | Indicates the pointer to the drawableDescriptor. |
| int32_t iteration | Indicates the number of playback times. |

### OH_ArkUI_DrawableDescriptor_GetAnimationIteration()

```c
int32_t OH_ArkUI_DrawableDescriptor_GetAnimationIteration(ArkUI_DrawableDescriptor* drawableDescriptor)
```

**Description**

Obtains the number of playback times.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_DrawableDescriptor](capi-arkui-nativemodule-arkui-drawabledescriptor.md)* drawableDescriptor | Indicates the pointer to the drawableDescriptor. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the number of playback times. |

### OH_ArkUI_DrawableDescriptor_SetAnimationFrameDurations()

```c
int32_t OH_ArkUI_DrawableDescriptor_SetAnimationFrameDurations(ArkUI_DrawableDescriptor* drawableDescriptor, uint32_t* durations, size_t size)
```

**Description**

Sets the frame duration array.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_DrawableDescriptor](capi-arkui-nativemodule-arkui-drawabledescriptor.md)* drawableDescriptor | Indicates the pointer to the drawableDescriptor. |
| uint32_t* durations | Indicates the pointer to the frame duration array. |
| size_t size | Indicates the size of the frame duration array. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns {@link ARKUI_ERROR_CODE_NO_ERROR} if the operation is successful;<br>         Returns {@link ARKUI_ERROR_CODE_PARAM_INVALID} if a parameter error occurs. |

### OH_ArkUI_DrawableDescriptor_GetAnimationFrameDurations()

```c
int32_t OH_ArkUI_DrawableDescriptor_GetAnimationFrameDurations(ArkUI_DrawableDescriptor* drawableDescriptor, uint32_t* durations, size_t* size)
```

**Description**

Obtains the frame duration array.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_DrawableDescriptor](capi-arkui-nativemodule-arkui-drawabledescriptor.md)* drawableDescriptor | Indicates the pointer to the drawableDescriptor. |
| uint32_t* durations | Indicates the pointer to the frame duration array. |
| size_t* size | Indicates the size of the frame duration array. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns {@link ARKUI_ERROR_CODE_NO_ERROR} if the operation is successful;<br>         Returns {@link ARKUI_ERROR_CODE_PARAM_INVALID} if a parameter error occurs. |

### OH_ArkUI_DrawableDescriptor_SetAnimationAutoPlay()

```c
int32_t OH_ArkUI_DrawableDescriptor_SetAnimationAutoPlay(ArkUI_DrawableDescriptor* drawableDescriptor, uint32_t autoPlay)
```

**Description**

Sets whether to play the animation automatically.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_DrawableDescriptor](capi-arkui-nativemodule-arkui-drawabledescriptor.md)* drawableDescriptor | Indicates the pointer to the drawableDescriptor. |
| uint32_t autoPlay | Indicates whether to play the animation automatically.default value is 1, which means to play the animation automatically.value 0 means not to play the animation automatically. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns {@link ARKUI_ERROR_CODE_NO_ERROR} if the operation is successful;<br>         Returns {@link ARKUI_ERROR_CODE_PARAM_INVALID} if a parameter error occurs. |

### OH_ArkUI_DrawableDescriptor_GetAnimationAutoPlay()

```c
int32_t OH_ArkUI_DrawableDescriptor_GetAnimationAutoPlay(ArkUI_DrawableDescriptor* drawableDescriptor, uint32_t* autoPlay)
```

**Description**

Obtains whether to play the animation automatically.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_DrawableDescriptor](capi-arkui-nativemodule-arkui-drawabledescriptor.md)* drawableDescriptor | Indicates the pointer to the drawableDescriptor. |
| uint32_t* autoPlay | Indicates whether to play the animation automatically. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns {@link ARKUI_ERROR_CODE_NO_ERROR} if the operation is successful;<br>         Returns {@link ARKUI_ERROR_CODE_PARAM_INVALID} if a parameter error occurs. |

### OH_ArkUI_DrawableDescriptor_SetAnimationStopMode()

```c
int32_t OH_ArkUI_DrawableDescriptor_SetAnimationStopMode(ArkUI_DrawableDescriptor* drawableDescriptor, DrawableDescriptor_AnimationStopMode mode)
```

**Description**

Sets the stop mode of animation.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_DrawableDescriptor](capi-arkui-nativemodule-arkui-drawabledescriptor.md)* drawableDescriptor | Indicates the pointer to the drawableDescriptor. |
| [DrawableDescriptor_AnimationStopMode](capi-drawable-descriptor-h.md#drawabledescriptor_animationstopmode) mode | Indicates animation stop modeThe default value is 0, which means stop at the first frame,value 1 means stop at the last frame. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns {@link ARKUI_ERROR_CODE_NO_ERROR} if the operation is successful;<br>         Returns {@link ARKUI_ERROR_CODE_PARAM_INVALID} if a parameter error occurs. |

### OH_ArkUI_DrawableDescriptor_GetAnimationStopMode()

```c
int32_t OH_ArkUI_DrawableDescriptor_GetAnimationStopMode(const ArkUI_DrawableDescriptor* drawableDescriptor, DrawableDescriptor_AnimationStopMode* mode)
```

**Description**

Obtains the stop mode of animation.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_DrawableDescriptor](capi-arkui-nativemodule-arkui-drawabledescriptor.md)* drawableDescriptor | Indicates the pointer to the drawableDescriptor. |
| [DrawableDescriptor_AnimationStopMode](capi-drawable-descriptor-h.md#drawabledescriptor_animationstopmode)* mode | Indicates animation stop mode |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns {@link ARKUI_ERROR_CODE_NO_ERROR} if the operation is successful;<br>         Returns {@link ARKUI_ERROR_CODE_PARAM_INVALID} if a parameter error occurs. |

### OH_ArkUI_DrawableDescriptor_CreateAnimationController()

```c
int32_t OH_ArkUI_DrawableDescriptor_CreateAnimationController(ArkUI_DrawableDescriptor *drawableDescriptor, ArkUI_NodeHandle node, ArkUI_DrawableDescriptor_AnimationController** controller)
```

**Description**

Obtains the animation controller.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_DrawableDescriptor](capi-arkui-nativemodule-arkui-drawabledescriptor.md) *drawableDescriptor | Indicates the pointer to the drawableDescriptor. |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the node handle. |
| [ArkUI_DrawableDescriptor_AnimationController](capi-arkui-nativemodule-arkui-drawabledescriptor-animationcontroller.md)** controller | Indicates the pointer to the animation controller. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns {@link ARKUI_ERROR_CODE_NO_ERROR} if the operation is successful;<br>         Returns {@link ARKUI_ERROR_CODE_PARAM_INVALID} if a parameter error occurs. |

### OH_ArkUI_DrawableDescriptor_DisposeAnimationController()

```c
void OH_ArkUI_DrawableDescriptor_DisposeAnimationController(ArkUI_DrawableDescriptor_AnimationController* controller)
```

**Description**

Releases the animation controller.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_DrawableDescriptor_AnimationController](capi-arkui-nativemodule-arkui-drawabledescriptor-animationcontroller.md)* controller | Indicates the pointer to the animation controller. |

### OH_ArkUI_DrawableDescriptor_StartAnimation()

```c
int32_t OH_ArkUI_DrawableDescriptor_StartAnimation(ArkUI_DrawableDescriptor_AnimationController* controller)
```

**Description**

Starts the animation from first frame.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_DrawableDescriptor_AnimationController](capi-arkui-nativemodule-arkui-drawabledescriptor-animationcontroller.md)* controller | Indicates the pointer to the animation controller. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns {@link ARKUI_ERROR_CODE_NO_ERROR} if the operation is successful;<br>         Returns {@link ARKUI_ERROR_CODE_PARAM_INVALID} if a parameter error occurs. |

### OH_ArkUI_DrawableDescriptor_StopAnimation()

```c
int32_t OH_ArkUI_DrawableDescriptor_StopAnimation(ArkUI_DrawableDescriptor_AnimationController* controller)
```

**Description**

Stops the animation and back to first frame.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_DrawableDescriptor_AnimationController](capi-arkui-nativemodule-arkui-drawabledescriptor-animationcontroller.md)* controller | Indicates the pointer to the animation controller. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns {@link ARKUI_ERROR_CODE_NO_ERROR} if the operation is successful;<br>         Returns {@link ARKUI_ERROR_CODE_PARAM_INVALID} if a parameter error occurs. |

### OH_ArkUI_DrawableDescriptor_ResumeAnimation()

```c
int32_t OH_ArkUI_DrawableDescriptor_ResumeAnimation(ArkUI_DrawableDescriptor_AnimationController* controller)
```

**Description**

Resumes the animation at the current frame.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_DrawableDescriptor_AnimationController](capi-arkui-nativemodule-arkui-drawabledescriptor-animationcontroller.md)* controller | Indicates the pointer to the animation controller. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns {@link ARKUI_ERROR_CODE_NO_ERROR} if the operation is successful;<br>         Returns {@link ARKUI_ERROR_CODE_PARAM_INVALID} if a parameter error occurs. |

### OH_ArkUI_DrawableDescriptor_PauseAnimation()

```c
int32_t OH_ArkUI_DrawableDescriptor_PauseAnimation(ArkUI_DrawableDescriptor_AnimationController* controller)
```

**Description**

Pauses the animation at the current frame.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_DrawableDescriptor_AnimationController](capi-arkui-nativemodule-arkui-drawabledescriptor-animationcontroller.md)* controller | Indicates the pointer to the animation controller. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns {@link ARKUI_ERROR_CODE_NO_ERROR} if the operation is successful;<br>         Returns {@link ARKUI_ERROR_CODE_PARAM_INVALID} if a parameter error occurs. |

### OH_ArkUI_DrawableDescriptor_GetAnimationStatus()

```c
int32_t OH_ArkUI_DrawableDescriptor_GetAnimationStatus(ArkUI_DrawableDescriptor_AnimationController* controller, DrawableDescriptor_AnimationStatus* status)
```

**Description**

Obtains the animation playback status.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_DrawableDescriptor_AnimationController](capi-arkui-nativemodule-arkui-drawabledescriptor-animationcontroller.md)* controller | Indicates the pointer to the animation controller. |
| [DrawableDescriptor_AnimationStatus](capi-drawable-descriptor-h.md#drawabledescriptor_animationstatus)* status | Indicates the pointer to the animation playback status. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns {@link ARKUI_ERROR_CODE_NO_ERROR} if the operation is successful;<br>         Returns {@link ARKUI_ERROR_CODE_PARAM_INVALID} if a parameter error occurs. |


