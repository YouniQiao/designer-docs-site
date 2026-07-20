# MonitorDecorator

```TypeScript
declare type MonitorDecorator = (value: string | MonitorDecoratorOptions, ...args: string[]) => MethodDecorator
```

Defines Monitor Decorator type

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

<!--Device-unnamed-declare type MonitorDecorator = (value: string | MonitorDecoratorOptions, ...args: string[]) => MethodDecorator--><!--Device-unnamed-declare type MonitorDecorator = (value: string | MonitorDecoratorOptions, ...args: string[]) => MethodDecorator-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string \| MonitorDecoratorOptions | Yes | Monitored path input by the user or config options. |
| args | string[] | Yes | Monitored path(s) input by the user |

**Return value:**

| Type | Description |
| --- | --- |
| MethodDecorator | Monitor decorator |

