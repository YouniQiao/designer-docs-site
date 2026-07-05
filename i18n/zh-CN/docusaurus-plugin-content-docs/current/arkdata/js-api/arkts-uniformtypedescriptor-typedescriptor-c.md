# TypeDescriptor

Represents a class for defining a uniform data type. It provides properties and methods for describing a uniform data type and its relationship with other uniform data types.

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## 导入模块

```TypeScript
import { uniformTypeDescriptor } from '@kit.ArkData';
```

## belongsTo

```TypeScript
belongsTo(type: string): boolean
```

Checks whether this data type belongs to the specified uniform data type.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | Uniform data type specified, which is a value of  [UniformDataType]uniformTypeDescriptor.UniformDataType. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the data type belongs to or is the same as the specified uniform data  type; returns false if they are not related. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types;  3. Parameter verification failed. |

**示例：**

```TypeScript
import { uniformTypeDescriptor } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // 获取TypeDescriptor对象
  let typeObj: uniformTypeDescriptor.TypeDescriptor = uniformTypeDescriptor.getTypeDescriptor('general.type-script');
  // 判断是否归属指定类型
  let ret = typeObj.belongsTo('general.source-code');
  if (ret) {
    console.info('type general.type-script belongs to type general.source-code');
  }
} catch (e) {
  let error: BusinessError = e as BusinessError;
  console.error(`belongsTo throws an exception. code is ${error.code}, message is ${error.message} `);
}

```

## equals

```TypeScript
equals(typeDescriptor: TypeDescriptor): boolean
```

Checks whether this data type is the same as the specified uniform data type. That is, compares **typeId**s of two [TypeDescriptor]uniformTypeDescriptor.TypeDescriptor objects.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| typeDescriptor | TypeDescriptor | 是 | Uniform data type to compare. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the type IDs are the same; returns false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types;  3. Parameter verification failed. |

**示例：**

```TypeScript
import { uniformTypeDescriptor } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // 获取两个TypeDescriptor对象进行比较
  let typeA: uniformTypeDescriptor.TypeDescriptor = uniformTypeDescriptor.getTypeDescriptor('general.type-script');
  let typeB: uniformTypeDescriptor.TypeDescriptor = uniformTypeDescriptor.getTypeDescriptor('general.python-script');
  if (!typeA.equals(typeB)) {
    console.info('typeA is not equal to typeB');
  }
} catch (e) {
  let error: BusinessError = e as BusinessError;
  console.error(`throws an exception. code is ${error.code}, message is ${error.message} `);
}

```

## isHigherLevelType

```TypeScript
isHigherLevelType(type: string): boolean
```

Checks whether this data type is a higher-level type of the specified uniform data type. For example, **SOURCE_CODE** is a higher-level type of **TYPE_SCRIPT**, and **TEXT** is a higher-level type of **SOURCE_CODE** and **TYPE_SCRIPT**.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | Uniform data type specified, which is a value of  [UniformDataType]uniformTypeDescriptor.UniformDataType. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the data type is a higher-level type of the specified uniform data type;  returns false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types;  3. Parameter verification failed. |

**示例：**

```TypeScript
import { uniformTypeDescriptor } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // 获取TypeDescriptor对象
  let typeObj: uniformTypeDescriptor.TypeDescriptor = uniformTypeDescriptor.getTypeDescriptor('general.source-code');
  let ret = typeObj.isHigherLevelType('general.type-script');
  if (ret) {
    console.info('type general.source-code is higher level type of type general.type-script');
  }
} catch (e) {
  let error: BusinessError = e as BusinessError;
  console.error(`isHigherLevelType throws an exception. code is ${error.code}, message is ${error.message} `);
}

```

## isLowerLevelType

```TypeScript
isLowerLevelType(type: string): boolean
```

Checks whether this data type is a lower-level type of the specified uniform data type. For example, **TYPE_SCRIPT** is a lower-level type of **SOURCE_CODE**, and **TYPE_SCRIPT** and **SOURCE_CODE** are lower-level types of **TEXT**.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | Uniform data type specified, which is a value of  [UniformDataType]uniformTypeDescriptor.UniformDataType. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the data type is a lower-level type of the specified uniform data type;  returns false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types;  3. Parameter verification failed. |

**示例：**

```TypeScript
import { uniformTypeDescriptor } from '@kit.ArkData';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // 获取TypeDescriptor对象
  let typeObj: uniformTypeDescriptor.TypeDescriptor = uniformTypeDescriptor.getTypeDescriptor('general.type-script');
  let ret = typeObj.isLowerLevelType('general.source-code');
  if (ret) {
    console.info('type general.type-script is lower level type of type general.source-code');
  }
} catch (e) {
  let error: BusinessError = e as BusinessError;
  console.error(`isLowerLevelType throws an exception. code is ${error.code}, message is ${error.message} `);
}

```

## mimeTypes

```TypeScript
get mimeTypes(): Array<string>
```

MIMETypes of the uniform data type.

**类型：** Array<string>

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set mimeTypes(value: Array<string>)
```

MIMETypes of the uniform data type.

**类型：** Array<string>

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## belongingToTypes

```TypeScript
get belongingToTypes(): Array<string>
```

Uniform data type IDs that the uniform data type belongs to.

**类型：** Array<string>

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set belongingToTypes(value: Array<string>)
```

Uniform data type IDs that the uniform data type belongs to.

**类型：** Array<string>

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## filenameExtensions

```TypeScript
get filenameExtensions(): Array<string>
```

File name extensions for the uniform data type.

**类型：** Array<string>

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set filenameExtensions(value: Array<string>)
```

File name extensions for the uniform data type.

**类型：** Array<string>

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## iconFile

```TypeScript
get iconFile(): string
```

Default icon file path for the uniform data type.

**类型：** string

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set iconFile(value: string)
```

Default icon file path for the uniform data type.

**类型：** string

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## description

```TypeScript
get description(): string
```

A textual description for the uniform data type.

**类型：** string

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set description(value: string)
```

A textual description for the uniform data type.

**类型：** string

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## typeId

```TypeScript
get typeId(): string
```

Type ID of the uniform data type, which corresponds to the enum string in the {@code UniformDataType}.

**类型：** string

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set typeId(value: string)
```

Type ID of the uniform data type, which corresponds to the enum string in the {@code UniformDataType}.

**类型：** string

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## referenceURL

```TypeScript
get referenceURL(): string
```

Reference URL for the uniform data type, which describes the detail information of the type.

**类型：** string

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set referenceURL(value: string)
```

Reference URL for the uniform data type, which describes the detail information of the type.

**类型：** string

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

