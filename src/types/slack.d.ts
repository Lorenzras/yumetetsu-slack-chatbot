export interface InteractionBody {
  payload : string
}

export interface ActionButton {
  action_id: string,
  value: string
}

export interface InteractionValues {
  [BlockId : string] : {
    [ActionId : string] : {
      type: string,
      value?: string,
      selected_options?: {
        text: {
          type: string,
          text: string
        },
        value: string
      }[]
      [T : string] : unknown[]
    }
  }
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
    id: string,
    hash: string,
    callback_id: string,
    private_metadata: string,
    state: {
      values : InteractionValues
    }
  },
  message: {
    [T as string] : string,
    ts: string
  }
}
