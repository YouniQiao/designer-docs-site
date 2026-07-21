# AccessibilityElement

Defines the **AccessibilityElement**. Before calling APIs of **AccessibilityElement**, you must call [AccessibilityExtensionContext.getFocusElement()](arkts-accessibility-accessibilityextensioncontext-c.md#getfocuselement-1)or [AccessibilityExtensionContext.getWindowRootElement()](arkts-accessibility-accessibilityextensioncontext-c.md#getwindowrootelement-1)to obtain an **AccessibilityElement** instance.

**Since:** 9

<!--Device-unnamed-export declare interface AccessibilityElement--><!--Device-unnamed-export declare interface AccessibilityElement-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

<a id="actionnames"></a>
## actionNames

```TypeScript
actionNames(callback: AsyncCallback<Array<string>>): void
```

Obtains the names of all actions supported by this element. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 12

<!--Device-AccessibilityElement-actionNames(callback: AsyncCallback<Array<string>>): void--><!--Device-AccessibilityElement-actionNames(callback: AsyncCallback<Array<string>>): void-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;string&gt;&gt; | Yes | Callback used to return the names of all actions supported by the element. |

<a id="actionnames-1"></a>
## actionNames

```TypeScript
actionNames(): Promise<Array<string>>
```

Obtains the names of all actions supported by this element. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 12

<!--Device-AccessibilityElement-actionNames(): Promise<Array<string>>--><!--Device-AccessibilityElement-actionNames(): Promise<Array<string>>-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string&gt;&gt; | Promise used to return the names of all actions supported by the element. |

<a id="attributenames"></a>
## attributeNames

```TypeScript
attributeNames<T extends keyof ElementAttributeValues>(callback: AsyncCallback<Array<T>>): void
```

Obtains all attribute names of this element. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 12

<!--Device-AccessibilityElement-attributeNames<T extends keyof ElementAttributeValues>(callback: AsyncCallback<Array<T>>): void--><!--Device-AccessibilityElement-attributeNames<T extends keyof ElementAttributeValues>(callback: AsyncCallback<Array<T>>): void-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;T&gt;&gt; | Yes | Callback used to return all attribute names of the element. |

<a id="attributenames-1"></a>
## attributeNames

```TypeScript
attributeNames<T extends keyof ElementAttributeValues>(): Promise<Array<T>>
```

Obtains all attribute names of this element. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 12

<!--Device-AccessibilityElement-attributeNames<T extends keyof ElementAttributeValues>(): Promise<Array<T>>--><!--Device-AccessibilityElement-attributeNames<T extends keyof ElementAttributeValues>(): Promise<Array<T>>-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;T&gt;&gt; | Promise used to return all attribute names of the element. |

<a id="attributevalue"></a>
## attributeValue

```TypeScript
attributeValue<T extends keyof ElementAttributeValues>(
    attributeName: T,
    callback: AsyncCallback<ElementAttributeValues[T]>
  ): void
```

Obtains the attribute value based on an attribute name. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 12

<!--Device-AccessibilityElement-attributeValue<T extends keyof ElementAttributeValues>(
    attributeName: T,
    callback: AsyncCallback<ElementAttributeValues[T]>
  ): void--><!--Device-AccessibilityElement-attributeValue<T extends keyof ElementAttributeValues>(
    attributeName: T,
    callback: AsyncCallback<ElementAttributeValues[T]>
  ): void-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| attributeName | T | Yes | Attribute name. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;ElementAttributeValues[T]&gt; | Yes | Callback used to return the attribute value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |
| [9300004](../errorcode-accessibility.md#9300004-property-not-found) | This property does not exist. |

<a id="attributevalue-1"></a>
## attributeValue

```TypeScript
attributeValue<T extends keyof ElementAttributeValues>(attributeName: T): Promise<ElementAttributeValues[T]>
```

Obtains the attribute value based on an attribute name. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 12

<!--Device-AccessibilityElement-attributeValue<T extends keyof ElementAttributeValues>(attributeName: T): Promise<ElementAttributeValues[T]>--><!--Device-AccessibilityElement-attributeValue<T extends keyof ElementAttributeValues>(attributeName: T): Promise<ElementAttributeValues[T]>-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| attributeName | T | Yes | Attribute name. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ElementAttributeValues[T]&gt; | Promise used to return the attribute value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |
| [9300004](../errorcode-accessibility.md#9300004-property-not-found) | This property does not exist. |

<a id="findelement"></a>
## findElement

```TypeScript
findElement(type: 'content', condition: string, callback: AsyncCallback<Array<AccessibilityElement>>): void
```

Finds an element based on the content type. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 12

<!--Device-AccessibilityElement-findElement(type: 'content', condition: string, callback: AsyncCallback<Array<AccessibilityElement>>): void--><!--Device-AccessibilityElement-findElement(type: 'content', condition: string, callback: AsyncCallback<Array<AccessibilityElement>>): void-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'content' | Yes | Type of element finding. The value is fixed at **'content'**. |
| condition | string | Yes | Search criteria. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;AccessibilityElement&gt;&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |

<a id="findelement-1"></a>
## findElement

```TypeScript
findElement(type: 'content', condition: string): Promise<Array<AccessibilityElement>>
```

Finds an element based on the content type. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 12

<!--Device-AccessibilityElement-findElement(type: 'content', condition: string): Promise<Array<AccessibilityElement>>--><!--Device-AccessibilityElement-findElement(type: 'content', condition: string): Promise<Array<AccessibilityElement>>-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'content' | Yes | Type of element finding. The value is fixed at **'content'**. |
| condition | string | Yes | Search criteria. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AccessibilityElement&gt;&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |

<a id="findelement-2"></a>
## findElement

```TypeScript
findElement(type: 'focusType', condition: FocusType, callback: AsyncCallback<AccessibilityElement>): void
```

Finds an element based on the focus type. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 12

<!--Device-AccessibilityElement-findElement(type: 'focusType', condition: FocusType, callback: AsyncCallback<AccessibilityElement>): void--><!--Device-AccessibilityElement-findElement(type: 'focusType', condition: FocusType, callback: AsyncCallback<AccessibilityElement>): void-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'focusType' | Yes | Type of element finding. The value is fixed at **'focusType'**. |
| condition | [FocusType](arkts-accessibility-focustype-t.md) | Yes | Focus type. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;AccessibilityElement&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |

<a id="findelement-3"></a>
## findElement

```TypeScript
findElement(type: 'focusType', condition: FocusType): Promise<AccessibilityElement>
```

Finds an element based on the focus type. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 12

<!--Device-AccessibilityElement-findElement(type: 'focusType', condition: FocusType): Promise<AccessibilityElement>--><!--Device-AccessibilityElement-findElement(type: 'focusType', condition: FocusType): Promise<AccessibilityElement>-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'focusType' | Yes | Type of element finding. The value is fixed at **'focusType'**. |
| condition | [FocusType](arkts-accessibility-focustype-t.md) | Yes | Focus type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AccessibilityElement&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |

<a id="findelement-4"></a>
## findElement

```TypeScript
findElement(type: 'focusDirection', condition: FocusDirection, callback: AsyncCallback<AccessibilityElement>): void
```

Finds an element based on the focus direction. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 12

<!--Device-AccessibilityElement-findElement(type: 'focusDirection', condition: FocusDirection, callback: AsyncCallback<AccessibilityElement>): void--><!--Device-AccessibilityElement-findElement(type: 'focusDirection', condition: FocusDirection, callback: AsyncCallback<AccessibilityElement>): void-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'focusDirection' | Yes | Type of element finding. The value is fixed at **'focusDirection'**. |
| condition | [FocusDirection](arkts-accessibility-focusdirection-t.md) | Yes | Direction of the next focus element. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;AccessibilityElement&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |

<a id="findelement-5"></a>
## findElement

```TypeScript
findElement(type: 'focusDirection', condition: FocusDirection): Promise<AccessibilityElement>
```

Finds an element based on the focus direction. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 12

<!--Device-AccessibilityElement-findElement(type: 'focusDirection', condition: FocusDirection): Promise<AccessibilityElement>--><!--Device-AccessibilityElement-findElement(type: 'focusDirection', condition: FocusDirection): Promise<AccessibilityElement>-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'focusDirection' | Yes | Type of element finding. The value is fixed at **'focusDirection'**. |
| condition | [FocusDirection](arkts-accessibility-focusdirection-t.md) | Yes | Focus direction. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AccessibilityElement&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |

<a id="performaction"></a>
## performAction

```TypeScript
performAction(actionName: string, parameters: object, callback: AsyncCallback<void>): void
```

Performs an action based on the specified action name. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 12

<!--Device-AccessibilityElement-performAction(actionName: string, parameters: object, callback: AsyncCallback<void>): void--><!--Device-AccessibilityElement-performAction(actionName: string, parameters: object, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| actionName | string | Yes | Action name. For details, see [Action](arkts-accessibility-accessibility-action-t.md). |
| parameters | object | Yes | Parameters required for performing the target action. Empty by default. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |
| [9300005](../errorcode-accessibility.md#9300005-action-not-supported) | This action is not supported. |

<a id="performaction-1"></a>
## performAction

```TypeScript
performAction(actionName: string, parameters?: object): Promise<void>
```

Performs an action based on the specified action name. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 12

<!--Device-AccessibilityElement-performAction(actionName: string, parameters?: object): Promise<void>--><!--Device-AccessibilityElement-performAction(actionName: string, parameters?: object): Promise<void>-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| actionName | string | Yes | Action name. For details, see [Action](arkts-accessibility-accessibility-action-t.md). |
| parameters | object | No | Parameters required for performing the target action. Empty by default. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |
| [9300005](../errorcode-accessibility.md#9300005-action-not-supported) | This action is not supported. |

<a id="performaction-2"></a>
## performAction

```TypeScript
performAction(actionName: string, callback: AsyncCallback<void>): void
```

Performs an action based on the specified action name. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 12

<!--Device-AccessibilityElement-performAction(actionName: string, callback: AsyncCallback<void>): void--><!--Device-AccessibilityElement-performAction(actionName: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| actionName | string | Yes | Action name. For details, see [Action](arkts-accessibility-accessibility-action-t.md). |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |
| [9300005](../errorcode-accessibility.md#9300005-action-not-supported) | This action is not supported. |

