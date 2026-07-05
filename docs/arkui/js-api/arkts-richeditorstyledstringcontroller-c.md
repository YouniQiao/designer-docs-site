# RichEditorStyledStringController

使用属性字符串构建的RichEditor组件的控制器，继承自[RichEditorBaseController](arkts-richeditorbasecontroller-c.md#RichEditorBaseController)。

**Inheritance:** RichEditorStyledStringControllerextends: RichEditorBaseController, implements: StyledStringController.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getSelection

```TypeScript
getSelection(): RichEditorRange
```

获取富文本当前的选中区域范围。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| RichEditorRange | 选中区域范围。  当controller未绑定组件或绑定controller的组件被释放时，返回undefined。 |

## getStyledString

```TypeScript
getStyledString(): MutableStyledString
```

获取富文本组件显示的属性字符串。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| MutableStyledString | 富文本组件显示的属性字符串。  当controller未绑定组件或绑定controller的组件被释放时，返回undefined。 |

## onContentChanged

```TypeScript
onContentChanged(listener: StyledStringChangedListener): void
```

注册文本内容变化回调，该回调仅在后端程序导致文本内容变更时触发，调用[setStyledString](arkts-richeditorstyledstringcontroller-c.md#setStyledString)时不会触发。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| listener | StyledStringChangedListener | Yes | 文本内容变化回调监听器。 |

## setStyledString

```TypeScript
setStyledString(styledString: StyledString): void
```

设置富文本组件显示的属性字符串。 > **说明：** > > - 调用该接口时，会全量替换富文本组件的StyledString，并重新渲染。 > > - 当内容超过组件本身区域时，组件会自动向上滚动内容直到末尾处可见。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| styledString | StyledString | Yes | 属性字符串。 说明： StyledString的子类  [MutableStyledString](arkts-mutablestyledstring-c.md#MutableStyledString)也可以作为入参值。 |

