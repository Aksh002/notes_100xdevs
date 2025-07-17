import { createOnRampTransaction } from "../actions/createOnRampTransactions"
// This hook is server side and allows client side to hook into the server and perform an action

export const useOnRampTransaction = async(provider : string , amount : number) =>{
    return await createOnRampTransaction(provider,amount)
}