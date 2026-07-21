# Env

<a id="env"></a>
## Env

```TypeScript
declare function Env<T>(key: SystemEnvKey<T> | SystemProperties): PropertyDecorator
```

Defining Env PropertyDecorator.On API 26.0.0 and above, the parameter also supports the SystemEnvKey<T> type.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-unnamed-declare function Env<T>(key: SystemEnvKey<T> | SystemProperties): PropertyDecorator--><!--Device-unnamed-declare function Env<T>(key: SystemEnvKey<T> | SystemProperties): PropertyDecorator-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | [SystemEnvKey](arkts-arkui-systemenvkey-c.md)&lt;T&gt; \| SystemProperties | Yes | key value input by the user.<br>**Since:** 26.0.0 |

**Return value:**

| Type | Description |
| --- | --- |
| [PropertyDecorator](../../apis-na/arkts-apis/arkts-na-propertydecorator-t.md) | Env decorator |

