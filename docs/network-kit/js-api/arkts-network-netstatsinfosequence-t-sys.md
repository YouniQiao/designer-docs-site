# NetStatsInfoSequence (System API)

```TypeScript
export type NetStatsInfoSequence = {
    /**
     * Start time for querying traffic.
     *****/
    startTime: number;
    /**
     * End time for querying traffic.
     *****/
    endTime: number;
    /**
     * Detailed information of statistics.
     *****/
    info: NetStatsInfo;
  }[]
```

An {@link NetStatsInfo} array with start time and end time.

**Since:** 12

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Property type:** {
    /**
     * Start time for querying traffic.
     * @type { int }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    startTime: int;
    /**
     * End time for querying traffic.
     * @type { int }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    endTime: int;
    /**
     * Detailed information of statistics.
     * @type { NetStatsInfo }
     * @syscap SystemCapability.Communication.NetManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    info: NetStatsInfo;
  }[]

