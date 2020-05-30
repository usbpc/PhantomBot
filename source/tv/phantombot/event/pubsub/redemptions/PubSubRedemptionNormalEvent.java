package tv.phantombot.event.pubsub.redemptions;

public class PubSubRedemptionNormalEvent extends PubSubRedemptionEvent {
    /**
     * Abstract constructor.
     *
     * @param username
     * @param title
     * @param rewardUUID
     * @param cost
     */
    public PubSubRedemptionNormalEvent(String username, String title, String rewardUUID, int cost) {
        super(username, title, rewardUUID, cost);
    }
}
