# Capability

```TypeScript
type Capability = 'retrieve' | 'touchGuide' | 'keyEventObserver' | 'zoom' | 'gesture'
```

Enumerates the capabilities of an accessibility application.

**起始版本：** 7

**原子化服务API：** 从API version 23开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 23开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

| 类型 | 说明 |
| --- | --- |
| 'retrieve' | Capability to retrieve the window content. |
| 'touchGuide' | Capability of touch guide mode. |
| 'keyEventObserver' | Capability to filter key events. |
| 'zoom' | Capability to control the display zoom level. Not supported currently. |
| 'gesture' | Capability to perform gesture actions. |

