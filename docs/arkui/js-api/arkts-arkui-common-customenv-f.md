# CustomEnv

<a id="customenv"></a>
## CustomEnv

```TypeScript
declare function CustomEnv<T>(key: CustomEnvKey<T>): PropertyDecorator
```

Defines the custom environment PropertyDecorator.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-unnamed-declare function CustomEnv<T>(key: CustomEnvKey<T>): PropertyDecorator--><!--Device-unnamed-declare function CustomEnv<T>(key: CustomEnvKey<T>): PropertyDecorator-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | [CustomEnvKey](arkts-arkui-customenvkey-c.md)&lt;T&gt; | Yes | custom environment key. |

**Return value:**

| Type | Description |
| --- | --- |
| [PropertyDecorator](../../apis-na/arkts-apis/arkts-na-propertydecorator-t.md) | CustomEnv decorator |

