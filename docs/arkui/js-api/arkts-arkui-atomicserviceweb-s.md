# AtomicServiceWeb

Declare Component AtomicServiceWeb.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { AtomicServiceWeb, OnMessageEvent, OnPageEndEvent, OnHttpErrorReceiveEvent, OnLoadInterceptEvent, WebHeader, OnProgressChangeEvent, OnErrorReceiveEvent, OnPageBeginEvent, OnLoadInterceptCallback, AtomicServiceWebController } from '@kit.ArkUI';
```

## controller

```TypeScript
controller: AtomicServiceWebController
```

Sets the controller of the AtomicServiceWeb.

**Type:** AtomicServiceWebController

**Since:** 12

**Decorator:** @ObjectLink

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## darkMode

```TypeScript
darkMode?: WebDarkMode
```

Sets the dark mode of Web.

**Type:** WebDarkMode

**Since:** 12

**Decorator:** @Prop

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## forceDarkAccess

```TypeScript
forceDarkAccess?: boolean
```

Sets whether to enable forced dark algorithm when the web is in dark mode.

**Type:** boolean

**Since:** 12

**Decorator:** @Prop

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## mixedMode

```TypeScript
mixedMode?: MixedMode
```

Sets how to load HTTP and HTTPS content.

**Type:** MixedMode

**Since:** 12

**Decorator:** @Prop

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## navPathStack

```TypeScript
navPathStack?: NavPathStack
```

The navPathStack to control page route in Navigation and NavDestination.

**Type:** NavPathStack

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## nestedScroll

```TypeScript
nestedScroll?: NestedScrollOptions | NestedScrollOptionsExt
```

Sets the nested scroll options.

**Type:** NestedScrollOptions | NestedScrollOptionsExt

**Since:** 15

**Decorator:** @Prop

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onControllerAttached

```TypeScript
onControllerAttached?: Callback<void>
```

Triggered when The controller is bound to the web component, this controller must be a WebviewController.
This callback can not use the interface about manipulating web pages.

**Type:** Callback<void>

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onErrorReceive

```TypeScript
onErrorReceive?: Callback<OnErrorReceiveEvent>
```

Triggered when the web page receives a web resource loading error.

**Type:** Callback<OnErrorReceiveEvent>

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onHttpErrorReceive

```TypeScript
onHttpErrorReceive?: Callback<OnHttpErrorReceiveEvent>
```

Triggered when the web page receives a web resource loading HTTP error.

**Type:** Callback<OnHttpErrorReceiveEvent>

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onLoadIntercept

```TypeScript
onLoadIntercept?: OnLoadInterceptCallback
```

Triggered when the resources loading is intercepted.

**Type:** OnLoadInterceptCallback

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onMessage

```TypeScript
onMessage?: Callback<OnMessageEvent>
```

The callback method to invoke after page is back or destroyed if postMessage() is called in H5 page.

**Type:** Callback<OnMessageEvent>

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onPageBegin

```TypeScript
onPageBegin?: Callback<OnPageBeginEvent>
```

Triggered at the begin of web page loading.

**Type:** Callback<OnPageBeginEvent>

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onPageEnd

```TypeScript
onPageEnd?: Callback<OnPageEndEvent>
```

Triggered at the end of web page loading.

**Type:** Callback<OnPageEndEvent>

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onProgressChange

```TypeScript
onProgressChange?: Callback<OnProgressChangeEvent>
```

Triggered when the page loading progress changes.

**Type:** Callback<OnProgressChangeEvent>

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## src

```TypeScript
src: ResourceStr
```

The address of the web page to be displayed.

**Type:** ResourceStr

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

