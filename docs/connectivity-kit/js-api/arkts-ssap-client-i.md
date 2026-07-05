# Client

管理SSAP客户端。在调用ssap客户端方法之前，必须使用{@link createClient}创建ssap客户端实例。

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NearLink.Base

## callMethod

```TypeScript
callMethod(method: Method): Promise<Method>
```

调用服务端的方法。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| method | Method | Yes | 指示要调用的方法 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Method> | Promise用于返回方法结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 36100003 | NearLink disabled. |
| 36100043 | Invalid UUID. |
| 36100044 | NearLink standard UUID not allowed. |
| 36100099 | Operation failed. |

## close

```TypeScript
close(): void
```

关闭客户端。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

## connect

```TypeScript
connect(): Promise<void>
```

连接服务端。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 返回promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

## disconnect

```TypeScript
disconnect(): Promise<void>
```

断开或停止与服务端的连接。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 返回promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

## getServices

```TypeScript
getServices(): Promise<Service[]>
```

开始发现服务端的所有服务。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Service[]> | Returns the service list of the server. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

## offConnectionStateChange

```TypeScript
offConnectionStateChange(callback?: Callback<ConnectionChangeState>): void
```

取消订阅客户端连接状态更改事件。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ConnectionChangeState> | No |  |

## offEventNotify

```TypeScript
offEventNotify(callback?: Callback<Event>): void
```

取消订阅事件通知。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Event> | No |  |

## offMtuChange

```TypeScript
offMtuChange(callback?: Callback<int>): void
```

取消订阅MTU更改事件。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;int> | No |  |

## offPropertyChange

```TypeScript
offPropertyChange(callback?: Callback<Property>): void
```

取消订阅属性值更改事件。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Property> | No |  |

## onConnectionStateChange

```TypeScript
onConnectionStateChange(callback: Callback<ConnectionChangeState>): void
```

订阅客户端连接状态更改事件。 只有授予了ohos.permission.NEARLINK_ACCESS权限的应用程序才能访问此事件。 如果应用被赋予了ohos.permission.GET_NEARLINK_PEER_MAC权限。 回调返回真实设备地址，否则返回随机设备地址。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ConnectionChangeState> | Yes | 用于监听连接状态改变事件的回调。 |

## onEventNotify

```TypeScript
onEventNotify(callback: Callback<Event>): void
```

订阅事件通知。 只有授予了ohos.permission.NEARLINK_ACCESS权限的系统应用程序才能访问此事件。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Event> | Yes | 用于监听事件通知事件的回调。 |

## onMtuChange

```TypeScript
onMtuChange(callback: Callback<int>): void
```

订阅MTU变化事件。 只有授予了ohos.permission.NEARLINK_ACCESS权限的应用程序才能访问此事件。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;int> | Yes | 用于监听mtu变化事件的回调。 |

## onPropertyChange

```TypeScript
onPropertyChange(callback: Callback<Property>): void
```

订阅属性值变更事件。 只有授予了ohos.permission.NEARLINK_ACCESS权限的应用程序才能访问此事件。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Property> | Yes | 用于监听属性值更改事件的回调。 |

## readDescriptor

```TypeScript
readDescriptor(descriptor: PropertyDescriptor): Promise<PropertyDescriptor>
```

读取服务器的描述符。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| descriptor | PropertyDescriptor | Yes | 指示要读取的描述符 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PropertyDescriptor> | Promise用于返回描述符值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 36100003 | NearLink disabled. |
| 36100043 | Invalid UUID in descriptor. |
| 36100044 | NearLink standard UUID not allowed. |
| 36100099 | Operation failed. |

## readProperty

```TypeScript
readProperty(property: Property): Promise<Property>
```

读取服务端的属性。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| property | Property | Yes | 指示要读取的属性 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Property> | 返回属性值Promise。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100043 | Invalid UUID in property. |
| 36100044 | NearLink standard UUID not allowed. |
| 36100099 | Operation failed. |

## requestMtuSize

```TypeScript
requestMtuSize(mtu: int): Promise<void>
```

与服务端协商MTU大小。 协商结果需要通过订阅MTU事件获取。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mtu | int | Yes | 最大传输单元。  单位为：字节。取值限定为整数。取值约束：建议范围[22,1024]。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 返回promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

## setPropertyIndication

```TypeScript
setPropertyIndication(property: Property, enable: boolean): Promise<void>
```

启用或禁用属性值变更指示。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| property | Property | Yes | 要指示的属性。 |
| enable | boolean | Yes | 指定是否启用属性的指示 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 返回promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 36100003 | NearLink disabled. |
| 36100030 | The connection is not established. |
| 36100043 | Invalid UUID in property. |
| 36100044 | NearLink standard UUID not allowed. |
| 36100099 | Operation failed. |

## setPropertyNotification

```TypeScript
setPropertyNotification(property: Property, enable: boolean): Promise<void>
```

启用或禁用属性值变更通知。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| property | Property | Yes | 要通知的属性 |
| enable | boolean | Yes | 指定是否启用属性的通知 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 返回promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100043 | Invalid UUID in property. |
| 36100044 | NearLink standard UUID not allowed. |
| 36100099 | Operation failed. |

## writeDescriptor

```TypeScript
writeDescriptor(descriptor: PropertyDescriptor): Promise<void>
```

写入服务端的描述符。 此方法不支持写入客户端属性配置描述符。要写入客户端属性配置描述符，请改为调用[setPropertyNotification](arkts-ssap-client-i.md#setPropertyNotification)或[setPropertyIndication](arkts-ssap-client-i.md#setPropertyIndication)。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| descriptor | PropertyDescriptor | Yes | 指示要写入的描述符。  描述符类型不应为CLIENT_PROPERTY_CONFIG。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise用于返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 36100003 | NearLink disabled. |
| 36100043 | Invalid UUID in descriptor. |
| 36100044 | NearLink standard UUID not allowed. |
| 36100099 | Operation failed. |

## writeProperty

```TypeScript
writeProperty(property: Property, writeType: PropertyWriteType): Promise<void>
```

写入服务端的属性。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| property | Property | Yes | 指示要写入的属性 |
| writeType | PropertyWriteType | Yes | 写类型 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise用于返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100043 | Invalid UUID in property. |
| 36100044 | NearLink standard UUID not allowed. |
| 36100099 | Operation failed. |

