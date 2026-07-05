# drawing_record_cmd.h

## Overview

This file declares the functions related to a recording command object.

**Library**: libnative_drawing.so

**System capability**: SystemCapability.Graphic.Graphic2D.NativeDrawing

**Since**: 13

**Related module**: [Drawing](capi-drawing.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [OH_Drawing_RecordCmdUtils* OH_Drawing_RecordCmdUtilsCreate(void)](#oh_drawing_recordcmdutilscreate) | Creates an **OH_Drawing_RecordCmdUtils** object. |
| [OH_Drawing_ErrorCode OH_Drawing_RecordCmdUtilsDestroy(OH_Drawing_RecordCmdUtils* recordCmdUtils)](#oh_drawing_recordcmdutilsdestroy) | Destroys an **OH_Drawing_RecordCmdUtils** object and reclaims the memory occupied by the object. |
| [OH_Drawing_ErrorCode OH_Drawing_RecordCmdUtilsBeginRecording(OH_Drawing_RecordCmdUtils* recordCmdUtils, int32_t width, int32_t height, OH_Drawing_Canvas** canvas)](#oh_drawing_recordcmdutilsbeginrecording) | Starts recording. This API must be used together with [OH_Drawing_RecordCmdUtilsFinishRecording](capi-drawing-record-cmd-h.md#oh_drawing_recordcmdutilsfinishrecording).The **OH_Drawing_RecordCmdUtils** object generates a canvas object of the recording type and calls the interface ofthe drawing object to record all drawing commands. |
| [OH_Drawing_ErrorCode OH_Drawing_RecordCmdUtilsFinishRecording(OH_Drawing_RecordCmdUtils* recordCmdUtils, OH_Drawing_RecordCmd** recordCmd)](#oh_drawing_recordcmdutilsfinishrecording) | Stops video recording. This function must be called after [OH_Drawing_RecordCmdUtilsBeginRecording](capi-drawing-record-cmd-h.md#oh_drawing_recordcmdutilsbeginrecording).The **OH_Drawing_RecordCmdUtils** object ends recording and stores the drawing commands recorded by the canvasobject of the recording type into the generated [OH_Drawing_RecordCmdUtilsBeginRecording](capi-drawing-record-cmd-h.md#oh_drawing_recordcmdutilsbeginrecording) object. |
| [OH_Drawing_ErrorCode OH_Drawing_RecordCmdDestroy(OH_Drawing_RecordCmd* recordCmd)](#oh_drawing_recordcmddestroy) | Destroys an **OH_Drawing_RecordCmd** object and reclaims the memory occupied by the object. |

## Function description

### OH_Drawing_RecordCmdUtilsCreate()

```c
OH_Drawing_RecordCmdUtils* OH_Drawing_RecordCmdUtilsCreate(void)
```

**Description**

Creates an **OH_Drawing_RecordCmdUtils** object.

**Since**: 13

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Drawing_RecordCmdUtils*](capi-drawing-oh-drawing-recordcmdutils.md) | Returns the pointer to the OH_Drawing_RecordCmdUtils object created. |

### OH_Drawing_RecordCmdUtilsDestroy()

```c
OH_Drawing_ErrorCode OH_Drawing_RecordCmdUtilsDestroy(OH_Drawing_RecordCmdUtils* recordCmdUtils)
```

**Description**

Destroys an **OH_Drawing_RecordCmdUtils** object and reclaims the memory occupied by the object.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Drawing_RecordCmdUtils](capi-drawing-oh-drawing-recordcmdutils.md)* recordCmdUtils | Pointer to an [OH_Drawing_RecordCmdUtils](capi-drawing-oh-drawing-recordcmdutils.md) object. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Drawing_ErrorCode](capi-drawing-error-code-h.md#oh_drawing_errorcode) | Returns one of the following result codes:<br> OH_DRAWING_SUCCESS if the operation is successful.<br> OH_DRAWING_ERROR_INVALID_PARAMETER if recordCmdUtils is NULL. |

### OH_Drawing_RecordCmdUtilsBeginRecording()

```c
OH_Drawing_ErrorCode OH_Drawing_RecordCmdUtilsBeginRecording(OH_Drawing_RecordCmdUtils* recordCmdUtils, int32_t width, int32_t height, OH_Drawing_Canvas** canvas)
```

**Description**

Starts recording. This API must be used together with [OH_Drawing_RecordCmdUtilsFinishRecording](capi-drawing-record-cmd-h.md#oh_drawing_recordcmdutilsfinishrecording).The **OH_Drawing_RecordCmdUtils** object generates a canvas object of the recording type and calls the interface ofthe drawing object to record all drawing commands.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Drawing_RecordCmdUtils](capi-drawing-oh-drawing-recordcmdutils.md)* recordCmdUtils | Pointer to an [OH_Drawing_RecordCmdUtils](capi-drawing-oh-drawing-recordcmdutils.md) object. |
| int32_t width | Width of the canvas. |
| int32_t height | Height of the canvas. |
| [OH_Drawing_Canvas](capi-drawing-oh-drawing-canvas.md)** canvas | Double pointer to the [OH_Drawing_Canvas](capi-drawing-oh-drawing-canvas.md) object. You do not need to release this pointer.This object does not support nested calling of {@link OH_Drawing_CanvasDrawRecordCmd}. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Drawing_ErrorCode](capi-drawing-error-code-h.md#oh_drawing_errorcode) | Returns one of the following result codes:<br> OH_DRAWING_SUCCESS if the operation is successful.<br> OH_DRAWING_ERROR_INVALID_PARAMETER if either recordCmdUtils or canvas is NULL.<br> OH_DRAWING_ERROR_INVALID_PARAMETER if either width or height is less than 0.<br> OH_DRAWING_ERROR_ALLOCATION_FAILED if the system memory is insufficient. |

### OH_Drawing_RecordCmdUtilsFinishRecording()

```c
OH_Drawing_ErrorCode OH_Drawing_RecordCmdUtilsFinishRecording(OH_Drawing_RecordCmdUtils* recordCmdUtils, OH_Drawing_RecordCmd** recordCmd)
```

**Description**

Stops video recording. This function must be called after [OH_Drawing_RecordCmdUtilsBeginRecording](capi-drawing-record-cmd-h.md#oh_drawing_recordcmdutilsbeginrecording).The **OH_Drawing_RecordCmdUtils** object ends recording and stores the drawing commands recorded by the canvasobject of the recording type into the generated [OH_Drawing_RecordCmdUtilsBeginRecording](capi-drawing-record-cmd-h.md#oh_drawing_recordcmdutilsbeginrecording) object.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Drawing_RecordCmdUtils](capi-drawing-oh-drawing-recordcmdutils.md)* recordCmdUtils | Pointer to an [OH_Drawing_RecordCmdUtils](capi-drawing-oh-drawing-recordcmdutils.md) object. |
| [OH_Drawing_RecordCmd](capi-drawing-oh-drawing-recordcmd.md)** recordCmd | Double pointer to the  [OH_Drawing_RecordCmd](capi-drawing-oh-drawing-recordcmd.md)  object. You need to call{@link OH_Drawing_CanvasDrawRecordCmd}to draw the object, and call [OH_Drawing_RecordCmdDestroy](capi-drawing-record-cmd-h.md#oh_drawing_recordcmddestroy) to release it. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Drawing_ErrorCode](capi-drawing-error-code-h.md#oh_drawing_errorcode) | Returns one of the following result codes:<br> OH_DRAWING_SUCCESS if the operation is successful.<br> OH_DRAWING_ERROR_INVALID_PARAMETER if either recordCmdUtils or recordCmd is NULL.<br> OH_DRAWING_ERROR_ALLOCATION_FAILED if the system memory is insufficient. |

### OH_Drawing_RecordCmdDestroy()

```c
OH_Drawing_ErrorCode OH_Drawing_RecordCmdDestroy(OH_Drawing_RecordCmd* recordCmd)
```

**Description**

Destroys an **OH_Drawing_RecordCmd** object and reclaims the memory occupied by the object.

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Drawing_RecordCmd](capi-drawing-oh-drawing-recordcmd.md)* recordCmd | Pointer to an [OH_Drawing_RecordCmd](capi-drawing-oh-drawing-recordcmd.md) object. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_Drawing_ErrorCode](capi-drawing-error-code-h.md#oh_drawing_errorcode) | Returns one of the following result codes:<br> OH_DRAWING_SUCCESS if the operation is successful.<br> OH_DRAWING_ERROR_INVALID_PARAMETER if recordCmd is NULL. |


