# TouchTestDoneCallback

```TypeScript
declare type TouchTestDoneCallback = (event: BaseGestureEvent, recognizers: Array<GestureRecognizer>) => void
```

动态指定手势识别器是否参与手势处理的回调事件类型，回调内参数的生命周期跟随回调本身，参数内的方法仅支持在回调内同步使用。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | BaseGestureEvent | Yes | [触摸测试](docroot://ui/arkts-interaction-basic-principles.md#触摸测试)结束后的基础手势事件的信息。  说明： 仅包含BaseGestureEvent的信息，不包含其子类拓展信息。 axisHorizontal和axisVertical的值为0。 |
| recognizers | Array&lt;GestureRecognizer> | Yes | [触摸测试](docroot://ui/arkts-interaction-basic-principles.md#触摸测试)结束后，  所有手势识别器对象。 |

