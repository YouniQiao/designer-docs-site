# @ohos.multimodalInput.inputDeviceCooperate

The **inputDeviceCooperate** module implements screen hopping for two or more networked devices to share the keyboard and mouse for collaborative operations.

**Since:** 9

**Deprecated since:** 23

**Substitutes:** cooperate/cooperate

**System capability:** SystemCapability.MultimodalInput.Input.Cooperator

## Modules to Import

```TypeScript
import { inputDeviceCooperate } from '@kit.InputKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [enable](arkts-input-enable-f-sys.md#enable-1) | Enables or disables screen hopping. This API uses an asynchronous callback to return the result. |
| [enable](arkts-input-enable-f-sys.md#enable-2) | Specifies whether to enable screen hopping. This API uses a promise to return the result. |
| [getState](arkts-input-getstate-f-sys.md#getstate-1) | Obtains the state of the screen hopping switch. This API uses an asynchronous callback to return the result. |
| [getState](arkts-input-getstate-f-sys.md#getstate-2) | Checks whether screen hopping is enabled. This API uses a promise to return the result. |
| [off](arkts-input-off-f-sys.md#off-1) | Deregisters the listener for screen hopping status changes. This API uses an asynchronous callback to return the result. |
| [on](arkts-input-on-f-sys.md#on-1) | Registers a listener for screen hopping state changes. This API uses an asynchronous callback to return the result. |
| [start](arkts-input-start-f-sys.md#start-1) | Starts screen hopping. This API uses an asynchronous callback to return the result. |
| [start](arkts-input-start-f-sys.md#start-2) | Starts screen hopping. This API uses a promise to return the result. |
| [stop](arkts-input-stop-f-sys.md#stop-1) | Stops screen hopping. This API uses an asynchronous callback to return the result. |
| [stop](arkts-input-stop-f-sys.md#stop-2) | Stops screen hopping. This API uses a promise to return the result. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [EventMsg](arkts-input-eventmsg-e-sys.md) | Enumerates screen hopping events. |
<!--DelEnd-->

