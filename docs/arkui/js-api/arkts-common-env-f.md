# Env

## Env

```TypeScript
declare function Env<T>(key: SystemEnvKey<T> | SystemProperties): PropertyDecorator
```

定义Env PropertyDecorator。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | SystemEnvKey&lt;T> \| SystemProperties | Yes | 用户输入的键值。【自22至26】 |

**Return value:**

| Type | Description |
| --- | --- |
| PropertyDecorator | 环境装饰器 |

