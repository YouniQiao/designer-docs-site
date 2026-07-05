# GestureModifier

开发者需要自定义class实现GestureModifier接口。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## applyGesture

```TypeScript
applyGesture(event: UIGestureEvent): void
```

手势更新函数。 开发者可根据需要自定义实现该方法，对组件设置需要绑定的手势，支持使用if/else语法进行动态设置。若在当次手势操作过程中触发了组件上的手势动态切换，该切换效果在当次手势结束（所有手指抬起）后的下一次手势操作中生效。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | UIGestureEvent | Yes | UIGestureEvent对象，用于设置组件需要绑定的手势。 |

