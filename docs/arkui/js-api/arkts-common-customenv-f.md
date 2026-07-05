# CustomEnv

## CustomEnv

```TypeScript
declare function CustomEnv<T>(key: CustomEnvKey<T>): PropertyDecorator
```

定义自定义环境PropertyDecorator。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | CustomEnvKey&lt;T> | Yes | 自定义环境密钥 |

**Return value:**

| Type | Description |
| --- | --- |
| PropertyDecorator | CustomEnv装饰器 |

