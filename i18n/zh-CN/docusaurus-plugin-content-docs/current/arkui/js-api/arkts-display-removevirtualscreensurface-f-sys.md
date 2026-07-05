# removeVirtualScreenSurface

## removeVirtualScreenSurface

```TypeScript
function removeVirtualScreenSurface(screenId: long, surfaceId: string): Promise<void>
```

删除虚拟屏的surface

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| screenId | long | 是 | 虚拟屏幕的屏幕ID。 |
| surfaceId | string | 是 | surface的id。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 不返回任何值的Promise |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 801 | Capability not supported.function removeVirtualScreenSurface  can not work correctly due to limited device capabilities. |
| 1400001 | Invalid display or screen. |
| 1400003 | This display manager service works abnormally. |
| 1400004 | Parameter error. Possible cause: 1. Invalid parameter range. |

