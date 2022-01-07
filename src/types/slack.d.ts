export interface InteractionBody {
    payload : string
}

export interface ActionButton {
    action_id: string,
    value: string
}

export interface InteractionPayload {
    type: string,
    user: {
        id: string,
        username: string,
        name: string
    },
    container : {
        type: string,
        message_ts: string,
        channel_id: string,
        is_ephemeral: boolean,
    },
    actions : Array<ActionButton>
    trigger_id: string,
    view: {
        callback_id: string,
        private_metadata: string,
    },
    message: {
        [T as string] : string,
        ts: string
    }
}
