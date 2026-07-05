# replaceUrl

## replaceUrl

```TypeScript
function replaceUrl(options: RouterOptions, callback: AsyncCallback<void>): void
```

用应用内的某个页面替换当前页面，并销毁被替换的页面。 > **说明：** > > - 从API version 9开始支持，除Lite Wearable外，从API version 18开始废弃，建议使用 > [replaceUrl](arkts-router-c.md#replaceUrl) > 替代。replaceUrl需先通过[UIContext]@ohos.arkui.UIContext中的 > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取 > [Router]@ohos.arkui.UIContext实例，然后通过该实例进行调用。 > > - 从API version 10开始，可以通过使用[UIContext]@ohos.arkui.UIContext中的 > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的 > [Router]@ohos.arkui.UIContext对象。

**Since:** 9

**Deprecated since:** 18

**Substitute:** @ohos.arkui.UIContext:Router#replaceUrl(options:

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | RouterOptions | Yes | 替换页面描述信息。 |
| callback | AsyncCallback&lt;void> | Yes | 异常响应回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | The UI execution context is not found. This error code is thrown only in the  standard system. |
| 200002 | Uri error. The URI of the page to be used for replacement is incorrect or does  not exist. |

**Example**

```TypeScript
class RouterParams {
  data1: string;

  constructor(str: string) {
    this.data1 = str;
  }
}

router.replaceUrl({
  url: 'pages/detail',
  params: new RouterParams('message')
}, (err) => {
  if (err) {
    console.error(`replaceUrl failed, code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('replaceUrl success');
})

```

## replaceUrl

```TypeScript
function replaceUrl(options: RouterOptions): Promise<void>
```

用应用内的某个页面替换当前页面，并销毁被替换的页面。不支持设置页面转场动效，如需设置，推荐使用[Navigation组件](docroot://ui/arkts-navigation-architecture.md)。 > **说明：** > > - 从API version 9开始支持，除Lite Wearable外，从API version 18开始废弃，建议使用 > [replaceUrl](arkts-router-c.md#replaceUrl)替代。replaceUrl需先通过 > [UIContext]@ohos.arkui.UIContext中的 > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取 > [Router]@ohos.arkui.UIContext实例，然后通过该实例进行调用。 > > - 从API version 10开始，可以通过使用[UIContext]@ohos.arkui.UIContext中的 > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的 > [Router]@ohos.arkui.UIContext对象。

**Since:** 9

**Deprecated since:** 18

**Substitute:** @ohos.arkui.UIContext:Router#replaceUrl(options:

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | RouterOptions | Yes | 替换页面描述信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 异常返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | The UI execution context is not found. This error code is thrown only in the  standard system. |
| 200002 | Uri error. The URI of the page to be used for replacement is incorrect or does  not exist. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

class RouterParams {
  data1: string;

  constructor(str: string) {
    this.data1 = str;
  }
}

router.replaceUrl({
  url: 'pages/detail',
  params: new RouterParams('message')
})
  .then(() => {
    console.info(`replaceUrl finish`);
  })
  .catch((err: ESObject) => {
    console.error(`replaceUrl failed, code is ${(err as BusinessError).code}, message is ${(err as BusinessError).message}`);
  })

```

## replaceUrl

```TypeScript
function replaceUrl(options: RouterOptions, mode: RouterMode, callback: AsyncCallback<void>): void
```

用应用内的某个页面替换当前页面，并销毁被替换的页面。 > **说明：** > > - 从API version 9开始支持，除Lite Wearable外，从API version 18开始废弃，建议使用 > [replaceUrl](arkts-router-c.md#replaceUrl) > 替代。replaceUrl需先通过[UIContext]@ohos.arkui.UIContext中的 > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取 > [Router]@ohos.arkui.UIContext实例，然后通过该实例进行调用。 > > - 从API version 10开始，可以通过使用[UIContext]@ohos.arkui.UIContext中的 > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的 > [Router]@ohos.arkui.UIContext对象。

**Since:** 9

**Deprecated since:** 18

**Substitute:** @ohos.arkui.UIContext:Router#replaceUrl(options:

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | RouterOptions | Yes | 替换页面描述信息。 |
| mode | RouterMode | Yes | 跳转页面使用的模式。 |
| callback | AsyncCallback&lt;void> | Yes | 异常响应回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | The UI execution context is not found. This error code is thrown only in the  standard system. |
| 200002 | Uri error. The URI of the page to be used for replacement is incorrect or does  not exist. |

**Example**

```TypeScript
class RouterParams {
  data1: string;

  constructor(str: string) {
    this.data1 = str;
  }
}

router.replaceUrl({
  url: 'pages/detail',
  params: new RouterParams('message')
}, router.RouterMode.Standard, (err) => {
  if (err) {
    console.error(`replaceUrl failed, code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('replaceUrl success');
});

```

## replaceUrl

```TypeScript
function replaceUrl(options: RouterOptions, mode: RouterMode): Promise<void>
```

用应用内的某个页面替换当前页面，并销毁被替换的页面。 > **说明：** > > - 从API version 9开始支持，除Lite Wearable外，从API version 18开始废弃，建议使用 > [replaceUrl](arkts-router-c.md#replaceUrl) > 替代。replaceUrl需先通过[UIContext]@ohos.arkui.UIContext中的 > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)获取 > [Router]@ohos.arkui.UIContext实例，然后通过该实例进行调用。 > > - 从API version 10开始，可以通过使用[UIContext]@ohos.arkui.UIContext中的 > [getRouter](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter)方法获取当前UI上下文关联的 > [Router]@ohos.arkui.UIContext对象。

**Since:** 9

**Deprecated since:** 18

**Substitute:** @ohos.arkui.UIContext:Router#replaceUrl(options:

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | RouterOptions | Yes | 替换页面描述信息。 |
| mode | RouterMode | Yes | 跳转页面使用的模式。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 异常返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | Failed to get the delegate. This error code is thrown only in the standard  system. |
| 200002 | Uri error. The URI of the page to be used for replacement is incorrect or does  not exist. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

class RouterParams {
  data1: string;

  constructor(str: string) {
    this.data1 = str;
  }
}

router.replaceUrl({
  url: 'pages/detail',
  params: new RouterParams('message')
}, router.RouterMode.Standard)
  .then(() => {
    console.info(`replaceUrl finish`);
  })
  .catch((err: ESObject) => {
    console.error(`replaceUrl failed, code is ${(err as BusinessError).code}, message is ${(err as BusinessError).message}`);
  })

```

