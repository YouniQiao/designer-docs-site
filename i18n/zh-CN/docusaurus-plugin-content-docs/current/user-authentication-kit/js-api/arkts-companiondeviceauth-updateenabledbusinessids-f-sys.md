# updateEnabledBusinessIds

## updateEnabledBusinessIds

```TypeScript
function updateEnabledBusinessIds(templateId: Uint8Array, enabledBusinessIds: int[]): Promise<void>
```

更新指定伴随设备模板支持的业务范围。用于修改已注册模板的启用业务ID列表，从而控制该模板可参与的业务场景。使用Promise异步回调。

**起始版本：** 23

**需要权限：** 

 ohos.permission.USE_USER_IDM

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| templateId | Uint8Array | 是 | 目标模板ID。要更新业务范围的模板的唯一标识，可通过  [getTemplateStatus]companionDeviceAuth.StatusMonitor.getTemplateStatus获取。 |
| enabledBusinessIds | int[] | 是 | 模板支持的业务ID集合。要启用的业务场景列表，如[DEFAULT]、[解锁锁屏业务ID]等。不同业务ID对应不同的认证场景，应用可根据业务需求配置。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 32600001 | The system service is not working properly. Please try again later. |
| 32600002 | The template is not found. |
| 32600003 | The business ID is invalid. |

