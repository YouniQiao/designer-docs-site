# typeNode

Provides APIs for creating a specific type of FrameNode, which can be mounted through the basic API of the FrameNode
and be displayed using a placeholder container.

When **typeNode** is used to create [Text](../../apis-arkgraphics2d/arkts-apis/arkts-graphics-text.md), [Image](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md), [Select](../arkts-components/arkts-arkui-select.md), or
[Toggle](../arkts-components/arkts-arkui-toggle.md) nodes, if the UI instance corresponding to the input [UIContext](arkts-arkui-uicontext.md)
is destroyed, this API returns an invalid FrameNode that cannot be properly mounted or displayed.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createNode](arkts-arkui-createnode-f.md#createnode-1) | Creates a FrameNode of the **Text** type. |
| [getAttribute](arkts-arkui-getattribute-f.md#getattribute-1) | Obtains the attributes of a **Text** node. If the node is not created using ArkTS, cross-language access must beenabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes. |
| [bindController](arkts-arkui-bindcontroller-f.md#bindcontroller-1) | Binds a [TextController](../arkts-components/arkts-arkui-textcontroller-c.md) instance to a [Text](arkts-arkui-text-t.md) node. Cross-languageaccess must be enabled for nodes not created via ArkTS; otherwise, an exception will be thrown. This API does notsupport declaratively created nodes. |
| [createNode](arkts-arkui-createnode-f.md#createnode-2) | Creates a FrameNode of the **Column** type. |
| [getAttribute](arkts-arkui-getattribute-f.md#getattribute-2) | Obtains the attributes of a **Column** node. If the node is not created using ArkTS, cross-language access must beenabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes. |
| [createNode](arkts-arkui-createnode-f.md#createnode-3) | Creates a FrameNode of the Row type. |
| [getAttribute](arkts-arkui-getattribute-f.md#getattribute-3) | Obtains the attributes of a **Row** node. If the node is not created using ArkTS, cross-language access must beenabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes. |
| [createNode](arkts-arkui-createnode-f.md#createnode-4) | Creates a FrameNode of the **Stack** type. |
| [getAttribute](arkts-arkui-getattribute-f.md#getattribute-4) | Obtains the attributes of a **Stack** node. If the node is not created using ArkTS, cross-language access must beenabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes. |
| [createNode](arkts-arkui-createnode-f.md#createnode-5) | Creates a FrameNode of the **GridRow** type. |
| [createNode](arkts-arkui-createnode-f.md#createnode-6) | Creates a FrameNode of the **GridCol** type. |
| [createNode](arkts-arkui-createnode-f.md#createnode-7) | Creates a FrameNode of the Flex type. |
| [getAttribute](arkts-arkui-getattribute-f.md#getattribute-5) | Obtains the Flex node attributes. If the node is not created using ArkTS, cross-language access must be enabled;otherwise, **undefined** is returned. This API does not support declaratively created nodes. |
| [createNode](arkts-arkui-createnode-f.md#createnode-8) | Creates a FrameNode of the **Swiper** type. |
| [getAttribute](arkts-arkui-getattribute-f.md#getattribute-6) | Obtains the attributes of a **Swiper** node. If the node is not created using ArkTS, cross-language access must beenabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes. |
| [bindController](arkts-arkui-bindcontroller-f.md#bindcontroller-2) | Binds a [SwiperController](../arkts-components/arkts-arkui-swipercontroller-c.md) instance to the [Swiper](arkts-arkui-swiper-t.md) node. Cross-language access must be enabled for nodes not created via ArkTS; otherwise, an exception will be thrown. This APIdoes not support declaratively created nodes. |
| [createNode](arkts-arkui-createnode-f.md#createnode-9) | Creates a FrameNode of the **Progress** type. |
| [getAttribute](arkts-arkui-getattribute-f.md#getattribute-7) | Obtains the attributes of a **Progress** node. If the node is not created using ArkTS, cross-language access mustbe enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes. |
| [createNode](arkts-arkui-createnode-f.md#createnode-10) | Creates a FrameNode of the **Scroll** type. |
| [getAttribute](arkts-arkui-getattribute-f.md#getattribute-8) | Obtains the attributes of a **Scroll** node. If the node is not created using ArkTS, cross-language access must beenabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes. |
| [getEvent](arkts-arkui-getevent-f.md#getevent-1) | Obtains the **UIScrollEvent** object associated with the **Scroll** node for configuring scroll events. The scrollevents configured through this API coexist with declarative events without overriding them. If both event callbacksare registered, the declaratively defined event callback takes precedence. |
| [bindController](arkts-arkui-bindcontroller-f.md#bindcontroller-3) | Binds the [Scroller](../arkts-components/arkts-arkui-scroller-c.md) to the [Scroll](arkts-arkui-scroll-t.md) node. Cross-language access must beenabled for nodes not created via ArkTS; otherwise, an exception will be thrown. This API supports declarativelycreated nodes since API version 26.0.0. |
| [createNode](arkts-arkui-createnode-f.md#createnode-11) | Creates a FrameNode of the **RelativeContainer** type. |
| [getAttribute](arkts-arkui-getattribute-f.md#getattribute-9) | Obtains the attributes of a **RelativeContainer** node. If the node is not created using ArkTS, cross-languageaccess must be enabled; otherwise, **undefined** is returned. This API does not support declaratively creatednodes. |
| [createNode](arkts-arkui-createnode-f.md#createnode-12) | Creates a FrameNode of the **Divider** type. |
| [createNode](arkts-arkui-createnode-f.md#createnode-13) | Creates a FrameNode of the **LoadingProgress** type. |
| [getAttribute](arkts-arkui-getattribute-f.md#getattribute-10) | Obtains the attributes of a [LoadingProgress](../arkts-components/arkts-arkui-loadingprogress.md) node. If the node is not created using ArkTS,cross-language access must be enabled; otherwise, **undefined** is returned. This API does not supportdeclaratively created nodes. |
| [createNode](arkts-arkui-createnode-f.md#createnode-14) | Creates a FrameNode of the **Search** type. |
| [createNode](arkts-arkui-createnode-f.md#createnode-15) | Creates a FrameNode of the **Blank** type. |
| [createNode](arkts-arkui-createnode-f.md#createnode-16) | Creates a FrameNode of the **Image** type. |
| [getAttribute](arkts-arkui-getattribute-f.md#getattribute-11) | Obtains the attributes of an **Image** node. If the node is not created using ArkTS, cross-language access must beenabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes. |
| [createNode](arkts-arkui-createnode-f.md#createnode-17) | Creates a FrameNode of the **List** type. |
| [getAttribute](arkts-arkui-getattribute-f.md#getattribute-12) | Obtains the attributes of a **List** node. If the node is not created using ArkTS, cross-language access must beenabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes. |
| [bindController](arkts-arkui-bindcontroller-f.md#bindcontroller-4) | Binds a [Scroller](../arkts-components/arkts-arkui-scroller-c.md) instance to the [List](arkts-arkui-list-t.md) node. Cross-language access must beenabled for nodes not created via ArkTS; otherwise, an exception will be thrown. This API supports declarativelycreated nodes since API version 26.0.0. |
| [getEvent](arkts-arkui-getevent-f.md#getevent-2) | Obtains the **UIListEvent** object associated with the **List** node for configuring scroll events. The scrollevents configured through this API coexist with declarative events without overriding them. If both event callbacksare registered, the declaratively defined event callback takes precedence. |
| [createNode](arkts-arkui-createnode-f.md#createnode-18) | Creates a FrameNode of the **ListItem** type. |
| [getAttribute](arkts-arkui-getattribute-f.md#getattribute-13) | Obtains the attributes of a **ListItem** node. If the node is not created using ArkTS, cross-language access mustbe enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes. |
| [createNode](arkts-arkui-createnode-f.md#createnode-19) | Creates a FrameNode of the **TextInput** type. |
| [getAttribute](arkts-arkui-getattribute-f.md#getattribute-14) | Obtains the attributes of a **TextInput** node. If the node is not created using ArkTS, cross-language access mustbe enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes. |
| [bindController](arkts-arkui-bindcontroller-f.md#bindcontroller-5) | Binds the [TextInputController](../arkts-components/arkts-arkui-textinputcontroller-c.md) to the [TextInput](arkts-arkui-textinput-t.md) node. Cross-language access must be enabled for nodes not created via ArkTS; otherwise, an exception will be thrown. This APIsupports declaratively created nodes since API version 26.0.0. |
| [createNode](arkts-arkui-createnode-f.md#createnode-20) | Creates a FrameNode of the **Button** type. |
| [getAttribute](arkts-arkui-getattribute-f.md#getattribute-15) | Obtains the attributes of a **Button** node. If the node is not created using ArkTS, cross-language access must beenabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes. |
| [createNode](arkts-arkui-createnode-f.md#createnode-21) | Creates a FrameNode of the **ListItemGroup** type. |
| [getAttribute](arkts-arkui-getattribute-f.md#getattribute-16) | Obtains the attributes of a **ListItemGroup** node. If the node is not created using ArkTS, cross-language accessmust be enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes. |
| [createNode](arkts-arkui-createnode-f.md#createnode-22) | Creates a FrameNode of the **WaterFlow** type. |
| [getAttribute](arkts-arkui-getattribute-f.md#getattribute-17) | Obtains the attributes of a **WaterFlow** node. If the node is not created using ArkTS, cross-language access mustbe enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes. |
| [bindController](arkts-arkui-bindcontroller-f.md#bindcontroller-6) | Binds a [Scroller](../arkts-components/arkts-arkui-scroller-c.md) instance to the [WaterFlow](arkts-arkui-waterflow-t.md) node. Cross-languageaccess must be enabled for nodes not created via ArkTS; otherwise, an exception will be thrown. This API supportsdeclaratively created nodes since API version 26.0.0. |
| [getEvent](arkts-arkui-getevent-f.md#getevent-3) | Obtains the **UIWaterFlowEvent** object associated with the [WaterFlow](arkts-arkui-waterflow-t.md) node forconfiguring scroll events. The scroll events configured through this API coexist with declarative events withoutoverriding them. If both event callbacks are registered, the declaratively defined event callback takes precedence. |
| [createNode](arkts-arkui-createnode-f.md#createnode-23) | Creates a FrameNode of the **FlowItem** type. |
| [getAttribute](arkts-arkui-getattribute-f.md#getattribute-18) | Obtains the attributes of a **FlowItem** node. If the node is not created using ArkTS, cross-language access mustbe enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes. |
| [createNode](arkts-arkui-createnode-f.md#createnode-24) | Creates a FrameNode of the **XComponent** type. |
| [createNode](arkts-arkui-createnode-f.md#createnode-25) | Creates a FrameNode of the **XComponent** type based on the settings specified in **options**. |
| [createNode](arkts-arkui-createnode-f.md#createnode-26) | Creates a FrameNode of the **XComponent** type based on the settings specified in **parameters**. |
| [getAttribute](arkts-arkui-getattribute-f.md#getattribute-19) | Obtain the attributes of an **XComponent** node. If the node is not created using ArkTS, cross-language access mustbe enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes. |
| [createNode](arkts-arkui-createnode-f.md#createnode-27) | Creates a FrameNode of the **Checkbox** type. |
| [getAttribute](arkts-arkui-getattribute-f.md#getattribute-20) | Obtains the attributes of a **Checkbox** node. If the node is not created using ArkTS, cross-language access mustbe enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes. |
| [createNode](arkts-arkui-createnode-f.md#createnode-28) | Creates a FrameNode of the **CheckboxGroup** type. |
| [createNode](arkts-arkui-createnode-f.md#createnode-29) | Creates a FrameNode of the **Radio** type. |
| [getAttribute](arkts-arkui-getattribute-f.md#getattribute-21) | Obtains the attributes of a **Radio** node. If the node is not created using ArkTS, cross-language access must beenabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes. |
| [createNode](arkts-arkui-createnode-f.md#createnode-30) | Creates a FrameNode of the **Rating** type. |
| [createNode](arkts-arkui-createnode-f.md#createnode-31) | Creates a FrameNode of the **Select** type. |
| [createNode](arkts-arkui-createnode-f.md#createnode-32) | Creates a FrameNode of the **Slider** type. |
| [getAttribute](arkts-arkui-getattribute-f.md#getattribute-22) | Obtains the attributes of a **Slider** node. If the node is not created using ArkTS, cross-language access must beenabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes. |
| [createNode](arkts-arkui-createnode-f.md#createnode-33) | Creates a FrameNode of the **Toggle** type. |
| [getAttribute](arkts-arkui-getattribute-f.md#getattribute-23) | Obtains the attributes of a **Toggle** node. If the node is not created using ArkTS, cross-language access must beenabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes. |
| [createNode](arkts-arkui-createnode-f.md#createnode-34) | Creates a FrameNode of the **Marquee** type. |
| [createNode](arkts-arkui-createnode-f.md#createnode-35) | Creates a FrameNode of the **TextArea** type. |
| [getAttribute](arkts-arkui-getattribute-f.md#getattribute-24) | Obtains the attributes of a **TextArea** node. If the node is not created using ArkTS, cross-language access mustbe enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes. |
| [bindController](arkts-arkui-bindcontroller-f.md#bindcontroller-7) | Binds a [TextAreaController](../arkts-components/arkts-arkui-textareacontroller-c.md) instance to the [TextArea](arkts-arkui-textarea-t.md) node.Cross-language access must be enabled for nodes not created via ArkTS; otherwise, an exception will be thrown. ThisAPI supports declaratively created nodes since API version 26.0.0. |
| [createNode](arkts-arkui-createnode-f.md#createnode-36) | Creates a FrameNode of the **SymbolGlyph** type. |
| [createNode](arkts-arkui-createnode-f.md#createnode-37) | Creates a FrameNode of the **QRCode** type. |
| [createNode](arkts-arkui-createnode-f.md#createnode-38) | Creates a FrameNode of the **Badge** type. |
| [createNode](arkts-arkui-createnode-f.md#createnode-39) | Creates a FrameNode of the **TextClock** type. |
| [createNode](arkts-arkui-createnode-f.md#createnode-40) | Creates a FrameNode of the **TextTimer** type. |
| [createNode](arkts-arkui-createnode-f.md#createnode-41) | Creates a FrameNode of the **Grid** type. |
| [getAttribute](arkts-arkui-getattribute-f.md#getattribute-25) | Obtains the attributes of a **Grid** node. If the node is not created using ArkTS, cross-language access must beenabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes. |
| [bindController](arkts-arkui-bindcontroller-f.md#bindcontroller-8) | Binds a [Scroller](../arkts-components/arkts-arkui-scroller-c.md) instance to the [Grid](arkts-arkui-grid-t.md) node. Cross-language access must beenabled for nodes not created via ArkTS; otherwise, an exception will be thrown. This API supports declarativelycreated nodes since API version 26.0.0. |
| [getEvent](arkts-arkui-getevent-f.md#getevent-4) | Obtains the **UIGridEvent** object associated with the **Grid** node for configuring scroll events. The scrollevents configured through this API coexist with declarative events without overriding them. If both event callbacksare registered, the declaratively defined event callback takes precedence. |
| [createNode](arkts-arkui-createnode-f.md#createnode-42) | Creates a FrameNode of the **GridItem** type. |
| [getAttribute](arkts-arkui-getattribute-f.md#getattribute-26) | Obtains the attributes of a **GridItem** node. If the node is not created using ArkTS, cross-language access mustbe enabled; otherwise, **undefined** is returned. This API does not support declaratively created nodes. |

### Types

| Name | Description |
| --- | --- |
| [Text](arkts-arkui-text-t.md) | Represents a FrameNode of the **Text** type. This type of node does not allow child components to be added. |
| [Column](arkts-arkui-column-t.md) | Represents a FrameNode of the **Column** type. |
| [Row](arkts-arkui-row-t.md) | Represents a FrameNode of the **Row** type. |
| [Stack](arkts-arkui-stack-t.md) | Represents a FrameNode of the **Stack** type. |
| [GridRow](arkts-arkui-gridrow-t.md) | Represents a FrameNode of the **GridRow** type. This type of node only allows child components of the **GridCol**type. |
| [GridCol](arkts-arkui-gridcol-t.md) | Represents a FrameNode of the **GridCol** type. This type of node does not allow child components to be added. |
| [Flex](arkts-arkui-flex-t.md) | Represents a FrameNode of the Flex type. |
| [Swiper](arkts-arkui-swiper-t.md) | Represents a FrameNode of the **Swiper** type. |
| [Progress](arkts-arkui-progress-t.md) | Represents a FrameNode of the **Progress** type. This type of node does not allow child components to be added. |
| [Scroll](arkts-arkui-scroll-t.md) | Represents a FrameNode of the **Scroll** type. This type of node allows only one child component to be added. |
| [RelativeContainer](arkts-arkui-relativecontainer-t.md) | Represents a FrameNode of the **RelativeContainer** type. |
| [Divider](arkts-arkui-divider-t.md) | Represents a FrameNode of the **Divider** type. This type of node does not allow child components to be added. |
| [LoadingProgress](arkts-arkui-loadingprogress-t.md) | Represents a FrameNode of the **LoadingProgress** type. This type of node does not allow child components to beadded. |
| [Search](arkts-arkui-search-t.md) | Represents a FrameNode of the **Search** type. |
| [Blank](arkts-arkui-blank-t.md) | Represents a FrameNode of the **Blank** type. This type of node does not allow child components to be added. |
| [Image](arkts-arkui-image-t.md) | Represents a FrameNode of the **Image** type. This type of node does not allow child components to be added. |
| [List](arkts-arkui-list-t.md) | Represents a FrameNode of the **List** type. This type of node only allows child components of the[ListItem](arkts-arkui-listitem-t.md) and [ListItemGroup](arkts-arkui-listitemgroup-t.md) types. |
| [ListItem](arkts-arkui-listitem-t.md) | Represents a FrameNode of the **ListItem** type. |
| [TextInput](arkts-arkui-textinput-t.md) | Represents a FrameNode of the **TextInput** type. |
| [Button](arkts-arkui-button-t.md) | Represents a FrameNode of the **Button** type. When created in child component mode, this type of node allows onlyone child component to be added. When created in label mode, it does not child components to be added. |
| [ListItemGroup](arkts-arkui-listitemgroup-t.md) | Represents a FrameNode of the **ListItemGroup** type. Only [ListItem](../arkts-components/arkts-arkui-listitem.md) child components can beadded. |
| [WaterFlow](arkts-arkui-waterflow-t.md) | Represents a FrameNode of the **WaterFlow** type. Only [FlowItem](../arkts-components/arkts-arkui-flowitem.md) child components can be added. |
| [FlowItem](arkts-arkui-flowitem-t.md) | Represents a FrameNode of the **FlowItem** type. This type of node allows only one child component to be added. |
| [XComponent](arkts-arkui-xcomponent-t.md) | Represents a FrameNode of the **XComponent** type. |
| [Checkbox](arkts-arkui-checkbox-t.md) | Represents a FrameNode of the **Checkbox** type. |
| [CheckboxGroup](arkts-arkui-checkboxgroup-t.md) | Represents a FrameNode of the **CheckboxGroup** type. |
| [Radio](arkts-arkui-radio-t.md) | Represents a FrameNode of the **Radio** type. |
| [Rating](arkts-arkui-rating-t.md) | Represents a FrameNode of the **Rating** type. |
| [Select](arkts-arkui-select-t.md) | Represents a FrameNode of the **Select** type. |
| [Slider](arkts-arkui-slider-t.md) | Represents a FrameNode of the **Slider** type. |
| [Toggle](arkts-arkui-toggle-t.md) | FrameNode of the [Toggle](../arkts-components/arkts-arkui-toggle.md) type. |
| [Marquee](arkts-arkui-marquee-t.md) | Represents a FrameNode of the **Marquee** type. |
| [TextArea](arkts-arkui-textarea-t.md) | Represents a FrameNode of the **TextArea** type. |
| [SymbolGlyph](arkts-arkui-symbolglyph-t.md) | Represents a FrameNode of the **SymbolGlyph** type. |
| [QRCode](arkts-arkui-qrcode-t.md) | Represents a FrameNode of the **QRCode** type. |
| [Badge](arkts-arkui-badge-t.md) | Represents a FrameNode of the **Badge** type. |
| [TextClock](arkts-arkui-textclock-t.md) | Represents a FrameNode of the **TextClock** type. |
| [TextTimer](arkts-arkui-texttimer-t.md) | Represents a FrameNode of the **TextTimer** type. |
| [Grid](arkts-arkui-grid-t.md) | Represents a FrameNode of the **Grid** type. |
| [GridItem](arkts-arkui-griditem-t.md) | Represents a FrameNode of the **GridItem** type. |

