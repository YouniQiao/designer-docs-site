# @ohos.enterprise.deviceInfo

The **deviceInfo** module provides APIs for enterprise device information management, including obtaining device serial numbers and device names.

> **NOTE**  
>  
> The APIs of this module can be used only in the stage model.  
>  
> The APIs of this module can be called only by a device administrator application that is enabled. For details, see  
> [MDM Kit Development](../../../../mdm/mdm-kit-guide.md).

**Since:** 10

<!--Device-unnamed-declare namespace deviceInfo--><!--Device-unnamed-declare namespace deviceInfo-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { deviceInfo } from '@kit.MDMKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getDeviceInfo](arkts-mdm-deviceinfo-getdeviceinfo-f.md#getdeviceinfo-1) | Obtains device information. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getDeviceName](arkts-mdm-deviceinfo-getdevicename-f-sys.md#getdevicename-1) | Obtains the device name. This API uses an asynchronous callback to return the result. |
| [getDeviceName](arkts-mdm-deviceinfo-getdevicename-f-sys.md#getdevicename-2) | Obtains the device name. This API uses a promise to return the result. |
| [getDeviceSerial](arkts-mdm-deviceinfo-getdeviceserial-f-sys.md#getdeviceserial-1) | Obtains the device serial number. This API uses an asynchronous callback to return the result. |
| [getDeviceSerial](arkts-mdm-deviceinfo-getdeviceserial-f-sys.md#getdeviceserial-2) | Obtains the device serial number. This API uses a promise to return the result. |
| [getDisplayVersion](arkts-mdm-deviceinfo-getdisplayversion-f-sys.md#getdisplayversion-1) | Obtains the device version number. This API uses an asynchronous callback to return the result. |
| [getDisplayVersion](arkts-mdm-deviceinfo-getdisplayversion-f-sys.md#getdisplayversion-2) | Obtains the device version number. This API uses a promise to return the result. |
<!--DelEnd-->

