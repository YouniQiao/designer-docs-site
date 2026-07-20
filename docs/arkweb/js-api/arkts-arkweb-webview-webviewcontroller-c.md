# WebviewController

Represents a **WebviewController** object used to control various behaviors of **Web** components, including page navigation, lifecycle status, and JavaScript interaction. A **WebviewController** object can control only one **Web** component, and the APIs (except static APIs) in the **WebviewController** can be invoked only after it has been bound to the target **Web** component.

**Since:** 9

<!--Device-webview-class WebviewController--><!--Device-webview-class WebviewController-End-->

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## accessBackward

```TypeScript
accessBackward(): boolean
```

Checks whether the web page can go back.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-accessBackward(): boolean--><!--Device-WebviewController-accessBackward(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True if the web page can go back else false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## accessForward

```TypeScript
accessForward(): boolean
```

Checks whether the web page can go forward.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-accessForward(): boolean--><!--Device-WebviewController-accessForward(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True if the web page can go forward else false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## accessStep

```TypeScript
accessStep(step: number): boolean
```

Checks whether the web page can go back or forward the given number of steps.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-accessStep(step: number): boolean--><!--Device-WebviewController-accessStep(step: number): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| step | number | Yes | The number of steps. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True if the web page can go back else false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## addIntelligentTrackingPreventionBypassingList

```TypeScript
static addIntelligentTrackingPreventionBypassingList(hostList: Array<string>): void
```

Add bypassing hosts for Intelligent Tracking Prevention.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-static addIntelligentTrackingPreventionBypassingList(hostList: Array<string>): void--><!--Device-WebviewController-static addIntelligentTrackingPreventionBypassingList(hostList: Array<string>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hostList | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Yes | Hosts that bypass the Intelligent Tracking Prevention. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |

## avoidVisibleViewportBottom

```TypeScript
avoidVisibleViewportBottom(avoidHeight: number): void
```

Sets the bottom avoidance height of the visible viewport on the web page.

> **NOTE**  
>  
> - The valid value range of **avoidHeight** is [0, height of the **Web** component]. Values outside this range  
> are adjusted to the nearest boundary.  
>  
> - When a non-zero value is specified for **avoidHeight**, the position and size of the **Web** component remain  
> unchanged, but the visible viewport shift upwards by the specified height, lifting the web page content by the  
> **avoidHeight**. This API is used to customize the avoidance area at the bottom of a web page. It is not  
> recommended that this API be used when the editable area of the web page is tapped to pull up the keyboard. If  
> this API is used in this scenario, the keyboard avoidance mode is set to **OVERLAYS_CONTENT**.  
>  
> - When the height of this API is set to **0**, the web page content can be restored, and the keyboard avoidance  
> mode is specified by  
> [keyboardAvoidMode()](../../../../reference/apis-arkweb/arkts-basic-components-web-attributes.md#keyboardavoidmode12)  
> .

**Since:** 20

<!--Device-WebviewController-avoidVisibleViewportBottom(avoidHeight: number): void--><!--Device-WebviewController-avoidVisibleViewportBottom(avoidHeight: number): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| avoidHeight | number | Yes | Bottom avoidance height of the visible viewport on the web page.<br>Unit: vp.<br>Value range: [0, height of the **Web** component]<br>If the value is less than 0, the value **0** is used. If the value is greater than the height of the **Web** component, the height of the **Web** component is used. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error. The WebviewController must be associated with a Web component. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | This functionality is not supported. |

## backOrForward

```TypeScript
backOrForward(step: number): void
```

Goes forward or back backOrForward in the history of the web page.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-backOrForward(step: number): void--><!--Device-WebviewController-backOrForward(step: number): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| step | number | Yes | Steps to go forward or backward. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## backward

```TypeScript
backward(): void
```

Goes back in the history of the web page.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-backward(): void--><!--Device-WebviewController-backward(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## clearBlanklessLoadingCache

```TypeScript
static clearBlanklessLoadingCache(keys?: Array<string>) : void
```

Clears the blankless loading cache of the page with a specified key value.

In an applet or web application, when the content changes significantly during page loading, an obvious scene change may occur. If you are concerned about this change, you can use this API to clear the page cache.

> **NOTE**  
>  
> - After the page is cleared, the optimization effect appears when the page is loaded for the third time.

**Since:** 20

<!--Device-WebviewController-static clearBlanklessLoadingCache(keys?: Array<string>) : void--><!--Device-WebviewController-static clearBlanklessLoadingCache(keys?: Array<string>) : void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keys | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | No | Key value list on the pages using the blankless optimization solution. The |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) |  |

## clearClientAuthenticationCache

```TypeScript
clearClientAuthenticationCache(): void
```

Clears the client authentication certificate cache in the Web.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-clearClientAuthenticationCache(): void--><!--Device-WebviewController-clearClientAuthenticationCache(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## clearHistory

```TypeScript
clearHistory(): void
```

Clears the history in the Web.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-clearHistory(): void--><!--Device-WebviewController-clearHistory(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## clearHostIP

```TypeScript
static clearHostIP(hostName: string): void
```

Clear the host name IP address.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-static clearHostIP(hostName: string): void--><!--Device-WebviewController-static clearHostIP(hostName: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hostName | string | Yes | Which host name to be cleared. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |

## clearIntelligentTrackingPreventionBypassingList

```TypeScript
static clearIntelligentTrackingPreventionBypassingList(): void
```

Clear bypassing hosts for Intelligent Tracking Prevention.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-static clearIntelligentTrackingPreventionBypassingList(): void--><!--Device-WebviewController-static clearIntelligentTrackingPreventionBypassingList(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |

## clearMatches

```TypeScript
clearMatches(): void
```

Clears the matches found through [searchAllAsync](arkts-arkweb-webview-webviewcontroller-c.md#searchallasync-1).

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-clearMatches(): void--><!--Device-WebviewController-clearMatches(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## clearPrefetchedResource

```TypeScript
static clearPrefetchedResource(cacheKeyList: Array<string>): void
```

Clears the cache of prefetched resources based on the specified cache key list. The cache key in the input parameter must be the prefetched resource cache key specified by [prefetchResource](arkts-arkweb-webview-webviewcontroller-c.md#prefetchresource-1).

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-static clearPrefetchedResource(cacheKeyList: Array<string>): void--><!--Device-WebviewController-static clearPrefetchedResource(cacheKeyList: Array<string>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cacheKeyList | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Yes | Key used to query the cache of prefetched resources. The value can contain only letters and digits. If this parameter is not passed or is left empty, **url** is used by default. |

## clearServiceWorkerWebSchemeHandler

```TypeScript
static clearServiceWorkerWebSchemeHandler(): void
```

Clear all web service worker scheme handlers.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-static clearServiceWorkerWebSchemeHandler(): void--><!--Device-WebviewController-static clearServiceWorkerWebSchemeHandler(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

## clearSslCache

```TypeScript
clearSslCache(): void
```

Clears the ssl cache in the Web.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-clearSslCache(): void--><!--Device-WebviewController-clearSslCache(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## clearWebSchemeHandler

```TypeScript
clearWebSchemeHandler(): void
```

Clear all web scheme handlers for related web component.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-clearWebSchemeHandler(): void--><!--Device-WebviewController-clearWebSchemeHandler(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## closeAllMediaPresentations

```TypeScript
closeAllMediaPresentations(): void
```

Closes all full-screen videos on a web page.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-closeAllMediaPresentations(): void--><!--Device-WebviewController-closeAllMediaPresentations(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## closeCamera

```TypeScript
closeCamera(): void
```

Disables the camera capture of the current web page.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-closeCamera(): void--><!--Device-WebviewController-closeCamera(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## constructor

```TypeScript
constructor(webTag?: string)
```

Constructs a WebviewController object.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-constructor(webTag?: string)--><!--Device-WebviewController-constructor(webTag?: string)-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| webTag | string | No | specified the name of the web component, Empty by default. |

## createPdf

```TypeScript
createPdf(configuration: PdfConfiguration, callback: AsyncCallback<PdfData>): void
```

Obtains the data stream of a specified web page using an asynchronous callback.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-WebviewController-createPdf(configuration: PdfConfiguration, callback: AsyncCallback<PdfData>): void--><!--Device-WebviewController-createPdf(configuration: PdfConfiguration, callback: AsyncCallback<PdfData>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| configuration | [PdfConfiguration](arkts-arkweb-webview-pdfconfiguration-i.md) | Yes | Parameters required for creating a PDF file. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<PdfData> | Yes | Callback used to return the data stream of an online PDF file. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid input parameter. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## createPdf

```TypeScript
createPdf(configuration: PdfConfiguration): Promise<PdfData>
```

Obtains the data stream of a specified web page using a promise.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-WebviewController-createPdf(configuration: PdfConfiguration): Promise<PdfData>--><!--Device-WebviewController-createPdf(configuration: PdfConfiguration): Promise<PdfData>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| configuration | [PdfConfiguration](arkts-arkweb-webview-pdfconfiguration-i.md) | Yes | Parameters required for creating a PDF file. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<PdfData> | Promise used to return the data stream of a web page. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid input parameter. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## createWebMessagePorts

```TypeScript
createWebMessagePorts(isExtentionType?: boolean): Array<WebMessagePort>
```

Create web message ports

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-createWebMessagePorts(isExtentionType?: boolean): Array<WebMessagePort>--><!--Device-WebviewController-createWebMessagePorts(isExtentionType?: boolean): Array<WebMessagePort>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isExtentionType | boolean | No | Set whether the web message port supports extention type.<br>**Since:** 10 |

**Return value:**

| Type | Description |
| --- | --- |
| [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<WebMessagePort> | An array represent 2 WebMessagePort, then can use those ports to communication with html pages. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed.<br>**Applicable version:** 10 and later |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## createWebPrintDocumentAdapter

```TypeScript
createWebPrintDocumentAdapter(jobName: string): print.PrintDocumentAdapter
```

Creates a **PrintDocumentAdapter** instance to provide content for printing.

**Since:** 11

<!--Device-WebviewController-createWebPrintDocumentAdapter(jobName: string): print.PrintDocumentAdapter--><!--Device-WebviewController-createWebPrintDocumentAdapter(jobName: string): print.PrintDocumentAdapter-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| jobName | string | Yes | Name of the file to print. |

**Return value:**

| Type | Description |
| --- | --- |
| print.PrintDocumentAdapter | **PrintDocumentAdapter** instance created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## customizeSchemes

```TypeScript
static customizeSchemes(schemes: Array<WebCustomScheme>): void
```

Grant the Web kernel the permission to initiate cross-domain requests for custom protocol URLs and to initiate fetch requests for custom protocol URLs. When the Web performs a cross-domain fetch of a custom protocol URL,this fetch request can be intercepted by the onInterceptRequest event interface, allowing developers to further process the request. It is recommended to call this interface before any Web component is initialized.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-static customizeSchemes(schemes: Array<WebCustomScheme>): void--><!--Device-WebviewController-static customizeSchemes(schemes: Array<WebCustomScheme>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| schemes | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<WebCustomScheme> | Yes | Configuration of web custom scheme. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [17100020](../errorcode-webview.md#17100020-failed-to-register-custom-schemes) | Failed to register custom schemes.<br>**Applicable version:** 12 and later |

## customizeSchemes

```TypeScript
static customizeSchemes(schemes: Array<WebCustomScheme>, lazyInitWebEngine: boolean): void
```

Grant the Web kernel the permission to initiate cross-domain requests for custom protocol URLs and to initiate fetch requests for custom protocol URLs. When the Web performs a cross-domain fetch of a custom protocol URL,this fetch request can be intercepted by the onInterceptRequest event interface, allowing developers to further process the request. It is recommended to call this interface before any Web component is initialized.

**Since:** 21

**Atomic service API:** This API can be used in atomic services since API version 21.

<!--Device-WebviewController-static customizeSchemes(schemes: Array<WebCustomScheme>, lazyInitWebEngine: boolean): void--><!--Device-WebviewController-static customizeSchemes(schemes: Array<WebCustomScheme>, lazyInitWebEngine: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| schemes | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<WebCustomScheme> | Yes | Configuration of web custom scheme. |
| lazyInitWebEngine | boolean | Yes | When true: The interface internally skips initializing WebEngine and temporarily stores the registered schemes, which will be passed to WebEngine when it actually initializes. When false: The interface automatically performs WebEngine initialization internally |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100020](../errorcode-webview.md#17100020-failed-to-register-custom-schemes) | Failed to register custom schemes. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. The length of the schemes array is greater than 10.2. The character length of the scheme is greater than 32.3. The character in the scheme is not within the allowed range of lowercase English letters, numbers,and the symbols ".", "+", "-". |

## deleteJavaScriptRegister

```TypeScript
deleteJavaScriptRegister(name: string): void
```

Deletes a registered JavaScript object with given name.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-deleteJavaScriptRegister(name: string): void--><!--Device-WebviewController-deleteJavaScriptRegister(name: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | The name of a registered JavaScript object to be deleted. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |
| [17100008](../errorcode-webview.md#17100008-deleting-a-javascriptproxy-that-does-not-exist) | Failed to delete JavaScriptProxy because it does not exist. |

## enableAdsBlock

```TypeScript
enableAdsBlock(enable: boolean): void
```

Enable the ability to block Ads, disabled by default.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-enableAdsBlock(enable: boolean): void--><!--Device-WebviewController-enableAdsBlock(enable: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | { |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Parameter string is too long. 3.Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |

## enableAdvancedSecurityMode

```TypeScript
static enableAdvancedSecurityMode(securityParams: SecurityParams): void
```

Enable the application disable some features such as PDFViewer to enhance the security level of web application

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-WebviewController-static enableAdvancedSecurityMode(securityParams: SecurityParams): void--><!--Device-WebviewController-static enableAdvancedSecurityMode(securityParams: SecurityParams): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| securityParams | [SecurityParams](arkts-arkweb-webview-securityparams-i.md) | Yes | The parameters means which supported option or item will be disabled. |

## enableBackForwardCache

```TypeScript
static enableBackForwardCache(features: BackForwardCacheSupportedFeatures): void
```

Enable the BackForwardCache and indicate features that are allowed to enter BackForwardCache.Default is disabled.

**Since:** 12

<!--Device-WebviewController-static enableBackForwardCache(features: BackForwardCacheSupportedFeatures): void--><!--Device-WebviewController-static enableBackForwardCache(features: BackForwardCacheSupportedFeatures): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| features | [BackForwardCacheSupportedFeatures](arkts-arkweb-webview-backforwardcachesupportedfeatures-c.md) | Yes | The features that supports BackForwardCache. |

## enableIntelligentTrackingPrevention

```TypeScript
enableIntelligentTrackingPrevention(enable: boolean): void
```

Enable the ability to use Intelligent Tracking Prevention; default is disabled.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-enableIntelligentTrackingPrevention(enable: boolean): void--><!--Device-WebviewController-enableIntelligentTrackingPrevention(enable: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | { |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |

## enablePrivateNetworkAccess

```TypeScript
static enablePrivateNetworkAccess(enable: boolean): void
```

After enable PrivateNetworkAccess feature, ArkWeb will send a CORS preflight request before issuing any sub-resource private network requests to request explicit permission from the target server. After disable PrivateNetworkAccess, ArkWeb will no longer check whether the private network request is legitimate.By default, PrivateNetworkAccess feature is enabled.

**Since:** 20

<!--Device-WebviewController-static enablePrivateNetworkAccess(enable: boolean): void--><!--Device-WebviewController-static enablePrivateNetworkAccess(enable: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | {@code true} enable the private network acccess check; {@code false} otherwise. |

## enableSafeBrowsing

```TypeScript
enableSafeBrowsing(enable: boolean): void
```

Enable the ability to check website security risks.Illegal and fraudulent websites are mandatory enabled and can't be disabled by this function.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-enableSafeBrowsing(enable: boolean): void--><!--Device-WebviewController-enableSafeBrowsing(enable: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | {@code true} enable check the website security risks; {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |

## enableWholeWebPageDrawing

```TypeScript
static enableWholeWebPageDrawing(): void
```

Enables the full drawing capability for the web page. This API works only during **Web** component initialization.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-static enableWholeWebPageDrawing(): void--><!--Device-WebviewController-static enableWholeWebPageDrawing(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

## executeAIPageCommand

```TypeScript
executeAIPageCommand(command: string): Promise<string>
```

Asynchronously executes AI page command operations.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-WebviewController-executeAIPageCommand(command: string): Promise<string>--><!--Device-WebviewController-executeAIPageCommand(command: string): Promise<string>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| command | string | Yes | JSON-formatted command parameter. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | A promise that resolves after the command is executed.This JSON-formatted value will be the result of command execution. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |
| 17100024 | Command format error.The command parameter does not conform to the JSON format requirements. |

## forward

```TypeScript
forward(): void
```

Goes forward in the history of the web page.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-forward(): void--><!--Device-WebviewController-forward(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## getActiveWebEngineVersion

```TypeScript
static getActiveWebEngineVersion(): ArkWebEngineVersion
```

Obtains the current ArkWeb kernel version.

**Since:** 20

<!--Device-WebviewController-static getActiveWebEngineVersion(): ArkWebEngineVersion--><!--Device-WebviewController-static getActiveWebEngineVersion(): ArkWebEngineVersion-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| [ArkWebEngineVersion](arkts-arkweb-webview-arkwebengineversion-e.md) | The ArkWeb kernel version defined by [ArkWebEngineVersion](arkts-arkweb-webview-arkwebengineversion-e.md). |

## getAttachState

```TypeScript
getAttachState(): ControllerAttachState
```

Get whether webviewController is attached to a web component.

**Since:** 20

<!--Device-WebviewController-getAttachState(): ControllerAttachState--><!--Device-WebviewController-getAttachState(): ControllerAttachState-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| [ControllerAttachState](arkts-arkweb-webview-controllerattachstate-e.md) | the attach state of controller |

## getBackForwardEntries

```TypeScript
getBackForwardEntries(): BackForwardList
```

Get back forward stack list from current webview.

<p><strong>API Note</strong>:<br>onLoadIntercept is triggered when the loading starts. At this time, no entry is generated.Therefore, the entries obtained by calling **getBackForwardEntries** in **onLoadIntercept** does not include the page that is being loaded.</p>

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-getBackForwardEntries(): BackForwardList--><!--Device-WebviewController-getBackForwardEntries(): BackForwardList-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| [BackForwardList](arkts-arkweb-webview-backforwardlist-i.md) | Back forward list for current webview. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## getBlanklessInfoWithKey

```TypeScript
getBlanklessInfoWithKey(key: string) : BlanklessInfo
```

Obtains the prediction information about blankless loading (for details, see [BlanklessInfo](arkts-arkweb-webview-blanklessinfo-i.md)) and starts to generate the loading transition frame. The application determines whether to enable blankless loading based on the information. This API must be used together with the [setBlanklessLoadingWithKey](arkts-arkweb-webview-webviewcontroller-c.md#setblanklessloadingwithkey-1)API before the page loading API is triggered or in **onLoadIntercept**, and after the **WebViewController** is bound to the **Web** component.

> **NOTE**  
>  
> - The default size of the persistent cache capacity is 30 MB (about 30 pages). You can set the cache capacity  
> by calling [setBlanklessLoadingCacheCapacity](arkts-arkweb-webview-webviewcontroller-c.md#setblanklessloadingcachecapacity-1)  
> . For details, see the description of this API. When the maximum capacity is exceeded, the cache is updated  
> based on the Least Recently Used (LRU) mechanism. The persistent cache data that has been stored for more than  
> seven days is automatically cleared. After the cache is cleared, the optimization effect appears when the page  
> is loaded for the third time.  
>  
> - If the snapshot similarity (**similarity** in [BlanklessInfo](arkts-arkweb-webview-blanklessinfo-i.md))  
> is extremely low, check whether the **key** value is correct.  
>  
> - After this API is called, page loading snapshot detection and transition frame generation calculation are  
> enabled, which generates certain resource overhead.  
>  
> - Blankless loading consumes certain resources, which depends on the resolution of the **Web** component. When  
> the width and height of the resolution are respectively **w** and **h**, the peak memory usage increases by  
> about **12 × w × h** B in the page-opening phase. After the page is opened, the memory is reclaimed, which does  
> not affect the stable memory usage. When the size of the solid-state application cache is increased, the  
> increased cache of each page is about **w × h/10** B and the cache is located in the application cache.  
>  
> - Add the **ohos.permission.INTERNET** and **ohos.permission.GET_NETWORK_INFO** permissions to **module.json5**  
> . For details, see  
> [Declaring Permissions in the Configuration File](../../../../security/AccessToken/declare-permissions.md#declaring-permissions-in-the-configuration-file).

**Since:** 20

<!--Device-WebviewController-getBlanklessInfoWithKey(key: string) : BlanklessInfo--><!--Device-WebviewController-getBlanklessInfoWithKey(key: string) : BlanklessInfo-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key value that uniquely identifies the page.<br>The value cannot be empty and can contain |

**Return value:**

| Type | Description |
| --- | --- |
| [BlanklessInfo](arkts-arkweb-webview-blanklessinfo-i.md) | Prediction information about blankless loading, including the first screen similarity and first screen loading duration. The application determines whether to enable blankless loading based on the prediction information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) |  |

## getCertificate

```TypeScript
getCertificate(): Promise<Array<cert.X509Cert>>
```

Get certificate for the current website.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-getCertificate(): Promise<Array<cert.X509Cert>>--><!--Device-WebviewController-getCertificate(): Promise<Array<cert.X509Cert>>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<cert.X509Cert>> | the promise of the current website's certificate. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a web component. |

## getCertificate

```TypeScript
getCertificate(callback: AsyncCallback<Array<cert.X509Cert>>): void
```

Get certificate for the current website.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-getCertificate(callback: AsyncCallback<Array<cert.X509Cert>>): void--><!--Device-WebviewController-getCertificate(callback: AsyncCallback<Array<cert.X509Cert>>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<cert.X509Cert>> | Yes | the callback of getCertificate. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a web component. |

## getCustomUserAgent

```TypeScript
getCustomUserAgent(): string
```

Get custom user agent.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-getCustomUserAgent(): string--><!--Device-WebviewController-getCustomUserAgent(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Get custom User agent information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## getDefaultUserAgent

```TypeScript
static getDefaultUserAgent(): string
```

Get the default user agent.

**Since:** 14

<!--Device-WebviewController-static getDefaultUserAgent(): string--><!--Device-WebviewController-static getDefaultUserAgent(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | The default user agent string. |

## getErrorPageEnabled

```TypeScript
getErrorPageEnabled(): boolean
```

Get whether default error page feature is enabled.

**Since:** 20

<!--Device-WebviewController-getErrorPageEnabled(): boolean--><!--Device-WebviewController-getErrorPageEnabled(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | - True if enable the default error page feature; else false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## getFavicon

```TypeScript
getFavicon(): image.PixelMap
```

Gets the favicon of current Web page.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-getFavicon(): image.PixelMap--><!--Device-WebviewController-getFavicon(): image.PixelMap-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| image.PixelMap | Return the favicon bitmap of the current page. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## getHitTest

```TypeScript
getHitTest(): WebHitTestType
```

Obtains the element type of the area being clicked.

**Since:** 9

**Deprecated since:** 18

**Substitutes:** [getLastHitTest](arkts-arkweb-webview-webviewcontroller-c.md#getlasthittest-1)

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-getHitTest(): WebHitTestType--><!--Device-WebviewController-getHitTest(): WebHitTestType-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| [WebHitTestType](arkts-arkweb-webview-webhittesttype-e.md) | Element type of the area being clicked. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## getHitTestValue

```TypeScript
getHitTestValue(): HitTestValue
```

Obtains the element information of the area being clicked.

**Since:** 9

**Deprecated since:** 18

**Substitutes:** [getLastHitTest](arkts-arkweb-webview-webviewcontroller-c.md#getlasthittest-1)

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-getHitTestValue(): HitTestValue--><!--Device-WebviewController-getHitTestValue(): HitTestValue-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| [HitTestValue](arkts-arkweb-webview-hittestvalue-i.md) | Element information of the area being clicked. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## getLastHitTest

```TypeScript
getLastHitTest(): HitTestValue
```

Obtains the element information of the area being clicked last time.

**Since:** 18

<!--Device-WebviewController-getLastHitTest(): HitTestValue--><!--Device-WebviewController-getLastHitTest(): HitTestValue-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| [HitTestValue](arkts-arkweb-webview-hittestvalue-i.md) | Element information of the area being clicked. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## getLastJavascriptProxyCallingFrameUrl

```TypeScript
getLastJavascriptProxyCallingFrameUrl(): string
```

Get the url of the last frame that calls the JavaScriptProxy.This should be called on the UI thread.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-getLastJavascriptProxyCallingFrameUrl(): string--><!--Device-WebviewController-getLastJavascriptProxyCallingFrameUrl(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | The url of the last frame that calls the JavaScriptProxy. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## getLastPostMessageURL

```TypeScript
getLastPostMessageURL(): string
```

Gets URL of frame that sent the latest postMessage to native application.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-WebviewController-getLastPostMessageURL(): string--><!--Device-WebviewController-getLastPostMessageURL(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | The URL of frame that last sent a postMessage. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## getMediaPlaybackState

```TypeScript
getMediaPlaybackState(): MediaPlaybackState
```

Queries the audio and video playback status of the current web page.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-getMediaPlaybackState(): MediaPlaybackState--><!--Device-WebviewController-getMediaPlaybackState(): MediaPlaybackState-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| [MediaPlaybackState](arkts-arkweb-webview-mediaplaybackstate-e.md) | Playback control status of the current web page. The options are **NONE**,**PLAYING**, **PAUSED**, and **STOPPED**. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## getOriginalUrl

```TypeScript
getOriginalUrl(): string
```

Gets the original url of current Web page.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-getOriginalUrl(): string--><!--Device-WebviewController-getOriginalUrl(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return the original url of the current page. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## getPageHeight

```TypeScript
getPageHeight(): number
```

Obtains the height of this web page. For details, see [Obtaining the Web Page Content Height](../../../../web/web-getpage-height.md).

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-getPageHeight(): number--><!--Device-WebviewController-getPageHeight(): number-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Height of the current web page. Unit: vp. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## getPageOffset

```TypeScript
getPageOffset(): ScrollOffset
```

Obtains the current scrolling offset of the web page (excluding the over-scrolling offset).

**Since:** 20

<!--Device-WebviewController-getPageOffset(): ScrollOffset--><!--Device-WebviewController-getPageOffset(): ScrollOffset-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| [ScrollOffset](arkts-arkweb-webview-scrolloffset-i.md) | Current scrolling offset of the web page (excluding the over-scrolling offset). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

## getPrintBackground

```TypeScript
getPrintBackground(): boolean
```

Obtains whether the web page background is printed.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-getPrintBackground(): boolean--><!--Device-WebviewController-getPrintBackground(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the web page background is printed.<br>The value **true** indicates that the web page background is printed, and **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## getProgress

```TypeScript
getProgress() : number
```

Gets the loading progress for the current page.

**Since:** 20

<!--Device-WebviewController-getProgress() : number--><!--Device-WebviewController-getProgress() : number-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | The loading progress for the current page. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

## getRenderProcessMode

```TypeScript
static getRenderProcessMode(): RenderProcessMode
```

Obtains the ArkWeb render subprocess mode.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-static getRenderProcessMode(): RenderProcessMode--><!--Device-WebviewController-static getRenderProcessMode(): RenderProcessMode-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| [RenderProcessMode](arkts-arkweb-webview-renderprocessmode-e.md) | mode - The render process mode of the ArkWeb.Call {@link getRenderProcessMode} to get the ArkWeb rendering subprocess mode of the current device,with an enumeration value of 0 as a single subprocess mode and an enumeration value of 1 as a multi-subprocess mode.If the obtained value is not within the range of the RenderProcessMode enumeration value,it defaults to the multi-rendering subprocess mode. |

## getScrollOffset

```TypeScript
getScrollOffset(): ScrollOffset
```

Obtains the current scrolling offset (including the over-scrolling offset) of the web page.

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 13.

<!--Device-WebviewController-getScrollOffset(): ScrollOffset--><!--Device-WebviewController-getScrollOffset(): ScrollOffset-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| [ScrollOffset](arkts-arkweb-webview-scrolloffset-i.md) | Current scrolling offset (including the over-scrolling offset) of the web page. |

## getScrollable

```TypeScript
getScrollable(): boolean
```

Obtains whether this web page is scrollable.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-getScrollable(): boolean--><!--Device-WebviewController-getScrollable(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether this web page is scrollable.<br>The value **true** indicates that this web page is scrollable, and **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## getSecurityLevel

```TypeScript
getSecurityLevel(): SecurityLevel
```

Get the security level of the current page.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-getSecurityLevel(): SecurityLevel--><!--Device-WebviewController-getSecurityLevel(): SecurityLevel-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| [SecurityLevel](../../apis-arkdata/arkts-apis/arkts-arkdata-distributedkvstore-securitylevel-e.md) | the security level of current page. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## getSiteIsolationMode

```TypeScript
static getSiteIsolationMode(): SiteIsolationMode
```

Queries the currently effective site isolation mode.

**Since:** 21

<!--Device-WebviewController-static getSiteIsolationMode(): SiteIsolationMode--><!--Device-WebviewController-static getSiteIsolationMode(): SiteIsolationMode-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| [SiteIsolationMode](arkts-arkweb-webview-siteisolationmode-e.md) | The site isolation mode of the application.@static |

## getSubframeErrorPageEnabled

```TypeScript
getSubframeErrorPageEnabled(): boolean
```

Get whether default error page feature is enabled for subframes.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-WebviewController-getSubframeErrorPageEnabled(): boolean--><!--Device-WebviewController-getSubframeErrorPageEnabled(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | - True if the default error page function of the subframe is enabled; Otherwise, the value is false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## getSurfaceId

```TypeScript
getSurfaceId(): string
```

Obtains the ID of the surface corresponding to ArkWeb. The ID can be used to capture a screenshot of the web page.

> **NOTE**  
>  
> This API is valid only when the **Web** component rendering mode is **ASYNC_RENDER**. The value of  
> **getSurfaceId** can be obtained only after the **Web** component is initialized.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-getSurfaceId(): string--><!--Device-WebviewController-getSurfaceId(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | ID of the surface held by ArkWeb. |

## getTitle

```TypeScript
getTitle(): string
```

Gets the title of current Web page.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-getTitle(): string--><!--Device-WebviewController-getTitle(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return to File Selector Title. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## getUrl

```TypeScript
getUrl(): string
```

Gets the url of current Web page.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-getUrl(): string--><!--Device-WebviewController-getUrl(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return the url of the current page. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## getUserAgent

```TypeScript
getUserAgent(): string
```

Gets the default user agent.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-getUserAgent(): string--><!--Device-WebviewController-getUserAgent(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return user agent information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## getUserAgentClientHintsEnabled

```TypeScript
static getUserAgentClientHintsEnabled(): boolean
```

Get if the UserAgent Client Hints enabled.

**Since:** 24

<!--Device-WebviewController-static getUserAgentClientHintsEnabled(): boolean--><!--Device-WebviewController-static getUserAgentClientHintsEnabled(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | If UserAgent Client Hints was enabled. |

## getUserAgentMetadata

```TypeScript
getUserAgentMetadata(userAgent: string): UserAgentMetadata
```

Get the User-Agent metadata corresponding to the User-Agent.

**Since:** 24

<!--Device-WebviewController-getUserAgentMetadata(userAgent: string): UserAgentMetadata--><!--Device-WebviewController-getUserAgentMetadata(userAgent: string): UserAgentMetadata-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userAgent | string | Yes | The UserAgent string. |

**Return value:**

| Type | Description |
| --- | --- |
| [UserAgentMetadata](arkts-arkweb-webview-useragentmetadata-c.md) | The UserAgentMetadata for the userAgent. |

## getWebId

```TypeScript
getWebId(): number
```

Obtains the index value of this Web component, which can be used for **Web** component management.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-getWebId(): number--><!--Device-WebviewController-getWebId(): number-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns the index value of the current Web component. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## hasImage

```TypeScript
hasImage(): Promise<boolean>
```

Checks whether this page contains images. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-hasImage(): Promise<boolean>--><!--Device-WebviewController-hasImage(): Promise<boolean>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | Promise used to return the result.<br> The value **true** indicates that this page contains images, and the value **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## hasImage

```TypeScript
hasImage(callback: AsyncCallback<boolean>): void
```

Checks whether this page contains images. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-hasImage(callback: AsyncCallback<boolean>): void--><!--Device-WebviewController-hasImage(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<boolean> | Yes | Callback used to return the result.<br> The value **true** indicates that this page contains images, and the value **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## initializeWebEngine

```TypeScript
static initializeWebEngine(): void
```

Loads the dynamic link library (DLL) file of the web engine. This API can be called before the Web component is initialized to improve the startup performance. The frequently visited websites are automatically pre-connected. initializeWebEngine cannot be called in an asynchronous thread. Otherwise, the system breaks down. initializeWebEngine takes effect globally and needs to be called only once in an application lifecycle.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-static initializeWebEngine(): void--><!--Device-WebviewController-static initializeWebEngine(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

## injectOfflineResources

```TypeScript
injectOfflineResources(resourceMaps: Array<OfflineResourceMap>): void
```

Injects local offline resources to the memory cache to improve the initial page startup speed.

Resources in the memory cache are automatically managed by the ArkWeb engine. When the injected resources are excessive and cause significant memory pressure, the engine will automatically release unused resources. It is advisable to avoid injecting a large number of resources into the memory cache.

Under normal circumstances, the validity period of the resources is controlled by the provided Cache-Control or Expires response header, with a default validity period of 86,400 seconds, which is one day.

The MIME type of the resources is configured through the provided Content-Type response header. The Content-Type must comply with standards; otherwise, the resources cannot be used correctly. For resources of type MODULE_JS, a valid MIME type must be provided. For other types, the MIME type is optional.

Resources injected in this mode can be loaded only through HTML tags. If a **script** tag on the web page uses the **crossorigin** attribute, the **Cross-Origin** response header must be set in the **responseHeaders** parameter of the API. The value for this header should be **anonymous** or **use-credentials**.

After **webview.WebviewController.SetRenderProcessMode(webview.RenderProcessMode.MULTIPLE)** is called, the application starts the multi-rendering process mode. This API does not take effect in this scenario.

**Since:** 12

<!--Device-WebviewController-injectOfflineResources(resourceMaps: Array<OfflineResourceMap>): void--><!--Device-WebviewController-injectOfflineResources(resourceMaps: Array<OfflineResourceMap>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resourceMaps | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<OfflineResourceMap> | Yes | Configuration object for local offline resources. A maximum of 30 resources can be injected in a single call, with a maximum size of 10 MB per individual resource. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. The webpage corresponding to the URL is invalid, or the URL length exceeds 2048.<br>**Applicable version:** 12 - 21 |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. The webpage corresponding to the URL is invalid, or the URL length exceeds 2048.<br>**Applicable version:** 12 - 21 |

## isActiveWebEngineEvergreen

```TypeScript
static isActiveWebEngineEvergreen(): boolean
```

Checks whether the system is using the evergreen kernel, that is, the latest kernel.

**Since:** 23

<!--Device-WebviewController-static isActiveWebEngineEvergreen(): boolean--><!--Device-WebviewController-static isActiveWebEngineEvergreen(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the system is using the evergreen kernel. If the system is using the evergreen kernel,**true** is returned. Otherwise, **false** is returned. |

## isAdsBlockEnabled

```TypeScript
isAdsBlockEnabled(): boolean
```

Get whether Ads block is enabled.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-isAdsBlockEnabled(): boolean--><!--Device-WebviewController-isAdsBlockEnabled(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True if the ability of AdsBlock is enabled; else false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |

## isAdsBlockEnabledForCurPage

```TypeScript
isAdsBlockEnabledForCurPage(): boolean
```

Get whether Ads block is enabled for current Webpage.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-isAdsBlockEnabledForCurPage(): boolean--><!--Device-WebviewController-isAdsBlockEnabledForCurPage(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True if the ability of AdsBlock is enabled for current Webpage; else false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |

## isAutoPreconnectEnabled

```TypeScript
static isAutoPreconnectEnabled(): boolean
```

‌Retrieve whether the automatic pre-connection feature is enabled‌.

**Since:** 21

<!--Device-WebviewController-static isAutoPreconnectEnabled(): boolean--><!--Device-WebviewController-static isAutoPreconnectEnabled(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Return true if enabled, false if disabled. |

## isIncognitoMode

```TypeScript
isIncognitoMode(): boolean
```

Whether the incognito mode is set.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-isIncognitoMode(): boolean--><!--Device-WebviewController-isIncognitoMode(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | {@code true} has been set the incognito mode; {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## isIntelligentTrackingPreventionEnabled

```TypeScript
isIntelligentTrackingPreventionEnabled(): boolean
```

Get whether Intelligent Tracking Prevention is enabled.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-isIntelligentTrackingPreventionEnabled(): boolean--><!--Device-WebviewController-isIntelligentTrackingPreventionEnabled(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True if enable the Intelligent Tracking Prevention; else false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |

## isPrivateNetworkAccessEnabled

```TypeScript
static isPrivateNetworkAccessEnabled(): boolean
```

Get whether PrivateNetworkAccess is enabled.

**Since:** 20

<!--Device-WebviewController-static isPrivateNetworkAccessEnabled(): boolean--><!--Device-WebviewController-static isPrivateNetworkAccessEnabled(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True is enable the ability to check private network access else false. |

## isSafeBrowsingEnabled

```TypeScript
isSafeBrowsingEnabled(): boolean
```

Get whether checking website security risks is enabled.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-isSafeBrowsingEnabled(): boolean--><!--Device-WebviewController-isSafeBrowsingEnabled(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True if enable the ability to check website security risks else false. |

## loadData

```TypeScript
loadData(data: string, mimeType: string, encoding: string, baseUrl?: string, historyUrl?: string): void
```

Loads the data or URL.

When both **baseUrl** and **historyUrl** are empty:

If **encoding** is not base64 (including null values), ASCII encoding is used for octets within the secure URL character range, and the standard %xx hexadecimal encoding of the URL is used for octets outside the secure URL character range.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-loadData(data: string, mimeType: string, encoding: string, baseUrl?: string, historyUrl?: string): void--><!--Device-WebviewController-loadData(data: string, mimeType: string, encoding: string, baseUrl?: string, historyUrl?: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | string | Yes | A string encoded according to "Base64" or "URL". |
| mimeType | string | Yes | Media type. For example: "text/html". |
| encoding | string | Yes | Encoding type. For example: "UTF-8". |
| baseUrl | string | No | A specified URL path ("http"/"https"/"data" protocol),which is assigned to window.origin by the Web component. |
| historyUrl | string | No | History URL. When it is not empty, it can be managed by history records to realize the back and forth function.This property is invalid when baseUrl is empty. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. The webpage corresponding to the URL is invalid, or the URL length exceeds 2048.<br>**Applicable version:** 9 - 10 |

## loadUrl

```TypeScript
loadUrl(url: string | Resource, headers?: Array<WebHeader>): void
```

Loads the data or URL.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-loadUrl(url: string | Resource, headers?: Array<WebHeader>): void--><!--Device-WebviewController-loadUrl(url: string | Resource, headers?: Array<WebHeader>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string \| Resource | Yes | The URL to load. |
| headers | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<WebHeader> | No | Additional HTTP request header for URL. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. The webpage corresponding to the URL is invalid. |
| [17100003](../errorcode-webview.md#17100003-incorrect-resource-path) | Invalid resource path or file type. |

## off('controllerAttachStateChange')

```TypeScript
off(type: 'controllerAttachStateChange', callback?: Callback<ControllerAttachState>): void
```

Unregister the callback for controller attach state change.

**Since:** 20

<!--Device-WebviewController-off(type: 'controllerAttachStateChange', callback?: Callback<ControllerAttachState>): void--><!--Device-WebviewController-off(type: 'controllerAttachStateChange', callback?: Callback<ControllerAttachState>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'controllerAttachStateChange' | Yes | the event of controller attach state change. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<ControllerAttachState> | No | Callback used to return the controller attach state. |

## on('controllerAttachStateChange')

```TypeScript
on(type: 'controllerAttachStateChange', callback: Callback<ControllerAttachState>): void
```

Register the callback for controller attach state change.

**Since:** 20

<!--Device-WebviewController-on(type: 'controllerAttachStateChange', callback: Callback<ControllerAttachState>): void--><!--Device-WebviewController-on(type: 'controllerAttachStateChange', callback: Callback<ControllerAttachState>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'controllerAttachStateChange' | Yes | the event of controller attach state change. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<ControllerAttachState> | Yes | Callback used to return the controller attach state. |

## onActive

```TypeScript
onActive(): void
```

Called when the Web component enters the active state. The application can interact with the user while in the active foreground state, and it remains in this state until the focus is moved away from it due to some event (for example, an incoming call is received or the device screen is turned off).

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-onActive(): void--><!--Device-WebviewController-onActive(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## onCreateNativeMediaPlayer

```TypeScript
onCreateNativeMediaPlayer(callback: CreateNativeMediaPlayerCallback): void
```

Called when the [application takes over media playback of the web page](../../../../reference/apis-arkweb/arkts-basic-components-web-attributes.md#enablenativemediaplayer12)and a media file is played on the web page.

If the application does not take over media playback on the web page, this callback is not invoked.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-onCreateNativeMediaPlayer(callback: CreateNativeMediaPlayerCallback): void--><!--Device-WebviewController-onCreateNativeMediaPlayer(callback: CreateNativeMediaPlayerCallback): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [CreateNativeMediaPlayerCallback](arkts-arkweb-webview-createnativemediaplayercallback-t.md) | Yes | Callback when the application takes over media playback on the web page. |

## onInactive

```TypeScript
onInactive(): void
```

Called when the Web component enters the inactive state. You can implement the behavior to perform after the application loses focus. When this API is called, any content that can be safely paused,such as animations and geographical locations, is paused as much as possible. However, the JavaScript is not paused. To pause the JavaScript globally, use pauseAllTimers. To reactivate the Web component,use onActive.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-onInactive(): void--><!--Device-WebviewController-onInactive(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## pageDown

```TypeScript
pageDown(bottom: boolean): void
```

Scrolls the page down by half the viewport or jumps to the bottom of the page.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-pageDown(bottom: boolean): void--><!--Device-WebviewController-pageDown(bottom: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bottom | boolean | Yes | Whether to jump to the bottom of the page.<br>The value **false** means to scroll the page down by half the viewport, and the value **true** means to jump to the bottom of the page. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## pageUp

```TypeScript
pageUp(top: boolean): void
```

Scrolls the page up by half the viewport or jumps to the top of the page.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-pageUp(top: boolean): void--><!--Device-WebviewController-pageUp(top: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| top | boolean | Yes | Whether to jump to the top of the page.<br>The value **false** means to scroll the page up by half the viewport, and the value **true** means to jump to the top of the page. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## pauseAllMedia

```TypeScript
pauseAllMedia(): void
```

Pauses all audio and video on a web page.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-pauseAllMedia(): void--><!--Device-WebviewController-pauseAllMedia(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## pauseAllTimers

```TypeScript
static pauseAllTimers(): void
```

Called when the Web component enters the inactive state. You can implement the behavior to perform after the application loses focus. When this API is called, any content that can be safely paused, such as animations and geographical locations, is paused as much as possible. However, the JavaScript is not paused. To pause the JavaScript globally,use pauseAllTimers. To reactivate the Web component, use onActive.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-static pauseAllTimers(): void--><!--Device-WebviewController-static pauseAllTimers(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## pauseMicrophone

```TypeScript
pauseMicrophone(): void
```

Pauses microphone capture on the current web page.

**Since:** 23

<!--Device-WebviewController-pauseMicrophone(): void--><!--Device-WebviewController-pauseMicrophone(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error. The WebviewController must be associated with a Web component. |

## postMessage

```TypeScript
postMessage(name: string, ports: Array<WebMessagePort>, uri: string): void
```

Post web message port to html

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-postMessage(name: string, ports: Array<WebMessagePort>, uri: string): void--><!--Device-WebviewController-postMessage(name: string, ports: Array<WebMessagePort>, uri: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Data name information to send. |
| ports | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<WebMessagePort> | Yes | Port number array information to send. |
| uri | string | Yes | URI to receive this information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## postUrl

```TypeScript
postUrl(url: string, postData: ArrayBuffer): void
```

Loads the URL use "POST" method with post data.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-postUrl(url: string, postData: ArrayBuffer): void--><!--Device-WebviewController-postUrl(url: string, postData: ArrayBuffer): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | Request the URL use "POST" method. |
| postData | [ArrayBuffer](../../apis-arkts/arkts-apis/arkts-arkts-collections-arraybuffer-c.md) | Yes | This data will passed to "POST" request. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. The webpage corresponding to the URL is invalid. |

## precompileJavaScript

```TypeScript
precompileJavaScript(url: string, script: string | Uint8Array, cacheOptions: CacheOptions): Promise<number>
```

Precompiles JavaScript to generate the bytecode cache or update the existing bytecode cache based on the provided parameters.

The API determines whether to update the existing bytecode cache based on the provided file information, E-Tag response header, and Last-Modified response header.

**Since:** 12

<!--Device-WebviewController-precompileJavaScript(url: string, script: string | Uint8Array, cacheOptions: CacheOptions): Promise<number>--><!--Device-WebviewController-precompileJavaScript(url: string, script: string | Uint8Array, cacheOptions: CacheOptions): Promise<number>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | Network address corresponding to the local JavaScript file, that is, the network address used when the service web page requests the server version of the file. The network address supports only the HTTP and HTTPS protocols and contains a maximum of 2048 characters. If the cache corresponding to the network address is invalid, the service web page requests the corresponding resource through the network. |
| script | string \| Uint8Array | Yes | Text content of the local JavaScript. The content cannot be empty. |
| cacheOptions | [CacheOptions](arkts-arkweb-webview-cacheoptions-i.md) | Yes | Whether to update the bytecode cache. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number> | - Promise used to return the error code for generating the bytecode cache. The value **0** indicates no error, and the value **-1** indicates an internal error. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid input parameter.Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types.3. Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## prefetchPage

```TypeScript
prefetchPage(url: string, additionalHeaders?: Array<WebHeader>): void
```

Prefetch the resources required by the page, but will not execute js or render the page.<p><strong>API Note</strong>:<br>The downloaded page resources are cached for about 5 minutes. After this period, the **Web** component automatically releases the resources.**prefetchPage** can also prefetch 302 redirect pages.When a page is loaded after **prefetchPage** is executed, the prefetched resources are directly loaded from the cache.The **prefetchPage** has a 500ms interval restriction. If multiple URLs are prefetched consecutively within a short time, only the first one will take effect.</p>

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-prefetchPage(url: string, additionalHeaders?: Array<WebHeader>): void--><!--Device-WebviewController-prefetchPage(url: string, additionalHeaders?: Array<WebHeader>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | Which url to preresolve/preconnect. |
| additionalHeaders | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<WebHeader> | No | Additional HTTP request header of the URL. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. The webpage corresponding to the URL is invalid, or the URL length exceeds 2048.<br>**Applicable version:** 10 - 21 |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. The webpage corresponding to the URL is invalid, or the URL length exceeds 2048.<br>**Applicable version:** 10 - 21 |

## prefetchPage

```TypeScript
prefetchPage(url: string, additionalHeaders?: Array<WebHeader>, prefetchOptions?: PrefetchOptions): void
```

Prefetch the resources required by the page, but will not execute js or render the page.

<p><strong>API Note</strong>:<br>The downloaded page resources are cached for about 5 minutes. After this period, the **Web** component automatically releases the resources.**prefetchPage** can also prefetch 302 redirect pages.When a page is loaded after **prefetchPage** is executed, the prefetched resources are directly loaded from the cache.?prefetchPage? does not cache resources with Cache-Control: no-store by default, and only allows one prefetch within 500ms.Prefetch behavior can be customized via ?prefetchOptions?, including ignoring Cache-Control: no-store and adjusting the throttling interval.

**Since:** 21

<!--Device-WebviewController-prefetchPage(url: string, additionalHeaders?: Array<WebHeader>, prefetchOptions?: PrefetchOptions): void--><!--Device-WebviewController-prefetchPage(url: string, additionalHeaders?: Array<WebHeader>, prefetchOptions?: PrefetchOptions): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | Which url to preresolve/preconnect. |
| additionalHeaders | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<WebHeader> | No | Additional HTTP request header of the URL. |
| prefetchOptions | [PrefetchOptions](arkts-arkweb-webview-prefetchoptions-c.md) | No | Prefetch behavior can be customized via ?prefetchOptions?,including ignoring Cache-Control: no-store and adjusting the throttling interval. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error. The WebviewController must be associated with a Web component. |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. The webpage corresponding to the URL is invalid, or the URL length exceeds 2048.<br>**Applicable version:** 21 and later |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. The webpage corresponding to the URL is invalid, or the URL length exceeds 2048.<br>**Applicable version:** 21 and later |

## prefetchResource

```TypeScript
static prefetchResource(request: RequestInfo, additionalHeaders?: Array<WebHeader>, cacheKey?: string,
      cacheValidTime?: number): void
```

Prefetches resource requests based on specified request information and additional HTTP request headers, saves the requests to the memory cache, and specifies the cache key and validity period to accelerate loading.Currently, only POST requests whose Content-Type is application/x-www-form-urlencoded are supported. A maximum of six POST requests can be pre-obtained. To prefetch the seventh post request, call [clearPrefetchedResource](arkts-arkweb-webview-webviewcontroller-c.md#clearprefetchedresource-1) to clear the cache of unnecessary post requests. Otherwise, the cache of the earliest prefetched POST request will be automatically cleared. To use the prefetched resource cache, you need to add the key value **ArkWebPostCacheKey** to the header of the POST request. The content of the key value is the cacheKey of the corresponding cache.

Resources in the memory cache are automatically managed by the ArkWeb engine. When the injected resources are excessive and cause significant memory pressure, the engine will automatically release unused resources. It is advisable to avoid injecting a large number of resources into the memory cache.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-static prefetchResource(request: RequestInfo, additionalHeaders?: Array<WebHeader>, cacheKey?: string,
      cacheValidTime?: number): void--><!--Device-WebviewController-static prefetchResource(request: RequestInfo, additionalHeaders?: Array<WebHeader>, cacheKey?: string,
      cacheValidTime?: number): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | [RequestInfo](../../apis-ability-kit/arkts-apis/arkts-ability-dialogrequest-requestinfo-i.md) | Yes | Information about the prefetched request. |
| additionalHeaders | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<WebHeader> | No | Additional HTTP request header of the prefetched request.<br>If **undefined** or **null** is passed, error code **401** will be thrown. |
| cacheKey | string | No | Key used to query the cache of prefetched resources. The value can contain only letters and digits. If this parameter is not passed or is left empty, **url** is used by default.<br>If **undefined** or **null** is passed, error code **401** will be thrown. |
| cacheValidTime | number | No | Validity period for caching prefetched resources.<br>Value range: (0, 2147483647]<br>Default value: **300s**<br>Unit: second.<br>If **undefined** or **null** is passed, error code **401** will be thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed. |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. The webpage corresponding to the URL is invalid, or the URL length exceeds 2048.<br>**Applicable version:** 12 - 21 |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. The webpage corresponding to the URL is invalid, or the URL length exceeds 2048.<br>**Applicable version:** 12 - 21 |

## prepareForPageLoad

```TypeScript
static prepareForPageLoad(url: string, preconnectable: boolean, numSockets: number): void
```

Preresolve or Preconnect the url. This API can be called before loading the url to make loading faster.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-static prepareForPageLoad(url: string, preconnectable: boolean, numSockets: number): void--><!--Device-WebviewController-static prepareForPageLoad(url: string, preconnectable: boolean, numSockets: number): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | Which url to preresolve/preconnect. |
| preconnectable | boolean | Yes | Indicates whether to preconnect. |
| numSockets | number | Yes | If preconnectable is true, this parameter indicates the number of sockets to be preconnected. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. The webpage corresponding to the URL is invalid, or the URL length exceeds 2048.<br>**Applicable version:** 10 - 21 |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. The webpage corresponding to the URL is invalid, or the URL length exceeds 2048.<br>**Applicable version:** 10 - 21 |
| [17100013](../errorcode-webview.md#17100013-invalid-number-of-sockets-during-preconnection) | The number of preconnect sockets is invalid. |

## refresh

```TypeScript
refresh(): void
```

Refreshes the current URL.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-refresh(): void--><!--Device-WebviewController-refresh(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## refresh

```TypeScript
refresh(ignoreCache: boolean): void
```

Refreshes the current URL.

**Since:** 24

<!--Device-WebviewController-refresh(ignoreCache: boolean): void--><!--Device-WebviewController-refresh(ignoreCache: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ignoreCache | boolean | Yes | If set to true, it indicates an end-to-end request with "pragma: no-cache";otherwise, it performs a normal refresh. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## registerJavaScriptProxy

```TypeScript
registerJavaScriptProxy(jsObject: object, name: string, methodList: Array<string>,
        asyncMethodList?: Array<string>, permission?: string): void
```

Registers the supplied ArkTs object into this Web component.The object is registered into all frames of the web page, including all iframes, using the specified name.This allows the methods of the ArkTs object to be accessed from JavaScript.

<p><strong>API Note</strong>:<br>Registed objects will not appear in JavaScript until the page is next (re)load.To avoid memory leaks, registerJavaScriptProxy must be used together with deleteJavaScriptProxy.To avoid security risks, it is recommended that registerJavaScriptProxy be used with trusted web components.If the same method is registered repeatedly in both synchronous and asynchronous list, it will default to an asynchronous method. The synchronous function list and asynchronous function list cannot be empty at the same time. otherwise, this registration will fail.<p>

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-registerJavaScriptProxy(jsObject: object, name: string, methodList: Array<string>,
        asyncMethodList?: Array<string>, permission?: string): void--><!--Device-WebviewController-registerJavaScriptProxy(jsObject: object, name: string, methodList: Array<string>,
        asyncMethodList?: Array<string>, permission?: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| jsObject | object | Yes | Application side JavaScript objects participating in registration.<br>**Since:** 9 |
| name | string | Yes | The name of the registered object, which is consistent with the object name called in the window. |
| methodList | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Yes | The method of the application side JavaScript object participating in the registration. |
| asyncMethodList | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | No | The async method of the application side JavaScript object participating in the registration.<br>**Since:** 12 |
| permission | string | No | permission configuration defining web page URLs that can access JavaScriptProxy methods.The configuration can be defined at two levels, object level and method level.<br>**Since:** 12 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## removeAllCache

```TypeScript
static removeAllCache(clearRom: boolean): void
```

Remove resource cache in application. So this method will remove all cache for all web components in the same application.

**Since:** 18

<!--Device-WebviewController-static removeAllCache(clearRom: boolean): void--><!--Device-WebviewController-static removeAllCache(clearRom: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| clearRom | boolean | Yes | Remove cache in both rom and ram if true. Otherwise only clear cache in ram. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |

## removeCache

```TypeScript
removeCache(clearRom: boolean): void
```

Clears the cache in the application. This API will clear the cache for all webviews in the same application.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-removeCache(clearRom: boolean): void--><!--Device-WebviewController-removeCache(clearRom: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| clearRom | boolean | Yes | Whether to clear the cache in the ROM and RAM at the same time.{@code true} means to clear the cache in the ROM and RAM at the same time;{@code false} means to only clear the cache in the RAM. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## removeIntelligentTrackingPreventionBypassingList

```TypeScript
static removeIntelligentTrackingPreventionBypassingList(hostList: Array<string>): void
```

Remove bypassing hosts for Intelligent Tracking Prevention.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-static removeIntelligentTrackingPreventionBypassingList(hostList: Array<string>): void--><!--Device-WebviewController-static removeIntelligentTrackingPreventionBypassingList(hostList: Array<string>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hostList | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Yes | Hosts needs to remove from bypass list. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |

## requestFocus

```TypeScript
requestFocus(): void
```

Requests focus for this web page.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-requestFocus(): void--><!--Device-WebviewController-requestFocus(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## restoreWebState

```TypeScript
restoreWebState(state: Uint8Array) : void
```

Restores the page status history from the serialized data of the current WebView. If the value of state is too large, exceptions may occur. It is recommended that the page status history be not restored when the state value is greater than 512 KB.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-restoreWebState(state: Uint8Array) : void--><!--Device-WebviewController-restoreWebState(state: Uint8Array) : void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | [Uint8Array](../../apis-na/arkts-apis/arkts-na-lib-es5-uint8array-i.md) | Yes | Web access stack after serialization. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## resumeAllMedia

```TypeScript
resumeAllMedia(): void
```

Resumes the playback of the audio and video that are paused by the pauseAllMedia interface.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-resumeAllMedia(): void--><!--Device-WebviewController-resumeAllMedia(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## resumeAllTimers

```TypeScript
static resumeAllTimers(): void
```

Resume all timers suspended from the pauseAllTimers() interface.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-static resumeAllTimers(): void--><!--Device-WebviewController-static resumeAllTimers(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## resumeMicrophone

```TypeScript
resumeMicrophone(): void
```

Resumes microphone capture on the current web page. Before using the microphone , add the **ohos.permission.MICROPHONE** permission to **module.json5**. For details about how to add the permission, see [Declaring Permissions in the Configuration File](../../../../security/AccessToken/declare-permissions.md).

**Since:** 23

<!--Device-WebviewController-resumeMicrophone(): void--><!--Device-WebviewController-resumeMicrophone(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error. The WebviewController must be associated with a Web component. |

## runJavaScript

```TypeScript
runJavaScript(script: string): Promise<string>
```

Asynchronously execute JavaScript in the context of the currently displayed page.The result of the script execution will be returned through a via Promise.This method must be used on the UI thread, and the callback will also be invoked on the UI thread.

<p><strong>API Note</strong>:<br>The state of JavaScript is no longer persisted across navigations like loadUrl.For example, global variables and functions defined before calling loadUrl will not exist in the loaded page.It is recommended that applications use registerJavaScriptProxy to ensure that the JavaScript state can be persisted across page navigations.<br>If you cannot obtain the return value by executing the asynchronous method,you need to determine whether to use synchronous or asynchronous mode based on the specific situation.<p>

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-runJavaScript(script: string): Promise<string>--><!--Device-WebviewController-runJavaScript(script: string): Promise<string>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| script | string | Yes | JavaScript Script. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | A promise is solved after the JavaScript script is executed.This parameter will be the result of JavaScript script execution.If the JavaScript script fails to execute or has no return value,null will be returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |
| [17100003](../errorcode-webview.md#17100003-incorrect-resource-path) | Calling a JS method that returns an empty ArrayBuffer via runJavaScript. |

## runJavaScript

```TypeScript
runJavaScript(script: string, callback: AsyncCallback<string>): void
```

Asynchronously execute JavaScript in the context of the currently displayed page.The result of the script execution will be returned through an asynchronous callback.This method must be used on the UI thread, and the callback will also be invoked on the UI thread.

<p><strong>API Note</strong>:<br>The state of JavaScript is no longer persisted across navigations like loadUrl.For example, global variables and functions defined before calling loadUrl will not exist in the loaded page.It is recommended that applications use registerJavaScriptProxy to ensure that the JavaScript state can be persisted across page navigations.<p>

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-runJavaScript(script: string, callback: AsyncCallback<string>): void--><!--Device-WebviewController-runJavaScript(script: string, callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| script | string | Yes | JavaScript Script. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<string> | Yes | Callbacks execute JavaScript script results. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |
| [17100003](../errorcode-webview.md#17100003-incorrect-resource-path) | Calling a JS method that returns an empty ArrayBuffer via runJavaScript. |

## runJavaScriptExt

```TypeScript
runJavaScriptExt(script: string | ArrayBuffer): Promise<JsMessageExt>
```

Execute JavaScript code in the context of the currently displayed page, and return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-runJavaScriptExt(script: string | ArrayBuffer): Promise<JsMessageExt>--><!--Device-WebviewController-runJavaScriptExt(script: string | ArrayBuffer): Promise<JsMessageExt>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| script | string \| ArrayBuffer | Yes | JavaScript Script.<br>**Since:** 12 |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<JsMessageExt> | A promise is solved after the JavaScript script is executed.This parameter will be the result of JavaScript script execution.If the JavaScript script fails to execute or has no return value,a none type value will be returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## runJavaScriptExt

```TypeScript
runJavaScriptExt(script: string | ArrayBuffer, callback: AsyncCallback<JsMessageExt>): void
```

Execute JavaScript code in the context of the currently displayed page, and return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-runJavaScriptExt(script: string | ArrayBuffer, callback: AsyncCallback<JsMessageExt>): void--><!--Device-WebviewController-runJavaScriptExt(script: string | ArrayBuffer, callback: AsyncCallback<JsMessageExt>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| script | string \| ArrayBuffer | Yes | JavaScript Script.<br>**Since:** 12 |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<JsMessageExt> | Yes | Callbacks execute JavaScript script results. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## scrollBy

```TypeScript
scrollBy(deltaX: number, deltaY: number, duration?: number): void
```

Scrolls the page by the specified amount within a specified period.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-scrollBy(deltaX: number, deltaY: number, duration?: number): void--><!--Device-WebviewController-scrollBy(deltaX: number, deltaY: number, duration?: number): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deltaX | number | Yes | Amount to scroll by along the x-axis. The positive direction is rightward.<br>Unit: vp |
| deltaY | number | Yes | Amount to scroll by along the y-axis. The positive direction is downward.<br>Unit: vp |
| duration | number | No | Scrolling animation duration,<br>in milliseconds.<br>If no value is input or the input value is a negative number or 0, the animation is disabled.<br>If **null** or **undefined** is passed,error code **401** is thrown.<br>**Since:** 14 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## scrollByWithResult

```TypeScript
scrollByWithResult(deltaX: number, deltaY: number): boolean
```

Scrolls the page by the specified amount and returns value to indicate whether the scrolling is successful.

**Since:** 12

<!--Device-WebviewController-scrollByWithResult(deltaX: number, deltaY: number): boolean--><!--Device-WebviewController-scrollByWithResult(deltaX: number, deltaY: number): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deltaX | number | Yes | Amount to scroll by along the x-axis. The positive direction is rightward.<br>Unit: vp |
| deltaY | number | Yes | Amount to scroll by along the y-axis. The positive direction is downward.<br>Unit: vp |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the current web page can be scrolled. The value **true** indicates that the current web page can be scrolled, and the value **false** indicates the opposite.<br>Default value: **false**. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## scrollTo

```TypeScript
scrollTo(x: number, y: number, duration?: number): void
```

Scrolls the page to the specified absolute position within a specified period.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-scrollTo(x: number, y: number, duration?: number): void--><!--Device-WebviewController-scrollTo(x: number, y: number, duration?: number): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | X coordinate of the absolute position. If the value is a negative number, the value 0 is used.<br>Unit: vp |
| y | number | Yes | Y coordinate of the absolute position. If the value is a negative number, the value 0 is used.<br>Unit: vp |
| duration | number | No | Scrolling animation duration,<br>in milliseconds.<br>If no value is input or the input value is a negative number or 0, the animation is disabled.<br>If **null** or **undefined** is passed,error code **401** is thrown.<br>**Since:** 14 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## searchAllAsync

```TypeScript
searchAllAsync(searchString: string): void
```

Searches the web page for content that matches the keyword specified by **'searchString'** and highlights the matches on the page. This API returns the result asynchronously through [onSearchResultReceive](@ohos.web.WebAttribute#onsearchresultreceive).

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-searchAllAsync(searchString: string): void--><!--Device-WebviewController-searchAllAsync(searchString: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| searchString | string | Yes | Search keyword. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## searchNext

```TypeScript
searchNext(forward: boolean): void
```

Highlights and scrolls to the next match search.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-searchNext(forward: boolean): void--><!--Device-WebviewController-searchNext(forward: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| forward | boolean | Yes | Step of search is back or forward. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## serializeWebState

```TypeScript
serializeWebState(): Uint8Array
```

Serialize the access stack of the web, that is, the history of access.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-serializeWebState(): Uint8Array--><!--Device-WebviewController-serializeWebState(): Uint8Array-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Uint8Array](../../apis-na/arkts-apis/arkts-na-lib-es5-uint8array-i.md) | Web access stack after serialization. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## setActiveWebEngineVersion

```TypeScript
static setActiveWebEngineVersion(engineVersion: ArkWebEngineVersion): void
```

Sets the ArkWeb kernel version. If the system does not support the specified version, the setting is invalid.This API is a global static API and must be called before **initializeWebEngine** is called. If any **Web** component has been loaded, the setting of this API is invalid.

> **NOTE**  
>  
> - **setActiveWebEngineVersion** cannot be called in an asynchronous thread.  
>  
> - **setActiveWebEngineVersion** takes effect globally and needs to be called only once in an application  
> lifecycle.

**Since:** 20

<!--Device-WebviewController-static setActiveWebEngineVersion(engineVersion: ArkWebEngineVersion): void--><!--Device-WebviewController-static setActiveWebEngineVersion(engineVersion: ArkWebEngineVersion): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| engineVersion | [ArkWebEngineVersion](arkts-arkweb-webview-arkwebengineversion-e.md) | Yes | ArkWeb kernel version. |

## setAppCustomUserAgent

```TypeScript
static setAppCustomUserAgent(userAgent: string) : void
```

Set the default User-Agent for the application.

<p><strong>API Note</strong>:<br>Unlike setCustomUserAgent, which only takes effect in the current web context, the priority for pages loaded in the web is as follows:1. The User-Agent set by setCustomUserAgent is used first.2. If not set, it will check whether a specific User-Agent has been assigned to the current page via setUserAgentForHosts.3. If no specific User-Agent is assigned, the application will fall back to using the User-Agent set by setAppCustomUserAgent.4. If the app's default User-Agent is also not specified, the web's default User-Agent will be used as the final fallback.</p>

**Since:** 20

<!--Device-WebviewController-static setAppCustomUserAgent(userAgent: string) : void--><!--Device-WebviewController-static setAppCustomUserAgent(userAgent: string) : void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userAgent | string | Yes | The User-Agent string. |

## setAudioMuted

```TypeScript
setAudioMuted(mute: boolean): void
```

Mutes this web page.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-setAudioMuted(mute: boolean): void--><!--Device-WebviewController-setAudioMuted(mute: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mute | boolean | Yes | Whether to mute the web page.<br>The value **true** means to mute the web page, and **false** means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## setAutoPreconnect

```TypeScript
static setAutoPreconnect(enabled: boolean): void
```

Configure whether to enable automatic pre-connection to high-frequency URLs accessed during the application's previous lifecycle after web initialization.

**Since:** 21

<!--Device-WebviewController-static setAutoPreconnect(enabled: boolean): void--><!--Device-WebviewController-static setAutoPreconnect(enabled: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Enable if true, disable if false. |

## setBackForwardCacheOptions

```TypeScript
setBackForwardCacheOptions(options: BackForwardCacheOptions): void
```

Configure the BackForwardCache.

**Since:** 12

<!--Device-WebviewController-setBackForwardCacheOptions(options: BackForwardCacheOptions): void--><!--Device-WebviewController-setBackForwardCacheOptions(options: BackForwardCacheOptions): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [BackForwardCacheOptions](arkts-arkweb-webview-backforwardcacheoptions-c.md) | Yes | The configuration of BackForwardCache. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## setBlanklessLoadingCacheCapacity

```TypeScript
static setBlanklessLoadingCacheCapacity(capacity: number) : number
```

Sets the persistent cache capacity of the blankless loading solution and returns the value that takes effect. If the API is not explicitly called, the default cache capacity is 30 MB. When this limit is exceeded, transition frames that are not frequently used are eliminated.

**Since:** 20

<!--Device-WebviewController-static setBlanklessLoadingCacheCapacity(capacity: number) : number--><!--Device-WebviewController-static setBlanklessLoadingCacheCapacity(capacity: number) : number-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| capacity | number | Yes | Persistent cache capacity, in MB. The maximum value is 100 MB.<br>The value ranges |

**Return value:**

| Type | Description |
| --- | --- |
| number | Effective value that ranges from 0 MB to 100 MB.<br>When a value less than 0 is set, the value **0** takes effect. When a value greater than 100 is set, the value **100** takes effect. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) |  |

## setBlanklessLoadingWithKey

```TypeScript
setBlanklessLoadingWithKey(key: string, is_start: boolean) : WebBlanklessErrorCode
```

Sets whether to enable blankless loading. This API must be used together with [getBlanklessInfoWithKey](arkts-arkweb-webview-webviewcontroller-c.md#getblanklessinfowithkey-1).

> **NOTE**  
>  
> - This API must be called after the page loading API is triggered. Other restrictions are the same as those of  
> [getBlanklessInfoWithKey](arkts-arkweb-webview-webviewcontroller-c.md#getblanklessinfowithkey-1).  
>  
> - The page must be loaded in the component that calls this API.  
>  
> - When the similarity is low, the system will deem the scene change too abrupt and frame insertion will fail.  
>  
> - Add the **ohos.permission.INTERNET** and **ohos.permission.GET_NETWORK_INFO** permissions to **module.json5**  
> . For details, see  
> [Declaring Permissions in the Configuration File](../../../../security/AccessToken/declare-permissions.md#declaring-permissions-in-the-configuration-file).

**Since:** 20

<!--Device-WebviewController-setBlanklessLoadingWithKey(key: string, is_start: boolean) : WebBlanklessErrorCode--><!--Device-WebviewController-setBlanklessLoadingWithKey(key: string, is_start: boolean) : WebBlanklessErrorCode-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key value that uniquely identifies the page. This value must be the same as the **key** |
| is_start | boolean | Yes | Whether to enable frame interpolation. The value **true** means to enable frame |

**Return value:**

| Type | Description |
| --- | --- |
| [WebBlanklessErrorCode](arkts-arkweb-webview-webblanklesserrorcode-e.md) | Whether the API is successfully called. For details, see [WebBlanklessErrorCode](arkts-arkweb-webview-webblanklesserrorcode-e.md). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) |  |

## setBlanklessLoadingWithParams

```TypeScript
setBlanklessLoadingWithParams(key: string,
      param: BlanklessLoadingParam) : WebBlanklessErrorCode
```

Triggers frame interpolation and sets frame interpolation parameters. This API must be used in pair with the getBlanklessInfoWithKey API.

Device behavior differences: Only the mobile phone is supported. For other devices, 801 is returned.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-WebviewController-setBlanklessLoadingWithParams(key: string,
      param: BlanklessLoadingParam) : WebBlanklessErrorCode--><!--Device-WebviewController-setBlanklessLoadingWithParams(key: string,
      param: BlanklessLoadingParam) : WebBlanklessErrorCode-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key value that uniquely identifies the current page.<br>Value range: (0, 2048]<br>The key value must be the same as that of getBlanklessInfoWithKey. |
| param | [BlanklessLoadingParam](arkts-arkweb-webview-blanklessloadingparam-i.md) | Yes | The blankless loading parameter.<br>None |

**Return value:**

| Type | Description |
| --- | --- |
| [WebBlanklessErrorCode](arkts-arkweb-webview-webblanklesserrorcode-e.md) | WebBlanklessErrorCode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

## setConnectionTimeout

```TypeScript
static setConnectionTimeout(timeout: number): void
```

Set web engine socket connection timeout. Unit: seconds. the default timeout interval is **30** seconds.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-static setConnectionTimeout(timeout: number): void--><!--Device-WebviewController-static setConnectionTimeout(timeout: number): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeout | number | Yes | Socket connection timeout. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3. Parameter verification failed. |

## setCustomUserAgent

```TypeScript
setCustomUserAgent(userAgent: string): void
```

Set custom user agent.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-setCustomUserAgent(userAgent: string): void--><!--Device-WebviewController-setCustomUserAgent(userAgent: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userAgent | string | Yes | User custom agent information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## setDownloadDelegate

```TypeScript
setDownloadDelegate(delegate: WebDownloadDelegate): void
```

Set delegate for download.Used to notify the progress of the download triggered from web.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-setDownloadDelegate(delegate: WebDownloadDelegate): void--><!--Device-WebviewController-setDownloadDelegate(delegate: WebDownloadDelegate): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| delegate | [WebDownloadDelegate](arkts-arkweb-webview-webdownloaddelegate-c.md) | Yes | Delegate used for download triggered from web. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## setErrorPageEnabled

```TypeScript
setErrorPageEnabled(enable: boolean): void
```

Set whether enable the error page. onOverrideErrorPage will be triggered when the page error.

**Since:** 20

<!--Device-WebviewController-setErrorPageEnabled(enable: boolean): void--><!--Device-WebviewController-setErrorPageEnabled(enable: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Whether to enable the default error page feature. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## setErrorPageEnabled

```TypeScript
setErrorPageEnabled(enable: boolean, includeSubframe: boolean): void
```

Set whether to enable error page. onOverrideErrorPage will be triggered when the page error.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-WebviewController-setErrorPageEnabled(enable: boolean, includeSubframe: boolean): void--><!--Device-WebviewController-setErrorPageEnabled(enable: boolean, includeSubframe: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Whether enable error page. |
| includeSubframe | boolean | Yes | If true, error page is displayed in iframe when a subframe fails to load. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## setHostIP

```TypeScript
static setHostIP(hostName: string, address: string, aliveTime: number): void
```

Set IP address for host name.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-static setHostIP(hostName: string, address: string, aliveTime: number): void--><!--Device-WebviewController-static setHostIP(hostName: string, address: string, aliveTime: number): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hostName | string | Yes | Which host name to be resolved. |
| address | string | Yes | Resolved IP address. |
| aliveTime | number | Yes | The validity seconds for resolve cache. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |

## setHttpDns

```TypeScript
static setHttpDns(secureDnsMode: SecureDnsMode, secureDnsConfig: string): void
```

Set web engine to use HttpDns server to resolve dns.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-static setHttpDns(secureDnsMode: SecureDnsMode, secureDnsConfig: string): void--><!--Device-WebviewController-static setHttpDns(secureDnsMode: SecureDnsMode, secureDnsConfig: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| secureDnsMode | [SecureDnsMode](arkts-arkweb-webview-securednsmode-e.md) | Yes | using HttpDns. |
| secureDnsConfig | string | Yes | The configuration of the HttpDns server.Must be https protocol and only allow one server to be configured. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3. Parameter verification failed. |

## setNetworkAvailable

```TypeScript
setNetworkAvailable(enable: boolean): void
```

Put network state for web. Which is used to set window.navigator.onLine property in JavaScript.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-setNetworkAvailable(enable: boolean): void--><!--Device-WebviewController-setNetworkAvailable(enable: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Whether enable window.navigator.onLine. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## setPathAllowingUniversalAccess

```TypeScript
setPathAllowingUniversalAccess(pathList: Array<string>): void
```

Sets a path list. When a file protocol accesses resources in the path list, it can access the local files across domains. In addition, when a path list is set, the file protocol can access only the resources in the path list.The behavior of {@link fileAccess} will be overwritten by that of this API.

The paths in the list must be any of the following(sub path and module name must be provided):

1. The path of subdirectory of the application file directory, like "/data/storage/el2/base/files/example"or "/data/storage/el2/base/haps/entry/files/example".The application file directory is obtained using Context.filesDir in the Ability Kit.2. The path of application resource directory or its subdirectory, like "/data/storage/el1/bundle/entry/resource/resfile"or "/data/storage/el1/bundle/entry/resource/resfile/example".The application resource directory is obtained from Context.resourceDir in the Ability Kit.

If a path in the list is not of the preceding paths, error code 401 is reported and the path list fails to be set. When the path list is set to empty, the accessible files for the file protocol are subject to the behavior of the {@link fileAccess}.

**Since:** 12

<!--Device-WebviewController-setPathAllowingUniversalAccess(pathList: Array<string>): void--><!--Device-WebviewController-setPathAllowingUniversalAccess(pathList: Array<string>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pathList | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Yes | The path list allow universal access. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified.<br>2. Parameter string is too long.<br>3.Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## setPrintBackground

```TypeScript
setPrintBackground(enable: boolean): void
```

Sets whether to print the background of a web page. If the setting of this API is inconsistent with that of [PrintAttributes](../../../../reference/apis-basic-services-kit/js-apis-print.md#printattributes11), the setting of this API takes precedence.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-setPrintBackground(enable: boolean): void--><!--Device-WebviewController-setPrintBackground(enable: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Whether to print the web page background.<br>The value **true** means to print the web page background, and **false** means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## setRenderProcessMode

```TypeScript
static setRenderProcessMode(mode: RenderProcessMode): void
```

Sets the ArkWeb render subprocess mode.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-static setRenderProcessMode(mode: RenderProcessMode): void--><!--Device-WebviewController-static setRenderProcessMode(mode: RenderProcessMode): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | [RenderProcessMode](arkts-arkweb-webview-renderprocessmode-e.md) | Yes | The render process mode for the ArkWeb.Call {@link getRenderProcessMode} to get the ArkWeb rendering subprocess mode of the current device.The enumerated value **0** indicates the single render subprocess mode,and **1** indicates the multi-render subprocess mode.If an invalid number other than the enumerated value of **RenderProcessMode** is passed,the multi-render subprocess mode is used by default. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types.@static |

## setScrollable

```TypeScript
setScrollable(enable: boolean, type?: ScrollType): void
```

Sets whether this web page is scrollable.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-setScrollable(enable: boolean, type?: ScrollType): void--><!--Device-WebviewController-setScrollable(enable: boolean, type?: ScrollType): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Whether this web page is scrollable.<br>The value **true** indicates that this web page is scrollable, and **false** indicates the opposite.<br>Default value: **true**. |
| type | [ScrollType](arkts-arkweb-webview-scrolltype-e.md) | No | Scrolling type supported by the web page. The default value is supported.<br> - If the value of **enable** is set to **false**, the specified **ScrollType** is disabled. If **ScrollType** is set to the default value, all scrolling types are disabled.<br> - If the value of **enable** is set to **true**, all scrolling types are enabled regardless of the value of **ScrollType**.<br>If **null** or **undefined** is passed, error code **401** is thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## setScrollbarMode

```TypeScript
static setScrollbarMode(scrollbarMode: ScrollbarMode): void
```

Sets the global scrollbar mode in the web page. When this API is not explicitly called,[ScrollbarMode.OVERLAY_LAYOUT_SCROLLBAR](arkts-arkweb-webview-scrollbarmode-e.md) is used by default,indicating that the scroll bar is not always displayed.

> **NOTE**  
>  
> - You can set whether to always display the web scrollbar of the current application based on the scrollbar  
> mode.  
>  
> - If the  
> [forceDisplayScrollBar](@ohos.web.WebAttribute#forcedisplayscrollbar)  
> API is set at the same time as this API, the setting of **forceDisplayScrollBar** does not take effect.  
>  
> - This API must be called before WebViewController is bound to a **Web** component.

**Since:** 23

<!--Device-WebviewController-static setScrollbarMode(scrollbarMode: ScrollbarMode): void--><!--Device-WebviewController-static setScrollbarMode(scrollbarMode: ScrollbarMode): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scrollbarMode | [ScrollbarMode](arkts-arkweb-webview-scrollbarmode-e.md) | Yes | Scroll bar mode. |

## setServiceWorkerWebSchemeHandler

```TypeScript
static setServiceWorkerWebSchemeHandler(scheme: string, handler: WebSchemeHandler): void
```

Set web scheme handler for specific scheme. This is used for service worker.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-static setServiceWorkerWebSchemeHandler(scheme: string, handler: WebSchemeHandler): void--><!--Device-WebviewController-static setServiceWorkerWebSchemeHandler(scheme: string, handler: WebSchemeHandler): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scheme | string | Yes | String value for url scheme. |
| handler | [WebSchemeHandler](arkts-arkweb-webview-webschemehandler-c.md) | Yes | Web scheme handler. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types. |

## setSiteIsolationMode

```TypeScript
static setSiteIsolationMode(mode: SiteIsolationMode): void
```

Set the site isolation mode.

**Since:** 21

<!--Device-WebviewController-static setSiteIsolationMode(mode: SiteIsolationMode): void--><!--Device-WebviewController-static setSiteIsolationMode(mode: SiteIsolationMode): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | [SiteIsolationMode](arkts-arkweb-webview-siteisolationmode-e.md) | Yes | The site isolation mode of the application, |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error. Possible causes:1. Site Isolation mode is already set by the developer.2. Site Isolation mode cannot be strict in single-render-process mode.3. Site Isolation mode cannot be changed while Secure Shield mode is active.@static |

## setSocketIdleTimeout

```TypeScript
static setSocketIdleTimeout(timeout: number): void
```

Set web engine socket idle timeout.

<p><strong>API Note</strong>:<br>Unit: seconds, minimum 30s, maximum 5 minutes. If not set, the default is five minutes.</p>

**Since:** 21

<!--Device-WebviewController-static setSocketIdleTimeout(timeout: number): void--><!--Device-WebviewController-static setSocketIdleTimeout(timeout: number): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeout | number | Yes | Socket idle timeout. |

## setSoftKeyboardBehaviorMode

```TypeScript
setSoftKeyboardBehaviorMode(mode: WebSoftKeyboardBehaviorMode): void
```

Set the behavior mode of the soft keyboard. If this API is not explicitly called, the system automatically hides or shows the soft keyboard when the Web component loses or gains focus, or when its status becomes inactive or active.

**Since:** 22

<!--Device-WebviewController-setSoftKeyboardBehaviorMode(mode: WebSoftKeyboardBehaviorMode): void--><!--Device-WebviewController-setSoftKeyboardBehaviorMode(mode: WebSoftKeyboardBehaviorMode): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | [WebSoftKeyboardBehaviorMode](arkts-arkweb-webview-websoftkeyboardbehaviormode-e.md) | Yes | The WebSoftKeyboardBehaviorMode of this web. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error. The WebviewController must be associated with a Web component. |

## setUrlTrustList

```TypeScript
setUrlTrustList(urlTrustList: string): void
```

Set the URL trust list for the ArkWeb.When the URL trust list has been set, only the URLs in the list can be accessed.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-setUrlTrustList(urlTrustList: string): void--><!--Device-WebviewController-setUrlTrustList(urlTrustList: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| urlTrustList | string | Yes | the URL trust list in JSON format.An empty string means that all URLs are allowed to access. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Parameter string is too long. 3.Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## setUrlTrustList

```TypeScript
setUrlTrustList(urlTrustList: string, allowOpaqueOrigin: boolean, supportWildcard: boolean): void
```

Sets the URL trust list for the ArkWeb.

<p><strong>API Note</strong>:<br>When the URL trust list is set, only the URLs in the list can be accessed.

Example of the urlTrustList:

{"UrlPermissionList": [{"scheme": "https","host": "www.example1.com","port": 443,"path": "pathA/pathB"},{"scheme": "http","host": "*.example2.com","port": 80,"path": "test1/test2/test3"}]}</p>

**Since:** 24

<!--Device-WebviewController-setUrlTrustList(urlTrustList: string, allowOpaqueOrigin: boolean, supportWildcard: boolean): void--><!--Device-WebviewController-setUrlTrustList(urlTrustList: string, allowOpaqueOrigin: boolean, supportWildcard: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| urlTrustList | string | Yes | The URL trust list in JSON format.An empty string means all URLs are allowed. |
| allowOpaqueOrigin | boolean | Yes | If true, loading of opaque origin URLs (e.g., javascript, data) is allowed. If false, it is not allowed. |
| supportWildcard | boolean | Yes | If true, wildcard matching is supported (e.g., *.example.com matches all subdomains). If false, wildcard matching is not supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) |  |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Initialization error.The WebviewController must be associated with a Web component. |

## setUserAgentClientHintsEnabled

```TypeScript
static setUserAgentClientHintsEnabled(enabled: boolean): void
```

Enable the UserAgent Client Hints.

**Since:** 24

<!--Device-WebviewController-static setUserAgentClientHintsEnabled(enabled: boolean): void--><!--Device-WebviewController-static setUserAgentClientHintsEnabled(enabled: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | UserAgent Client Hints will enabled when set true. |

## setUserAgentForHosts

```TypeScript
static setUserAgentForHosts(userAgent: string, hosts : Array<string>) : void
```

Set the User-Agent to be used for specified hosts, with a maximum of 20,000 hosts.

<p><strong>API Note</strong>:<br>Setting the same host list multiple times for the same User-Agent will override the previous settings. That is, if you want to cancel certain hosts from using the specified User-Agent, you need to reset the host list for that User-Agent.</p>

**Since:** 20

<!--Device-WebviewController-static setUserAgentForHosts(userAgent: string, hosts : Array<string>) : void--><!--Device-WebviewController-static setUserAgentForHosts(userAgent: string, hosts : Array<string>) : void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userAgent | string | Yes | The User-Agent string. |
| hosts | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Yes | The hosts to which the User-Agent apply. |

## setUserAgentMetadata

```TypeScript
setUserAgentMetadata(userAgent: string, metaData: UserAgentMetadata): void
```

Sets the User-Agent metadata corresponding to the User-Agent.

<p><strong>API Note</strong>:<br>This User-Agent metadata will be used to populate the User-Agent client hints, They can provide the client's branding and version information, the underlying operating system's branding and major version, as well as details about the underlying device.

The User-Agent can be set with setCustomUserAgent or setAppCustomUserAgent or setUserAgentForHosts.

If the UserAgentMetadata is not found according to the overridden User-Agent and the overridden User-Agent contains the system default User-Agent, the system default value will be used.

If the UserAgentMetadata is not found according to the overridden User-Agent but the overridden User-Agent does not contain the system default User-Agent, only the low-entry User-Agent client hints will be generated.

</p>

**Since:** 24

<!--Device-WebviewController-setUserAgentMetadata(userAgent: string, metaData: UserAgentMetadata): void--><!--Device-WebviewController-setUserAgentMetadata(userAgent: string, metaData: UserAgentMetadata): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userAgent | string | Yes | The User-Agent string. |
| metaData | [UserAgentMetadata](arkts-arkweb-webview-useragentmetadata-c.md) | Yes | The UserAgentMetadata for the userAgent. |

## setWebDebuggingAccess

```TypeScript
static setWebDebuggingAccess(webDebuggingAccess: boolean): void
```

Sets whether to enable web debugging. By default, web debugging is disabled.For details, see Debugging Frontend Pages by Using DevTools.

<p><strong>API Note</strong>:<br>Enabling web debugging allows users to check and modify the internal status of the web page,which poses security risks. Therefore, you are advised not to enable this function in the officially released version of the app.</p>

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-static setWebDebuggingAccess(webDebuggingAccess: boolean): void--><!--Device-WebviewController-static setWebDebuggingAccess(webDebuggingAccess: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| webDebuggingAccess | boolean | Yes | Sets whether to enable web debugging.{@code true} enable web debugging;{@code false} disable web debugging. The default value is false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |

## setWebDebuggingAccess

```TypeScript
static setWebDebuggingAccess(webDebuggingAccess: boolean, port: number): void
```

Enables debugging of web contents.

<p><strong>API Note</strong>:<br>The port numbers from 0 to 1024 are prohibited. Ports less than 0 or greater than 65535 are considered invalid.If an attempt is made to set these disabled or invalid ports, an exception will be thrown.</p>

**Since:** 20

<!--Device-WebviewController-static setWebDebuggingAccess(webDebuggingAccess: boolean, port: number): void--><!--Device-WebviewController-static setWebDebuggingAccess(webDebuggingAccess: boolean, port: number): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| webDebuggingAccess | boolean | Yes | { |
| port | number | Yes | Indicates the port of the devtools server. After the port is specified, a tcp server |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100023](../errorcode-webview.md#17100023-port-number-not-allowed) | The port number is not within the allowed range. |

## setWebDestroyMode

```TypeScript
static setWebDestroyMode(mode: WebDestroyMode): void
```

Sets the destroy mode of the Web component. The destroy mode of the Web component affects the time when web kernel resources, such as the JavaScript running context and rendering context, are released. The default value is WebDestroyMode.NORMAL_MODE(normal mode), indicating that the system determines the destroy time. You can set WebDestroyMode.FAST_MODE (fast mode) to destroy resources immediately, improving performance in specific scenarios.

**Since:** 20

<!--Device-WebviewController-static setWebDestroyMode(mode: WebDestroyMode): void--><!--Device-WebviewController-static setWebDestroyMode(mode: WebDestroyMode): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | [WebDestroyMode](arkts-arkweb-webview-webdestroymode-e.md) | Yes | web destroy mode, default NORMAL_MODE. |

## setWebSchemeHandler

```TypeScript
setWebSchemeHandler(scheme: string, handler: WebSchemeHandler): void
```

Set web scheme handler for specific scheme. This is only used for related web component.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-setWebSchemeHandler(scheme: string, handler: WebSchemeHandler): void--><!--Device-WebviewController-setWebSchemeHandler(scheme: string, handler: WebSchemeHandler): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scheme | string | Yes | String value for url scheme. |
| handler | [WebSchemeHandler](arkts-arkweb-webview-webschemehandler-c.md) | Yes | Web scheme handler. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## slideScroll

```TypeScript
slideScroll(vx: number, vy: number): void
```

Simulates a slide-to-scroll action on the page at the specified velocity.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-slideScroll(vx: number, vy: number): void--><!--Device-WebviewController-slideScroll(vx: number, vy: number): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| vx | number | Yes | Horizontal velocity component of the slide-to-scroll action, where the positive direction is rightward.<br>Unit: vp/ms. |
| vy | number | Yes | Vertical velocity component of the slide-to-scroll action, where the positive direction is downward.<br>Unit: vp/ms. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## startCamera

```TypeScript
startCamera(): void
```

Enables the camera capture of the current web page. Before using the camera, add the **ohos.permission.CAMERA** permission to **module.json5**. For details about how to add the permission, see [Declaring Permissions in the Configuration File](../../../../security/AccessToken/declare-permissions.md).

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-startCamera(): void--><!--Device-WebviewController-startCamera(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## startDownload

```TypeScript
startDownload(url: string): void
```

Start a download.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-startDownload(url: string): void--><!--Device-WebviewController-startDownload(url: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | The download url. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. The webpage corresponding to the URL is invalid, or the URL length exceeds 2048.<br>**Applicable version:** 11 - 21 |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. The webpage corresponding to the URL is invalid, or the URL length exceeds 2048.<br>**Applicable version:** 11 - 21 |

## stop

```TypeScript
stop(): void
```

Stops the current load.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-stop(): void--><!--Device-WebviewController-stop(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## stopAllMedia

```TypeScript
stopAllMedia(): void
```

Stops all audio and video on a web page.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-stopAllMedia(): void--><!--Device-WebviewController-stopAllMedia(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## stopCamera

```TypeScript
stopCamera(): void
```

Stops the camera capture of the current web page.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-stopCamera(): void--><!--Device-WebviewController-stopCamera(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## stopMicrophone

```TypeScript
stopMicrophone(): void
```

Stops microphone capture on the current web page.

**Since:** 23

<!--Device-WebviewController-stopMicrophone(): void--><!--Device-WebviewController-stopMicrophone(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error. The WebviewController must be associated with a Web component. |

## storeWebArchive

```TypeScript
storeWebArchive(baseName: string, autoName: boolean): Promise<string>
```

Stores the current page as a web archive.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-storeWebArchive(baseName: string, autoName: boolean): Promise<string>--><!--Device-WebviewController-storeWebArchive(baseName: string, autoName: boolean): Promise<string>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| baseName | string | Yes | Where the generated offline webpage is stored, This value cannot be null. |
| autoName | boolean | Yes | Decide whether to automatically generate the file name. If false, it is stored by the file name of baseName. If true, the file name is automatically generated based on the current URL and stored in the file directory of baseName. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | a promise resolved after the web archive has been stored. The parameter will either be the filename under which the file was stored, or empty if storing the file failed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3. Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |
| [17100003](../errorcode-webview.md#17100003-incorrect-resource-path) | Invalid resource path or file type. |

## storeWebArchive

```TypeScript
storeWebArchive(baseName: string, autoName: boolean, callback: AsyncCallback<string>): void
```

Stores the current page as a web archive.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-storeWebArchive(baseName: string, autoName: boolean, callback: AsyncCallback<string>): void--><!--Device-WebviewController-storeWebArchive(baseName: string, autoName: boolean, callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| baseName | string | Yes | Where the generated offline webpage is stored, This value cannot be null. |
| autoName | boolean | Yes | Decide whether to automatically generate the file name. If false, it is stored by the file name of baseName. If true, the file name is automatically generated based on the current URL and stored in the file directory of baseName. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<string> | Yes | called after the web archive has been stored. The parameter will either be the filename under which the file was stored,or empty if storing the file failed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3. Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |
| [17100003](../errorcode-webview.md#17100003-incorrect-resource-path) | Invalid resource path or file type. |

## terminateRenderProcess

```TypeScript
terminateRenderProcess(): boolean
```

Terminates this render process.Calling this API will destroy the associated render process. If the render process has not been started or has been destroyed, there is no impact. In addition, destroying the render process affects all other instances associated with the render process.

**Since:** 12

<!--Device-WebviewController-terminateRenderProcess(): boolean--><!--Device-WebviewController-terminateRenderProcess(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | true if it was possible to terminate the render process, otherwise false.Calling this on a not yet started, or an already terminated render will have no effect. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |

## trimMemoryByPressureLevel

```TypeScript
static trimMemoryByPressureLevel(level: PressureLevel): void
```

Trim memory by different memory pressure level.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-WebviewController-static trimMemoryByPressureLevel(level: PressureLevel): void--><!--Device-WebviewController-static trimMemoryByPressureLevel(level: PressureLevel): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| level | [PressureLevel](arkts-arkweb-webview-pressurelevel-e.md) | Yes | The memory pressure level for the ArkWeb. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified.<br>2. Parameter string is too long.<br>3.Parameter verification failed. |

## waitForAttached

```TypeScript
waitForAttached(timeout: number): Promise<ControllerAttachState>
```

Asynchronously waits for the WebViewController to be attached to the Web component. If the attachment is complete or times out,a callback is triggered to return the current ControllerAttachState through a promise.

**Since:** 20

<!--Device-WebviewController-waitForAttached(timeout: number): Promise<ControllerAttachState>--><!--Device-WebviewController-waitForAttached(timeout: number): Promise<ControllerAttachState>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeout | number | Yes | the wait timeout, if timeout reach, promise will return, the unit is millisecond. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<ControllerAttachState> | Promise used to return the state of attach. |

## warmupServiceWorker

```TypeScript
static warmupServiceWorker(url: string): void
```

Warmup the registered service worker associated the url.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-static warmupServiceWorker(url: string): void--><!--Device-WebviewController-static warmupServiceWorker(url: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | The url. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. The webpage corresponding to the URL is invalid, or the URL length exceeds 2048.<br>**Applicable version:** 12 - 21 |
| [17100002](../errorcode-webview.md#17100002-incorrect-url-format) | URL error. The webpage corresponding to the URL is invalid, or the URL length exceeds 2048.<br>**Applicable version:** 12 - 21 |

## webPageSnapshot

```TypeScript
webPageSnapshot(info: SnapshotInfo, callback: AsyncCallback<SnapshotResult>): void
```

Obtains the full drawing result of the web page.

> **NOTE**  
>  
> Only static images and texts in the rendering process can be captured.  
>  
> If there is a video on the page, the placeholder image of the video is displayed when you take a snapshot. If  
> there is no placeholder image, the page is blank.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebviewController-webPageSnapshot(info: SnapshotInfo, callback: AsyncCallback<SnapshotResult>): void--><!--Device-WebviewController-webPageSnapshot(info: SnapshotInfo, callback: AsyncCallback<SnapshotResult>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | [SnapshotInfo](arkts-arkweb-webview-snapshotinfo-i.md) | Yes | Information for obtaining the full drawing result. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<SnapshotResult> | Yes | Callback used to return the result. |

## zoom

```TypeScript
zoom(factor: number): void
```

Zooms in or out of this web page. This API is effective only when [zoomAccess](@ohos.web.WebAttribute#zoomAccess) is **true**.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-zoom(factor: number): void--><!--Device-WebviewController-zoom(factor: number): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| factor | number | Yes | Relative zoom ratio. The value must be greater than 0. The value **1** indicates that the page is not zoomed. A value smaller than **1** indicates zoom-out, and a value greater than **1** indicates zoom-in.<br>Value range: (0, 100] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |
| [17100004](../errorcode-webview.md#17100004-function-not-enabled) | Function not enabled. |

## zoomIn

```TypeScript
zoomIn(): void
```

Zooms in on this web page by 25%.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-zoomIn(): void--><!--Device-WebviewController-zoomIn(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |
| [17100004](../errorcode-webview.md#17100004-function-not-enabled) | Function not enabled. |

## zoomOut

```TypeScript
zoomOut(): void
```

Zooms out of this web page by 20%.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebviewController-zoomOut(): void--><!--Device-WebviewController-zoomOut(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100001](../errorcode-webview.md#17100001-webviewcontroller-not-associated-with-a-web-component) | Init error.The WebviewController must be associated with a Web component. |
| [17100004](../errorcode-webview.md#17100004-function-not-enabled) | Function not enabled. |

