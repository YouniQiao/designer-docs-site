# ProxyData

Defines a struct for shared configurations.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

## 导入模块

```TypeScript
import { dataShare } from '@kit.ArkData';
```

## trustProviders

```TypeScript
trustProviders?: string[]
```

List of applications that can add values to the shared configuration of multi-value type. The array can contain a maximum of 256 elements. Excess elements are invalid. Each element in the array is the [appIdentifier](docroot://quick-start/common-problem-of-application.md#what-is-appidentifier) of an application. The maximum length of an **appIdentifier** is 128 bytes. If the length exceeds 128 bytes, the **appIdentifier** does not take effect. If this parameter is not set when the shared configuration is published for the first time, the list is empty by default. If this parameter is not set when the shared configuration is updated, the list will not be updated. An empty list indicates that only the publisher can add values to the shared configuration. The array supports the special string "all" (case-sensitive), which indicates that all applications are allowed to add values to the shared configuration.

**类型：** string[]

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

## isMultiValues

```TypeScript
isMultiValues?: boolean
```

Indicates whether the shared configuration is multi-value type. The default value is false, indicating that the shared configuration is not multi-value type. If the value is true, it indicates that the data being published is multi-value type, and the [value](arkts-datashare-proxydata-i.md#value) parameter will be ignored. Default value: false.

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

## values

```TypeScript
values?: Record<int, ValueType>
```

Values of the multi-value type. The first parameter in the **Record** is the key specified by the user, which must be unique. The second parameter is the value corresponding to the key. A maximum of 10 values can be added to a single URI for an application. Each value can contain a maximum of 4096 bytes. At the same time, the total length of all values is limited by the [maxValueLength](arkts-datashare-dataproxyconfig-i.md#maxValueLength) parameter value. This parameter is valid only when [isMultiValues](arkts-datashare-proxydata-i.md#isMultiValues) is set to true.

**类型：** Record<int, ValueType>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

## value

```TypeScript
value?: ValueType
```

Value of a shared configuration. If not specified, the value is an empty string. The value is a string with a maximum of 4,096 bytes. If this parameter is not set when the shared configuration is published for the first time, the value will be an empty string by default. If this parameter is not set when a shared configuration is updated, the value of the shared configuration will not be updated. In versions earlier than API version 26.0.0, the maximum length of a string is 4096 bytes. In API version 26.0.0 and later versions, the maximum length of a string is 4096 bytes by default, and can be extended to 102,400 bytes by setting the maxValueLength parameter in [DataProxyConfig]dataShare.DataProxyConfig.

**类型：** ValueType

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

## uri

```TypeScript
uri: string
```

Unique ID of a shared configuration, fixed at the format of **"datashareproxy://{*bundleName*}/{*path*}"**, in which **bundleName** indicates the bundle name of the publisher application, and **path** can be set to any value but must be unique in the same application. The value is a string with a maximum of 256 bytes.

**类型：** string

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

## allowList

```TypeScript
allowList?: string[]
```

List of applications that can subscribe to and read shared configurations. If this parameter is left empty, the value is an empty string array. The array can contain a maximum of 256 elements. Excess elements are invalid. Each element in the array is the [appIdentifier](docroot://quick-start/common-problem-of-application.md#what-is-appidentifier) of an application. The maximum length of an **appIdentifier** is 128 bytes. If the length exceeds 128 bytes, the **appIdentifier** does not take effect. If this parameter is not set when the shared configuration is published for the first time, the allowlist is empty by default. If this parameter is not set when the shared configuration is updated, the allowlist will not be updated. An empty allowlist indicates that only the publisher can access the shared configuration.

**类型：** string[]

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

