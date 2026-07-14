# @ohos.nearlink.ssap

Provides methods to operate or manage service of NearLink.

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NearLink.Base

## Modules to Import

```TypeScript
import { ssap } from '@kit.ConnectivityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createClient](arkts-connectivity-createclient-f.md#createclient-1) | Creates a SSAP client instance. |
| [createServer](arkts-connectivity-createserver-f.md#createserver-1) | Creates a SSAP server instance. |

### Interfaces

| Name | Description |
| --- | --- |
| [Client](arkts-connectivity-client-i.md) | Manages SSAP client. Before calling a SSAP client method, you must use {@link createClient} to create a ssap client instance. |
| [ConnectionChangeState](arkts-connectivity-connectionchangestate-i.md) | Describes SSAP connection state. |
| [Property](arkts-connectivity-property-i.md) | Describes the SSAP property. |
| [PropertyDescriptor](arkts-connectivity-propertydescriptor-i.md) | Describes the SSAP descriptor for property. |
| [PropertyReadRequest](arkts-connectivity-propertyreadrequest-i.md) | Describes the parameters of the SSAP client's property read request. |
| [PropertyWriteRequest](arkts-connectivity-propertywriterequest-i.md) | Describes the parameters of the SSAP client's property write request. |
| [Server](arkts-connectivity-server-i.md) | Manages SSAP server. Before calling a SSAP server method, you must use {@link createServer} to create a SSAP server instance. |
| [ServerResponse](arkts-connectivity-serverresponse-i.md) | Describes the parameters of a response send by the server to a specified read or write request. |
| [Service](arkts-connectivity-service-i.md) | Describes the SSAP service. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [Client](arkts-connectivity-client-i-sys.md) | Manages SSAP client. Before calling a SSAP client method, you must use {@link createClient} to create a ssap client instance. |
| [Event](arkts-connectivity-event-i-sys.md) | Describes the SSAP event. |
| [Method](arkts-connectivity-method-i-sys.md) | Describes the SSAP method. |
| [Service](arkts-connectivity-service-i-sys.md) | Describes the SSAP service. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [Operation](arkts-connectivity-operation-e.md) | Enum of property operation indication. |
| [PropertyDescriptorType](arkts-connectivity-propertydescriptortype-e.md) | The enum of property descriptor type. |
| [PropertyWriteType](arkts-connectivity-propertywritetype-e.md) | The enum of property write type. |

### Types

| Name | Description |
| --- | --- |
| [ConnectionState](arkts-connectivity-connectionstate-t.md) | Indicates the connection state. |

