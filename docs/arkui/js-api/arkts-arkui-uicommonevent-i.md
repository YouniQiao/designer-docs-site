# UICommonEvent

Implements a common event callback. Passing **undefined** as the input parameter resets the corresponding event callback.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## setOnAppear

```TypeScript
setOnAppear(callback: Callback<void> | undefined): void
```

Sets the callback for the [onAppear](arkts-arkui-commonmethod-c.md#onappear-1) event.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void&gt; \| undefined | Yes | Callback invoked when the component appears. |

## setOnBlur

```TypeScript
setOnBlur(callback: Callback<void> | undefined): void
```

Sets the callback for the [onBlur](arkts-arkui-commonmethod-c.md#onblur-1) event.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void&gt; \| undefined | Yes | Callback for the blur event. |

## setOnClick

```TypeScript
setOnClick(callback: Callback<ClickEvent> | undefined): void
```

Set the callback for the [click event](arkts-arkui-commonmethod-c.md#onclick-1).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ClickEvent&gt; \| undefined | Yes | Callback for the click event. |

## setOnDisappear

```TypeScript
setOnDisappear(callback: Callback<void> | undefined): void
```

Sets the callback for the [onDisAppear](arkts-arkui-commonmethod-c.md#ondisappear-1) event.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void&gt; \| undefined | Yes | Callback invoked when the component disappears. |

## setOnFocus

```TypeScript
setOnFocus(callback: Callback<void> | undefined): void
```

Sets the callback for the [onFocus](arkts-arkui-commonmethod-c.md#onfocus-1) event.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void&gt; \| undefined | Yes | Callback for the focus event. |

## setOnHover

```TypeScript
setOnHover(callback: HoverCallback | undefined): void
```

Sets the callback for the [onHover](arkts-arkui-commonmethod-c.md#onhover-1) event.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | HoverCallback \| undefined | Yes | Callback for the hover event. |

## setOnKeyEvent

```TypeScript
setOnKeyEvent(callback: Callback<KeyEvent> | undefined): void
```

Sets the callback for the [key event](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md#common).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;KeyEvent&gt; \| undefined | Yes | Callback for the key event. |

## setOnMouse

```TypeScript
setOnMouse(callback: Callback<MouseEvent> | undefined): void
```

Sets the callback for the [onMouse](arkts-arkui-commonmethod-c.md#onmouse-1) event.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;MouseEvent&gt; \| undefined | Yes | Callback for the mouse event. |

## setOnSizeChange

```TypeScript
setOnSizeChange(callback: SizeChangeCallback | undefined): void
```

Sets the callback for the [onSizeChange](arkts-arkui-commonmethod-c.md#onsizechange-1) event, which is triggered when the component's size changes.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | SizeChangeCallback \| undefined | Yes | Callback invoked when the component's size changes. |

## setOnTouch

```TypeScript
setOnTouch(callback: Callback<TouchEvent> | undefined): void
```

Sets the callback for the [touch event](arkts-arkui-commonmethod-c.md#ontouch-1).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;TouchEvent&gt; \| undefined | Yes | Callback for the touch event. |

## setOnVisibleAreaApproximateChange

```TypeScript
setOnVisibleAreaApproximateChange(options: VisibleAreaEventOptions, event: VisibleAreaChangeCallback | undefined): void
```

Sets the callback for the [onVisibleAreaChange](arkts-arkui-commonmethod-c.md#onvisibleareachange-1) visible area change event.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | VisibleAreaEventOptions | Yes | Configuration options for visible area change detection. |
| event | VisibleAreaChangeCallback \| undefined | Yes | Callback invoked when the ratio of the component's visiblearea to its total area crosses the threshold specified in **options**. |

