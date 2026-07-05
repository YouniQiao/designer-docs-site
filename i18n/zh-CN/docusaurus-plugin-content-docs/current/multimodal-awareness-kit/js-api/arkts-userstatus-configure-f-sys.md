# configure

## configure

```TypeScript
function configure(featureId: UserStatusFeature, detail: string): int
```

Configures feature parameters.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MultimodalAwareness.UserStatus

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| featureId | UserStatusFeature | 是 | Feature to configure. |
| detail | string | 是 | Detailed feature parameters in JSON format. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Returns 0 if the operation succeeds; otherwise, returns a non-zero value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission check failed. A non-system application uses the system API. |
| 33900001 | Service exception. Possible causes:  1. Invalid parameter.  2. Node-API invocation exception, such as invalid Node-API status. |

