# @ohos.cooperate

The **cooperate** module implements screen hopping for two or more networked devices to share the keyboard and mouse for collaborative operations.

**Since:** 10

**System capability:** SystemCapability.Msdp.DeviceStatus.Cooperate

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cooperate } from '@ohos.cooperate';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [activate](arkts-distributedservice-activate-f-sys.md#activate-1) | Starts screen hopping. This API uses an asynchronous callback to return the result. |
| [activate](arkts-distributedservice-activate-f-sys.md#activate-2) | Starts screen hopping. This API uses a promise to return the result. |
| [activateCooperate](arkts-distributedservice-activatecooperate-f-sys.md#activatecooperate-1) | Starts screen hopping. This API uses an asynchronous callback to return the result. |
| [activateCooperate](arkts-distributedservice-activatecooperate-f-sys.md#activatecooperate-2) | Starts screen hopping. This API uses a promise to return the result. |
| [activateCooperateWithOptions](arkts-distributedservice-activatecooperatewithoptions-f-sys.md#activatecooperatewithoptions-1) | Starts screen hopping based on the specified options. This API uses a promise to return the result. |
| [deactivate](arkts-distributedservice-deactivate-f-sys.md#deactivate-1) | Stops screen hopping. This API uses an asynchronous callback to return the result. |
| [deactivate](arkts-distributedservice-deactivate-f-sys.md#deactivate-2) | Stops screen hopping. This API uses a promise to return the result. |
| [deactivateCooperate](arkts-distributedservice-deactivatecooperate-f-sys.md#deactivatecooperate-1) | Stops screen hopping. This API uses an asynchronous callback to return the result. |
| [deactivateCooperate](arkts-distributedservice-deactivatecooperate-f-sys.md#deactivatecooperate-2) | Stops screen hopping. This API uses a promise to return the result. |
| [getCooperateSwitchState](arkts-distributedservice-getcooperateswitchstate-f-sys.md#getcooperateswitchstate-1) | Obtains the screen hopping status of the target device. This API uses an asynchronous callback to return the result. |
| [getCooperateSwitchState](arkts-distributedservice-getcooperateswitchstate-f-sys.md#getcooperateswitchstate-2) | Obtains the screen hopping status of the target device. This API uses a promise to return the result. |
| [getCrossingSwitchState](arkts-distributedservice-getcrossingswitchstate-f-sys.md#getcrossingswitchstate-1) | Obtains the screen hopping status of the target device. This API uses an asynchronous callback to return the result. |
| [getCrossingSwitchState](arkts-distributedservice-getcrossingswitchstate-f-sys.md#getcrossingswitchstate-2) | Obtains the screen hopping status of the target device. This API uses a promise to return the result. |
| [off](arkts-distributedservice-off-f-sys.md#off-1) | Disables listening for screen hopping status change events. |
| [off](arkts-distributedservice-off-f-sys.md#off-2) | Disables listening for screen hopping status change events. |
| [off](arkts-distributedservice-off-f-sys.md#off-3) | Unregisters the listener for the mouse cursor position of a device. |
| [on](arkts-distributedservice-on-f-sys.md#on-1) | Enables listening for screen hopping status change events. |
| [on](arkts-distributedservice-on-f-sys.md#on-2) | Enables listening for screen hopping status change events. |
| [on](arkts-distributedservice-on-f-sys.md#on-3) | Registers a listener for the mouse cursor position of a device. |
| [prepare](arkts-distributedservice-prepare-f-sys.md#prepare-1) | Prepares for screen hopping. This API uses an asynchronous callback to return the result. |
| [prepare](arkts-distributedservice-prepare-f-sys.md#prepare-2) | Prepares for screen hopping. This API uses a promise to return the result. |
| [prepareCooperate](arkts-distributedservice-preparecooperate-f-sys.md#preparecooperate-1) | Prepares for screen hopping. This API uses an asynchronous callback to return the result. |
| [prepareCooperate](arkts-distributedservice-preparecooperate-f-sys.md#preparecooperate-2) | Prepares for screen hopping. This API uses a promise to return the result. |
| [unprepare](arkts-distributedservice-unprepare-f-sys.md#unprepare-1) | Cancels the preparation for screen hopping. This API uses an asynchronous callback to return the result. |
| [unprepare](arkts-distributedservice-unprepare-f-sys.md#unprepare-2) | Cancels the preparation for screen hopping. This API uses a promise to return the result. |
| [unprepareCooperate](arkts-distributedservice-unpreparecooperate-f-sys.md#unpreparecooperate-1) | Cancels the preparation for screen hopping. This API uses an asynchronous callback to return the result. |
| [unprepareCooperate](arkts-distributedservice-unpreparecooperate-f-sys.md#unpreparecooperate-2) | Cancels the preparation for screen hopping. This API uses a promise to return the result. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [CooperateMessage](arkts-distributedservice-cooperatemessage-i-sys.md) | Defines a screen hopping status change event. |
| [CooperateOptions](arkts-distributedservice-cooperateoptions-i-sys.md) | Screen hopping options, such as the exit position. |
| [MouseLocation](arkts-distributedservice-mouselocation-i-sys.md) | Defines the mouse pointer position for screen hopping. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [CooperateMsg](arkts-distributedservice-cooperatemsg-e-sys.md) | Represents a screen hopping message notification. |
| [CooperateState](arkts-distributedservice-cooperatestate-e-sys.md) | Enumerates the screen hopping states. |
<!--DelEnd-->

