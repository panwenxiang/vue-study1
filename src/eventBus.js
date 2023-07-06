let eventList = {}
const eventBus = {
    on(eventName,fn){
        if ( !(eventList[eventName] instanceof Array) ){
            eventList[eventName]=[]
        }
        eventList[eventName].push(fn)
    },
    emit(eventName,...args) {//...用来接收剩余的参数，args是数组
        if (eventList[eventName] instanceof Array){
            eventList[eventName].forEach(fn => {
                fn( ...args)
            })
        }
    },
    off(type, fn) {}
}

export default eventBus