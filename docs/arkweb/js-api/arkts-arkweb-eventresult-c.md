# EventResult

Represents the event consumption result sent to the **Web** component. For details about the supported events, see [TouchType](../../apis-arkui/arkts-components/arkts-arkui-touchtype-e.md), [MouseAction](../../apis-arkui/arkts-components/arkts-arkui-mouseaction-e.md), and left, middle, and right buttons in [MouseButton](../../apis-arkui/arkts-components/arkts-arkui-mousebutton-e.md). If the application does not consume the event, set the consumption result to **false**, and the event will be consumed by the **Web** component. If the application consumes the event, set the consumption result to **true**, and the **Web** component will not consume the event. If the consumption result is not set according to the preceding specifications, exceptions may occur. For details about the sample code of the touch event, see [onNativeEmbedGestureEvent](web:WebAttribute.onNativeEmbedGestureEvent). For details about the sample code of the mouse event, see [onNativeEmbedMouseEvent](web:WebAttribute.onNativeEmbedMouseEvent).

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## constructor

```TypeScript
constructor()
```

Constructs a **EventResult** object.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

## setGestureEventResult

```TypeScript
setGestureEventResult(result: boolean): void
```

Sets the gesture event consumption result.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| result | boolean | Yes | Whether to consume the gesture event.<br>The value **true** means to consume thegesture event, and **false** means the opposite.<br>If **null** or **undefined** is passed in, the value is**true**. |

## setGestureEventResult

```TypeScript
setGestureEventResult(result: boolean, stopPropagation: boolean): void
```

Sets the gesture event consumption result.

**Since:** 14

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| result | boolean | Yes | Whether to consume the gesture event.<br>The value **true** means to consume thegesture event, and **false** means the opposite.<br>If **null** or **undefined** is passed in, the value is**true**. |
| stopPropagation | boolean | Yes | Whether to stop propagation. This parameter is valid only when **result** isset to **true**.<br>The value **true** means to stop propagation, and **false** means the opposite.<br>If**null** or **undefined** is passed in, the value is **true**. |

## setMouseEventResult

```TypeScript
setMouseEventResult(result: boolean, stopPropagation?: boolean): void
```

Sets the mouse event consumption result.

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| result | boolean | Yes | Whether to consume the mouse event.<br>The value **true** means to consume the mouseevent, and **false** means the opposite.<br>If **null** or **undefined** is passed in, the value is **true**. |
| stopPropagation | boolean | No | Whether to stop propagation. This parameter is valid only when **result** isset to **true**.<br>The value **true** means to stop propagation, and **false** means the opposite.<br>If**null** or **undefined** is passed in, the value is **true**. |

