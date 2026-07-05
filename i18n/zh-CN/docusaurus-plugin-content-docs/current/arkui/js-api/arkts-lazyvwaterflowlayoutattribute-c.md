# LazyVWaterFlowLayoutAttribute

Defines the lazy vertical waterflow layout attribute.

**继承实现关系：** LazyVWaterFlowLayoutAttribute继承自：LazyWaterFlowLayoutAttribute<LazyVWaterFlowLayoutAttribute>。

**起始版本：** 26.0.0

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { LazyVWaterFlowLayout,LazyWaterFlowLayoutAttribute,LazyVWaterFlowLayoutAttribute } from '@kit.ArkUI';
```

## columnsTemplate

```TypeScript
columnsTemplate(value: string | ItemFillPolicy | undefined): LazyVWaterFlowLayoutAttribute
```

This parameter specifies the number of columns in the current waterflow layout.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | string \| ItemFillPolicy \| undefined | 是 | Number of columns in the layout.  Default value: '1fr'  When the value is a string, it sets the number of columns or the minimum column width  of the current LazyVWaterFlowLayout. For example,  columnsTemplate('1fr 1fr 2fr') divides the LazyVWaterFlowLayout into 3 columns,  splitting the width into 4 equal parts: column 1 takes 1 part, column 2 takes 1 part,  and column 3 takes 2 parts. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| LazyVWaterFlowLayoutAttribute |  |

