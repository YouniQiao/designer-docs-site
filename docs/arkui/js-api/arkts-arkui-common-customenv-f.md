# CustomEnv

## CustomEnv

```TypeScript
declare function CustomEnv<T>(key: CustomEnvKey<T>): PropertyDecorator
```

Defines the custom environment PropertyDecorator.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | CustomEnvKey&lt;T&gt; | Yes | custom environment key. |

**Return value:**

| Type | Description |
| --- | --- |
| PropertyDecorator | CustomEnv decorator |

