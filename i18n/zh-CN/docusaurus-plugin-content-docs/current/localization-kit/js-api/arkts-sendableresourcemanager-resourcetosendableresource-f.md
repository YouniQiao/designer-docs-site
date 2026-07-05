# resourceToSendableResource

## resourceToSendableResource

```TypeScript
export function resourceToSendableResource(resource: Resource): SendableResource
```

将Resource对象转换为SendableResource对象。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.ResourceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resource | Resource | 是 | Resource对象。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| SendableResource | 转换后的SendableResource对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | If the input parameter invalid. Possible causes: 1.Incorrect parameter types;  2.Parameter verification failed. |

