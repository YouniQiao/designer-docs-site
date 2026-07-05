# SubHeaderV2SelectOnSelect

```TypeScript
export type SubHeaderV2SelectOnSelect = (selectedIndex: number, selectedContent?: string) => void
```

The callback function that will be invoked when the selectedIndex of the SubHeaderV2Select is selected.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| selectedIndex | number | 是 | the index of selected item |
| selectedContent | string | 否 | the content of selected item |

