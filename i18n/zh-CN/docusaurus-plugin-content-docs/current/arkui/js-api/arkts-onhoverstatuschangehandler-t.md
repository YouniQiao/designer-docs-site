# OnHoverStatusChangeHandler

```TypeScript
export type OnHoverStatusChangeHandler = (status: HoverModeStatus) => void
```

Implements a handler for the **onHoverStatusChange** event.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| status | HoverModeStatus | 是 | Callback function triggered when the foldable device enters or exits  the semi-folded state. |

