# @ohos.systemParameterEnhance

The **SystemParameter** module provides system services with easy access to key-value pairs. You can use the APIs provided by this module to describe the service status and change the service behavior. The basic operation primitives are **get** and **set**. You can obtain the values of system parameters through getter APIs and modify the values through setter APIs. For details about the system parameter design principles and definitions, see [Parameter Management](../../../../../device-dev/subsystems/subsys-boot-init-sysparam.md). > **NOTE** > > - The APIs provided by this module are system APIs. > > - Third-party applications cannot use the APIs provided by this module because system parameters each require > specific discretionary access control (DAC) and mandatory access control (MAC) permissions.

**Since:** 9

**System capability:** SystemCapability.Startup.SystemInfo

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { systemParameterEnhance } from '@ohos.systemParameterEnhance';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [get](arkts-basicservices-get-f-sys.md#get-1) | Obtains a value of the specified key. This API uses an asynchronous callback to return the result. |
| [get](arkts-basicservices-get-f-sys.md#get-2) | Obtains a value of the specified key. This API uses an asynchronous callback to return the result. |
| [get](arkts-basicservices-get-f-sys.md#get-3) | Obtains a value of the specified key. This API uses a promise to return the result. |
| [getSync](arkts-basicservices-getsync-f-sys.md#getsync-1) | Obtains a value of the specified key. This API uses a promise to return the result. |
| [set](arkts-basicservices-set-f-sys.md#set-1) | Sets a value of the specified key. This API uses an asynchronous callback to return the result. |
| [set](arkts-basicservices-set-f-sys.md#set-2) | Sets a value of the specified key. This API uses a promise to return the result. |
| [setSync](arkts-basicservices-setsync-f-sys.md#setsync-1) | Sets a value for the specified key. This API uses a promise to return the result. |
<!--DelEnd-->

