# @ohos.arkui.uiMaterial

本模块提供系统材质的接口定义。不同的系统材质对应不同的UI效果，包括背景色 [backgroundColor](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-background.md#backgroundcolor)、边框颜色 [borderColor]{@link CommonMethod#borderColor}、边框宽度[borderWidth]{@link CommonMethod#borderWidth}、阴影 [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}效果。

**Since:** 23

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { uiMaterial } from '@kit.ArkUI';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getMaterialInfo](arkts-uimaterial-getmaterialinfo-f.md#getMaterialInfo-1) | 获取当前应用的材质配置信息。返回的配置信息来自应用在[module.json5](docroot://quick-start/module-configuration-file.md)中配置的metadata。 |

### Classes

| Name | Description |
| --- | --- |
| [ImmersiveMaterial](arkts-uimaterial-immersivematerial-c.md) | 沉浸式材质类，继承自[Material]{@link uiMaterial.MaterialType}。 沉浸式材质根据设备算力有分档表现，设备算力的高、中、低档由设备厂商决定，定义在系统配置文件中。在高档和中档算力设备上，影响材质层滤镜效果和阴影 [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}效果。在低档算力设备上，影响背景色 [backgroundColor](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-background.md#backgroundcolor)、边框 颜色[borderColor]{@link CommonMethod#borderColor}、边框宽度[borderWidth]{@link CommonMethod#borderWidth}、阴影 [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}效果。且同一材质的效果，会受到设置应用中沉浸光感配置项的影响，不同强弱程度的沉浸光感配置 下，材质的参数和效果存在差异。 |
| <!--DelRow-->[Material](arkts-uimaterial-material-c-sys.md) | 系统材质对象基类。 |

### Interfaces

| Name | Description |
| --- | --- |
| [ImmersiveOptions](arkts-uimaterial-immersiveoptions-i.md) | 沉浸式材质参数。 |
| [LightEffectOptions](arkts-uimaterial-lighteffectoptions-i.md) | 沉浸式材质的光感交互反馈配置。用于自定义反馈光感的颜色。 |
| [MaterialInfo](arkts-uimaterial-materialinfo-i.md) | 材质配置信息，包含材质使能状态和材质类型。 |
| <!--DelRow-->[MaterialOptions](arkts-uimaterial-materialoptions-i-sys.md) | 系统材质选项。 |

### Enums

| Name | Description |
| --- | --- |
| [ImmersiveStyle](arkts-uimaterial-immersivestyle-e.md) | 沉浸式材质样式枚举。不同的材质样式对应不同的材质参数，主要包括材质的模糊程度、高光效果等。 |
| [MaterialState](arkts-uimaterial-materialstate-e.md) | 材质使能状态枚举，表示应用级沉浸式系统材质配置的状态。 |
| <!--DelRow-->[MaterialType](arkts-uimaterial-materialtype-e-sys.md) | 系统材质类型枚举。 |

