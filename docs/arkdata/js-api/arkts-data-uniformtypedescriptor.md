# @ohos.data.uniformTypeDescriptor

The **uniformTypeDescriptor** module abstracts and defines uniform data types.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## Modules to Import

```TypeScript
import { uniformTypeDescriptor } from '@ohos.data.uniformTypeDescriptor';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getTypeDescriptor](arkts-arkdata-gettypedescriptor-f.md#gettypedescriptor-1) | Obtains the **TypeDescriptor** object based on the uniform data type ID. |
| [getUniformDataTypeByFilenameExtension](arkts-arkdata-getuniformdatatypebyfilenameextension-f.md#getuniformdatatypebyfilenameextension-1) | Obtains the uniform data type ID based on the given file name extension and data type. If there are multiple uniform data type IDs matching the conditions, the first one is returned. |
| [getUniformDataTypeByMIMEType](arkts-arkdata-getuniformdatatypebymimetype-f.md#getuniformdatatypebymimetype-1) | Obtains the uniform data type ID based on the given MIME type and data type. If there are multiple uniform data type IDs matching the conditions, the first one is returned. |
| [getUniformDataTypesByFilenameExtension](arkts-arkdata-getuniformdatatypesbyfilenameextension-f.md#getuniformdatatypesbyfilenameextension-1) | Obtains the uniform data type IDs based on the given file name extension and data type. |
| [getUniformDataTypesByMIMEType](arkts-arkdata-getuniformdatatypesbymimetype-f.md#getuniformdatatypesbymimetype-1) | Obtains the uniform data type IDs based on the given MIME type and data type. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [registerTypeDescriptors](arkts-arkdata-registertypedescriptors-f-sys.md#registertypedescriptors-1) | Register type descriptors into the system. |
| [unregisterTypeDescriptors](arkts-arkdata-unregistertypedescriptors-f-sys.md#unregistertypedescriptors-1) | Unregister one or more type descriptors from the system by the given type IDs. |
<!--DelEnd-->

### Classes

| Name | Description |
| --- | --- |
| [TypeDescriptor](arkts-arkdata-typedescriptor-c.md) | Represents a class for defining a uniform data type. It provides properties and methods for describing a uniform data type and its relationship with other uniform data types. |

### Enums

| Name | Description |
| --- | --- |
| [UniformDataType](arkts-arkdata-uniformdatatype-e.md) | Enumerates the uniform data types. Some data types are related. For example, the JPEG type belongs to the IMAGE type. For more preset data types, see [Preset UTD List]. The following table lists the common uniform data types. |

