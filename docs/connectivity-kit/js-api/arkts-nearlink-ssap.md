# @ohos.nearlink.ssap

Provides methods to operate or manage service of NearLink.

**Since:** 26.0.0

<!--Device-unnamed-declare namespace ssap--><!--Device-unnamed-declare namespace ssap-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

## Modules to Import

```TypeScript
import { ssap } from '@kit.ConnectivityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createClient](arkts-connectivity-ssap-createclient-f.md#createclient-1) | Creates a SSAP client instance. |
| [createServer](arkts-connectivity-ssap-createserver-f.md#createserver-1) | Creates a SSAP server instance. |

### Interfaces

| Name | Description |
| --- | --- |
| [Client](arkts-connectivity-ssap-client-i.md) | Manages SSAP client. Before calling a SSAP client method,you must use {@link createClient} to create a ssap client instance. |
| [ConnectionChangeState](arkts-connectivity-ssap-connectionchangestate-i.md) | Describes SSAP connection state. |
| [Property](arkts-connectivity-ssap-property-i.md) | Describes the SSAP property. |
| [PropertyDescriptor](arkts-connectivity-ssap-propertydescriptor-i.md) | Describes the SSAP descriptor for property. |
| [PropertyReadRequest](arkts-connectivity-ssap-propertyreadrequest-i.md) | Describes the parameters of the SSAP client's property read request. |
| [PropertyWriteRequest](arkts-connectivity-ssap-propertywriterequest-i.md) | Describes the parameters of the SSAP client's property write request. |
| [Server](arkts-connectivity-ssap-server-i.md) | Manages SSAP server. Before calling a SSAP server method,you must use {@link createServer} to create a SSAP server instance. |
| [ServerResponse](arkts-connectivity-ssap-serverresponse-i.md) | Describes the parameters of a response send by the server to a specified read or write request. |
| [Service](arkts-connectivity-ssap-service-i.md) | Describes the SSAP service. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [Client](arkts-connectivity-ssap-client-i-sys.md) | Manages SSAP client. Before calling a SSAP client method,you must use {@link createClient} to create a ssap client instance. |
| [Event](arkts-connectivity-ssap-event-i-sys.md) | Describes the SSAP event. |
| [Method](arkts-connectivity-ssap-method-i-sys.md) | Describes the SSAP method. |
| [Service](arkts-connectivity-ssap-service-i-sys.md) | Describes the SSAP service. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [Operation](arkts-connectivity-ssap-operation-e.md) | Enum of property operation indication. |
| [PropertyDescriptorType](arkts-connectivity-ssap-propertydescriptortype-e.md) | The enum of property descriptor type. |
| [PropertyWriteType](arkts-connectivity-ssap-propertywritetype-e.md) | The enum of property write type. |

### Types

| Name | Description |
| --- | --- |
| [ConnectionState](arkts-connectivity-ssap-connectionstate-t.md) | Indicates the connection state. |

