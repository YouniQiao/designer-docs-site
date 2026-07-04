# @ohos.distributedHardware.mechanicManager

Provides capabilities for controlling and interacting with mechanical devices connected to this device. The capabilities cover connection management, control, and monitoring.

**Since:** 20

**System capability:** SystemCapability.Mechanic.Core

## Modules to Import

```TypeScript
import { mechanicManager } from '@ohos.distributedHardware.mechanicManager';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getAttachedMechDevices](arkts-mechanic-getattachedmechdevices-f.md#getattachedmechdevices-1) | Obtain the list of connected mechanical devices. |
| [getCameraTrackingEnabled](arkts-mechanic-getcameratrackingenabled-f.md#getcameratrackingenabled-1) | Checks whether camera tracking is enabled for this mechanical device. |
| [getCameraTrackingLayout](arkts-mechanic-getcameratrackinglayout-f.md#getcameratrackinglayout-1) | Obtains the camera tracking layout of this mechanical device. |
| [isControlSupported](arkts-mechanic-iscontrolsupported-f.md#iscontrolsupported-1) | Checks whether the current device supports embodied control for a specific type of device. |
| [off](arkts-mechanic-off-f.md#off-1) | Unsubscribes from device attachment state change events. |
| [off](arkts-mechanic-off-f.md#off-2) | Unsubscribes from tracking events. |
| [on](arkts-mechanic-on-f.md#on-1) | Subscribes to device attachment state change events. |
| [on](arkts-mechanic-on-f.md#on-2) | Subscribes to tracking events. |
| [setCameraTrackingEnabled](arkts-mechanic-setcameratrackingenabled-f.md#setcameratrackingenabled-1) | Enables or disables camera tracking. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [doAction](arkts-mechanic-doaction-f-sys.md#doaction-1) | Execute an action sequence. |
| [getCurrentAngles](arkts-mechanic-getcurrentangles-f-sys.md#getcurrentangles-1) | Obtains the current angles of a mechanical device. |
| [getMaxRotationSpeed](arkts-mechanic-getmaxrotationspeed-f-sys.md#getmaxrotationspeed-1) | Obtains the maximum rotation speed of a mechanical device. |
| [getMaxRotationTime](arkts-mechanic-getmaxrotationtime-f-sys.md#getmaxrotationtime-1) | Obtains the maximum continuous rotation duration of a mechanical device. |
| [getRotationAxesStatus](arkts-mechanic-getrotationaxesstatus-f-sys.md#getrotationaxesstatus-1) | Obtains the status of the rotation axes. |
| [getRotationLimits](arkts-mechanic-getrotationlimits-f-sys.md#getrotationlimits-1) | Obtains the maximum rotation angles relative to the reference point for the specified mechanical device. |
| [isSupportAction](arkts-mechanic-issupportaction-f-sys.md#issupportaction-1) | Check whether the specific action type is supported. |
| [move](arkts-mechanic-move-f-sys.md#move-1) | Move a mechanical device with the specified parameters. |
| [moveBySpeed](arkts-mechanic-movebyspeed-f-sys.md#movebyspeed-1) | Move a mechanical device at the specified speed. |
| [off](arkts-mechanic-off-f-sys.md#off-3) | Unregister a listener for axis state changes. |
| [on](arkts-mechanic-on-f-sys.md#on-3) | Register a listener for axis state changes. The status of the rotation axis changes dynamically, which needs to be monitored. |
| [rotate](arkts-mechanic-rotate-f-sys.md#rotate-1) | Rotates a mechanical device to the relative angles. |
| [rotateBySpeed](arkts-mechanic-rotatebyspeed-f-sys.md#rotatebyspeed-1) | Rotates a mechanical device at the specified speed. |
| [rotateToEulerAngles](arkts-mechanic-rotatetoeulerangles-f-sys.md#rotatetoeulerangles-1) | Rotates a mechanical device to the absolute angles. |
| [searchTarget](arkts-mechanic-searchtarget-f-sys.md#searchtarget-1) | Searching for a specified target. |
| [setCameraTrackingLayout](arkts-mechanic-setcameratrackinglayout-f-sys.md#setcameratrackinglayout-1) | Sets the camera tracking layout for this mechanical device. |
| [setUserOperation](arkts-mechanic-setuseroperation-f-sys.md#setuseroperation-1) | Sets a user operation. |
| [stopMoving](arkts-mechanic-stopmoving-f-sys.md#stopmoving-1) | Stops a mechanical device from moving. |
| [subscribe](arkts-mechanic-subscribe-f-sys.md#subscribe-1) | Subscribe to the specified events. |
| [turnBySpeed](arkts-mechanic-turnbyspeed-f-sys.md#turnbyspeed-1) | Rotate in place according to the speed. |
| [unSubscribe](arkts-mechanic-unsubscribe-f-sys.md#unsubscribe-1) | Unsubscribes the specified events. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [AttachStateChangeInfo](arkts-mechanic-attachstatechangeinfo-i.md) | Callback information about the device attachment state change. |
| [MechInfo](arkts-mechanic-mechinfo-i.md) | Mechanical device information. |
| [TrackingEventInfo](arkts-mechanic-trackingeventinfo-i.md) | Tracking event callback info. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [EulerAngles](arkts-mechanic-eulerangles-i-sys.md) | Absolute euler angles relative to the home position. |
| [MechEvent](arkts-mechanic-mechevent-i-sys.md) | Definition of Mechanic device event. |
| [MoveParams](arkts-mechanic-moveparams-i-sys.md) | Parameters for moving the target. |
| [RotationAngles](arkts-mechanic-rotationangles-i-sys.md) | The rotion angles, relative to the current position. |
| [RotationAxesStateChangeInfo](arkts-mechanic-rotationaxesstatechangeinfo-i-sys.md) | Rotation axes state change information. |
| [RotationAxesStatus](arkts-mechanic-rotationaxesstatus-i-sys.md) | Rotation axes status |
| [RotationLimits](arkts-mechanic-rotationlimits-i-sys.md) | Rotation angle limits relative to the reference point. |
| [RotationSpeed](arkts-mechanic-rotationspeed-i-sys.md) | Rotational speed. A negative value indicates a clockwise rotation, and a positive value indicates a counterclockwise rotation. |
| [SearchParams](arkts-mechanic-searchparams-i-sys.md) | Parameters for target searching. |
| [SearchResult](arkts-mechanic-searchresult-i-sys.md) | Search result. |
| [SpeedParams](arkts-mechanic-speedparams-i-sys.md) | Parameters for moving or turning at a speed. |
| [TargetInfo](arkts-mechanic-targetinfo-i-sys.md) | Target information. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [AttachState](arkts-mechanic-attachstate-e.md) | Device attach states. |
| [CameraTrackingLayout](arkts-mechanic-cameratrackinglayout-e.md) | Enumerates the camera tracking layouts. |
| [MechDeviceType](arkts-mechanic-mechdevicetype-e.md) | Enumerates the mechanical device types. |
| [TrackingEvent](arkts-mechanic-trackingevent-e.md) | Enumerates the tracking events. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [ActionType](arkts-mechanic-actiontype-e-sys.md) | Type of action sequence. |
| [MarchingMode](arkts-mechanic-marchingmode-e-sys.md) | Marching mode definition. |
| [MechDeviceType](arkts-mechanic-mechdevicetype-e-sys.md) | Enumerates the mechanical device types. |
| [MechEventType](arkts-mechanic-mecheventtype-e-sys.md) | Mechanic event definition. |
| [Operation](arkts-mechanic-operation-e-sys.md) | Enumerates the user operations. |
| [Result](arkts-mechanic-result-e-sys.md) | Rotation execution results. |
| [RotationAxisLimited](arkts-mechanic-rotationaxislimited-e-sys.md) | Enumerates the rotation axis limit states. |
| [SearchDirection](arkts-mechanic-searchdirection-e-sys.md) | Search direction. |
| [SpeedGear](arkts-mechanic-speedgear-e-sys.md) | Speed gear definition. |
| [TargetType](arkts-mechanic-targettype-e-sys.md) | Target type. |
<!--DelEnd-->

