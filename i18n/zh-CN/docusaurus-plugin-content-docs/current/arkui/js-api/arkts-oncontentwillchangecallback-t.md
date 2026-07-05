# OnContentWillChangeCallback

```TypeScript
export type OnContentWillChangeCallback = (currentIndex: number, comingIndex: number) => boolean
```

Callback for OnContentWillChange

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| currentIndex | number | 是 | the index value of the current tab. |
| comingIndex | number | 是 | the index value of the tab that will change. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | - |

