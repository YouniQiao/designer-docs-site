# pushUrl

## Modules to Import

```TypeScript
import { router } from '@kit.ArkUI';
```

<a id="pushurl"></a>
## pushUrl

```TypeScript
function pushUrl(options: RouterOptions, callback: AsyncCallback<void>): void
```

Navigates to a specified page in the application.

> **NOTE**  
>  
> - Since API version 10, you can use the  
> [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in  
> [UIContext](arkts-arkui-uicontext.md) to obtain the [Router](arkts-arkui-uicontext.md) object associated  
> with the current UI context.

**Since:** 9

**Deprecated since:** 18

**Substitutes:** [pushUrl(options:](arkts-arkui-arkui-uicontext-router-c.md#pushurl-1)

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-router-function pushUrl(options: RouterOptions, callback: AsyncCallback<void>): void--><!--Device-router-function pushUrl(options: RouterOptions, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [RouterOptions](arkts-arkui-router-routeroptions-i.md) | Yes | Page routing parameters. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [100001](../errorcode-internal.md#100001-internal-error) | Internal error. |
| [100002](../errorcode-router.md#100002-incorrect-uri-during-page-redirection) | Uri error. The URI of the page to redirect is incorrect or does not exist |
| [100003](../errorcode-router.md#100003-too-many-pages-are-pushed-into-the-page-stack) | Page stack error. Too many pages are pushed. |

**Example**

```TypeScript
import { router } from '@kit.ArkUI';

class innerParams {
  data3: number[];

  constructor(tuple: number[]) {
    this.data3 = tuple;
  }
}

class RouterParams {
  data1: string;
  data2: innerParams;

  constructor(str: string, tuple: number[]) {
    this.data1 = str;
    this.data2 = new innerParams(tuple);
  }
}

router.pushUrl({
  url: 'pages/routerpage2',
  params: new RouterParams('message', [123, 456, 789])
}, (err) => {
  if (err) {
    console.error(`pushUrl failed. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('pushUrl success');
})

```


<a id="pushurl-1"></a>
## pushUrl

```TypeScript
function pushUrl(options: RouterOptions): Promise<void>
```

Navigates to a specified page in the application.

> **NOTE**  
>  
> - Since API version 10, you can use the  
> [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in  
> [UIContext](arkts-arkui-uicontext.md) to obtain the [Router](arkts-arkui-uicontext.md) object associated  
> with the current UI context.

**Since:** 9

**Deprecated since:** 18

**Substitutes:** [pushUrl(options:](arkts-arkui-arkui-uicontext-router-c.md#pushurl-1)

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-router-function pushUrl(options: RouterOptions): Promise<void>--><!--Device-router-function pushUrl(options: RouterOptions): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [RouterOptions](arkts-arkui-router-routeroptions-i.md) | Yes | Page routing parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [100001](../errorcode-internal.md#100001-internal-error) | Internal error. |
| [100002](../errorcode-router.md#100002-incorrect-uri-during-page-redirection) | Uri error. The URI of the page to redirect is incorrect or does not exist |
| [100003](../errorcode-router.md#100003-too-many-pages-are-pushed-into-the-page-stack) | Page stack error. Too many pages are pushed. |

**Example**

```TypeScript
import { router } from '@kit.ArkUI';

import { BusinessError } from '@kit.BasicServicesKit';

class innerParams {
  data3: number[];

  constructor(tuple: number[]) {
    this.data3 = tuple;
  }
}

class RouterParams {
  data1: string;
  data2: innerParams;

  constructor(str: string, tuple: number[]) {
    this.data1 = str;
    this.data2 = new innerParams(tuple);
  }
}

router.pushUrl({
  url: 'pages/routerpage2',
  params: new RouterParams('message', [123, 456, 789])
})
  .then(() => {
    console.info(`pushUrl finish`);
  })
  .catch((err: BusinessError) => {
    console.error(`pushUrl failed. Code: ${err.code}, message: ${err.message}`);
  })

```


<a id="pushurl-2"></a>
## pushUrl

```TypeScript
function pushUrl(options: RouterOptions, mode: RouterMode, callback: AsyncCallback<void>): void
```

Navigates to a specified page in the application.

> **NOTE**  
>  
> - Since API version 10, you can use the  
> [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in  
> [UIContext](arkts-arkui-uicontext.md) to obtain the [Router](arkts-arkui-uicontext.md) object associated  
> with the current UI context.

**Since:** 9

**Deprecated since:** 18

**Substitutes:** [pushUrl(options:](arkts-arkui-arkui-uicontext-router-c.md#pushurl-1)

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-router-function pushUrl(options: RouterOptions, mode: RouterMode, callback: AsyncCallback<void>): void--><!--Device-router-function pushUrl(options: RouterOptions, mode: RouterMode, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [RouterOptions](arkts-arkui-router-routeroptions-i.md) | Yes | Page routing parameters. |
| mode | [RouterMode](arkts-arkui-router-routermode-e.md) | Yes | Routing mode. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [100001](../errorcode-internal.md#100001-internal-error) | Internal error. |
| [100002](../errorcode-router.md#100002-incorrect-uri-during-page-redirection) | Uri error. The URI of the page to redirect is incorrect or does not exist |
| [100003](../errorcode-router.md#100003-too-many-pages-are-pushed-into-the-page-stack) | Page stack error. Too many pages are pushed. |

**Example**

```TypeScript
import { router } from '@kit.ArkUI';

class innerParams {
  data3: number[];

  constructor(tuple: number[]) {
    this.data3 = tuple;
  }
}

class RouterParams {
  data1: string;
  data2: innerParams;

  constructor(str: string, tuple: number[]) {
    this.data1 = str;
    this.data2 = new innerParams(tuple);
  }
}

router.pushUrl({
  url: 'pages/routerpage2',
  params: new RouterParams('message', [123, 456, 789])
}, router.RouterMode.Standard, (err) => {
  if (err) {
    console.error(`pushUrl failed. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('pushUrl success');
})

```


<a id="pushurl-3"></a>
## pushUrl

```TypeScript
function pushUrl(options: RouterOptions, mode: RouterMode): Promise<void>
```

Navigates to a specified page in the application.

> **NOTE**  
>  
> - Since API version 10, you can use the  
> [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) API in  
> [UIContext](arkts-arkui-uicontext.md) to obtain the [Router](arkts-arkui-uicontext.md) object associated  
> with the current UI context.

**Since:** 9

**Deprecated since:** 18

**Substitutes:** [pushUrl(options:](arkts-arkui-arkui-uicontext-router-c.md#pushurl-1)

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-router-function pushUrl(options: RouterOptions, mode: RouterMode): Promise<void>--><!--Device-router-function pushUrl(options: RouterOptions, mode: RouterMode): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [RouterOptions](arkts-arkui-router-routeroptions-i.md) | Yes | Page routing parameters. |
| mode | [RouterMode](arkts-arkui-router-routermode-e.md) | Yes | Routing mode. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [100001](../errorcode-internal.md#100001-internal-error) | Internal error. |
| [100002](../errorcode-router.md#100002-incorrect-uri-during-page-redirection) | Uri error. The URI of the page to redirect is incorrect or does not exist |
| [100003](../errorcode-router.md#100003-too-many-pages-are-pushed-into-the-page-stack) | Page stack error. Too many pages are pushed. |

**Example**

```TypeScript
import { router } from '@kit.ArkUI';

import { BusinessError } from '@kit.BasicServicesKit';

class innerParams {
  data3: number[];

  constructor(tuple: number[]) {
    this.data3 = tuple;
  }
}

class RouterParams {
  data1: string;
  data2: innerParams;

  constructor(str: string, tuple: number[]) {
    this.data1 = str;
    this.data2 = new innerParams(tuple);
  }
}

router.pushUrl({
  url: 'pages/routerpage2',
  params: new RouterParams('message', [123, 456, 789])
}, router.RouterMode.Standard)
  .then(() => {
    console.info(`pushUrl finish`);
  })
  .catch((err: BusinessError) => {
    console.error(`pushUrl failed. Code: ${err.code}, message: ${err.message}`);
  })

```

