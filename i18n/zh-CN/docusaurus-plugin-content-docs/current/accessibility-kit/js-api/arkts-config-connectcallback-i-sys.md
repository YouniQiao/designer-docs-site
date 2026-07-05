# ConnectCallback

Callback provided when the [enableAbilityWithCallback]config.enableAbilityWithCallback API is called to enable an accessibility extension ability. This callback will be invoked when the connection to an auxiliary extension ability is disconnected.

**起始版本：** 23

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { config } from '@kit.AccessibilityKit';
```

## onDisconnect

```TypeScript
onDisconnect: OnDisconnectCallback
```

Callback to be invoked when the connection to an auxiliary extension ability is disconnected.

**类型：** OnDisconnectCallback

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

