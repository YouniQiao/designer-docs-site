# UIListEvent

frameNode中[getEvent('List')]FrameNode:typeNode.getEvent(node: FrameNode, nodeType: 'List')方法的返回值，可用于给List节点设置 滚动事件。 UIListEvent继承于[UIScrollableCommonEvent]UIScrollableCommonEvent。

**继承实现关系：** UIListEvent继承自：UIScrollableCommonEvent。

**起始版本：** 19

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## setOnDidScroll

```TypeScript
setOnDidScroll(callback: OnScrollCallback | undefined): void
```

设置[onDidScroll](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#ondidscroll12)事件的回调。 方法入参为undefined时，会重置事件回调。

**起始版本：** 19

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnScrollCallback \| undefined | 是 | onDidScroll事件的回调函数。 |

## setOnScrollIndex

```TypeScript
setOnScrollIndex(callback: OnListScrollIndexCallback | undefined): void
```

设置[onScrollIndex](docroot://reference/apis-arkui/arkui-ts/ts-container-list.md#onscrollindex)事件的回调。 方法入参为undefined时，会重置事件回调。

**起始版本：** 19

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnListScrollIndexCallback \| undefined | 是 | onScrollIndex事件的回调函数。 |

## setOnScrollVisibleContentChange

```TypeScript
setOnScrollVisibleContentChange(callback: OnScrollVisibleContentChangeCallback | undefined): void
```

设置[onScrollVisibleContentChange](arkts-listattribute-c.md#onScrollVisibleContentChange)事件的回调。 方法入参为undefined时，会重置事件回调。

**起始版本：** 19

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnScrollVisibleContentChangeCallback \| undefined | 是 | onScrollVisibleContentChange事件的回调函数。 |

## setOnWillScroll

```TypeScript
setOnWillScroll(callback: OnWillScrollCallback | undefined): void
```

设置[onWillScroll](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#onwillscroll12)事件的回调。 方法入参为undefined时，会重置事件回调。

**起始版本：** 19

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnWillScrollCallback \| undefined | 是 | onWillScroll事件的回调函数。 |

