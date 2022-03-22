/* eslint-disable max-len */

interface PrivateMetaData {
  appId: string,
  recordId: string,
  revision?:string,
  custId?: string,
  channelId?: string,
  messageTs?: string
}

interface InteractionBody {
  payload : string
}

interface ActionButton {
  action_id: string,
  value: string
}

interface InteractionValues {
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

interface InteractionPayload {
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

type SlackActionFn = (actionButton: ActionButton, payload: InteractionPayload) => Promise<any>
