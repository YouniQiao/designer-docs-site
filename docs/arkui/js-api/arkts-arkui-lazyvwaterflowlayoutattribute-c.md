# LazyVWaterFlowLayoutAttribute

Defines the lazy vertical waterflow layout attribute.

**Inheritance/Implementation:** LazyVWaterFlowLayoutAttribute extends [LazyWaterFlowLayoutAttribute<LazyVWaterFlowLayoutAttribute>](LazyWaterFlowLayoutAttribute<LazyVWaterFlowLayoutAttribute>)

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { LazyVWaterFlowLayout, LazyWaterFlowLayoutAttribute, LazyVWaterFlowLayoutAttribute } from '@ohos.arkui.components.ArkLazyWaterFlowLayout';
```

## columnsTemplate

```TypeScript
columnsTemplate(value: string | ItemFillPolicy | undefined): LazyVWaterFlowLayoutAttribute
```

This parameter specifies the number of columns in the current waterflow layout.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string \| ItemFillPolicy \| undefined | Yes | Number of columns in the layout.<br>Default value: '1fr'<br>When the value is a string, it sets the number of columns or the minimum column widthof the current <em>LazyVWaterFlowLayout</em>. For example,<em>columnsTemplate('1fr 1fr 2fr')</em> divides the <em>LazyVWaterFlowLayout</em> into 3 columns,splitting the width into 4 equal parts: column 1 takes 1 part, column 2 takes 1 part,and column 3 takes 2 parts. |

**Return value:**

| Type | Description |
| --- | --- |
| LazyVWaterFlowLayoutAttribute | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

