# notification.h

## Overview

Declares the APIs of notification service.

**Library**: libohnotification.so

**System capability**: SystemCapability.Notification.Notification

**Since**: 13

**Related module**: [NOTIFICATION](capi-notification.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [bool OH_Notification_IsNotificationEnabled(void)](#oh_notification_isnotificationenabled) | Checks whether this application is allowed to publish notifications. |

## Function description

### OH_Notification_IsNotificationEnabled()

```c
bool OH_Notification_IsNotificationEnabled(void)
```

**Description**

Checks whether this application is allowed to publish notifications.

**Since**: 13

**Returns**:

| Type | Description |
| -- | -- |
| bool | true  - This application is allowed to publish notifications.<br>         false - This application is not allowed to publish notifications. |


