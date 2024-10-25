export const getTime = () => {
    const msgTimeHour = new Date().getHours();
    const msgTimeMin = new Date().getMinutes();
    let newMsgTimeHour;
    let newMsgTimeMin;
    if(msgTimeHour < 10){
        newMsgTimeHour = '0'+msgTimeHour;
    } else {
        newMsgTimeHour = msgTimeHour;
    }
    if(msgTimeMin < 10){
        newMsgTimeMin = '0'+msgTimeMin;
    } else {
        newMsgTimeMin = msgTimeMin;
    }
    const msgTime = newMsgTimeHour + ':' + newMsgTimeMin;
    return msgTime;
};