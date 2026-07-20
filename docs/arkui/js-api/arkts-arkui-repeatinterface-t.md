# RepeatInterface

```TypeScript
declare type RepeatInterface = <T>(arr: RepeatArray<T>) => RepeatAttribute<T>
```

Indicates the type of Repeat.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-unnamed-declare type RepeatInterface = <T>(arr: RepeatArray<T>) => RepeatAttribute<T>--><!--Device-unnamed-declare type RepeatInterface = <T>(arr: RepeatArray<T>) => RepeatAttribute<T>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| arr | RepeatArray&lt;T&gt; | Yes | The Data Source |

**Return value:**

| Type | Description |
| --- | --- |
| RepeatAttribute&lt;T&gt; | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

