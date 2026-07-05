# ImmersiveMaterial

沉浸式材质类，继承自[Material]uiMaterial.MaterialType。 沉浸式材质根据设备算力有分档表现，设备算力的高、中、低档由设备厂商决定，定义在系统配置文件中。在高档和中档算力设备上，影响材质层滤镜效果和阴影 [shadow]CommonMethod#shadow(value: ShadowOptions | ShadowStyle)效果。在低档算力设备上，影响背景色 [backgroundColor](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-background.md#backgroundcolor)、边框 颜色[borderColor]CommonMethod#borderColor、边框宽度[borderWidth]CommonMethod#borderWidth、阴影 [shadow]CommonMethod#shadow(value: ShadowOptions | ShadowStyle)效果。且同一材质的效果，会受到设置应用中沉浸光感配置项的影响，不同强弱程度的沉浸光感配置 下，材质的参数和效果存在差异。

**Inheritance:** ImmersiveMaterialextends: Material.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { uiMaterial } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(options?: ImmersiveOptions)
```

ImmersiveMaterial的构造函数。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ImmersiveOptions | No |  |

