# NavPushPathHelper

provides a push method for the target page in the routing table.

**Since:** 12

<!--Device-unnamed-export declare class NavPushPathHelper--><!--Device-unnamed-export declare class NavPushPathHelper-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { NavPushPathHelper } from '@kit.ArkUI';
```

<a id="constructor"></a>
## constructor

```TypeScript
constructor(navPathStack: NavPathStack)
```

The constructor used to create a NavPushPathHelper object.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NavPushPathHelper-constructor(navPathStack: NavPathStack)--><!--Device-NavPushPathHelper-constructor(navPathStack: NavPathStack)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| navPathStack | [NavPathStack](../arkts-components/arkts-arkui-navpathstack-c.md) | Yes | The stack of the route table. |

<a id="pushdestination"></a>
## pushDestination

```TypeScript
pushDestination(moduleName: string, info: NavPathInfo, animated?: boolean): Promise<void>
```

Pushes the route page into the stack.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NavPushPathHelper-pushDestination(moduleName: string, info: NavPathInfo, animated?: boolean): Promise<void>--><!--Device-NavPushPathHelper-pushDestination(moduleName: string, info: NavPathInfo, animated?: boolean): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | Module name |
| info | [NavPathInfo](../arkts-components/arkts-arkui-navpathinfo-c.md) | Yes | Indicates the route page to be pushed. |
| animated | boolean | No | Indicates whether the transition is animated. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [100001](../errorcode-internal.md#100001-internal-error) | Internal error. |
| [100005](../errorcode-router.md#100005-builder-function-not-registered-during-navigation) | Builder function not registered. |
| [100006](../errorcode-router.md#100006-navdestination-not-found) | NavDestination not found. |
| [300001](../errorcode-router.md#300001-hsp-download-failure-before-redirection) | hsp silent install fail. |

<a id="pushdestination-1"></a>
## pushDestination

```TypeScript
pushDestination(moduleName: string, info: NavPathInfo, options?: NavigationOptions): Promise<void>
```

Pushes the NavDestination into the stack.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NavPushPathHelper-pushDestination(moduleName: string, info: NavPathInfo, options?: NavigationOptions): Promise<void>--><!--Device-NavPushPathHelper-pushDestination(moduleName: string, info: NavPathInfo, options?: NavigationOptions): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | Module name |
| info | [NavPathInfo](../arkts-components/arkts-arkui-navpathinfo-c.md) | Yes | Indicates the NavDestination to be pushed. |
| options | [NavigationOptions](../arkts-components/arkts-arkui-navigationoptions-i.md) | No | Indicates options of stack operation. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified.2. Incorrect parameters types.3. Parameter verification failed. |
| [100001](../errorcode-internal.md#100001-internal-error) | Internal error. |
| [100005](../errorcode-router.md#100005-builder-function-not-registered-during-navigation) | Builder function not registered. |
| [100006](../errorcode-router.md#100006-navdestination-not-found) | NavDestination not found. |
| [300001](../errorcode-router.md#300001-hsp-download-failure-before-redirection) | hsp silent install fail. |

<a id="pushdestinationbyname"></a>
## pushDestinationByName

```TypeScript
pushDestinationByName(moduleName: string, name: string, param: Object, animated?: boolean): Promise<void>
```

Pushes the specified route page into the stack.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NavPushPathHelper-pushDestinationByName(moduleName: string, name: string, param: Object, animated?: boolean): Promise<void>--><!--Device-NavPushPathHelper-pushDestinationByName(moduleName: string, name: string, param: Object, animated?: boolean): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | Module name |
| name | string | Yes | Indicates the name of the route page to be pushed. |
| param | Object | Yes | Indicates the detailed parameter of the route page to be pushed. |
| animated | boolean | No | Indicates whether the transition is animated. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [100001](../errorcode-internal.md#100001-internal-error) | Internal error. |
| [100005](../errorcode-router.md#100005-builder-function-not-registered-during-navigation) | Builder function not registered. |
| [100006](../errorcode-router.md#100006-navdestination-not-found) | NavDestination not found. |
| [300001](../errorcode-router.md#300001-hsp-download-failure-before-redirection) | hsp silent install fail. |

<a id="pushdestinationbyname-1"></a>
## pushDestinationByName

```TypeScript
pushDestinationByName(moduleName: string, name: string, param: Object,
    onPop: Callback<PopInfo>, animated?: boolean): Promise<void>
```

Pushes the specified route page into the stack.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NavPushPathHelper-pushDestinationByName(moduleName: string, name: string, param: Object,
    onPop: Callback<PopInfo>, animated?: boolean): Promise<void>--><!--Device-NavPushPathHelper-pushDestinationByName(moduleName: string, name: string, param: Object,
    onPop: Callback<PopInfo>, animated?: boolean): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | Module name |
| name | string | Yes | Indicates the name of the route page to be pushed. |
| param | Object | Yes | Indicates the detailed parameter of the route page to be pushed. |
| onPop | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;PopInfo&gt; | Yes | The callback when next page returns. |
| animated | boolean | No | Indicates whether the transition is animated. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [100001](../errorcode-internal.md#100001-internal-error) | Internal error. |
| [100005](../errorcode-router.md#100005-builder-function-not-registered-during-navigation) | Builder function not registered. |
| [100006](../errorcode-router.md#100006-navdestination-not-found) | NavDestination not found. |
| [300001](../errorcode-router.md#300001-hsp-download-failure-before-redirection) | hsp silent install fail. |

<a id="pushpath"></a>
## pushPath

```TypeScript
pushPath(moduleName: string, info: NavPathInfo, animated?: boolean): Promise<void>
```

Pushes the route page into the stack.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NavPushPathHelper-pushPath(moduleName: string, info: NavPathInfo, animated?: boolean): Promise<void>--><!--Device-NavPushPathHelper-pushPath(moduleName: string, info: NavPathInfo, animated?: boolean): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | Module name |
| info | [NavPathInfo](../arkts-components/arkts-arkui-navpathinfo-c.md) | Yes | Indicates the route page to be pushed. |
| animated | boolean | No | Indicates whether the transition is animated. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [300001](../errorcode-router.md#300001-hsp-download-failure-before-redirection) | hsp silent install fail. |

<a id="pushpath-1"></a>
## pushPath

```TypeScript
pushPath(moduleName: string, info: NavPathInfo, options?: NavigationOptions): Promise<void>
```

Pushes the NavDestination into the stack.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NavPushPathHelper-pushPath(moduleName: string, info: NavPathInfo, options?: NavigationOptions): Promise<void>--><!--Device-NavPushPathHelper-pushPath(moduleName: string, info: NavPathInfo, options?: NavigationOptions): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | Module name |
| info | [NavPathInfo](../arkts-components/arkts-arkui-navpathinfo-c.md) | Yes | Indicates the NavDestination to be pushed. |
| options | [NavigationOptions](../arkts-components/arkts-arkui-navigationoptions-i.md) | No | Indicates options of stack operation. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [300001](../errorcode-router.md#300001-hsp-download-failure-before-redirection) | hsp silent install fail. |

<a id="pushpathbyname"></a>
## pushPathByName

```TypeScript
pushPathByName(moduleName: string, name: string, param: Object, animated?: boolean): Promise<void>
```

Pushes the specified route page into the stack.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NavPushPathHelper-pushPathByName(moduleName: string, name: string, param: Object, animated?: boolean): Promise<void>--><!--Device-NavPushPathHelper-pushPathByName(moduleName: string, name: string, param: Object, animated?: boolean): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | Module name |
| name | string | Yes | Indicates the name of the route page to be pushed. |
| param | Object | Yes | Indicates the detailed parameter of the route page to be pushed. |
| animated | boolean | No | Indicates whether the transition is animated. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [300001](../errorcode-router.md#300001-hsp-download-failure-before-redirection) | hsp silent install fail. |

<a id="pushpathbyname-1"></a>
## pushPathByName

```TypeScript
pushPathByName(moduleName: string, name: string, param: Object,
    onPop: Callback<PopInfo>, animated?: boolean): Promise<void>
```

Pushes the specified route page into the stack.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NavPushPathHelper-pushPathByName(moduleName: string, name: string, param: Object,
    onPop: Callback<PopInfo>, animated?: boolean): Promise<void>--><!--Device-NavPushPathHelper-pushPathByName(moduleName: string, name: string, param: Object,
    onPop: Callback<PopInfo>, animated?: boolean): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | Module name |
| name | string | Yes | Indicates the name of the route page to be pushed. |
| param | Object | Yes | Indicates the detailed parameter of the route page to be pushed. |
| onPop | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;PopInfo&gt; | Yes | The callback when next page returns. |
| animated | boolean | No | Indicates whether the transition is animated. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [300001](../errorcode-router.md#300001-hsp-download-failure-before-redirection) | hsp silent install fail. |

<a id="replacepath"></a>
## replacePath

```TypeScript
replacePath(moduleName: string, info: NavPathInfo, animated?: boolean): Promise<void>
```

replace the current page with the specific one.The current page will be destroyed.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NavPushPathHelper-replacePath(moduleName: string, info: NavPathInfo, animated?: boolean): Promise<void>--><!--Device-NavPushPathHelper-replacePath(moduleName: string, info: NavPathInfo, animated?: boolean): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | Module name |
| info | [NavPathInfo](../arkts-components/arkts-arkui-navpathinfo-c.md) | Yes | Indicates the the new route page in top of the stack. |
| animated | boolean | No | Indicates whether the transition is animated. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [300001](../errorcode-router.md#300001-hsp-download-failure-before-redirection) | hsp silent install fail. |

<a id="replacepath-1"></a>
## replacePath

```TypeScript
replacePath(moduleName: string, info: NavPathInfo, options?: NavigationOptions): Promise<void>
```

Replace the current NavDestination with the specific one.The current NavDestination will be destroyed.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NavPushPathHelper-replacePath(moduleName: string, info: NavPathInfo, options?: NavigationOptions): Promise<void>--><!--Device-NavPushPathHelper-replacePath(moduleName: string, info: NavPathInfo, options?: NavigationOptions): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | Module name |
| info | [NavPathInfo](../arkts-components/arkts-arkui-navpathinfo-c.md) | Yes | Indicates the new NavDestination in top of the stack. |
| options | [NavigationOptions](../arkts-components/arkts-arkui-navigationoptions-i.md) | No | Indicates options of stack operation. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [300001](../errorcode-router.md#300001-hsp-download-failure-before-redirection) | hsp silent install fail. |

<a id="replacepathbyname"></a>
## replacePathByName

```TypeScript
replacePathByName(moduleName: string, name: string, param: Object, animated?: boolean): Promise<void>
```

replace the current page with the specific one.The current page will be destroyed.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-NavPushPathHelper-replacePathByName(moduleName: string, name: string, param: Object, animated?: boolean): Promise<void>--><!--Device-NavPushPathHelper-replacePathByName(moduleName: string, name: string, param: Object, animated?: boolean): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | Module name |
| name | string | Yes | Indicates name of the new route page in top of stack. |
| param | Object | Yes | Indicates the detailed parameter of the new route page in top of the stack. |
| animated | boolean | No | Indicates whether the transition is animated. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [300001](../errorcode-router.md#300001-hsp-download-failure-before-redirection) | hsp silent install fail. |

