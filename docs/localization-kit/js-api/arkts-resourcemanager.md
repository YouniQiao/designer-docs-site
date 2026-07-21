# @ohos.resourceManager

The **resourceManager** module provides the resource management functionality. It allows an application to obtain the best matched application resources or system resources based on the specified [configuration](arkts-localization-resourcemanager-configuration-c.md). For details about the matching rules, see [Matching Resources](docroot://quick-start/resource-categories-and-access.md#matching-resources).The configuration includes language, region, screen orientation, color mode, mobile country code (MCC), mobile network code (MNC), device capability, and density.

**Since:** 6

<!--Device-unnamed-declare namespace resourceManager--><!--Device-unnamed-declare namespace resourceManager-End-->

**System capability:** SystemCapability.Global.ResourceManager

## Modules to Import

```TypeScript
import { resourceManager } from '@kit.LocalizationKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getResourceManager](arkts-localization-resourcemanager-getresourcemanager-f.md#getresourcemanager) | Obtains the **ResourceManager** object of this application. This API uses an asynchronous callback to return the result. |
| [getResourceManager](arkts-localization-resourcemanager-getresourcemanager-f.md#getresourcemanager-1) | Obtains the **ResourceManager** object of the specified application. This API uses an asynchronous callback to return the result. |
| [getResourceManager](arkts-localization-resourcemanager-getresourcemanager-f.md#getresourcemanager-2) | Obtains the **ResourceManager** object of this application. This API uses a promise to return the result. |
| [getResourceManager](arkts-localization-resourcemanager-getresourcemanager-f.md#getresourcemanager-3) | Obtains the **ResourceManager** object of the specified application. This API uses a promise to return the result. |
| [getSysResourceManager](arkts-localization-resourcemanager-getsysresourcemanager-f.md#getsysresourcemanager) | Obtains a system **ResourceManager** object. |
| [getSystemResourceManager](arkts-localization-resourcemanager-getsystemresourcemanager-f.md#getsystemresourcemanager) | Obtains a system **ResourceManager** object. |

### Classes

| Name | Description |
| --- | --- |
| [Configuration](arkts-localization-resourcemanager-configuration-c.md) | Defines the device configuration. |
| [DeviceCapability](arkts-localization-resourcemanager-devicecapability-c.md) | Defines the device capability. |

### Interfaces

| Name | Description |
| --- | --- |
| [AsyncCallback](arkts-localization-resourcemanager-asynccallback-i.md) | The ResourceManager callback. |
| [ResourceManager](arkts-localization-resourcemanager-resourcemanager-i.md) | Provides APIs for accessing application resources and system resources. |

### Enums

| Name | Description |
| --- | --- |
| [ColorMode](arkts-localization-resourcemanager-colormode-e.md) | Defines the color mode of the current device. |
| [DeviceType](arkts-localization-resourcemanager-devicetype-e.md) | Enumerates the device types. |
| [Direction](arkts-localization-resourcemanager-direction-e.md) | Enumerates the screen directions. |
| [ScreenDensity](arkts-localization-resourcemanager-screendensity-e.md) | Enumerates the screen density types. |

### Types

| Name | Description |
| --- | --- |
| [RawFileDescriptor](arkts-localization-resourcemanager-rawfiledescriptor-t.md) | File descriptor (fd) of the HAP where the rawfile is located. |
| [Resource](arkts-localization-resourcemanager-resource-t.md) | Resource information, including the resource ID, application package name, and module name. Generally, you can use $r to obtain the resource information. |

