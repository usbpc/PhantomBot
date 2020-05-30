package tv.phantombot.event.pubsub.redemptions;

import tv.phantombot.event.pubsub.PubSubEvent;

public abstract class PubSubRedemptionEvent extends PubSubEvent {
    private final String username;
    private final int cost;
    private final String title;
    private final String rewardUUID;

    /**
     * Abstract constructor.
     *
     * @param {String} username
     * @param {String} creator
     * @param {String} message
     */
    protected PubSubRedemptionEvent(String username, String title, String rewardUUID, int cost) {
        this.username = username;
        this.title = title;
        this.rewardUUID = rewardUUID;
        this.cost = cost;
    }

    /**
     * Method that returns the username of the user redeeming the reward.
     *
     * @return {String} username
     */
    public String getUsername() {
        return this.username;
    }

    /**
     * Method that returns title of the event.
     *
     * @return {String} title
     */
    public String getTitle() {
        return this.title;
    }

    public int getCost() {
        return cost;
    }

    /**
     * Method that returns UUID of the Reward as a String
     *
     * @return {String} rewardUUID
     */
    public String getRewardUUID() {
        return this.rewardUUID;
    }
}
