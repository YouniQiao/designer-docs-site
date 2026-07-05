# ImageErrorCallback

```TypeScript
type ImageErrorCallback = (error: ImageError) => void
```

图片加载异常时触发此回调。 当组件的参数类型为[AnimatedDrawableDescriptor](arkts-animateddrawabledescriptor-c.md#AnimatedDrawableDescriptor)时该 事件不触发。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| error | ImageError | Yes | 图片加载异常时触发回调的返回对象。 [since 11] |

