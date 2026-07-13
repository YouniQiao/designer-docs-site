# once

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## once

```TypeScript
function once(type: string, callback: Callback<void>): void
```

Registers a one-time callback for web events of the specified type. Currently, only **webInited** is supported.
This callback is triggered when the Web engine initialization is complete.
When the first **Web** component is loaded in an application, the web engine is initialized. When other **Web**
components are loaded in the same application, **once()** is not triggered. When the first **Web** component is
loaded after the last **Web** component is destroyed in the application, the web engine will be initialized again.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | Web event type. The value can be **"webInited"**, indicating completion of web |
| callback | Callback&lt;void&gt; | Yes | Indicate callback used to receive the web event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |

**Example**

```TypeScript
// xxx.ets
import { webview } from '@kit.ArkWeb';

webview.once("webInited", () => {
  console.info("configCookieSync");
  webview.WebCookieManager.configCookieSync("https://www.example.com", "a=b");
})

@Entry
@Component
struct WebComponent {
  controller: webview.WebviewController = new webview.WebviewController();

  build() {
    Column() {
      Web({ src: 'www.example.com', controller: this.controller })
    }
  }
}

```

