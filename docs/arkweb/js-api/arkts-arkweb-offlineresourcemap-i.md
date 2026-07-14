# OfflineResourceMap

Implements an **OfflineResourceMap** object, which is used to set information related to local offline resources that will be injected into memory cache through the [injectOfflineResources](arkts-arkweb-webviewcontroller-c.md#injectofflineresources-1) API. The ArkWeb engine will generate resource caches based on this information and control the validity period of the cache accordingly.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## resource

```TypeScript
resource: Uint8Array
```

Content of a local offline resource.

**Type:** Uint8Array

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## responseHeaders

```TypeScript
responseHeaders: Array<WebHeader>
```

HTTP response headers corresponding to the resources. The **Cache-Control** or **Expires** response header is used to control the validity period of the resource in the memory cache. If neither of the headers is provided, a default validity time of 86400 seconds (1 day) will be applied. The **Content-Type** response header is used to define the MIME type of the resource. For resources of type MODULE_JS, a valid MIME type must be provided. For other types, the MIME type is optional, with no default value. A non-standard MIME type can lead to the resource being invalidated in the memory cache. If a **script** tag on the web page uses the **crossorigin** attribute, the **Cross-Origin** response header must be set in the **responseHeaders** parameter of the API. The value for this header should be **anonymous** or **use-credentials**.

**Type:** Array<WebHeader>

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## type

```TypeScript
type: OfflineResourceType
```

Resource type. Currently, only the JavaScript, image, and CSS types are supported.

**Type:** OfflineResourceType

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## urlList

```TypeScript
urlList: Array<string>
```

List of network addresses of the local offline resources. The first item in the list is used as the resources' origin. If only one network address is provided, this single address is used for the resources' origin. The URL supports only the HTTP and HTTPS protocols and contains a maximum of 2048 characters.

**Type:** Array<string>

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

