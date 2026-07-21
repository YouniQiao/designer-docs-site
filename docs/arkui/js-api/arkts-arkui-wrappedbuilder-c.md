# WrappedBuilder

The WrappedBuilder object is also a template class.

**Since:** 12

<!--Device-unnamed-declare class WrappedBuilder<Args extends Object[]>--><!--Device-unnamed-declare class WrappedBuilder<Args extends Object[]>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="constructor"></a>
## constructor

```TypeScript
constructor(builder: (...args: Args) => void)
```

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WrappedBuilder-constructor(builder: (...args: Args) => void)--><!--Device-WrappedBuilder-constructor(builder: (...args: Args) => void)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| builder | (...args: Args) =&gt; void | Yes |  |

## builder

```TypeScript
builder: (...args: Args) => void
```

global @Builder decorated function.

**Type:** (...args: Args) =&gt; void

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WrappedBuilder-builder: (...args: Args) => void--><!--Device-WrappedBuilder-builder: (...args: Args) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

