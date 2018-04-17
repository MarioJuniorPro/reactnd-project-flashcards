import throttle from 'lodash/throttle'
import storage from 'utils/storage'

const stateStorage = storage('@Udacity:flashcards:state')

const persistStore = () => {
    const bottleNeck = throttle((state) => {
        console.tron.log('State Persisted')
        // console.tron.log(state)
        stateStorage.setObject(state)
        .catch(err => {
            console.tron.log(err)
          })
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