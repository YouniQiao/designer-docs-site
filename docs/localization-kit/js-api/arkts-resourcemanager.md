# @ohos.resourceManager

本模块提供资源获取能力。根据当前的[Configuration]{@link resourceManager.Configuration}配置，获取最匹配的应用资源或系统资源。 具体匹配规则参考[资源匹配](docroot://quick-start/resource-categories-and-access.md#资源匹配)。 Configuration配置包括语言、区域、横竖屏、颜色模式、Mcc（移动国家码）和Mnc（移动网络码）、Device capability（设备类型）、Density（分辨率）。

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
| [getResourceManager](arkts-resourcemanager-getresourcemanager-f.md#getResourceManager-1) | 获取当前应用的资源管理对象，使用callback异步回调。 |
| [getResourceManager](arkts-resourcemanager-getresourcemanager-f.md#getResourceManager-2) | 获取指定应用的资源管理对象，使用callback异步回调。 |
| [getResourceManager](arkts-resourcemanager-getresourcemanager-f.md#getResourceManager-3) | 获取当前应用的资源管理对象，使用Promise异步回调。 |
| [getResourceManager](arkts-resourcemanager-getresourcemanager-f.md#getResourceManager-4) | 获取指定应用的资源管理对象，使用Promise异步回调。 |
| [getSysResourceManager](arkts-resourcemanager-getsysresourcemanager-f.md#getSysResourceManager-1) | 获取系统资源管理对象。 |
| [getSystemResourceManager](arkts-resourcemanager-getsystemresourcemanager-f.md#getSystemResourceManager-1) | 获取系统资源管理ResourceManager对象。 > **说明** > > 当前接口获取到的系统资源管理ResourceManager对象中的Configuration为默认值。默认值如下： > {"locale": "", "direction": -1, "deviceType": -1, "screenDensity": 0, "colorMode": 1, "mcc": 0, "mnc": 0}。 |

### Classes

| Name | Description |
| --- | --- |
| [Configuration](arkts-resourcemanager-configuration-c.md) | 表示当前设备的状态。 |
| [DeviceCapability](arkts-resourcemanager-devicecapability-c.md) | 表示设备支持的能力。 |

### Interfaces

| Name | Description |
| --- | --- |
| [AsyncCallback](arkts-resourcemanager-asynccallback-i.md) | The ResourceManager callback. |
| [ResourceManager](arkts-resourcemanager-resourcemanager-i.md) | 提供访问应用资源和系统资源的能力。 > **说明：** > > - ResourceManager涉及到的方法，仅限基于TS扩展的声明式开发范式使用。 > > - 资源文件在工程的resources目录中定义，通过resName、resId、Resource对象等可以获取对应的字符串、字符串数组、颜色等资源值，resName为资源名称，resId可通过`$r(资源地址).id`的方式 > 获取，例如`$r('app.string.test').id`。 > > - 单HAP包获取自身资源、跨HAP/HSP包获取资源，由于入参为Resource的接口相比于入参为resName、resId的接口耗时更长，因此更推荐使用参数为resName或resId的接口。跨HAP/HSP包获取资源， > **需要先使用[createModuleContext]{@link @ohos.app.ability.application:application.createModuleContext(context: Context, moduleName: string)}创建对应module的context** > ，再调用参数为resName或resId的接口。更多请参考[资源访问](docroot://quick-start/resource-categories-and-access.md#资源访问)。 > > - 在API version 22及之前版本，中间码HAR、字节码HAR通过资源ID相关接口访问资源时，因ID无效会抛出异常；从API version 23开始，中间码HAR、字节码HAR通过资源ID相关接口可以正常访问资源， > 更多请参考[资源访问](docroot://quick-start/resource-categories-and-access.md#资源访问)。 > > - 示例代码中test文件的具体内容请参考[附录](docroot://reference/apis-localization-kit/js-apis-resource-manager.md#附录)。 |

### Types

| Name | Description |
| --- | --- |
| [RawFileDescriptor](arkts-resourcemanager-rawfiledescriptor-t.md) | 表示rawfile文件所在HAP的文件描述符（fd）。 |
| [Resource](arkts-resourcemanager-resource-t.md) | 表示资源信息，包含资源ID值、应用包名、模块名称等信息，一般可使用$r方式获取。 |

### Enums

| Name | Description |
| --- | --- |
| [ColorMode](arkts-resourcemanager-colormode-e.md) | 用于表示当前设备颜色模式。 |
| [DeviceType](arkts-resourcemanager-devicetype-e.md) | 用于表示当前设备类型。 |
| [Direction](arkts-resourcemanager-direction-e.md) | 用于表示设备屏幕方向。 |
| [ScreenDensity](arkts-resourcemanager-screendensity-e.md) | 用于表示当前设备屏幕密度。 |

