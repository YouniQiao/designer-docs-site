# ContentModifier

Defines the content modifier.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## applyContent

```TypeScript
applyContent(): WrappedBuilder<[T]>
```

Defining applyContent function.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| WrappedBuilder&lt;[T]&gt; | Component attribute class, which is used to distinguish different information required by different componentsafter content areas are customized, for example, ButtonConfiguration for the Button component andCheckBoxConfiguration of the Checkbox component. |

