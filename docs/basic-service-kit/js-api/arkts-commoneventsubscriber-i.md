# CommonEventSubscriber

表示公共事件的订阅者。

**Since:** 7

**System capability:** SystemCapability.Notification.CommonEvent

## abortCommonEvent

```TypeScript
abortCommonEvent(callback: AsyncCallback<void>): void
```

添加有序公共事件的中止状态。当该接口与 [finishCommonEvent](arkts-commoneventsubscriber-i.md#finishCommonEvent)配合使用时，可以中止当前的有序公共事 件，使该公共事件不再向下一个订阅者传递。使用callback异步回调。

**Since:** 7

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当添加有序公共事件中止状态成功时，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## abortCommonEvent

```TypeScript
abortCommonEvent(): Promise<void>
```

添加有序公共事件的中止状态。当该接口与 [finishCommonEvent](arkts-commoneventsubscriber-i.md#finishCommonEvent)配合使用时，可以中止当前的有序公共事 件，使该公共事件不再向下一个订阅者传递。使用Promise异步回调。

**Since:** 7

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

## abortCommonEventSync

```TypeScript
abortCommonEventSync(): void
```

添加有序公共事件的中止状态。当该接口与 [finishCommonEvent](arkts-commoneventsubscriber-i.md#finishCommonEvent)配合使用时，可以中止当前的有序公共事 件，使该公共事件不再向下一个订阅者传递。

**Since:** 10

**System capability:** SystemCapability.Notification.CommonEvent

## clearAbortCommonEvent

```TypeScript
clearAbortCommonEvent(callback: AsyncCallback<void>): void
```

清理有序公共事件的中止状态。当该接口与 [finishCommonEvent](arkts-commoneventsubscriber-i.md#finishCommonEvent)配合使用时，可以使该公共事件继续向下 一个订阅者传递。使用callback异步回调。

**Since:** 7

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当清理有序公共事件中止状态成功时，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## clearAbortCommonEvent

```TypeScript
clearAbortCommonEvent(): Promise<void>
```

清理有序公共事件的中止状态。当该接口与 [finishCommonEvent](arkts-commoneventsubscriber-i.md#finishCommonEvent)配合使用时，可以使该公共事件继续向下 一个订阅者传递。使用Promise异步回调。

**Since:** 7

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

## clearAbortCommonEventSync

```TypeScript
clearAbortCommonEventSync(): void
```

清理有序公共事件的中止状态。当该接口与 [finishCommonEvent](arkts-commoneventsubscriber-i.md#finishCommonEvent)配合使用时，可以使该公共事件继续向下 一个订阅者传递。

**Since:** 10

**System capability:** SystemCapability.Notification.CommonEvent

## finishCommonEvent

```TypeScript
finishCommonEvent(callback: AsyncCallback<void>): void
```

用于订阅者结束对当前有序公共事件的处理。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当订阅者结束当前有序公共事件成功时，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## finishCommonEvent

```TypeScript
finishCommonEvent(): Promise<void>
```

用于订阅者结束对当前有序公共事件的处理。使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

## getAbortCommonEvent

```TypeScript
getAbortCommonEvent(callback: AsyncCallback<boolean>): void
```

获取当前有序公共事件是否处于中止状态。使用callback异步回调。

**Since:** 7

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。返回true表示当前有序公共事件处于中止状态；返回false表示当前有序公共事件没有处于中止状态。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## getAbortCommonEvent

```TypeScript
getAbortCommonEvent(): Promise<boolean>
```

获取当前有序公共事件是否处于中止状态。使用Promise异步回调。

**Since:** 7

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示当前有序公共事件处于中止状态；返回false表示当前有序公共事件没有处于中止状态。 |

## getAbortCommonEventSync

```TypeScript
getAbortCommonEventSync(): boolean
```

获取当前有序公共事件是否处于中止状态。

**Since:** 10

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回true表示当前有序公共事件处于中止状态；返回false表示当前有序公共事件没有处于中止状态。 |

## getCode

```TypeScript
getCode(callback: AsyncCallback<int>): void
```

获取有序公共事件传递的数据（number类型）。使用callback异步回调。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;int> | Yes | 回调函数。返回有序公共事件传递的数据（number类型）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## getCode

```TypeScript
getCode(): Promise<int>
```

获取有序公共事件传递的数据（number类型）。使用Promise异步回调。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise对象。返回有序公共事件传递的数据（number类型）。 |

## getCodeSync

```TypeScript
getCodeSync(): int
```

获取有序公共事件传递的数据（number类型）。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| int | 表示有序公共事件传递的数据（number类型）。 |

## getData

```TypeScript
getData(callback: AsyncCallback<string>): void
```

获取有序公共事件传递的数据（string类型）。使用callback异步回调。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string> | Yes | 回调函数。返回有序公共事件传递的数据（string类型）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## getData

```TypeScript
getData(): Promise<string>
```

获取有序公共事件传递的数据（string类型）。使用Promise异步回调。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象。返回有序公共事件传递的数据（string类型）。 |

## getDataSync

```TypeScript
getDataSync(): string
```

获取有序公共事件传递的数据（string类型）。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| string | 有序公共事件传递的数据（string类型）。 |

## getSubscribeInfo

```TypeScript
getSubscribeInfo(callback: AsyncCallback<CommonEventSubscribeInfo>): void
```

获取订阅者的订阅信息。使用callback异步回调。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CommonEventSubscribeInfo> | Yes | 回调函数。返回订阅者的订阅信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## getSubscribeInfo

```TypeScript
getSubscribeInfo(callback: AsyncCallback<CommonEventSubscribeInfo|null>): void
```

获取订阅者的订阅信息。使用callback异步回调。

**Since:** 23

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CommonEventSubscribeInfo\|null> | Yes | 回调函数。返回订阅者的订阅信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## getSubscribeInfo

```TypeScript
getSubscribeInfo(): Promise<CommonEventSubscribeInfo>
```

获取订阅者的订阅信息。使用Promise异步回调。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CommonEventSubscribeInfo> | Promise对象。返回订阅者的订阅信息。 |

## getSubscribeInfo

```TypeScript
getSubscribeInfo(): Promise<CommonEventSubscribeInfo|null>
```

获取订阅者的订阅信息。使用Promise异步回调。

**Since:** 23

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CommonEventSubscribeInfo\|null> | Promise对象。返回订阅者的订阅信息。 |

## getSubscribeInfoSync

```TypeScript
getSubscribeInfoSync(): CommonEventSubscribeInfo
```

获取订阅者的订阅信息。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| CommonEventSubscribeInfo | 表示订阅者的订阅信息。 |

## getSubscribeInfoSync

```TypeScript
getSubscribeInfoSync(): CommonEventSubscribeInfo|null
```

获取订阅者的订阅信息。

**Since:** 23

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| CommonEventSubscribeInfo | 表示订阅者的订阅信息。 |

## isOrderedCommonEvent

```TypeScript
isOrderedCommonEvent(callback: AsyncCallback<boolean>): void
```

查询当前公共事件是否为有序公共事件。使用callback异步回调。

**Since:** 7

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。返回true表示有序公共事件；返回false表示无序公共事件。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## isOrderedCommonEvent

```TypeScript
isOrderedCommonEvent(): Promise<boolean>
```

查询当前公共事件是否为有序公共事件。使用Promise异步回调。

**Since:** 7

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示有序公共事件；返回false表示无序公共事件。 |

## isOrderedCommonEventSync

```TypeScript
isOrderedCommonEventSync(): boolean
```

查询当前公共事件是否为有序公共事件。

**Since:** 10

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回true表示有序公共事件；返回false表示无序公共事件。 |

## isStickyCommonEvent

```TypeScript
isStickyCommonEvent(callback: AsyncCallback<boolean>): void
```

检查当前公共事件是否为一个粘性事件。使用callback异步回调。

**Since:** 7

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。返回true表示是粘性公共事件；返回false表示不是粘性公共事件。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## isStickyCommonEvent

```TypeScript
isStickyCommonEvent(): Promise<boolean>
```

检查当前公共事件是否为一个粘性事件。使用Promise异步回调。

**Since:** 7

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示是粘性公共事件；返回false表示不是粘性公共事件。 |

## isStickyCommonEventSync

```TypeScript
isStickyCommonEventSync(): boolean
```

检查当前公共事件是否为一个粘性事件。

**Since:** 10

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回true表示是粘性公共事件；返回false表示不是粘性公共事件。 |

## setCode

```TypeScript
setCode(code: int, callback: AsyncCallback<void>): void
```

设置有序公共事件传递的数据（number类型）。使用callback异步回调。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | int | Yes | 有序公共事件传递的数据（number类型）。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当设置有序公共事件传递的数据（number类型）成功时，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## setCode

```TypeScript
setCode(code: int): Promise<void>
```

设置有序公共事件传递的数据（number类型）。使用Promise异步回调。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | int | Yes | 有序公共事件传递的数据（number类型）。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## setCodeAndData

```TypeScript
setCodeAndData(code: int, data: string, callback: AsyncCallback<void>): void
```

设置有序公共事件数据。使用callback异步回调。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | int | Yes | 有序公共事件传递的数据（number类型）。 |
| data | string | Yes | 有序公共事件传递的数据（string类型）。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当设置有序公共事件传递的数据成功时，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## setCodeAndData

```TypeScript
setCodeAndData(code: int, data: string): Promise<void>
```

设置有序公共事件传递的数据。使用Promise异步回调。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | int | Yes | 有序公共事件传递的数据（number类型）。 |
| data | string | Yes | 有序公共事件传递的数据（string类型）。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## setCodeAndDataSync

```TypeScript
setCodeAndDataSync(code: int, data: string): void
```

设置有序公共事件传递的数据。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | int | Yes | 有序公共事件传递的数据（number类型）。 |
| data | string | Yes | 有序公共事件传递的数据（string类型）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## setCodeSync

```TypeScript
setCodeSync(code: int): void
```

设置有序公共事件传递的数据（number类型）。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | int | Yes | 有序公共事件传递的数据（number类型）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## setData

```TypeScript
setData(data: string, callback: AsyncCallback<void>): void
```

设置有序公共事件传递的数据（string类型）。使用callback异步回调。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | string | Yes | 有序公共事件传递的数据（string类型）。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当设置有序公共事件传递的数据（string类型）成功时，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## setData

```TypeScript
setData(data: string): Promise<void>
```

设置有序公共事件传递的数据（string类型）。使用Promise异步回调。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | string | Yes | 有序公共事件传递的数据（string类型）。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## setDataSync

```TypeScript
setDataSync(data: string): void
```

设置有序公共事件传递的数据（string类型）。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | string | Yes | 有序公共事件传递的数据（string类型）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

