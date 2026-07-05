# SpaceType

```TypeScript
declare type SpaceType = string | number | Resource
```

Column组件构造函数中space支持的数据类型，取值类型为下表类型中的并集。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

| Type | Description |
| --- | --- |
| string | 表示值类型为字符串，可取任意值。 |
| number | 表示类型为数字，可取任意值。 |
| Resource | 表示值为资源引用类型，取值为从系统资源或者应用资源中引入的数据值。 |

