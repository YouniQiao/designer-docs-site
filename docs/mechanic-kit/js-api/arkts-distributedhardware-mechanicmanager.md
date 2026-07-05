# @ohos.distributedHardware.mechanicManager

Provides capabilities for controlling and interacting with mechanical devices connected to this device. The capabilities cover connection management, control, and monitoring.

**Since:** 20

**System capability:** SystemCapability.Mechanic.Core

## Modules to Import

```TypeScript
import { mechanicManager } from '@kit.MechanicKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[doAction](arkts-mechanicmanager-doaction-f-sys.md#doAction-1) | Execute an action sequence. |
| [getAttachedMechDevices](arkts-mechanicmanager-getattachedmechdevices-f.md#getAttachedMechDevices-1) | Obtain the list of connected mechanical devices. |
| [getCameraTrackingEnabled](arkts-mechanicmanager-getcameratrackingenabled-f.md#getCameraTrackingEnabled-1) | Checks whether camera tracking is enabled for this mechanical device. |
| [getCameraTrackingLayout](arkts-mechanicmanager-getcameratrackinglayout-f.md#getCameraTrackingLayout-1) | Obtains the camera tracking layout of this mechanical device. |
| <!--DelRow-->[getCurrentAngles](arkts-mechanicmanager-getcurrentangles-f-sys.md#getCurrentAngles-1) | Obtains the current angles of a mechanical device. |
| <!--DelRow-->[getMaxRotationSpeed](arkts-mechanicmanager-getmaxrotationspeed-f-sys.md#getMaxRotationSpeed-1) | Obtains the maximum rotation speed of a mechanical device. |
| <!--DelRow-->[getMaxRotationTime](arkts-mechanicmanager-getmaxrotationtime-f-sys.md#getMaxRotationTime-1) | Obtains the maximum continuous rotation duration of a mechanical device. |
| <!--DelRow-->[getRotationAxesStatus](arkts-mechanicmanager-getrotationaxesstatus-f-sys.md#getRotationAxesStatus-1) | Obtains the status of the rotation axes. |
| <!--DelRow-->[getRotationLimits](arkts-mechanicmanager-getrotationlimits-f-sys.md#getRotationLimits-1) | Obtains the maximum rotation angles relative to the reference point for the specified mechanical device. |
| [isControlSupported](arkts-mechanicmanager-iscontrolsupported-f.md#isControlSupported-1) | Checks whether the current device supports embodied control for a specific type of device. |
| <!--DelRow-->[isSupportAction](arkts-mechanicmanager-issupportaction-f-sys.md#isSupportAction-1) | Check whether the specific action type is supported. |
| <!--DelRow-->[move](arkts-mechanicmanager-move-f-sys.md#move-1) | Move a mechanical device with the specified parameters. |
| <!--DelRow-->[moveBySpeed](arkts-mechanicmanager-movebyspeed-f-sys.md#moveBySpeed-1) | Move a mechanical device at the specified speed. |
| [off](arkts-mechanicmanager-off-f.md#off-1) | Unsubscribes from device attachment state change events. |
| [off](arkts-mechanicmanager-off-f.md#off-2) | Unsubscribes from tracking events. |
| <!--DelRow-->[off](arkts-mechanicmanager-off-f-sys.md#off-1) | Unregister a listener for axis state changes. |
| [offAttachStateChange](arkts-mechanicmanager-offattachstatechange-f.md#offAttachStateChange-1) | Unsubscribes from device attachment state change events. |
| <!--DelRow-->[offRotationAxesStatusChange](arkts-mechanicmanager-offrotationaxesstatuschange-f-sys.md#offRotationAxesStatusChange-1) | Unregister a listener for axis state changes. |
| [offTrackingStateChange](arkts-mechanicmanager-offtrackingstatechange-f.md#offTrackingStateChange-1) | Unsubscribes from tracking events. |
| [on](arkts-mechanicmanager-on-f.md#on-1) | Subscribes to device attachment state change events. |
| [on](arkts-mechanicmanager-on-f.md#on-2) | Subscribes to tracking events. |
| <!--DelRow-->[on](arkts-mechanicmanager-on-f-sys.md#on-1) | Register a listener for axis state changes. The status of the rotation axis changes dynamically, which needs to be monitored. |
| [onAttachStateChange](arkts-mechanicmanager-onattachstatechange-f.md#onAttachStateChange-1) | Subscribes to device attachment state change events. |
| <!--DelRow-->[onRotationAxesStatusChange](arkts-mechanicmanager-onrotationaxesstatuschange-f-sys.md#onRotationAxesStatusChange-1) | Register a listener for axis state changes. The status of the rotation axis changes dynamically, which needs to be monitored. |
| [onTrackingStateChange](arkts-mechanicmanager-ontrackingstatechange-f.md#onTrackingStateChange-1) | Subscribes to tracking events. |
| <!--DelRow-->[rotate](arkts-mechanicmanager-rotate-f-sys.md#rotate-1) | Rotates a mechanical device to the relative angles. |
| <!--DelRow-->[rotateBySpeed](arkts-mechanicmanager-rotatebyspeed-f-sys.md#rotateBySpeed-1) | Rotates a mechanical device at the specified speed. |
| <!--DelRow-->[rotateToEulerAngles](arkts-mechanicmanager-rotatetoeulerangles-f-sys.md#rotateToEulerAngles-1) | Rotates a mechanical device to the absolute angles. |
| <!--DelRow-->[searchTarget](arkts-mechanicmanager-searchtarget-f-sys.md#searchTarget-1) | Searching for a specified target. |
| [setCameraTrackingEnabled](arkts-mechanicmanager-setcameratrackingenabled-f.md#setCameraTrackingEnabled-1) | Enables or disables camera tracking. |
| <!--DelRow-->[setCameraTrackingLayout](arkts-mechanicmanager-setcameratrackinglayout-f-sys.md#setCameraTrackingLayout-1) | Sets the camera tracking layout for this mechanical device. |
| <!--DelRow-->[setUserOperation](arkts-mechanicmanager-setuseroperation-f-sys.md#setUserOperation-1) | Sets a user operation. |
| <!--DelRow-->[stopMoving](arkts-mechanicmanager-stopmoving-f-sys.md#stopMoving-1) | Stops a mechanical device from moving. |
| <!--DelRow-->[subscribe](arkts-mechanicmanager-subscribe-f-sys.md#subscribe-1) | Subscribe to the specified events. |
| <!--DelRow-->[turnBySpeed](arkts-mechanicmanager-turnbyspeed-f-sys.md#turnBySpeed-1) | Rotate in place according to the speed. |
| <!--DelRow-->[unSubscribe](arkts-mechanicmanager-unsubscribe-f-sys.md#unSubscribe-1) | Unsubscribes the specified events. |

### Interfaces

| Name | Description |
| --- | --- |
| [AttachStateChangeInfo](arkts-mechanicmanager-attachstatechangeinfo-i.md) | Callback information about the device attachment state change. |
| <!--DelRow-->[EulerAngles](arkts-mechanicmanager-eulerangles-i-sys.md) | Absolute euler angles relative to the home position. |
| <!--DelRow-->[MechEvent](arkts-mechanicmanager-mechevent-i-sys.md) | Definition of Mechanic device event. |
| [MechInfo](arkts-mechanicmanager-mechinfo-i.md) | Mechanical device information. |
| <!--DelRow-->[MoveParams](arkts-mechanicmanager-moveparams-i-sys.md) | Parameters for moving the target. |
| <!--DelRow-->[RotationAngles](arkts-mechanicmanager-rotationangles-i-sys.md) | The rotion angles, relative to the current position. |
| <!--DelRow-->[RotationAxesStateChangeInfo](arkts-mechanicmanager-rotationaxesstatechangeinfo-i-sys.md) | Rotation axes state change information. |
| <!--DelRow-->[RotationAxesStatus](arkts-mechanicmanager-rotationaxesstatus-i-sys.md) | Rotation axes status |
| <!--DelRow-->[RotationLimits](arkts-mechanicmanager-rotationlimits-i-sys.md) | Rotation angle limits relative to the reference point. |
| <!--DelRow-->[RotationSpeed](arkts-mechanicmanager-rotationspeed-i-sys.md) | Rotational speed. A negative value indicates a clockwise rotation, and a positive value indicates a counterclockwise rotation. |
| <!--DelRow-->[SearchParams](arkts-mechanicmanager-searchparams-i-sys.md) | Parameters for target searching. |
| <!--DelRow-->[SearchResult](arkts-mechanicmanager-searchresult-i-sys.md) | Search result. |
| <!--DelRow-->[SpeedParams](arkts-mechanicmanager-speedparams-i-sys.md) | Parameters for moving or turning at a speed. |
| <!--DelRow-->[TargetInfo](arkts-mechanicmanager-targetinfo-i-sys.md) | Target information. |
| [TrackingEventInfo](arkts-mechanicmanager-trackingeventinfo-i.md) | Tracking event callback info. |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[ActionType](arkts-mechanicmanager-actiontype-e-sys.md) | Type of action sequence. |
| [AttachState](arkts-mechanicmanager-attachstate-e.md) | Device attach states. |
| [CameraTrackingLayout](arkts-mechanicmanager-cameratrackinglayout-e.md) | Enumerates the camera tracking layouts. |
| <!--DelRow-->[MarchingMode](arkts-mechanicmanager-marchingmode-e-sys.md) | Marching mode definition. |
| [MechDeviceType](arkts-mechanicmanager-mechdevicetype-e.md) | Enumerates the mechanical device types. |
| <!--DelRow-->[MechEventType](arkts-mechanicmanager-mecheventtype-e-sys.md) | Mechanic event definition. |
| <!--DelRow-->[Operation](arkts-mechanicmanager-operation-e-sys.md) | Enumerates the user operations. |
| <!--DelRow-->[Result](arkts-mechanicmanager-result-e-sys.md) | Rotation execution results. |
| <!--DelRow-->[RotationAxisLimited](arkts-mechanicmanager-rotationaxislimited-e-sys.md) | Enumerates the rotation axis limit states. |
| <!--DelRow-->[SearchDirection](arkts-mechanicmanager-searchdirection-e-sys.md) | Search direction. |
| <!--DelRow-->[SpeedGear](arkts-mechanicmanager-speedgear-e-sys.md) | Speed gear definition. |
| <!--DelRow-->[TargetType](arkts-mechanicmanager-targettype-e-sys.md) | Target type. |
| [TrackingEvent](arkts-mechanicmanager-trackingevent-e.md) | Enumerates the tracking events. |

