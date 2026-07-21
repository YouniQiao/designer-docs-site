# UICommonEvent

Implements a common event callback. Passing **undefined** as the input parameter resets the corresponding event callback.

**Since:** 12

<!--Device-unnamed-declare interface UICommonEvent--><!--Device-unnamed-declare interface UICommonEvent-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="setonappear"></a>
## setOnAppear

```TypeScript
setOnAppear(callback: Callback<void> | undefined): void
```

Sets the callback for the [onAppear](arkts-arkui-commonmethod-c.md#onappear-1) event.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UICommonEvent-setOnAppear(callback: Callback<void> | undefined): void--><!--Device-UICommonEvent-setOnAppear(callback: Callback<void> | undefined): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;void&gt; \| undefined | Yes | Callback invoked when the component appears. |

<a id="setonblur"></a>
## setOnBlur

```TypeScript
setOnBlur(callback: Callback<void> | undefined): void
```

Sets the callback for the [onBlur](arkts-arkui-commonmethod-c.md#onblur-1) event.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UICommonEvent-setOnBlur(callback: Callback<void> | undefined): void--><!--Device-UICommonEvent-setOnBlur(callback: Callback<void> | undefined): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;void&gt; \| undefined | Yes | Callback for the blur event. |

<a id="setonclick"></a>
## setOnClick

```TypeScript
setOnClick(callback: Callback<ClickEvent> | undefined): void
```

Set the callback for the [click event](arkts-arkui-commonmethod-c.md#onclick-1).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UICommonEvent-setOnClick(callback: Callback<ClickEvent> | undefined): void--><!--Device-UICommonEvent-setOnClick(callback: Callback<ClickEvent> | undefined): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;ClickEvent&gt; \| undefined | Yes | Callback for the click event. |

<a id="setondisappear"></a>
## setOnDisappear

```TypeScript
setOnDisappear(callback: Callback<void> | undefined): void
```

Sets the callback for the [onDisAppear](arkts-arkui-commonmethod-c.md#ondisappear-1) event.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UICommonEvent-setOnDisappear(callback: Callback<void> | undefined): void--><!--Device-UICommonEvent-setOnDisappear(callback: Callback<void> | undefined): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;void&gt; \| undefined | Yes | Callback invoked when the component disappears. |

<a id="setonfocus"></a>
## setOnFocus

```TypeScript
setOnFocus(callback: Callback<void> | undefined): void
```

Sets the callback for the [onFocus](arkts-arkui-commonmethod-c.md#onfocus-1) event.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UICommonEvent-setOnFocus(callback: Callback<void> | undefined): void--><!--Device-UICommonEvent-setOnFocus(callback: Callback<void> | undefined): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;void&gt; \| undefined | Yes | Callback for the focus event. |

<a id="setonhover"></a>
## setOnHover

```TypeScript
setOnHover(callback: HoverCallback | undefined): void
```

Sets the callback for the [onHover](arkts-arkui-commonmethod-c.md#onhover-1) event.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UICommonEvent-setOnHover(callback: HoverCallback | undefined): void--><!--Device-UICommonEvent-setOnHover(callback: HoverCallback | undefined): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [HoverCallback](arkts-arkui-hovercallback-t.md) \| undefined | Yes | Callback for the hover event. |

<a id="setonkeyevent"></a>
## setOnKeyEvent

```TypeScript
setOnKeyEvent(callback: Callback<KeyEvent> | undefined): void
```

Sets the callback for the [key event](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UICommonEvent-setOnKeyEvent(callback: Callback<KeyEvent> | undefined): void--><!--Device-UICommonEvent-setOnKeyEvent(callback: Callback<KeyEvent> | undefined): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;KeyEvent&gt; \| undefined | Yes | Callback for the key event. |

<a id="setonmouse"></a>
## setOnMouse

```TypeScript
setOnMouse(callback: Callback<MouseEvent> | undefined): void
```

Sets the callback for the [onMouse](arkts-arkui-commonmethod-c.md#onmouse-1) event.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UICommonEvent-setOnMouse(callback: Callback<MouseEvent> | undefined): void--><!--Device-UICommonEvent-setOnMouse(callback: Callback<MouseEvent> | undefined): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;MouseEvent&gt; \| undefined | Yes | Callback for the mouse event. |

<a id="setonsizechange"></a>
## setOnSizeChange

```TypeScript
setOnSizeChange(callback: SizeChangeCallback | undefined): void
```

Sets the callback for the [onSizeChange](arkts-arkui-commonmethod-c.md#onsizechange-1) event, which is triggered when the component's size changes.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UICommonEvent-setOnSizeChange(callback: SizeChangeCallback | undefined): void--><!--Device-UICommonEvent-setOnSizeChange(callback: SizeChangeCallback | undefined): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [SizeChangeCallback](arkts-arkui-sizechangecallback-t.md) \| undefined | Yes | Callback invoked when the component's size changes. |

<a id="setontouch"></a>
## setOnTouch

```TypeScript
setOnTouch(callback: Callback<TouchEvent> | undefined): void
```

Sets the callback for the [touch event](arkts-arkui-commonmethod-c.md#ontouch-1).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UICommonEvent-setOnTouch(callback: Callback<TouchEvent> | undefined): void--><!--Device-UICommonEvent-setOnTouch(callback: Callback<TouchEvent> | undefined): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;TouchEvent&gt; \| undefined | Yes | Callback for the touch event. |

<a id="setonvisibleareaapproximatechange"></a>
## setOnVisibleAreaApproximateChange

```TypeScript
setOnVisibleAreaApproximateChange(options: VisibleAreaEventOptions, event: VisibleAreaChangeCallback | undefined): void
```

Sets the callback for the [onVisibleAreaChange](arkts-arkui-commonmethod-c.md#onvisibleareachange-1)visible area change event.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-UICommonEvent-setOnVisibleAreaApproximateChange(options: VisibleAreaEventOptions, event: VisibleAreaChangeCallback | undefined): void--><!--Device-UICommonEvent-setOnVisibleAreaApproximateChange(options: VisibleAreaEventOptions, event: VisibleAreaChangeCallback | undefined): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [VisibleAreaEventOptions](arkts-arkui-visibleareaeventoptions-i.md) | Yes | Configuration options for visible area change detection. |
| event | [VisibleAreaChangeCallback](arkts-arkui-visibleareachangecallback-t.md) \| undefined | Yes | Callback invoked when the ratio of the component's visible area to its total area crosses the threshold specified in **options**. |

