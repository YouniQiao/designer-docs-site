# OnMenuItemClickWithTextCallback

```TypeScript
export type OnMenuItemClickWithTextCallback = (menuItem: TextMenuItem, value: string) => boolean
```

Invoke upon clicking an item, capable of intercepting the default system menu execution behavior.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| menuItem | TextMenuItem | 是 | current clicked menu item. |
| value | string | 是 | selected text content. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Return true if the event is consumed; false otherwise. |

