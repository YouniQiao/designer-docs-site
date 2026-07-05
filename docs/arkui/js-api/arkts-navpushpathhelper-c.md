# NavPushPathHelper

provides a push method for the target page in the routing table.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { NavPushPathHelper } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(navPathStack: NavPathStack)
```

The constructor used to create a NavPushPathHelper object.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| navPathStack | NavPathStack | Yes | The stack of the route table. |

## pushDestination

```TypeScript
pushDestination(moduleName: string, info: NavPathInfo, animated?: boolean): Promise<void>
```

Pushes the route page into the stack.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | Module name |
| info | NavPathInfo | Yes | Indicates the route page to be pushed. |
| animated | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | Internal error. |
| 100005 | Builder function not registered. |
| 100006 | NavDestination not found. |
| 300001 | hsp silent install fail. |

## pushDestination

```TypeScript
pushDestination(moduleName: string, info: NavPathInfo, options?: NavigationOptions): Promise<void>
```

Pushes the NavDestination into the stack.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | Module name |
| info | NavPathInfo | Yes | Indicates the NavDestination to be pushed. |
| options | NavigationOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | Internal error. |
| 100005 | Builder function not registered. |
| 100006 | NavDestination not found. |
| 300001 | hsp silent install fail. |

## pushDestinationByName

```TypeScript
pushDestinationByName(moduleName: string, name: string, param: Object, animated?: boolean): Promise<void>
```

Pushes the specified route page into the stack.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | Module name |
| name | string | Yes | Indicates the name of the route page to be pushed. |
| param | Object | Yes | Indicates the detailed parameter of the route page to be pushed. |
| animated | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | Internal error. |
| 100005 | Builder function not registered. |
| 100006 | NavDestination not found. |
| 300001 | hsp silent install fail. |

## pushDestinationByName

```TypeScript
pushDestinationByName(moduleName: string, name: string, param: Object,
    onPop: Callback<PopInfo>, animated?: boolean): Promise<void>
```

Pushes the specified route page into the stack.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | Module name |
| name | string | Yes | Indicates the name of the route page to be pushed. |
| param | Object | Yes | Indicates the detailed parameter of the route page to be pushed. |
| onPop | Callback&lt;PopInfo> | Yes | The callback when next page returns. |
| animated | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | Internal error. |
| 100005 | Builder function not registered. |
| 100006 | NavDestination not found. |
| 300001 | hsp silent install fail. |

## pushPath

```TypeScript
pushPath(moduleName: string, info: NavPathInfo, animated?: boolean): Promise<void>
```

Pushes the route page into the stack.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | Module name |
| info | NavPathInfo | Yes | Indicates the route page to be pushed. |
| animated | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 300001 | hsp silent install fail. |

## pushPath

```TypeScript
pushPath(moduleName: string, info: NavPathInfo, options?: NavigationOptions): Promise<void>
```

Pushes the NavDestination into the stack.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | Module name |
| info | NavPathInfo | Yes | Indicates the NavDestination to be pushed. |
| options | NavigationOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 300001 | hsp silent install fail. |

## pushPathByName

```TypeScript
pushPathByName(moduleName: string, name: string, param: Object, animated?: boolean): Promise<void>
```

Pushes the specified route page into the stack.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | Module name |
| name | string | Yes | Indicates the name of the route page to be pushed. |
| param | Object | Yes | Indicates the detailed parameter of the route page to be pushed. |
| animated | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 300001 | hsp silent install fail. |

## pushPathByName

```TypeScript
pushPathByName(moduleName: string, name: string, param: Object,
    onPop: Callback<PopInfo>, animated?: boolean): Promise<void>
```

Pushes the specified route page into the stack.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | Module name |
| name | string | Yes | Indicates the name of the route page to be pushed. |
| param | Object | Yes | Indicates the detailed parameter of the route page to be pushed. |
| onPop | Callback&lt;PopInfo> | Yes | The callback when next page returns. |
| animated | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 300001 | hsp silent install fail. |

## replacePath

```TypeScript
replacePath(moduleName: string, info: NavPathInfo, animated?: boolean): Promise<void>
```

replace the current page with the specific one.The current page will be destroyed.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | Module name |
| info | NavPathInfo | Yes | Indicates the the new route page in top of the stack. |
| animated | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 300001 | hsp silent install fail. |

## replacePath

```TypeScript
replacePath(moduleName: string, info: NavPathInfo, options?: NavigationOptions): Promise<void>
```

Replace the current NavDestination with the specific one.The current NavDestination will be destroyed.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | Module name |
| info | NavPathInfo | Yes | Indicates the new NavDestination in top of the stack. |
| options | NavigationOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 300001 | hsp silent install fail. |

## replacePathByName

```TypeScript
replacePathByName(moduleName: string, name: string, param: Object, animated?: boolean): Promise<void>
```

replace the current page with the specific one.The current page will be destroyed.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | Module name |
| name | string | Yes | Indicates name of the new route page in top of stack. |
| param | Object | Yes | Indicates the detailed parameter of the new route page in top of the stack. |
| animated | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 300001 | hsp silent install fail. |

