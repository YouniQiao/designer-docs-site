# @ohos.app.ability.autoStartupManager

The autoStartupManager module provides APIs for an application to query whether it is configured to start
automatically at boot time.

**Since:** 21

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { autoStartupManager } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getAutoStartupStatusForSelf](arkts-ability-getautostartupstatusforself-f.md#getautostartupstatusforself-1) | Checks whether the current application is enabled for automatic startup at boot time. This API uses a promise toreturn the result.This API can be properly called only on phones, PC/2-in-1 devices, tablets, and wearables. On other devices, itreturns the error code 801. |
| [isAutoStartupSupported](arkts-ability-isautostartupsupported-f.md#isautostartupsupported-1) | Check whether the current device supports auto startup on this device. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [cancelApplicationAutoStartup](arkts-ability-cancelapplicationautostartup-f-sys.md#cancelapplicationautostartup-1) | Cancels the auto-startup setting for an application component. This API uses an asynchronous callback to return theresult.Starting from API version 21, this API can be properly called only on phones, 2-in-1 devices, tablets, andwearables. On other devices, it returns the error code 16000050.Starting from API version 18, this API can be properly called on 2-in-1 devices and wearables. If it is called onother device types, error code 16000050 is returned.For versions earlier than API version 18, this API can be properly called only on 2-in-1 devices. If it is calledon other device types, error code 16000050 is returned. |
| [cancelApplicationAutoStartup](arkts-ability-cancelapplicationautostartup-f-sys.md#cancelapplicationautostartup-2) | Cancels the auto-startup setting for an application component. This API uses a promise to return the result.Starting from API version 21, this API can be properly called only on phones, 2-in-1 devices, tablets, andwearables. On other devices, it returns the error code 16000050.Starting from API version 18, this API can be properly called on 2-in-1 devices and wearables. If it is called onother device types, error code 16000050 is returned.For versions earlier than API version 18, this API can be properly called only on 2-in-1 devices. If it is calledon other device types, error code 16000050 is returned. |
| [off](arkts-ability-off-f-sys.md#off-1) | Unregisters the callback used to listen for auto-startup status changes of an application component.Starting from API version 21, this API can be properly called only on phones, 2-in-1 devices, tablets, andwearables. On other devices, it returns the error code 16000050.Starting from API version 18, this API can be properly called on 2-in-1 devices and wearables. If it is called onother device types, error code 16000050 is returned.For versions earlier than API version 18, this API can be properly called only on 2-in-1 devices. If it is calledon other device types, error code 16000050 is returned. |
| [on](arkts-ability-on-f-sys.md#on-1) | Registers a callback to listen for auto-startup status changes of an application component.Starting from API version 21, this API can be properly called only on phones, 2-in-1 devices, tablets, andwearables. On other devices, it returns the error code 16000050.Starting from API version 18, this API can be properly called on 2-in-1 devices and wearables. If it is called onother device types, error code 16000050 is returned.For versions earlier than API version 18, this API can be properly called only on 2-in-1 devices. If it is calledon other device types, error code 16000050 is returned. |
| [queryAllAutoStartupApplications](arkts-ability-queryallautostartupapplications-f-sys.md#queryallautostartupapplications-1) | Obtains information about all auto-startup application components. This API uses an asynchronous callback to returnthe result.Starting from API version 21, this API can be properly called only on phones, 2-in-1 devices, tablets, andwearables. On other devices, it returns the error code 16000050.Starting from API version 18, this API can be properly called on 2-in-1 devices and wearables. If it is called onother device types, error code 16000050 is returned.For versions earlier than API version 18, this API can be properly called only on 2-in-1 devices. If it is calledon other device types, error code 16000050 is returned. |
| [queryAllAutoStartupApplications](arkts-ability-queryallautostartupapplications-f-sys.md#queryallautostartupapplications-2) | Obtains information about all auto-startup application components. This API uses a promise to return the result.Starting from API version 21, this API can be properly called only on phones, 2-in-1 devices, tablets, andwearables. On other devices, it returns the error code 16000050.Starting from API version 18, this API can be properly called on 2-in-1 devices and wearables. If it is called onother device types, error code 16000050 is returned.For versions earlier than API version 18, this API can be properly called only on 2-in-1 devices. If it is calledon other device types, error code 16000050 is returned. |
| [setApplicationAutoStartup](arkts-ability-setapplicationautostartup-f-sys.md#setapplicationautostartup-1) | Sets an application component to automatically start upon system boot. This API uses an asynchronous callback toreturn the result.Starting from API version 21, this API can be properly called only on phones, 2-in-1 devices, tablets, andwearables. On other devices, it returns the error code 16000050.Starting from API version 18, this API can be properly called on 2-in-1 devices and wearables. If it is called onother device types, error code 16000050 is returned.For versions earlier than API version 18, this API can be properly called only on 2-in-1 devices. If it is calledon other device types, error code 16000050 is returned. |
| [setApplicationAutoStartup](arkts-ability-setapplicationautostartup-f-sys.md#setapplicationautostartup-2) | Sets an application component to automatically start upon system boot. This API uses a promise to return theresult.Starting from API version 21, this API can be properly called only on phones, 2-in-1 devices, tablets, andwearables. On other devices, it returns the error code 16000050.Starting from API version 18, this API can be properly called on 2-in-1 devices and wearables. If it is called onother device types, error code 16000050 is returned.For versions earlier than API version 18, this API can be properly called only on 2-in-1 devices. If it is calledon other device types, error code 16000050 is returned. |
<!--DelEnd-->

