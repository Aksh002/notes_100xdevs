import { atom, selector } from "recoil";
import  axios  from "axios";

/*
// Str8 fwd method
export const notifications = atom({
    key: "networkAtom",
    default: {
        network: 4, 
        jobs: 6, 
        messaging: 3, 
        notifications: 3
    }
});
*/

// 
export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key:"networkAtomSelec",
        get: async ()=>{                        // No need to pass get as we aint using get fxn
            await new Promise(r => setTimeout(r,5000))                 // SLeeps the thread for 5 sec
            // THis demonstrates flash is still happening, but the flash is not the values flashin to default, its a white page flash now, data of the whole page renders only after async call is resolved
            const res=await axios.get("http://localhost:3000/notif")
            return res.data;
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.networks + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})