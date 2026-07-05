# DivElement

The <div> component provides a div container.

**继承实现关系：** DivElement继承自：Element。

**起始版本：** 6

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## getScrollOffset

```TypeScript
getScrollOffset(): ScrollOffset
```

Returns the offset of the current scrolling. The return value type is Object.

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ScrollOffset |  |

## scrollBy

```TypeScript
scrollBy(data: ScrollParam): void
```

Scrolls the div for a certain distance.

**起始版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | ScrollParam | 是 |  |

