# DistributedExtensionAbility

The **DistributedExtensionAbility** module provides distributed extension capabilities and lifecycle callbacks for distributed ability creation, destruction, and connection.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

## 导入模块

```TypeScript
import { DistributedExtensionAbility } from '@kit.DistributedServiceKit';
```

## onCollaborate

```TypeScript
onCollaborate(wantParam: Record<string, Object>): AbilityConstant.CollaborateResult
```

Callback invoked to return the collaboration result in multi-device collaboration scenarios.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| wantParam | Record&lt;string, Object> | 是 | Want parameter, which supports only the key "  ohos.extra.param.key.supportCollaborateIndex". The key can be used to obtain the data passed by the caller and  perform corresponding processing. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AbilityConstant.CollaborateResult | Collaboration result, that is, whether the target application accepts the  collaboration request. |

**示例：**

```TypeScript
import { abilityConnectionManager, DistributedExtensionAbility } from '@kit.DistributedServiceKit';
import { AbilityConstant } from '@kit.AbilityKit';

export default class DistributedExtension extends DistributedExtensionAbility {
  onCollaborate(wantParam: Record<string, Object>) {
    console.info(`DistributedExtension onCollabRequest Accept to the result of Ability collaborate`);
    let sessionId = -1;
    const collaborationValues = wantParam["CollaborationValues"] as abilityConnectionManager.CollaborationValues;
    if (collaborationValues == undefined) {
      return sessionId;
    }
    console.info(`onCollab, collaborationValues: ${JSON.stringify(collaborationValues)}`);
    return AbilityConstant.CollaborateResult.ACCEPT;
  }
}

```

## onCreate

```TypeScript
onCreate(want: Want): void
```

Callback invoked to initialize the service logic when a **DistributedExtensionAbility** instance is created.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Want information related to the DistributedExtensionAbility instance, including the ability  name and bundle name. |

**示例：**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { DistributedExtensionAbility } from '@kit.DistributedServiceKit';

export default class DistributedExtension extends DistributedExtensionAbility {
  onCreate(want: Want) {
    console.info(`DistributedExtension Create ok`);
    console.info(`DistributedExtension on Create want: ${JSON.stringify(want)}`);
    console.info(`DistributedExtension Create end`);
  }
}

```

## onDestroy

```TypeScript
onDestroy(): void
```

Callback invoked to clear resources when a **ServiceExtensionAbility** instance is destroyed.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

**示例：**

```TypeScript
import { DistributedExtensionAbility } from '@kit.DistributedServiceKit';

export default class DistributedExtension extends DistributedExtensionAbility {
  onDestroy() {
    console.info('DistributedExtension onDestroy ok');
  }
}

```

## context

```TypeScript
context: DistributedExtensionContext
```

Context of the **DistributedExtension**. This context inherits from **ExtensionContext**.

**类型：** DistributedExtensionContext

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

