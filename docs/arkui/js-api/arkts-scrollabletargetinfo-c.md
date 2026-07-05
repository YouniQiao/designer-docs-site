# ScrollableTargetInfo

手势识别器对应的滚动类容器组件的信息，继承于[EventTargetInfo](arkts-eventtargetinfo-c.md#EventTargetInfo)。

**Inheritance:** ScrollableTargetInfoextends: EventTargetInfo.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isBegin

```TypeScript
isBegin(): boolean
```

返回当前滚动类容器组件是否在顶部，如果为Swiper组件且在循环模式下返回false。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 当前滚动类容器组件是否在顶部。true表示组件在顶部，false表示组件不在顶部。 |

## isEnd

```TypeScript
isEnd(): boolean
```

返回当前滚动类容器组件是否在底部，如果为Swiper组件且在循环模式下返回false。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 当前滚动类容器组件是否在底部。true表示组件在底部，false表示组件不在底部。 |

