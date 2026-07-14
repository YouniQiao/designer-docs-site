# @ohos.resourceManager

The **resourceManager** module provides the resource management functionality. It allows an application to obtain the best matched application resources or system resources based on the specified [configuration](arkts-localization-configuration-c.md). For details about the matching rules, see [Matching Resources](../../../../quick-start/resource-categories-and-access.md#matching-resources). The configuration includes language, region, screen orientation, color mode, mobile country code (MCC), mobile network code (MNC) , device capability, and density.

**Since:** 6

**System capability:** SystemCapability.Global.ResourceManager

## Modules to Import

```TypeScript
import { resourceManager } from '@kit.LocalizationKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getResourceManager](arkts-localization-getresourcemanager-f.md#getresourcemanager-1) | Obtains the **ResourceManager** object of this application. This API uses an asynchronous callback to return the result. |
| [getResourceManager](arkts-localization-getresourcemanager-f.md#getresourcemanager-2) | Obtains the **ResourceManager** object of the specified application. This API uses an asynchronous callback to return the result. |
| [getResourceManager](arkts-localization-getresourcemanager-f.md#getresourcemanager-3) | Obtains the **ResourceManager** object of this application. This API uses a promise to return the result. |
| [getResourceManager](arkts-localization-getresourcemanager-f.md#getresourcemanager-4) | Obtains the **ResourceManager** object of the specified application. This API uses a promise to return the result. |
| [getSysResourceManager](arkts-localization-getsysresourcemanager-f.md#getsysresourcemanager-1) | Obtains a system **ResourceManager** object. |
| [getSystemResourceManager](arkts-localization-getsystemresourcemanager-f.md#getsystemresourcemanager-1) | Obtains a system **ResourceManager** object. &gt; **NOTE** &gt; &gt; The **Configuration** field in the **ResourceManager** object obtained via this API uses the default value, &gt; which is as follows: &gt; {"locale": "", "direction": -1, "deviceType": -1, "screenDensity": 0, "colorMode": 1, "mcc": 0, "mnc": 0}. |

### Classes

| Name | Description |
| --- | --- |
| [Configuration](arkts-localization-configuration-c.md) | Defines the device configuration. |
| [DeviceCapability](arkts-localization-devicecapability-c.md) | Defines the device capability. |

### Interfaces

| Name | Description |
| --- | --- |
| [AsyncCallback](arkts-localization-asynccallback-i.md) | The ResourceManager callback. |
| [ResourceManager](arkts-localization-resourcemanager-i.md) | Provides APIs for accessing application resources and system resources. &gt; **NOTE** &gt; &gt; - The methods involved in **ResourceManager** are applicable only to the TypeScript-based declarative development &gt; paradigm. &gt; &gt; - Resource files are defined in the **resources** directory of the project. You can obtain resource values such &gt; as strings, string arrays, and colors based on the specified **resName**, **resId**, or **Resource** object. &gt; **resName** indicates the resource name, **resId** indicates the resource ID, which can be obtained through `$r( &gt; *resource-address*).id`, for example, `$r('app.string.test').id`. &gt; &gt; - No matter whether resources are in the same HAP or different HAPs or HSPs, you are advised to use the API with &gt; **resName** or **resId** specified. Using the **Resource** object will take a longer time. If the resources are &gt; in different HAPs or HSPs, you first need to use &gt; [createModuleContext](../../apis-ability-kit/arkts-apis/arkts-ability-createmodulecontext-f.md#createmodulecontext-1) &gt; to create the context of the corresponding module and then call the API with **resName** or **resId** specified. &gt; For details, see &gt; [Accessing Resources](../../../../quick-start/resource-categories-and-access.md#accessing-resources). &gt; &gt; - In API version 22 and earlier versions, an exception is thrown due to an invalid ID when the intermediate-code &gt; HAR or bytecode HAR accesses resources through resource ID-related APIs. From API version 23, the &gt; intermediate-code HAR or bytecode HAR can properly access resources through resource ID-related APIs. &gt; For details, see [Accessing Resources](../../../../quick-start/resource-categories-and-access.md#accessing-resources). &gt; &gt; - For details about the content of the test files used in the sample code, see &gt; [Appendix](../../../../reference/apis-localization-kit/js-apis-resource-manager.md#appendix). |

### Enums

| Name | Description |
| --- | --- |
| [ColorMode](arkts-localization-colormode-e.md) | Defines the color mode of the current device. |
| [DeviceType](arkts-localization-devicetype-e.md) | Enumerates the device types. |
| [Direction](arkts-localization-direction-e.md) | Enumerates the screen directions. |
| [ScreenDensity](arkts-localization-screendensity-e.md) | Enumerates the screen density types. |

### Types

| Name | Description |
| --- | --- |
| [RawFileDescriptor](arkts-localization-rawfiledescriptor-t.md) | File descriptor (fd) of the HAP where the rawfile is located. |
| [Resource](arkts-localization-resource-t.md) | Resource information, including the resource ID, application package name, and module name. Generally, you can use $r to obtain the resource information. |

