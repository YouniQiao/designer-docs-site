# camera_notification_info.h

## Overview

The file declares the notification info.

**Library**: libohcamera.so

**System capability**: SystemCapability.Multimedia.Camera.Core

**Since**: 26.0.0

**Related module**: [CameraNotificationInfo](capi-cameranotificationinfo.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [OH_Camera_NotificationInfo](capi-cameranotificationinfo-oh-camera-notificationinfo.md) | OH_Camera_NotificationInfo | The struct describes the camera notification info. |

### Function

| Name | Description |
| -- | -- |
| [Camera_ErrorCode OH_CameraNotificationInfo_GetNotificationName(const OH_Camera_NotificationInfo* notificationInfo, OH_Camera_NotificationName* name)](#oh_cameranotificationinfo_getnotificationname) | Obtains the notification name from a camera notification info instance. |
| [Camera_ErrorCode OH_CameraNotificationInfo_GetProximityStateForFocus(const OH_Camera_NotificationInfo* notificationInfo, OH_Camera_ProximityStateForFocus* state)](#oh_cameranotificationinfo_getproximitystateforfocus) | Obtains the proximity state for focus from a camera notification info instance. |
| [void OH_CameraNotificationInfo_Destroy(OH_Camera_NotificationInfo* notificationInfo)](#oh_cameranotificationinfo_destroy) | Destroys camera notification info instances. |

## Function description

### OH_CameraNotificationInfo_GetNotificationName()

```c
Camera_ErrorCode OH_CameraNotificationInfo_GetNotificationName(const OH_Camera_NotificationInfo* notificationInfo, OH_Camera_NotificationName* name)
```

**Description**

Obtains the notification name from a camera notification info instance.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const OH_Camera_NotificationInfo](capi-cameranotificationinfo-oh-camera-notificationinfo.md)* notificationInfo | Pointer to an OH_Camera_NotificationInfo instance. |
| [OH_Camera_NotificationName](capi-camera-h.md#oh_camera_notificationname)* name | Pointer to the notification name, which is an [OH_Camera_NotificationName](capi-camera-h.md#oh_camera_notificationname) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [Camera_ErrorCode](capi-camera-h.md#camera_errorcode) | [CAMERA_OK](capi-camera-h.md#camera_errorcode) : The operation is successful.<br>         [CAMERA_INVALID_ARGUMENT](capi-camera-h.md#camera_errorcode): A parameter is missing or the parameter type is incorrect. |

### OH_CameraNotificationInfo_GetProximityStateForFocus()

```c
Camera_ErrorCode OH_CameraNotificationInfo_GetProximityStateForFocus(const OH_Camera_NotificationInfo* notificationInfo, OH_Camera_ProximityStateForFocus* state)
```

**Description**

Obtains the proximity state for focus from a camera notification info instance.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const OH_Camera_NotificationInfo](capi-cameranotificationinfo-oh-camera-notificationinfo.md)* notificationInfo | Pointer to an [OH_Camera_NotificationInfo](capi-cameranotificationinfo-oh-camera-notificationinfo.md) instance. |
| [OH_Camera_ProximityStateForFocus](capi-camera-h.md#oh_camera_proximitystateforfocus)* state | Pointer to the proximity state for focus, which is an[OH_Camera_ProximityStateForFocus](capi-camera-h.md#oh_camera_proximitystateforfocus) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [Camera_ErrorCode](capi-camera-h.md#camera_errorcode) | [CAMERA_OK](capi-camera-h.md#camera_errorcode) : The operation is successful.<br>         [CAMERA_INVALID_ARGUMENT](capi-camera-h.md#camera_errorcode): A parameter is missing or the parameter type is incorrect. |

### OH_CameraNotificationInfo_Destroy()

```c
void OH_CameraNotificationInfo_Destroy(OH_Camera_NotificationInfo* notificationInfo)
```

**Description**

Destroys camera notification info instances.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Camera_NotificationInfo](capi-cameranotificationinfo-oh-camera-notificationinfo.md)* notificationInfo | Pointer to the pointer of [OH_Camera_NotificationInfo](capi-cameranotificationinfo-oh-camera-notificationinfo.md) instances to be destroyed. |


