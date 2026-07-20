# @ohos.enterprise.deviceControl

The **deviceControl** module provides APIs for device control.

> **NOTE**  
>  
> The APIs of this module can be used only in the stage model.  
>  
> The APIs of this module can be called only by a device administrator application that is enabled. For details, see  
> [MDM Kit Development](../../../../mdm/mdm-kit-guide.md).

**Since:** 10

<!--Device-unnamed-declare namespace deviceControl--><!--Device-unnamed-declare namespace deviceControl-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { deviceControl } from '@kit.MDMKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [operateDevice](arkts-mdm-devicecontrol-operatedevice-f.md#operatedevice-1) | Allows the specified device administrator application to operate devices. |
| [operateDevice](arkts-mdm-devicecontrol-operatedevice-f.md#operatedevice-2) | Allows the administrator to operate devices. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [lockScreen](arkts-mdm-devicecontrol-lockscreen-f-sys.md#lockscreen-1) | Locks the device screen immediately. |
| [reboot](arkts-mdm-devicecontrol-reboot-f-sys.md#reboot-1) | Reboots the device. |
| [resetFactory](arkts-mdm-devicecontrol-resetfactory-f-sys.md#resetfactory-1) | Restores factory settings. This API uses an asynchronous callback to return the result. |
| [resetFactory](arkts-mdm-devicecontrol-resetfactory-f-sys.md#resetfactory-2) | Restores factory settings. This API uses a promise to return the result. |
| [shutdown](arkts-mdm-devicecontrol-shutdown-f-sys.md#shutdown-1) | Shuts down the device. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [Operation](arkts-mdm-devicecontrol-operation-e.md) | The operation to be performed. |

