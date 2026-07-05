# WebKeyboardAvoidMode

```TypeScript
declare enum WebKeyboardAvoidMode
```

Enum type supplied to {@link keyboardAvoidMode} for setting the web keyboard avoid mode.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## RESIZE_VISUAL

```TypeScript
RESIZE_VISUAL = 0
```

Resize the visual viewport when keyboard avoidance occurs.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## RESIZE_CONTENT

```TypeScript
RESIZE_CONTENT = 1
```

Resize the visual and layout viewport when keyboard avoidance occurs.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## OVERLAYS_CONTENT

```TypeScript
OVERLAYS_CONTENT = 2
```

Do not resize any viewport when keyboard avoidance occurs.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## RETURN_TO_UICONTEXT

```TypeScript
RETURN_TO_UICONTEXT = 3
```

When the soft keyboard avoids, follow the avoid result of UIContext.

**Since:** 22

**System capability:** SystemCapability.Web.Webview.Core

