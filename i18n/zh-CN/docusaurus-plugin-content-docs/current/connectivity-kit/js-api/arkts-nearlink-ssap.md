# @ohos.nearlink.ssap

提供操作或管理星闪服务的方法。

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Communication.NearLink.Base

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [createClient](arkts-ssap-createclient-f.md#createClient-1) | 创建SSAP客户端实例。 |
| [createServer](arkts-ssap-createserver-f.md#createServer-1) | 创建SSAP服务端实例。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [Client](arkts-ssap-client-i.md) | 管理SSAP客户端。在调用ssap客户端方法之前，必须使用{@link createClient}创建ssap客户端实例。 |
| [ConnectionChangeState](arkts-ssap-connectionchangestate-i.md) | 描述SSAP连接状态。 |
| <!--DelRow-->[Event](arkts-ssap-event-i-sys.md) | SSAP事件。 |
| <!--DelRow-->[Method](arkts-ssap-method-i-sys.md) | SSAP方法。 |
| [Property](arkts-ssap-property-i.md) | SSAP属性。 |
| [PropertyDescriptor](arkts-ssap-propertydescriptor-i.md) | 属性的SSAP描述符。 |
| [PropertyReadRequest](arkts-ssap-propertyreadrequest-i.md) | SSAP客户端属性读请求参数说明。 |
| [PropertyWriteRequest](arkts-ssap-propertywriterequest-i.md) | SSAP客户端属性写请求参数说明。 |
| [Server](arkts-ssap-server-i.md) | 管理SSAP服务端。在调用SSAP服务端方法之前，必须使用{@link createServer}创建SSAP服务端实例。 |
| [ServerResponse](arkts-ssap-serverresponse-i.md) | 服务端对指定读或写请求的响应的参数。 |
| [Service](arkts-ssap-service-i.md) | SSAP服务。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [ConnectionState](arkts-ssap-connectionstate-t.md) | 连接状态。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [Operation](arkts-ssap-operation-e.md) | 属性操作指示的枚举。 |
| [PropertyDescriptorType](arkts-ssap-propertydescriptortype-e.md) | 属性描述符类型的枚举。 |
| [PropertyWriteType](arkts-ssap-propertywritetype-e.md) | 属性写入类型的枚举。 |

