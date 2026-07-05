# @ohos.multimodalAwareness.userStatus

The **UserStatus** module, designed for user state awareness, empowers the system to perceive specific conditions of users, such as determining their age group or recognizing environmental sounds, among other functions.

**Since:** 20

**System capability:** SystemCapability.MultimodalAwareness.UserStatus

## Modules to Import

```TypeScript
import { userStatus } from '@kit.MultimodalAwarenessKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[configure](arkts-userstatus-configure-f-sys.md#configure-1) | Configures feature parameters. |
| [off](arkts-userstatus-off-f.md#off-1) | Disables the age group detection function. > **NOTE** > > This API is supported only on some phones. Error code **33900003** is returned if it is called on unsupported > phones. |
| [offUserAgeGroupDetected](arkts-userstatus-offuseragegroupdetected-f.md#offUserAgeGroupDetected-1) | Unsubscribe to age group detection feature. |
| [on](arkts-userstatus-on-f.md#on-1) | Enables the age group detection function. When the function is enabled, the application can recommend content based on the age group detection result. > **NOTE** > > This API is supported only on some phones. Error code **801** is returned if it is called on unsupported phones. |
| [onUserAgeGroupDetected](arkts-userstatus-onuseragegroupdetected-f.md#onUserAgeGroupDetected-1) | Subscribe to age group detection feature. |
| <!--DelRow-->[queryCapabilities](arkts-userstatus-querycapabilities-f-sys.md#queryCapabilities-1) | Queries device-supported atomic capabilities. |
| <!--DelRow-->[subscribe](arkts-userstatus-subscribe-f-sys.md#subscribe-1) | Subscribes to user status monitoring. |
| <!--DelRow-->[unsubscribe](arkts-userstatus-unsubscribe-f-sys.md#unsubscribe-1) | Unsubscribes from user status monitoring. |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[ComfortReminderData](arkts-userstatus-comfortreminderdata-i-sys.md) | Defines comfort reminder data. |
| <!--DelRow-->[DeviceInfo](arkts-userstatus-deviceinfo-i-sys.md) | Defines device information. |
| <!--DelRow-->[UserBlowData](arkts-userstatus-userblowdata-i-sys.md) | Defines user blow data. |
| [UserClassification](arkts-userstatus-userclassification-i.md) | Defines the user age group detection result. |
| <!--DelRow-->[UserEmotionData](arkts-userstatus-useremotiondata-i-sys.md) | Defines user emotion data. |
| <!--DelRow-->[UserFaceAngleData](arkts-userstatus-userfaceangledata-i-sys.md) | Defines user face angle data. |
| <!--DelRow-->[UserFacesData](arkts-userstatus-userfacesdata-i-sys.md) | Defines user face data. |
| <!--DelRow-->[UserGesturesData](arkts-userstatus-usergesturesdata-i-sys.md) | Defines user gesture data. |
| <!--DelRow-->[UserStatusData](arkts-userstatus-userstatusdata-i-sys.md) | Defines user status data. |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[DeviceType](arkts-userstatus-devicetype-e-sys.md) | Enumerates device types. |
| <!--DelRow-->[ReminderLevel](arkts-userstatus-reminderlevel-e-sys.md) | Enumerates comfort reminder levels required for triggering specific alert ringtones. |
| [UserAgeGroup](arkts-userstatus-useragegroup-e.md) | Enumerates the user age groups, for example, child or adult. |
| <!--DelRow-->[UserStatusAtomicCap](arkts-userstatus-userstatusatomiccap-e-sys.md) | Enumerates user status atomic capabilities. |
| <!--DelRow-->[UserStatusFeature](arkts-userstatus-userstatusfeature-e-sys.md) | Enumerates user status detection features. |

