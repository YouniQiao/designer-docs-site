# wantAgent

WantAgent模块提供了创建WantAgent实例、获取实例的用户ID、获取want信息、比较WantAgent实例和获取bundle名称等能力。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.app.ability.wantAgent/wantAgent

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [cancel](arkts-wantagent-cancel-f.md#cancel-1) | 取消WantAgent实例。使用callback异步回调。 |
| [cancel](arkts-wantagent-cancel-f.md#cancel-2) | 取消WantAgent实例。使用Promise异步回调。 |
| [equal](arkts-wantagent-equal-f.md#equal-1) | 判断两个WantAgent实例是否相等，以此来判断是否是来自同一应用的相同操作。使用callback异步回调。 |
| [equal](arkts-wantagent-equal-f.md#equal-2) | 判断两个WantAgent实例是否相等，以此来判断是否是来自同一应用的相同操作。使用Promise异步回调。 |
| [getBundleName](arkts-wantagent-getbundlename-f.md#getBundleName-1) | 获取WantAgent实例的Bundle名称。使用callback异步回调。 |
| [getBundleName](arkts-wantagent-getbundlename-f.md#getBundleName-2) | 获取WantAgent实例的Bundle名称。使用Promise异步回调。 |
| [getUid](arkts-wantagent-getuid-f.md#getUid-1) | 获取WantAgent实例的用户ID。使用callback异步回调。 |
| [getUid](arkts-wantagent-getuid-f.md#getUid-2) | 获取WantAgent实例的用户ID。使用Promise异步回调。 |
| <!--DelRow-->[getWant](arkts-wantagent-getwant-f-sys.md#getWant-1) | 获取WantAgent中的Want(callback形式)。 |
| <!--DelRow-->[getWant](arkts-wantagent-getwant-f-sys.md#getWant-2) | 获取WantAgent中的Want(Promise形式)。 |
| [getWantAgent](arkts-wantagent-getwantagent-f.md#getWantAgent-1) | 创建WantAgent。创建失败返回的WantAgent为空值。使用callback异步回调。 |
| [getWantAgent](arkts-wantagent-getwantagent-f.md#getWantAgent-2) | 创建WantAgent。创建失败返回的WantAgent为空值。使用Promise异步回调。 |
| [trigger](arkts-wantagent-trigger-f.md#trigger-1) | 主动激发WantAgent实例。使用callback异步回调。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [CompleteData](arkts-wantagent-completedata-i.md) | 表示主动触发WantAgent返回的数据。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [OperationType](arkts-wantagent-operationtype-e.md) | 表示WantAgent支持的操作类型。 |
| [WantAgentFlags](arkts-wantagent-wantagentflags-e.md) | 表示WantAgent行为控制标志，用于配置WantAgent的创建和触发行为。 |

