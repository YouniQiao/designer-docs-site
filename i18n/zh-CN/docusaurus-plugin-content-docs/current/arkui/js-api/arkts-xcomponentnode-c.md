# XComponentNode

Defines XComponent Node.

**继承实现关系：** XComponentNode继承自：FrameNode。

**起始版本：** 11

**废弃版本：** 12

**替代接口：** ohos.arkui.node/typeNode#XComponent

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## changeRenderType

```TypeScript
changeRenderType(type: NodeRenderType): boolean
```

Set the render type of the builderNode.

**起始版本：** 11

**废弃版本：** 12

**替代接口：** ohos.arkui.node/FrameNode#appendChild

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | NodeRenderType | 是 | render type |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | - Returns if change the render type successfully. |

## constructor

```TypeScript
constructor(uiContext: UIContext, options: RenderOptions,
    id: string, type: XComponentType, libraryName?: string)
```

constructor.

**起始版本：** 11

**废弃版本：** 12

**替代接口：** ohos.arkui.node/typeNode#createNode

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uiContext | UIContext | 是 | UIContext used to create the FrameNode |
| options | RenderOptions | 是 | Render options of the Builder Node |
| id | string | 是 | XComponent id defined by the application |
| type | XComponentType | 是 | XComponent type |
| libraryName | string | 否 | The name of the library to be loaded by XComponent |

## onCreate

```TypeScript
onCreate(event?: Object): void
```

Called when the XComponent surface has been created.

**起始版本：** 11

**废弃版本：** 12

**替代接口：** XComponent/XComponentAttribute#onLoad

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | Object | 否 | event from native when the library loaded |

## onDestroy

```TypeScript
onDestroy(): void
```

Called when the XComponent surface has been destroyed.

**起始版本：** 11

**废弃版本：** 12

**替代接口：** XComponent/XComponentAttribute#onDestroy

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

