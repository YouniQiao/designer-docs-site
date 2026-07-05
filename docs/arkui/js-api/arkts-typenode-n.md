# typeNode

typeNode提供创建具体类型的FrameNode能力，可通过FrameNode的基础接口进行自定义的挂载，使用占位容器进行显示。 使用typeNode创建[Text]text、[Image]image、[Select]select、[Toggle]toggle节点时，当传入的 [UIContext]@ohos.arkui.UIContext对应的UI实例销毁后，调用该接口会返回一个无效的FrameNode节点，无法正常挂载和显示。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Summary

### Functions

| Name | Description |
| --- | --- |
| [bindController](arkts-typenode-bindcontroller-f.md#bindController-1) | 将文本控制器[TextController]TextController绑定到[Text](arkts-typenode-text-t.md#Text)节点。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言 访问，则抛出异常。该接口不支持声明式方式创建的节点。 |
| [bindController](arkts-typenode-bindcontroller-f.md#bindController-2) | 将控制器[SwiperController]SwiperController绑定到[Swiper](arkts-typenode-swiper-t.md#Swiper)节点。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果 不支持跨语言访问，则抛出异常。该接口不支持声明式方式创建的节点。 |
| [bindController](arkts-typenode-bindcontroller-f.md#bindController-3) | 将滚动控制器[Scroller]Scroller绑定到[Scroll](arkts-typenode-scroll-t.md#Scroll)节点。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则抛出异 常。从API version 26.0.0开始，该接口支持声明式方式创建的节点，API version 26.0.0以下版本不支持。 |
| [bindController](arkts-typenode-bindcontroller-f.md#bindController-4) | 将滚动控制器[Scroller]Scroller绑定到[List](arkts-typenode-list-t.md#List)节点。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则抛出异常。从 API version 26.0.0开始，该接口支持声明式方式创建的节点，API version 26.0.0以下版本不支持。 |
| [bindController](arkts-typenode-bindcontroller-f.md#bindController-5) | 将输入框控制器[TextInputController]TextInputController绑定到[TextInput](arkts-typenode-textinput-t.md#TextInput)节点。若该节点非ArkTS语言创建，则需 要设置是否支持跨语言访问，如果不支持跨语言访问，则抛出异常。该接口从API版本26.0.0开始支持声明式方式创建的节点。 |
| [bindController](arkts-typenode-bindcontroller-f.md#bindController-6) | 将滚动控制器[Scroller]Scroller绑定到[WaterFlow](arkts-typenode-waterflow-t.md#WaterFlow)节点。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访 问，则抛出异常。从API version 26.0.0开始，该接口支持声明式方式创建的节点，API version 26.0.0以下版本不支持。 |
| [bindController](arkts-typenode-bindcontroller-f.md#bindController-7) | 将输入框控制器[TextAreaController]TextAreaController绑定到[TextArea](arkts-typenode-textarea-t.md#TextArea)节点。若该节点非ArkTS语言创建，则需要设置是 否支持跨语言访问，如果不支持跨语言访问，则抛出异常。该接口从API版本26.0.0开始支持声明式方式创建的节点。 |
| [bindController](arkts-typenode-bindcontroller-f.md#bindController-8) | 将滚动控制器[Scroller]Scroller绑定到[Grid](arkts-typenode-grid-t.md#Grid)节点。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则抛出异常。从 API version 26.0.0开始，该接口支持声明式方式创建的节点，API version 26.0.0以下版本不支持。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-1) | 创建Text类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-2) | 创建Column类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-3) | 创建Row类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-4) | 创建Stack类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-5) | 创建GridRow类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-6) | 创建GridCol类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-7) | 创建Flex类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-8) | 创建Swiper类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-9) | 创建Progress类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-10) | 创建Scroll类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-11) | 创建RelativeContainer类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-12) | 创建Divider类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-13) | 创建LoadingProgress类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-14) | 创建Search类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-15) | 创建Blank类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-16) | 创建Image类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-17) | 创建List类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-18) | 创建ListItem类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-19) | 创建TextInput类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-20) | 创建Button类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-21) | 创建ListItemGroup类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-22) | 创建WaterFlow类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-23) | 创建FlowItem类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-24) | 创建XComponent类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-25) | 按照options中的配置参数创建XComponent类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-26) | 按照parameters中的配置参数创建XComponent类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-27) | 创建Checkbox类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-28) | 创建CheckboxGroup类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-29) | 创建Radio类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-30) | 创建Rating类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-31) | 创建Select类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-32) | 创建Slider类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-33) | 创建Toggle类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-34) | 创建Marquee类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-35) | 创建TextArea类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-36) | 创建SymbolGlyph类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-37) | 创建QRCode类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-38) | 创建Badge类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-39) | 创建TextClock类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-40) | 创建TextTimer类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-41) | 创建Grid类型的FrameNode节点。 |
| [createNode](arkts-typenode-createnode-f.md#createNode-42) | 创建GridItem类型的FrameNode节点。 |
| [getAttribute](arkts-typenode-getattribute-f.md#getAttribute-1) | 获取Text节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。 |
| [getAttribute](arkts-typenode-getattribute-f.md#getAttribute-2) | 获取Column节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。 |
| [getAttribute](arkts-typenode-getattribute-f.md#getAttribute-3) | 获取Row节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。 |
| [getAttribute](arkts-typenode-getattribute-f.md#getAttribute-4) | 获取Stack节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。 |
| [getAttribute](arkts-typenode-getattribute-f.md#getAttribute-5) | 获取Flex节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。 |
| [getAttribute](arkts-typenode-getattribute-f.md#getAttribute-6) | 获取Swiper节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。 |
| [getAttribute](arkts-typenode-getattribute-f.md#getAttribute-7) | 获取Progress节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。 |
| [getAttribute](arkts-typenode-getattribute-f.md#getAttribute-8) | 获取Scroll节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。 |
| [getAttribute](arkts-typenode-getattribute-f.md#getAttribute-9) | 获取RelativeContainer节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。 |
| [getAttribute](arkts-typenode-getattribute-f.md#getAttribute-10) | 获取[LoadingProgress]loading_progress节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创 建的节点。 |
| [getAttribute](arkts-typenode-getattribute-f.md#getAttribute-11) | 获取Image节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。 |
| [getAttribute](arkts-typenode-getattribute-f.md#getAttribute-12) | 获取List节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。 |
| [getAttribute](arkts-typenode-getattribute-f.md#getAttribute-13) | 获取ListItem节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。 |
| [getAttribute](arkts-typenode-getattribute-f.md#getAttribute-14) | 获取TextInput节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。 |
| [getAttribute](arkts-typenode-getattribute-f.md#getAttribute-15) | 获取Button节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。 |
| [getAttribute](arkts-typenode-getattribute-f.md#getAttribute-16) | 获取ListItemGroup节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。 |
| [getAttribute](arkts-typenode-getattribute-f.md#getAttribute-17) | 获取WaterFlow节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。 |
| [getAttribute](arkts-typenode-getattribute-f.md#getAttribute-18) | 获取FlowItem节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。 |
| [getAttribute](arkts-typenode-getattribute-f.md#getAttribute-19) | 获取XComponent节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。 |
| [getAttribute](arkts-typenode-getattribute-f.md#getAttribute-20) | 获取Checkbox节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。 |
| [getAttribute](arkts-typenode-getattribute-f.md#getAttribute-21) | 获取Radio节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。 |
| [getAttribute](arkts-typenode-getattribute-f.md#getAttribute-22) | 获取Slider节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。 |
| [getAttribute](arkts-typenode-getattribute-f.md#getAttribute-23) | 获取Toggle节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。 |
| [getAttribute](arkts-typenode-getattribute-f.md#getAttribute-24) | 获取TextArea节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。 |
| [getAttribute](arkts-typenode-getattribute-f.md#getAttribute-25) | 获取Grid节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。 |
| [getAttribute](arkts-typenode-getattribute-f.md#getAttribute-26) | 获取GridItem节点的属性。若该节点非ArkTS语言创建，则需要设置是否支持跨语言访问，如果不支持跨语言访问，则返回undefined。该接口不支持声明式方式创建的节点。 |
| [getEvent](arkts-typenode-getevent-f.md#getEvent-1) | 获取Scroll节点中持有的UIScrollEvent对象，用于设置滚动事件。设置的滚动事件与声明式定义的事件平行；设置的滚动事件不覆盖原有的声明式事件。同时设置两个事件回调的时候，优先回调声明式事件。 |
| [getEvent](arkts-typenode-getevent-f.md#getEvent-2) | 获取List节点中持有的UIListEvent对象，用于设置滚动事件。设置的滚动事件与声明式定义的事件平行；设置的滚动事件不覆盖原有的声明式事件。同时设置两个事件回调的时候，优先回调声明式事件。 |
| [getEvent](arkts-typenode-getevent-f.md#getEvent-3) | 获取[WaterFlow](arkts-typenode-waterflow-t.md#WaterFlow)节点中持有的UIWaterFlowEvent对象，用于设置滚动事件。设置的滚动事件与声明式定义的事件平行；设置的滚动事件不覆盖原有的声明式事件。同时设置 两个事件回调的时候，优先回调声明式事件。 |
| [getEvent](arkts-typenode-getevent-f.md#getEvent-4) | 获取Grid节点中持有的UIGridEvent对象，用于设置滚动事件。设置的滚动事件与声明式定义的事件平行；设置的滚动事件不覆盖原有的声明式事件。同时设置两个事件回调的时候，优先回调声明式事件。 |

### Types

| Name | Description |
| --- | --- |
| [Badge](arkts-typenode-badge-t.md) | Badge类型的FrameNode节点类型。 |
| [Blank](arkts-typenode-blank-t.md) | Blank类型的FrameNode节点类型。不允许添加子组件。 |
| [Button](arkts-typenode-button-t.md) | Button类型的FrameNode节点类型。以子组件模式创建允许添加一个子组件。以label模式创建不可以添加子组件。 |
| [Checkbox](arkts-typenode-checkbox-t.md) | Checkbox类型的FrameNode节点类型。 |
| [CheckboxGroup](arkts-typenode-checkboxgroup-t.md) | CheckboxGroup类型的FrameNode节点类型。 |
| [Column](arkts-typenode-column-t.md) | Column类型的FrameNode节点类型。 |
| [Divider](arkts-typenode-divider-t.md) | Divider类型的FrameNode节点类型。不允许添加子组件。 |
| [Flex](arkts-typenode-flex-t.md) | Flex类型的FrameNode节点类型。 |
| [FlowItem](arkts-typenode-flowitem-t.md) | FlowItem类型的FrameNode节点类型。允许添加一个子组件。 |
| [Grid](arkts-typenode-grid-t.md) | Grid类型的FrameNode节点类型。 |
| [GridCol](arkts-typenode-gridcol-t.md) | GridCol类型的FrameNode节点类型。不允许添加子组件。 |
| [GridItem](arkts-typenode-griditem-t.md) | GridItem类型的FrameNode节点类型。 |
| [GridRow](arkts-typenode-gridrow-t.md) | GridRow类型的FrameNode节点类型。只允许添加GridCol类型子组件。 |
| [Image](arkts-typenode-image-t.md) | Image类型的FrameNode节点类型。不允许添加子组件。 |
| [List](arkts-typenode-list-t.md) | List类型的FrameNode节点类型。只允许添加[ListItem](arkts-typenode-listitem-t.md#ListItem)、[ListItemGroup](arkts-typenode-listitemgroup-t.md#ListItemGroup)类型子组件。 |
| [ListItem](arkts-typenode-listitem-t.md) | ListItem类型的FrameNode节点类型。 |
| [ListItemGroup](arkts-typenode-listitemgroup-t.md) | ListItemGroup类型的FrameNode节点类型。只允许添加[ListItem]list_item类型子组件。 |
| [LoadingProgress](arkts-typenode-loadingprogress-t.md) | LoadingProgress类型的FrameNode节点类型。不允许添加子组件。 |
| [Marquee](arkts-typenode-marquee-t.md) | Marquee类型的FrameNode节点类型。 |
| [Progress](arkts-typenode-progress-t.md) | Progress类型的FrameNode节点类型。不允许添加子组件。 |
| [QRCode](arkts-typenode-qrcode-t.md) | QRCode类型的FrameNode节点类型。 |
| [Radio](arkts-typenode-radio-t.md) | Radio类型的FrameNode节点类型。 |
| [Rating](arkts-typenode-rating-t.md) | Rating类型的FrameNode节点类型。 |
| [RelativeContainer](arkts-typenode-relativecontainer-t.md) | RelativeContainer类型的FrameNode节点类型。 |
| [Row](arkts-typenode-row-t.md) | Row类型的FrameNode节点类型。 |
| [Scroll](arkts-typenode-scroll-t.md) | Scroll类型的FrameNode节点类型。允许添加一个子组件。 |
| [Search](arkts-typenode-search-t.md) | Search类型的FrameNode节点类型。 |
| [Select](arkts-typenode-select-t.md) | Select类型的FrameNode节点类型。 |
| [Slider](arkts-typenode-slider-t.md) | Slider类型的FrameNode节点类型。 |
| [Stack](arkts-typenode-stack-t.md) | Stack类型的FrameNode节点类型。 |
| [Swiper](arkts-typenode-swiper-t.md) | Swiper类型的FrameNode节点类型。 |
| [SymbolGlyph](arkts-typenode-symbolglyph-t.md) | SymbolGlyph类型的FrameNode节点类型。 |
| [Text](arkts-typenode-text-t.md) | Text类型的FrameNode节点类型。不允许添加子组件。 |
| [TextArea](arkts-typenode-textarea-t.md) | TextArea类型的FrameNode节点类型。 |
| [TextClock](arkts-typenode-textclock-t.md) | TextClock类型的FrameNode节点类型。 |
| [TextInput](arkts-typenode-textinput-t.md) | TextInput类型的FrameNode节点类型。 |
| [TextTimer](arkts-typenode-texttimer-t.md) | TextTimer类型的FrameNode节点类型。 |
| [Toggle](arkts-typenode-toggle-t.md) | [Toggle]toggle类型的FrameNode节点类型。 |
| [WaterFlow](arkts-typenode-waterflow-t.md) | WaterFlow类型的FrameNode节点类型。只允许添加[FlowItem]flow_item类型子组件。 |
| [XComponent](arkts-typenode-xcomponent-t.md) | XComponent类型的FrameNode节点类型。 |

