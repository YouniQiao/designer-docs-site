# EnvDecorator

```TypeScript
declare type EnvDecorator = (value: SystemProperties) => PropertyDecorator
```

定义Env装饰器类型

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | SystemProperties | Yes | 用户输入的环境变量key值 |

**Return value:**

| Type | Description |
| --- | --- |
| PropertyDecorator | Env装饰器 |

