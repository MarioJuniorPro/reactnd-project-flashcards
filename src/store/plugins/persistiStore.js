import throttle from 'lodash/throttle'

const persistStore = () => {
    const bottleNeck = throttle((state) => {
        // TODO: persist
        console.tron.log(state)
    }, 2000)
    return {

        init: (expose) => ({
            middleware: store => next => action => {
                // do something here
                bottleNeck(store.getState())
                return next(action)
            }
        })
    }
  }

export default persistStore;