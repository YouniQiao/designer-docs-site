# @ohos.data.uniformTypeDescriptor

The **uniformTypeDescriptor** module abstracts and defines uniform data types.

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## 导入模块

```TypeScript
import { uniformTypeDescriptor } from '@kit.ArkData';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [getTypeDescriptor](arkts-uniformtypedescriptor-gettypedescriptor-f.md#getTypeDescriptor-1) | Obtains the **TypeDescriptor** object based on the uniform data type ID. |
| [getTypeDescriptor](arkts-uniformtypedescriptor-gettypedescriptor-f.md#getTypeDescriptor-2) | Queries and returns the uniform type descriptor by the given uniform data type ID. |
| [getUniformDataTypeByFilenameExtension](arkts-uniformtypedescriptor-getuniformdatatypebyfilenameextension-f.md#getUniformDataTypeByFilenameExtension-1) | Obtains the uniform data type ID based on the given file name extension and data type. If there are multiple uniform data type IDs matching the conditions, the first one is returned. |
| [getUniformDataTypeByMIMEType](arkts-uniformtypedescriptor-getuniformdatatypebymimetype-f.md#getUniformDataTypeByMIMEType-1) | Obtains the uniform data type ID based on the given MIME type and data type. If there are multiple uniform data type IDs matching the conditions, the first one is returned. |
| [getUniformDataTypesByFilenameExtension](arkts-uniformtypedescriptor-getuniformdatatypesbyfilenameextension-f.md#getUniformDataTypesByFilenameExtension-1) | Obtains the uniform data type IDs based on the given file name extension and data type. |
| [getUniformDataTypesByMIMEType](arkts-uniformtypedescriptor-getuniformdatatypesbymimetype-f.md#getUniformDataTypesByMIMEType-1) | Obtains the uniform data type IDs based on the given MIME type and data type. |
| <!--DelRow-->[registerTypeDescriptors](arkts-uniformtypedescriptor-registertypedescriptors-f-sys.md#registerTypeDescriptors-1) | Register type descriptors into the system. |
| <!--DelRow-->[unregisterTypeDescriptors](arkts-uniformtypedescriptor-unregistertypedescriptors-f-sys.md#unregisterTypeDescriptors-1) | Unregister one or more type descriptors from the system by the given type IDs. |

### 类

| 名称 | 描述 |
| --- | --- |
| [TypeDescriptor](arkts-uniformtypedescriptor-typedescriptor-c.md) | Represents a class for defining a uniform data type. It provides properties and methods for describing a uniform data type and its relationship with other uniform data types. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [UniformDataType](arkts-uniformtypedescriptor-uniformdatatype-e.md) | Enumerates the uniform data types. Some data types are related. For example, the JPEG type belongs to the IMAGE type. For more preset data types, see [Preset UTD List]. The following table lists the common uniform data types. |

