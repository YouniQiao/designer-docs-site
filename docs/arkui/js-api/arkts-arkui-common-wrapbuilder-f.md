# wrapBuilder

<a id="wrapbuilder"></a>
## wrapBuilder

```TypeScript
declare function wrapBuilder<Args extends Object[]>(builder: (...args: Args) => void): WrappedBuilder<Args>
```

wrapBuilder is a template function that returns a WrappedBuilder object.wrapBuilder only accepts a global @Builder decorated function as its argument.Of the WrappedBuilder object it returns, the builder attribute method can be used only inside the struct.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-unnamed-declare function wrapBuilder<Args extends Object[]>(builder: (...args: Args) => void): WrappedBuilder<Args>--><!--Device-unnamed-declare function wrapBuilder<Args extends Object[]>(builder: (...args: Args) => void): WrappedBuilder<Args>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| builder | (...args: Args) =&gt; void | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [WrappedBuilder](arkts-arkui-wrappedbuilder-c.md)&lt;Args&gt; | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

