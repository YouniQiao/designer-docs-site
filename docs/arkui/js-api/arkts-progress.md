# progress

定义Progress组件实例。

## progress

```TypeScript
<Type extends keyof ProgressStyleMap>(options: ProgressOptions<Type>): ProgressAttribute<Type>
```

创建进度条组件。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ProgressOptions&lt;Type> | Yes | 按进度条类型不同，设置不同属性的进度条组件参数。 |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [ProgressAttribute](arkts-progressattribute-c.md) | 除支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)外，还支持以下属性。 支持[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)。 |

### Interfaces

| Name | Description |
| --- | --- |
| [CapsuleStyleOptions](arkts-capsulestyleoptions-i.md) | 胶囊样式选项。 继承自[ScanEffectOptions]{@link ScanEffectOptions}和[CommonProgressStyleOptions]{@link CommonProgressStyleOptions}。 |
| [CommonProgressStyleOptions](arkts-commonprogressstyleoptions-i.md) | 进度条通用样式选项。 |
| [EclipseStyleOptions](arkts-eclipsestyleoptions-i.md) | 圆形样式选项。圆形样式的显示类似月圆月缺的进度展示效果，从月牙逐渐变化至满月。 继承自[CommonProgressStyleOptions]{@link CommonProgressStyleOptions}。 |
| [LinearStyleOptions](arkts-linearstyleoptions-i.md) | 线性样式选项。 继承自[ScanEffectOptions]{@link ScanEffectOptions}和[CommonProgressStyleOptions]{@link CommonProgressStyleOptions}。 |
| [ProgressConfiguration](arkts-progressconfiguration-i.md) | 进度条配置。继承自[CommonConfiguration]{@link CommonConfiguration}。 |
| [ProgressInterface](arkts-progressinterface-i.md) | 进度条组件，用于显示内容加载或操作处理等进度。 > **说明： |
| [ProgressOptions](arkts-progressoptions-i.md) | 进度条选项。 |
| [ProgressStyleMap](arkts-progressstylemap-i.md) | 进度条类型和样式的映射表。 |
| [ProgressStyleOptions](arkts-progressstyleoptions-i.md) | 进度条样式选项。 继承自[CommonProgressStyleOptions]{@link CommonProgressStyleOptions}。 |
| [RingStyleOptions](arkts-ringstyleoptions-i.md) | 环形无刻度样式选项。 继承自[ScanEffectOptions]{@link ScanEffectOptions}和[CommonProgressStyleOptions]{@link CommonProgressStyleOptions}。 |
| [ScaleRingStyleOptions](arkts-scaleringstyleoptions-i.md) | 环形有刻度样式选项。 继承自[CommonProgressStyleOptions]{@link CommonProgressStyleOptions}。 |
| [ScanEffectOptions](arkts-scaneffectoptions-i.md) | 扫光效果选项。 |

### Enums

| Name | Description |
| --- | --- |
| [ProgressStatus](arkts-progressstatus-e.md) | 进度条的当前状态。 |
| [ProgressStyle](arkts-progressstyle-e.md) | 进度条样式。 |
| [ProgressType](arkts-progresstype-e.md) | 进度条类型。 |

### Constants

| Name | Description |
| --- | --- |
| [Progress](arkts-progress-con.md#Progress) | 进度条组件，用于显示内容加载或操作处理等进度。 ###### 子组件 无 |
| [ProgressInstance](arkts-progress-con.md#ProgressInstance) | 定义Progress组件实例。 |

