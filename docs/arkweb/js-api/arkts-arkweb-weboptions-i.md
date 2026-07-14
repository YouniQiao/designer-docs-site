# WebOptions

Defines web options through the [APIs](arkts-arkweb-web.md).

**Since:** 8

**System capability:** SystemCapability.Web.Webview.Core

## controller

```TypeScript
controller: WebController | WebviewController
```

Controller that controls various behaviors of **Web** components, including page navigation, declaration period status, and JavaScript interaction. **WebController** is deprecated since API version 9. You are advised to use [WebviewController](arkts-arkweb-webviewcontroller-t.md) instead.

**Type:** WebController | WebviewController

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## emulateTouchFromMouseEvent

```TypeScript
emulateTouchFromMouseEvent? : boolean
```

Whether to convert mouse events into touch events. Default value: **false**.

**Type:** boolean

**Since:** 22

**System capability:** SystemCapability.Web.Webview.Core

## incognitoMode

```TypeScript
incognitoMode? : boolean
```

Whether to enable incognito mode. The value **true** means to enable incognito mode, and **false** means the opposite. Default value: **false**. If **undefined** or **null** is passed, the value is **false**.

**Type:** boolean

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## renderMode

```TypeScript
renderMode? : RenderMode
```

Rendering mode.

**Type:** RenderMode

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

## sharedRenderProcessToken

```TypeScript
sharedRenderProcessToken? : string
```

Token of the shared rendering process specified by the **Web** component. In multi-rendering process mode, the **Web** component with the same token preferentially attempts to reuse the rendering process bound to the token. The token is bound to the rendering process when the rendering process is initialized. When the rendering process is not associated with a **Web** component, its binding to the token is removed. Default value: **""**.

**Type:** string

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## src

```TypeScript
src: string | Resource
```

Address of a web page resource. To access local resource files, use the $rawfile or resource protocol. To load a local resource file (in HTML or TXT format) in the sandbox outside of the application package, use **file://** to specify the path of the sandbox.

**Type:** string | Resource

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

