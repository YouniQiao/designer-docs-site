# CommonEventSubscriber

The **CommonEventSubscriber** module provides APIs for describing the common event subscriber.

**Since:** 7

<!--Device-unnamed-export interface CommonEventSubscriber--><!--Device-unnamed-export interface CommonEventSubscriber-End-->

**System capability:** SystemCapability.Notification.CommonEvent

## abortCommonEvent

```TypeScript
abortCommonEvent(callback: AsyncCallback<void>): void
```

Aborts an ordered common event. This API is used with [finishCommonEvent](arkts-basicservices-commoneventsubscriber-commoneventsubscriber-i.md#finishcommonevent-1). After the abort,the common event is not sent to the next subscriber. This API uses an asynchronous callback to return the result.

**Since:** 7

<!--Device-CommonEventSubscriber-abortCommonEvent(callback: AsyncCallback<void>): void--><!--Device-CommonEventSubscriber-abortCommonEvent(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

## abortCommonEvent

```TypeScript
abortCommonEvent(): Promise<void>
```

Aborts this ordered common event. This API is used with [finishCommonEvent](arkts-basicservices-commoneventsubscriber-commoneventsubscriber-i.md#finishcommonevent-1). After the abort,the common event is not sent to the next subscriber. This API uses a promise to return the result.

**Since:** 7

<!--Device-CommonEventSubscriber-abortCommonEvent(): Promise<void>--><!--Device-CommonEventSubscriber-abortCommonEvent(): Promise<void>-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

## abortCommonEventSync

```TypeScript
abortCommonEventSync(): void
```

Aborts this ordered common event synchronously. This API is used with [finishCommonEvent](arkts-basicservices-commoneventsubscriber-commoneventsubscriber-i.md#finishcommonevent-1). After the abort,the common event is not sent to the next subscriber.

**Since:** 10

<!--Device-CommonEventSubscriber-abortCommonEventSync(): void--><!--Device-CommonEventSubscriber-abortCommonEventSync(): void-End-->

**System capability:** SystemCapability.Notification.CommonEvent

## clearAbortCommonEvent

```TypeScript
clearAbortCommonEvent(callback: AsyncCallback<void>): void
```

Clears the abort state of an ordered common event. Use this API together with [finishCommonEvent](arkts-basicservices-commoneventsubscriber-commoneventsubscriber-i.md#finishcommonevent-1), and the common event can be passed to the next subscriber. This API uses an asynchronous callback to return the result.

**Since:** 7

<!--Device-CommonEventSubscriber-clearAbortCommonEvent(callback: AsyncCallback<void>): void--><!--Device-CommonEventSubscriber-clearAbortCommonEvent(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

## clearAbortCommonEvent

```TypeScript
clearAbortCommonEvent(): Promise<void>
```

Clears the abort state of this ordered common event. Use this API together with [finishCommonEvent](arkts-basicservices-commoneventsubscriber-commoneventsubscriber-i.md#finishcommonevent-1), and the common event can be passed to the next subscriber. This API uses a promise to return the result.

**Since:** 7

<!--Device-CommonEventSubscriber-clearAbortCommonEvent(): Promise<void>--><!--Device-CommonEventSubscriber-clearAbortCommonEvent(): Promise<void>-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

## clearAbortCommonEventSync

```TypeScript
clearAbortCommonEventSync(): void
```

Clears the abort state of this ordered common event. Use this API together with [finishCommonEvent](arkts-basicservices-commoneventsubscriber-commoneventsubscriber-i.md#finishcommonevent-1), and the common event can be passed to the next subscriber.

**Since:** 10

<!--Device-CommonEventSubscriber-clearAbortCommonEventSync(): void--><!--Device-CommonEventSubscriber-clearAbortCommonEventSync(): void-End-->

**System capability:** SystemCapability.Notification.CommonEvent

## finishCommonEvent

```TypeScript
finishCommonEvent(callback: AsyncCallback<void>): void
```

Finishes this ordered common event. This API uses an asynchronous callback to return the result.

**Since:** 9

<!--Device-CommonEventSubscriber-finishCommonEvent(callback: AsyncCallback<void>): void--><!--Device-CommonEventSubscriber-finishCommonEvent(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

## finishCommonEvent

```TypeScript
finishCommonEvent(): Promise<void>
```

Finishes this ordered common event. This API uses a promise to return the result.

**Since:** 9

<!--Device-CommonEventSubscriber-finishCommonEvent(): Promise<void>--><!--Device-CommonEventSubscriber-finishCommonEvent(): Promise<void>-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

## getAbortCommonEvent

```TypeScript
getAbortCommonEvent(callback: AsyncCallback<boolean>): void
```

Checks whether this ordered common event should be aborted. This API uses an asynchronous callback to return the result.

**Since:** 7

<!--Device-CommonEventSubscriber-getAbortCommonEvent(callback: AsyncCallback<boolean>): void--><!--Device-CommonEventSubscriber-getAbortCommonEvent(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<boolean> | Yes | Callback used to return the result. Returns **true** if the ordered common event is in the abort state; returns **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

## getAbortCommonEvent

```TypeScript
getAbortCommonEvent(): Promise<boolean>
```

Checks whether this ordered common event should be aborted. This API uses a promise to return the result.

**Since:** 7

<!--Device-CommonEventSubscriber-getAbortCommonEvent(): Promise<boolean>--><!--Device-CommonEventSubscriber-getAbortCommonEvent(): Promise<boolean>-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | Promise used to return the result. Returns **true** if the ordered common event is in the abort state; returns **false** otherwise. |

## getAbortCommonEventSync

```TypeScript
getAbortCommonEventSync(): boolean
```

Checks whether this ordered common event should be aborted.

**Since:** 10

<!--Device-CommonEventSubscriber-getAbortCommonEventSync(): boolean--><!--Device-CommonEventSubscriber-getAbortCommonEventSync(): boolean-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the ordered common event is in the abort state; returns **false** otherwise. |

## getCode

```TypeScript
getCode(callback: AsyncCallback<number>): void
```

Obtains the result code (number type) of an ordered common event. This API uses an asynchronous callback to return the result.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventSubscriber-getCode(callback: AsyncCallback<int>): void--><!--Device-CommonEventSubscriber-getCode(callback: AsyncCallback<int>): void-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<number> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

## getCode

```TypeScript
getCode(): Promise<number>
```

Obtains the result code (number type) of an ordered common event. This API uses a promise to return the result.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventSubscriber-getCode(): Promise<int>--><!--Device-CommonEventSubscriber-getCode(): Promise<int>-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number> | Promise used to return the result. |

## getCodeSync

```TypeScript
getCodeSync(): number
```

Obtains the result code (number type) of an ordered common event.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventSubscriber-getCodeSync(): int--><!--Device-CommonEventSubscriber-getCodeSync(): int-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| number | Result code of an ordered common event. |

## getData

```TypeScript
getData(callback: AsyncCallback<string>): void
```

Obtains the result data (string type) of an ordered common event. This API uses an asynchronous callback to return the result.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventSubscriber-getData(callback: AsyncCallback<string>): void--><!--Device-CommonEventSubscriber-getData(callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<string> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

## getData

```TypeScript
getData(): Promise<string>
```

Obtains the result data (string type) of an ordered common event. This API uses a promise to return the result.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventSubscriber-getData(): Promise<string>--><!--Device-CommonEventSubscriber-getData(): Promise<string>-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | Promise used to return the result. |

## getDataSync

```TypeScript
getDataSync(): string
```

Obtains the result data (string type) of an ordered common event.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventSubscriber-getDataSync(): string--><!--Device-CommonEventSubscriber-getDataSync(): string-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| string | Result data of an ordered common event. |

## getSubscribeInfo

```TypeScript
getSubscribeInfo(callback: AsyncCallback<CommonEventSubscribeInfo>): void
```

Obtains the subscriber information. This API uses an asynchronous callback to return the result.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventSubscriber-getSubscribeInfo(callback: AsyncCallback<CommonEventSubscribeInfo>): void--><!--Device-CommonEventSubscriber-getSubscribeInfo(callback: AsyncCallback<CommonEventSubscribeInfo>): void-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<CommonEventSubscribeInfo> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

## getSubscribeInfo

```TypeScript
getSubscribeInfo(): Promise<CommonEventSubscribeInfo>
```

Obtains the subscriber information. This API uses a promise to return the result.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventSubscriber-getSubscribeInfo(): Promise<CommonEventSubscribeInfo>--><!--Device-CommonEventSubscriber-getSubscribeInfo(): Promise<CommonEventSubscribeInfo>-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<CommonEventSubscribeInfo> | Promise used to return the result. |

## getSubscribeInfoSync

```TypeScript
getSubscribeInfoSync(): CommonEventSubscribeInfo
```

Obtains the subscriber information.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventSubscriber-getSubscribeInfoSync(): CommonEventSubscribeInfo--><!--Device-CommonEventSubscriber-getSubscribeInfoSync(): CommonEventSubscribeInfo-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| [CommonEventSubscribeInfo](arkts-basicservices-commoneventmanager-commoneventsubscribeinfo-t.md) | Subscriber information. |

## isOrderedCommonEvent

```TypeScript
isOrderedCommonEvent(callback: AsyncCallback<boolean>): void
```

Checks whether the current common event is an ordered common event. This API uses an asynchronous callback to return the result.

**Since:** 7

<!--Device-CommonEventSubscriber-isOrderedCommonEvent(callback: AsyncCallback<boolean>): void--><!--Device-CommonEventSubscriber-isOrderedCommonEvent(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<boolean> | Yes | Callback used to return the result. Returns **true** if the common event is an ordered one; returns **false** if the common event is an unordered one. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

## isOrderedCommonEvent

```TypeScript
isOrderedCommonEvent(): Promise<boolean>
```

Checks whether the current common event is an ordered common event. This API uses a promise to return the result.

**Since:** 7

<!--Device-CommonEventSubscriber-isOrderedCommonEvent(): Promise<boolean>--><!--Device-CommonEventSubscriber-isOrderedCommonEvent(): Promise<boolean>-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | Promise used to return the result. Returns **true** if the common event is an ordered one; returns **false** if the common event is an unordered one. |

## isOrderedCommonEventSync

```TypeScript
isOrderedCommonEventSync(): boolean
```

Checks whether the current common event is an ordered common event.

**Since:** 10

<!--Device-CommonEventSubscriber-isOrderedCommonEventSync(): boolean--><!--Device-CommonEventSubscriber-isOrderedCommonEventSync(): boolean-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the common event is an ordered one; returns **false** if the common event is an unordered one. |

## isStickyCommonEvent

```TypeScript
isStickyCommonEvent(callback: AsyncCallback<boolean>): void
```

Checks whether a common event is a sticky one. This API uses an asynchronous callback to return the result.

**Since:** 7

<!--Device-CommonEventSubscriber-isStickyCommonEvent(callback: AsyncCallback<boolean>): void--><!--Device-CommonEventSubscriber-isStickyCommonEvent(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<boolean> | Yes | Callback used to return the result. Returns **true** if the common event is a sticky one; returns **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

## isStickyCommonEvent

```TypeScript
isStickyCommonEvent(): Promise<boolean>
```

Checks whether a common event is a sticky one. This API uses a promise to return the result.

**Since:** 7

<!--Device-CommonEventSubscriber-isStickyCommonEvent(): Promise<boolean>--><!--Device-CommonEventSubscriber-isStickyCommonEvent(): Promise<boolean>-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | Promise used to return the result. Returns **true** if the common event is a sticky one; returns **false** otherwise. |

## isStickyCommonEventSync

```TypeScript
isStickyCommonEventSync(): boolean
```

Checks whether a common event is a sticky one.

**Since:** 10

<!--Device-CommonEventSubscriber-isStickyCommonEventSync(): boolean--><!--Device-CommonEventSubscriber-isStickyCommonEventSync(): boolean-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the common event is a sticky one; returns **false** otherwise. |

## setCode

```TypeScript
setCode(code: number, callback: AsyncCallback<void>): void
```

Sets the result code (number type) of an ordered common event. This API uses an asynchronous callback to return the result.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventSubscriber-setCode(code: int, callback: AsyncCallback<void>): void--><!--Device-CommonEventSubscriber-setCode(code: int, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | number | Yes | Result code of an ordered common event. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

## setCode

```TypeScript
setCode(code: number): Promise<void>
```

Sets the result code (number type) of an ordered common event. This API uses a promise to return the result.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventSubscriber-setCode(code: int): Promise<void>--><!--Device-CommonEventSubscriber-setCode(code: int): Promise<void>-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | number | Yes | Result code of an ordered common event. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

## setCodeAndData

```TypeScript
setCodeAndData(code: number, data: string, callback: AsyncCallback<void>): void
```

Sets the result code and data of an ordered common event. This API uses an asynchronous callback to return the result.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventSubscriber-setCodeAndData(code: int, data: string, callback: AsyncCallback<void>): void--><!--Device-CommonEventSubscriber-setCodeAndData(code: int, data: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | number | Yes | Result code of an ordered common event. |
| data | string | Yes | Result data of an ordered common event. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

## setCodeAndData

```TypeScript
setCodeAndData(code: number, data: string): Promise<void>
```

Sets the result code and data of an ordered common event. This API uses a promise to return the result.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventSubscriber-setCodeAndData(code: int, data: string): Promise<void>--><!--Device-CommonEventSubscriber-setCodeAndData(code: int, data: string): Promise<void>-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | number | Yes | Result code of an ordered common event. |
| data | string | Yes | Result data of an ordered common event. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

## setCodeAndDataSync

```TypeScript
setCodeAndDataSync(code: number, data: string): void
```

Sets the result code and data of an ordered common event.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventSubscriber-setCodeAndDataSync(code: int, data: string): void--><!--Device-CommonEventSubscriber-setCodeAndDataSync(code: int, data: string): void-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | number | Yes | Result code of an ordered common event. |
| data | string | Yes | Result data of an ordered common event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

## setCodeSync

```TypeScript
setCodeSync(code: number): void
```

Sets the result code (number type) of an ordered common event.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventSubscriber-setCodeSync(code: int): void--><!--Device-CommonEventSubscriber-setCodeSync(code: int): void-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | number | Yes | Result code of an ordered common event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

## setData

```TypeScript
setData(data: string, callback: AsyncCallback<void>): void
```

Sets the result data (string type) of an ordered common event. This API uses an asynchronous callback to return the result.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventSubscriber-setData(data: string, callback: AsyncCallback<void>): void--><!--Device-CommonEventSubscriber-setData(data: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | string | Yes | Result data of an ordered common event. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

## setData

```TypeScript
setData(data: string): Promise<void>
```

Sets the result data (string type) of an ordered common event. This API uses a promise to return the result.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventSubscriber-setData(data: string): Promise<void>--><!--Device-CommonEventSubscriber-setData(data: string): Promise<void>-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | string | Yes | Result data of an ordered common event. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

## setDataSync

```TypeScript
setDataSync(data: string): void
```

Sets the result data (string type) of an ordered common event.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventSubscriber-setDataSync(data: string): void--><!--Device-CommonEventSubscriber-setDataSync(data: string): void-End-->

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | string | Yes | Result data of an ordered common event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

