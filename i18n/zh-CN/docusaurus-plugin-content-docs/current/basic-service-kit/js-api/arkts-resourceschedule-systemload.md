# @ohos.resourceschedule.systemload

系统根据当前温度、负载以及是否处于高负载场景等信息决策出系统负载融合档位，并在档位变化时通知已注册的应用。

**起始版本：** 12

**系统能力：** SystemCapability.ResourceSchedule.SystemLoad

## 汇总

### 函数

| 名称 | 说明 |
| --- | --- |
| [getLevel](arkts-basicservices-getlevel-f.md#getlevel-1) | 获取系统负载融合档位，使用promise异步回调。 |
| [off](arkts-basicservices-off-f.md#off-1) | 取消注册系统负载回调，使用callback异步回调。 |
| [on](arkts-basicservices-on-f.md#on-1) | 注册系统负载回调，感知系统负载融合档位变化，使用callback异步回调。 |

<!--Del-->
### 枚举（系统接口）

| 名称 | 说明 |
| --- | --- |
| [SystemLoadLevel](arkts-basicservices-systemloadlevel-e.md) | 系统负载融合档位。 |
<!--DelEnd-->

