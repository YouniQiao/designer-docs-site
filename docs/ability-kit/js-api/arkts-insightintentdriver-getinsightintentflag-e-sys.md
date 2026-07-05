# GetInsightIntentFlag

```TypeScript
enum GetInsightIntentFlag
```

意图信息（[InsightIntentInfo]insightIntentDriver.InsightIntentInfo）的标识，用于 [getAllInsightIntentInfo]insightIntentDriver.getInsightIntentInfoByBundleName、 [getInsightIntentInfoByBundleName]insightIntentDriver.getInsightIntentInfoByBundleName和 [getInsightIntentInfoByIntentName]insightIntentDriver.getInsightIntentInfoByIntentName接口查询意图信息。 > **说明：** > > - 对于使用配置文件开发的意图，通过上述接口查询的全量信息和简要信息完全一致。 > > - 对于使用装饰器开发的意图，通过上述接口查询的全量信息和简要信息存在差别，详见下表。 > > 表1 全量意图信息与简要意图信息差别 > > | 属性 | 全量意图信息是否包含 | 简要意图信息是否包含 | > | -------- | -------- | -------- | > | bundleName | 是 | 是 | > | moduleName | 是 | 是 | > | intentName | 是 | 是 | > | domain | 是 | 否 | > | intentVersion | 是 | 否 | > | displayName | 是 | 是 | > | displayDescription | 是 | 否 | > | schema | 是 | 否 | > | icon | 是 | 否 | > | llmDescription | 是 | 否 | > | keywords | 是 | 否 | > | intentType | 是 | 是 | > | subIntentInfo | 是 | 是 | > | parameters | 是 | 是 | > | entities | 否 | 否 | > | developType<sup>23+</sup> | 是 | 是 | > | subIntentInfoForConfiguration<sup>23+</sup> | 否 | 否 |

**Since:** 20

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## GET_FULL_INSIGHT_INTENT

```TypeScript
GET_FULL_INSIGHT_INTENT = 0x00000001
```

查询[InsightIntentInfo]insightIntentDriver.InsightIntentInfo中的除entities以外的全量意图信息，详见下表。查询entities信息需要使用 GET_ENTITY_INFO。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## GET_SUMMARY_INSIGHT_INTENT

```TypeScript
GET_SUMMARY_INSIGHT_INTENT = 0x00000002
```

查询[InsightIntentInfo]insightIntentDriver.InsightIntentInfo中的简要意图信息，详见下表。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## GET_ENTITY_INFO

```TypeScript
GET_ENTITY_INFO = 0x00000004
```

查询[EntityInfo]insightIntentDriver.EntityInfo的信息，不可单独使用，必选结合GET_FULL_INSIGHT_INTENT或者 GET_SUMMARY_INSIGHT_INTENT使用。例如`GET_FULL_INSIGHT_INTENT | GET_ENTITY_INFO`。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

