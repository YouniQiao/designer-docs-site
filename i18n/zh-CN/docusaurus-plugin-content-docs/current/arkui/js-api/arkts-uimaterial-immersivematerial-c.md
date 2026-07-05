# ImmersiveMaterial

沉浸式材质类，继承自[Material]uiMaterial.MaterialType。 沉浸式材质根据设备算力有分档表现，设备算力的高、中、低档由设备厂商决定，定义在系统配置文件中。在高档和中档算力设备上，影响材质层滤镜效果和阴影 [shadow]CommonMethod#shadow(value: ShadowOptions | ShadowStyle)效果。在低档算力设备上，影响背景色 [backgroundColor](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-background.md#backgroundcolor)、边框 颜色[borderColor]CommonMethod#borderColor、边框宽度[borderWidth]CommonMethod#borderWidth、阴影 [shadow]CommonMethod#shadow(value: ShadowOptions | ShadowStyle)效果。且同一材质的效果，会受到设置应用中沉浸光感配置项的影响，不同强弱程度的沉浸光感配置 下，材质的参数和效果存在差异。

**继承实现关系：** ImmersiveMaterial继承自：Material。

**起始版本：** 26.0.0

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { uiMaterial } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(options?: ImmersiveOptions)
```

ImmersiveMaterial的构造函数。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | ImmersiveOptions | 否 |  |

