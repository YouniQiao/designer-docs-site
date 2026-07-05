# isEmbeddedUIExtensionSupported

## isEmbeddedUIExtensionSupported

```TypeScript
function isEmbeddedUIExtensionSupported(): boolean
```

开发者通过调用该接口判断[EmbeddedUIExtensionAbility](docroot://application-models/embeddeduiextensionability.md)是否可以在当前设备上使用。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 当前设备是否支持[EmbeddedUIExtensionAbility](docroot://application-models/embeddeduiextensionability.md)。返回  true表示当前设备支持；返回false表示当前设备不支持。 |

