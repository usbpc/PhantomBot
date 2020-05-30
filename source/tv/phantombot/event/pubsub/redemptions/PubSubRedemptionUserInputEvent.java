package tv.phantombot.event.pubsub.redemptions;

public class PubSubRedemptionUserInputEvent extends PubSubRedemptionEvent {
    final private String userInput;

    /**
     * Abstract constructor.
     *
     * @param username
     * @param title
     * @param rewardUUID
     * @param cost
     */
    public PubSubRedemptionUserInputEvent(String username, String title, String rewardUUID, int cost, String userInput) {
        super(username, title, rewardUUID, cost);
        this.userInput = userInput;
    }

    /**
     * Method that returns the message the user input for the event.
     *
     * @return {String} userInput
     */
    public String getUserInput() {
        return this.userInput;
    }
}
