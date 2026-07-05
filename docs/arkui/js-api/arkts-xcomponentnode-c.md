# XComponentNode

Defines XComponent Node.

**Inheritance:** XComponentNodeextends: FrameNode.

**Since:** 11

**Deprecated since:** 12

**Substitute:** ohos.arkui.node/typeNode#XComponent

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## changeRenderType

```TypeScript
changeRenderType(type: NodeRenderType): boolean
```

Set the render type of the builderNode.

**Since:** 11

**Deprecated since:** 12

**Substitute:** ohos.arkui.node/FrameNode#appendChild

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | NodeRenderType | Yes | render type |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | - Returns if change the render type successfully. |

## constructor

```TypeScript
constructor(uiContext: UIContext, options: RenderOptions,
    id: string, type: XComponentType, libraryName?: string)
```

constructor.

**Since:** 11

**Deprecated since:** 12

**Substitute:** ohos.arkui.node/typeNode#createNode

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uiContext | UIContext | Yes | UIContext used to create the FrameNode |
| options | RenderOptions | Yes | Render options of the Builder Node |
| id | string | Yes | XComponent id defined by the application |
| type | XComponentType | Yes | XComponent type |
| libraryName | string | No | The name of the library to be loaded by XComponent |

## onCreate

```TypeScript
onCreate(event?: Object): void
```

Called when the XComponent surface has been created.

**Since:** 11

**Deprecated since:** 12

**Substitute:** XComponent/XComponentAttribute#onLoad

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Object | No | event from native when the library loaded |

## onDestroy

```TypeScript
onDestroy(): void
```

Called when the XComponent surface has been destroyed.

**Since:** 11

**Deprecated since:** 12

**Substitute:** XComponent/XComponentAttribute#onDestroy

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

